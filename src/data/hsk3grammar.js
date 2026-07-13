// HSK 3.0 Level 3 — Grammar Points (语法大纲)
// Dicrosscheck penuh terhadap tabel 语法大纲 HSK（三级） resmi (hsk3-cn.pdf, hlm. 389-391).
//
// Setiap baris tabel resmi (语素 -> 词类 -> 短语 -> 固定格式 -> 句子成分 -> 句子的类型 ->
// 特殊表达法) punya persis 1 entry di bawah, disusun mengikuti urutan tabel PDF.
// Poin dari draft lama yang TIDAK ada di tabel resmi Level 3 ini (banyak ternyata berasal
// dari sense/level lain menurut notasi GF 0025-2021, mis. 才¹/才²/才³, 向¹/向², 为¹/为²)
// sudah DIHAPUS sesuai instruksi, bukan disimpan sebagai "materi tambahan". Contoh yang
// dihapus: 敢 (能愿动词), 各/每/任何 (indeks salah utk 指示代词; resmi: 别的/其他), daftar
// 名量词/时间副词/频率副词/语气副词 versi lama yang menyimpang dari kata resmi di tabel,
// 兼语句1, 拟声词, 因果复句, dan beberapa 口语格式 yang tidak tercantum di tabel.
// Beberapa poin yang isinya SALAH (bukan cuma di luar cakupan) sudah ditulis ulang supaya
// isinya sesuai definisi resmi, contoh: 连动句2 (resmi: pola "着" menandai kesertaan
// tindakan V1着V2, bukan pola serial-verb cara/tujuan umum), 比较句2 (5 sub-pola resmi,
// termasu A跟B一样 yang sebelumnya hilang), 是……的句2 (resmi: menekankan sikap/pandangan
// pembicara, bukan waktu/tempat/cara tindakan lampau), 选择复句 (resmi: 或者…或者…, bukan
// 不是…就是…), 转折复句 (resmi: 虽然…可是…), 假设复句 (resmi: 如果…就… / …的话，就…).
// Entri yang sebelumnya hilang total (存现句3, 疑问代词:怎样, 方位名词, 否定副词, dll.)
// sudah ditambahkan.
//
// relatedVocabIds diisi otomatis dengan mencocokkan hanzi di titleZh+pattern terhadap
// hsk3.js (script matching). Entri yang murni pola struktural tanpa hanzi konkret -> [].
//
// Total: 71 poin resmi (persis mengikuti jumlah baris/sub-poin di tabel PDF).
// Struktur: { id, gfCode, title, titleZh, pattern, explanation, examples, tags, level, relatedVocabIds }

export const hsk3Grammar = [
  {
    id: 'g3-001',
    gfCode: 'yf3-01',
    title: 'Prefiks: 老–',
    titleZh: '前缀：老–',
    pattern: '老 + Nama/Kata kekerabatan',
    explanation: '老– dipakai sebagai awalan akrab untuk memanggil orang yang lebih tua/senior, biasanya diikuti she nama belakang atau kata kekerabatan. Menurut 语法大纲 resmi HSK Level 3, hanya 老– yang termasuk di level ini (第– dan 小– sudah dikenalkan di level sebelumnya).',
    examples: [
      { zh: '他是我们班的老大哥。', pinyin: 'Tā shì wǒmen bān de lǎo dàgē.', id: 'Dia adalah kakak tertua di kelas kami.' },
      { zh: '老王，好久不见！', pinyin: 'Lǎo Wáng, hǎojiǔ bú jiàn!', id: 'Pak/Bung Wang, lama tidak jumpa!' },
    ],
    tags: ['morfologi', 'prefiks', 'panggilan'],
    level: 3,
    relatedVocabIds: ['3-245'],
  },

  {
    id: 'g3-002',
    gfCode: 'yf3-02',
    title: 'Sufiks: –家、–子、–员',
    titleZh: '后缀：—家、—子、—员',
    pattern: 'Kata dasar + 家 / 子 / 员',
    explanation: '–家 menunjukkan seseorang yang ahli/profesional di suatu bidang (mis. 画家 pelukis, 作家 penulis). –子 adalah sufiks nomina umum (mis. 房子, 儿子). –员 menunjukkan anggota/petugas suatu pekerjaan atau organisasi (mis. 服务员, 运动员, 售货员).',
    examples: [
      { zh: '他是一位有名的画家。', pinyin: 'Tā shì yí wèi yǒumíng de huàjiā.', id: 'Dia adalah seorang pelukis terkenal.' },
      { zh: '这把椅子是新买的。', pinyin: 'Zhè bǎ yǐzi shì xīn mǎi de.', id: 'Kursi ini baru dibeli.' },
      { zh: '她是这家公司的服务员。', pinyin: 'Tā shì zhè jiā gōngsī de fúwùyuán.', id: 'Dia adalah pelayan di perusahaan ini.' },
    ],
    tags: ['morfologi', 'sufiks'],
    level: 3,
    relatedVocabIds: ['3-451', '3-490'],
  },

  {
    id: 'g3-003',
    gfCode: 'yf3-03',
    title: 'Nomina Arah/Posisi',
    titleZh: '方位名词：东、南、西、北、北方、东方、南方、西方、中间',
    pattern: '在/往 + 东/南/西/北/中间 (+ 边/面)',
    explanation: 'Nomina arah mata angin (东/南/西/北) dan bentuk turunannya (北方/东方/南方/西方), serta 中间 (tengah/di antara), dipakai untuk menunjukkan lokasi atau arah suatu tempat.',
    examples: [
      { zh: '学校在城市的北方。', pinyin: 'Xuéxiào zài chéngshì de běifāng.', id: 'Sekolah berada di bagian utara kota.' },
      { zh: '请一直往东走。', pinyin: 'Qǐng yìzhí wǎng dōng zǒu.', id: 'Silakan jalan terus ke arah timur.' },
      { zh: '他坐在教室的中间。', pinyin: 'Tā zuò zài jiàoshì de zhōngjiān.', id: 'Dia duduk di tengah ruang kelas.' },
    ],
    tags: ['nomina', 'arah', 'posisi'],
    level: 3,
    relatedVocabIds: ['3-019', '3-100', '3-276', '3-396', '3-483', '3-018', '3-097', '3-274'],
  },

  {
    id: 'g3-004',
    gfCode: 'yf3-04',
    title: 'Kata Kerja Modal: 需要、该、应该、愿意、得',
    titleZh: '能愿动词：需要、该、应该、愿意、得',
    pattern: 'S + 需要/该/应该/愿意/得 + V/O',
    explanation: '需要 (perlu, kebutuhan objektif), 该/应该 (seharusnya, kewajiban/saran), 愿意 (bersedia/rela, kemauan), 得(děi) (harus, lebih lisan daripada 应该). Semua diletakkan sebelum kata kerja utama.',
    examples: [
      { zh: '她生病了，需要休息。', pinyin: 'Tā shēngbìng le, xūyào xiūxi.', id: 'Dia sakit, perlu istirahat.' },
      { zh: '你该去了，不然要迟到了。', pinyin: 'Nǐ gāi qù le, bùrán yào chídào le.', id: 'Kamu seharusnya sudah pergi, kalau tidak akan terlambat.' },
      { zh: '我愿意帮你搬家。', pinyin: 'Wǒ yuànyì bāng nǐ bānjiā.', id: 'Saya bersedia membantumu pindah rumah.' },
      { zh: '你得先复习一下才能考试。', pinyin: 'Nǐ děi xiān fùxí yíxià cáinéng kǎoshì.', id: 'Kamu harus review dulu baru bisa ujian.' },
    ],
    tags: ['kata kerja modal', '能愿动词'],
    level: 3,
    relatedVocabIds: ['3-415', '3-428', '3-452', '3-083', '3-135'],
  },

  {
    id: 'g3-005',
    gfCode: 'yf3-05',
    title: 'Kata Kerja离合 (Bentuk V-O): 放假、见面、结婚、洗澡',
    titleZh: '动宾式离合词：放假、见面、结婚、洗澡',
    pattern: 'V-O yang bisa disisipi aspek/pelengkap/kata bilangan',
    explanation: '离合词 (lí hé cí) berbentuk Verba+Objek yang sebenarnya bisa dipisah oleh partikel aspek (了/过), pelengkap frekuensi, atau kata bilangan+kata ukur. Kata-kata ini tidak bisa langsung diikuti objek lain lagi. Contoh resmi Level 3: 放假 (libur), 见面 (bertemu), 结婚 (menikah), 洗澡 (mandi).',
    examples: [
      { zh: '我们下个星期就放假了。', pinyin: 'Wǒmen xià gè xīngqī jiù fàngjià le.', id: 'Kami minggu depan sudah mulai libur.' },
      { zh: '来中国以后，我们只见过一次面。', pinyin: 'Lái Zhōngguó yǐhòu, wǒmen zhǐ jiànguò yí cì miàn.', id: 'Setelah ke China, kami hanya bertemu satu kali.' },
      { zh: '他们打算明年结婚。', pinyin: 'Tāmen dǎsuàn míngnián jiéhūn.', id: 'Mereka berencana menikah tahun depan.' },
      { zh: '他洗完澡就去睡觉了。', pinyin: 'Tā xǐ wán zǎo jiù qù shuìjiào le.', id: 'Dia setelah mandi langsung pergi tidur.' },
    ],
    tags: ['kata kerja', '离合词', 'struktur'],
    level: 3,
    relatedVocabIds: ['3-119', '3-198', '3-207', '3-411', '3-115'],
  },

  {
    id: 'g3-006',
    gfCode: 'yf3-06',
    title: 'Kata Kerja离合 (Bentuk V-Pelengkap): 离开、完成、分开',
    titleZh: '动补式离合词：离开、完成、分开',
    pattern: 'V + 补语 yang bisa disisipi 得/不 (bentuk potensial)',
    explanation: '离合词 jenis ini terbentuk dari Verba+Pelengkap yang menyatu, namun tetap bisa disisipi 得/不 untuk membentuk pelengkap potensial. Contoh resmi Level 3: 离开 (pergi meninggalkan), 完成 (menyelesaikan), 分开 (berpisah/memisahkan).',
    examples: [
      { zh: '他离不开这个城市。', pinyin: 'Tā lí bu kāi zhège chéngshì.', id: 'Dia tidak bisa lepas dari kota ini.' },
      { zh: '我们完不成这个任务。', pinyin: 'Wǒmen wán bu chéng zhège rènwu.', id: 'Kami tidak bisa menyelesaikan tugas ini.' },
      { zh: '这两件事分不开。', pinyin: 'Zhè liǎng jiàn shì fēn bu kāi.', id: 'Dua hal ini tidak bisa dipisahkan.' },
    ],
    tags: ['kata kerja', 'komplemen', 'potensial'],
    level: 3,
    relatedVocabIds: ['3-130', '3-255', '3-369', '3-083'],
  },

  {
    id: 'g3-007',
    gfCode: 'yf3-07',
    title: 'Kata Ganti Tanya Baru: 怎样',
    titleZh: '疑问代词：怎样',
    pattern: '怎样 + Adj/V ？',
    explanation: '怎样 semakna dengan 怎么样 (bagaimana), dipakai untuk menanyakan cara atau keadaan, dan bisa juga jadi predikat langsung setelah subjek.',
    examples: [
      { zh: '这个方法怎样？', pinyin: 'Zhège fāngfǎ zěnyàng?', id: 'Metode ini bagaimana?' },
      { zh: '你打算怎样解决这个问题？', pinyin: 'Nǐ dǎsuàn zěnyàng jiějué zhège wèntí?', id: 'Kamu berencana menyelesaikan masalah ini bagaimana?' },
    ],
    tags: ['kata ganti', 'pertanyaan'],
    level: 3,
    relatedVocabIds: ['3-465'],
  },

  {
    id: 'g3-008',
    gfCode: 'yf3-08',
    title: 'Kata Ganti Tanya untuk Non-Pertanyaan',
    titleZh: '疑问代词的非疑问用法',
    pattern: '(1) 疑问词 + 都/也 (任指) | (2) 疑问词……疑问词 (不定指)',
    explanation: 'Kata ganti tanya (谁、什么、哪、哪里、怎么、几) bisa dipakai bukan untuk bertanya: (1) 任指用法 — sebagai "siapapun/apapun" dengan 都/也, (2) 不定指用法 — dua kata ganti tanya paralel bermakna "apapun...maka...".',
    examples: [
      { zh: '谁都喜欢她。', pinyin: 'Shéi dōu xǐhuān tā.', id: 'Semua orang menyukainya.' },
      { zh: '我吃什么都行。', pinyin: 'Wǒ chī shénme dōu xíng.', id: 'Saya makan apa saja tidak masalah.' },
      { zh: '你想吃什么就吃什么。', pinyin: 'Nǐ xiǎng chī shénme jiù chī shénme.', id: 'Kamu mau makan apa, makan saja.' },
    ],
    tags: ['kata ganti', 'non-pertanyaan', 'universal'],
    level: 3,
    relatedVocabIds: ['3-441'],
  },

  {
    id: 'g3-009',
    gfCode: 'yf3-09',
    title: 'Kata Ganti Orang: 别人、咱们',
    titleZh: '人称代词：别人、咱们',
    pattern: '别人 (orang lain) | 咱们 (kita, inklusif — termasuk lawan bicara)',
    explanation: '别人 berarti "orang lain" secara umum. 咱们 adalah bentuk "kita" yang secara tegas mengikutsertakan lawan bicara, berbeda dengan 我们 yang bisa eksklusif (tidak termasuk lawan bicara), umum dipakai dalam percakapan lisan.',
    examples: [
      { zh: '不要打扰别人。', pinyin: 'Búyào dǎrǎo biérén.', id: 'Jangan mengganggu orang lain.' },
      { zh: '咱们一起去吧。', pinyin: 'Zánmen yìqǐ qù ba.', id: 'Mari kita (semua) pergi bersama.' },
    ],
    tags: ['kata ganti', 'orang'],
    level: 3,
    relatedVocabIds: ['3-026', '3-463'],
  },

  {
    id: 'g3-010',
    gfCode: 'yf3-10',
    title: 'Kata Ganti Tunjuk: 别的、其他',
    titleZh: '指示代词：别的、其他',
    pattern: '别的/其他 + N',
    explanation: '别的 dan 其他 sama-sama berarti "yang lain/lainnya", dipakai sebelum nomina untuk merujuk pada hal selain yang sudah disebutkan. 别的 lebih umum dipakai lisan, 其他 sedikit lebih formal.',
    examples: [
      { zh: '有别的问题吗？', pinyin: 'Yǒu biéde wèntí ma?', id: 'Ada pertanyaan lain?' },
      { zh: '除了汉语，他还会说其他语言。', pinyin: 'Chúle Hànyǔ, tā hái huì shuō qítā yǔyán.', id: 'Selain bahasa Mandarin, dia juga bisa bahasa lain.' },
    ],
    tags: ['kata ganti', 'tunjuk'],
    level: 3,
    relatedVocabIds: ['3-025', '3-309'],
  },

  {
    id: 'g3-011',
    gfCode: 'yf3-11',
    title: 'Kata Ukur Nomina (Khusus & Pinjaman)',
    titleZh: '名量词：把、双、张、种、层、封、页、辆、节、所、班、段、头、句、公斤、斤、角、毛、刻、米；借用：碗、盘',
    pattern: '数词 + 量词 + 名词',
    explanation: '(1) Kata ukur khusus Level 3: 把 (benda berpegang), 双 (pasang), 张 (lembaran/meja/kursi), 种 (jenis), 层 (lantai/lapisan), 封 (surat), 页 (halaman), 辆 (kendaraan), 节 (pelajaran/ruas), 所 (sekolah/rumah sakit), 班 (kelas/rombongan), 段 (ruas/bagian), 头 (hewan ternak besar), 句 (kalimat), 公斤/斤 (satuan berat), 角/毛 (satuan uang), 刻 (seperempat jam), 米 (meter). (2) Kata ukur pinjaman (dari nomina wadah): 碗 (mangkuk), 盘 (piring).',
    examples: [
      { zh: '请给我一张纸。', pinyin: 'Qǐng gěi wǒ yì zhāng zhǐ.', id: 'Tolong berikan saya selembar kertas.' },
      { zh: '我买了一封信的邮票。', pinyin: 'Wǒ mǎile yì fēng xìn de yóupiào.', id: 'Saya membeli perangko untuk sepucuk surat.' },
      { zh: '他吃了两碗米饭。', pinyin: 'Tā chīle liǎng wǎn mǐfàn.', id: 'Dia makan dua mangkuk nasi.' },
    ],
    tags: ['kata ukur', 'nomina'],
    level: 3,
    relatedVocabIds: ['3-147', '3-006', '3-049', '3-105', '3-129', '3-200', '3-203', '3-204'],
  },

  {
    id: 'g3-012',
    gfCode: 'yf3-12',
    title: 'Kata Ukur Verbal: 口、回、遍、声',
    titleZh: '动量词：口、回、遍、声',
    pattern: 'V + 数词 + 动量词',
    explanation: '口 untuk tegukan/suapan/gigitan, 回 untuk kali/kejadian (semakna 次), 遍 untuk tindakan dari awal sampai akhir sekali penuh, 声 untuk sekali suara/bunyi.',
    examples: [
      { zh: '他喝了一口水。', pinyin: 'Tā hēle yì kǒu shuǐ.', id: 'Dia minum satu teguk air.' },
      { zh: '这本书我看过两回了。', pinyin: 'Zhè běn shū wǒ kànguò liǎng huí le.', id: 'Buku ini sudah saya baca dua kali.' },
      { zh: '请你再说一遍。', pinyin: 'Qǐng nǐ zài shuō yí biàn.', id: 'Tolong katakan sekali lagi.' },
      { zh: '他叫了我一声。', pinyin: 'Tā jiàole wǒ yì shēng.', id: 'Dia memanggil saya sekali.' },
    ],
    tags: ['kata ukur', 'verbal', 'tindakan'],
    level: 3,
    relatedVocabIds: ['3-021', '3-327'],
  },

  {
    id: 'g3-013',
    gfCode: 'yf3-13',
    title: 'Reduplikasi Kata Ukur: AA',
    titleZh: '量词重叠：个个、张张',
    pattern: '量词 + 量词 (AA)',
    explanation: 'Kata ukur yang diulang (AA) bermakna "setiap satu per satu", menekankan keseluruhan tanpa kecuali. Contoh resmi Level 3: 个个 (setiap orang/benda), 张张 (setiap lembar).',
    examples: [
      { zh: '教室里的学生个个都很努力。', pinyin: 'Jiàoshì lǐ de xuéshēng gègè dōu hěn nǔlì.', id: 'Murid-murid di kelas semuanya sangat rajin.' },
      { zh: '这些照片张张都很漂亮。', pinyin: 'Zhèxiē zhàopiàn zhāngzhāng dōu hěn piàoliang.', id: 'Foto-foto ini setiap lembarnya sangat bagus.' },
    ],
    tags: ['reduplikasi', 'kata ukur', 'distributif'],
    level: 3,
    relatedVocabIds: ['3-468'],
  },

  {
    id: 'g3-014',
    gfCode: 'yf3-14',
    title: 'Adverb Derajat: 比较、还、更、特别、挺、有些、越、极',
    titleZh: '程度副词：比较、还、更、特别、挺、有些、越、极',
    pattern: '比较/还/更/特别/挺/有些/越/极 + Adj/V',
    explanation: '比较 (relatif/agak), 还 (lumayan, dalam konteks penilaian ringan), 更 (lebih), 特别 (sangat/istimewa), 挺 (cukup, lisan), 有些 (agak/sedikit), 越 (semakin, biasanya dipakai berpasangan 越…越…), 极 (sangat sekali, biasanya diikuti 了).',
    examples: [
      { zh: '这本书比较好。', pinyin: 'Zhè běn shū bǐjiào hǎo.', id: 'Buku ini relatif lebih bagus.' },
      { zh: '今天比昨天更冷。', pinyin: 'Jīntiān bǐ zuótiān gèng lěng.', id: 'Hari ini lebih dingin dari kemarin.' },
      { zh: '这道菜特别好吃。', pinyin: 'Zhè dào cài tèbié hǎochī.', id: 'Masakan ini sangat enak.' },
      { zh: '他今天挺高兴的。', pinyin: 'Tā jīntiān tǐng gāoxìng de.', id: 'Dia hari ini cukup senang.' },
      { zh: '这个消息让人高兴极了。', pinyin: 'Zhège xiāoxi ràng rén gāoxìng jí le.', id: 'Berita ini membuat orang sangat senang.' },
    ],
    tags: ['adverb', 'derajat'],
    level: 3,
    relatedVocabIds: ['3-028', '3-351', '3-145', '3-175', '3-187', '3-355', '3-454'],
  },

  {
    id: 'g3-015',
    gfCode: 'yf3-15',
    title: 'Adverb Lingkup: 就、一块儿、一共、只、到处、只是',
    titleZh: '范围副词：就、一块儿、一共、只、到处、只是',
    pattern: '就/一块儿/一共/只/到处/只是 + V/klausa',
    explanation: '就 (tepat/hanya, penegasan cakupan), 一块儿 (bersama-sama), 一共 (total/seluruhnya), 只 (hanya), 到处 (di mana-mana), 只是 (hanya saja, sedikit membatasi).',
    examples: [
      { zh: '今天来上课的就五个学生。', pinyin: 'Jīntiān lái shàngkè de jiù wǔ gè xuéshēng.', id: 'Yang datang kuliah hari ini hanya lima mahasiswa.' },
      { zh: '我们一块儿去公园吧。', pinyin: 'Wǒmen yíkuàir qù gōngyuán ba.', id: 'Ayo kita pergi ke taman bersama-sama.' },
      { zh: '这些东西一共多少钱？', pinyin: 'Zhèxiē dōngxi yígòng duōshao qián?', id: 'Barang-barang ini totalnya berapa uang?' },
      { zh: '他到处找他的钥匙。', pinyin: 'Tā dàochù zhǎo tā de yàoshi.', id: 'Dia mencari kuncinya ke mana-mana.' },
    ],
    tags: ['adverb', 'lingkup'],
    level: 3,
    relatedVocabIds: ['3-427', '3-076', '3-425', '3-478', '3-474'],
  },

  {
    id: 'g3-016',
    gfCode: 'yf3-16',
    title: 'Adverb Waktu: 才、马上、先、一会儿、刚、刚刚、一直',
    titleZh: '时间副词：才、马上、先、一会儿、刚、刚刚、一直',
    pattern: 'Adverb Waktu + V/klausa',
    explanation: '才 (baru saja terjadi/menandakan lambat atau jumlah sedikit), 马上 (segera), 先 (lebih dulu), 一会儿 (sebentar), 刚/刚刚 (baru saja), 一直 (terus-menerus/selalu).',
    examples: [
      { zh: '他才来。', pinyin: 'Tā cái lái.', id: 'Dia baru saja datang.' },
      { zh: '我马上就到。', pinyin: 'Wǒ mǎshàng jiù dào.', id: 'Saya segera tiba.' },
      { zh: '你先坐一会儿，我马上回来。', pinyin: 'Nǐ xiān zuò yíhuìr, wǒ mǎshàng huílái.', id: 'Kamu duduk dulu sebentar, saya segera kembali.' },
      { zh: '他刚刚出去，你一直等着吧。', pinyin: 'Tā gānggāng chūqù, nǐ yìzhí děngzhe ba.', id: 'Dia baru saja keluar, kamu tunggu terus saja ya.' },
    ],
    tags: ['adverb', 'waktu'],
    level: 3,
    relatedVocabIds: ['3-141', '3-268', '3-440', '3-044', '3-139', '3-181', '3-264', '3-382'],
  },

  {
    id: 'g3-017',
    gfCode: 'yf3-17',
    title: 'Adverb Frekuensi: 总、总是、又、常常',
    titleZh: '频率副词：总、总是、又、常常',
    pattern: '总/总是/又/常常 + V',
    explanation: '总/总是 (selalu, terus-menerus), 又 (lagi, pengulangan yang sudah/pasti terjadi), 常常 (sering).',
    examples: [
      { zh: '他总是迟到。', pinyin: 'Tā zǒngshì chídào.', id: 'Dia selalu terlambat.' },
      { zh: '他又迟到了。', pinyin: 'Tā yòu chídào le.', id: 'Dia terlambat lagi.' },
      { zh: '我们常常一起吃饭。', pinyin: 'Wǒmen chángcháng yìqǐ chīfàn.', id: 'Kami sering makan bersama.' },
    ],
    tags: ['adverb', 'frekuensi'],
    level: 3,
    relatedVocabIds: ['3-057', '3-494', '3-054', '3-442', '3-493'],
  },

  {
    id: 'g3-018',
    gfCode: 'yf3-18',
    title: 'Adverb Penghubung: 一边……，一边……',
    titleZh: '关联副词：一边',
    pattern: 'S + 一边 + V1，一边 + V2',
    explanation: '一边……，一边…… menyatakan dua tindakan yang dilakukan bersamaan oleh subjek yang sama (simultan).',
    examples: [
      { zh: '他一边听音乐，一边写作业。', pinyin: 'Tā yìbiān tīng yīnyuè, yìbiān xiě zuòyè.', id: 'Dia sambil mendengarkan musik, sambil mengerjakan PR.' },
      { zh: '我们一边走，一边聊天儿。', pinyin: 'Wǒmen yìbiān zǒu, yìbiān liáotiānr.', id: 'Kami sambil berjalan, sambil mengobrol.' },
    ],
    tags: ['adverb', 'simultan', '关联副词'],
    level: 3,
    relatedVocabIds: ['3-423', '3-151'],
  },

  {
    id: 'g3-019',
    gfCode: 'yf3-19',
    title: 'Adverb Modalitas: 大概、必须、差不多、一定、好像、几乎',
    titleZh: '情态副词：大概、必须、差不多、一定、好像、几乎',
    pattern: '大概/必须/差不多/一定/好像/几乎 + klausa',
    explanation: '大概 (kira-kira/mungkin), 必须 (harus/wajib), 差不多 (hampir sama/hampir), 一定 (pasti), 好像 (sepertinya), 几乎 (hampir).',
    examples: [
      { zh: '他今天大概不会来了。', pinyin: 'Tā jīntiān dàgài bú huì lái le.', id: 'Dia hari ini kemungkinan tidak akan datang.' },
      { zh: '你必须按时完成作业。', pinyin: 'Nǐ bìxū ànshí wánchéng zuòyè.', id: 'Kamu harus menyelesaikan PR tepat waktu.' },
      { zh: '他好像感冒了。', pinyin: 'Tā hǎoxiàng gǎnmào le.', id: 'Dia sepertinya masuk angin.' },
      { zh: '教室里几乎坐满了人。', pinyin: 'Jiàoshì lǐ jīhū zuò mǎnle rén.', id: 'Ruang kelas hampir penuh terisi orang.' },
    ],
    tags: ['adverb', 'modalitas'],
    level: 3,
    relatedVocabIds: ['3-052', '3-037', '3-071', '3-166', '3-213', '3-424', '3-051', '3-384'],
  },

  {
    id: 'g3-020',
    gfCode: 'yf3-20',
    title: 'Adverb Nada Bicara: 当然、其实、终于、才、就',
    titleZh: '语气副词：当然、其实、终于、才²、才³、就⁴',
    pattern: 'Adverb Nada + klausa',
    explanation: '当然 (tentu saja), 其实 (sebenarnya, mengoreksi anggapan), 终于 (akhirnya, setelah proses panjang), serta makna lanjutan dari 才 dan 就 sebagai penanda nada penegasan: 才 bisa menekankan "baru saja/ternyata begitu", 就 bisa menekankan kepastian/kesegeraan suatu hal.',
    examples: [
      { zh: '这当然是真的。', pinyin: 'Zhè dāngrán shì zhēn de.', id: 'Ini tentu saja benar.' },
      { zh: '他看起来很忙，其实他今天没什么事。', pinyin: 'Tā kànqǐlái hěn máng, qíshí tā jīntiān méi shénme shì.', id: 'Dia terlihat sibuk, sebenarnya hari ini dia tidak ada urusan apa-apa.' },
      { zh: '他努力复习了一个月，终于通过了考试。', pinyin: 'Tā nǔlì fùxíle yí gè yuè, zhōngyú tōngguòle kǎoshì.', id: 'Dia belajar keras selama sebulan, akhirnya lulus ujian.' },
      { zh: '他一说我就明白了。', pinyin: 'Tā yì shuō wǒ jiù míngbai le.', id: 'Begitu dia bilang, saya langsung mengerti.' },
    ],
    tags: ['adverb', 'nada bicara'],
    level: 3,
    relatedVocabIds: ['3-074', '3-308', '3-485', '3-044'],
  },

  {
    id: 'g3-021',
    gfCode: 'yf3-21',
    title: 'Adverb Negasi: 不必、不用',
    titleZh: '否定副词：不必、不用',
    pattern: '不必/不用 + V',
    explanation: '不必 dan 不用 sama-sama berarti "tidak perlu", dipakai untuk menyatakan sesuatu tidak diperlukan/tidak wajib dilakukan.',
    examples: [
      { zh: '你不必担心，一切都会好起来的。', pinyin: 'Nǐ búbì dānxīn, yíqiè dōu huì hǎo qǐlái de.', id: 'Kamu tidak perlu khawatir, semua akan baik-baik saja.' },
      { zh: '不用谢，这是我应该做的。', pinyin: 'Búyòng xiè, zhè shì wǒ yīnggāi zuò de.', id: 'Tidak perlu berterima kasih, ini memang seharusnya saya lakukan.' },
    ],
    tags: ['adverb', 'negasi'],
    level: 3,
    relatedVocabIds: ['3-043', '3-441'],
  },

  {
    id: 'g3-022',
    gfCode: 'yf3-22',
    title: 'Preposisi Objek: 为、向、关于',
    titleZh: '介词：引出对象——为、向、关于',
    pattern: '为/向/关于 + Objek/Topik + V/klausa',
    explanation: '为 (untuk/demi seseorang), 向 (kepada/terhadap seseorang, konteks komunikasi/sikap), 关于 (mengenai/tentang suatu topik, biasanya di awal kalimat atau sebelum nomina).',
    examples: [
      { zh: '大家都为他感到高兴。', pinyin: 'Dàjiā dōu wèi tā gǎndào gāoxìng.', id: 'Semua orang merasa senang untuknya.' },
      { zh: '我们应该向他学习。', pinyin: 'Wǒmen yīnggāi xiàng tā xuéxí.', id: 'Kita seharusnya belajar dari dia.' },
      { zh: '关于这个问题，我们再讨论一下。', pinyin: 'Guānyú zhège wèntí, wǒmen zài tǎolùn yíxià.', id: 'Mengenai masalah ini, mari kita diskusikan lagi.' },
    ],
    tags: ['preposisi', '对象'],
    level: 3,
    relatedVocabIds: ['3-155', '3-151', '3-375', '3-383'],
  },

  {
    id: 'g3-023',
    gfCode: 'yf3-23',
    title: 'Preposisi Arah: 向',
    titleZh: '介词：引出方向、路径——向',
    pattern: '向 + Arah/Tempat + V',
    explanation: '向 dipakai untuk menunjukkan arah tujuan suatu gerakan, mirip dengan 往 tetapi 向 juga bisa dipakai secara abstrak/kiasan.',
    examples: [
      { zh: '请一直向前走。', pinyin: 'Qǐng yìzhí xiàng qián zǒu.', id: 'Silakan jalan terus ke depan.' },
      { zh: '飞机正在向北飞。', pinyin: 'Fēijī zhèngzài xiàng běi fēi.', id: 'Pesawat sedang terbang ke arah utara.' },
    ],
    tags: ['preposisi', 'arah'],
    level: 3,
    relatedVocabIds: ['3-120', '3-383'],
  },

  {
    id: 'g3-024',
    gfCode: 'yf3-24',
    title: 'Preposisi Tujuan/Sebab: 为了、为',
    titleZh: '介词：引出目的、原因——为了、为',
    pattern: '为了/为 + Tujuan/Alasan + klausa',
    explanation: '为了 diletakkan di awal kalimat/klausa untuk menyatakan tujuan tindakan ("demi..."). 为 (dalam sense ini) juga bisa menyatakan sebab/alasan suatu perasaan atau tindakan.',
    examples: [
      { zh: '为了保持健康，他每天坚持运动。', pinyin: 'Wèile bǎochí jiànkāng, tā měitiān jiānchí yùndòng.', id: 'Demi menjaga kesehatan, dia tekun berolahraga setiap hari.' },
      { zh: '他为这件事非常担心。', pinyin: 'Tā wèi zhè jiàn shì fēicháng dānxīn.', id: 'Dia sangat khawatir karena hal ini.' },
    ],
    tags: ['preposisi', 'tujuan', 'sebab'],
    level: 3,
    relatedVocabIds: ['3-376', '3-375'],
  },

  {
    id: 'g3-025',
    gfCode: 'yf3-25',
    title: 'Preposisi Pelaku/Penderita: 把、被',
    titleZh: '介词：引出施事、受事——把、被',
    pattern: 'S + 把 + O + V + ... | S + 被 + Pelaku + V + ...',
    explanation: '把 dipakai untuk memindahkan objek (受事/penderita) ke depan predikat, menekankan apa yang dilakukan terhadapnya (lihat juga "把"字句1). 被 dipakai untuk menandai pelaku (施事) dalam kalimat pasif (lihat juga 被动句1).',
    examples: [
      { zh: '请把书给我。', pinyin: 'Qǐng bǎ shū gěi wǒ.', id: 'Tolong berikan buku itu kepada saya.' },
      { zh: '东西被他拿走了。', pinyin: 'Dōngxi bèi tā ná zǒu le.', id: 'Barang itu dibawa pergi olehnya.' },
    ],
    tags: ['preposisi', 'disposal', 'pasif'],
    level: 3,
    relatedVocabIds: ['3-006', '3-017', '3-336'],
  },

  {
    id: 'g3-026',
    gfCode: 'yf3-26',
    title: 'Preposisi Dasar/Acuan: 根据',
    titleZh: '介词：引出凭借、依据——根据',
    pattern: '根据 + Dasar/Sumber + klausa',
    explanation: '根据 berarti "berdasarkan/menurut", dipakai untuk menyatakan dasar atau acuan suatu pernyataan/tindakan, biasanya di awal kalimat.',
    examples: [
      { zh: '根据天气预报，明天会下雨。', pinyin: 'Gēnjù tiānqì yùbào, míngtiān huì xiàyǔ.', id: 'Berdasarkan ramalan cuaca, besok akan hujan.' },
      { zh: '根据你的经验，这个办法行不行？', pinyin: 'Gēnjù nǐ de jīngyàn, zhège bànfǎ xíng bù xíng?', id: 'Menurut pengalamanmu, cara ini bisa dipakai atau tidak?' },
    ],
    tags: ['preposisi', 'dasar'],
    level: 3,
    relatedVocabIds: ['3-146', '3-204'],
  },

  {
    id: 'g3-027',
    gfCode: 'yf3-27',
    title: 'Konjungsi Pilihan: 或、或者',
    titleZh: '连词：连接词或者短语——或、或者',
    pattern: 'A + 或/或者 + B',
    explanation: '或 dan 或者 sama-sama berarti "atau", menghubungkan dua kata atau frasa yang setara sebagai pilihan.',
    examples: [
      { zh: '星期六或星期天都可以。', pinyin: 'Xīngqīliù huò xīngqītiān dōu kěyǐ.', id: 'Sabtu atau Minggu keduanya bisa.' },
      { zh: '你可以坐公交车，或者坐地铁。', pinyin: 'Nǐ kěyǐ zuò gōngjiāochē, huòzhě zuò dìtiě.', id: 'Kamu bisa naik bus, atau naik kereta bawah tanah.' },
    ],
    tags: ['konjungsi', 'pilihan'],
    level: 3,
    relatedVocabIds: ['3-185', '3-106', '3-184', '3-205'],
  },

  {
    id: 'g3-028',
    gfCode: 'yf3-28',
    title: 'Konjungsi Penghubung Klausa: 只有、只要、不但、而且、如果、可、可是、然后',
    titleZh: '连词：连接分句或句子——只有、只要、不但、而且、如果、可、可是、然后',
    pattern: 'Klausa 1 + Konjungsi + Klausa 2',
    explanation: 'Delapan konjungsi ini menghubungkan dua klausa/kalimat. Pola lengkapnya (只有…才…, 只要…就…, 不但…而且…, 如果…就…) dijelaskan sebagai kalimat majemuk tersendiri di bagian 复句 (lihat entri terkait di bawah). 可/可是 berfungsi seperti 但是 ("tetapi"), dan 然后 menyatakan urutan ("lalu, kemudian").',
    examples: [
      { zh: '这个电影很有意思，可是有点儿长。', pinyin: 'Zhège diànyǐng hěn yǒu yìsi, kěshì yǒudiǎnr cháng.', id: 'Film ini sangat menarik, tetapi agak panjang.' },
      { zh: '他先去了银行，然后去了超市。', pinyin: 'Tā xiān qùle yínháng, ránhòu qùle chāoshì.', id: 'Dia pertama pergi ke bank, lalu pergi ke supermarket.' },
    ],
    tags: ['konjungsi', '复句'],
    level: 3,
    relatedVocabIds: ['3-039', '3-113', '3-224', '3-237', '3-313', '3-319', '3-479', '3-480'],
  },

  {
    id: 'g3-029',
    gfCode: 'yf3-29',
    title: 'Partikel Lain: 的话',
    titleZh: '助词：其他助词——的话',
    pattern: '……的话，（就）+ klausa akibat',
    explanation: '的话 diletakkan setelah klausa syarat/andaian, semakna dengan "kalau/seandainya begitu", sering berpasangan dengan 就 di klausa berikutnya.',
    examples: [
      { zh: '明天有时间的话，我们一起去看电影吧。', pinyin: 'Míngtiān yǒu shíjiān dehuà, wǒmen yìqǐ qù kàn diànyǐng ba.', id: 'Kalau besok ada waktu, mari kita nonton film bersama.' },
      { zh: '你不喜欢的话，就换一个。', pinyin: 'Nǐ bù xǐhuan dehuà, jiù huàn yí gè.', id: 'Kalau kamu tidak suka, ganti saja dengan yang lain.' },
    ],
    tags: ['助词', '假设'],
    level: 3,
    relatedVocabIds: ['3-086', '3-309'],
  },

  {
    id: 'g3-030',
    gfCode: 'yf3-30',
    title: 'Frasa Struktur Lain: 同位短语、动补短语',
    titleZh: '短语结构类型：其他结构类型——同位短语、动补短语2',
    pattern: 'N1 + N2 (aposisi/同位) | V + 补语 (动补)',
    explanation: '同位短语 (frasa aposisi) terdiri dari dua nomina yang merujuk pada hal yang sama, saling menjelaskan (mis. 我朋友小李). 动补短语 (frasa verba-pelengkap) terdiri dari verba diikuti pelengkap yang menjelaskan hasil/derajat/arah tindakannya.',
    examples: [
      { zh: '我的朋友小李是老师。', pinyin: 'Wǒ de péngyou Xiǎo Lǐ shì lǎoshī.', id: 'Teman saya, Xiao Li, adalah seorang guru.' },
      { zh: '他把作业写完了。', pinyin: 'Tā bǎ zuòyè xiě wán le.', id: 'Dia menyelesaikan menulis PR-nya.' },
    ],
    tags: ['短语', '结构'],
    level: 3,
    relatedVocabIds: ['3-309', '3-106'],
  },

  {
    id: 'g3-031',
    gfCode: 'yf3-31',
    title: 'Reduplikasi Bilangan+Kata Ukur: 数词+量词+数词+量词',
    titleZh: '数量重叠：数词+量词+数词+量词',
    pattern: '一 + 量词 + 一 + 量词 (mis. 一个一个)',
    explanation: 'Pola reduplikasi bilangan-kata ukur (biasanya 一+量词 diulang dua kali) menekankan makna "satu per satu/berurutan".',
    examples: [
      { zh: '他一个一个地检查了作业。', pinyin: 'Tā yí gè yí gè de jiǎnchále zuòyè.', id: 'Dia memeriksa PR satu per satu.' },
      { zh: '孩子们一步一步地学走路。', pinyin: 'Háizimen yí bù yí bù de xué zǒulù.', id: 'Anak-anak belajar berjalan langkah demi langkah.' },
    ],
    tags: ['短语', '数量重叠'],
    level: 3,
    relatedVocabIds: [],
  },

  {
    id: 'g3-032',
    gfCode: 'yf3-32',
    title: 'Bentuk Empat Karakter: 不A不B',
    titleZh: '固定短语（四字格）：不A 不B',
    pattern: '不 + A + 不 + B',
    explanation: 'Pola empat karakter 不A不B menyatakan sesuatu yang berada di tengah/tidak jelas antara dua keadaan A dan B, atau justru sengaja/pas seperti itu, tergantung konteks.',
    examples: [
      { zh: '这件衣服不大不小，正合适。', pinyin: 'Zhè jiàn yīfu bú dà bù xiǎo, zhèng héshì.', id: 'Baju ini tidak besar tidak kecil, pas sekali.' },
      { zh: '他做事不慌不忙。', pinyin: 'Tā zuòshì bù huāng bù máng.', id: 'Dia mengerjakan sesuatu dengan tenang, tidak terburu-buru.' },
    ],
    tags: ['固定短语', '四字格'],
    level: 3,
    relatedVocabIds: ['3-106'],
  },

  {
    id: 'g3-033',
    gfCode: 'yf3-33',
    title: 'Frasa Tetap: 不一会儿、看来、在……看来、越来越、看起来、看上去、一般来说、不怎么样',
    titleZh: '固定短语（其他）：不一会儿、看来、在……看来、越来越、看起来、看上去、一般来说、不怎么样',
    pattern: '(delapan frasa tetap, lihat contoh)',
    explanation: '不一会儿 (tidak lama kemudian), 看来/在……看来 (kelihatannya, menurut pengamatan), 越来越 (semakin lama semakin), 看起来/看上去 (kelihatannya, dari penampilan), 一般来说 (pada umumnya), 不怎么样 (biasa saja, tidak istimewa).',
    examples: [
      { zh: '他不一会儿就回来了。', pinyin: 'Tā bù yíhuìr jiù huílái le.', id: 'Dia tidak lama kemudian sudah kembali.' },
      { zh: '看来他不会来了。', pinyin: 'Kànlái tā bú huì lái le.', id: 'Sepertinya dia tidak akan datang.' },
      { zh: '在我看来，这个办法更好。', pinyin: 'Zài wǒ kànlái, zhège bànfǎ gèng hǎo.', id: 'Menurut saya, cara ini lebih baik.' },
      { zh: '天气越来越冷了。', pinyin: 'Tiānqì yuè lái yuè lěng le.', id: 'Cuaca semakin lama semakin dingin.' },
      { zh: '他看起来很累。', pinyin: 'Tā kànqǐlái hěn lèi.', id: 'Dia kelihatannya sangat lelah.' },
      { zh: '一般来说，早睡早起对身体好。', pinyin: 'Yìbān láishuō, zǎo shuì zǎo qǐ duì shēntǐ hǎo.', id: 'Pada umumnya, tidur dan bangun lebih awal baik untuk kesehatan.' },
      { zh: '这部电影不怎么样。', pinyin: 'Zhè bù diànyǐng bù zěnmeyàng.', id: 'Film ini biasa saja, tidak istimewa.' },
    ],
    tags: ['固定短语'],
    level: 3,
    relatedVocabIds: ['3-230', '3-309', '3-422', '3-106', '3-181', '3-298', '3-454'],
  },

  {
    id: 'g3-034',
    gfCode: 'yf3-34',
    title: 'Pola Tetap: 除了……（以外），……还/也/都……',
    titleZh: '固定格式：除了……（以外），……还/也/都……',
    pattern: '除了 + X + (以外)，+ S + 还/也/都 + VP',
    explanation: 'Menyatakan "selain X, ... juga ...", menambahkan info di luar hal yang sudah disebutkan.',
    examples: [
      { zh: '除了汉语以外，他还会说英语。', pinyin: 'Chúle Hànyǔ yǐwài, tā hái huì shuō Yīngyǔ.', id: 'Selain bahasa Mandarin, dia juga bisa bahasa Inggris.' },
      { zh: '除了小李，大家都来了。', pinyin: 'Chúle Xiǎo Lǐ, dàjiā dōu lái le.', id: 'Selain Xiao Li, semua orang sudah datang.' },
    ],
    tags: ['固定格式'],
    level: 3,
    relatedVocabIds: ['3-064', '3-436', '3-175'],
  },

  {
    id: 'g3-035',
    gfCode: 'yf3-35',
    title: 'Pola Tetap: 从……起',
    titleZh: '固定格式：从……起',
    pattern: '从 + Titik Waktu/Tempat + 起 + klausa',
    explanation: 'Menyatakan titik awal suatu waktu atau tempat, "mulai dari...".',
    examples: [
      { zh: '从明天起，我要早睡早起。', pinyin: 'Cóng míngtiān qǐ, wǒ yào zǎo shuì zǎo qǐ.', id: 'Mulai besok, saya akan tidur dan bangun lebih awal.' },
      { zh: '从这儿起，一直往前走就是学校。', pinyin: 'Cóng zhèr qǐ, yìzhí wǎng qián zǒu jiùshì xuéxiào.', id: 'Dari sini, jalan terus ke depan sudah sampai sekolah.' },
    ],
    tags: ['固定格式'],
    level: 3,
    relatedVocabIds: ['3-298'],
  },

  {
    id: 'g3-036',
    gfCode: 'yf3-36',
    title: 'Pola Tetap: 对……来说',
    titleZh: '固定格式：对……来说',
    pattern: '对 + Orang/Kelompok + 来说，+ klausa',
    explanation: 'Menyatakan sudut pandang dari suatu pihak, "bagi.../menurut...".',
    examples: [
      { zh: '对我来说，健康比什么都重要。', pinyin: 'Duì wǒ láishuō, jiànkāng bǐ shénme dōu zhòngyào.', id: 'Bagi saya, kesehatan lebih penting dari apa pun.' },
      { zh: '对学生来说，考试是很正常的事。', pinyin: 'Duì xuéshēng láishuō, kǎoshì shì hěn zhèngcháng de shì.', id: 'Bagi pelajar, ujian adalah hal yang sangat normal.' },
    ],
    tags: ['固定格式'],
    level: 3,
    relatedVocabIds: [],
  },

  {
    id: 'g3-037',
    gfCode: 'yf3-37',
    title: 'Pola Tetap: 一……也/都+不/没……',
    titleZh: '固定格式：一……也/都+不/没……',
    pattern: '一 + 量词/N + 也/都 + 不/没 + V',
    explanation: 'Menekankan negasi total, "satu ... pun tidak/tidak ada".',
    examples: [
      { zh: '他一句话也不说。', pinyin: 'Tā yí jù huà yě bù shuō.', id: 'Dia satu kata pun tidak berkata-kata.' },
      { zh: '教室里一个人都没有。', pinyin: 'Jiàoshì lǐ yí gè rén dōu méiyǒu.', id: 'Di kelas satu orang pun tidak ada.' },
    ],
    tags: ['固定格式'],
    level: 3,
    relatedVocabIds: [],
  },

  {
    id: 'g3-038',
    gfCode: 'yf3-38',
    title: 'Pola Tetap: 一点儿也不……',
    titleZh: '固定格式：一点儿也不……',
    pattern: '一点儿也不/没 + Adj/V',
    explanation: '"Sedikit pun tidak/sama sekali tidak", menekankan penolakan atau ketidakadaan secara total, lebih kuat dari sekadar 不.',
    examples: [
      { zh: '中文一点儿也不简单。', pinyin: 'Zhōngwén yìdiǎnr yě bù jiǎndān.', id: 'Bahasa Mandarin sama sekali tidak mudah.' },
      { zh: '这双鞋穿着一点儿也不舒服。', pinyin: 'Zhè shuāng xié chuānzhe yìdiǎnr yě bù shūfu.', id: 'Sepatu ini dipakai sama sekali tidak nyaman.' },
    ],
    tags: ['固定格式', '强调'],
    level: 3,
    relatedVocabIds: [],
  },

  {
    id: 'g3-039',
    gfCode: 'yf3-39',
    title: 'Pola Tetap: 越……越……',
    titleZh: '固定格式：越……越……',
    pattern: '越 + Adj/V₁ + 越 + Adj/V₂',
    explanation: 'Menyatakan hubungan sebab-akibat yang meningkat bersamaan, "semakin...semakin...".',
    examples: [
      { zh: '雨越下越大。', pinyin: 'Yǔ yuè xià yuè dà.', id: 'Hujan semakin turun semakin deras.' },
      { zh: '他越说越生气。', pinyin: 'Tā yuè shuō yuè shēngqì.', id: 'Dia semakin bicara semakin marah.' },
    ],
    tags: ['固定格式'],
    level: 3,
    relatedVocabIds: ['3-454'],
  },

  {
    id: 'g3-040',
    gfCode: 'yf3-40',
    title: 'Pola Tetap: （在）……以前/以后/前/后',
    titleZh: '固定格式：（在）……以前/以后/前/后',
    pattern: '（在）+ Kejadian/Waktu + 以前/以后/前/后，+ klausa',
    explanation: 'Menyatakan urutan waktu relatif terhadap suatu kejadian, "sebelum.../sesudah...".',
    examples: [
      { zh: '吃饭以前，先洗手。', pinyin: 'Chīfàn yǐqián, xiān xǐshǒu.', id: 'Sebelum makan, cuci tangan dulu.' },
      { zh: '下课后，我们一起去图书馆。', pinyin: 'Xiàkè hòu, wǒmen yìqǐ qù túshūguǎn.', id: 'Setelah pelajaran selesai, kita pergi ke perpustakaan bersama.' },
    ],
    tags: ['固定格式', '时间'],
    level: 3,
    relatedVocabIds: ['3-426', '3-434'],
  },

  {
    id: 'g3-041',
    gfCode: 'yf3-41',
    title: 'Pola Tetap: X什么（啊）',
    titleZh: '固定格式：X什么（啊）',
    pattern: 'V/Adj + 什么 + (啊)',
    explanation: 'Pola lisan ini dipakai untuk menyangkal atau mempertanyakan suatu penilaian dengan nada tidak setuju/meremehkan: "apa yang...(itu)", "mana ada...".',
    examples: [
      { zh: '玩儿什么，我们赶快工作吧。', pinyin: 'Wánr shénme, wǒmen gǎnkuài gōngzuò ba.', id: 'Main apa, ayo kita segera bekerja.' },
      { zh: '舒服什么啊，办公室空调坏了。', pinyin: 'Shūfu shénme a, bàngōngshì kōngtiáo huài le.', id: 'Nyaman apa, AC kantor rusak.' },
    ],
    tags: ['固定格式', '口语'],
    level: 3,
    relatedVocabIds: [],
  },

  {
    id: 'g3-042',
    gfCode: 'yf3-42',
    title: 'Pola Tetap: 该……了',
    titleZh: '固定格式：该……了',
    pattern: '该 + V/klausa + 了',
    explanation: 'Menyatakan bahwa sudah waktunya melakukan sesuatu, "seharusnya sudah...".',
    examples: [
      { zh: '时间不早了，该睡觉了。', pinyin: 'Shíjiān bù zǎo le, gāi shuìjiào le.', id: 'Sudah larut, sudah waktunya tidur.' },
      { zh: '该出发了，不然要迟到了。', pinyin: 'Gāi chūfā le, bùrán yào chídào le.', id: 'Sudah waktunya berangkat, kalau tidak akan terlambat.' },
    ],
    tags: ['固定格式'],
    level: 3,
    relatedVocabIds: ['3-135'],
  },

  {
    id: 'g3-043',
    gfCode: 'yf3-43',
    title: 'Pola Tetap: 在……上/下/中',
    titleZh: '固定格式：在……上/下/中',
    pattern: '在 + N + 上/下/中，+ klausa',
    explanation: '上 menyatakan "dalam hal/bidang" (mis. 在学习上), 下 menyatakan "di bawah kondisi" (mis. 在老师的帮助下), 中 menyatakan "dalam proses/keadaan" (mis. 在讨论中).',
    examples: [
      { zh: '在老师的帮助下，他进步很快。', pinyin: 'Zài lǎoshī de bāngzhù xià, tā jìnbù hěn kuài.', id: 'Di bawah bantuan guru, dia berkembang dengan cepat.' },
      { zh: '这个问题还在讨论中。', pinyin: 'Zhège wèntí hái zài tǎolùn zhōng.', id: 'Masalah ini masih dalam proses diskusi.' },
    ],
    tags: ['固定格式'],
    level: 3,
    relatedVocabIds: ['3-482'],
  },

  {
    id: 'g3-044',
    gfCode: 'yf3-44',
    title: 'Kata Kerja/Kata Sifat sebagai Subjek',
    titleZh: '句子成分：主语——动词/形容词性短语作主语、主谓短语作主语',
    pattern: 'V/VP/Adj + jadi subjek + VP | [S+P] + jadi subjek + VP',
    explanation: 'Kata kerja, frasa verbal, dan kata sifat bisa langsung berfungsi sebagai subjek kalimat tanpa nominalisasi. Selain itu, sebuah frasa subjek-predikat utuh juga bisa berfungsi sebagai subjek dari kalimat yang lebih besar.',
    examples: [
      { zh: '哭对身体有好处。', pinyin: 'Kū duì shēntǐ yǒu hǎochu.', id: 'Menangis baik untuk kesehatan.' },
      { zh: '太冷了不好，太热了也不好。', pinyin: 'Tài lěng le bù hǎo, tài rè le yě bù hǎo.', id: 'Terlalu dingin tidak baik, terlalu panas pun tidak baik.' },
      { zh: '他不来让我们都很失望。', pinyin: 'Tā bù lái ràng wǒmen dōu hěn shīwàng.', id: '(Fakta bahwa) dia tidak datang membuat kami semua kecewa.' },
    ],
    tags: ['句子成分', '主语'],
    level: 3,
    relatedVocabIds: ['3-224', '3-106', '3-222', '3-490'],
  },

  {
    id: 'g3-045',
    gfCode: 'yf3-45',
    title: 'Definisi Berlapis: 多项定语',
    titleZh: '句子成分：定语——多项定语',
    pattern: '(kepemilikan) + (jumlah+ukur) + (sifat) + (jenis) + N',
    explanation: 'Ketika sebuah nomina memiliki lebih dari satu definisi/atribut (定语), urutannya umumnya: kepemilikan (的) → jumlah+kata ukur → sifat/kualitas (的) → jenis/kategori, lalu baru nomina intinya.',
    examples: [
      { zh: '这是我新买的两本有意思的中文书。', pinyin: 'Zhè shì wǒ xīn mǎi de liǎng běn yǒu yìsi de Zhōngwén shū.', id: 'Ini adalah dua buku bahasa Mandarin yang menarik yang baru saya beli.' },
      { zh: '他是一位很有名的中国画家。', pinyin: 'Tā shì yí wèi hěn yǒumíng de Zhōngguó huàjiā.', id: 'Dia adalah seorang pelukis Tiongkok yang sangat terkenal.' },
    ],
    tags: ['句子成分', '定语'],
    level: 3,
    relatedVocabIds: ['3-224', '3-222', '3-490'],
  },

  {
    id: 'g3-046',
    gfCode: 'yf3-46',
    title: 'Pelengkap Hasil: 到/住/走/上',
    titleZh: '补语：结果补语2——动词+到/住/走/上',
    pattern: 'V + 到/住/走/上',
    explanation: '到 (mencapai/sampai), 住 (tertahan/menetap), 走 (pergi/hilang dari tempat), 上 (tercapai/terpasang) — semua dipakai sebagai pelengkap hasil yang menjelaskan hasil akhir tindakan.',
    examples: [
      { zh: '我终于找到那本书了。', pinyin: 'Wǒ zhōngyú zhǎodào nà běn shū le.', id: 'Saya akhirnya menemukan buku itu.' },
      { zh: '他一下子就记住了我的名字。', pinyin: 'Tā yíxiàzi jiù jìzhùle wǒ de míngzi.', id: 'Dia langsung mengingat nama saya.' },
      { zh: '钱包被小偷拿走了。', pinyin: 'Qiánbāo bèi xiǎotōu ná zǒu le.', id: 'Dompet dibawa kabur pencuri.' },
      { zh: '他终于考上了大学。', pinyin: 'Tā zhōngyú kǎoshàngle dàxué.', id: 'Dia akhirnya berhasil masuk universitas (lulus ujian masuk).' },
    ],
    tags: ['补语', '结果补语'],
    level: 3,
    relatedVocabIds: [],
  },

  {
    id: 'g3-047',
    gfCode: 'yf3-47',
    title: 'Pelengkap Arah — Makna Kiasan',
    titleZh: '补语：趋向补语2——引申用法',
    pattern: '(1) hasil：V+出/起/下 (2) mulai：V+上/起来 (3) berlanjut：V+下去/下来',
    explanation: 'Pelengkap arah majemuk bisa dipakai secara kiasan (bukan gerakan fisik): (1) menyatakan hasil tindakan (V+出/起/下, mis. 想出办法), (2) menyatakan mulainya suatu tindakan/keadaan (V+上/起来, mis. 下起雨来), (3) menyatakan berlanjutnya suatu tindakan (V+下去/下来, mis. 说下去).',
    examples: [
      { zh: '他终于想出了一个好办法。', pinyin: 'Tā zhōngyú xiǎngchūle yí gè hǎo bànfǎ.', id: 'Dia akhirnya berhasil memikirkan cara yang bagus.' },
      { zh: '天突然下起雨来了。', pinyin: 'Tiān tūrán xià qǐ yǔ lái le.', id: 'Tiba-tiba mulai turun hujan.' },
      { zh: '请你接着说下去。', pinyin: 'Qǐng nǐ jiēzhe shuō xiàqù.', id: 'Silakan lanjutkan bicaranya.' },
    ],
    tags: ['补语', '趋向补语', '引申义'],
    level: 3,
    relatedVocabIds: ['3-298', '3-383', '3-441'],
  },

  {
    id: 'g3-048',
    gfCode: 'yf3-48',
    title: 'Pelengkap Kemungkinan: V+得/不+V/Adj',
    titleZh: '补语：可能补语1——动词+得/不+动词/形容词',
    pattern: 'V + 得 + Komplemen (bisa) | V + 不 + Komplemen (tidak bisa)',
    explanation: 'Menyatakan kemungkinan/kesanggupan mencapai suatu hasil, dibentuk dari pelengkap hasil/arah dengan disisipi 得 (bisa) atau 不 (tidak bisa).',
    examples: [
      { zh: '黑板上的字太小，我们都看不见。', pinyin: 'Hēibǎn shàng de zì tài xiǎo, wǒmen dōu kàn bu jiàn.', id: 'Tulisan di papan tulis terlalu kecil, kami semua tidak bisa melihat.' },
      { zh: '这么多菜，我们吃得完吗？', pinyin: 'Zhème duō cài, wǒmen chī de wán ma?', id: 'Makanan sebanyak ini, apa kita bisa menghabiskannya?' },
    ],
    tags: ['补语', '可能补语'],
    level: 3,
    relatedVocabIds: ['3-083', '3-232'],
  },

  {
    id: 'g3-049',
    gfCode: 'yf3-49',
    title: 'Pelengkap Derajat: 得很 / 极了 / 坏了',
    titleZh: '补语：程度补语1——(1)形容词+得很 (2)形容词/动词+极了/坏了',
    pattern: 'Adj + 得很 | Adj/V + 极了/坏了',
    explanation: '得很 setelah kata sifat menekankan derajat tinggi ("sangat"). 极了 dan 坏了 setelah kata sifat/kata kerja tertentu (biasanya bermuatan emosi) menekankan derajat ekstrem, "sangat sekali".',
    examples: [
      { zh: '今天热得很。', pinyin: 'Jīntiān rè de hěn.', id: 'Hari ini panas sekali.' },
      { zh: '这个消息让人高兴极了。', pinyin: 'Zhège xiāoxi ràng rén gāoxìng jí le.', id: 'Berita ini membuat orang sangat senang sekali.' },
      { zh: '等了半天车都不来，急坏了。', pinyin: 'Děngle bàntiān chē dōu bù lái, jí huài le.', id: 'Menunggu lama sekali bus tidak datang, jadi sangat panik.' },
    ],
    tags: ['补语', '程度补语'],
    level: 3,
    relatedVocabIds: ['3-083', '3-187'],
  },

  {
    id: 'g3-050',
    gfCode: 'yf3-50',
    title: 'Pelengkap Kuantitas: Jarak Waktu Sejak Tindakan Selesai',
    titleZh: '补语：数量补语3——表示动作结束到某个时间点的间隔时间',
    pattern: 'V + 了 + 时量 + 了',
    explanation: 'Menyatakan berapa lama waktu telah berlalu sejak suatu tindakan/kejadian berakhir sampai suatu titik waktu (biasanya sekarang).',
    examples: [
      { zh: '他离开这儿三年了。', pinyin: 'Tā líkāi zhèr sān nián le.', id: 'Sudah tiga tahun sejak dia meninggalkan sini.' },
      { zh: '这本书他看完两天了。', pinyin: 'Zhè běn shū tā kànwán liǎng tiān le.', id: 'Sudah dua hari sejak dia selesai membaca buku ini.' },
    ],
    tags: ['补语', '数量补语'],
    level: 3,
    relatedVocabIds: ['3-212'],
  },

  {
    id: 'g3-051',
    gfCode: 'yf3-51',
    title: 'Kalimat Tanya: "怎样+动词"',
    titleZh: '句类：疑问句——"怎样+动词"的特指问句',
    pattern: 'S + 怎样 + V (+O) ？',
    explanation: 'Kalimat tanya spesifik yang memakai 怎样 sebelum kata kerja untuk menanyakan cara suatu tindakan dilakukan.',
    examples: [
      { zh: '你打算怎样解决这个问题？', pinyin: 'Nǐ dǎsuàn zěnyàng jiějué zhège wèntí?', id: 'Kamu berencana menyelesaikan masalah ini bagaimana?' },
      { zh: '他怎样才能通过考试？', pinyin: 'Tā zěnyàng cáinéng tōngguò kǎoshì?', id: 'Bagaimana caranya dia bisa lulus ujian?' },
    ],
    tags: ['句类', '疑问句'],
    level: 3,
    relatedVocabIds: ['3-465', '3-222'],
  },

  {
    id: 'g3-052',
    gfCode: 'yf3-52',
    title: 'Kalimat Retorika: 不是……吗？',
    titleZh: '句类：反问句1——用反问句表示强调：不是……吗？',
    pattern: '不是 + Pernyataan + 吗？',
    explanation: 'Pola 不是……吗？dipakai untuk menekankan suatu pernyataan dalam bentuk pertanyaan retorika, bukan pertanyaan sungguhan, semakna "bukankah...?".',
    examples: [
      { zh: '今天不是星期天吗？', pinyin: 'Jīntiān bú shì xīngqītiān ma?', id: 'Bukankah hari ini hari Minggu?' },
      { zh: '你不是已经吃过了吗？', pinyin: 'Nǐ bú shì yǐjīng chīguo le ma?', id: 'Bukankah kamu sudah makan?' },
    ],
    tags: ['句类', '反问句', '强调'],
    level: 3,
    relatedVocabIds: ['3-222', '3-441'],
  },

  {
    id: 'g3-053',
    gfCode: 'yf3-53',
    title: 'Kalimat 把 1: Menyatakan Penempatan/Pemindahan Objek',
    titleZh: '特殊句型："把"字句1——表处置',
    pattern: '(1) S+把+O+V+在/到+Lokasi (2) S+把+O1+V(+给)+O2 (3) S+把+O+V+结果/趋向/状态补语',
    explanation: 'Kalimat 把 memindahkan objek ke posisi sebelum predikat untuk menekankan "apa yang dilakukan terhadap objek". Tiga sub-pola resmi Level 3: (1) V+在/到+lokasi, (2) V(+给)+penerima (memberikan sesuatu kepada seseorang), (3) V+pelengkap hasil/arah/keadaan.',
    examples: [
      { zh: '老师把书放在桌子上了。', pinyin: 'Lǎoshī bǎ shū fàng zài zhuōzi shàng le.', id: 'Guru menaruh buku di atas meja.' },
      { zh: '爸爸把新买的手机送给妹妹了。', pinyin: 'Bàba bǎ xīn mǎi de shǒujī sòng gěi mèimei le.', id: 'Ayah memberikan HP yang baru dibeli kepada adik perempuan.' },
      { zh: '孩子们把手洗得干干净净的。', pinyin: 'Háizimen bǎ shǒu xǐ de gāngānjìngjìng de.', id: 'Anak-anak mencuci tangan sampai bersih sekali.' },
    ],
    tags: ['特殊句型', '把字句', 'disposal'],
    level: 3,
    relatedVocabIds: ['3-006', '3-222', '3-383'],
  },

  {
    id: 'g3-054',
    gfCode: 'yf3-54',
    title: 'Kalimat Pasif 1: 主语+被+宾语+动词+其他成分',
    titleZh: '特殊句型：被动句1——(1)主语+被+宾语+动词+其他成分 (2)主语+被+动词+其他成分',
    pattern: 'S (penderita) + 被 + (Agen) + V + Komplemen/Keterangan lain',
    explanation: 'Kalimat pasif menyatakan subjek sebagai penderita tindakan. Pelaku (Agen) setelah 被 boleh disebutkan atau dihilangkan, tetapi setelah kata kerja harus ada komplemen atau keterangan lain (tidak boleh berdiri sendiri).',
    examples: [
      { zh: '那个手机早被我用坏了。', pinyin: 'Nàge shǒujī zǎo bèi wǒ yòng huài le.', id: 'HP itu sudah lama dirusakkan olehku karena pemakaian.' },
      { zh: '这些照片都被删除了。', pinyin: 'Zhèxiē zhàopiàn dōu bèi shānchú le.', id: 'Foto-foto ini semuanya sudah dihapus.' },
    ],
    tags: ['特殊句型', '被动句'],
    level: 3,
    relatedVocabIds: ['3-309', '3-017', '3-222'],
  },

  {
    id: 'g3-055',
    gfCode: 'yf3-55',
    title: 'Kalimat Serial: V1+着+V2 (Menyatakan Cara/Sikap)',
    titleZh: '特殊句型：连动句2——"着"表示动作的伴随：动词1+着+动词2',
    pattern: 'S + V1 + 着 + V2',
    explanation: '着 setelah kata kerja pertama (V1) menyatakan bahwa V1 dilakukan bersamaan dengan/menjadi cara berlangsungnya V2 (tindakan utama), semakna "sambil...".',
    examples: [
      { zh: '他笑着说：“没事儿。”', pinyin: 'Tā xiàozhe shuō: “Méishìr.”', id: 'Dia sambil tersenyum berkata: “Tidak apa-apa.”' },
      { zh: '她站着吃饭。', pinyin: 'Tā zhànzhe chīfàn.', id: 'Dia makan sambil berdiri.' },
      { zh: '他们坐着聊天儿。', pinyin: 'Tāmen zuòzhe liáotiānr.', id: 'Mereka mengobrol sambil duduk.' },
    ],
    tags: ['特殊句型', '连动句', '着'],
    level: 3,
    relatedVocabIds: ['3-222'],
  },

  {
    id: 'g3-056',
    gfCode: 'yf3-56',
    title: 'Kalimat Perbandingan 2',
    titleZh: '特殊句型：比较句2',
    pattern: '(1)A比B+更/还+Adj (2)A跟B一样 (3)A跟B一样+Adj (4)A不比B+Adj (5)A比B+多/少/早/晚+V+数量短语',
    explanation: 'Lima pola perbandingan resmi Level 3: (1) A比B更/还+sifat (penegasan derajat lebih), (2) A跟B一样 (A sama dengan B), (3) A跟B一样+sifat (A sama sifatnya dengan B), (4) A不比B+sifat (A tidak lebih ... dari B), (5) A比B+多/少/早/晚+V+jumlah (menyatakan selisih kuantitas).',
    examples: [
      { zh: '今天比昨天更冷。', pinyin: 'Jīntiān bǐ zuótiān gèng lěng.', id: 'Hari ini lebih dingin dari kemarin.' },
      { zh: '我的书跟你的一样。', pinyin: 'Wǒ de shū gēn nǐ de yíyàng.', id: 'Buku saya sama dengan bukumu.' },
      { zh: '这件跟那件一样漂亮。', pinyin: 'Zhè jiàn gēn nà jiàn yíyàng piàoliang.', id: 'Yang ini sama bagusnya dengan yang itu.' },
      { zh: '我姐姐不比我高。', pinyin: 'Wǒ jiějie bù bǐ wǒ gāo.', id: 'Kakak perempuan saya tidak lebih tinggi dari saya.' },
      { zh: '他比我多吃了五个饺子。', pinyin: 'Tā bǐ wǒ duō chīle wǔ gè jiǎozi.', id: 'Dia makan lima pangsit lebih banyak dari saya.' },
    ],
    tags: ['特殊句型', '比较句'],
    level: 3,
    relatedVocabIds: ['3-028', '3-439', '3-106', '3-145', '3-175', '3-222'],
  },

  {
    id: 'g3-057',
    gfCode: 'yf3-57',
    title: 'Kalimat Eksistensial 3: Kemunculan/Kehilangan',
    titleZh: '特殊句型：存现句3',
    pattern: '(1)muncul：处所+V+趋向/结果补语+了+数量+人/物 (2)hilang：处所+V+结果补语+了+数量+人/物',
    explanation: 'Kalimat eksistensial (存现句) diawali dengan kata tempat, diikuti kata kerja dengan pelengkap, lalu 了, jumlah, dan orang/benda. Bisa menyatakan (1) kemunculan sesuatu di suatu tempat, atau (2) hilang/berkurangnya sesuatu dari suatu tempat.',
    examples: [
      { zh: '前面走过来一个人。', pinyin: 'Qiánmiàn zǒu guòlái yí gè rén.', id: 'Dari depan berjalan datang seseorang.' },
      { zh: '教室里走了两个学生。', pinyin: 'Jiàoshì lǐ zǒule liǎng gè xuéshēng.', id: 'Dari ruang kelas keluar/pergi dua orang murid.' },
    ],
    tags: ['特殊句型', '存现句'],
    level: 3,
    relatedVocabIds: ['3-222', '3-383'],
  },

  {
    id: 'g3-058',
    gfCode: 'yf3-58',
    title: 'Kalimat "是……的" 2: Menekankan Sikap/Pandangan',
    titleZh: '特殊句型："是……的"句2——强调说话人的看法或态度',
    pattern: 'S + 是 + Adj/klausa pandangan + 的',
    explanation: '是……的 pada Level 3 dipakai untuk menekankan pandangan atau sikap pembicara terhadap sesuatu (berbeda dari 是...的1 yang menekankan waktu/tempat/cara suatu tindakan lampau).',
    examples: [
      { zh: '你说得对，这位经理是很负责的。', pinyin: 'Nǐ shuō de duì, zhè wèi jīnglǐ shì hěn fùzé de.', id: 'Kamu benar, manajer ini memang sangat bertanggung jawab.' },
      { zh: '我同意，那部电影是很有意思的。', pinyin: 'Wǒ tóngyì, nà bù diànyǐng shì hěn yǒu yìsi de.', id: 'Saya setuju, film itu memang sangat menarik.' },
    ],
    tags: ['特殊句型', '是的句', '强调'],
    level: 3,
    relatedVocabIds: ['3-184', '3-222'],
  },

  {
    id: 'g3-059',
    gfCode: 'yf3-59',
    title: 'Kata Kerja Reduplikat: S+V+O+V+补语',
    titleZh: '特殊句型：重动句——主语+动词+宾语+动词+补语',
    pattern: 'S + V + O + V + Komplemen',
    explanation: 'Ketika kata kerja memiliki objek dan komplemen (biasanya komplemen cara/derajat) sekaligus, kata kerjanya harus diulang: objek diletakkan setelah V pertama, komplemen setelah V kedua.',
    examples: [
      { zh: '他打篮球打得很好。', pinyin: 'Tā dǎ lánqiú dǎ de hěn hǎo.', id: 'Dia bermain basket dengan sangat baik.' },
      { zh: '她游泳游得很快。', pinyin: 'Tā yóuyǒng yóu de hěn kuài.', id: 'Dia berenang dengan sangat cepat.' },
    ],
    tags: ['特殊句型', '重动句'],
    level: 3,
    relatedVocabIds: ['3-222'],
  },

  {
    id: 'g3-060',
    gfCode: 'yf3-60',
    title: 'Kalimat Majemuk Beruntun: 先……，再/然后……',
    titleZh: '复句：承接复句——先……，再/然后……',
    pattern: '先 + Tindakan 1，再/然后 + Tindakan 2',
    explanation: 'Menyatakan urutan tindakan secara kronologis, "pertama-tama..., baru/kemudian...".',
    examples: [
      { zh: '我们先吃饭，再去看电影。', pinyin: 'Wǒmen xiān chīfàn, zài qù kàn diànyǐng.', id: 'Kita makan dulu, baru pergi nonton film.' },
      { zh: '他先做作业，然后看电视。', pinyin: 'Tā xiān zuò zuòyè, ránhòu kàn diànshì.', id: 'Dia mengerjakan PR dulu, kemudian menonton TV.' },
    ],
    tags: ['复句', '承接复句'],
    level: 3,
    relatedVocabIds: ['3-313', '3-205', '3-222', '3-382'],
  },

  {
    id: 'g3-061',
    gfCode: 'yf3-61',
    title: 'Kalimat Majemuk Pilihan: 或者……，或者……',
    titleZh: '复句：选择复句——或者……，或者……',
    pattern: '或者 + Pilihan 1，或者 + Pilihan 2',
    explanation: 'Menyatakan dua pilihan yang setara, "entah..., entah...".',
    examples: [
      { zh: '或者你来，或者我去，都可以。', pinyin: 'Huòzhě nǐ lái, huòzhě wǒ qù, dōu kěyǐ.', id: 'Entah kamu yang datang, entah saya yang pergi, keduanya boleh.' },
      { zh: '周末或者去爬山，或者在家休息。', pinyin: 'Zhōumò huòzhě qù páshān, huòzhě zài jiā xiūxi.', id: 'Akhir pekan entah pergi mendaki gunung, entah istirahat di rumah.' },
    ],
    tags: ['复句', '选择复句'],
    level: 3,
    relatedVocabIds: ['3-185', '3-413', '3-184', '3-222', '3-412'],
  },

  {
    id: 'g3-062',
    gfCode: 'yf3-62',
    title: 'Kalimat Majemuk Setara: 一会儿……，一会儿……',
    titleZh: '复句：并列复句——一会儿……，一会儿……',
    pattern: '一会儿 + Situasi 1，一会儿 + Situasi 2',
    explanation: '一会儿……，一会儿…… berarti "sebentar begini, sebentar begitu", menyatakan situasi/kondisi yang bergantian berubah.',
    examples: [
      { zh: '最近天气有点儿奇怪，一会儿冷，一会儿热。', pinyin: 'Zuìjìn tiānqì yǒudiǎnr qíguài, yíhuìr lěng, yíhuìr rè.', id: 'Belakangan ini cuaca agak aneh, sebentar dingin, sebentar panas.' },
      { zh: '他们在晚会上一会儿唱歌，一会儿跳舞。', pinyin: 'Tāmen zài wǎnhuì shàng yíhuìr chànggē, yíhuìr tiàowǔ.', id: 'Mereka di pesta malam sebentar bernyanyi, sebentar menari.' },
    ],
    tags: ['复句', '并列复句'],
    level: 3,
    relatedVocabIds: ['3-181', '3-222'],
  },

  {
    id: 'g3-063',
    gfCode: 'yf3-63',
    title: 'Kalimat Majemuk Setara: 又……，又……',
    titleZh: '复句：并列复句——又……，又……',
    pattern: '又 + Adj/V1，又 + Adj/V2',
    explanation: '又……，又…… berarti "sekaligus.../baik...maupun...", menunjukkan dua sifat/tindakan yang berlaku bersamaan (simultan), berbeda dari 一会儿…一会儿… yang bergantian.',
    examples: [
      { zh: '这件衣服又好看，又便宜。', pinyin: 'Zhè jiàn yīfu yòu hǎokàn, yòu piányi.', id: 'Baju ini bagus sekaligus murah.' },
      { zh: '晚会上大家又唱歌，又跳舞，高兴极了。', pinyin: 'Wǎnhuì shàng dàjiā yòu chànggē, yòu tiàowǔ, gāoxìng jí le.', id: 'Di pesta malam semua orang baik bernyanyi maupun menari, sangat gembira.' },
    ],
    tags: ['复句', '并列复句'],
    level: 3,
    relatedVocabIds: ['3-222', '3-442'],
  },

  {
    id: 'g3-064',
    gfCode: 'yf3-64',
    title: 'Kalimat Majemuk Setara: 一边……，一边……',
    titleZh: '复句：并列复句——一边……，一边……',
    pattern: 'S + 一边 + V1，一边 + V2',
    explanation: 'Menyatakan dua tindakan yang dilakukan bersamaan oleh pelaku yang sama.',
    examples: [
      { zh: '他一边听音乐，一边写作业。', pinyin: 'Tā yìbiān tīng yīnyuè, yìbiān xiě zuòyè.', id: 'Dia sambil mendengarkan musik, sambil mengerjakan PR.' },
      { zh: '我们一边走，一边聊天儿。', pinyin: 'Wǒmen yìbiān zǒu, yìbiān liáotiānr.', id: 'Kami sambil berjalan, sambil mengobrol.' },
    ],
    tags: ['复句', '并列复句'],
    level: 3,
    relatedVocabIds: ['3-423', '3-222'],
  },

  {
    id: 'g3-065',
    gfCode: 'yf3-65',
    title: 'Kalimat Majemuk Peningkat: 不但……，而且……',
    titleZh: '复句：递进复句——不但……，而且……',
    pattern: '不但 + Klausa 1，而且 + Klausa 2',
    explanation: 'Menyatakan hubungan peningkatan, "tidak hanya..., tetapi juga...". Klausa kedua menambahkan info yang lebih jauh/lebih kuat dari klausa pertama.',
    examples: [
      { zh: '他不但聪明，而且很努力。', pinyin: 'Tā búdàn cōngming, érqiě hěn nǔlì.', id: 'Dia tidak hanya pintar, tetapi juga sangat rajin.' },
      { zh: '这个方法不但简单，而且很有效。', pinyin: 'Zhège fāngfǎ búdàn jiǎndān, érqiě hěn yǒuxiào.', id: 'Cara ini tidak hanya sederhana, tetapi juga sangat efektif.' },
    ],
    tags: ['复句', '递进复句'],
    level: 3,
    relatedVocabIds: ['3-039', '3-113', '3-222'],
  },

  {
    id: 'g3-066',
    gfCode: 'yf3-66',
    title: 'Kalimat Majemuk Kontras: 虽然……，可是……',
    titleZh: '复句：转折复句——虽然……，可是……',
    pattern: '虽然 + Klausa 1，可是 + Klausa 2',
    explanation: 'Menyatakan hubungan pertentangan, "meskipun..., tetapi...".',
    examples: [
      { zh: '虽然下雨了，可是我们还是决定出去。', pinyin: 'Suīrán xiàyǔ le, kěshì wǒmen háishi juédìng chūqù.', id: 'Meskipun hujan, tetapi kami tetap memutuskan untuk keluar.' },
      { zh: '虽然很累，可是他还在坚持工作。', pinyin: 'Suīrán hěn lèi, kěshì tā hái zài jiānchí gōngzuò.', id: 'Meskipun sangat lelah, tetapi dia masih tekun bekerja.' },
    ],
    tags: ['复句', '转折复句'],
    level: 3,
    relatedVocabIds: ['3-237', '3-222', '3-232'],
  },

  {
    id: 'g3-067',
    gfCode: 'yf3-67',
    title: 'Kalimat Majemuk Andaian: 如果……，就…… / ……的话，就……',
    titleZh: '复句：假设复句——如果……，就…… / ……的话，就……',
    pattern: '如果 + Kondisi，就 + Akibat | ……的话，就 + Akibat',
    explanation: 'Kedua pola menyatakan andaian, "kalau/seandainya..., maka...". 如果 diletakkan di depan klausa syarat, sedangkan 的话 diletakkan di akhir klausa syarat.',
    examples: [
      { zh: '如果明天不下雨，我们就去爬山。', pinyin: 'Rúguǒ míngtiān bú xiàyǔ, wǒmen jiù qù páshān.', id: 'Kalau besok tidak hujan, kita akan pergi mendaki gunung.' },
      { zh: '你不喜欢的话，就换一个。', pinyin: 'Nǐ bù xǐhuan dehuà, jiù huàn yí gè.', id: 'Kalau kamu tidak suka, ganti saja dengan yang lain.' },
    ],
    tags: ['复句', '假设复句'],
    level: 3,
    relatedVocabIds: ['3-086', '3-319', '3-222'],
  },

  {
    id: 'g3-068',
    gfCode: 'yf3-68',
    title: 'Kalimat Majemuk Syarat: 只有……，才…… / 只要……，就……',
    titleZh: '复句：条件复句——只有……，才…… / 只要……，就……',
    pattern: '只有 + Syarat mutlak，才 + Hasil | 只要 + Syarat cukup，就 + Hasil',
    explanation: '只有……才…… menyatakan syarat mutlak/satu-satunya, "hanya dengan..., baru...". 只要……就…… menyatakan syarat cukup (tidak harus satu-satunya), "asalkan..., maka...".',
    examples: [
      { zh: '只有努力，才能成功。', pinyin: 'Zhǐyǒu nǔlì, cáinéng chénggōng.', id: 'Hanya dengan berusaha keras, baru bisa berhasil.' },
      { zh: '只要你愿意，就一定能做到。', pinyin: 'Zhǐyào nǐ yuànyì, jiù yídìng néng zuòdào.', id: 'Asalkan kamu mau, pasti bisa melakukannya.' },
    ],
    tags: ['复句', '条件复句'],
    level: 3,
    relatedVocabIds: ['3-479', '3-480', '3-044', '3-222', '3-474'],
  },

  {
    id: 'g3-069',
    gfCode: 'yf3-69',
    title: 'Kalimat Majemuk Tujuan: 为了……，……',
    titleZh: '复句：目的复句——为了……，……',
    pattern: '为了 + Tujuan，+ klausa tindakan',
    explanation: '为了 di awal kalimat menyatakan tujuan/motivasi dari suatu tindakan, "demi..., maka...".',
    examples: [
      { zh: '为了保持健康，他每天坚持运动。', pinyin: 'Wèile bǎochí jiànkāng, tā měitiān jiānchí yùndòng.', id: 'Demi menjaga kesehatan, dia tekun berolahraga setiap hari.' },
      { zh: '为了学好中文，我每天都看中国电视剧。', pinyin: 'Wèile xuéhǎo Zhōngwén, wǒ měitiān dōu kàn Zhōngguó diànshìjù.', id: 'Demi belajar bahasa Mandarin dengan baik, saya setiap hari menonton drama China.' },
    ],
    tags: ['复句', '目的复句'],
    level: 3,
    relatedVocabIds: ['3-376', '3-222', '3-375'],
  },

  {
    id: 'g3-070',
    gfCode: 'yf3-70',
    title: 'Kalimat Majemuk Terkompres: ……了……（就）……',
    titleZh: '复句：紧缩复句——……了……（就）……',
    pattern: 'V1 + 了 + (就) + V2',
    explanation: 'Kalimat terkompres menggabungkan dua klausa kondisi-akibat tanpa penanda hubung eksplisit, "begitu V1, langsung V2".',
    examples: [
      { zh: '他下了课就去图书馆。', pinyin: 'Tā xiàle kè jiù qù túshūguǎn.', id: 'Dia begitu selesai kuliah langsung pergi ke perpustakaan.' },
      { zh: '他喝了酒就会脸红。', pinyin: 'Tā hēle jiǔ jiù huì liǎnhóng.', id: 'Dia begitu minum alkohol langsung muka merah.' },
    ],
    tags: ['复句', '紧缩复句'],
    level: 3,
    relatedVocabIds: ['3-222'],
  },

  {
    id: 'g3-071',
    gfCode: 'yf3-71',
    title: 'Menyatakan Perkiraan 2: 大概 + Angka Berdekatan',
    titleZh: '特殊表达法：概数表达法2——(1)用"大概"表示概数 (2)相邻数词连用表示概数',
    pattern: '(1) 大概 + 数量 (2) 数词1数词2 + 量词 (mis. 三四个)',
    explanation: 'Dua cara resmi Level 3 untuk menyatakan perkiraan jumlah: (1) memakai 大概 (kira-kira) sebelum angka, (2) menggabungkan dua angka berdekatan langsung (mis. 三四个 = tiga-empat, 十五六岁 = lima belas-enam belas tahun) untuk menyatakan perkiraan di antara keduanya.',
    examples: [
      { zh: '这个手机大概两千块。', pinyin: 'Zhège shǒujī dàgài liǎng qiān kuài.', id: 'HP ini kira-kira dua ribu yuan.' },
      { zh: '教室里坐了三四十个人。', pinyin: 'Jiàoshì lǐ zuòle sānsìshí gè rén.', id: 'Di kelas duduk sekitar tiga puluh sampai empat puluh orang.' },
    ],
    tags: ['特殊表达法', '概数'],
    level: 3,
    relatedVocabIds: ['3-071', '3-441'],
  },
];

export default hsk3Grammar;