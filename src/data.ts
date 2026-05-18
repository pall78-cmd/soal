export interface QuestionPG {
  id: string;
  text: string;
  options: Record<string, string>;
  correctAnswer: string;
}

export interface QuestionEssay {
  id: string;
  text: string;
  keywords: string[];
}

export const multipleChoiceQuestions: QuestionPG[] = [
  {
    id: "01",
    text: "Manakah di bawah ini yang paling tepat menggambarkan definisi hukum menurut para ahli hukum secara umum?",
    options: {
      A: "Aturan tertulis yang dibuat tanpa sanksi nyata bagi pelanggarnya",
      B: "Peraturan hidup yang bersifat memaksa, mengatur tata tertib, dan dibuat oleh badan resmi berwajib",
      C: "Kesepakatan tidak tertulis yang hanya berlaku untuk kelompok masyarakat adat",
      D: "Norma sosial yang sanksinya diserahkan sepenuhnya kepada kesadaran masing-masing individu",
    },
    correctAnswer: "B",
  },
  {
    id: "02",
    text: "Sistem hukum yang berlaku di suatu negara pada dasarnya merupakan...",
    options: {
      A: "Kumpulan aturan yang terpisah-pisah dan tidak saling berhubungan",
      B: "Satu kesatuan utuh yang terdiri dari unsur-unsur hukum yang saling berkaitan untuk mencapai tujuan negara",
      C: "Aturan-aturan internasional yang dipaksakan masuk ke dalam hukum nasional",
      D: "Doktrin para ahli hukum yang belum disahkan oleh lembaga legislatif",
    },
    correctAnswer: "B",
  },
  {
    id: "03",
    text: "Agar berbagai peraturan di suatu negara dapat membentuk suatu \"sistem hukum\" yang baik, syarat utama yang harus dipenuhi adalah...",
    options: {
      A: "Peraturan harus sering diubah mengikuti tren media sosial",
      B: "Antara peraturan yang satu dengan peraturan lainnya tidak boleh saling bertentangan dan harus konsisten",
      C: "Semua pasal harus bersumber dari hukum negara asing",
      D: "Sanksi hukum harus diserahkan kepada keputusan massa di jalanan",
    },
    correctAnswer: "B",
  },
  {
    id: "04",
    text: "Di bawah ini yang merupakan perwujudan dari fungsi, tugas, dan tujuan utama dibentuknya hukum dalam masyarakat adalah...",
    options: {
      A: "Membatasi hak warga negara agar ruang gerak mereka menjadi sempit",
      B: "Menjamin kepastian hukum, menegakkan keadilan, serta menciptakan ketertiban dan kedamaian",
      C: "Memberikan keistimewaan dan kekebalan hukum bagi pejabat publik",
      D: "Menghapus semua perbedaan kelas ekonomi di masyarakat secara paksa",
    },
    correctAnswer: "B",
  },
  {
    id: "05",
    text: "Selain menciptakan ketertiban, tugas hukum juga harus mampu memberikan \"kemanfaatan\". Arti dari fungsi kemanfaatan hukum di sini adalah...",
    options: {
      A: "Hukum harus bisa mendatangkan kebahagiaan dan keuntungan bagi sebanyak-banyaknya orang",
      B: "Hukum hanya bermanfaat untuk menambah kas atau pendapatan finansial negara",
      C: "Hukum digunakan untuk membantu pihak tertentu memenangkan persaingan bisnis",
      D: "Aturan hukum wajib mementingkan keuntungan golongan penguasa terlebih dahulu",
    },
    correctAnswer: "A",
  },
  {
    id: "06",
    text: "Perhatikan pernyataan berikut! Manakah yang termasuk ke dalam ciri-ciri utama dari hukum?",
    options: {
      A: "Adanya perintah atau larangan yang sifatnya opsional (boleh dilanggar)",
      B: "Berisi petunjuk yang hanya berlaku bagi masyarakat yang belum dewasa",
      C: "Peraturan mengenai tingkah laku manusia, terdapat perintah/larangan, dan sanksinya tegas",
      D: "Dibuat secara spontan oleh masyarakat saat terjadi suatu pelanggaran",
    },
    correctAnswer: "C",
  },
  {
    id: "07",
    text: "Ciri utama yang membedakan penegakan norma hukum dengan norma kesusilaan di dalam kehidupan bermasyarakat adalah...",
    options: {
      A: "Norma hukum sanksinya langsung dirasakan berupa rasa penyesalan batin",
      B: "Norma hukum sanksinya tegas, nyata, dan dapat dipaksakan oleh aparat negara",
      C: "Norma hukum bersumber dari bisikan hati nurani individu masing-masing",
      D: "Norma hukum tidak memerlukan alat kelengkapan negara seperti polisi atau hakim",
    },
    correctAnswer: "B",
  },
  {
    id: "08",
    text: "Contoh sikap nyata warga negara yang mencerminkan upaya menjaga harmoni dalam keberagaman suku, agama, dan ras di Indonesia adalah...",
    options: {
      A: "Hanya mau berteman dan bekerja sama dengan orang yang satu daerah asal",
      B: "Mengembangkan sikap etnosentrisme yang menganggap budaya sendiri paling hebat",
      C: "Mengembangkan sikap toleransi, empati, dan saling menghormati di tengah perbedaan",
      D: "Menuntut semua kelompok minoritas untuk mengikuti seluruh adat kelompok mayoritas",
    },
    correctAnswer: "C",
  },
  {
    id: "09",
    text: "Arti hukum yang sebenarnya di dalam tatanan bernegara bukan sekadar deretan pasal di atas kertas, melainkan...",
    options: {
      A: "Alat bagi penguasa untuk menekan hak-hak oposisi secara legal",
      B: "Instrumen hidup yang dijalankan secara adil guna melindungi hak-hak seluruh warga tanpa tebang pilih",
      C: "Aturan baku yang tidak boleh diubah atau direvisi sama sekali sepanjang masa",
      D: "Dokumen formal yang hanya perlu dipahami oleh penegak hukum saja",
    },
    correctAnswer: "B",
  },
  {
    id: "10",
    text: "Sebagai konsekuensi dari status bahwa negara Indonesia merupakan negara hukum, maka segala tatanan kekuasaan pemerintahan harus...",
    options: {
      A: "Berdasarkan atas hukum yang berlaku, bukan didasarkan atas kekuasaan belaka",
      B: "Tunduk pada keputusan organisasi atau lembaga politik internasional internasional",
      C: "Diatur sepenuhnya berdasarkan instruksi langsung dari presiden tanpa undang-undang",
      D: "Mengikuti kehendak kelompok massa yang memiliki jumlah anggota paling banyak",
    },
    correctAnswer: "A",
  },
  {
    id: "11",
    text: "Di dalam sistem tata urutan perundang-undangan di Indonesia, yang berkedudukan sebagai hukum dasar tertulis tertinggi nasional adalah...",
    options: {
      A: "Peraturan Pemerintah (PP)",
      B: "Peraturan Daerah (Perda) Provinsi",
      C: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945",
      D: "Kitab Undang-Undang Hukum Pidana (KUHP)",
    },
    correctAnswer: "C",
  },
  {
    id: "12",
    text: "Seseorang yang sudah divonis bersalah oleh hakim dan berstatus sebagai terpidana di lembaga pemasyarakatan tetap memiliki hak konstitusional yang dilindungi hukum, yaitu...",
    options: {
      A: "Hak untuk bebas keluar masuk penjara kapan saja tanpa izin",
      B: "Hak untuk mendapatkan perlakuan secara manusiawi, remisi hukum, serta pembinaan diri",
      C: "Hak mutlak untuk menolak menjalankan seluruh sanksi hukuman yang dijatuhkan",
      D: "Hak untuk menuntut balik para saksi tanpa melalui prosedur sidang ulang",
    },
    correctAnswer: "B",
  },
  {
    id: "13",
    text: "Bentuk kontribusi paling tepat bagi generasi muda (seperti anak SMK) dalam menggunakan literasi digital untuk menjaga harmoni sosial di masyarakat adalah...",
    options: {
      A: "Ikut meramaikan kolom komentar dengan saling adu argumen berbau SARA",
      B: "Membuat dan menyebarkan konten kreatif yang mengampanyekan toleransi serta menolak hoaks",
      C: "Membagikan berita sensasional yang belum tervalidasi kebenarannya biar cepat viral",
      D: "Bersikap apatis dan tidak peduli terhadap segala isu sosial yang terjadi di sekitarnya",
    },
    correctAnswer: "B",
  },
  {
    id: "14",
    text: "Sila dalam Pancasila yang secara esensial berfungsi sebagai payung pelindung persatuan dan paling berkaitan langsung dengan perwujudan harmoni sosial di tengah kemajemukan bangsa adalah...",
    options: {
      A: "Sila pertama",
      B: "Sila kedua",
      C: "Sila ketiga",
      D: "Sila keempat",
    },
    correctAnswer: "C",
  },
  {
    id: "15",
    text: "Doktrin dalam ranah hukum formil diartikan sebagai sumber hukum yang berasal dari...",
    options: {
      A: "Perjanjian tertulis yang dibuat oleh dua negara atau lebih",
      B: "Pendapat atau pandangan para ahli hukum terkemuka yang memiliki pengaruh besar",
      C: "Putusan hakim terdahulu yang dijadikan acuan dalam perkara serupa",
      D: "Kebiasaan masyarakat adat yang dipelihara turun-temurun",
    },
    correctAnswer: "B",
  },
  {
    id: "16",
    text: "Apabila suatu undang-undang dibuat dengan merujuk pada keyakinan hidup, nilai sosial, dan kesadaran hukum yang tumbuh di dalam masyarakat, maka undang-undang tersebut bersumber dari...",
    options: {
      A: "Sumber hukum formil",
      B: "Sumber hukum materiil",
      C: "Yurisprudensi internasional",
      D: "Traktat bilateral",
    },
    correctAnswer: "B",
  },
  {
    id: "17",
    text: "Mengapa prinsip keadilan sosial (Sila ke-5 Pancasila) dinilai sangat krusial dan mendasar dalam menjaga harmoni di tengah keberagaman?",
    options: {
      A: "Karena ketimpangan sosial dan ekonomi yang tajam merupakan akar utama pemicu konflik horizontal",
      B: "Karena prinsip keadilan sosial melarang pembentukan komunitas adat daerah",
      C: "Karena keadilan sosial hanya fokus pada pembagian bantuan finansial merata tanpa aturan",
      D: "Karena keadilan sosial mengharuskan peleburan seluruh unsur kebudayaan lokal menjadi satu",
    },
    correctAnswer: "A",
  },
  {
    id: "18",
    text: "Hukum memiliki sifat mengatur dan memaksa. Pernyataan di bawah ini yang paling tepat menggambarkan sifat memaksa dari hukum adalah...",
    options: {
      A: "Hukum dapat diabaikan jika situasi di lapangan dinilai kurang mendukung",
      B: "Hukum memiliki sanksi tegas dan sanksi tersebut mengikat wajib dilaksanakan bagi siapa saja yang melanggar",
      C: "Hukum memaksa masyarakat untuk menganut satu ideologi kelompok mayoritas saja",
      D: "Sifat hukum memaksa hanya berlaku bagi masyarakat kelas bawah",
    },
    correctAnswer: "B",
  },
  {
    id: "19",
    text: "Kondisi harmoni sosial di dalam kehidupan bertanah air dapat dicapai secara berkelanjutan apabila...",
    options: {
      A: "Masyarakat sepakat untuk menutup diri dari pengaruh budaya luar",
      B: "Setiap elemen masyarakat saling menghormati peran, fungsi, dan perbedaan satu sama lain dalam keselarasan",
      C: "Pemerintah melarang kegiatan diskusi publik yang membahas keberagaman",
      D: "Semua warga negara diwajibkan menggunakan satu bahasa daerah yang sama",
    },
    correctAnswer: "B",
  },
  {
    id: "20",
    text: "Penggolongan hukum berdasarkan isinya dibagi menjadi dua ranah utama, yaitu hukum publik dan hukum privat. Contoh kasus yang masuk ranah hukum privat adalah...",
    options: {
      A: "Kasus pencurian kendaraan bermotor milik warga",
      B: "Pelanggaran rambu lalu lintas jalan raya oleh pengemudi",
      C: "Sengketa pembagian harta warisan atau perjanjian sewa menyewa rumah antarwarga",
      D: "Kasus korupsi dana anggaran pembangunan daerah",
    },
    correctAnswer: "C",
  }
];

export const essayQuestions: QuestionEssay[] = [
  {
    id: "21",
    text: "Sebutkan dan jelaskan secara singkat macam-macam sumber hukum formil yang berlaku dalam tata hukum di Indonesia!",
    keywords: ["undang-undang", "kebiasaan", "yurisprudensi", "traktat", "doktrin"]
  },
  {
    id: "22",
    text: "Kekayaan budaya Indonesia salah satunya tecermin dari keberagaman senjata tradisional. Sebutkan 4 nama senjata tradisional beserta daerah asalnya secara tepat!",
    keywords: ["rencong", "aceh", "mandau", "kalimantan", "badik", "sulawesi", "keris", "jawa", "golok", "kujang", "celurit", "madura", "parang"]
  },
  {
    id: "23",
    text: "Mengapa yurisprudensi dan traktat dapat diakui sebagai sumber hukum formil di sebuah negara? Jelaskan letak kekuatan mengikatnya!",
    keywords: ["putusan hakim", "sebelumnya", "perjanjian", "antar negara", "internasional", "mengikat", "disahkan"]
  },
  {
    id: "24",
    text: "Jelaskan apa nilai utama dari diterapkannya pendidikan multikultural bagi para siswa di lingkungan sekolah yang heterogen!",
    keywords: ["toleransi", "menghargai", "perbedaan", "keberagaman", "saling", "empati", "rukun", "harmoni"]
  },
  {
    id: "25",
    text: "Mengapa suatu hukum harus memiliki sifat mengikat dan memaksa bagi seluruh elemen masyarakat tanpa terkecuali? Analisis dampak yang akan terjadi jika hukum kehilangan kedua sifat tersebut!",
    keywords: ["ketertiban", "kacau", "dilanggar", "adil", "aturan", "sanksi", "main hakim sendiri", "tidak aman"]
  }
];
