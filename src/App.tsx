import React, { useState, useEffect } from 'react';
import { CheckCircle, History as HistoryIcon, ArrowLeft, BookOpen } from 'lucide-react';
import { multipleChoiceQuestions as questions, essayQuestions } from './data';

type ViewState = 'quiz' | 'success' | 'history';

interface QuizSubmission {
  id: string;
  name: string;
  email: string;
  score: number;
  maxScore: number;
  essayScore: number;
  maxEssayScore: number;
  date: string;
  answers: Record<string, string>;
  essayAnswers: Record<string, string>;
  essayGrading: Record<string, { isCorrect: boolean; feedback: string }>;
}

export default function App() {
  const [view, setView] = useState<ViewState>('quiz');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [essayAnswers, setEssayAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [history, setHistory] = useState<QuizSubmission[]>([]);
  const [currentSubmission, setCurrentSubmission] = useState<QuizSubmission | null>(null);

  // Load history from Local Storage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('quiz_history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleOptionChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleEssayChange = (questionId: string, value: string) => {
    setEssayAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleClearOption = (questionId: string) => {
    setAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  };

  const handleClearEssay = (questionId: string) => {
    setEssayAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  };

  const isAllPGAnswered = questions.every((q) => answers[q.id]);
  const isAllEssayAnswered = essayQuestions.every((q) => essayAnswers[q.id] && essayAnswers[q.id].trim().length > 0);
  const isAllAnswered = isAllPGAnswered && isAllEssayAnswered && name.trim() !== '' && email.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Calculate Score
    let correctCount = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    // Calculate Essay Score
    let essayCorrectCount = 0;
    const essayGrading: Record<string, { isCorrect: boolean; feedback: string }> = {};

    essayQuestions.forEach((q) => {
      const answer = essayAnswers[q.id] || '';
      const lowerAnswer = answer.toLowerCase();
      let matchCount = 0;
      for (const kw of q.keywords) {
        if (lowerAnswer.includes(kw.toLowerCase())) {
          matchCount++;
        }
      }
      
      // Auto grade leniently: Needs at least 2 matching words (or 1 if only 1 keyword exists)
      const isCorrect = matchCount >= Math.min(2, q.keywords.length);
      if (isCorrect) {
        essayCorrectCount++;
      }
      
      essayGrading[q.id] = {
        isCorrect,
        feedback: isCorrect 
          ? "Jawaban sudah cukup baik karena memuat kata kunci." 
          : `Jawaban kurang lengkap. (Kata kunci: ${q.keywords.join(', ')})`,
      };
    });

    const newSubmission: QuizSubmission = {
      id: Date.now().toString(),
      name,
      email,
      score: correctCount,
      maxScore: questions.length,
      essayScore: essayCorrectCount,
      maxEssayScore: essayQuestions.length,
      date: new Date().toISOString(),
      answers,
      essayAnswers,
      essayGrading,
    };

    // Save to Local Storage (Offline App approach)
    const updatedHistory = [newSubmission, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('quiz_history', JSON.stringify(updatedHistory));
    setCurrentSubmission(newSubmission);

    setTimeout(() => {
      setIsSubmitting(false);
      setView('success');
      setName('');
      setEmail('');
      setAnswers({});
      setEssayAnswers({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800); // simulate slight delay
  };

  const resetQuiz = () => {
    setName('');
    setEmail('');
    setAnswers({});
    setEssayAnswers({});
    setCurrentSubmission(null);
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-100 font-sans h-screen flex flex-col overflow-hidden">
      {/* Header Section */}
      <header className="bg-blue-600 px-6 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center shadow-lg gap-4 z-10 shrink-0">
        <div className="flex items-center space-x-4">
          <div className="bg-white p-2 rounded-xl shrink-0">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg sm:text-xl leading-tight">Evaluasi SAT Genap PPKn XI</h1>
            <p className="text-blue-100 text-xs font-medium uppercase tracking-wider">SMK Negeri Teknologi Indonesia</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto overflow-x-auto hide-scrollbar">
          <button 
            onClick={() => setView('quiz')}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-bold transition-colors text-sm shrink-0 ${view === 'quiz' ? 'bg-blue-500 text-white shadow-inner border border-blue-400' : 'bg-blue-700/50 text-blue-100 hover:bg-blue-500 border border-transparent'}`}
          >
            <BookOpen size={16} /> Lembar Ujian
          </button>
          <button 
            onClick={() => setView('history')}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-bold transition-colors text-sm shrink-0 ${view === 'history' ? 'bg-blue-500 text-white shadow-inner border border-blue-400' : 'bg-blue-700/50 text-blue-100 hover:bg-blue-500 border border-transparent'}`}
          >
            <HistoryIcon size={16} /> Riwayat
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden p-4 sm:p-6 gap-6 max-w-7xl mx-auto w-full">
        <section className="flex-grow flex flex-col overflow-y-auto space-y-6 pb-24 pr-2" style={{ scrollbarWidth: 'none' }}>
           {/* VIEW: QUIZ FORM */}
           {view === 'quiz' && (
             <form onSubmit={handleSubmit} className="space-y-6">
                {/* Identity Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-10">
                   <h2 className="text-2xl font-bold text-slate-800 leading-snug mb-6">Identitas Peserta</h2>
                   <div className="space-y-4">
                     <div>
                       <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Nama Lengkap *</label>
                       <input 
                         type="text" 
                         required 
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:outline-none bg-slate-50 transition-all font-medium text-slate-800" 
                       />
                     </div>
                     <div>
                       <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Alamat Email / Akun Sekolah *</label>
                       <input 
                         type="email" 
                         required 
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:outline-none bg-slate-50 transition-all font-medium text-slate-800" 
                       />
                     </div>
                   </div>
                </div>

                {/* Questions Cards */}
                <div className="pt-2 pb-4">
                  <h3 className="text-xl font-bold text-slate-900 border-b pb-2 border-slate-200">Bagian I: Pilihan Ganda</h3>
                </div>
                {questions.map((q, index) => (
                  <div key={q.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-10 relative">
                    <div className="absolute top-4 sm:top-8 left-6 sm:left-10 bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                      Pertanyaan {index + 1} dari {questions.length}
                    </div>
                    
                    <div className="mt-10 sm:mt-12 space-y-6 sm:space-y-8">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
                          {q.text}
                        </h2>
                        {answers[q.id] && (
                          <button
                            type="button"
                            onClick={() => handleClearOption(q.id)}
                            className="text-xs px-3 py-1 font-bold bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-100 transition-colors shrink-0 border border-rose-200"
                          >
                            Hapus Jawaban
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {Object.entries(q.options).map(([letter, text]) => {
                          const isSelected = answers[q.id] === letter;
                          return (
                            <label key={letter} className={`flex items-center p-4 rounded-2xl border-2 group transition-all text-left cursor-pointer ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-500'}`}>
                              <input 
                                type="radio" 
                                name={`Soal_${q.id}`} 
                                value={letter}
                                required
                                checked={isSelected}
                                onChange={() => handleOptionChange(q.id, letter)}
                                className="sr-only" 
                              />
                              <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold mr-4 shrink-0 transition-colors ${isSelected ? 'bg-blue-600 text-white' : 'bg-white border border-slate-200 text-slate-500 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500'}`}>
                                 {letter}
                              </span>
                              <span className={isSelected ? 'text-blue-900 font-semibold flex-1' : 'text-slate-700 font-medium flex-1'}>
                                 {text}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Essay Questions Cards */}
                <div className="pt-6 pb-2">
                   <h3 className="text-xl font-bold text-slate-900 border-b pb-2 border-slate-200">Bagian II: Uraian</h3>
                </div>
                <div className="space-y-6">
                  {essayQuestions.map((q, index) => (
                    <div key={q.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-10 relative">
                      <div className="absolute top-4 sm:top-8 left-6 sm:left-10 bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                        Uraian {index + 1}
                      </div>
                      
                      <div className="mt-10 sm:mt-12 space-y-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <h2 className="text-lg font-bold text-slate-800 leading-snug flex-1">
                            {q.text}
                          </h2>
                          {essayAnswers[q.id] && essayAnswers[q.id].trim().length > 0 && (
                            <button
                              type="button"
                              onClick={() => handleClearEssay(q.id)}
                              className="text-xs px-3 py-1 font-bold bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-100 transition-colors shrink-0 border border-rose-200"
                            >
                              Hapus Jawaban
                            </button>
                          )}
                        </div>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tulis jawaban esai kamu di sini..."
                          value={essayAnswers[q.id] || ''}
                          onChange={(e) => handleEssayChange(q.id, e.target.value)}
                          className="w-full p-4 border-2 border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 focus:outline-none bg-slate-50 transition-all font-medium text-slate-800 text-sm resize-y"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Submit Container */}
                <div className="pt-4 pb-10">
                  {!isAllAnswered && (
                     <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mb-4 text-center shadow-sm">
                        <p className="text-amber-800 font-medium text-sm">Masih ada soal yang belum dijawab atau identitas belum lengkap. Silakan lengkapi semua sebelum mengirim.</p>
                     </div>
                  )}
                  <button 
                    type="submit" 
                    disabled={isSubmitting || !isAllAnswered}
                    className="w-full px-10 py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 shadow-md shadow-blue-200 transition-all disabled:opacity-70 disabled:bg-slate-400 disabled:shadow-none disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sedang Menyimpan...' : 'Kirim Jawaban Kuis'}
                  </button>
                </div>
             </form>
           )}

            {/* VIEW: SUCCESS SCREEN */}
           {view === 'success' && currentSubmission && (
              <div className="space-y-6">
                <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200 text-center space-y-6">
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16 mb-6">
                    <div>
                      <div className="text-emerald-500 font-bold mb-2 uppercase tracking-wider text-sm">Nilai Pilihan Ganda</div>
                      <div className="text-5xl font-black text-slate-800">
                         {currentSubmission.score} <span className="text-3xl text-slate-400">/ {currentSubmission.maxScore}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-blue-500 font-bold mb-2 uppercase tracking-wider text-sm">Nilai Uraian</div>
                      <div className="text-5xl font-black text-slate-800">
                         {currentSubmission.essayScore || 0} <span className="text-3xl text-slate-400">/ {currentSubmission.maxEssayScore || essayQuestions.length}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-500 max-w-md mx-auto text-lg font-medium mb-6">
                      Terima kasih <strong className="text-slate-700">{currentSubmission.name}</strong>, evaluasi selesai. Berikut detail jawabanmu.
                  </p>
                  
                  <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl max-w-md mx-auto flex items-start gap-4 text-left shadow-sm">
                    <div className="bg-emerald-100 p-3 rounded-xl text-emerald-700 shrink-0">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-900 text-lg">Uraian Diperiksa Otomatis</h4>
                      <p className="text-sm text-emerald-800 mt-1 leading-relaxed">
                        Sistem telah mengevaluasi jawaban uraian kamu secara otomatis berdasarkan kecocokan kata kunci.
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                     <button 
                       type="button"
                       onClick={() => setView('history')}
                       className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors border-2 border-slate-200"
                     >
                       Lihat Riwayat Lain
                     </button>
                     <button 
                       type="button"
                       onClick={resetQuiz}
                       className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-md shadow-blue-200"
                     >
                       Mulai Ujian Baru
                     </button>
                  </div>
                </div>

                {/* Detailed Feedback per Question */}
                <div className="space-y-6">
                  {questions.map((q, index) => {
                    const userAnswer = currentSubmission.answers[q.id];
                    const isCorrect = userAnswer === q.correctAnswer;
                    
                    return (
                      <div key={q.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-10 relative">
                        <div className={`absolute top-4 sm:top-8 left-6 sm:left-10 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                          Soal {index + 1} - {isCorrect ? 'Benar' : 'Salah'}
                        </div>
                        
                        <div className="mt-10 sm:mt-12 space-y-6 sm:space-y-8">
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
                            {q.text}
                          </h2>
                          
                          <div className="grid grid-cols-1 gap-4">
                            {Object.entries(q.options).map(([letter, text]) => {
                              const isUserSel = userAnswer === letter;
                              const isActualCorrect = q.correctAnswer === letter;
                              
                              let optionClass = 'border-slate-100 bg-slate-50 opacity-70';
                              let badgeClass = 'bg-slate-200 text-slate-500';
                              let icon = null;

                              if (isActualCorrect) {
                                 optionClass = 'border-emerald-500 bg-emerald-50';
                                 badgeClass = 'bg-emerald-500 text-white border-emerald-500';
                                 icon = <CheckCircle size={20} className="text-emerald-500 ml-auto flex-shrink-0" />;
                              } else if (isUserSel && !isActualCorrect) {
                                 optionClass = 'border-rose-400 bg-rose-50';
                                 badgeClass = 'bg-rose-500 text-white border-rose-500';
                                 icon = <span className="ml-auto text-rose-500 font-bold flex-shrink-0">✗</span>;
                              }

                              return (
                                <div key={letter} className={`flex items-center p-4 rounded-2xl border-2 transition-all text-left ${optionClass}`}>
                                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold mr-4 shrink-0 transition-colors border ${badgeClass}`}>
                                     {letter}
                                  </span>
                                  <span className={`font-semibold flex-1 ${isActualCorrect ? 'text-emerald-900' : (isUserSel ? 'text-rose-900' : 'text-slate-600')}`}>
                                     {text}
                                  </span>
                                  {icon}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Essay Detailed Feedback */}
                  {essayQuestions.map((q, index) => {
                    const userAnswer = currentSubmission?.essayAnswers?.[q.id] || '';
                    const grading = currentSubmission?.essayGrading?.[q.id];
                    const isCorrect = grading ? grading.isCorrect : false;

                    return (
                      <div key={q.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-10 relative">
                        <div className={`absolute top-4 sm:top-8 left-6 sm:left-10 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                          Uraian {index + 1} - {isCorrect ? 'Benar' : 'Kurang Lengkap'}
                        </div>
                        
                        <div className="mt-10 sm:mt-12 space-y-6">
                          <h2 className="text-lg font-bold text-slate-800 leading-snug">
                            {q.text}
                          </h2>
                          <div className={`p-4 rounded-2xl border-2 ${isCorrect ? 'border-emerald-200 bg-emerald-50' : 'border-rose-200 bg-rose-50'}`}>
                             <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Jawaban Tersimpan:</div>
                             <p className="text-slate-800 font-medium">{userAnswer || <span className="italic text-slate-400">Tidak ada jawaban</span>}</p>
                             {grading && (
                               <div className="mt-4 pt-4 border-t border-slate-200/60">
                                 <p className={`text-sm font-semibold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                                   {grading.feedback}
                                 </p>
                               </div>
                             )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
           )}

           {/* VIEW: HISTORY SCREEN */}
           {view === 'history' && (
             <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200 space-y-8">
               <div className="flex items-center gap-4 mb-2">
                 <button onClick={() => setView('quiz')} className="p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-500 transition-colors">
                   <ArrowLeft size={24} />
                 </button>
                 <div>
                   <h2 className="text-2xl font-bold text-slate-800">Riwayat Hasil Kuis</h2>
                   <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">Disimpan secara offline (Local Storage)</p>
                 </div>
               </div>

               {history.length === 0 ? (
                 <div className="text-center py-16 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                   <HistoryIcon size={48} className="mx-auto text-slate-300 mb-4" />
                   <p className="text-slate-500 font-medium text-lg">Belum ada riwayat pengerjaan kuis.</p>
                 </div>
               ) : (
                 <div className="space-y-6">
                   {history.map((record) => (
                     <div key={record.id} className="border-2 border-slate-100 rounded-2xl p-6 hover:border-blue-100 hover:bg-blue-50/30 transition-colors group">
                       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                         <div>
                           <h3 className="font-bold text-xl text-slate-800">{record.name}</h3>
                           <p className="text-slate-500 font-medium">{record.email}</p>
                         </div>
                         <div className="text-left sm:text-right flex flex-col sm:items-end">
                           <div className="flex gap-2 mb-2">
                             <span className="inline-block bg-emerald-100 text-emerald-800 font-black px-4 py-2 rounded-xl text-lg sm:text-xl">
                               PG: {record.score}/{record.maxScore}
                             </span>
                             <span className="inline-block bg-blue-100 text-blue-800 font-black px-4 py-2 rounded-xl text-lg sm:text-xl">
                               Uraian: {record.essayScore || 0}/{record.maxEssayScore || essayQuestions.length}
                             </span>
                           </div>
                           <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                             {new Date(record.date).toLocaleString('id-ID')}
                           </div>
                         </div>
                       </div>
                       
                       <div className="mt-6 pt-6 border-t-2 border-slate-100">
                         <details>
                           <summary className="text-sm font-bold text-blue-600 cursor-pointer list-none hover:text-blue-700 flex items-center gap-2 select-none uppercase tracking-wider">
                             <span>Lihat Detail Jawaban</span>
                           </summary>
                           <div className="mt-6 space-y-4">
                             {questions.map((q, idx) => {
                               const userAnswer = record.answers[q.id];
                               const isCorrect = userAnswer === q.correctAnswer;
                               return (
                                 <div key={q.id} className="text-sm p-4 rounded-xl border border-slate-100 bg-slate-50">
                                   <span className="font-bold text-slate-700 text-base">{idx + 1}. {q.text}</span>
                                   <div className="mt-3 flex flex-wrap items-center gap-2">
                                     <span className={`font-bold px-3 py-1.5 rounded-lg ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                                       Jawab: {userAnswer || '-'} {isCorrect ? '✓' : '✗'}
                                     </span>
                                     {!isCorrect && (
                                       <span className="text-slate-500 font-medium border border-slate-200 px-3 py-1.5 rounded-lg bg-white">
                                         Benar: {q.correctAnswer}
                                       </span>
                                     )}
                                   </div>
                                 </div>
                               );
                             })}

                             {/* Essay History Display */}
                             {essayQuestions.map((q, idx) => {
                               const userAnswer = record.essayAnswers?.[q.id];
                               const grading = record.essayGrading?.[q.id];
                               const isCorrect = grading ? grading.isCorrect : false;

                               return (
                                 <div key={q.id} className={`text-sm p-4 rounded-xl border-2 ${isCorrect ? 'border-emerald-200 bg-emerald-50' : 'border-rose-200 bg-rose-50'}`}>
                                   <div className="flex justify-between items-center gap-2 mb-2">
                                     <span className="font-bold text-slate-700 text-base">Uraian {idx + 1}. {q.text}</span>
                                     <span className={`px-2 py-1 text-xs font-bold rounded-lg shrink-0 ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                                       {isCorrect ? 'Benar' : 'Kurang Lengkap'}
                                     </span>
                                   </div>
                                   <div className="mt-3 bg-white p-3 rounded-lg border border-slate-100 text-slate-800 font-medium">
                                     {userAnswer || <span className="italic text-slate-400">Tidak ada jawaban</span>}
                                   </div>
                                   {grading && (
                                     <div className={`mt-2 text-sm font-semibold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                                       {grading.feedback}
                                     </div>
                                   )}
                                 </div>
                               );
                             })}
                           </div>
                         </details>
                       </div>
                     </div>
                   ))}
                 </div>
               )}
             </div>
           )}
        </section>

        {/* SIDEBAR */}
        <aside className="w-72 flex-col space-y-6 shrink-0 hidden lg:flex overflow-y-auto pb-8" style={{ scrollbarWidth: 'none' }}>
           {view === 'quiz' && (
             <>
                {/* Status Ujian */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Status Ujian</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-2xl text-center border border-emerald-100">
                      <p className="text-emerald-600 text-3xl font-black">{Object.keys(answers).length}</p>
                      <p className="text-emerald-800 text-[10px] font-bold uppercase mt-1 tracking-wider">Terjawab</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                      <p className="text-slate-600 text-3xl font-black">{questions.length - Object.keys(answers).length}</p>
                      <p className="text-slate-500 text-[10px] font-bold uppercase mt-1 tracking-wider">Belum</p>
                    </div>
                  </div>
                </div>

                {/* Navigasi Soal */}
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex-1 max-h-[600px] flex flex-col">
                  <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4 shrink-0">Navigasi Pilihan Ganda</h3>
                  <div className="grid grid-cols-4 gap-3 overflow-y-auto pr-2 mb-6" style={{ scrollbarWidth: 'none' }}>
                    {questions.map((q, i) => {
                      const answered = !!answers[q.id];
                      return (
                        <div key={q.id} className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm border-b-4 ${answered ? 'bg-emerald-500 text-white border-emerald-700 shadow-sm' : 'bg-slate-100 text-slate-400 border-slate-300'}`}>
                          {i + 1}
                        </div>
                      );
                    })}
                  </div>

                  <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4 shrink-0">Navigasi Uraian</h3>
                  <div className="grid grid-cols-4 gap-3 overflow-y-auto pr-2" style={{ scrollbarWidth: 'none' }}>
                    {essayQuestions.map((q, i) => {
                      const answered = !!essayAnswers[q.id] && essayAnswers[q.id].trim().length > 0;
                      return (
                        <div key={q.id} className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm border-b-4 ${answered ? 'bg-emerald-500 text-white border-emerald-700 shadow-sm' : 'bg-slate-100 text-slate-400 border-slate-300'}`}>
                          U{i + 1}
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-3 shrink-0">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-sm"></div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Sudah Dijawab</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full bg-slate-200"></div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Belum Dijawab</span>
                    </div>
                  </div>
                </div>
             </>
           )}
           {view === 'success' && currentSubmission && (
             <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <h1 className="text-9xl font-black">{currentSubmission.score}</h1>
                </div>
                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6 relative z-10">Laporan Realtime</h3>
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="bg-emerald-50 p-4 rounded-2xl text-center border border-emerald-100">
                    <p className="text-emerald-600 text-3xl font-black">{currentSubmission.score}</p>
                    <p className="text-emerald-800 text-[10px] font-bold uppercase mt-1 tracking-wider">Benar</p>
                  </div>
                  <div className="bg-rose-50 p-4 rounded-2xl text-center border border-rose-100">
                    <p className="text-rose-600 text-3xl font-black">{currentSubmission.maxScore - currentSubmission.score}</p>
                    <p className="text-rose-800 text-[10px] font-bold uppercase mt-1 tracking-wider">Salah</p>
                  </div>
                </div>
             </div>
           )}
           {view === 'history' && (
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
                 <p className="text-slate-500 font-medium text-sm">Mulai ulang evaluasi dari awal jika perlu.</p>
                 <button onClick={resetQuiz} className="mt-4 w-full px-4 py-3 bg-blue-50 text-blue-700 font-bold rounded-xl hover:bg-blue-100 transition-colors">
                   Mulai Kuis Baru
                 </button>
              </div>
           )}
        </aside>
      </main>
    </div>
  );
}
