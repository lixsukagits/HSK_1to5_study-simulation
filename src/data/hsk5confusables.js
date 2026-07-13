// HSK 5 - Kata/Karakter yang Gampang Ketuker (Confusables)
// Total: 11 grup, 28 item kata
// Setiap vocabId merujuk ke id yang ada di hsk5.js (sudah divalidasi otomatis).
// Struktur: { id, title, items: [{ hanzi, vocabId, note }], explanation, examples: [{ zh, pinyin, id }], level }

const hsk5Confusables = [
  {
    id: 'c5-01',
    title: '报道 vs 报到: Bunyi Sama Persis, Makna Beda Total',
    items: [
      { hanzi: '报道', vocabId: '5-022', note: 'melaporkan (berita); laporan pers — dipakai wartawan/media' },
      { hanzi: '报到', vocabId: '5-021', note: 'lapor diri / check-in — dipakai saat mendaftar ke sekolah/kantor/acara' },
    ],
    explanation: 'Keduanya dibaca persis sama (bàodào) sehingga sering salah tulis satu sama lain. 报道 dipakai untuk kegiatan media memberitakan sesuatu, sedangkan 报到 dipakai saat seseorang melapor kehadirannya di suatu tempat, misalnya hari pertama kuliah atau kerja.',
    examples: [
      { zh: '记者报道了这次比赛的结果。', pinyin: 'Jìzhě bàodàole zhè cì bǐsài de jiéguǒ.', id: 'Wartawan melaporkan hasil pertandingan ini.' },
      { zh: '新生今天要去学校报到。', pinyin: 'Xīnshēng jīntiān yào qù xuéxiào bàodào.', id: 'Siswa baru hari ini harus lapor diri ke sekolah.' },
    ],
    level: 5,
  },
  {
    id: 'c5-02',
    title: '反应 vs 反映: Bunyi Sama, Arti Beda',
    items: [
      { hanzi: '反应', vocabId: '5-338', note: 'reaksi/respons — tanggapan spontan tubuh, perasaan, atau situasi' },
      { hanzi: '反映', vocabId: '5-339', note: 'mencerminkan/melaporkan — menyampaikan kondisi atau pendapat ke pihak lain' },
    ],
    explanation: '反应 dan 反映 sama-sama dibaca fǎnyìng, tetapi 反应 berarti "reaksi" (respons spontan terhadap sesuatu), sedangkan 反映 berarti "mencerminkan" atau "melaporkan/menyampaikan" sesuatu kepada orang lain, sering dipakai dalam konteks resmi seperti melaporkan masalah ke atasan.',
    examples: [
      { zh: '他吃了药以后没有任何反应。', pinyin: 'Tā chīle yào yǐhòu méiyǒu rènhé fǎnyìng.', id: 'Setelah minum obat, dia tidak mengalami reaksi apa pun.' },
      { zh: '这份报告反映了公司目前的问题。', pinyin: 'Zhè fèn bàogào fǎnyìngle gōngsī mùqián de wèntí.', id: 'Laporan ini mencerminkan masalah perusahaan saat ini.' },
    ],
    level: 5,
  },
  {
    id: 'c5-03',
    title: '违反 vs 违法: Melanggar Aturan vs Melanggar Hukum',
    items: [
      { hanzi: '违反', vocabId: '5-1188', note: 'melanggar aturan/perjanjian/kode etik secara umum' },
      { hanzi: '违法', vocabId: '5-1187', note: 'melanggar hukum negara — konsekuensinya bisa pidana' },
    ],
    explanation: '违反 dipakai untuk pelanggaran aturan secara umum (peraturan sekolah, kontrak, kode etik), sedangkan 违法 khusus untuk pelanggaran hukum negara. Semua yang 违法 pasti juga 违反 hukum, tapi tidak semua yang 违反 itu berarti 违法.',
    examples: [
      { zh: '他违反了公司的规定，被扣了工资。', pinyin: 'Tā wéifǎnle gōngsī de guīdìng, bèi kòule gōngzī.', id: 'Dia melanggar peraturan perusahaan, gajinya dipotong.' },
      { zh: '酒后开车是违法行为。', pinyin: 'Jiǔhòu kāichē shì wéifǎ xíngwéi.', id: 'Mengemudi setelah minum alkohol adalah tindakan melanggar hukum.' },
    ],
    level: 5,
  },
  {
    id: 'c5-04',
    title: '处于 vs 属于: Berada dalam Kondisi vs Termasuk Golongan',
    items: [
      { hanzi: '处于', vocabId: '5-192', note: 'berada dalam suatu kondisi/situasi/tahap tertentu' },
      { hanzi: '属于', vocabId: '5-1076', note: 'termasuk/tergolong dalam suatu kategori atau kepemilikan' },
    ],
    explanation: '处于 dipakai untuk menjelaskan keadaan atau tahap yang sedang dialami (mis. 处于困难时期), sedangkan 属于 dipakai untuk menyatakan kepemilikan atau keanggotaan suatu kategori (mis. 属于我的; 属于发展中国家).',
    examples: [
      { zh: '这个国家目前处于经济困难时期。', pinyin: 'Zhège guójiā mùqián chǔyú jīngjì kùnnán shíqī.', id: 'Negara ini saat ini berada dalam masa kesulitan ekonomi.' },
      { zh: '这本书属于图书馆，不是我的。', pinyin: 'Zhè běn shū shǔyú túshūguǎn, bùshì wǒ de.', id: 'Buku ini milik perpustakaan, bukan punya saya.' },
    ],
    level: 5,
  },
  {
    id: 'c5-05',
    title: '采取 vs 采用: Mengambil Tindakan vs Mengadopsi Metode',
    items: [
      { hanzi: '采取', vocabId: '5-086', note: 'mengambil tindakan/langkah/sikap' },
      { hanzi: '采用', vocabId: '5-088', note: 'mengadopsi/menggunakan metode, teknologi, bahan, atau usulan' },
    ],
    explanation: '采取 umumnya diikuti objek berupa tindakan, langkah, atau sikap (采取措施, 采取行动), sedangkan 采用 umumnya diikuti objek berupa metode, teknologi, bahan, atau usulan yang dipilih untuk dipakai (采用新技术, 采用建议).',
    examples: [
      { zh: '政府采取了一系列措施来解决问题。', pinyin: 'Zhèngfǔ cǎiqǔle yī xìliè cuòshī lái jiějué wèntí.', id: 'Pemerintah mengambil serangkaian langkah untuk menyelesaikan masalah.' },
      { zh: '这家工厂采用了最新的生产技术。', pinyin: 'Zhè jiā gōngchǎng cǎiyòngle zuìxīn de shēngchǎn jìshù.', id: 'Pabrik ini mengadopsi teknologi produksi terbaru.' },
    ],
    level: 5,
  },
  {
    id: 'c5-06',
    title: '保存 vs 保留: Menyimpan Fisik vs Mempertahankan Hal Abstrak',
    items: [
      { hanzi: '保存', vocabId: '5-020', note: 'menyimpan/mengarsipkan data atau benda agar tidak rusak/hilang' },
      { hanzi: '保留', vocabId: '5-029', note: 'mempertahankan/menyisakan hak, pendapat, atau tempat — lebih abstrak' },
    ],
    explanation: '保存 lebih ke tindakan fisik menyimpan sesuatu agar tetap ada dan tidak rusak (menyimpan file, makanan, dokumen), sedangkan 保留 lebih ke mempertahankan sesuatu yang abstrak seperti hak, pendapat, atau kesempatan.',
    examples: [
      { zh: '请把这份文件保存到电脑里。', pinyin: 'Qǐng bǎ zhè fèn wénjiàn bǎocún dào diànnǎo lǐ.', id: 'Tolong simpan dokumen ini di komputer.' },
      { zh: '我对这个问题保留自己的意见。', pinyin: 'Wǒ duì zhège wèntí bǎoliú zìjǐ de yìjiàn.', id: 'Saya tetap mempertahankan pendapat saya sendiri soal masalah ini.' },
    ],
    level: 5,
  },
  {
    id: 'c5-07',
    title: '时期 vs 时代: Periode Spesifik vs Era Besar',
    items: [
      { hanzi: '时期', vocabId: '5-1021', note: 'periode/tahap tertentu dalam suatu proses, relatif lebih spesifik' },
      { hanzi: '时代', vocabId: '5-1008', note: 'era/zaman besar dalam sejarah, cakupannya lebih luas dan panjang' },
    ],
    explanation: '时期 dipakai untuk periode atau tahap tertentu yang relatif spesifik (mis. 青春期这个时期, 困难时期), sedangkan 时代 dipakai untuk era besar dalam sejarah atau kehidupan yang cakupannya lebih luas (互联网时代, 学生时代).',
    examples: [
      { zh: '青春期是人生一个重要的时期。', pinyin: 'Qīngchūnqī shì rénshēng yī gè zhòngyào de shíqī.', id: 'Masa pubertas adalah salah satu periode penting dalam hidup.' },
      { zh: '我们生活在一个信息爆炸的时代。', pinyin: 'Wǒmen shēnghuó zài yī gè xìnxī bàozhà de shídài.', id: 'Kita hidup di era ledakan informasi.' },
    ],
    level: 5,
  },
  {
    id: 'c5-08',
    title: '逐渐/逐步 vs 陆续/纷纷: Empat Kata "Bertahap" yang Gampang Ketuker',
    items: [
      { hanzi: '逐渐', vocabId: '5-1557', note: 'perlahan-lahan berubah; untuk satu subjek/proses tunggal yang berjalan alami' },
      { hanzi: '逐步', vocabId: '5-1549', note: 'langkah demi langkah; untuk rencana/kebijakan yang disengaja dan bertahap' },
      { hanzi: '陆续', vocabId: '5-746', note: 'satu per satu berturut-turut; untuk BANYAK orang/hal yang datang tidak bersamaan' },
      { hanzi: '纷纷', vocabId: '5-351', note: 'serentak beruntun; untuk BANYAK orang melakukan hal yang sama hampir bersamaan' },
    ],
    explanation: '逐渐 dan 逐步 sama-sama berarti "bertahap", tapi 逐渐 menekankan proses alami yang perlahan (cuaca 逐渐变冷), sedangkan 逐步 menekankan langkah yang direncanakan (逐步实现目标). 陆续 dan 纷纷 dipakai untuk BANYAK subjek: 陆续 berarti datang/terjadi satu-satu tidak bersamaan, sedangkan 纷纷 berarti terjadi hampir bersamaan dan serentak, biasanya sebagai reaksi terhadap sesuatu.',
    examples: [
      { zh: '天气逐渐变冷了。', pinyin: 'Tiānqì zhújiàn biàn lěng le.', id: 'Cuaca perlahan-lahan menjadi dingin.' },
      { zh: '公司逐步扩大了业务范围。', pinyin: 'Gōngsī zhúbù kuòdàle yèwù fànwéi.', id: 'Perusahaan secara bertahap memperluas cakupan bisnisnya.' },
      { zh: '客人陆续到了。', pinyin: 'Kèrén lùxù dào le.', id: 'Tamu-tamu datang satu per satu berturut-turut.' },
      { zh: '大家纷纷发表自己的意见。', pinyin: 'Dàjiā fēnfēn fābiǎo zìjǐ de yìjiàn.', id: 'Semua orang serentak menyampaikan pendapat masing-masing.' },
    ],
    level: 5,
  },
  {
    id: 'c5-09',
    title: '曾 vs 曾经: Sama-sama "Pernah", Beda Formalitas',
    items: [
      { hanzi: '曾', vocabId: '5-096', note: 'bentuk pendek dan formal/tertulis, sering langsung di depan kata satu suku kata' },
      { hanzi: '曾经', vocabId: '5-097', note: 'bentuk lengkap yang lebih umum dipakai, baik lisan maupun tulisan' },
    ],
    explanation: '曾 dan 曾经 sama-sama menunjukkan pengalaman di masa lalu ("pernah"), tetapi 曾 lebih pendek dan formal, sering dipakai dalam tulisan resmi atau di depan kata satu suku kata, sedangkan 曾经 lebih umum dan luwes dipakai baik dalam percakapan maupun tulisan.',
    examples: [
      { zh: '他曾任公司经理。', pinyin: 'Tā céng rèn gōngsī jīnglǐ.', id: 'Dia pernah menjabat sebagai manajer perusahaan.' },
      { zh: '我曾经去过北京三次。', pinyin: 'Wǒ céngjīng qùguò Běijīng sān cì.', id: 'Saya pernah pergi ke Beijing tiga kali.' },
    ],
    level: 5,
  },
  {
    id: 'c5-10',
    title: '居然 vs 偶然: Tak Disangka vs Kebetulan',
    items: [
      { hanzi: '居然', vocabId: '5-643', note: 'menyatakan keterkejutan karena hasil di luar dugaan, nada emosi kuat' },
      { hanzi: '偶然', vocabId: '5-808', note: 'menyatakan sesuatu terjadi tanpa direncanakan/kebetulan, nada netral' },
    ],
    explanation: '居然 dipakai untuk mengungkapkan rasa terkejut karena sesuatu terjadi di luar dugaan, sering bernuansa emosional baik positif maupun negatif. 偶然 hanya menyatakan bahwa sesuatu terjadi secara kebetulan atau tidak disengaja, tanpa nada kaget.',
    examples: [
      { zh: '没想到，他居然通过了考试。', pinyin: 'Méi xiǎngdào, tā jūrán tōngguòle kǎoshì.', id: 'Tak disangka, dia ternyata lulus ujian.' },
      { zh: '我们是偶然在路上遇到的。', pinyin: 'Wǒmen shì ǒurán zài lùshàng yùdào de.', id: 'Kami bertemu di jalan secara kebetulan.' },
    ],
    level: 5,
  },
  {
    id: 'c5-11',
    title: '多音字: Satu Hanzi, Dua Bacaan Berbeda (处/调/系)',
    items: [
      { hanzi: '处(chù)', vocabId: '5-170', note: 'chù = tempat / menangani sesuatu' },
      { hanzi: '处(chǔ)', vocabId: '5-171', note: 'chǔ = berada dalam suatu keadaan/posisi' },
      { hanzi: '调(diào)', vocabId: '5-275', note: 'diào = menyesuaikan/mengatur' },
      { hanzi: '调(tiáo)', vocabId: '5-1118', note: 'tiáo = memindahkan; juga berarti "nada/lagu"' },
      { hanzi: '系(jì)', vocabId: '5-523', note: 'jì = mengikat (tali sepatu, sabuk, dsb)' },
      { hanzi: '系(xì)', vocabId: '5-1222', note: 'xì = jurusan/departemen (di universitas)' },
    ],
    explanation: 'Ketiga hanzi ini adalah 多音字 (karakter dengan lebih dari satu bacaan) yang sering bikin bingung karena tulisannya identik, tapi pinyin dan artinya berbeda tergantung konteks kalimat. Perhatikan konteks untuk menentukan bacaan yang tepat.',
    examples: [
      { zh: '这件事该怎么处理？', pinyin: 'Zhè jiàn shì gāi zěnme chǔlǐ?', id: 'Bagaimana cara menangani hal ini?' },
      { zh: '请把音量调小一点。', pinyin: 'Qǐng bǎ yīnliàng tiáo xiǎo yīdiǎn.', id: 'Tolong kecilkan sedikit volumenya.' },
      { zh: '他是中文系的学生。', pinyin: 'Tā shì Zhōngwén xì de xuéshēng.', id: 'Dia adalah mahasiswa jurusan bahasa Mandarin.' },
    ],
    level: 5,
  },
];

export { hsk5Confusables };