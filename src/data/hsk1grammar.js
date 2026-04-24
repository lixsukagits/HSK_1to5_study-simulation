// HSK 1 — Grammar Points (Poin Grammar Level 1)
// Sumber: GF 0025-2021 Appendix A.1 (一级语法点) — Standar Resmi Kementerian Pendidikan China
// Total: 43 poin grammar resmi (一-01 s.d. 一-43)
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

  // ════════════════════════════════════════════════════════════
  // A.1.1  词类 — KELAS KATA
  // ════════════════════════════════════════════════════════════

  // ── A.1.1.1 名词 (Kata Benda) ─────────────────────────────

  {
    id: 'g1-001',
    gfCode: '一-01',
    title: 'Kata Posisi (Nomina Arah/Lokasi)',
    titleZh: '方位名词',
    pattern: 'Benda + 上/下/里/外/前/后/左/右/东/南/西/北\nBenda + 上边/下边/里边/外边/前边/后边/左边/右边/东边/南边/西边/北边',
    explanation: 'Kata posisi menempel setelah kata benda untuk menunjukkan letak/arah. Bentuk pendek (上、下) dipakai langsung setelah benda. Bentuk panjang (上边、下边) lebih umum dan netral. Keduanya bisa dipakai sebagai subjek atau keterangan tempat.',
    examples: [
      { zh: '书在桌子上。', pinyin: 'Shū zài zhuōzi shàng.', id: 'Buku ada di atas meja.' },
      { zh: '手机在书包里。', pinyin: 'Shǒujī zài shūbāo lǐ.', id: 'Ponsel ada di dalam tas.' },
      { zh: '房间里没有人。', pinyin: 'Fángjiān lǐ méiyǒu rén.', id: 'Di dalam kamar tidak ada orang.' },
      { zh: '他去东边的车站。', pinyin: 'Tā qù dōngbian de chēzhàn.', id: 'Dia pergi ke stasiun di sisi timur.' },
    ],
    tags: ['kata posisi', 'lokasi', 'arah', 'kata benda'],
    level: 1,
  },

  // ── A.1.1.2 动词 (Kata Kerja) ─────────────────────────────

  {
    id: 'g1-002',
    gfCode: '一-02',
    title: 'Kata Modal: 会 dan 能 (kemampuan)',
    titleZh: '能愿动词：会、能',
    pattern: 'S + 会/能 + V',
    explanation: '会 menyatakan kemampuan yang dipelajari (bisa karena belajar). 能 menyatakan kemampuan fisik atau kondisi yang memungkinkan (bisa/mampu). Negasi: 不会 / 不能. Keduanya diletakkan sebelum kata kerja.',
    examples: [
      { zh: '我不会说中文。', pinyin: 'Wǒ bù huì shuō Zhōngwén.', id: 'Saya tidak bisa berbicara bahasa Mandarin.' },
      { zh: '明天你能来吗？', pinyin: 'Míngtiān nǐ néng lái ma?', id: 'Apakah kamu bisa datang besok?' },
      { zh: '他会开车。', pinyin: 'Tā huì kāichē.', id: 'Dia bisa menyetir mobil.' },
    ],
    tags: ['kata modal', 'kemampuan', '会', '能'],
    level: 1,
  },

  {
    id: 'g1-003',
    gfCode: '一-03',
    title: 'Kata Modal: 想 dan 要 (keinginan)',
    titleZh: '能愿动词：想、要',
    pattern: 'S + 想/要 + V',
    explanation: '想 menyatakan keinginan atau niat yang lebih lunak (ingin/mau). 要 menyatakan keinginan yang lebih tegas atau kebutuhan (mau/harus). Negasi: 不想 / 不要 (hati-hati: 不要 juga bisa berarti "jangan").',
    examples: [
      { zh: '我想学中文。', pinyin: 'Wǒ xiǎng xué Zhōngwén.', id: 'Saya ingin belajar bahasa Mandarin.' },
      { zh: '他要去书店。', pinyin: 'Tā yào qù shūdiàn.', id: 'Dia mau pergi ke toko buku.' },
      { zh: '你想喝什么？', pinyin: 'Nǐ xiǎng hē shénme?', id: 'Kamu ingin minum apa?' },
    ],
    tags: ['kata modal', 'keinginan', '想', '要'],
    level: 1,
  },

  // ── A.1.1.3 代词 (Kata Ganti) ─────────────────────────────

  {
    id: 'g1-004',
    gfCode: '一-04',
    title: 'Kata Tanya (Pronomina Interogatif)',
    titleZh: '疑问代词',
    pattern: 'Kata tanya menggantikan bagian kalimat yang ditanyakan:\n多、多少、几、哪、哪儿、哪里、哪些、什么、谁、怎么',
    explanation: 'Kata tanya dalam bahasa Mandarin diletakkan tepat di posisi informasi yang ingin ditanyakan, bukan di awal kalimat. Urutan kalimat tidak berubah dibanding kalimat pernyataan.',
    examples: [
      { zh: '他多大？', pinyin: 'Tā duō dà?', id: 'Dia berumur berapa?' },
      { zh: '你们班有多少个学生？', pinyin: 'Nǐmen bān yǒu duōshao gè xuéshēng?', id: 'Di kelasmu ada berapa siswa?' },
      { zh: '你喜欢哪个电影？', pinyin: 'Nǐ xǐhuan nǎge diànyǐng?', id: 'Kamu suka film yang mana?' },
      { zh: '谁是老师？', pinyin: 'Shéi shì lǎoshī?', id: 'Siapa yang guru?' },
      { zh: '你怎么去医院？', pinyin: 'Nǐ zěnme qù yīyuàn?', id: 'Kamu pergi ke rumah sakit dengan apa/bagaimana?' },
    ],
    tags: ['kata tanya', 'pronomina interogatif', 'pertanyaan'],
    level: 1,
  },

  {
    id: 'g1-005',
    gfCode: '一-05',
    title: 'Kata Ganti Orang (Pronomina Persona)',
    titleZh: '人称代词',
    pattern: 'Tunggal: 我/你/您/他/她\nJamak: 我们/你们/他们/她们',
    explanation: '们 ditambahkan untuk bentuk jamak. 您 adalah bentuk hormat dari 你. 它 (tā) untuk benda/hewan. Kata ganti orang bisa langsung menjadi subjek, objek, atau dengan 的 menjadi kata sifat kepemilikan.',
    examples: [
      { zh: '你好，我要两个本子。', pinyin: 'Nǐ hǎo, wǒ yào liǎng gè běnzi.', id: 'Halo, saya mau dua buku tulis.' },
      { zh: '她很高。', pinyin: 'Tā hěn gāo.', id: 'Dia (perempuan) sangat tinggi.' },
      { zh: '他们是学生。', pinyin: 'Tāmen shì xuéshēng.', id: 'Mereka adalah pelajar.' },
      { zh: '她们是我的同学。', pinyin: 'Tāmen shì wǒ de tóngxué.', id: 'Mereka (perempuan) adalah teman sekelasku.' },
    ],
    tags: ['kata ganti orang', 'pronomina persona', 'jamak'],
    level: 1,
  },

  {
    id: 'g1-006',
    gfCode: '一-06',
    title: 'Kata Tunjuk (Pronomina Demonstratif)',
    titleZh: '指示代词',
    pattern: 'Dekat: 这/这儿/这里/这些\nJauh: 那/那儿/那里/那些\nLainnya: 别的、有的',
    explanation: '这 (ini/di sini) untuk yang dekat, 那 (itu/di sana) untuk yang jauh. Bentuk 儿 (这儿/那儿) lebih informal, 里 (这里/那里) lebih netral. 这些/那些 untuk jamak.',
    examples: [
      { zh: '这是谁的手机？', pinyin: 'Zhè shì shéi de shǒujī?', id: 'Ini ponsel siapa?' },
      { zh: '你坐这里，弟弟坐那里。', pinyin: 'Nǐ zuò zhèlǐ, dìdi zuò nàlǐ.', id: 'Kamu duduk di sini, adik duduk di sana.' },
      { zh: '那些东西都很贵。', pinyin: 'Nàxiē dōngxi dōu hěn guì.', id: 'Barang-barang itu semua mahal.' },
      { zh: '有的同学在休息，有的同学在看书。', pinyin: 'Yǒude tóngxué zài xiūxi, yǒude tóngxué zài kànshū.', id: 'Sebagian teman sekelas istirahat, sebagian lagi membaca buku.' },
    ],
    tags: ['kata tunjuk', 'pronomina demonstratif', '这', '那'],
    level: 1,
  },

  // ── A.1.1.4 数词 (Kata Bilangan) ──────────────────────────

  {
    id: 'g1-007',
    gfCode: '一-07',
    title: 'Kata Bilangan (Angka dan Setengah)',
    titleZh: '数词',
    pattern: 'Dasar: 一/两/二、三、四、五、六、七、八、九、零\nTingkat: 十、百\nKhusus: 半\nDua di depan kata ukuran: 两 (bukan 二)',
    explanation: 'Angka 两 (liǎng) dipakai sebelum kata ukuran (dua orang = 两个人), bukan 二. 二 dipakai untuk urutan (第二) dan operasi matematika. Nol = 零 dipakai dalam angka campuran (105 = 一百零五). 半 = setengah.',
    examples: [
      { zh: '五加十五等于二十。', pinyin: 'Wǔ jiā shíwǔ děngyú èrshí.', id: 'Lima ditambah lima belas sama dengan dua puluh.' },
      { zh: '两个人', pinyin: 'liǎng gè rén', id: 'dua orang' },
      { zh: '两本书', pinyin: 'liǎng běn shū', id: 'dua buku' },
      { zh: '八点半', pinyin: 'bā diǎn bàn', id: 'setengah sembilan (jam delapan tiga puluh)' },
    ],
    tags: ['kata bilangan', 'angka', '两', '半', 'bilangan'],
    level: 1,
  },

  // ── A.1.1.5 量词 (Kata Ukuran/Satuan) ────────────────────

  {
    id: 'g1-008',
    gfCode: '一-08',
    title: 'Kata Ukuran Nomina',
    titleZh: '名量词',
    pattern: 'Angka + Kata Ukuran + Benda\n杯、本、个、家、间、口、块、页',
    explanation: 'Kata ukuran wajib dipakai antara angka dan kata benda. Setiap benda punya kata ukurannya sendiri: 个 (umum), 本 (buku), 杯 (cangkir/gelas), 家 (keluarga/perusahaan), 间 (ruangan), 口 (mulut/anggota keluarga), 块 (potongan/yuan), 页 (halaman).',
    examples: [
      { zh: '两杯牛奶', pinyin: 'liǎng bēi niúnǎi', id: 'dua gelas susu' },
      { zh: '三本书', pinyin: 'sān běn shū', id: 'tiga buku' },
      { zh: '四个学生', pinyin: 'sì gè xuéshēng', id: 'empat pelajar' },
      { zh: '五家商店', pinyin: 'wǔ jiā shāngdiàn', id: 'lima toko' },
      { zh: '六间房子', pinyin: 'liù jiān fángzi', id: 'enam kamar' },
    ],
    tags: ['kata ukuran', 'satuan', '个', '本', '杯'],
    level: 1,
  },

  // ── A.1.1.6 副词 (Kata Keterangan) ───────────────────────

  {
    id: 'g1-009',
    gfCode: '一-09',
    title: 'Kata Keterangan Derajat',
    titleZh: '程度副词',
    pattern: 'S + 非常/很/太/真/最 + Adj/V',
    explanation: 'Kata keterangan derajat diletakkan sebelum kata sifat atau kata kerja. 很 (hěn) = sangat (netral), 非常 (fēicháng) = sangat/luar biasa (lebih kuat dari 很), 太 (tài) = terlalu/sangat, 真 (zhēn) = sungguh/benar-benar, 最 (zuì) = paling (superlatif).',
    examples: [
      { zh: '我非常喜欢这本书。', pinyin: 'Wǒ fēicháng xǐhuan zhè běn shū.', id: 'Saya sangat menyukai buku ini.' },
      { zh: '那个本子很好看。', pinyin: 'Nàge běnzi hěn hǎokàn.', id: 'Buku tulis itu sangat bagus.' },
      { zh: '这里太冷了。', pinyin: 'Zhèlǐ tài lěng le.', id: 'Di sini terlalu dingin.' },
      { zh: '你的房间真干净！', pinyin: 'Nǐ de fángjiān zhēn gānjìng!', id: 'Kamarmu sungguh bersih!' },
      { zh: '我最喜欢打球。', pinyin: 'Wǒ zuì xǐhuan dǎ qiú.', id: 'Saya paling suka main bola.' },
    ],
    tags: ['kata keterangan', 'derajat', '很', '非常', '太', '真', '最'],
    level: 1,
  },

  {
    id: 'g1-010',
    gfCode: '一-10',
    title: 'Kata Keterangan Ruang Lingkup dan Bersama',
    titleZh: '范围、协同副词',
    pattern: '都¹ + V/Adj (semua/keduanya)\n一块儿/一起 + V (bersama-sama)',
    explanation: '都 (dōu) bermakna "semua/keduanya", selalu diletakkan SETELAH subjek dan SEBELUM predikat. 一起/一块儿 bermakna "bersama-sama", diletakkan sebelum kata kerja.',
    examples: [
      { zh: '同学们都很认真。', pinyin: 'Tóngxuémen dōu hěn rènzhēn.', id: 'Para teman sekelas semuanya sangat serius.' },
      { zh: '我们常一块儿玩儿。', pinyin: 'Wǒmen cháng yīkuàir wánr.', id: 'Kami sering bermain bersama-sama.' },
      { zh: '明天他们一起去图书馆。', pinyin: 'Míngtiān tāmen yīqǐ qù túshūguǎn.', id: 'Besok mereka pergi ke perpustakaan bersama-sama.' },
    ],
    tags: ['kata keterangan', 'ruang lingkup', '都', '一起', '一块儿'],
    level: 1,
  },

  {
    id: 'g1-011',
    gfCode: '一-11',
    title: 'Kata Keterangan Waktu (Segera, Dulu, Sedang)',
    titleZh: '时间副词',
    pattern: '马上 + V (segera)\n先 + V (terlebih dahulu)\n有时 + V (kadang-kadang)\n在/正/正在 + V (sedang...)',
    explanation: '马上 = segera/sebentar lagi. 先 = terlebih dahulu/dulu. 有时 = kadang-kadang. 在/正/正在 = sedang dalam proses melakukan sesuatu (penanda aspek progresif). Sering dikombinasikan dengan 呢 di akhir.',
    examples: [
      { zh: '医生马上来。', pinyin: 'Yīshēng mǎshàng lái.', id: 'Dokter segera datang.' },
      { zh: '老师，我先说吧。', pinyin: 'Lǎoshī, wǒ xiān shuō ba.', id: 'Bu/Pak guru, saya yang bicara dulu ya.' },
      { zh: '他有时晚上上课。', pinyin: 'Tā yǒushí wǎnshang shàngkè.', id: 'Dia kadang-kadang kuliah malam.' },
      { zh: '我在看电视呢。', pinyin: 'Wǒ zài kàn diànshì ne.', id: 'Saya sedang menonton TV.' },
      { zh: '他们正在唱歌。', pinyin: 'Tāmen zhèngzài chànggē.', id: 'Mereka sedang bernyanyi.' },
    ],
    tags: ['kata keterangan', 'waktu', '马上', '先', '正在', '有时'],
    level: 1,
  },

  {
    id: 'g1-012',
    gfCode: '一-12',
    title: 'Kata Keterangan Frekuensi',
    titleZh: '频率、重复副词',
    pattern: '常/常常 + V (sering)\n再¹ + V (lagi/sekali lagi)',
    explanation: '常 dan 常常 bermakna "sering/biasanya". 再 bermakna "lagi/sekali lagi" untuk tindakan yang belum terjadi. Berbeda dengan 又 (yòu) yang untuk tindakan yang sudah berulang.',
    examples: [
      { zh: '他常去饭店吃饭。', pinyin: 'Tā cháng qù fàndiàn chīfàn.', id: 'Dia sering pergi makan di restoran.' },
      { zh: '她常常不吃早饭。', pinyin: 'Tā chángcháng bù chī zǎofàn.', id: 'Dia sering tidak sarapan.' },
      { zh: '今天的电影太好看了，我们明天再去看吧。', pinyin: 'Jīntiān de diànyǐng tài hǎokàn le, wǒmen míngtiān zài qù kàn ba.', id: 'Film hari ini sangat bagus, besok kita nonton lagi ya.' },
    ],
    tags: ['kata keterangan', 'frekuensi', '常', '常常', '再'],
    level: 1,
  },

  {
    id: 'g1-013',
    gfCode: '一-13',
    title: 'Kata Keterangan Hubungan (juga/masih)',
    titleZh: '关联副词',
    pattern: '还¹ + V/Adj (masih; juga/lagi)\n也 + V/Adj (juga; pula)',
    explanation: '还 bermakna "masih" (keadaan berlanjut) atau "juga/lagi" (menambahkan informasi). 也 bermakna "juga/pula" untuk pernyataan paralel. 也 dan 还 selalu sebelum predikat, bukan di awal kalimat.',
    examples: [
      { zh: '他要去上海，还要去北京。', pinyin: 'Tā yào qù Shànghǎi, hái yào qù Běijīng.', id: 'Dia mau pergi ke Shanghai, juga mau pergi ke Beijing.' },
      { zh: '他是学生，我也是学生。', pinyin: 'Tā shì xuéshēng, wǒ yě shì xuéshēng.', id: 'Dia adalah pelajar, saya juga pelajar.' },
    ],
    tags: ['kata keterangan', 'hubungan', '还', '也', 'juga'],
    level: 1,
  },

  {
    id: 'g1-014',
    gfCode: '一-14',
    title: 'Kata Keterangan Negasi',
    titleZh: '否定副词',
    pattern: '别 + V (jangan — perintah negatif)\n不 + V/Adj (tidak — negasi umum)\n没/没有 + V (tidak/belum — negasi lampau/kepemilikan)',
    explanation: '别 dipakai untuk melarang/meminta orang tidak melakukan sesuatu. 不 untuk negasi umum (keadaan, kebiasaan, atau keinginan). 没/没有 untuk menyatakan sesuatu belum terjadi atau tidak ada/tidak punya.',
    examples: [
      { zh: '你别进来。', pinyin: 'Nǐ bié jìnlái.', id: 'Kamu jangan masuk.' },
      { zh: '今天不热。', pinyin: 'Jīntiān bú rè.', id: 'Hari ini tidak panas.' },
      { zh: '他昨天没上课。', pinyin: 'Tā zuótiān méi shàngkè.', id: 'Dia kemarin tidak masuk kelas.' },
      { zh: '我今天没有吃早饭。', pinyin: 'Wǒ jīntiān méiyǒu chī zǎofàn.', id: 'Saya hari ini tidak sarapan.' },
    ],
    tags: ['negasi', '别', '不', '没', '没有'],
    level: 1,
  },

  // ── A.1.1.7 介词 (Kata Depan/Preposisi) ──────────────────

  {
    id: 'g1-015',
    gfCode: '一-15',
    title: 'Preposisi 从 (dari — waktu/tempat)',
    titleZh: '介词：引出时间、处所',
    pattern: '从¹ + Tempat/Waktu + V\n(dari/mulai dari...)',
    explanation: '从 dipakai untuk menunjukkan titik awal tempat atau waktu. Frasa 从... diletakkan sebelum kata kerja utama.',
    examples: [
      { zh: '我们从星期一到星期五工作。', pinyin: 'Wǒmen cóng xīngqīyī dào xīngqīwǔ gōngzuò.', id: 'Kami bekerja dari Senin sampai Jumat.' },
      { zh: '你从哪儿来？', pinyin: 'Nǐ cóng nǎr lái?', id: 'Kamu datang dari mana?' },
    ],
    tags: ['preposisi', '从', 'waktu', 'tempat'],
    level: 1,
  },

  {
    id: 'g1-016',
    gfCode: '一-16',
    title: 'Preposisi 在 (di — lokasi)',
    titleZh: '介词：引出处所',
    pattern: 'S + 在 + Tempat + V\n(melakukan sesuatu di suatu tempat)',
    explanation: '在 sebagai preposisi diletakkan sebelum kata kerja untuk menunjukkan lokasi suatu kegiatan. Berbeda dengan 在 sebagai kata kerja (ada di) yang menjadi predikat langsung.',
    examples: [
      { zh: '哥哥在北京学中文。', pinyin: 'Gēge zài Běijīng xué Zhōngwén.', id: 'Kakak laki-laki belajar bahasa Mandarin di Beijing.' },
      { zh: '他在手机上看电影。', pinyin: 'Tā zài shǒujī shàng kàn diànyǐng.', id: 'Dia menonton film di ponsel.' },
    ],
    tags: ['preposisi', '在', 'lokasi', 'tempat'],
    level: 1,
  },

  {
    id: 'g1-017',
    gfCode: '一-17',
    title: 'Preposisi 跟 dan 和 (dengan — objek)',
    titleZh: '介词：引出对象',
    pattern: 'S + 跟¹/和¹ + Orang + V\n(melakukan sesuatu dengan seseorang)',
    explanation: '跟 dan 和 sebagai preposisi menunjukkan orang yang terlibat bersama dalam suatu kegiatan. Diletakkan sebelum kata kerja.',
    examples: [
      { zh: '他跟老师请假了。', pinyin: 'Tā gēn lǎoshī qǐngjià le.', id: 'Dia minta izin kepada guru.' },
      { zh: '我没和姐姐一起去中国。', pinyin: 'Wǒ méi hé jiějie yīqǐ qù Zhōngguó.', id: 'Saya tidak pergi ke Tiongkok bersama kakak perempuan.' },
    ],
    tags: ['preposisi', '跟', '和', 'objek', 'bersama'],
    level: 1,
  },

  {
    id: 'g1-018',
    gfCode: '一-18',
    title: 'Preposisi 比 (dibandingkan)',
    titleZh: '介词：引出比较对象',
    pattern: 'A + 比 + B + Adj\n(A lebih [Adj] dari B)',
    explanation: '比 dipakai untuk perbandingan. Kata sifat diletakkan setelah B tanpa 很 atau 非常. Selisih bisa ditambahkan setelah kata sifat (比我高两厘米 = lebih tinggi 2 cm).',
    examples: [
      { zh: '哥哥比弟弟高。', pinyin: 'Gēge bǐ dìdi gāo.', id: 'Kakak laki-laki lebih tinggi dari adik laki-laki.' },
      { zh: '这个房间比那个房间大。', pinyin: 'Zhège fángjiān bǐ nàge fángjiān dà.', id: 'Kamar ini lebih besar dari kamar itu.' },
    ],
    tags: ['preposisi', '比', 'perbandingan'],
    level: 1,
  },

  // ── A.1.1.8 连词 (Konjungsi) ──────────────────────────────

  {
    id: 'g1-019',
    gfCode: '一-19',
    title: 'Konjungsi: 跟、还是、和',
    titleZh: '连接词或短语：跟²、还是、和²',
    pattern: 'A + 跟/和 + B (dan — menghubungkan)\nA + 还是 + B？(atau — pilihan)',
    explanation: '跟 dan 和 sebagai konjungsi menghubungkan dua kata benda/pronomina. 还是 dipakai dalam kalimat tanya pilihan (A atau B?). Berbeda dengan 或者 (huòzhě) yang untuk pernyataan.',
    examples: [
      { zh: '爸爸跟妈妈都不在家。', pinyin: 'Bàba gēn māma dōu bú zàijiā.', id: 'Ayah dan ibu keduanya tidak di rumah.' },
      { zh: '你喝茶还是喝水？', pinyin: 'Nǐ hē chá háishi hē shuǐ?', id: 'Kamu minum teh atau minum air?' },
      { zh: '我和弟弟都学习中文。', pinyin: 'Wǒ hé dìdi dōu xuéxí Zhōngwén.', id: 'Saya dan adik laki-laki semuanya belajar bahasa Mandarin.' },
    ],
    tags: ['konjungsi', '跟', '和', '还是', 'pilihan'],
    level: 1,
  },

  // ── A.1.1.9 助词 (Partikel) ───────────────────────────────

  {
    id: 'g1-020',
    gfCode: '一-20',
    title: 'Partikel Struktural: 的¹ dan 地',
    titleZh: '结构助词：的¹、地',
    pattern: 'Kata Sifat/Pronomina + 的¹ + Kata Benda (kepemilikan/modifikasi)\nKata Keterangan + 地 + Kata Kerja (cara/gaya)',
    explanation: '的 menghubungkan modifier dengan kata benda. 地 menghubungkan kata keterangan cara dengan kata kerja. Di percakapan sehari-hari, keduanya sering diucapkan sama (de).',
    examples: [
      { zh: '你的衣服很好看。', pinyin: 'Nǐ de yīfu hěn hǎokàn.', id: 'Pakaianmu sangat bagus.' },
      { zh: '他高兴地说："我明天回家。"', pinyin: 'Tā gāoxìng de shuō: "Wǒ míngtiān huí jiā."', id: 'Dia berkata dengan gembira: "Saya pulang besok."' },
    ],
    tags: ['partikel struktural', '的', '地', 'modifikasi'],
    level: 1,
  },

  {
    id: 'g1-021',
    gfCode: '一-21',
    title: 'Partikel Dinamis: 了¹ (penanda selesai)',
    titleZh: '动态助词：了¹',
    pattern: 'V + 了 (tindakan selesai/perubahan)\nNegasi: 没(有) + V (tanpa 了)',
    explanation: '了 setelah kata kerja menandai aspek kompletif (tindakan sudah selesai atau terjadi). Negasi menggunakan 没(有) — BUKAN 不 — dan 了 dihilangkan.',
    examples: [
      { zh: '他买了一本书。', pinyin: 'Tā mǎi le yī běn shū.', id: 'Dia sudah membeli sebuah buku.' },
      { zh: '他没买书。', pinyin: 'Tā méi mǎi shū.', id: 'Dia tidak membeli buku.' },
      { zh: '我写了两个汉字。', pinyin: 'Wǒ xiě le liǎng gè Hànzì.', id: 'Saya sudah menulis dua aksara Mandarin.' },
    ],
    tags: ['partikel dinamis', '了', 'aspek kompletif', 'selesai'],
    level: 1,
  },

  {
    id: 'g1-022',
    gfCode: '一-22',
    title: 'Partikel Modal: 吧、了²、吗、呢',
    titleZh: '语气助词：吧¹、了²、吗、呢',
    pattern: 'Kalimat + 吧 (saran/konfirmasi)\nKalimat + 了² (perubahan/penekanan)\nKalimat + 吗 (pertanyaan ya/tidak)\nKalimat + 呢 (pertanyaan lanjutan/sedang)',
    explanation: '吧 untuk saran atau meminta konfirmasi. 了 di akhir kalimat menandai perubahan keadaan atau penekanan situasi baru. 吗 mengubah pernyataan menjadi pertanyaan ya/tidak. 呢 menanyakan lanjutan atau menekankan aspek progresif.',
    examples: [
      { zh: '我们走吧。', pinyin: 'Wǒmen zǒu ba.', id: 'Ayo kita pergi.' },
      { zh: '我累了。', pinyin: 'Wǒ lèi le.', id: 'Saya sudah lelah (sekarang).' },
      { zh: '她是医生吗？', pinyin: 'Tā shì yīshēng ma?', id: 'Apakah dia dokter?' },
      { zh: '他是哪国人呢？', pinyin: 'Tā shì nǎ guó rén ne?', id: 'Dia orang mana ya?' },
    ],
    tags: ['partikel modal', '吧', '了', '吗', '呢', 'pertanyaan'],
    level: 1,
  },

  // ════════════════════════════════════════════════════════════
  // A.1.2  短语 — FRASA
  // ════════════════════════════════════════════════════════════

  {
    id: 'g1-023',
    gfCode: '一-23',
    title: 'Frasa Bilangan + Kata Ukuran',
    titleZh: '数量短语',
    pattern: 'Angka + Kata Ukuran (+ Kata Benda)',
    explanation: 'Frasa bilangan-ukuran bisa langsung berfungsi sebagai objek, subjek, atau keterangan. Kata benda bisa dihilangkan jika sudah jelas dari konteks.',
    examples: [
      { zh: '一个', pinyin: 'yī gè', id: 'satu (buah/orang)' },
      { zh: '两杯', pinyin: 'liǎng bēi', id: 'dua gelas' },
      { zh: '三本', pinyin: 'sān běn', id: 'tiga buah (buku)' },
      { zh: '四包', pinyin: 'sì bāo', id: 'empat bungkus' },
    ],
    tags: ['frasa', 'bilangan', 'kata ukuran'],
    level: 1,
  },

  // ════════════════════════════════════════════════════════════
  // A.1.3  句子成分 — KOMPONEN KALIMAT
  // ════════════════════════════════════════════════════════════

  {
    id: 'g1-024',
    gfCode: '一-24',
    title: 'Subjek Kalimat',
    titleZh: '名词、代词或名词性短语作主语',
    pattern: 'Kata Benda / Pronomina / Frasa Nomina + Predikat',
    explanation: 'Subjek kalimat bahasa Mandarin bisa berupa kata benda, pronomina, atau frasa nomina. Subjek biasanya di awal kalimat dan bisa dihilangkan jika jelas dari konteks.',
    examples: [
      { zh: '衣服很好看。', pinyin: 'Yīfu hěn hǎokàn.', id: 'Pakaian (itu) sangat bagus.' },
      { zh: '他在看电视。', pinyin: 'Tā zài kàn diànshì.', id: 'Dia sedang menonton TV.' },
      { zh: '这个房间很干净。', pinyin: 'Zhège fángjiān hěn gānjìng.', id: 'Kamar ini sangat bersih.' },
    ],
    tags: ['komponen kalimat', 'subjek', 'kata benda'],
    level: 1,
  },

  {
    id: 'g1-025',
    gfCode: '一-25',
    title: 'Predikat Kalimat',
    titleZh: '动词或动词性短语、形容词或形容词性短语作谓语',
    pattern: 'Subjek + Kata Kerja/Frasa Verbal (+ Objek)\nSubjek + (很) + Kata Sifat',
    explanation: 'Predikat bisa berupa kata kerja (dengan atau tanpa objek) atau kata sifat. Kata sifat sebagai predikat biasanya didahului 很 agar kalimat tidak terkesan membandingkan.',
    examples: [
      { zh: '他病了。', pinyin: 'Tā bìng le.', id: 'Dia sakit.' },
      { zh: '我们学中文。', pinyin: 'Wǒmen xué Zhōngwén.', id: 'Kami belajar bahasa Mandarin.' },
      { zh: '今天不冷。', pinyin: 'Jīntiān bù lěng.', id: 'Hari ini tidak dingin.' },
    ],
    tags: ['komponen kalimat', 'predikat', 'kata kerja', 'kata sifat'],
    level: 1,
  },

  {
    id: 'g1-026',
    gfCode: '一-26',
    title: 'Objek Kalimat',
    titleZh: '名词、代词或名词性短语作宾语',
    pattern: 'Subjek + Kata Kerja + Kata Benda/Pronomina/Frasa Nomina',
    explanation: 'Objek dalam bahasa Mandarin selalu di belakang kata kerja. Objek bisa berupa kata benda, pronomina, atau frasa nomina.',
    examples: [
      { zh: '他吃面包。', pinyin: 'Tā chī miànbāo.', id: 'Dia makan roti.' },
      { zh: '妈妈来看我了。', pinyin: 'Māma lái kàn wǒ le.', id: 'Ibu datang mengunjungi saya.' },
      { zh: '她买了一个手机。', pinyin: 'Tā mǎi le yī gè shǒujī.', id: 'Dia membeli sebuah ponsel.' },
    ],
    tags: ['komponen kalimat', 'objek'],
    level: 1,
  },

  {
    id: 'g1-027',
    gfCode: '一-27',
    title: 'Atribut / Modifier Kata Benda',
    titleZh: '名词性词语、形容词性词语、数量短语作定语',
    pattern: 'Modifier + 的 + Kata Benda\n(Kata sifat pendek bisa langsung tanpa 的)',
    explanation: 'Atribut/definisi selalu di depan kata benda dalam bahasa Mandarin. Kata sifat satu suku kata bisa langsung tanpa 的, kata sifat lebih panjang umumnya pakai 的.',
    examples: [
      { zh: '他在看中文书。', pinyin: 'Tā zài kàn Zhōngwén shū.', id: 'Dia sedang membaca buku bahasa Mandarin.' },
      { zh: '新书包很好看。', pinyin: 'Xīn shūbāo hěn hǎokàn.', id: 'Tas baru itu sangat bagus.' },
      { zh: '我喜欢干净的房间。', pinyin: 'Wǒ xǐhuan gānjìng de fángjiān.', id: 'Saya suka kamar yang bersih.' },
      { zh: '她看了两本书。', pinyin: 'Tā kàn le liǎng běn shū.', id: 'Dia sudah membaca dua buku.' },
    ],
    tags: ['komponen kalimat', 'atribut', 'modifier', 'definisi'],
    level: 1,
  },

  {
    id: 'g1-028',
    gfCode: '一-28',
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
      { zh: '她在网上买了两本书。', pinyin: 'Tā zài wǎng shàng mǎi le liǎng běn shū.', id: 'Dia membeli dua buku secara online.' },
    ],
    tags: ['komponen kalimat', 'keterangan', 'adverbial', 'waktu', 'tempat'],
    level: 1,
  },

  // ════════════════════════════════════════════════════════════
  // A.1.4  句子的类型 — TIPE KALIMAT
  // ════════════════════════════════════════════════════════════

  // ── A.1.4.1 句型 — Pola Kalimat ──────────────────────────

  {
    id: 'g1-029',
    gfCode: '一-29',
    title: 'Kalimat Predikat Kata Kerja',
    titleZh: '主谓句1：动词谓语句',
    pattern: 'S + V (+ O)',
    explanation: 'Kalimat dasar dengan kata kerja sebagai predikat. Ini adalah pola kalimat paling umum. Objek (jika ada) selalu di belakang kata kerja.',
    examples: [
      { zh: '我买一个面包。', pinyin: 'Wǒ mǎi yī gè miànbāo.', id: 'Saya membeli sebuah roti.' },
      { zh: '他不去医院。', pinyin: 'Tā bú qù yīyuàn.', id: 'Dia tidak pergi ke rumah sakit.' },
    ],
    tags: ['pola kalimat', 'predikat kata kerja', 'kalimat dasar'],
    level: 1,
  },

  {
    id: 'g1-030',
    gfCode: '一-30',
    title: 'Kalimat Predikat Kata Sifat',
    titleZh: '主谓句2：形容词谓语句',
    pattern: 'S + (很/不) + Adj',
    explanation: 'Kata sifat dapat langsung menjadi predikat tanpa kata kerja 是. Biasanya ditambahkan 很 meski maknanya netral, agar kalimat tidak terkesan membandingkan.',
    examples: [
      { zh: '房间很干净。', pinyin: 'Fángjiān hěn gānjìng.', id: 'Kamarnya sangat bersih.' },
      { zh: '这个学生最认真。', pinyin: 'Zhège xuéshēng zuì rènzhēn.', id: 'Pelajar ini paling serius.' },
    ],
    tags: ['pola kalimat', 'predikat kata sifat'],
    level: 1,
  },

  {
    id: 'g1-031',
    gfCode: '一-31',
    title: 'Kalimat Tanpa Subjek',
    titleZh: '非主谓句',
    pattern: 'V! / Adj! (kalimat tanpa subjek)',
    explanation: 'Kalimat tanpa subjek dipakai untuk pernyataan umum tentang alam/lingkungan, atau ekspresi singkat. Subjek sudah jelas dari konteks.',
    examples: [
      { zh: '下雨了。', pinyin: 'Xià yǔ le.', id: 'Hujan (sudah turun).' },
      { zh: '车！', pinyin: 'Chē!', id: 'Ada mobil!' },
    ],
    tags: ['pola kalimat', 'tanpa subjek'],
    level: 1,
  },

  // ── A.1.4.2 句类 — Jenis Kalimat ─────────────────────────

  {
    id: 'g1-032',
    gfCode: '一-32',
    title: 'Kalimat Pernyataan (Deklaratif)',
    titleZh: '陈述句',
    pattern: 'S + Predikat (kalimat afirmatif atau negatif)',
    explanation: 'Kalimat pernyataan digunakan untuk menyampaikan informasi. Bisa afirmatif (positif) atau negatif (dengan 不/没).',
    examples: [
      { zh: '妈妈做晚饭。', pinyin: 'Māma zuò wǎnfàn.', id: 'Ibu memasak makan malam.' },
      { zh: '我不喜欢看电视。', pinyin: 'Wǒ bù xǐhuan kàn diànshì.', id: 'Saya tidak suka menonton TV.' },
    ],
    tags: ['jenis kalimat', 'pernyataan', 'deklaratif'],
    level: 1,
  },

  {
    id: 'g1-033',
    gfCode: '一-33',
    title: 'Kalimat Tanya (Interogatif)',
    titleZh: '疑问句',
    pattern: '(1) 是非问句: S + Predikat + 吗？\n(2) 特指问句: S + kata tanya + V？\n(3) 选择问句: A + 还是 + B？\n(4) 正反问句: V + 不 + V？ / V + 没有？',
    explanation: 'Ada 4 cara membuat kalimat tanya: (1) Tambahkan 吗 di akhir kalimat pernyataan. (2) Gunakan kata tanya (谁/什么/哪/怎么/多少 dll) di posisi informasi yang ditanyakan. (3) Gunakan 还是 untuk pertanyaan pilihan. (4) Ulangi kata kerja dengan 不 di tengah untuk pertanyaan ya/tidak yang lebih tegas.',
    examples: [
      { zh: '他是老师吗？', pinyin: 'Tā shì lǎoshī ma?', id: 'Apakah dia guru? (吗-pertanyaan)' },
      { zh: '谁跟你一起去书店？', pinyin: 'Shéi gēn nǐ yīqǐ qù shūdiàn?', id: 'Siapa yang pergi ke toko buku bersamamu?' },
      { zh: '你爸爸是老师还是医生？', pinyin: 'Nǐ bàba shì lǎoshī háishi yīshēng?', id: 'Ayahmu guru atau dokter?' },
      { zh: '你喝不喝牛奶？', pinyin: 'Nǐ hē bu hē niúnǎi?', id: 'Kamu minum susu tidak?' },
      { zh: '今天冷不冷？', pinyin: 'Jīntiān lěng bu lěng?', id: 'Hari ini dingin tidak?' },
    ],
    tags: ['jenis kalimat', 'pertanyaan', 'interogatif', '吗', '还是', '正反问句'],
    level: 1,
  },

  {
    id: 'g1-034',
    gfCode: '一-34',
    title: 'Kalimat Perintah (Imperatif)',
    titleZh: '祈使句',
    pattern: '请 + V! (mohon/tolong)\n别 + V! (jangan)',
    explanation: 'Kalimat perintah bisa sopan (dengan 请) atau melarang (dengan 别). Subjek umumnya dihilangkan.',
    examples: [
      { zh: '请进！', pinyin: 'Qǐng jìn!', id: 'Silakan masuk!' },
      { zh: '别说了！', pinyin: 'Bié shuō le!', id: 'Jangan bicara lagi!' },
    ],
    tags: ['jenis kalimat', 'perintah', 'imperatif', '请', '别'],
    level: 1,
  },

  {
    id: 'g1-035',
    gfCode: '一-35',
    title: 'Kalimat Seru (Eksklamatif)',
    titleZh: '感叹句',
    pattern: '太 + Adj + 了！\n真 + Adj！',
    explanation: 'Kalimat seru mengungkapkan perasaan kuat. Pola 太...了 sangat umum untuk mengekspresikan sesuatu yang berlebihan atau mengejutkan.',
    examples: [
      { zh: '今天太热了！', pinyin: 'Jīntiān tài rè le!', id: 'Hari ini terlalu panas!' },
      { zh: '这水果真好吃！', pinyin: 'Zhè shuǐguǒ zhēn hǎochī!', id: 'Buah ini sungguh enak!' },
    ],
    tags: ['jenis kalimat', 'seru', 'eksklamatif', '太...了'],
    level: 1,
  },

  // ── A.1.4.3 特殊句型 — Pola Kalimat Khusus ────────────────

  {
    id: 'g1-036',
    gfCode: '一-36',
    title: 'Kalimat 是 (Kopula)',
    titleZh: '"是"字句',
    pattern: '(1) A + 是 + B (A adalah B — identitas/kategori)\n(2) A + 是 + B + 的 (menekankan keterangan)\n(3) Benda + 是 + Adj + 的 (menyatakan karakteristik)',
    explanation: '是 dipakai untuk: (1) menyatakan identitas atau kategori, (2) menekankan informasi waktu/tempat/cara dengan pola 是...的, (3) menyatakan karakteristik. Negasi: 不是.',
    examples: [
      { zh: '他是我的老师。', pinyin: 'Tā shì wǒ de lǎoshī.', id: 'Dia adalah guruku.' },
      { zh: '这是他的书。', pinyin: 'Zhè shì tā de shū.', id: 'Ini adalah bukunya.' },
      { zh: '花是白的。', pinyin: 'Huā shì bái de.', id: 'Bunganya berwarna putih.' },
      { zh: '车站东边是一个学校。', pinyin: 'Chēzhàn dōngbian shì yī gè xuéxiào.', id: 'Di sebelah timur stasiun ada sebuah sekolah.' },
    ],
    tags: ['kalimat khusus', '是字句', 'kopula', 'identitas'],
    level: 1,
  },

  {
    id: 'g1-037',
    gfCode: '一-37',
    title: 'Kalimat 有 (Kepemilikan dan Keberadaan)',
    titleZh: '"有"字句1',
    pattern: '(1) S + 有 + O (memiliki)\n(2) Tempat + 有 + O (ada di...)\nNegasi: 没有 (BUKAN 不有)',
    explanation: '有 punya dua fungsi utama: (1) kepemilikan (punya/memiliki) dan (2) keberadaan (ada di suatu tempat). Keduanya dinegasikan dengan 没有, bukan 不有.',
    examples: [
      { zh: '我有很多书。', pinyin: 'Wǒ yǒu hěn duō shū.', id: 'Saya punya banyak buku.' },
      { zh: '他没有哥哥。', pinyin: 'Tā méiyǒu gēge.', id: 'Dia tidak punya kakak laki-laki.' },
      { zh: '房间里有两张桌子。', pinyin: 'Fángjiān lǐ yǒu liǎng zhāng zhuōzi.', id: 'Di dalam kamar ada dua meja.' },
      { zh: '房间里没有桌子。', pinyin: 'Fángjiān lǐ méiyǒu zhuōzi.', id: 'Di dalam kamar tidak ada meja.' },
    ],
    tags: ['kalimat khusus', '有字句', 'kepemilikan', 'keberadaan', '有'],
    level: 1,
  },

  {
    id: 'g1-038',
    gfCode: '一-38',
    title: 'Kalimat Perbandingan dengan 比',
    titleZh: '比较句1',
    pattern: '(1) A + 比 + B + Adj (A lebih Adj dari B)\n(2) A + 没有 + B + Adj (A tidak se-Adj B)',
    explanation: 'Pola 比 untuk menyatakan bahwa A melebihi B dalam hal tertentu. Pola 没有 untuk menyatakan A tidak mencapai tingkat B. JANGAN pakai 很 setelah kata sifat dalam kalimat 比.',
    examples: [
      { zh: '我朋友比我高。', pinyin: 'Wǒ péngyou bǐ wǒ gāo.', id: 'Teman saya lebih tinggi dari saya.' },
      { zh: '这个手机比那个贵。', pinyin: 'Zhège shǒujī bǐ nàge guì.', id: 'Ponsel ini lebih mahal dari yang itu.' },
      { zh: '昨天没有今天热。', pinyin: 'Zuótiān méiyǒu jīntiān rè.', id: 'Kemarin tidak sepanas hari ini.' },
      { zh: '这个书包没有那个好看。', pinyin: 'Zhège shūbāo méiyǒu nàge hǎokàn.', id: 'Tas ini tidak sebagus yang itu.' },
    ],
    tags: ['kalimat perbandingan', '比', '没有', 'perbandingan'],
    level: 1,
  },

  // ── A.1.4.4 复句 — Kalimat Majemuk ───────────────────────

  {
    id: 'g1-039',
    gfCode: '一-39',
    title: 'Kalimat Majemuk Koordinatif',
    titleZh: '并列复句',
    pattern: '(1) Tanpa konjungsi: S1 + V1, S2 + V2\n(2) Dengan konjungsi: 一边……一边……；……也……',
    explanation: 'Dua klausa dapat digabungkan tanpa konjungsi (hubungan jelas dari konteks), atau dengan: 一边...一边... (sambil... sambil...) untuk dua aksi bersamaan; 也 untuk menghubungkan dua pernyataan yang setara.',
    examples: [
      { zh: '我喜欢看电视，弟弟喜欢打球。', pinyin: 'Wǒ xǐhuan kàn diànshì, dìdi xǐhuan dǎqiú.', id: 'Saya suka menonton TV, adik suka main bola.' },
      { zh: '他有一个哥哥，没有姐姐。', pinyin: 'Tā yǒu yī gè gēge, méiyǒu jiějie.', id: 'Dia punya satu kakak laki-laki, tidak punya kakak perempuan.' },
      { zh: '他一边走路，一边唱歌。', pinyin: 'Tā yībiān zǒulù, yībiān chànggē.', id: 'Dia sambil berjalan sambil bernyanyi.' },
      { zh: '这个房间很大，也很干净。', pinyin: 'Zhège fángjiān hěn dà, yě hěn gānjìng.', id: 'Kamar ini sangat besar, juga sangat bersih.' },
    ],
    tags: ['kalimat majemuk', 'koordinatif', '一边...一边', '也'],
    level: 1,
  },

  // ════════════════════════════════════════════════════════════
  // A.1.5  动作的态 — ASPEK TINDAKAN
  // ════════════════════════════════════════════════════════════

  {
    id: 'g1-040',
    gfCode: '一-40',
    title: 'Aspek Perubahan: 了² di Akhir Kalimat',
    titleZh: '变化态：用动态助词"了²"表示',
    pattern: 'Kalimat + 了 (perubahan keadaan/situasi baru)',
    explanation: '了 di akhir kalimat (bukan setelah kata kerja) menyatakan perubahan keadaan atau situasi baru yang baru terjadi. Berbeda dari 了¹ yang menandai aspek kompletif.',
    examples: [
      { zh: '她病了。', pinyin: 'Tā bìng le.', id: 'Dia sakit (baru saja/sekarang).' },
      { zh: '她没病。', pinyin: 'Tā méi bìng.', id: 'Dia tidak sakit.' },
      { zh: '雨小了。', pinyin: 'Yǔ xiǎo le.', id: 'Hujannya sudah mengecil.' },
      { zh: '他吃早饭了。', pinyin: 'Tā chī zǎofàn le.', id: 'Dia sudah makan pagi (situasi baru).' },
    ],
    tags: ['aspek', 'perubahan', '了', 'situasi baru'],
    level: 1,
  },

  {
    id: 'g1-041',
    gfCode: '一-41',
    title: 'Aspek Kompletif: 了¹ Setelah Kata Kerja',
    titleZh: '完成态：用动态助词"了¹"表示',
    pattern: 'V + 了 (+ O) — tindakan sudah selesai\nNegasi: 没(有) + V (tanpa 了)',
    explanation: '了 langsung setelah kata kerja menandai aspek kompletif — tindakan yang sudah terjadi/selesai. Untuk menyatakan jumlah/kualitas objek, frasa bilangan diletakkan setelah 了.',
    examples: [
      { zh: '他买了两个面包。', pinyin: 'Tā mǎi le liǎng gè miànbāo.', id: 'Dia sudah membeli dua roti.' },
      { zh: '他没买面包。', pinyin: 'Tā méi mǎi miànbāo.', id: 'Dia tidak membeli roti.' },
      { zh: '我喝了很多水。', pinyin: 'Wǒ hē le hěn duō shuǐ.', id: 'Saya sudah minum banyak air.' },
    ],
    tags: ['aspek kompletif', '了', 'selesai', 'tindakan'],
    level: 1,
  },

  {
    id: 'g1-042',
    gfCode: '一-42',
    title: 'Aspek Progresif: Sedang Berlangsung',
    titleZh: '进行态',
    pattern: '(1) 在/正/正在 + V (sedang...)\n(2) 在/正/正在 + V + 呢 (sedang... lho)\n(3) V + 呢 (sedang... — tanpa 在)',
    explanation: 'Aspek progresif menyatakan tindakan yang sedang berlangsung saat ini. 在 lebih umum, 正在 lebih menekankan "tepat sedang". 呢 di akhir memberikan nuansa "lho/sedang begini". Waktu yang jelas (sekarang) sering menggantikan penanda aspek.',
    examples: [
      { zh: '孩子在睡觉，你别说话。', pinyin: 'Háizi zài shuìjiào, nǐ bié shuōhuà.', id: 'Anak sedang tidur, kamu jangan bicara.' },
      { zh: '外边正在下雨。', pinyin: 'Wàibian zhèngzài xià yǔ.', id: 'Di luar sedang hujan.' },
      { zh: '你等一下儿，他正吃饭呢。', pinyin: 'Nǐ děng yīxiàr, tā zhèng chīfàn ne.', id: 'Kamu tunggu sebentar, dia sedang makan.' },
      { zh: '同学们正在考试呢。', pinyin: 'Tóngxuémen zhèngzài kǎoshì ne.', id: 'Para teman sekelas sedang ujian.' },
    ],
    tags: ['aspek progresif', '在', '正在', 'sedang', '呢'],
    level: 1,
  },

  // ════════════════════════════════════════════════════════════
  // A.1.6  特殊表达法 — EKSPRESI KHUSUS
  // ════════════════════════════════════════════════════════════

  {
    id: 'g1-043',
    gfCode: '一-43',
    title: 'Cara Menyatakan Uang dalam Bahasa Mandarin',
    titleZh: '钱数表示法',
    pattern: '元/块 (yuan) → 角/毛 (jiao/0.1 yuan) → 分 (fen/0.01 yuan)\nX块Y毛Z分 / X元Y角Z分',
    explanation: 'Satuan uang Tiongkok: 元(yuán)/块(kuài) = yuan, 角(jiǎo)/毛(máo) = jiao (0.1 yuan), 分(fēn) = fen (0.01 yuan). 块 dan 毛 lebih informal. Nol di tengah: 一百零五块 = 105 yuan. Dalam percakapan, satuan terakhir bisa dihilangkan.',
    examples: [
      { zh: '九块三（毛）= 9.30元', pinyin: 'jiǔ kuài sān (máo)', id: '9,30 yuan' },
      { zh: '十五块六毛三（分）= 15.63元', pinyin: 'shíwǔ kuài liù máo sān (fēn)', id: '15,63 yuan' },
      { zh: '一百五十（元）= 一百五十（块）= 150元', pinyin: 'yī bǎi wǔshí (yuán)', id: '150 yuan' },
      { zh: '一百零五（元）= 一百零五（块）= 105元', pinyin: 'yī bǎi líng wǔ (yuán)', id: '105 yuan' },
    ],
    tags: ['ekspresi khusus', 'uang', 'harga', '元', '块', '毛'],
    level: 1,
  },
]