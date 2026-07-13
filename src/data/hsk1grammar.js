// HSK 1 — Grammar Points (Poin Grammar Level 1)
// Sumber: GF 0025-2021 Appendix A.1 (一级语法点) — Standar Resmi Kementerian Pendidikan China
// Total: 55 poin grammar resmi (一-01 s.d. 一-55), disusun ulang & dicrosscheck penuh
// terhadap 语法大纲 (Grammar Outline) resmi HSK level 1 dari dokumen resmi.
//
// Catatan revisi (crosscheck penuh terhadap PDF 语法大纲 resmi):
// - DIHAPUS: poin tentang 比较句 (kalimat perbandingan dengan 比) dan preposisi 比,
//   karena TIDAK termasuk dalam 语法大纲 resmi Level 1 (baru muncul di Level 2/3).
// - DIPERBAIKI: beberapa poin disederhanakan agar sesuai cakupan resmi Level 1
//   (menghapus 从/跟/还是/地/一边...一边/协同副词/重复副词 yang bukan bagian resmi Level 1).
// - DITAMBAHKAN: poin yang sebelumnya belum ada — 前缀, 后缀, 可以, 离合词, 时量词,
//   叹词, 基本短语类型 & 其他短语类型, 补语, 主谓句3, 存现句1, 连动句1,
//   双宾语句1, 不用关联词语的复句, 序数表达法1, 时间表示法.
//
// Struktur: { id, title, titleZh, gfCode, pattern, explanation, examples, tags, level }
// - id        : 'g1-001' dst
// - gfCode    : kode resmi GF 0025 misal '一-01'
// - title     : judul dalam Bahasa Indonesia
// - titleZh   : judul dalam Bahasa Tionghoa
// - pattern   : pola struktur kalimat
// - explanation: penjelasan dalam Bahasa Indonesia
// - examples  : [{ zh, pinyin, id }]  — id = terjemahan Indonesia
// - tags      : label kategori
// - level     : 1

export const hsk1Grammar = [


  // ============================================================
  // 语素 — MORFEM
  // ============================================================

  {
    id: 'g1-001',
    gfCode: '一-01',
    title: 'Awalan (Prefiks Angka)',
    titleZh: '前缀',
    pattern: 'Awalan: 小 + Angka (小一 = pertama-tama/paling kecil)\\nAwalan: 第 + Angka (第一 = yang pertama/urutan ke-)',
    explanation: '小 sebagai awalan pada 小一 dipakai untuk urutan informal (anak sulung/kelas satu SD). 第 adalah awalan baku untuk membentuk bilangan tingkat (ordinal): 第一 = pertama, 第二 = kedua, dst.',
    examples: [
      { zh: '他是小一学生。', pinyin: 'Tā shì xiǎo yī xuéshēng.', id: 'Dia siswa kelas satu SD.' },
      { zh: '我是第一名。', pinyin: 'Wǒ shì dì yī míng.', id: 'Saya peringkat pertama.' },
      { zh: '这是我第一次来北京。', pinyin: 'Zhè shì wǒ dì yī cì lái Běijīng.', id: 'Ini kali pertama saya datang ke Beijing.' },
    ],
    tags: ['awalan', 'prefiks', '小', '第', 'bilangan tingkat'],
    level: 1,
  
    relatedVocabIds: ['1-031', '1-161', '1-232', '1-254'],
  },

  {
    id: 'g1-002',
    gfCode: '一-02',
    title: 'Akhiran (Sufiks 们 dan 边)',
    titleZh: '后缀',
    pattern: 'Kata ganti/kata benda orang + 们 (bentuk jamak)\\nKata posisi + 边 (上边、下边、里边、外边, dst.)',
    explanation: '们 ditempelkan pada kata ganti orang atau kata benda orang untuk membentuk jamak (我们、你们、他们、同学们). 边 ditempelkan pada kata posisi dasar untuk membentuk bentuk yang lebih lengkap dan netral (上边、里边、外边).',
    examples: [
      { zh: '老师们好！', pinyin: 'Lǎoshīmen hǎo!', id: 'Selamat pagi, para guru!' },
      { zh: '同学们，我们开始上课吧。', pinyin: 'Tóngxuémen, wǒmen kāishǐ shàngkè ba.', id: 'Teman-teman, mari kita mulai pelajaran.' },
      { zh: '书在桌子上边。', pinyin: 'Shū zài zhuōzi shàngbian.', id: 'Buku ada di atas meja.' },
    ],
    tags: ['akhiran', 'sufiks', '们', '边', 'jamak'],
    level: 1,
  
    relatedVocabIds: ['1-011', '1-080', '1-110', '1-124', '1-174', '1-212', '1-213', '1-225'],
  },


  // ============================================================
  // 词类 — KELAS KATA
  // ============================================================

  {
    id: 'g1-003',
    gfCode: '一-03',
    title: 'Kata Posisi (Nomina Arah/Lokasi)',
    titleZh: '方位名词',
    pattern: 'Benda + 上/下/里/外/前/后\\nBenda + 上边/下边/里边/外边/前边/后边',
    explanation: 'Kata posisi menempel setelah kata benda untuk menunjukkan letak. Bentuk pendek (上、下、里、外、前、后) dipakai langsung setelah benda. Bentuk panjang dengan akhiran 边 (上边、下边, dst.) lebih umum dan netral. Keduanya bisa dipakai sebagai subjek atau keterangan tempat.',
    examples: [
      { zh: '书在桌子上。', pinyin: 'Shū zài zhuōzi shàng.', id: 'Buku ada di atas meja.' },
      { zh: '手机在书包里。', pinyin: 'Shǒujī zài shūbāo lǐ.', id: 'Ponsel ada di dalam tas.' },
      { zh: '房间里没有人。', pinyin: 'Fángjiān lǐ méiyǒu rén.', id: 'Di dalam kamar tidak ada orang.' },
      { zh: '医院前边有商店。', pinyin: 'Yīyuàn qiánbian yǒu shāngdiàn.', id: 'Di depan rumah sakit ada toko.' },
    ],
    tags: ['kata posisi', 'lokasi', 'arah', 'kata benda'],
    level: 1,
  
    relatedVocabIds: ['1-011', '1-080', '1-110', '1-161', '1-174', '1-212', '1-213', '1-225'],
  },


  // ============================================================
  // ── 能愿动词 (Kata Modal) ──
  // ============================================================

  {
    id: 'g1-004',
    gfCode: '一-04',
    title: 'Kata Modal: 会 dan 能 (kemampuan)',
    titleZh: '能愿动词：会、能',
    pattern: 'S + 会/能 + V',
    explanation: '会 menyatakan kemampuan yang dipelajari (bisa karena belajar). 能 menyatakan kemampuan fisik atau kondisi yang memungkinkan (bisa/mampu). Negasi: 不会 / 不能. Keduanya diletakkan sebelum kata kerja.',
    examples: [
      { zh: '我不会说中文。', pinyin: 'Wǒ bù huì shuō Zhōngwén.', id: 'Saya tidak bisa berbicara bahasa Mandarin.' },
      { zh: '明天你能来吗？', pinyin: 'Míngtiān nǐ néng lái ma?', id: 'Apakah kamu bisa datang besok?' },
      { zh: '他会开车。', pinyin: 'Tā huì kāichē.', id: 'Dia bisa menyetir mobil.' },],
    tags: ['kata modal', 'kemampuan', '会', '能'],
    level: 1,
  
    relatedVocabIds: ['1-082', '1-145'],
  },

  {
    id: 'g1-005',
    gfCode: '一-05',
    title: 'Kata Modal: 想 dan 要 (keinginan)',
    titleZh: '能愿动词：想、要',
    pattern: 'S + 想/要 + V',
    explanation: '想 menyatakan keinginan atau niat yang lebih lunak (ingin/mau). 要 menyatakan keinginan yang lebih tegas atau kebutuhan (mau/harus). Negasi: 不想 / 不要 (hati-hati: 不要 juga bisa berarti "jangan").',
    examples: [
      { zh: '我想学中文。', pinyin: 'Wǒ xiǎng xué Zhōngwén.', id: 'Saya ingin belajar bahasa Mandarin.' },
      { zh: '他要去书店。', pinyin: 'Tā yào qù shūdiàn.', id: 'Dia mau pergi ke toko buku.' },
      { zh: '你想喝什么？', pinyin: 'Nǐ xiǎng hē shénme?', id: 'Kamu ingin minum apa?' },],
    tags: ['kata modal', 'keinginan', '想', '要'],
    level: 1,
  
    relatedVocabIds: ['1-145', '1-229', '1-252'],
  },

  {
    id: 'g1-006',
    gfCode: '一-06',
    title: 'Kata Modal: 可以 (izin/kemungkinan)',
    titleZh: '能愿动词：可以',
    pattern: 'S + 可以 + V (boleh/bisa melakukan V)',
    explanation: '可以 menyatakan izin (boleh) atau kemungkinan (bisa) untuk melakukan sesuatu. Sering dipakai untuk meminta izin dengan pola "可以...吗？". Negasi: 不可以 (tidak boleh) atau 不能.',
    examples: [
      { zh: '我可以进来吗？', pinyin: 'Wǒ kěyǐ jìnlái ma?', id: 'Boleh saya masuk?' },
      { zh: '这里可以坐吗？', pinyin: 'Zhèlǐ kěyǐ zuò ma?', id: 'Boleh duduk di sini?' },
      { zh: '你可以再说一遍吗？', pinyin: 'Nǐ kěyǐ zài shuō yí biàn ma?', id: 'Bisakah kamu mengatakannya sekali lagi?' },
    ],
    tags: ['kata modal', 'izin', '可以'],
    level: 1,
  
    relatedVocabIds: ['1-103', '1-145'],
  },

  {
    id: 'g1-007',
    gfCode: '一-07',
    title: 'Kata Kerja Pisah-Gabung (离合词)',
    titleZh: '离合词',
    pattern: 'V + O yang bisa disisipi elemen lain, misal V + 了/过/一下 + O\\nContoh: 看病、睡觉、说话、上课、下课、上班、下班、生病',
    explanation: '离合词 adalah kata kerja dua suku kata yang sebenarnya terdiri dari kata kerja + objek (V+O), sehingga bisa "dipisah" dengan menyisipkan elemen lain seperti 了、过、一下、waktu, atau bilangan+kata ukuran di antara keduanya. Berbeda dari kata kerja biasa, 离合词 tidak bisa langsung diikuti objek lain.',
    examples: [
      { zh: '他生病了。', pinyin: 'Tā shēngbìng le.', id: 'Dia jatuh sakit.' },
      { zh: '我们上了两节课。', pinyin: 'Wǒmen shàng le liǎng jié kè.', id: 'Kami sudah mengikuti dua jam pelajaran.' },
      { zh: '她昨天没睡觉。', pinyin: 'Tā zuótiān méi shuìjiào.', id: 'Dia kemarin tidak tidur.' },
      { zh: '你什么时候下班？', pinyin: 'Nǐ shénme shíhou xiàbān?', id: 'Kapan kamu pulang kerja?' },
    ],
    tags: ['离合词', 'kata kerja pisah-gabung', 'V+O'],
    level: 1,
  
    relatedVocabIds: ['1-012', '1-099', '1-100', '1-102', '1-108', '1-174', '1-175', '1-177', '1-182', '1-192', '1-195', '1-196', '1-197', '1-225', '1-227', '1-228', '1-254', '1-259'],
  },


  // ============================================================
  // ── 代词 (Kata Ganti) ──
  // ============================================================

  {
    id: 'g1-008',
    gfCode: '一-08',
    title: 'Kata Tanya (Pronomina Interogatif)',
    titleZh: '疑问代词',
    pattern: 'Kata tanya menggantikan bagian kalimat yang ditanyakan:\n多、多少、几、哪、哪儿、哪里、哪些、什么、谁、怎么',
    explanation: 'Kata tanya dalam bahasa Mandarin diletakkan tepat di posisi informasi yang ingin ditanyakan, bukan di awal kalimat. Urutan kalimat tidak berubah dibanding kalimat pernyataan.',
    examples: [
      { zh: '他多大？', pinyin: 'Tā duō dà?', id: 'Dia berumur berapa?' },
      { zh: '你们班有多少个学生？', pinyin: 'Nǐmen bān yǒu duōshao gè xuéshēng?', id: 'Di kelasmu ada berapa siswa?' },
      { zh: '你喜欢哪个电影？', pinyin: 'Nǐ xǐhuan nǎge diànyǐng?', id: 'Kamu suka film yang mana?' },
      { zh: '谁是老师？', pinyin: 'Shéi shì lǎoshī?', id: 'Siapa yang guru?' },
      { zh: '你怎么去医院？', pinyin: 'Nǐ zěnme qù yīyuàn?', id: 'Kamu pergi ke rumah sakit dengan apa/bagaimana?' },],
    tags: ['kata tanya', 'pronomina interogatif', 'pertanyaan'],
    level: 1,
  
    relatedVocabIds: ['1-045', '1-046', '1-084', '1-110', '1-132', '1-137', '1-141', '1-143', '1-180', '1-181', '1-183', '1-219', '1-239', '1-276'],
  },

  {
    id: 'g1-009',
    gfCode: '一-09',
    title: 'Kata Ganti Orang (Pronomina Persona)',
    titleZh: '人称代词',
    pattern: 'Tunggal: 我/你/您/他/她\nJamak: 我们/你们/他们/她们',
    explanation: '们 ditambahkan untuk bentuk jamak. 您 adalah bentuk hormat dari 你. 它 (tā) untuk benda/hewan. Kata ganti orang bisa langsung menjadi subjek, objek, atau dengan 的 menjadi kata sifat kepemilikan.',
    examples: [
      { zh: '你好，我要两个本子。', pinyin: 'Nǐ hǎo, wǒ yào liǎng gè běnzi.', id: 'Halo, saya mau dua buku tulis.' },
      { zh: '她很高。', pinyin: 'Tā hěn gāo.', id: 'Dia (perempuan) sangat tinggi.' },
      { zh: '他们是学生。', pinyin: 'Tāmen shì xuéshēng.', id: 'Mereka adalah pelajar.' },
      { zh: '她们是我的同学。', pinyin: 'Tāmen shì wǒ de tóngxué.', id: 'Mereka (perempuan) adalah teman sekelasku.' },],
    tags: ['kata ganti orang', 'pronomina persona', 'jamak'],
    level: 1,
  
    relatedVocabIds: ['1-124', '1-146', '1-149', '1-150', '1-170', '1-200', '1-202', '1-204', '1-206', '1-221', '1-222'],
  },

  {
    id: 'g1-010',
    gfCode: '一-10',
    title: 'Kata Tunjuk (Pronomina Demonstratif)',
    titleZh: '指示代词',
    pattern: 'Dekat: 这/这儿/这里/这些\nJauh: 那/那儿/那里/那些\nLainnya: 别的、有的',
    explanation: '这 (ini/di sini) untuk yang dekat, 那 (itu/di sana) untuk yang jauh. Bentuk 儿 (这儿/那儿) lebih informal, 里 (这里/那里) lebih netral. 这些/那些 untuk jamak.',
    examples: [
      { zh: '这是谁的手机？', pinyin: 'Zhè shì shéi de shǒujī?', id: 'Ini ponsel siapa?' },
      { zh: '你坐这里，弟弟坐那里。', pinyin: 'Nǐ zuò zhèlǐ, dìdi zuò nàlǐ.', id: 'Kamu duduk di sini, adik duduk di sana.' },
      { zh: '那些东西都很贵。', pinyin: 'Nàxiē dōngxi dōu hěn guì.', id: 'Barang-barang itu semua mahal.' },
      { zh: '有的同学在休息，有的同学在看书。', pinyin: 'Yǒude tóngxué zài xiūxi, yǒude tóngxué zài kànshū.', id: 'Sebagian teman sekelas istirahat, sebagian lagi membaca buku.' },],
    tags: ['kata tunjuk', 'pronomina demonstratif', '这', '那'],
    level: 1,
  
    relatedVocabIds: ['1-030', '1-110', '1-131', '1-136', '1-140', '1-142', '1-239', '1-263', '1-264', '1-279', '1-282', '1-285', '1-286'],
  },


  // ============================================================
  // ── 数词 (Kata Bilangan) ──
  // ============================================================

  {
    id: 'g1-011',
    gfCode: '一-11',
    title: 'Kata Bilangan (Angka dan Setengah)',
    titleZh: '数词',
    pattern: 'Dasar: 一/两/二、三、四、五、六、七、八、九、零\nTingkat: 十、百\nKhusus: 半\nDua di depan kata ukuran: 两 (bukan 二)',
    explanation: 'Angka 两 (liǎng) dipakai sebelum kata ukuran (dua orang = 两个人), bukan 二. 二 dipakai untuk urutan (第二) dan operasi matematika. Nol = 零 dipakai dalam angka campuran (105 = 一百零五). 半 = setengah.',
    examples: [
      { zh: '五加十五等于二十。', pinyin: 'Wǔ jiā shíwǔ děngyú èrshí.', id: 'Lima ditambah lima belas sama dengan dua puluh.' },
      { zh: '两个人', pinyin: 'liǎng gè rén', id: 'dua orang' },
      { zh: '两本书', pinyin: 'liǎng běn shū', id: 'dua buku' },
      { zh: '八点半', pinyin: 'bā diǎn bàn', id: 'setengah sembilan (jam delapan tiga puluh)' },],
    tags: ['kata bilangan', 'angka', '两', '半', 'bilangan'],
    level: 1,
  
    relatedVocabIds: ['1-003', '1-005', '1-007', '1-048', '1-095', '1-111', '1-112', '1-113', '1-160', '1-173', '1-184', '1-198', '1-223', '1-254'],
  },


  // ============================================================
  // ── 量词 (Kata Ukuran) ──
  // ============================================================

  {
    id: 'g1-012',
    gfCode: '一-12',
    title: 'Kata Ukuran Nomina',
    titleZh: '名量词',
    pattern: 'Angka + Kata Ukuran + Benda\n杯、本、个、家、间、口、块、页',
    explanation: 'Kata ukuran wajib dipakai antara angka dan kata benda. Setiap benda punya kata ukurannya sendiri: 个 (umum), 本 (buku), 杯 (cangkir/gelas), 家 (keluarga/perusahaan), 间 (ruangan), 口 (mulut/anggota keluarga), 块 (potongan/yuan), 页 (halaman).',
    examples: [
      { zh: '两杯牛奶', pinyin: 'liǎng bēi niúnǎi', id: 'dua gelas susu' },
      { zh: '三本书', pinyin: 'sān běn shū', id: 'tiga buku' },
      { zh: '四个学生', pinyin: 'sì gè xuéshēng', id: 'empat pelajar' },
      { zh: '五家商店', pinyin: 'wǔ jiā shāngdiàn', id: 'lima toko' },
      { zh: '六间房子', pinyin: 'liù jiān fángzi', id: 'enam kamar' },],
    tags: ['kata ukuran', 'satuan', '个', '本', '杯'],
    level: 1,
  
    relatedVocabIds: ['1-010', '1-058', '1-085', '1-104', '1-105'],
  },

  {
    id: 'g1-013',
    gfCode: '一-13',
    title: 'Kata Ukuran Waktu (时量词)',
    titleZh: '时量词',
    pattern: 'Angka + 日/号/岁/点/分/年/天',
    explanation: '时量词 adalah kata ukuran khusus untuk menyatakan satuan waktu: 日/号 (tanggal), 岁 (usia dalam tahun), 点 (jam), 分 (menit), 年 (tahun), 天 (hari). Beberapa di antaranya (年、天) juga berfungsi sebagai kata benda waktu.',
    examples: [
      { zh: '今天几号？', pinyin: 'Jīntiān jǐ hào?', id: 'Hari ini tanggal berapa?' },
      { zh: '我妹妹五岁了。', pinyin: 'Wǒ mèimei wǔ suì le.', id: 'Adik perempuan saya sudah lima tahun.' },
      { zh: '现在三点十分。', pinyin: 'Xiànzài sān diǎn shí fēn.', id: 'Sekarang jam tiga lewat sepuluh menit.' },
      { zh: '我在这儿住了两年。', pinyin: 'Wǒ zài zhèr zhù le liǎng nián.', id: 'Saya sudah tinggal di sini dua tahun.' },
    ],
    tags: ['时量词', 'kata ukuran waktu', '点', '岁', '年'],
    level: 1,
  
    relatedVocabIds: ['1-033', '1-055', '1-071', '1-148', '1-172', '1-199', '1-207'],
  },


  // ============================================================
  // ── 副词 (Kata Keterangan) ──
  // ============================================================

  {
    id: 'g1-014',
    gfCode: '一-14',
    title: 'Kata Keterangan Derajat',
    titleZh: '程度副词',
    pattern: 'S + 非常/很/太/真/最 + Adj/V',
    explanation: 'Kata keterangan derajat diletakkan sebelum kata sifat atau kata kerja. 很 (hěn) = sangat (netral), 非常 (fēicháng) = sangat/luar biasa (lebih kuat dari 很), 太 (tài) = terlalu/sangat, 真 (zhēn) = sungguh/benar-benar, 最 (zuì) = paling (superlatif).',
    examples: [
      { zh: '我非常喜欢这本书。', pinyin: 'Wǒ fēicháng xǐhuan zhè běn shū.', id: 'Saya sangat menyukai buku ini.' },
      { zh: '那个本子很好看。', pinyin: 'Nàge běnzi hěn hǎokàn.', id: 'Buku tulis itu sangat bagus.' },
      { zh: '这里太冷了。', pinyin: 'Zhèlǐ tài lěng le.', id: 'Di sini terlalu dingin.' },
      { zh: '你的房间真干净！', pinyin: 'Nǐ de fángjiān zhēn gānjìng!', id: 'Kamarmu sungguh bersih!' },
      { zh: '我最喜欢打球。', pinyin: 'Wǒ zuì xǐhuan dǎ qiú.', id: 'Saya paling suka main bola.' },],
    tags: ['kata keterangan', 'derajat', '很', '非常', '太', '真', '最'],
    level: 1,
  
    relatedVocabIds: ['1-053', '1-079', '1-203', '1-283'],
  },

  {
    id: 'g1-015',
    gfCode: '一-15',
    title: 'Kata Keterangan Ruang Lingkup: 都',
    titleZh: '范围副词：都1',
    pattern: 'S(jamak) + 都 + V/Adj',
    explanation: '都 menyatakan cakupan menyeluruh atas subjek jamak yang berada sebelum 都 (semua/kedua-duanya). 都 selalu diletakkan sebelum kata kerja atau kata sifat, tidak pernah sebelum subjek.',
    examples: [
      { zh: '我们都是学生。', pinyin: 'Wǒmen dōu shì xuéshēng.', id: 'Kami semua adalah pelajar.' },
      { zh: '他们都喜欢喝茶。', pinyin: 'Tāmen dōu xǐhuan hē chá.', id: 'Mereka semua suka minum teh.' },
      { zh: '这些苹果都很贵。', pinyin: 'Zhèxiē píngguǒ dōu hěn guì.', id: 'Apel-apel ini semuanya mahal.' },
    ],
    tags: ['都', 'ruang lingkup', 'kata keterangan'],
    level: 1,
  
    relatedVocabIds: ['1-041'],
  },

  {
    id: 'g1-016',
    gfCode: '一-16',
    title: 'Kata Keterangan Waktu (Segera, Dulu, Sedang)',
    titleZh: '时间副词',
    pattern: '马上 + V (segera)\n先 + V (terlebih dahulu)\n有时 + V (kadang-kadang)\n在/正/正在 + V (sedang...)',
    explanation: '马上 = segera/sebentar lagi. 先 = terlebih dahulu/dulu. 有时 = kadang-kadang. 在/正/正在 = sedang dalam proses melakukan sesuatu (penanda aspek progresif). Sering dikombinasikan dengan 呢 di akhir.',
    examples: [
      { zh: '医生马上来。', pinyin: 'Yīshēng mǎshàng lái.', id: 'Dokter segera datang.' },
      { zh: '老师，我先说吧。', pinyin: 'Lǎoshī, wǒ xiān shuō ba.', id: 'Bu/Pak guru, saya yang bicara dulu ya.' },
      { zh: '他有时晚上上课。', pinyin: 'Tā yǒushí wǎnshang shàngkè.', id: 'Dia kadang-kadang kuliah malam.' },
      { zh: '我在看电视呢。', pinyin: 'Wǒ zài kàn diànshì ne.', id: 'Saya sedang menonton TV.' },
      { zh: '他们正在唱歌。', pinyin: 'Tāmen zhèngzài chànggē.', id: 'Mereka sedang bernyanyi.' },],
    tags: ['kata keterangan', 'waktu', '马上', '先', '正在', '有时'],
    level: 1,
  
    relatedVocabIds: ['1-174', '1-188', '1-263', '1-271', '1-284'],
  },

  {
    id: 'g1-017',
    gfCode: '一-17',
    title: 'Kata Keterangan Frekuensi: 再',
    titleZh: '频率副词：再1',
    pattern: 'S + 再 + V (lagi/sekali lagi)',
    explanation: '再 menyatakan pengulangan suatu tindakan di masa depan (belum terjadi). Berbeda dari 又 (yang menyatakan pengulangan yang sudah terjadi), 再 dipakai untuk tindakan yang direncanakan atau diminta.',
    examples: [
      { zh: '请再说一遍。', pinyin: 'Qǐng zài shuō yí biàn.', id: 'Tolong katakan sekali lagi.' },
      { zh: '明天我们再见面吧。', pinyin: 'Míngtiān wǒmen zài jiànmiàn ba.', id: 'Besok kita bertemu lagi ya.' },
      { zh: '你要不要再喝一杯？', pinyin: 'Nǐ yào bu yào zài hē yì bēi?', id: 'Kamu mau minum segelas lagi tidak?' },
    ],
    tags: ['再', 'frekuensi', 'kata keterangan'],
    level: 1,
  
    relatedVocabIds: ['1-270'],
  },

  {
    id: 'g1-018',
    gfCode: '一-18',
    title: 'Kata Keterangan Hubungan (juga/masih)',
    titleZh: '关联副词',
    pattern: '还¹ + V/Adj (masih; juga/lagi)\n也 + V/Adj (juga; pula)',
    explanation: '还 bermakna "masih" (keadaan berlanjut) atau "juga/lagi" (menambahkan informasi). 也 bermakna "juga/pula" untuk pernyataan paralel. 也 dan 还 selalu sebelum predikat, bukan di awal kalimat.',
    examples: [
      { zh: '他要去上海，还要去北京。', pinyin: 'Tā yào qù Shànghǎi, hái yào qù Běijīng.', id: 'Dia mau pergi ke Shanghai, juga mau pergi ke Beijing.' },
      { zh: '他是学生，我也是学生。', pinyin: 'Tā shì xuéshēng, wǒ yě shì xuéshēng.', id: 'Dia adalah pelajar, saya juga pelajar.' },],
    tags: ['kata keterangan', 'hubungan', '还', '也', 'juga'],
    level: 1,
  
    relatedVocabIds: ['1-067', '1-253'],
  },

  {
    id: 'g1-019',
    gfCode: '一-19',
    title: 'Kata Keterangan Negasi',
    titleZh: '否定副词',
    pattern: '别 + V (jangan — perintah negatif)\n不 + V/Adj (tidak — negasi umum)\n没/没有 + V (tidak/belum — negasi lampau/kepemilikan)',
    explanation: '别 dipakai untuk melarang/meminta orang tidak melakukan sesuatu. 不 untuk negasi umum (keadaan, kebiasaan, atau keinginan). 没/没有 untuk menyatakan sesuatu belum terjadi atau tidak ada/tidak punya.',
    examples: [
      { zh: '你别进来。', pinyin: 'Nǐ bié jìnlái.', id: 'Kamu jangan masuk.' },
      { zh: '今天不热。', pinyin: 'Jīntiān bú rè.', id: 'Hari ini tidak panas.' },
      { zh: '他昨天没上课。', pinyin: 'Tā zuótiān méi shàngkè.', id: 'Dia kemarin tidak masuk kelas.' },
      { zh: '我今天没有吃早饭。', pinyin: 'Wǒ jīntiān méiyǒu chī zǎofàn.', id: 'Saya hari ini tidak sarapan.' },],
    tags: ['negasi', '别', '不', '没', '没有'],
    level: 1,
  
    relatedVocabIds: ['1-013', '1-123', '1-263'],
  },


  // ============================================================
  // ── 介词 (Kata Depan) ──
  // ============================================================

  {
    id: 'g1-020',
    gfCode: '一-20',
    title: 'Preposisi 在 (di — lokasi)',
    titleZh: '介词：引出时间、处所',
    pattern: 'S + 在 + Tempat + V\n(melakukan sesuatu di suatu tempat)',
    explanation: '在 sebagai preposisi diletakkan sebelum kata kerja untuk menunjukkan lokasi suatu kegiatan. Berbeda dengan 在 sebagai kata kerja (ada di) yang menjadi predikat langsung.',
    examples: [
      { zh: '哥哥在北京学中文。', pinyin: 'Gēge zài Běijīng xué Zhōngwén.', id: 'Kakak laki-laki belajar bahasa Mandarin di Beijing.' },
      { zh: '他在手机上看电影。', pinyin: 'Tā zài shǒujī shàng kàn diànyǐng.', id: 'Dia menonton film di ponsel.' },],
    tags: ['preposisi', '在', 'lokasi', 'tempat'],
    level: 1,
  
    relatedVocabIds: ['1-188', '1-271'],
  },

  {
    id: 'g1-021',
    gfCode: '一-21',
    title: 'Preposisi 和 dan 对 (objek/sasaran)',
    titleZh: '介词：引出对象',
    pattern: 'S + 和 + Orang + V (bersama dengan)\\nS + 对 + Orang/Hal + V (terhadap/kepada)',
    explanation: '和 sebagai preposisi menghubungkan subjek dengan orang yang menyertainya dalam melakukan sesuatu (bersama). 对 menyatakan arah/sasaran suatu sikap atau tindakan (terhadap, kepada).',
    examples: [
      { zh: '我和他一起去学校。', pinyin: 'Wǒ hé tā yìqǐ qù xuéxiào.', id: 'Saya pergi ke sekolah bersama dia.' },
      { zh: '老师对我们很好。', pinyin: 'Lǎoshī duì wǒmen hěn hǎo.', id: 'Guru sangat baik kepada kami.' },
      { zh: '你对这个问题怎么看？', pinyin: 'Nǐ duì zhège wèntí zěnme kàn?', id: 'Bagaimana pandanganmu terhadap masalah ini?' },
    ],
    tags: ['preposisi', '和', '对', 'objek'],
    level: 1,
  
    relatedVocabIds: ['1-043', '1-077'],
  },


  // ============================================================
  // ── 连词 (Konjungsi) ──
  // ============================================================

  {
    id: 'g1-022',
    gfCode: '一-22',
    title: 'Konjungsi 和 (menghubungkan kata/frasa)',
    titleZh: '连词：连接词语或短语：和2',
    pattern: 'Benda A + 和 + Benda B',
    explanation: '和 sebagai konjungsi menghubungkan dua kata benda atau frasa nomina yang setara (dan). Berbeda dari fungsi 和 sebagai preposisi (引出对象), di sini 和 hanya menghubungkan unsur yang sejenis, bukan seluruh klausa.',
    examples: [
      { zh: '我和妹妹都是学生。', pinyin: 'Wǒ hé mèimei dōu shì xuéshēng.', id: 'Saya dan adik perempuan sama-sama pelajar.' },
      { zh: '桌子上有书和杯子。', pinyin: 'Zhuōzi shàng yǒu shū hé bēizi.', id: 'Di atas meja ada buku dan gelas.' },
      { zh: '爸爸和妈妈都在家。', pinyin: 'Bàba hé māma dōu zài jiā.', id: 'Ayah dan ibu sama-sama ada di rumah.' },
    ],
    tags: ['konjungsi', '和', 'menghubungkan'],
    level: 1,
  
    relatedVocabIds: ['1-077'],
  },


  // ============================================================
  // ── 助词 (Partikel) ──
  // ============================================================

  {
    id: 'g1-023',
    gfCode: '一-23',
    title: 'Partikel Struktural: 的',
    titleZh: '结构助词：的1',
    pattern: 'Pemilik/Penjelas + 的 + Benda',
    explanation: '的 diletakkan antara kata keterangan (pemilik, sifat, atau penjelas) dan kata benda yang diterangkan untuk menunjukkan hubungan kepemilikan atau atribut. Setara dengan bentuk posesif dalam bahasa Inggris atau kata -nya/milik dalam bahasa Indonesia.',
    examples: [
      { zh: '这是我的书。', pinyin: 'Zhè shì wǒ de shū.', id: 'Ini adalah buku saya.' },
      { zh: '他是我的朋友。', pinyin: 'Tā shì wǒ de péngyou.', id: 'Dia adalah temanku.' },
      { zh: '这是很好的电影。', pinyin: 'Zhè shì hěn hǎo de diànyǐng.', id: 'Ini adalah film yang sangat bagus.' },
    ],
    tags: ['partikel struktural', '的', 'kepemilikan'],
    level: 1,
  
    relatedVocabIds: ['1-030'],
  },

  {
    id: 'g1-024',
    gfCode: '一-24',
    title: 'Partikel Dinamis: 了¹ (penanda selesai)',
    titleZh: '动态助词：了¹',
    pattern: 'V + 了 (tindakan selesai/perubahan)\nNegasi: 没(有) + V (tanpa 了)',
    explanation: '了 setelah kata kerja menandai aspek kompletif (tindakan sudah selesai atau terjadi). Negasi menggunakan 没(有) — BUKAN 不 — dan 了 dihilangkan.',
    examples: [
      { zh: '他买了一本书。', pinyin: 'Tā mǎi le yī běn shū.', id: 'Dia sudah membeli sebuah buku.' },
      { zh: '他没买书。', pinyin: 'Tā méi mǎi shū.', id: 'Dia tidak membeli buku.' },
      { zh: '我写了两个汉字。', pinyin: 'Wǒ xiě le liǎng gè Hànzì.', id: 'Saya sudah menulis dua aksara Mandarin.' },],
    tags: ['partikel dinamis', '了', 'aspek kompletif', 'selesai'],
    level: 1,
  
    relatedVocabIds: ['1-108', '1-263'],
  },

  {
    id: 'g1-025',
    gfCode: '一-25',
    title: 'Partikel Modal: 吧、了²、吗、呢',
    titleZh: '语气助词：吧¹、了²、吗、呢',
    pattern: 'Kalimat + 吧 (saran/konfirmasi)\nKalimat + 了² (perubahan/penekanan)\nKalimat + 吗 (pertanyaan ya/tidak)\nKalimat + 呢 (pertanyaan lanjutan/sedang)',
    explanation: '吧 untuk saran atau meminta konfirmasi. 了 di akhir kalimat menandai perubahan keadaan atau penekanan situasi baru. 吗 mengubah pernyataan menjadi pertanyaan ya/tidak. 呢 menanyakan lanjutan atau menekankan aspek progresif.',
    examples: [
      { zh: '我们走吧。', pinyin: 'Wǒmen zǒu ba.', id: 'Ayo kita pergi.' },
      { zh: '我累了。', pinyin: 'Wǒ lèi le.', id: 'Saya sudah lelah (sekarang).' },
      { zh: '她是医生吗？', pinyin: 'Tā shì yīshēng ma?', id: 'Apakah dia dokter?' },
      { zh: '他是哪国人呢？', pinyin: 'Tā shì nǎ guó rén ne?', id: 'Dia orang mana ya?' },],
    tags: ['partikel modal', '吧', '了', '吗', '呢', 'pertanyaan'],
    level: 1,
  
    relatedVocabIds: ['1-002', '1-108', '1-114', '1-144'],
  },


  // ============================================================
  // ── 叹词 (Kata Seru) ──
  // ============================================================

  {
    id: 'g1-026',
    gfCode: '一-26',
    title: 'Kata Seru: 喂',
    titleZh: '叹词：喂',
    pattern: '喂！(untuk menyapa/menjawab telepon)',
    explanation: '喂 dipakai sebagai kata seru untuk menyapa seseorang dari jauh atau untuk menjawab panggilan telepon (halo). Selalu diletakkan di awal ujaran, sering diikuti tanda seru.',
    examples: [
      { zh: '喂，你好，请问王老师在吗？', pinyin: 'Wèi, nǐ hǎo, qǐngwèn Wáng lǎoshī zài ma?', id: 'Halo, permisi, apakah Pak/Bu Wang ada?' },
      { zh: '喂！你听得见吗？', pinyin: 'Wèi! Nǐ tīng de jiàn ma?', id: 'Halo! Bisa dengar tidak?' },
    ],
    tags: ['kata seru', 'tan ci', '喂', 'telepon'],
    level: 1,
  
    relatedVocabIds: ['1-218'],
  },


  // ============================================================
  // 词类 — FRASA
  // ============================================================

  {
    id: 'g1-027',
    gfCode: '一-27',
    title: 'Struktur Frasa Dasar',
    titleZh: '短语：基本结构类型',
    pattern: '(1) 联合短语: A + 和/或 + B (setara, misal 爸爸和妈妈)\\n(2) 偏正短语: Penjelas + Inti (misal 很好的老师)\\n(3) 动宾短语: V + O (misal 看书)\\n(4) 主谓短语: S + P (misal 他来了 sebagai satu kesatuan)',
    explanation: '四种基本 struktur frasa: 联合短语 menghubungkan dua unsur setara dengan 和/或; 偏正短语 terdiri dari unsur penjelas (定语/状语) + inti; 动宾短语 terdiri dari kata kerja + objeknya; 主谓短语 terdiri dari subjek + predikat yang berfungsi sebagai satu kesatuan (misal menjadi subjek/objek kalimat lain).',
    examples: [
      { zh: '爸爸和妈妈去超市。', pinyin: 'Bàba hé māma qù chāoshì.', id: '(联合短语) Ayah dan ibu pergi ke supermarket.' },
      { zh: '很好的老师', pinyin: 'hěn hǎo de lǎoshī', id: '(偏正短语) guru yang sangat baik' },
      { zh: '看电影', pinyin: 'kàn diànyǐng', id: '(动宾短语) menonton film' },
      { zh: '他来了很高兴。', pinyin: 'Tā lái le hěn gāoxìng.', id: '(主谓短语 sebagai subjek) Dia datang membuat (kami) senang.' },
    ],
    tags: ['frasa', 'struktur frasa', '联合短语', '偏正短语', '动宾短语', '主谓短语'],
    level: 1,
  
    relatedVocabIds: ['1-004', '1-010', '1-030', '1-072', '1-077', '1-079', '1-099', '1-106', '1-107', '1-108', '1-117', '1-190', '1-200'],
  },

  {
    id: 'g1-028',
    gfCode: '一-28',
    title: 'Frasa Bilangan, Frasa Preposisi, Frasa Posisi',
    titleZh: '短语：其他结构类型：数量短语、介宾短语、方位短语',
    pattern: '(1) 数量短语: Angka + Kata Ukuran (两个人)\\n(2) 介宾短语: Preposisi + Objek (在学校、对我)\\n(3) 方位短语: Benda + Kata Posisi (桌子上)',
    explanation: '数量短语 menggabungkan angka dan kata ukuran (dua orang = 两个人). 介宾短语 menggabungkan preposisi dengan objeknya, sering berfungsi sebagai keterangan (在学校 = di sekolah). 方位短语 menggabungkan kata benda dengan kata posisi untuk menunjukkan lokasi (桌子上 = di atas meja).',
    examples: [
      { zh: '他买了三本书。', pinyin: 'Tā mǎi le sān běn shū.', id: '(数量短语) Dia membeli tiga buku.' },
      { zh: '我在家看电视。', pinyin: 'Wǒ zài jiā kàn diànshì.', id: '(介宾短语) Saya menonton TV di rumah.' },
      { zh: '猫在桌子下。', pinyin: 'Māo zài zhuōzi xià.', id: '(方位短语) Kucing ada di bawah meja.' },
    ],
    tags: ['frasa bilangan', '数量短语', '介宾短语', '方位短语'],
    level: 1,
  
    relatedVocabIds: ['1-043', '1-058', '1-111', '1-170', '1-174', '1-200', '1-221', '1-247', '1-251', '1-271', '1-295'],
  },


  // ============================================================
  // 句子成分 — UNSUR KALIMAT
  // ============================================================

  {
    id: 'g1-029',
    gfCode: '一-29',
    title: 'Subjek Kalimat',
    titleZh: '名词、代词或名词性短语作主语',
    pattern: 'Kata Benda / Pronomina / Frasa Nomina + Predikat',
    explanation: 'Subjek kalimat bahasa Mandarin bisa berupa kata benda, pronomina, atau frasa nomina. Subjek biasanya di awal kalimat dan bisa dihilangkan jika jelas dari konteks.',
    examples: [
      { zh: '衣服很好看。', pinyin: 'Yīfu hěn hǎokàn.', id: 'Pakaian (itu) sangat bagus.' },
      { zh: '他在看电视。', pinyin: 'Tā zài kàn diànshì.', id: 'Dia sedang menonton TV.' },
      { zh: '这个房间很干净。', pinyin: 'Zhège fángjiān hěn gānjìng.', id: 'Kamar ini sangat bersih.' },],
    tags: ['komponen kalimat', 'subjek', 'kata benda'],
    level: 1,
  
    relatedVocabIds: [],
  },

  {
    id: 'g1-030',
    gfCode: '一-30',
    title: 'Predikat Kalimat',
    titleZh: '谓语：名词/代词/数词或数量短语作谓语；动词或动词性短语、形容词或形容词性短语作谓语',
    pattern: '(1) S + Kata Benda/Bilangan (langsung, tanpa 是, untuk usia/harga/waktu)\\n(2) S + Kata Kerja/Frasa Verba\\n(3) S + Kata Sifat/Frasa Adjektiva',
    explanation: 'Predikat kalimat bahasa Mandarin bisa berupa: (1) kata benda/bilangan/frasa bilangan langsung tanpa 是 — khusus untuk topik usia, harga, waktu, tanggal; (2) kata kerja atau frasa verba; atau (3) kata sifat atau frasa adjektiva (tanpa perlu 是).',
    examples: [
      { zh: '她今年十八岁。', pinyin: 'Tā jīnnián shíbā suì.', id: '(kata bilangan sebagai predikat) Tahun ini usianya delapan belas tahun.' },
      { zh: '这个苹果三块钱。', pinyin: 'Zhège píngguǒ sān kuài qián.', id: '(frasa bilangan sebagai predikat) Apel ini tiga yuan.' },
      { zh: '他每天学习汉语。', pinyin: 'Tā měitiān xuéxí Hànyǔ.', id: '(kata kerja sebagai predikat) Dia belajar bahasa Mandarin setiap hari.' },
      { zh: '这件衣服很漂亮。', pinyin: 'Zhè jiàn yīfu hěn piàoliang.', id: '(kata sifat sebagai predikat) Baju ini sangat cantik.' },
    ],
    tags: ['predikat', '谓语', 'kata sifat', 'kata kerja', 'kata bilangan'],
    level: 1,
  
    relatedVocabIds: ['1-186'],
  },

  {
    id: 'g1-031',
    gfCode: '一-31',
    title: 'Objek Kalimat',
    titleZh: '名词、代词或名词性短语作宾语',
    pattern: 'Subjek + Kata Kerja + Kata Benda/Pronomina/Frasa Nomina',
    explanation: 'Objek dalam bahasa Mandarin selalu di belakang kata kerja. Objek bisa berupa kata benda, pronomina, atau frasa nomina.',
    examples: [
      { zh: '他吃面包。', pinyin: 'Tā chī miànbāo.', id: 'Dia makan roti.' },
      { zh: '妈妈来看我了。', pinyin: 'Māma lái kàn wǒ le.', id: 'Ibu datang mengunjungi saya.' },
      { zh: '她买了一个手机。', pinyin: 'Tā mǎi le yī gè shǒujī.', id: 'Dia membeli sebuah ponsel.' },],
    tags: ['komponen kalimat', 'objek'],
    level: 1,
  
    relatedVocabIds: [],
  },

  {
    id: 'g1-032',
    gfCode: '一-32',
    title: 'Atribut / Modifier Kata Benda',
    titleZh: '名词性词语、形容词性词语、数量短语作定语',
    pattern: 'Modifier + 的 + Kata Benda\n(Kata sifat pendek bisa langsung tanpa 的)',
    explanation: 'Atribut/definisi selalu di depan kata benda dalam bahasa Mandarin. Kata sifat satu suku kata bisa langsung tanpa 的, kata sifat lebih panjang umumnya pakai 的.',
    examples: [
      { zh: '他在看中文书。', pinyin: 'Tā zài kàn Zhōngwén shū.', id: 'Dia sedang membaca buku bahasa Mandarin.' },
      { zh: '新书包很好看。', pinyin: 'Xīn shūbāo hěn hǎokàn.', id: 'Tas baru itu sangat bagus.' },
      { zh: '我喜欢干净的房间。', pinyin: 'Wǒ xǐhuan gānjìng de fángjiān.', id: 'Saya suka kamar yang bersih.' },
      { zh: '她看了两本书。', pinyin: 'Tā kàn le liǎng běn shū.', id: 'Dia sudah membaca dua buku.' },],
    tags: ['komponen kalimat', 'atribut', 'modifier', 'definisi'],
    level: 1,
  
    relatedVocabIds: ['1-030'],
  },

  {
    id: 'g1-033',
    gfCode: '一-33',
    title: 'Keterangan (Adverbial)',
    titleZh: '副词、形容词作状语；表示时间、处所的词语作状语',
    pattern: 'Keterangan (waktu/tempat/cara) + Predikat\nKeterangan selalu SEBELUM predikat',
    explanation: 'Keterangan (adverbial) dalam bahasa Mandarin diletakkan SEBELUM predikat, bukan sesudahnya. Urutan umum: Waktu → Tempat → Cara → Predikat. Ini berbeda dari bahasa Indonesia/Inggris.',
    examples: [
      { zh: '他不吃包子。', pinyin: 'Tā bù chī bāozi.', id: 'Dia tidak makan bakpao.' },
      { zh: '这个房间非常干净。', pinyin: 'Zhège fángjiān fēicháng gānjìng.', id: 'Kamar ini sangat bersih.' },
      { zh: '你认真写！', pinyin: 'Nǐ rènzhēn xiě!', id: 'Kamu tulis dengan serius!' },
      { zh: '他十点睡觉。', pinyin: 'Tā shí diǎn shuìjiào.', id: 'Dia tidur jam sepuluh.' },
      { zh: '我们下午去吧。', pinyin: 'Wǒmen xiàwǔ qù ba.', id: 'Kita pergi sore hari ya.' },
      { zh: '她在网上买了两本书。', pinyin: 'Tā zài wǎng shàng mǎi le liǎng běn shū.', id: 'Dia membeli dua buku secara online.' },],
    tags: ['komponen kalimat', 'keterangan', 'adverbial', 'waktu', 'tempat'],
    level: 1,
  
    relatedVocabIds: ['1-030', '1-188'],
  },

  {
    id: 'g1-034',
    gfCode: '一-34',
    title: 'Pelengkap Jumlah Tindakan (数量补语)',
    titleZh: '补语：数量补语1',
    pattern: 'V + Angka + Kata Ukuran Aksi (次/遍/下, dst.)',
    explanation: '数量补语 diletakkan setelah kata kerja untuk menyatakan berapa kali suatu tindakan dilakukan (kata ukuran aksi seperti 次、遍、下). Berbeda dari kata ukuran benda, kata ukuran aksi ini menghitung frekuensi tindakan, bukan jumlah benda.',
    examples: [
      { zh: '我去过两次北京。', pinyin: 'Wǒ qùguo liǎng cì Běijīng.', id: 'Saya sudah pernah ke Beijing dua kali.' },
      { zh: '请你再说一遍。', pinyin: 'Qǐng nǐ zài shuō yí biàn.', id: 'Tolong ucapkan sekali lagi.' },
      { zh: '他看了一下手机。', pinyin: 'Tā kàn le yíxià shǒujī.', id: 'Dia melihat ponselnya sebentar.' },
    ],
    tags: ['pelengkap', 'bu yu', '数量补语', '次', '遍', '下'],
    level: 1,
  
    relatedVocabIds: ['1-225'],
  },


  // ============================================================
  // 句子的类型 — TIPE KALIMAT
  // ============================================================

  {
    id: 'g1-035',
    gfCode: '一-35',
    title: 'Kalimat Predikat Kata Kerja',
    titleZh: '主谓句1：动词谓语句',
    pattern: 'S + V (+ O)',
    explanation: 'Kalimat dasar dengan kata kerja sebagai predikat. Ini adalah pola kalimat paling umum. Objek (jika ada) selalu di belakang kata kerja.',
    examples: [
      { zh: '我买一个面包。', pinyin: 'Wǒ mǎi yī gè miànbāo.', id: 'Saya membeli sebuah roti.' },
      { zh: '他不去医院。', pinyin: 'Tā bú qù yīyuàn.', id: 'Dia tidak pergi ke rumah sakit.' },],
    tags: ['pola kalimat', 'predikat kata kerja', 'kalimat dasar'],
    level: 1,
  
    relatedVocabIds: [],
  },

  {
    id: 'g1-036',
    gfCode: '一-36',
    title: 'Kalimat Predikat Kata Sifat',
    titleZh: '主谓句2：形容词谓语句',
    pattern: 'S + (很/不) + Adj',
    explanation: 'Kata sifat dapat langsung menjadi predikat tanpa kata kerja 是. Biasanya ditambahkan 很 meski maknanya netral, agar kalimat tidak terkesan membandingkan.',
    examples: [
      { zh: '房间很干净。', pinyin: 'Fángjiān hěn gānjìng.', id: 'Kamarnya sangat bersih.' },
      { zh: '这个学生最认真。', pinyin: 'Zhège xuéshēng zuì rènzhēn.', id: 'Pelajar ini paling serius.' },],
    tags: ['pola kalimat', 'predikat kata sifat'],
    level: 1,
  
    relatedVocabIds: ['1-013', '1-079'],
  },

  {
    id: 'g1-037',
    gfCode: '一-37',
    title: 'Kalimat Predikat Kata Benda',
    titleZh: '主谓句3：名词谓语句',
    pattern: 'S + Kata Benda/Frasa Nomina/Bilangan (tanpa kata kerja)',
    explanation: 'Kalimat dengan predikat berupa kata benda, frasa nomina, atau bilangan langsung tanpa kata kerja 是. Pola ini umum dipakai untuk topik waktu, tanggal, usia, asal, dan harga. Negasi wajib pakai 不是.',
    examples: [
      { zh: '今天星期一。', pinyin: 'Jīntiān xīngqīyī.', id: 'Hari ini hari Senin.' },
      { zh: '现在八点半。', pinyin: 'Xiànzài bā diǎn bàn.', id: 'Sekarang jam setengah sembilan.' },
      { zh: '他北京人。', pinyin: 'Tā Běijīng rén.', id: 'Dia orang Beijing.' },
      { zh: '今天不是星期一，是星期二。', pinyin: 'Jīntiān bú shì xīngqīyī, shì xīngqī\'èr.', id: 'Hari ini bukan hari Senin, tapi hari Selasa.' },
    ],
    tags: ['zhu wei ju', 'kalimat predikat nomina', 'kata benda sebagai predikat'],
    level: 1,
  
    relatedVocabIds: [],
  },

  {
    id: 'g1-038',
    gfCode: '一-38',
    title: 'Kalimat Tanpa Subjek',
    titleZh: '非主谓句',
    pattern: 'V! / Adj! (kalimat tanpa subjek)',
    explanation: 'Kalimat tanpa subjek dipakai untuk pernyataan umum tentang alam/lingkungan, atau ekspresi singkat. Subjek sudah jelas dari konteks.',
    examples: [
      { zh: '下雨了。', pinyin: 'Xià yǔ le.', id: 'Hujan (sudah turun).' },
      { zh: '车！', pinyin: 'Chē!', id: 'Ada mobil!' },],
    tags: ['pola kalimat', 'tanpa subjek'],
    level: 1,
  
    relatedVocabIds: [],
  },


  // ============================================================
  // ── 句类 ──
  // ============================================================

  {
    id: 'g1-039',
    gfCode: '一-39',
    title: 'Kalimat Pernyataan (Deklaratif)',
    titleZh: '陈述句',
    pattern: 'S + Predikat (kalimat afirmatif atau negatif)',
    explanation: 'Kalimat pernyataan digunakan untuk menyampaikan informasi. Bisa afirmatif (positif) atau negatif (dengan 不/没).',
    examples: [
      { zh: '妈妈做晚饭。', pinyin: 'Māma zuò wǎnfàn.', id: 'Ibu memasak makan malam.' },
      { zh: '我不喜欢看电视。', pinyin: 'Wǒ bù xǐhuan kàn diànshì.', id: 'Saya tidak suka menonton TV.' },],
    tags: ['jenis kalimat', 'pernyataan', 'deklaratif'],
    level: 1,
  
    relatedVocabIds: [],
  },

  {
    id: 'g1-040',
    gfCode: '一-40',
    title: 'Kalimat Tanya (Interogatif)',
    titleZh: '疑问句',
    pattern: '(1) 是非问句: S + Predikat + 吗？\n(2) 特指问句: S + kata tanya + V？\n(3) 选择问句: A + 还是 + B？\n(4) 正反问句: V + 不 + V？ / V + 没有？',
    explanation: 'Ada 4 cara membuat kalimat tanya: (1) Tambahkan 吗 di akhir kalimat pernyataan. (2) Gunakan kata tanya (谁/什么/哪/怎么/多少 dll) di posisi informasi yang ditanyakan. (3) Gunakan 还是 untuk pertanyaan pilihan. (4) Ulangi kata kerja dengan 不 di tengah untuk pertanyaan ya/tidak yang lebih tegas.',
    examples: [
      { zh: '他是老师吗？', pinyin: 'Tā shì lǎoshī ma?', id: 'Apakah dia guru? (吗-pertanyaan)' },
      { zh: '谁跟你一起去书店？', pinyin: 'Shéi gēn nǐ yīqǐ qù shūdiàn?', id: 'Siapa yang pergi ke toko buku bersamamu?' },
      { zh: '你爸爸是老师还是医生？', pinyin: 'Nǐ bàba shì lǎoshī háishi yīshēng?', id: 'Ayahmu guru atau dokter?' },
      { zh: '你喝不喝牛奶？', pinyin: 'Nǐ hē bu hē niúnǎi?', id: 'Kamu minum susu tidak?' },
      { zh: '今天冷不冷？', pinyin: 'Jīntiān lěng bu lěng?', id: 'Hari ini dingin tidak?' },],
    tags: ['jenis kalimat', 'pertanyaan', 'interogatif', '吗', '还是', '正反问句'],
    level: 1,
  
    relatedVocabIds: ['1-013', '1-067', '1-114', '1-123', '1-186', '1-219', '1-263'],
  },

  {
    id: 'g1-041',
    gfCode: '一-41',
    title: 'Kalimat Perintah (Imperatif)',
    titleZh: '祈使句',
    pattern: '请 + V! (mohon/tolong)\n别 + V! (jangan)',
    explanation: 'Kalimat perintah bisa sopan (dengan 请) atau melarang (dengan 别). Subjek umumnya dihilangkan.',
    examples: [
      { zh: '请进！', pinyin: 'Qǐng jìn!', id: 'Silakan masuk!' },
      { zh: '别说了！', pinyin: 'Bié shuō le!', id: 'Jangan bicara lagi!' },],
    tags: ['jenis kalimat', 'perintah', 'imperatif', '请', '别'],
    level: 1,
  
    relatedVocabIds: ['1-165'],
  },

  {
    id: 'g1-042',
    gfCode: '一-42',
    title: 'Kalimat Seru (Eksklamatif)',
    titleZh: '感叹句',
    pattern: '太 + Adj + 了！\n真 + Adj！',
    explanation: 'Kalimat seru mengungkapkan perasaan kuat. Pola 太...了 sangat umum untuk mengekspresikan sesuatu yang berlebihan atau mengejutkan.',
    examples: [
      { zh: '今天太热了！', pinyin: 'Jīntiān tài rè le!', id: 'Hari ini terlalu panas!' },
      { zh: '这水果真好吃！', pinyin: 'Zhè shuǐguǒ zhēn hǎochī!', id: 'Buah ini sungguh enak!' },],
    tags: ['jenis kalimat', 'seru', 'eksklamatif', '太...了'],
    level: 1,
  
    relatedVocabIds: ['1-108', '1-203', '1-283'],
  },


  // ============================================================
  // ── 特殊句型 ──
  // ============================================================

  {
    id: 'g1-043',
    gfCode: '一-43',
    title: 'Kalimat 是 (Kopula)',
    titleZh: '"是"字句',
    pattern: '(1) A + 是 + B (A adalah B — identitas/kategori)\n(2) A + 是 + B + 的 (menekankan keterangan)\n(3) Benda + 是 + Adj + 的 (menyatakan karakteristik)',
    explanation: '是 dipakai untuk: (1) menyatakan identitas atau kategori, (2) menekankan informasi waktu/tempat/cara dengan pola 是...的, (3) menyatakan karakteristik. Negasi: 不是.',
    examples: [
      { zh: '他是我的老师。', pinyin: 'Tā shì wǒ de lǎoshī.', id: 'Dia adalah guruku.' },
      { zh: '这是他的书。', pinyin: 'Zhè shì tā de shū.', id: 'Ini adalah bukunya.' },
      { zh: '花是白的。', pinyin: 'Huā shì bái de.', id: 'Bunganya berwarna putih.' },
      { zh: '车站东边是一个学校。', pinyin: 'Chēzhàn dōngbian shì yī gè xuéxiào.', id: 'Di sebelah timur stasiun ada sebuah sekolah.' },],
    tags: ['kalimat khusus', '是字句', 'kopula', 'identitas'],
    level: 1,
  
    relatedVocabIds: ['1-030', '1-186', '1-296'],
  },

  {
    id: 'g1-044',
    gfCode: '一-44',
    title: 'Kalimat 有 (Kepemilikan dan Keberadaan)',
    titleZh: '"有"字句1',
    pattern: '(1) S + 有 + O (memiliki)\n(2) Tempat + 有 + O (ada di...)\nNegasi: 没有 (BUKAN 不有)',
    explanation: '有 punya dua fungsi utama: (1) kepemilikan (punya/memiliki) dan (2) keberadaan (ada di suatu tempat). Keduanya dinegasikan dengan 没有, bukan 不有.',
    examples: [
      { zh: '我有很多书。', pinyin: 'Wǒ yǒu hěn duō shū.', id: 'Saya punya banyak buku.' },
      { zh: '他没有哥哥。', pinyin: 'Tā méiyǒu gēge.', id: 'Dia tidak punya kakak laki-laki.' },
      { zh: '房间里有两张桌子。', pinyin: 'Fángjiān lǐ yǒu liǎng zhāng zhuōzi.', id: 'Di dalam kamar ada dua meja.' },
      { zh: '房间里没有桌子。', pinyin: 'Fángjiān lǐ méiyǒu zhuōzi.', id: 'Di dalam kamar tidak ada meja.' },],
    tags: ['kalimat khusus', '有字句', 'kepemilikan', 'keberadaan', '有'],
    level: 1,
  
    relatedVocabIds: ['1-013', '1-123', '1-263', '1-296'],
  },

  {
    id: 'g1-045',
    gfCode: '一-45',
    title: 'Kalimat Eksistensial (存现句)',
    titleZh: '存现句1',
    pattern: '(1) Tempat + 是 + Benda (di tempat itu ada/merupakan sesuatu)\\n(2) Tempat + 有 + Angka+Kata Ukuran + Benda (di tempat itu terdapat sejumlah sesuatu)',
    explanation: '存现句 menyatakan keberadaan sesuatu di suatu tempat. Diawali dengan keterangan tempat (bukan subjek pelaku), diikuti 是 (menunjukkan apa yang ada di sana secara pasti/tunggal) atau 有 (menunjukkan ada sesuatu, biasanya dengan jumlah).',
    examples: [
      { zh: '前边是学校。', pinyin: 'Qiánbian shì xuéxiào.', id: 'Di depan adalah sekolah.' },
      { zh: '桌子上是他的书。', pinyin: 'Zhuōzi shàng shì tā de shū.', id: 'Di atas meja adalah bukunya.' },
      { zh: '房间里有两把椅子。', pinyin: 'Fángjiān lǐ yǒu liǎng bǎ yǐzi.', id: 'Di dalam kamar ada dua kursi.' },
      { zh: '学校旁边有一家书店。', pinyin: 'Xuéxiào pángbiān yǒu yì jiā shūdiàn.', id: 'Di sebelah sekolah ada sebuah toko buku.' },
    ],
    tags: ['cun xian ju', 'kalimat eksistensial', '是', '有'],
    level: 1,
  
    relatedVocabIds: ['1-186', '1-263'],
  },

  {
    id: 'g1-046',
    gfCode: '一-46',
    title: 'Kalimat Berpelesan (连动句)',
    titleZh: '连动句1',
    pattern: '(1) S + V1 + V2 (V2 = tujuan dari V1, aksi berurutan)\\n(2) S + V1 + V2 (V1 = cara melakukan V2)',
    explanation: '连动句 memiliki dua kata kerja atau lebih dengan satu subjek yang sama, tanpa kata penghubung. Pola (1): tindakan kedua adalah tujuan dari tindakan pertama, terjadi berurutan (misal: 去 + tempat + melakukan sesuatu). Pola (2): tindakan pertama menyatakan cara/alat untuk melakukan tindakan kedua (misal: naik kendaraan + pergi).',
    examples: [
      { zh: '我去超市买东西。', pinyin: 'Wǒ qù chāoshì mǎi dōngxi.', id: '(tujuan) Saya pergi ke supermarket untuk berbelanja.' },
      { zh: '他来学校上课。', pinyin: 'Tā lái xuéxiào shàngkè.', id: '(tujuan) Dia datang ke sekolah untuk belajar.' },
      { zh: '我们坐火车去北京。', pinyin: 'Wǒmen zuò huǒchē qù Běijīng.', id: '(cara) Kami naik kereta pergi ke Beijing.' },
      { zh: '她用手机打电话。', pinyin: 'Tā yòng shǒujī dǎ diànhuà.', id: '(cara) Dia menelepon menggunakan ponsel.' },
    ],
    tags: ['lian dong ju', 'kalimat berpelesan', 'serial verb'],
    level: 1,
  
    relatedVocabIds: [],
  },

  {
    id: 'g1-047',
    gfCode: '一-47',
    title: 'Kalimat Berobjek Ganda (双宾语句)',
    titleZh: '双宾语句1',
    pattern: 'S + V + O1(orang) + O2(benda)',
    explanation: '双宾语句 memiliki kata kerja yang diikuti oleh dua objek sekaligus: objek pertama biasanya orang (penerima) dan objek kedua biasanya benda (yang diberikan/diajarkan/ditanyakan). Kata kerja yang umum dipakai: 给、教、问、告诉.',
    examples: [
      { zh: '老师教我们汉语。', pinyin: 'Lǎoshī jiāo wǒmen Hànyǔ.', id: 'Guru mengajari kami bahasa Mandarin.' },
      { zh: '请给我一杯水。', pinyin: 'Qǐng gěi wǒ yì bēi shuǐ.', id: 'Tolong berikan saya segelas air.' },
      { zh: '我想问你一个问题。', pinyin: 'Wǒ xiǎng wèn nǐ yí gè wèntí.', id: 'Saya ingin bertanya satu pertanyaan padamu.' },
    ],
    tags: ['shuang bin yu ju', 'objek ganda', '给', '教', '问'],
    level: 1,
  
    relatedVocabIds: [],
  },


  // ============================================================
  // ── 复句 (Kalimat Majemuk) ──
  // ============================================================

  {
    id: 'g1-048',
    gfCode: '一-48',
    title: 'Kalimat Majemuk Tanpa Konjungsi',
    titleZh: '不用关联词语的复句',
    pattern: 'Klausa 1, Klausa 2 (hubungan tersirat dari konteks, tanpa kata penghubung)',
    explanation: 'Dua klausa dapat digabungkan langsung tanpa kata penghubung apa pun; hubungan makna (sebab-akibat, kontras, urutan, dsb.) dipahami dari konteks kalimat itu sendiri.',
    examples: [
      { zh: '外边下雨，我们不出去了。', pinyin: 'Wàibian xià yǔ, wǒmen bù chūqù le.', id: 'Di luar hujan, kami tidak jadi keluar.' },
      { zh: '他很忙，没有时间休息。', pinyin: 'Tā hěn máng, méiyǒu shíjiān xiūxi.', id: 'Dia sangat sibuk, tidak ada waktu istirahat.' },
    ],
    tags: ['kalimat majemuk', 'fu ju', 'tanpa konjungsi'],
    level: 1,
  
    relatedVocabIds: ['1-013', '1-030'],
  },

  {
    id: 'g1-049',
    gfCode: '一-49',
    title: 'Kalimat Majemuk Koordinatif: 也、还',
    titleZh: '并列复句：……，也……／……，还……',
    pattern: 'Klausa 1，S(sama/beda) + 也 + Klausa 2\\nKlausa 1，S(sama/beda) + 还 + Klausa 2',
    explanation: '也 menghubungkan dua pernyataan yang setara/sejalan (juga). 还 menghubungkan dua pernyataan yang menambahkan informasi lain (masih/lagi/selain itu). Keduanya diletakkan sebelum kata kerja pada klausa kedua.',
    examples: [
      { zh: '我喜欢看电视，也喜欢看电影。', pinyin: 'Wǒ xǐhuan kàn diànshì, yě xǐhuan kàn diànyǐng.', id: 'Saya suka menonton TV, juga suka menonton film.' },
      { zh: '他有一个哥哥，也有一个姐姐。', pinyin: 'Tā yǒu yí gè gēge, yě yǒu yí gè jiějie.', id: 'Dia punya kakak laki-laki, juga punya kakak perempuan.' },
      { zh: '这个房间很大，还很干净。', pinyin: 'Zhège fángjiān hěn dà, hái hěn gānjìng.', id: 'Kamar ini sangat besar, dan juga sangat bersih.' },
      { zh: '他会说汉语，还会说英语。', pinyin: 'Tā huì shuō Hànyǔ, hái huì shuō Yīngyǔ.', id: 'Dia bisa bicara bahasa Mandarin, dan juga bahasa Inggris.' },
    ],
    tags: ['kalimat majemuk', 'koordinatif', '也', '还'],
    level: 1,
  
    relatedVocabIds: ['1-067', '1-253'],
  },


  // ============================================================
  // 动作的态 — ASPEK TINDAKAN
  // ============================================================

  {
    id: 'g1-050',
    gfCode: '一-50',
    title: 'Aspek Kompletif: 了¹ Setelah Kata Kerja',
    titleZh: '完成态：用动态助词"了¹"表示',
    pattern: 'V + 了 (+ O) — tindakan sudah selesai\nNegasi: 没(有) + V (tanpa 了)',
    explanation: '了 langsung setelah kata kerja menandai aspek kompletif — tindakan yang sudah terjadi/selesai. Untuk menyatakan jumlah/kualitas objek, frasa bilangan diletakkan setelah 了.',
    examples: [
      { zh: '他买了两个面包。', pinyin: 'Tā mǎi le liǎng gè miànbāo.', id: 'Dia sudah membeli dua roti.' },
      { zh: '他没买面包。', pinyin: 'Tā méi mǎi miànbāo.', id: 'Dia tidak membeli roti.' },
      { zh: '我喝了很多水。', pinyin: 'Wǒ hē le hěn duō shuǐ.', id: 'Saya sudah minum banyak air.' },],
    tags: ['aspek kompletif', '了', 'selesai', 'tindakan'],
    level: 1,
  
    relatedVocabIds: ['1-108', '1-263'],
  },

  {
    id: 'g1-051',
    gfCode: '一-51',
    title: 'Aspek Perubahan: 了² di Akhir Kalimat',
    titleZh: '变化态：用动态助词"了²"表示',
    pattern: 'Kalimat + 了 (perubahan keadaan/situasi baru)',
    explanation: '了 di akhir kalimat (bukan setelah kata kerja) menyatakan perubahan keadaan atau situasi baru yang baru terjadi. Berbeda dari 了¹ yang menandai aspek kompletif.',
    examples: [
      { zh: '她病了。', pinyin: 'Tā bìng le.', id: 'Dia sakit (baru saja/sekarang).' },
      { zh: '她没病。', pinyin: 'Tā méi bìng.', id: 'Dia tidak sakit.' },
      { zh: '雨小了。', pinyin: 'Yǔ xiǎo le.', id: 'Hujannya sudah mengecil.' },
      { zh: '他吃早饭了。', pinyin: 'Tā chī zǎofàn le.', id: 'Dia sudah makan pagi (situasi baru).' },],
    tags: ['aspek', 'perubahan', '了', 'situasi baru'],
    level: 1,
  
    relatedVocabIds: ['1-108'],
  },

  {
    id: 'g1-052',
    gfCode: '一-52',
    title: 'Aspek Progresif: Sedang Berlangsung',
    titleZh: '进行态',
    pattern: '(1) 在/正/正在 + V (sedang...)\n(2) 在/正/正在 + V + 呢 (sedang... lho)\n(3) V + 呢 (sedang... — tanpa 在)',
    explanation: 'Aspek progresif menyatakan tindakan yang sedang berlangsung saat ini. 在 lebih umum, 正在 lebih menekankan "tepat sedang". 呢 di akhir memberikan nuansa "lho/sedang begini". Waktu yang jelas (sekarang) sering menggantikan penanda aspek.',
    examples: [
      { zh: '孩子在睡觉，你别说话。', pinyin: 'Háizi zài shuìjiào, nǐ bié shuōhuà.', id: 'Anak sedang tidur, kamu jangan bicara.' },
      { zh: '外边正在下雨。', pinyin: 'Wàibian zhèngzài xià yǔ.', id: 'Di luar sedang hujan.' },
      { zh: '你等一下儿，他正吃饭呢。', pinyin: 'Nǐ děng yīxiàr, tā zhèng chīfàn ne.', id: 'Kamu tunggu sebentar, dia sedang makan.' },
      { zh: '同学们正在考试呢。', pinyin: 'Tóngxuémen zhèngzài kǎoshì ne.', id: 'Para teman sekelas sedang ujian.' },],
    tags: ['aspek progresif', '在', '正在', 'sedang', '呢'],
    level: 1,
  
    relatedVocabIds: ['1-144', '1-271', '1-284'],
  },


  // ============================================================
  // 特殊表达法 — EKSPRESI KHUSUS
  // ============================================================

  {
    id: 'g1-053',
    gfCode: '一-53',
    title: 'Cara Menyatakan Uang dalam Bahasa Mandarin',
    titleZh: '钱数表示法',
    pattern: '元/块 (yuan) → 角/毛 (jiao/0.1 yuan) → 分 (fen/0.01 yuan)\nX块Y毛Z分 / X元Y角Z分',
    explanation: 'Satuan uang Tiongkok: 元(yuán)/块(kuài) = yuan, 角(jiǎo)/毛(máo) = jiao (0.1 yuan), 分(fēn) = fen (0.01 yuan). 块 dan 毛 lebih informal. Nol di tengah: 一百零五块 = 105 yuan. Dalam percakapan, satuan terakhir bisa dihilangkan.',
    examples: [
      { zh: '九块三（毛）= 9.30元', pinyin: 'jiǔ kuài sān (máo)', id: '9,30 yuan' },
      { zh: '十五块六毛三（分）= 15.63元', pinyin: 'shíwǔ kuài liù máo sān (fēn)', id: '15,63 yuan' },
      { zh: '一百五十（元）= 一百五十（块）= 150元', pinyin: 'yī bǎi wǔshí (yuán)', id: '150 yuan' },
      { zh: '一百零五（元）= 一百零五（块）= 105元', pinyin: 'yī bǎi líng wǔ (yuán)', id: '105 yuan' },],
    tags: ['ekspresi khusus', 'uang', 'harga', '元', '块', '毛'],
    level: 1,
  
    relatedVocabIds: ['1-055', '1-105', '1-162', '1-268'],
  },

  {
    id: 'g1-054',
    gfCode: '一-54',
    title: 'Cara Menyatakan Bilangan Tingkat (Ordinal)',
    titleZh: '序数表达法1：第+数词',
    pattern: '第 + Angka (第一、第二、第三, dst.)',
    explanation: '第 diletakkan sebelum angka untuk membentuk bilangan tingkat/urutan (ordinal), setara dengan "ke-" dalam bahasa Indonesia. Tanpa 第, angka hanya menunjukkan jumlah, bukan urutan.',
    examples: [
      { zh: '这是我第一次去中国。', pinyin: 'Zhè shì wǒ dì yī cì qù Zhōngguó.', id: 'Ini kali pertama saya pergi ke Tiongkok.' },
      { zh: '他是第二名。', pinyin: 'Tā shì dì èr míng.', id: 'Dia peringkat kedua.' },
      { zh: '我家住在第三层。', pinyin: 'Wǒ jiā zhù zài dì sān céng.', id: 'Rumah saya di lantai tiga.' },
    ],
    tags: ['xu shu', 'bilangan tingkat', '第', 'ordinal'],
    level: 1,
  
    relatedVocabIds: ['1-031', '1-048', '1-173', '1-254'],
  },

  {
    id: 'g1-055',
    gfCode: '一-55',
    title: 'Cara Menyatakan Waktu: Tanggal dan Jam',
    titleZh: '时间表示法',
    pattern: '(1) 年/月/日(号)/星期 — Tahun + 年, Bulan + 月, Tanggal + 号/日, 星期 + 一~日\\n(2) 钟点 — Jam + 点, Menit + 分, setengah = 半',
    explanation: '顺序 penyebutan waktu dalam bahasa Mandarin selalu dari satuan besar ke kecil: tahun-bulan-tanggal-hari dalam seminggu. Untuk jam, urutannya jam-menit (三点十分), dengan 半 untuk menyatakan setengah jam (三点半 = jam setengah empat).',
    examples: [
      { zh: '今天是二〇二五年一月一日，星期三。', pinyin: 'Jīntiān shì èr líng èr wǔ nián yī yuè yī rì, xīngqīsān.', id: 'Hari ini tanggal 1 Januari 2025, hari Rabu.' },
      { zh: '现在几点？', pinyin: 'Xiànzài jǐ diǎn?', id: 'Sekarang jam berapa?' },
      { zh: '现在四点半。', pinyin: 'Xiànzài sì diǎn bàn.', id: 'Sekarang jam setengah lima.' },
      { zh: '火车八点二十分开。', pinyin: 'Huǒchē bā diǎn èrshí fēn kāi.', id: 'Kereta berangkat jam delapan lewat dua puluh menit.' },
    ],
    tags: ['waktu', 'shi jian biao shi fa', 'tahun bulan tanggal', 'jam'],
    level: 1,
  
    relatedVocabIds: ['1-007', '1-033', '1-055', '1-071', '1-148', '1-172', '1-188', '1-243', '1-254', '1-269'],
  },

]