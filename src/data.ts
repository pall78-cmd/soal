export interface QuestionPG {
  id: string;
  text: string;
  options: Record<string, string>;
  correctAnswer: string;
  rationale: string;
}

export interface QuestionEssay {
  id: string;
  title: string;
  text: string;
  keywords: string[];
  referenceAnswer: string;
}

export const multipleChoiceQuestions: QuestionPG[] = [
  {
    id: "01",
    text: "Perintah teologis dalam Surah Al-Isra ayat 23-24 secara spesifik melarang anak untuk mengucapkan kata 'ah' atau membentak orang tua. Secara substantif, larangan ini menegaskan bahwa...",
    options: {
      A: "Komunikasi verbal kepada orang tua harus dijaga pada tingkat kesopanan tertinggi, bahkan pada ekspresi kekesalan terkecil.",
      B: "Anak tidak diperbolehkan memiliki perbedaan pendapat sama sekali dengan orang tua.",
      C: "Kewajiban anak hanya terbatas pada menjaga ucapan, bukan pada tindakan fisik.",
      D: "Orang tua memiliki otoritas mutlak untuk menentukan segala aspek kehidupan anak tanpa pengecualian."
    },
    correctAnswer: "A",
    rationale: "Larangan kata 'ah' menunjukkan bahwa standar etika verbal anak tidak boleh mencederai perasaan orang tua sedikit pun."
  },
  {
    id: "02",
    text: "Ditinjau dari norma sosial, perilaku menghormati orang tua dianggap sebagai indikator utama dari...",
    options: {
      A: "Kapasitas intelektual dan pencapaian akademik anak.",
      B: "Kualitas moral, kesopanan, dan karakter individu dalam struktur masyarakat.",
      C: "Tingkat stratifikasi dan kelas sosial ekonomi keluarga.",
      D: "Kemampuan anak dalam mengadopsi budaya modern yang dinamis."
    },
    correctAnswer: "B",
    rationale: "Masyarakat menilai integritas moral seseorang salah satunya dari cara ia memperlakukan lingkaran sosial terdekatnya, yaitu keluarga."
  },
  {
    id: "03",
    text: "Dari perspektif psikologi perkembangan, pembentukan karakter anak yang baik sangat dipengaruhi oleh relasi yang harmonis di rumah. Mengapa demikian?",
    options: {
      A: "Karena rumah yang harmonis menghilangkan kebutuhan anak untuk berinteraksi dengan dunia luar.",
      B: "Sebab interaksi positif dengan orang tua menjadi cetak biru (blueprint) emosional dan sosial anak dalam membangun hubungan di masa depan.",
      C: "Karena keharmonisan rumah tangga secara otomatis menjamin anak bebas dari gangguan kecemasan.",
      D: "Sebab orang tua yang harmonis cenderung tidak pernah menegur atau mendisiplinkan anak mereka."
    },
    correctAnswer: "B",
    rationale: "Lingkungan domestik yang aman melatih regulasi emosi dan kemampuan berempati yang menetap hingga dewasa."
  },
  {
    id: "04",
    text: "Seorang anak secara rutin membantu membersihkan rumah dan mencuci piring tanpa diminta. Tindakan ini merefleksikan cara menghormati orang tua dalam ranah...",
    options: {
      A: "Kontribusi fisik untuk meringankan beban domestik orang tua.",
      B: "Kepatuhan doktrinal terhadap aturan tertulis yang kaku.",
      C: "Apresiasi finansial tidak langsung kepada kepala keluarga.",
      D: "Upaya pengkondisian agar mendapatkan imbalan materi."
    },
    correctAnswer: "A",
    rationale: "Tindakan motorik langsung di rumah tangga berfungsi membagi beban kerja fisik demi kesejahteraan bersama."
  },
  {
    id: "05",
    text: "Mendengarkan nasihat orang tua dengan saksama, meskipun anak memiliki pandangan yang berbeda, menunjukkan bentuk penghormatan yang melibatkan proses...",
    options: {
      A: "Penundukan diri secara pasif tanpa hak menjawab.",
      B: "Regulasi emosi dan kepatuhan mental yang kritis.",
      C: "Abaikan terhadap logika demi menjaga kedamaian semu.",
      D: "Formalitas interaksi untuk menghindari hukuman fisik."
    },
    correctAnswer: "B",
    rationale: "Anak menahan ego untuk tidak memotong pembicaraan, merefleksikan kematangan emosional dan penghargaan terhadap pengalaman orang tua."
  },
  {
    id: "06",
    text: "Mengapa tindakan sederhana seperti mendoakan orang tua setiap hari dikategorikan sebagai aspek penting dalam birrul walidain?",
    options: {
      A: "Karena doa merupakan satu-satunya indikator bahwa seorang anak telah berbakti.",
      B: "Sebab doa merefleksikan ikatan spiritual yang mendalam dan harapan tulus akan keselamatan orang tua melampaui batas materi.",
      C: "Karena doa dapat menggantikan seluruh kewajiban fisik anak di rumah.",
      D: "Sebab mendoakan orang tua secara otomatis menghapus semua kesalahan masa lalu anak."
    },
    correctAnswer: "B",
    rationale: "Doa melatih jiwa anak untuk selalu terhubung secara transendental dengan kesejahteraan orang tua."
  },
  {
    id: "07",
    text: "Ketika orang tua telah meninggal dunia, manakah bentuk transformasi bakti anak yang berpindah ke ranah metafisika/spiritual?",
    options: {
      A: "Menjaga kebersihan rumah peninggalan almarhum.",
      B: "Mendoakan ampunan dan mengalirkan pahala amal sholeh untuk mereka.",
      C: "Mengurus pembagian harta warisan secara adil.",
      D: "Menyimpan foto-foto lama di tempat yang aman."
    },
    correctAnswer: "B",
    rationale: "Bakti spiritual melintasi batas kematian melalui jalur transendental yang diyakini dalam nilai keagamaan."
  },
  {
    id: "08",
    text: "Ziarah ke kubur orang tua dan membersihkan makamnya memiliki esensi psikologis dan sosial bagi anak yang ditinggalkan, yaitu...",
    options: {
      A: "Sebagai sarana katarsis emosional, merawat memori, dan refleksi atas mortalitas diri.",
      B: "Upaya formal untuk pamer bakti kepada kerabat yang melihat.",
      C: "Metode untuk meminta petunjuk arah masa depan dari almarhum.",
      D: "Langkah wajib untuk memastikan harta warisan tidak bermasalah."
    },
    correctAnswer: "A",
    rationale: "Ziarah membantu proses berduka (griefing process) menjadi lebih sehat melalui tindakan penghormatan fisik pada peristirahatan terakhir."
  },
  {
    id: "09",
    text: "Mengamalkan wasiat dan menunaikan hutang orang tua yang wafat merupakan bentuk implementasi bakti yang menyentuh ranah...",
    options: {
      A: "Estetika domestik.",
      B: "Kewajiban moral, sosial, dan akuntabilitas hukum.",
      C: "Kreativitas finansial mandiri.",
      D: "Regulasi emosional internal."
    },
    correctAnswer: "B",
    rationale: "Utang dan wasiat melibatkan hak orang lain di masyarakat yang harus diselesaikan agar nama baik almarhum tetap bersih secara hukum dan moral."
  },
  {
    id: "10",
    text: "Dalam skenario kritis di mana orang tua memberikan nasihat atau perintah yang secara objektif keliru atau melanggar prinsip kebenaran, tindakan anak yang paling logis adalah...",
    options: {
      A: "Menolak perintah tersebut secara tegas dengan konfrontasi terbuka agar mereka sadar.",
      B: "Menuruti perintah demi asas kepatuhan mutlak tanpa memedulikan risiko.",
      C: "Menolak esensi perintahnya secara substantif namun tetap menjaga diksi dan cara penyampaian yang santun.",
      D: "Pura-pura setuju di depan mereka namun mengabaikannya secara diam-diam tanpa penjelasan."
    },
    correctAnswer: "C",
    rationale: "Menjaga kebenaran objektif harus diseimbangkan dengan cara berkomunikasi yang tidak merendahkan martabat orang tua."
  },
  {
    id: "11",
    text: "Konsep 'Birrul Walidain' secara etimologis berakar dari bahasa Arab. Arti substantif dari kata 'Al-Birr' dalam konteks hubungan keluarga adalah...",
    options: {
      A: "Ketaatan mekanis tanpa proses berpikir.",
      B: "Kebaikan yang luas, tulus, dan mencakup aspek kebajikan moral tingkat tinggi.",
      C: "Pemberian materi atau hadiah secara berkala.",
      D: "Rasa takut akan konsekuensi hukuman dari figur otoritas."
    },
    correctAnswer: "B",
    rationale: "'Al-Birr' bukan sekadar berbuat baik biasa, melainkan puncak kebajikan yang didasari ketulusan mendalam."
  },
  {
    id: "12",
    text: "Jika seorang anak menolak membantu pekerjaan rumah dengan alasan sedang sibuk bermain game, dari sudut pandang psikologi sosial ia sedang mengalami...",
    options: {
      A: "Disregulasi empati dan kegagalan manajemen prioritas egoistik.",
      B: "Strategi adaptasi kognitif yang sehat terhadap stres akademik.",
      C: "Perkembangan kemandirian personal yang optimal.",
      D: "Indikasi tingginya kapasitas fokus pada satu objek."
    },
    correctAnswer: "A",
    rationale: "Penolakan membantu demi hiburan pribadi menunjukkan dominasi dorongan kesenangan instan (instant gratification) di atas tanggung jawab empati keluarga."
  }
];

export const essayQuestions: QuestionEssay[] = [
  {
    id: "21",
    title: "Integrasi Tiga Pilar Etika",
    text: "Kisi-kisi bimbingan konseling memetakan tiga alasan utama kewajiban menghormati orang tua: Teologis (agama), Sosial (norma), dan Psikologis (karakter). Analisis bagaimana ketiga pilar ini saling berkelindan dan memperkuat satu sama lain. Apa konsekuensi logis pada kepribadian seorang remaja jika salah satu pilar tersebut diabaikan dalam pemahaman baktinya?",
    keywords: ["teologis", "sosial", "psikologis", "karakter", "norma", "agama", "moral", "kepribadian"],
    referenceAnswer: "Tiga pilar ini saling berkaitan karena aspek teologis memberikan fondasi hukum, aspek sosial memberikan ruang implementasi dalam norma kelompok, dan aspek psikologis membentuk struktur karakter internal remaja."
  },
  {
    id: "22",
    title: "Dilema Kepatuhan Kritis pada Keluarga Disfungsional",
    text: "Menghormati orang tua tidak berarti menganut ketaatan buta (blind obedience). Jika dalam sebuah konseling ditemukan kasus di mana orang tua secara konstan memberikan nasihat yang toksik, destruktif bagi kesehatan mental anak, atau melanggar nilai kebenaran objektif, formulasikan langkah resolusi konflik yang paling rasional. Bagaimana anak dapat mempertahankan batas kesehatan mentalnya (personal boundaries) namun di saat yang sama tetap menjaga koridor etika birrul walidain tanpa terkesan durhaka?",
    keywords: ["batasan", "boundaries", "toksik", "kritis", "santun", "etika", "komunikasi", "rasional"],
    referenceAnswer: "Anak dapat membangun batasan personal yang sehat secara rasional dengan cara mengomunikasikan penolakan terhadap hal destruktif secara santun tanpa harus melakukan konfrontasi fisik atau verbal yang kasar."
  },
  {
    id: "23",
    title: "Kontinuitas Bakti Melampaui Batas Eksistensi",
    text: "Kematian mengubah dimensi hubungan antara anak dan orang tua dari interaksi fisik-duniawi menjadi interaksi spiritual dan hukum-sosial (melalui doa, wasiat, dan utang). Jelaskan mengapa penyelesaian kewajiban material seperti hutang dan pengamalan wasiat dikategorikan sebagai bentuk penghormatan tertinggi pasca-kehidupan. Hubungkan analisis Anda dengan konsep akuntabilitas moral seorang anak terhadap kehormatan nama baik almarhum orang tuanya di masyarakat.",
    keywords: ["wasiat", "hutang", "spiritual", "akuntabilitas", "moral", "reputasi", "tanggung jawab", "masyarakat"],
    referenceAnswer: "Penyelesaian hutang dan wasiat adalah wujud akuntabilitas moral anak untuk menjaga integritas serta nama baik orang tua di lingkungan masyarakat setelah mereka wafat."
  }
];
