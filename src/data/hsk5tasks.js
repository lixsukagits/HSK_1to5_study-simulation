// HSK 5 - Tugas (任务大纲)
// Total resmi dari PDF: 28 tugas (一 s/d 二十八, hal. 29-36 PDF resmi HSK 5-6)
// Jumlah skill per tugas TIDAK disamakan - dicek satu per satu dari bullet asli PDF.
// Catatan: tugas 1 punya 2 bullet "speaking" terpisah (menjelaskan situasi + menceritakan
// pengalaman), jadi totalnya 5 skill. Tugas 25-28 (topik budaya/sejarah Tiongkok) TIDAK
// punya bullet "menulis" di PDF, jadi hanya 3 skill masing-masing.
// Deviasi skema: menambahkan type 'writing' selain listening/speaking/reading karena
// bullet ke-4 "能写出短文..." konsisten muncul di 24 dari 28 tugas dan merupakan skill
// yang berbeda dari reading; skema asli 3-tipe akan menghilangkan skill ini.

const hsk5Tasks = [
  {
    level: 5,
    id: '5-T01', code: 'W-T01', titleZh: '交流、处理日常事务', titleId: 'Berkomunikasi dan menangani urusan sehari-hari',
    skills: [
      { type: 'listening', textId: 'Memahami pertanyaan dan penjelasan yang cukup rumit tentang pengurusan bisnis (bea cukai, pengiriman, asuransi, tagihan) atau permintaan bantuan (hukum, media, kepolisian, kehidupan sehari-hari).' },
      { type: 'speaking', textId: 'Menjelaskan situasi sendiri dengan cukup lancar, bertanya, dan menyampaikan keinginan meminta bantuan atau bernegosiasi saat menghadapi urusan/masalah yang rumit.' },
      { type: 'speaking', textId: 'Menceritakan pengalaman sendiri terkait pengurusan bisnis atau permintaan bantuan dengan cukup lancar.' },
      { type: 'reading', textId: 'Memahami artikel umum tentang pengalaman pengurusan bisnis/permintaan bantuan, atau aturan dan pemberitahuan umum seperti tagihan atau info asuransi.' },
      { type: 'writing', textId: 'Menulis esai pendek yang menceritakan pengalaman dan informasi terkait di atas.' },
    ],
  },
  {
    level: 5,
    id: '5-T02', code: 'W-T02', titleZh: '谈论餐饮体验', titleId: 'Membahas pengalaman bersantap',
    skills: [
      { type: 'listening', textId: 'Memahami percakapan tentang gaya/jenis restoran, pantangan makanan, saran memilih menu, kebiasaan makan pribadi, cara pembuatan makanan cepat saji, pemilihan bahan, hingga pengalaman kuliner di pasar/pasar malam/jalan pejalan kaki.' },
      { type: 'speaking', textId: 'Berbincang cukup lancar tentang pengalaman, perasaan, dan pandangan seputar topik kuliner tersebut.' },
      { type: 'reading', textId: 'Memahami artikel umum tentang ciri khas restoran, saran memilih menu, kuliner khas, dan pengalaman bersantap di berbagai tempat.' },
      { type: 'writing', textId: 'Menulis esai pendek berisi pengalaman dan perasaan tentang pengalaman bersantap.' },
    ],
  },
  {
    level: 5,
    id: '5-T03', code: 'W-T03', titleZh: '谈论交通出行', titleId: 'Membahas perjalanan dan transportasi',
    skills: [
      { type: 'listening', textId: 'Memahami percakapan tentang penggunaan alat transportasi, pengiriman/penyimpanan barang, perjalanan kendaraan/kapal, serta pengalaman dan perasaan selama perjalanan.' },
      { type: 'speaking', textId: 'Berbincang cukup lancar tentang pengalaman dan perasaan seputar perjalanan/transportasi.' },
      { type: 'reading', textId: 'Memahami artikel umum tentang kondisi transportasi atau pengalaman bepergian.' },
      { type: 'writing', textId: 'Menulis esai pendek yang membagikan pengalaman dan perasaan seputar perjalanan.' },
    ],
  },
  {
    level: 5,
    id: '5-T04', code: 'W-T04', titleZh: '谈论购物体验', titleId: 'Membahas pengalaman berbelanja',
    skills: [
      { type: 'listening', textId: 'Memahami penjelasan penjual tentang pemilihan barang (merek, kegunaan, kualitas, layanan purna-jual) dan aktivitas konsumsi (cara belanja, promosi).' },
      { type: 'speaking', textId: 'Berbincang cukup lancar tentang pemilihan barang dan aktivitas konsumsi tersebut.' },
      { type: 'reading', textId: 'Memahami informasi umum seperti deskripsi produk, buku panduan, iklan promosi, dan pengalaman belanja.' },
      { type: 'writing', textId: 'Menulis esai pendek yang membagikan pengalaman berbelanja.' },
    ],
  },
  {
    level: 5,
    id: '5-T05', code: 'W-T05', titleZh: '谈论医疗健康', titleId: 'Membahas kesehatan dan pengobatan',
    skills: [
      { type: 'listening', textId: 'Memahami pertanyaan dan penjelasan cukup rumit tentang cedera/sakit, konsultasi medis, kesehatan mental, dan pandangan kesehatan, termasuk pertolongan darurat dan pencegahan penyakit.' },
      { type: 'speaking', textId: 'Menceritakan kondisi sendiri terkait hal di atas dengan cukup lancar sambil menyampaikan pandangan.' },
      { type: 'reading', textId: 'Memahami artikel umum tentang pengalaman cedera, tips pertolongan darurat, cara menjaga kesehatan mental, dan pencegahan penyakit.' },
      { type: 'writing', textId: 'Menulis esai pendek yang membagikan pengalaman dan perasaan seputar kesehatan.' },
    ],
  },
  {
    level: 5,
    id: '5-T06', code: 'W-T06', titleZh: '谈论休闲活动', titleId: 'Membahas kegiatan santai',
    skills: [
      { type: 'listening', textId: 'Memahami ungkapan cukup rumit tentang kegiatan santai (olahraga luar ruang, kerajinan tangan, fotografi, liburan, pameran) serta renungan hidup.' },
      { type: 'speaking', textId: 'Menceritakan cara berkegiatan santai dan renungan hidup sendiri dengan cukup lancar.' },
      { type: 'reading', textId: 'Memahami artikel umum yang memperkenalkan kegiatan santai atau renungan hidup.' },
      { type: 'writing', textId: 'Menulis esai pendek tentang cara berkegiatan santai atau perasaan tentang kehidupan.' },
    ],
  },
  {
    level: 5,
    id: '5-T07', code: 'W-T07', titleZh: '沟通、交流社区生活情况', titleId: 'Berkomunikasi tentang kehidupan komunitas/lingkungan tempat tinggal',
    skills: [
      { type: 'listening', textId: 'Memahami percakapan cukup rumit tentang kondisi tempat tinggal, pengelolaan komunitas, fasilitas umum, keamanan, kejadian tak terduga/pelanggaran, hubungan tetangga, layanan komunitas, hingga sewa/jual rumah.' },
      { type: 'speaking', textId: 'Menceritakan dan berkomunikasi dengan cukup lancar tentang hal-hal yang didengar/dialami di lingkungan tempat tinggal.' },
      { type: 'reading', textId: 'Memahami artikel umum atau pengumuman/ketentuan layanan terkait kehidupan komunitas.' },
      { type: 'writing', textId: 'Menulis esai pendek membagikan kondisi komunitas atau email berisi hal yang ingin diketahui/masalah yang dihadapi.' },
    ],
  },
  {
    level: 5,
    id: '5-T08', code: 'W-T08', titleZh: '交流家庭生活', titleId: 'Berbincang tentang kehidupan keluarga',
    skills: [
      { type: 'listening', textId: 'Memahami perbincangan cukup rumit tentang kehidupan rumah tangga, kegiatan keluarga (pernikahan, aktivitas orang tua-anak), serta pandangan/hubungan/kewajiban keluarga.' },
      { type: 'speaking', textId: 'Menceritakan dan berkomunikasi tentang hal di atas yang didengar/dialami sendiri, sambil menyampaikan pandangan.' },
      { type: 'reading', textId: 'Memahami artikel umum yang membahas kehidupan rumah tangga, kegiatan keluarga, atau masalah keluarga.' },
      { type: 'writing', textId: 'Menulis esai pendek membagikan kegiatan keluarga atau pandangan tentang masalah keluarga.' },
    ],
  },
  {
    level: 5,
    id: '5-T09', code: 'W-T09', titleZh: '报告学习情况', titleId: 'Melaporkan kondisi belajar',
    skills: [
      { type: 'listening', textId: 'Memahami pertanyaan/penjelasan cukup rumit dari teman di rapat kelas/forum berbagi pengalaman tentang mata kuliah, pengajaran, pengalaman belajar (menulis, presentasi, eksperimen, tesis, sertifikat) dan kesan belajar.' },
      { type: 'speaking', textId: 'Melaporkan kondisi belajar sendiri dan berdiskusi dengan teman secara cukup lancar sambil menyampaikan pandangan.' },
      { type: 'reading', textId: 'Memahami artikel atau slide presentasi teman tentang kondisi belajar.' },
      { type: 'writing', textId: 'Menulis esai pendek tentang kondisi belajar, seperti pengalaman, rencana, atau capaian belajar.' },
    ],
  },
  {
    level: 5,
    id: '5-T10', code: 'W-T10', titleZh: '分享校园生活的经历、经验', titleId: 'Berbagi pengalaman kehidupan kampus',
    skills: [
      { type: 'listening', textId: 'Memahami pertanyaan/penjelasan cukup rumit dari teman/dosen di forum/acara kampus tentang promosi kegiatan organisasi, pengalaman kampus, jadwal kegiatan, info pelatihan/seminar, urusan kampus, hingga kondisi jurusan.' },
      { type: 'speaking', textId: 'Menceritakan pengalaman kegiatan kampus dan berdiskusi dengan teman secara cukup lancar sambil menyampaikan pandangan.' },
      { type: 'reading', textId: 'Memahami artikel umum atau poster kegiatan tentang pengalaman kehidupan kampus.' },
      { type: 'writing', textId: 'Menulis esai pendek dan membuat poster kegiatan berbagi pengalaman kampus.' },
    ],
  },
  {
    level: 5,
    id: '5-T11', code: 'W-T11', titleZh: '谈论教育情况和问题', titleId: 'Membahas kondisi dan masalah pendidikan',
    skills: [
      { type: 'listening', textId: 'Memahami pertanyaan, penjelasan, dan pandangan cukup rumit tentang pendidikan keluarga, sekolah, sosial, dan vokasi, termasuk pandangan dan masalah pendidikan.' },
      { type: 'speaking', textId: 'Menceritakan pengalaman/pengetahuan sendiri tentang jenis-jenis pendidikan tersebut secara cukup lancar sambil menyampaikan pandangan tentang masalah pendidikan.' },
      { type: 'reading', textId: 'Memahami artikel umum tentang kondisi dan masalah pendidikan tersebut.' },
      { type: 'writing', textId: 'Menulis esai pendek berisi pengalaman dan pandangan tentang kondisi/masalah pendidikan.' },
    ],
  },
  {
    level: 5,
    id: '5-T12', code: 'W-T12', titleZh: '交流工作内容和工作经历', titleId: 'Berbincang tentang isi dan pengalaman kerja',
    skills: [
      { type: 'listening', textId: 'Memahami pertanyaan/penjelasan cukup rumit dari rekan kerja tentang proyek, tugas, dan progres pekerjaan, serta pengalaman magang, resign, pemecatan, hingga pensiun.' },
      { type: 'speaking', textId: 'Menceritakan isi dan pengalaman kerja yang diketahui sendiri secara cukup lancar sambil bertukar pandangan.' },
      { type: 'reading', textId: 'Memahami artikel umum atau ringkasan kerja tentang isi dan pengalaman kerja tersebut.' },
      { type: 'writing', textId: 'Menulis esai pendek tentang isi dan pengalaman kerja diri sendiri atau orang lain sambil menyampaikan pandangan.' },
    ],
  },
  {
    level: 5,
    id: '5-T13', code: 'W-T13', titleZh: '谈论经营与管理情况', titleId: 'Membahas pengelolaan dan manajemen usaha',
    skills: [
      { type: 'listening', textId: 'Memahami pertanyaan/penjelasan cukup rumit dari rekan kerja tentang kerja sama tim dan manajemen karyawan, termasuk ide/proses memulai usaha, pelatihan, perekrutan, struktur karyawan, dan gaji.' },
      { type: 'speaking', textId: 'Menceritakan pengetahuan sendiri tentang kerja sama tim dan manajemen perusahaan secara cukup lancar sambil bertukar pandangan.' },
      { type: 'reading', textId: 'Memahami artikel umum tentang kerja sama tim dan manajemen perusahaan.' },
      { type: 'writing', textId: 'Menulis esai pendek tentang pengalaman kerja sama tim/manajemen karyawan diri sendiri atau orang lain sambil menyampaikan pandangan.' },
    ],
  },
  {
    level: 5,
    id: '5-T14', code: 'W-T14', titleZh: '谈论自然情况', titleId: 'Membahas kondisi alam',
    skills: [
      { type: 'listening', textId: 'Memahami penjelasan teman/pakar/pemandu di seminar sains atau kunjungan museum tentang sumber daya alam, bentang alam (gurun, daratan, sungai), fenomena cuaca ekstrem, dan hewan/tumbuhan.' },
      { type: 'speaking', textId: 'Menjelaskan pengetahuan sendiri tentang kondisi alam tersebut secara cukup lancar.' },
      { type: 'reading', textId: 'Memahami artikel sains populer atau berita umum tentang kondisi alam tersebut.' },
      { type: 'writing', textId: 'Menulis esai pendek yang menjelaskan kondisi alam yang diketahui.' },
    ],
  },
  {
    level: 5,
    id: '5-T15', code: 'W-T15', titleZh: '谈论环境问题', titleId: 'Membahas masalah lingkungan',
    skills: [
      { type: 'listening', textId: 'Memahami berita umum atau perbincangan tentang lingkungan kota dan desa serta pelestarian lingkungan, termasuk dampak aktivitas manusia dan perubahan lingkungan.' },
      { type: 'speaking', textId: 'Menjelaskan pengetahuan sendiri tentang masalah lingkungan tersebut sambil bertukar pandangan.' },
      { type: 'reading', textId: 'Memahami berita atau artikel umum tentang masalah lingkungan tersebut.' },
      { type: 'writing', textId: 'Menulis esai pendek tentang masalah lingkungan yang diketahui sambil menyampaikan pandangan.' },
    ],
  },
  {
    level: 5,
    id: '5-T16', code: 'W-T16', titleZh: '介绍科技产品', titleId: 'Memperkenalkan produk teknologi',
    skills: [
      { type: 'listening', textId: 'Memahami penjelasan umum tentang pengembangan dan penerapan produk teknologi terkait kehidupan sehari-hari, seperti robot, siaran langsung daring, dan produk pintar.' },
      { type: 'speaking', textId: 'Menjelaskan pengetahuan sendiri tentang pengembangan/penerapan produk teknologi tersebut sambil bertukar pandangan.' },
      { type: 'reading', textId: 'Memahami berita atau artikel umum tentang pengembangan/penerapan produk teknologi tersebut.' },
      { type: 'writing', textId: 'Menulis esai pendek tentang produk teknologi terkait kehidupan sehari-hari yang diketahui.' },
    ],
  },
  {
    level: 5,
    id: '5-T17', code: 'W-T17', titleZh: '介绍科学知识', titleId: 'Memperkenalkan pengetahuan ilmiah',
    skills: [
      { type: 'listening', textId: 'Memahami penjelasan tentang pengetahuan sains populer dan hasil riset, termasuk pengetahuan umum berbagai bidang serta proses dan kesimpulan eksperimen ilmiah.' },
      { type: 'speaking', textId: 'Menjelaskan pengetahuan sendiri tentang pengetahuan sains populer dan hasil riset tersebut sambil bertukar pandangan.' },
      { type: 'reading', textId: 'Memahami artikel umum tentang pengetahuan sains populer dan hasil riset tersebut.' },
      { type: 'writing', textId: 'Menulis esai pendek tentang pengetahuan sains populer/hasil riset terkait kehidupan sehari-hari yang diketahui.' },
    ],
  },
  {
    level: 5,
    id: '5-T18', code: 'W-T18', titleZh: '介绍中国概况', titleId: 'Memperkenalkan gambaran umum Tiongkok',
    skills: [
      { type: 'listening', textId: 'Memahami penjelasan umum tentang pembagian administratif, kondisi kependudukan, dan ciri khas zaman di Tiongkok, termasuk gambaran etnis dan tingkat pendidikan penduduk.' },
      { type: 'speaking', textId: 'Menjelaskan pengetahuan sendiri tentang gambaran umum Tiongkok tersebut secara cukup lancar.' },
      { type: 'reading', textId: 'Memahami isi artikel umum tentang gambaran umum Tiongkok tersebut.' },
      { type: 'writing', textId: 'Menulis esai pendek tentang gambaran umum Tiongkok yang diketahui sambil menyampaikan pandangan.' },
    ],
  },
  {
    level: 5,
    id: '5-T19', code: 'W-T19', titleZh: '谈论经济现象', titleId: 'Membahas fenomena ekonomi',
    skills: [
      { type: 'listening', textId: 'Memahami perbincangan/berita tentang aktivitas bisnis dan perkembangan ekonomi, seperti pameran dan kerja sama bisnis, kondisi industri, dan tren ekonomi ke depan.' },
      { type: 'speaking', textId: 'Menjelaskan pengetahuan sendiri tentang fenomena ekonomi tersebut sambil bertukar pandangan.' },
      { type: 'reading', textId: 'Memahami berita atau artikel umum tentang fenomena ekonomi tersebut.' },
      { type: 'writing', textId: 'Menulis esai pendek tentang fenomena ekonomi yang diketahui sambil menyampaikan pandangan.' },
    ],
  },
  {
    level: 5,
    id: '5-T20', code: 'W-T20', titleZh: '谈论社会现象', titleId: 'Membahas fenomena sosial',
    skills: [
      { type: 'listening', textId: 'Memahami perbincangan/berita tentang perkembangan kesejahteraan rakyat, hal-hal baru, pandangan sosial, dan pembangunan infrastruktur, termasuk isu ketenagakerjaan dan kependudukan.' },
      { type: 'speaking', textId: 'Menjelaskan pengetahuan sendiri tentang fenomena sosial tersebut sambil bertukar pandangan.' },
      { type: 'reading', textId: 'Memahami berita atau artikel umum tentang fenomena sosial tersebut.' },
      { type: 'writing', textId: 'Menulis esai pendek tentang fenomena sosial yang diketahui sambil menyampaikan pandangan.' },
    ],
  },
  {
    level: 5,
    id: '5-T21', code: 'W-T21', titleZh: '谈论文艺形式、常识、作品', titleId: 'Membahas bentuk, pengetahuan, dan karya seni-budaya',
    skills: [
      { type: 'listening', textId: 'Memahami perbincangan cukup rumit tentang bentuk seni (novel, puisi, fotografi, drama, film, game digital), pengetahuan seni, pencipta beserta karyanya, dan kegiatan seni seperti klub buku/pameran/festival film.' },
      { type: 'speaking', textId: 'Menjelaskan pengetahuan sendiri tentang bentuk/karya seni tersebut sambil bertukar pandangan.' },
      { type: 'reading', textId: 'Memahami artikel umum tentang bentuk, pengetahuan, dan karya seni tersebut.' },
      { type: 'writing', textId: 'Menulis esai pendek tentang kegiatan atau karya seni yang diketahui.' },
    ],
  },
  {
    level: 5,
    id: '5-T22', code: 'W-T22', titleZh: '谈论体育项目及赛事', titleId: 'Membahas cabang olahraga dan ajang kompetisi',
    skills: [
      { type: 'listening', textId: 'Memahami penjelasan cukup rumit tentang cabang olahraga (lompat tinggi, lompat jauh), kondisi ajang kompetisi (penjurian, upacara pembukaan/penutupan), dan kisah tokoh olahraga.' },
      { type: 'speaking', textId: 'Menjelaskan pengetahuan sendiri tentang cabang olahraga, ajang, dan tokoh olahraga sambil berdiskusi.' },
      { type: 'reading', textId: 'Memahami artikel umum tentang cabang olahraga, ajang kompetisi, dan kisah tokoh olahraga.' },
      { type: 'writing', textId: 'Menulis esai pendek tentang cabang olahraga, ajang, atau kisah tokoh olahraga yang diketahui.' },
    ],
  },
  {
    level: 5,
    id: '5-T23', code: 'W-T23', titleZh: '谈论国际交往事件', titleId: 'Membahas peristiwa hubungan internasional',
    skills: [
      { type: 'listening', textId: 'Memahami penjelasan/berita cukup rumit tentang peristiwa hubungan persahabatan internasional, seperti kisah persahabatan, kunjungan resmi, dan kasus kerja sama internasional.' },
      { type: 'speaking', textId: 'Menjelaskan pengetahuan sendiri tentang peristiwa hubungan internasional tersebut sambil berdiskusi.' },
      { type: 'reading', textId: 'Memahami berita atau kisah umum tentang peristiwa hubungan internasional tersebut.' },
      { type: 'writing', textId: 'Menulis esai pendek tentang kisah hubungan persahabatan internasional yang diketahui.' },
    ],
  },
  {
    level: 5,
    id: '5-T24', code: 'W-T24', titleZh: '介绍中国语言文字', titleId: 'Memperkenalkan bahasa dan aksara Tiongkok',
    skills: [
      { type: 'listening', textId: 'Memahami penjelasan teman/pembicara di seminar tentang peribahasa rakyat, idiom, kata mutiara, dan fenomena bahasa Mandarin, termasuk makna dan kisah di baliknya, serta ciri fonologi, kosakata, tata bahasa, dan aksara.' },
      { type: 'speaking', textId: 'Menjelaskan peribahasa, idiom, kata mutiara, dan fenomena bahasa yang umum secara cukup lancar.' },
      { type: 'reading', textId: 'Memahami artikel umum yang menjelaskan/mengulas peribahasa, idiom, kata mutiara, atau fenomena bahasa tersebut.' },
      { type: 'writing', textId: 'Menulis esai pendek tentang peribahasa/idiom yang diketahui atau pemahaman tentang ciri bahasa dan aksara Tiongkok.' },
    ],
  },
  {
    level: 5,
    id: '5-T25', code: 'W-T25', titleZh: '介绍中国古代民俗传统、人文景观', titleId: 'Memperkenalkan tradisi rakyat kuno dan lanskap budaya Tiongkok',
    skills: [
      { type: 'listening', textId: 'Memahami penjelasan teman/guru/pembicara Tiongkok di acara/kelas budaya tentang tradisi rakyat dan lanskap budaya, seperti kuliner daerah, hari raya tradisional, legenda rakyat, kehidupan zaman kuno, dan tempat bersejarah.' },
      { type: 'speaking', textId: 'Menjelaskan hal-hal utama tentang tradisi rakyat kuno tersebut secara cukup lancar sambil bertukar pemahaman dan kesan.' },
      { type: 'reading', textId: 'Memahami isi utama artikel umum tentang budaya rakyat tradisional kuno tersebut.' },
    ],
  },
  {
    level: 5,
    id: '5-T26', code: 'W-T26', titleZh: '介绍中国传统思想与艺术', titleId: 'Memperkenalkan pemikiran dan seni tradisional Tiongkok',
    skills: [
      { type: 'listening', textId: 'Memahami penjelasan teman/guru/pembicara Tiongkok tentang pemikiran dan seni tradisional, seperti pemikiran, kata mutiara, dan karya tokoh kuno, serta kaligrafi, lukisan, musik rakyat, opera, bela diri, dan kerajinan tangan.' },
      { type: 'speaking', textId: 'Menjelaskan hal-hal utama tentang pemikiran dan seni tradisional tersebut secara cukup lancar sambil bertukar pemahaman dan kesan.' },
      { type: 'reading', textId: 'Memahami isi utama artikel umum tentang pemikiran dan seni tradisional tersebut.' },
    ],
  },
  {
    level: 5,
    id: '5-T27', code: 'W-T27', titleZh: '介绍中国历史', titleId: 'Memperkenalkan sejarah Tiongkok',
    skills: [
      { type: 'listening', textId: 'Memahami penjelasan teman/guru/pembicara di kelas/seminar budaya tentang tokoh dan peristiwa sejarah Tiongkok, termasuk sebab-akibat peristiwa serta latar belakang tokoh sejarah.' },
      { type: 'speaking', textId: 'Menceritakan beberapa tokoh dan peristiwa sejarah kuno Tiongkok (misalnya Dinasti Tang, Dinasti Song, pembangunan Tembok Besar) secara cukup lancar sambil bertukar pemahaman dan kesan.' },
      { type: 'reading', textId: 'Memahami isi utama artikel umum tentang tokoh dan peristiwa sejarah Tiongkok tersebut.' },
    ],
  },
  {
    level: 5,
    id: '5-T28', code: 'W-T28', titleZh: '介绍中国古代科技', titleId: 'Memperkenalkan teknologi kuno Tiongkok',
    skills: [
      { type: 'listening', textId: 'Memahami penjelasan teman/guru/pembicara tentang pencapaian teknologi kuno Tiongkok, konsep sains kuno, dan kisah ilmuwan kuno, seperti pencapaian pengobatan tradisional, teknologi, dan pertanian.' },
      { type: 'speaking', textId: 'Menceritakan pencapaian teknologi kuno, konsep sains kuno, dan kisah ilmuwan kuno tersebut secara cukup lancar sambil bertukar pemahaman dan kesan.' },
      { type: 'reading', textId: 'Memahami isi utama artikel umum tentang pencapaian teknologi kuno, konsep sains kuno, dan kisah ilmuwan kuno tersebut.' },
    ],
  },
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { hsk5Tasks };
}