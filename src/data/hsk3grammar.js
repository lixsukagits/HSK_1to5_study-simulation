// HSK 3.0 Level 3 — Grammar Points
// Berdasarkan GF 0025-2021 Appendix A.3 (三级语法点)
// 81 poin grammar resmi, nomor 三01–三81
// Struktur: { id, title, titleZh, pattern, explanation, examples, tags, level }

export const hsk3Grammar = [

  // ════════════════════════════════════════════════════════════
  // A.3.1 BAHASA UNSUR (语素)
  // ════════════════════════════════════════════════════════════

  // A.3.1.1 前缀 (Prefiks)
  {
    id: 'g3-001',
    title: 'Prefiks: 第–, 老–, 小–',
    titleZh: '前缀：第–、老–、小–',
    pattern: '第 + Nomor | 老 / 小 + Nama/Kata',
    explanation: '第– dipakai untuk menyatakan urutan (pertama, ketiga, dst). 老– dan 小– dipakai sebagai panggilan akrab untuk orang yang lebih tua (老) atau lebih muda/kecil (小), biasanya diikuti nama belakang.',
    examples: [
      { zh: '他是第一名。', pinyin: 'Tā shì dì yī míng.', id: 'Dia adalah juara pertama.' },
      { zh: '他是我们班的老大。', pinyin: 'Tā shì wǒmen bān de lǎo dà.', id: 'Dia yang tertua di kelas kami.' },
      { zh: '小李，你好！', pinyin: 'Xiǎo Lǐ, nǐ hǎo!', id: 'Halo, Xiao Li!' },
    ],
    tags: ['morfologi', 'prefiks', 'panggilan'],
    level: 3,
  },

  // A.3.1.2 后缀 (Sufiks)
  {
    id: 'g3-002',
    title: 'Sufiks: –儿, –家, –们, –头, –子',
    titleZh: '后缀：–儿、–家、–们、–头、–子',
    pattern: 'Kata + 儿 / 家 / 们 / 头 / 子',
    explanation: '–儿 adalah akhiran erhua (dialek Beijing). –家 menunjukkan profesional/ahli. –们 membentuk jamak untuk orang. –头 dan –子 adalah sufiks nomina umum.',
    examples: [
      { zh: '画儿挂在墙上。', pinyin: 'Huàr guà zài qiáng shàng.', id: 'Lukisan itu digantung di dinding.' },
      { zh: '他是一位画家。', pinyin: 'Tā shì yī wèi huàjiā.', id: 'Dia adalah seorang pelukis.' },
      { zh: '朋友们都来了。', pinyin: 'Péngyǒumen dōu lái le.', id: 'Para teman semuanya sudah datang.' },
    ],
    tags: ['morfologi', 'sufiks', 'jamak'],
    level: 3,
  },

  // ════════════════════════════════════════════════════════════
  // A.3.2 JENIS KATA (词类)
  // ════════════════════════════════════════════════════════════

  // A.3.2.1 Kata Kerja
  {
    id: 'g3-003',
    title: 'Kata Kerja Modal: 敢 (berani)',
    titleZh: '能愿动词：敢',
    pattern: 'S + 敢 + V',
    explanation: '敢 berarti "berani (melakukan sesuatu)". Negasinya 不敢 berarti "tidak berani". Sering dipakai untuk tantangan atau keberanian.',
    examples: [
      { zh: '你敢跳下去吗？', pinyin: 'Nǐ gǎn tiào xia qu ma?', id: 'Beranikah kamu melompat ke bawah?' },
      { zh: '我不敢在河里游泳。', pinyin: 'Wǒ bù gǎn zài hé lǐ yóuyǒng.', id: 'Saya tidak berani berenang di sungai.' },
    ],
    tags: ['kata kerja modal', 'keberanian'],
    level: 3,
  },

  {
    id: 'g3-004',
    title: 'Kata Kerja Modal: 需要 (perlu)',
    titleZh: '能愿动词：需要',
    pattern: 'S + 需要 + V/O',
    explanation: '需要 berarti "perlu/membutuhkan". Berbeda dengan 要 yang lebih umum, 需要 menekankan kebutuhan yang lebih objektif atau logis.',
    examples: [
      { zh: '她生病了，需要休息。', pinyin: 'Tā shēngbìng le, xūyào xiūxi.', id: 'Dia sakit, perlu istirahat.' },
      { zh: '我们不需要买吃的，家里有很多。', pinyin: 'Wǒmen bù xūyào mǎi chī de, jiā lǐ yǒu hěn duō.', id: 'Kita tidak perlu beli makanan, di rumah sudah banyak.' },
    ],
    tags: ['kata kerja modal', 'kebutuhan'],
    level: 3,
  },

  {
    id: 'g3-005',
    title: 'Kata Kerja离合: 帮忙、点头、见面 dst.',
    titleZh: '动宾式离合词',
    pattern: 'V–O dapat dipisah oleh aspek/pelengkap',
    explanation: 'Kata kerja离合词 (lí hé cí) adalah kata kerja yang terdiri dari V+O yang bisa dipisah. Contoh: 帮忙 → 帮了个忙, 见面 → 见了一次面, 结婚 → 结了婚. Kata-kata ini tidak bisa langsung diikuti objek lagi.',
    examples: [
      { zh: '他经常帮我的忙。', pinyin: 'Tā jīngcháng bāng wǒ de máng.', id: 'Dia sering membantu saya.' },
      { zh: '来中国以后，我们只见过一次面。', pinyin: 'Lái Zhōngguó yǐhòu, wǒmen zhǐ jiànguò yī cì miàn.', id: 'Setelah ke China, kami hanya bertemu satu kali.' },
      { zh: '结了婚以后，她就不工作了。', pinyin: 'Jié le hūn yǐhòu, tā jiù bù gōngzuò le.', id: 'Setelah menikah, dia tidak bekerja lagi.' },
    ],
    tags: ['kata kerja', '離合詞', 'struktur'],
    level: 3,
  },

  {
    id: 'g3-006',
    title: 'Kata Kerja Komplemen Terikat: 打开、看见、离开、完成',
    titleZh: '动补式离合词：打开、看见、离开、完成',
    pattern: 'V + 补语 (komplemen terikat)',
    explanation: 'Beberapa kata kerja sudah menyatu dengan komplementnya menjadi satu kata: 打开 (membuka), 看见 (melihat/terlihat), 离开 (pergi meninggalkan), 完成 (menyelesaikan). Komplemen ini tidak bisa dipisah.',
    examples: [
      { zh: '你的文件我打不开。', pinyin: 'Nǐ de wénjiàn wǒ dǎ bu kāi.', id: 'File kamu tidak bisa saya buka.' },
      { zh: '黑板上的字很小，我们都看不见。', pinyin: 'Hēibǎn shàng de zì hěn xiǎo, wǒmen dōu kàn bu jiàn.', id: 'Tulisan di papan tulis sangat kecil, kami semua tidak bisa melihat.' },
      { zh: '我们完不成这个任务。', pinyin: 'Wǒmen wán bu chéng zhège rènwu.', id: 'Kami tidak bisa menyelesaikan tugas ini.' },
    ],
    tags: ['kata kerja', 'komplemen', 'potensial'],
    level: 3,
  },

  // A.3.2.2 Kata Ganti
  {
    id: 'g3-007',
    title: 'Kata Ganti Tanya untuk Non-Pertanyaan',
    titleZh: '疑问代词的非疑问用法',
    pattern: '(1) 疑问词 + 都/也 | (2) 疑问词 + 疑问词',
    explanation: 'Kata ganti tanya (谁、什么、哪、哪里、怎么、几) bisa dipakai bukan untuk bertanya, melainkan: (1) sebagai "siapapun/apapun" dengan 都/也 (penggunaan任指), (2) dua kata ganti tanya paralel bermakna "apapun...maka..." (penggunaan不定指).',
    examples: [
      { zh: '谁都喜欢她。', pinyin: 'Shéi dōu xǐhuān tā.', id: 'Semua orang menyukainya.' },
      { zh: '我吃什么都行。', pinyin: 'Wǒ chī shénme dōu xíng.', id: 'Saya makan apa saja tidak masalah.' },
      { zh: '你想吃什么就吃什么。', pinyin: 'Nǐ xiǎng chī shénme jiù chī shénme.', id: 'Kamu mau makan apa, makan saja.' },
    ],
    tags: ['kata ganti', 'non-pertanyaan', 'universal'],
    level: 3,
  },

  {
    id: 'g3-008',
    title: 'Kata Ganti Demonstratif: 各、各位、各种、每、任何',
    titleZh: '指示代词：各、各位、各种、每、任何',
    pattern: '各/每/任何 + N / 量词 + N',
    explanation: '各 berarti "masing-masing/berbagai", 每 berarti "setiap", 任何 berarti "apapun/manapun". 各位 = "para hadirin", 各种 = "berbagai jenis". 每 biasanya diikuti kata bilangan dan kata ukur.',
    examples: [
      { zh: '我们班的同学来自世界各国。', pinyin: 'Wǒmen bān de tóngxué láizì shìjiè gè guó.', id: 'Teman-teman sekelas kami berasal dari berbagai negara.' },
      { zh: '我每个星期天都去爬山。', pinyin: 'Wǒ měi gè xīngqītiān dōu qù páshān.', id: 'Saya setiap hari Minggu pergi mendaki gunung.' },
      { zh: '我们任何时候都要注意保护环境。', pinyin: 'Wǒmen rènhé shíhòu dōu yào zhùyì bǎohù huánjìng.', id: 'Kita kapanpun harus memperhatikan perlindungan lingkungan.' },
    ],
    tags: ['kata ganti', 'distributif', 'universal'],
    level: 3,
  },

  // A.3.2.3 Kata Ukur
  {
    id: 'g3-009',
    title: 'Kata Ukur Nomina: 把、行、架、群、束、双、台、张、支、只、种',
    titleZh: '名量词：把、行、架、群、束、双、台、张、支、只、种',
    pattern: '数词 + 量词 + 名词',
    explanation: 'Kata ukur Level 3 yang penting: 把 (untuk benda berpegang), 行 (baris), 架 (pesawat/rak), 群 (kelompok makhluk), 束 (ikatan bunga), 双 (pasang), 台 (mesin/komputer), 张 (lembaran/meja), 支 (pena/batang), 只 (hewan/tangan), 种 (jenis).',
    examples: [
      { zh: '两行汉字', pinyin: 'liǎng háng Hànzì', id: 'dua baris karakter Tionghoa' },
      { zh: '一架飞机', pinyin: 'yī jià fēijī', id: 'sebuah pesawat' },
      { zh: '两束花', pinyin: 'liǎng shù huā', id: 'dua ikat bunga' },
      { zh: '三只鸡', pinyin: 'sān zhī jī', id: 'tiga ekor ayam' },
    ],
    tags: ['kata ukur', 'nomina', 'bilangan'],
    level: 3,
  },

  {
    id: 'g3-010',
    title: 'Kata Ukur Verbal: 顿、口、眼',
    titleZh: '动量词：顿、口、眼',
    pattern: 'V + 数词 + 动量词',
    explanation: '顿 dipakai untuk makan atau tindakan berulang sekali (批评一顿 = dimarahi sekali habis-habisan), 口 untuk tegukan/suapan, 眼 untuk sekali lirik/pandang.',
    examples: [
      { zh: '批评了他一顿。', pinyin: 'Pīpíng le tā yī dùn.', id: 'Memarahinya habis-habisan sekali.' },
      { zh: '喝了一口水。', pinyin: 'Hē le yī kǒu shuǐ.', id: 'Minum satu teguk air.' },
      { zh: '看了他一眼。', pinyin: 'Kàn le tā yī yǎn.', id: 'Melirik dia sekali.' },
    ],
    tags: ['kata ukur', 'verbal', 'tindakan'],
    level: 3,
  },

  {
    id: 'g3-011',
    title: 'Reduplikasi Kata Ukur: AA',
    titleZh: '量词重叠：AA',
    pattern: '量词 + 量词 (AA)',
    explanation: 'Kata ukur yang diulang (AA) bermakna "setiap satu per satu" atau menekankan keteraturan. Contoh: 家家 (setiap rumah), 件件 (setiap barang), 条条 (setiap jalur), 次次 (setiap kali), 天天 (setiap hari), 年年 (setiap tahun).',
    examples: [
      { zh: '家家都有电视。', pinyin: 'Jiājiā dōu yǒu diànshì.', id: 'Setiap rumah punya televisi.' },
      { zh: '他天天来上课。', pinyin: 'Tā tiāntiān lái shàngkè.', id: 'Dia setiap hari datang kuliah.' },
      { zh: '年年都会下雪。', pinyin: 'Niánnián dōu huì xià xuě.', id: 'Setiap tahun pasti turun salju.' },
    ],
    tags: ['reduplikasi', 'kata ukur', 'distributif'],
    level: 3,
  },

  // A.3.2.4 Kata Keterangan (副词)
  {
    id: 'g3-012',
    title: 'Adverb Derajat: 比较、更加、还³、相当',
    titleZh: '程度副词：比较、更加、还³、相当',
    pattern: '比较/更加/还/相当 + Adj/V',
    explanation: '比较 (cukup/agak), 更加 (bahkan lebih), 还 (bahkan lebih—dalam perbandingan), 相当 (cukup/lumayan). Kata-kata ini memperkuat atau memperhalus derajat sifat.',
    examples: [
      { zh: '我比较喜欢游泳。', pinyin: 'Wǒ bǐjiào xǐhuān yóuyǒng.', id: 'Saya cukup suka berenang.' },
      { zh: '她以前学习就很努力，现在更加努力了。', pinyin: 'Tā yǐqián xuéxí jiù hěn nǔlì, xiànzài gèngjiā nǔlì le.', id: 'Dulu dia sudah rajin belajar, sekarang bahkan lebih rajin.' },
      { zh: '这个公园的景色相当漂亮。', pinyin: 'Zhège gōngyuán de jǐngsè xiāngdāng piàoliang.', id: 'Pemandangan taman ini cukup indah.' },
    ],
    tags: ['adverb', 'derajat', 'perbandingan'],
    level: 3,
  },

  {
    id: 'g3-013',
    title: 'Adverb Lingkup & Koordinasi: 光、仅、仅仅、就³、至少',
    titleZh: '范围、协同副词：光、仅、仅仅、就³、至少',
    pattern: '光/仅/仅仅/至少 + V/数量',
    explanation: '光 dan 仅/仅仅 berarti "hanya/sekedar". 至少 berarti "paling tidak/minimal". 就 dalam konteks ini berarti "hanya/tepat sekali saja".',
    examples: [
      { zh: '他每天光玩儿不学习。', pinyin: 'Tā měitiān guāng wánr bù xuéxí.', id: 'Dia setiap hari hanya bermain tanpa belajar.' },
      { zh: '今天来上课的仅有五个学生。', pinyin: 'Jīntiān lái shàngkè de jǐn yǒu wǔ gè xuéshēng.', id: 'Yang datang kuliah hari ini hanya lima mahasiswa.' },
      { zh: '教室里至少有五十个人。', pinyin: 'Jiàoshì lǐ zhìshǎo yǒu wǔshí gè rén.', id: 'Di kelas paling tidak ada lima puluh orang.' },
    ],
    tags: ['adverb', 'lingkup', 'pembatasan'],
    level: 3,
  },

  {
    id: 'g3-014',
    title: 'Adverb Waktu: 本来、才²、曾经、从来、赶紧、赶快、立刻、连忙、始终、已、早已',
    titleZh: '时间副词：本来、才²、曾经、从来、赶紧、赶快、立刻、连忙、始终、已、早已',
    pattern: 'Adverb Waktu + V/klausa',
    explanation: '本来 (asalnya/seharusnya), 才 (baru saja/hanya), 曾经 (pernah—masa lalu), 从来 (selama ini/tak pernah—dengan negasi), 赶紧/赶快 (segera/cepat-cepat), 立刻/连忙 (seketika), 始终 (senantiasa/dari awal sampai akhir), 已/早已 (sudah/sudah lama).',
    examples: [
      { zh: '会议本来是在星期一举行，但是现在改时间了。', pinyin: 'Huìyì běnlái shì zài xīngqīyī jǔxíng, dànshì xiànzài gǎi shíjiān le.', id: 'Rapat asalnya diadakan hari Senin, tapi sekarang sudah diganti waktunya.' },
      { zh: '他从来不喝酒。', pinyin: 'Tā cónglái bù hējiǔ.', id: 'Dia tidak pernah minum alkohol.' },
      { zh: '听到这个消息，他赶紧跑回家去了。', pinyin: 'Tīngdào zhège xiāoxi, tā gǎnjǐn pǎo huí jiā qù le.', id: 'Mendengar berita itu, dia segera berlari pulang ke rumah.' },
    ],
    tags: ['adverb', 'waktu', 'aspek'],
    level: 3,
  },

  {
    id: 'g3-015',
    title: 'Adverb Frekuensi & Perulangan: 通常、往往、总、总是',
    titleZh: '频率、重复副词：通常、往往、总、总是',
    pattern: '通常/往往/总/总是 + V',
    explanation: '通常 (biasanya—situasi normal), 往往 (sering kali/acapkali—pola kebiasaan), 总/总是 (selalu/terus-terusan). 往往 biasanya merujuk kebiasaan masa lalu atau pola umum, sementara 总是 lebih umum.',
    examples: [
      { zh: '李经理通常很早就到公司。', pinyin: 'Lǐ jīnglǐ tōngcháng hěn zǎo jiù dào gōngsī.', id: 'Manajer Li biasanya sangat awal tiba di kantor.' },
      { zh: '他往往要写很多遍。', pinyin: 'Tā wǎngwǎng yào xiě hěn duō biàn.', id: 'Dia sering kali perlu menulis berkali-kali.' },
      { zh: '他去机场总是提前两个小时出发。', pinyin: 'Tā qù jīchǎng zǒng shì tíqián liǎng gè xiǎoshí chūfā.', id: 'Pergi ke bandara dia selalu berangkat dua jam lebih awal.' },
    ],
    tags: ['adverb', 'frekuensi', 'kebiasaan'],
    level: 3,
  },

  {
    id: 'g3-016',
    title: 'Adverb Penghubung: 再²',
    titleZh: '关联副词：再²',
    pattern: 'V₁ + 再 + V₂ (urutan)',
    explanation: '再 di sini menghubungkan dua tindakan secara berurutan: "setelah V₁ baru kemudian V₂". Berbeda dengan 又 (pengulangan masa lalu), 再 untuk rencana/urutan ke depan.',
    examples: [
      { zh: '你洗了手再吃水果。', pinyin: 'Nǐ xǐ le shǒu zài chī shuǐguǒ.', id: 'Cuci tangan dulu, baru makan buah.' },
      { zh: '我们做完作业再玩儿游戏。', pinyin: 'Wǒmen zuò wán zuòyè zài wánr yóuxì.', id: 'Kita selesaikan PR dulu, baru main game.' },
    ],
    tags: ['adverb', 'urutan', 'penghubung'],
    level: 3,
  },

  {
    id: 'g3-017',
    title: 'Adverb Cara: 互相、尽量、亲自、相互',
    titleZh: '方式副词：互相、尽量、亲自、相互',
    pattern: '互相/尽量/亲自/相互 + V',
    explanation: '互相/相互 berarti "saling (satu sama lain)". 尽量 berarti "sebisa mungkin/semaksimal mungkin". 亲自 berarti "langsung sendiri/secara pribadi".',
    examples: [
      { zh: '大家要互相帮助。', pinyin: 'Dàjiā yào hùxiāng bāngzhù.', id: 'Kita semua harus saling membantu.' },
      { zh: '志愿者要尽量自己克服困难。', pinyin: 'Zhìyuànzhě yào jǐnliàng zìjǐ kèfú kùnnán.', id: 'Relawan harus semaksimal mungkin mengatasi kesulitan sendiri.' },
      { zh: '校长亲自联系学生实习的公司。', pinyin: 'Xiàozhǎng qīnzì liánxì xuéshēng shíxí de gōngsī.', id: 'Kepala sekolah langsung sendiri menghubungi perusahaan tempat magang siswa.' },
    ],
    tags: ['adverb', 'cara', 'timbal balik'],
    level: 3,
  },

  {
    id: 'g3-018',
    title: 'Adverb Modalitas: 大概、恐怕',
    titleZh: '情态副词：大概、恐怕',
    pattern: '大概/恐怕 + klausa',
    explanation: '大概 berarti "kira-kira/mungkin" (perkiraan netral). 恐怕 berarti "khawatir/takutnya" (perkiraan dengan sedikit kekhawatiran atau kemungkinan negatif).',
    examples: [
      { zh: '他病了，今天大概不会来上课了。', pinyin: 'Tā bìng le, jīntiān dàgài bù huì lái shàngkè le.', id: 'Dia sakit, hari ini mungkin tidak akan datang kuliah.' },
      { zh: '我头有点儿疼，恐怕是感冒了。', pinyin: 'Wǒ tóu yǒudiǎnr téng, kǒngpà shì gǎnmào le.', id: 'Kepala saya agak sakit, khawatirnya sudah masuk angin.' },
    ],
    tags: ['adverb', 'modalitas', 'perkiraan'],
    level: 3,
  },

  {
    id: 'g3-019',
    title: 'Adverb Tone: 白、并¹、当然、到底、反正、根本、果然、简直、绝对、难道、其实、千万、确实、只好、终于',
    titleZh: '语气副词',
    pattern: 'Adverb Tone + klausa',
    explanation: '白 (sia-sia), 并 (sama sekali—biasanya dengan negasi), 当然 (tentu saja), 到底 (sebenarnya/akhirnya), 反正 (bagaimanapun juga), 根本 (sama sekali), 果然 (ternyata memang benar), 简直 (benar-benar/sungguh), 绝对 (pasti/mutlak), 难道 (masa iya/mungkinkah—retorika), 其实 (sebenarnya), 千万 (jangan sekali-kali), 确实 (memang benar), 只好 (terpaksa/akhirnya hanya bisa), 终于 (akhirnya).',
    examples: [
      { zh: '老师不在办公室，我白去了。', pinyin: 'Lǎoshī bù zài bànggōngshì, wǒ bái qù le.', id: 'Guru tidak ada di kantor, saya pergi sia-sia.' },
      { zh: '天气预报说要下雨，你看果然下了。', pinyin: 'Tiānqì yùbào shuō yào xià yǔ, nǐ kàn guǒrán xià le.', id: 'Prakiraan cuaca bilang akan hujan, lihat saja ternyata memang turun.' },
      { zh: '他努力复习了一个月，终于顺利地通过了所有的考试。', pinyin: 'Tā nǔlì fùxí le yī gè yuè, zhōngyú shùnlì de tōngguò le suǒyǒu de kǎoshì.', id: 'Dia belajar keras selama sebulan, akhirnya berhasil lulus semua ujian.' },
    ],
    tags: ['adverb', 'tone', 'modalitas kalimat'],
    level: 3,
  },

  // A.3.2.5 Preposisi (介词)
  {
    id: 'g3-020',
    title: 'Preposisi 由¹ (berasal dari/dilakukan oleh)',
    titleZh: '介词：由¹',
    pattern: '由 + Pelaku/Asal + V',
    explanation: '由 menyatakan titik asal keberangkatan (oleh siapa atau dari mana). Dipakai untuk rute keberangkatan atau menunjukkan pelaku dalam kalimat pasif formal.',
    examples: [
      { zh: '这路公交车由北京机场出发。', pinyin: 'Zhè lù gōngjiāochē yóu Běijīng jīchǎng chūfā.', id: 'Bus jalur ini berangkat dari Bandara Beijing.' },
      { zh: '我们由南门进入公园。', pinyin: 'Wǒmen yóu nán mén jìnrù gōngyuán.', id: 'Kami masuk taman dari pintu selatan.' },
    ],
    tags: ['preposisi', 'asal', 'pelaku'],
    level: 3,
  },

  {
    id: 'g3-021',
    title: 'Preposisi 自从 (sejak)',
    titleZh: '介词：自从',
    pattern: '自从 + Titik Waktu + (以来), klausa',
    explanation: '自从 berarti "sejak (waktu tertentu)". Biasanya diikuti 以来 atau berdiri sendiri. Berbeda dengan 从 yang lebih netral, 自从 menekankan perubahan yang terjadi sejak saat itu.',
    examples: [
      { zh: '自从修了公路，这儿的交通就方便多了。', pinyin: 'Zìcóng xiū le gōnglù, zhèr de jiāotōng jiù fāngbiàn duō le.', id: 'Sejak jalan raya dibangun, lalu lintas di sini jauh lebih lancar.' },
      { zh: '自从来到中国，他就喜欢上了中国菜。', pinyin: 'Zìcóng lái dào Zhōngguó, tā jiù xǐhuān shàng le Zhōngguó cài.', id: 'Sejak datang ke China, dia langsung jatuh cinta pada masakan China.' },
    ],
    tags: ['preposisi', 'waktu', 'titik awal'],
    level: 3,
  },

  {
    id: 'g3-022',
    title: 'Preposisi 朝 (menghadap/ke arah)',
    titleZh: '介词：朝',
    pattern: '朝 + Arah/Objek + V',
    explanation: '朝 berarti "menghadap ke/mengarah ke". Dipakai untuk menunjukkan arah gerakan atau orientasi. Sinonim dengan 向 dalam banyak konteks.',
    examples: [
      { zh: '大门朝南开。', pinyin: 'Dàmén cháo nán kāi.', id: 'Pintu utama menghadap ke selatan.' },
      { zh: '他朝我大喊："小心！"', pinyin: 'Tā cháo wǒ dà hǎn: "Xiǎoxīn!"', id: 'Dia berteriak ke arahku: "Hati-hati!"' },
    ],
    tags: ['preposisi', 'arah', 'orientasi'],
    level: 3,
  },

  {
    id: 'g3-023',
    title: 'Preposisi 为² (untuk/bagi)',
    titleZh: '介词：为²',
    pattern: '为 + Penerima/Tujuan + V',
    explanation: '为 berarti "untuk/demi kepentingan seseorang". Berbeda dengan 为了 (untuk tujuan), 为 lebih menekankan penerima manfaat dari suatu tindakan.',
    examples: [
      { zh: '妈妈每天为我们做饭。', pinyin: 'Māma měitiān wèi wǒmen zuòfàn.', id: 'Ibu setiap hari memasak untuk kami.' },
      { zh: '他为我买了一束花。', pinyin: 'Tā wèi wǒ mǎi le yī shù huā.', id: 'Dia membelikan aku seikat bunga.' },
    ],
    tags: ['preposisi', 'benefaktif', 'tujuan'],
    level: 3,
  },

  {
    id: 'g3-024',
    title: 'Preposisi 向² (ke arah/kepada)',
    titleZh: '介词：向²',
    pattern: '向 + Sasaran/Arah + V',
    explanation: '向 menyatakan arah gerakan atau target komunikasi. Dipakai untuk menunjukkan kepada siapa sesuatu ditujukan atau ke arah mana.',
    examples: [
      { zh: '我们要向班长学习。', pinyin: 'Wǒmen yào xiàng bānzhǎng xuéxí.', id: 'Kita harus belajar dari ketua kelas.' },
      { zh: '如果不能来上课，你要向老师请假。', pinyin: 'Rúguǒ bù néng lái shàngkè, nǐ yào xiàng lǎoshī qǐngjià.', id: 'Kalau tidak bisa hadir kuliah, kamu harus izin kepada guru.' },
    ],
    tags: ['preposisi', 'arah', 'sasaran'],
    level: 3,
  },

  {
    id: 'g3-025',
    title: 'Preposisi 由于¹ & 因为 (karena/disebabkan oleh)',
    titleZh: '介词：由于¹、因为',
    pattern: '由于/因为 + Penyebab + (所以) + Akibat',
    explanation: '由于 lebih formal dan biasanya di depan kalimat, sementara 因为 lebih umum dan bisa di posisi mana saja. Keduanya menyatakan penyebab. 由于 tidak bisa dipakai bersama 所以 dalam satu klausa.',
    examples: [
      { zh: '由于各种原因，大家没有接受他的意见。', pinyin: 'Yóuyú gè zhǒng yuányīn, dàjiā méiyǒu jiēshòu tā de yìjiàn.', id: 'Karena berbagai alasan, semua orang tidak menerima pendapatnya.' },
      { zh: '他因为这件事一直不跟我说话。', pinyin: 'Tā yīnwèi zhè jiàn shì yīzhí bù gēn wǒ shuōhuà.', id: 'Dia karena hal ini terus tidak mau bicara denganku.' },
    ],
    tags: ['preposisi', 'kausal', 'alasan'],
    level: 3,
  },

  {
    id: 'g3-026',
    title: 'Preposisi 为了 (demi/untuk tujuan)',
    titleZh: '介词：为了',
    pattern: '为了 + Tujuan + klausa',
    explanation: '为了 berarti "demi/untuk (mencapai tujuan tertentu)". Menyatakan tujuan dari suatu tindakan. Biasanya diletakkan di awal kalimat.',
    examples: [
      { zh: '妈妈为了健康坚持每天跑步。', pinyin: 'Māma wèile jiànkāng jiānchí měitiān pǎobù.', id: 'Ibu demi kesehatan rutin berlari setiap hari.' },
      { zh: '他为了新工作不断学习新知识。', pinyin: 'Tā wèile xīn gōngzuò bùduàn xuéxí xīn zhīshí.', id: 'Demi pekerjaan baru, dia terus menerus mempelajari pengetahuan baru.' },
    ],
    tags: ['preposisi', 'tujuan', 'motivasi'],
    level: 3,
  },

  {
    id: 'g3-027',
    title: 'Preposisi 把、被、叫、让 (kalimat aktif/pasif)',
    titleZh: '介词：把、被、叫、让',
    pattern: 'S + 把 + O + V + ... | S + 被/叫/让 + Agen + V + ...',
    explanation: '把 dipakai untuk memindahkan objek ke posisi sebelum predikat (kalimat 把). 被/叫/让 dipakai untuk kalimat pasif—menyatakan siapa yang melakukan sesuatu kepada subjek. 被 lebih formal, 叫/让 lebih lisan.',
    examples: [
      { zh: '我看见你把手机放在书包里了。', pinyin: 'Wǒ kànjiàn nǐ bǎ shǒujī fàng zài shūbāo lǐ le.', id: 'Saya melihat kamu menaruh HP di dalam tas.' },
      { zh: '裙子被我弄脏了。', pinyin: 'Qúnzi bèi wǒ nòng zāng le.', id: 'Rok itu dikotori olehku.' },
      { zh: '手机叫我弄坏了。', pinyin: 'Shǒujī jiào wǒ nòng huài le.', id: 'HP itu dirusakkan olehku.' },
    ],
    tags: ['preposisi', 'kalimat把', 'kalimat pasif'],
    level: 3,
  },

  {
    id: 'g3-028',
    title: 'Preposisi 除了 (kecuali/selain)',
    titleZh: '介词：除了',
    pattern: '除了 + X + 还/也/都 + ...',
    explanation: '除了 punya dua makna: (1) "kecuali X" (pengecualian, dengan 都), (2) "selain X" (tambahan, dengan 还/也). Harus diperhatikan mana yang dipakai untuk mengubah makna kalimat.',
    examples: [
      { zh: '除了英文，他还会说中文。', pinyin: 'Chúle Yīngwén, tā hái huì shuō Zhōngwén.', id: 'Selain bahasa Inggris, dia juga bisa bahasa Mandarin.' },
      { zh: '除了他，我们都是留学生。', pinyin: 'Chúle tā, wǒmen dōu shì liúxuéshēng.', id: 'Kecuali dia, kami semua adalah pelajar asing.' },
      { zh: '除了北京以外，中国的其他城市我都没去过。', pinyin: 'Chúle Běijīng yǐwài, Zhōngguó de qítā chéngshì wǒ dōu méi qùguò.', id: 'Kecuali Beijing, kota-kota lain di China belum pernah saya kunjungi.' },
    ],
    tags: ['preposisi', 'pengecualian', 'tambahan'],
    level: 3,
  },

  {
    id: 'g3-029',
    title: 'Preposisi 按、按照 (sesuai/berdasarkan)',
    titleZh: '介词：按、按照',
    pattern: '按/按照 + Standar/Dasar + V',
    explanation: '按 dan 按照 berarti "sesuai dengan/berdasarkan". 按照 lebih formal. Digunakan untuk menyatakan acuan, standar, atau aturan yang dijadikan dasar tindakan.',
    examples: [
      { zh: '房租按天或者按月计算。', pinyin: 'Fángzū àn tiān huòzhě àn yuè jìsuàn.', id: 'Sewa kamar dihitung per hari atau per bulan.' },
      { zh: '他们按照地图找到了全部东西。', pinyin: 'Tāmen ànzhào dìtú zhǎodào le quánbù dōngxi.', id: 'Mereka berdasarkan peta berhasil menemukan semua barang.' },
    ],
    tags: ['preposisi', 'standar', 'acuan'],
    level: 3,
  },

  // A.3.2.6 Konjungsi (连词)
  {
    id: 'g3-030',
    title: 'Konjungsi Penghubung Antar-Klausa: 并且、不光、不仅、另外、要是、因此、由于²、只有',
    titleZh: '连词：并且、不光、不仅、另外、要是、因此、由于²、只有',
    pattern: 'Klausa 1 + 连词 + Klausa 2',
    explanation: '并且 (dan juga/lagipula), 不光/不仅 (tidak hanya), 另外 (selain itu/di samping itu), 要是 (kalau/jika—lisan), 因此 (oleh karena itu), 由于 (karena—formal, awal kalimat), 只有 (hanya jika/kalau).',
    examples: [
      { zh: '这星期我很忙，要上课，要准备备考试，另外，还要参加一些学校活动。', pinyin: 'Zhè xīngqī wǒ hěn máng, yào shàngkè, yào zhǔnbèi kǎoshì, lìngwài, hái yào cānjiā yīxiē xuéxiào huódòng.', id: 'Minggu ini saya sangat sibuk, harus kuliah, harus persiapkan ujian, selain itu masih harus ikut beberapa kegiatan sekolah.' },
      { zh: '不光我会说中文，而且我姐姐也会说中文。', pinyin: 'Bù guāng wǒ huì shuō Zhōngwén, érqiě wǒ jiějie yě huì shuō Zhōngwén.', id: 'Tidak hanya saya yang bisa bahasa Mandarin, bahkan kakak perempuan saya pun bisa.' },
    ],
    tags: ['konjungsi', 'penghubung', 'klausa'],
    level: 3,
  },

  // A.3.2.7 Kata Seru (拟声词)
  {
    id: 'g3-031',
    title: 'Kata Tiruan Bunyi: 哈哈',
    titleZh: '拟声词：哈哈',
    pattern: '哈哈 + (地) + V / 哈哈地笑',
    explanation: '哈哈 adalah onomatope untuk suara tertawa keras/gembira. Bisa dipakai sebagai kata seru mandiri atau sebagai keterangan cara (哈哈地笑 = tertawa haha). Kata tiruan bunyi di Level 3 mulai masuk ke kalimat formal.',
    examples: [
      { zh: '我还没进门就听到同学们哈哈的声音了。', pinyin: 'Wǒ hái méi jìn mén jiù tīngdào tóngxuémen hāhā de shēngyīn le.', id: 'Saya belum masuk pintu sudah mendengar suara tawa teman-teman.' },
      { zh: '听了他的话，我们都哈哈地笑了起来。', pinyin: 'Tīng le tā de huà, wǒmen dōu hāhā de xiào le qǐlái.', id: 'Setelah mendengar ucapannya, kami semua tertawa terbahak-bahak.' },
    ],
    tags: ['onomatope', 'kata seru', 'suara'],
    level: 3,
  },

  // ════════════════════════════════════════════════════════════
  // A.3.3 FRASA (短语)
  // ════════════════════════════════════════════════════════════

  // A.3.3.1 Tipe Struktur
  {
    id: 'g3-032',
    title: 'Tipe Struktur Frasa Lain 2: Frasa Preposisi, Posisi, Pivot, Aposisi',
    titleZh: '其他结构类型2：介宾、方位、兼语、同位短语',
    pattern: 'Prep + O | N + 里/上/边 | V + O₁ + V₂ + O₂ | N₁ N₂ (aposisi)',
    explanation: '(1) Frasa preposisi: 在房间、从前边、把他、按照规定. (2) Frasa posisi: 教室里、桌子上边、学校的东边. (3) Frasa pivot (兼语短语): 请他进来、叫他上车—objek kalimat pertama menjadi subjek kalimat kedua. (4) Frasa aposisi (同位短语): 我的朋友小张、他妈妈李老师.',
    examples: [
      { zh: '请他进来。', pinyin: 'Qǐng tā jìnlái.', id: 'Silakan minta dia masuk.' },
      { zh: '通知他开会。', pinyin: 'Tōngzhī tā kāihuì.', id: 'Memberitahu dia untuk rapat.' },
      { zh: '我的朋友小张来了。', pinyin: 'Wǒ de péngyǒu Xiǎo Zhāng lái le.', id: 'Teman saya, Xiao Zhang, sudah datang.' },
    ],
    tags: ['frasa', 'struktur', 'pivot'],
    level: 3,
  },

  {
    id: 'g3-033',
    title: 'Reduplikasi Bilangan: 数词 + 量词 + 数词 + 量词',
    titleZh: '数量重叠：数词+量词+数词+量词',
    pattern: '一+量词+一+量词 / 两个两个 / 一天一天',
    explanation: 'Dengan mengulang pola bilangan+kata ukur, bermakna "satu per satu/sedikit demi sedikit/hari demi hari". Menunjukkan distribusi, keteraturan, atau perubahan bertahap.',
    examples: [
      { zh: '图书馆里放着一排一排的书架。', pinyin: 'Túshūguǎn lǐ fàngzhe yī pái yī pái de shūjià.', id: 'Di perpustakaan berjajar rak-rak buku satu baris demi satu baris.' },
      { zh: '老师让学生两个两个地进教室。', pinyin: 'Lǎoshī ràng xuéshēng liǎng gè liǎng gè de jìn jiàoshì.', id: 'Guru menyuruh siswa masuk kelas dua-dua.' },
      { zh: '日子一天一天过去了。', pinyin: 'Rìzi yī tiān yī tiān guòqù le.', id: 'Hari-hari berlalu satu demi satu.' },
    ],
    tags: ['reduplikasi', 'bilangan', 'distribusi'],
    level: 3,
  },

  // A.3.3.2 Frasa Tetap
  {
    id: 'g3-034',
    title: 'Pola Empat Karakter: 不A不B',
    titleZh: '四字格：不A不B',
    pattern: '不A不B',
    explanation: 'Pola empat karakter 不A不B menyatakan kondisi yang tidak ada di sini maupun di sana, atau kondisi netral. Contoh umum: 不大不小 (tidak besar tidak kecil), 不长不短 (tidak panjang tidak pendek), 不冷不热 (tidak dingin tidak panas), 不多不少 (tidak banyak tidak sedikit), 不早不晚 (tidak pagi tidak malam).',
    examples: [
      { zh: '这件衣服不大不小，正合适。', pinyin: 'Zhè jiàn yīfu bù dà bù xiǎo, zhèng héshì.', id: 'Baju ini tidak terlalu besar tidak terlalu kecil, pas sekali.' },
      { zh: '今天天气不冷不热，很舒服。', pinyin: 'Jīntiān tiānqì bù lěng bù rè, hěn shūfu.', id: 'Cuaca hari ini tidak dingin tidak panas, sangat nyaman.' },
    ],
    tags: ['idiom', 'empat karakter', 'frasa tetap'],
    level: 3,
  },

  // A.3.3.2.2 Lainnya
  {
    id: 'g3-035',
    title: 'Frasa Tetap: 看起来 (kelihatannya)',
    titleZh: '固定短语：看起来',
    pattern: 'Konteks + 看起来 + Adj/klausa',
    explanation: '看起来 berarti "kelihatannya/sepertinya/tampaknya". Digunakan untuk menyatakan kesan atau penilaian berdasarkan penampilan luar.',
    examples: [
      { zh: '这些苹果看起来很好吃。', pinyin: 'Zhèxiē píngguǒ kànqǐlái hěn hǎochī.', id: 'Apel-apel ini kelihatannya sangat lezat.' },
      { zh: '她工作了一天，看起来有点儿累。', pinyin: 'Tā gōngzuò le yī tiān, kànqǐlái yǒudiǎnr lèi.', id: 'Dia bekerja seharian, kelihatannya agak lelah.' },
    ],
    tags: ['frasa tetap', 'penampilan', 'kesan'],
    level: 3,
  },

  {
    id: 'g3-036',
    title: 'Frasa Tetap: 看上去 (tampak dari luar)',
    titleZh: '固定短语：看上去',
    pattern: 'Konteks + 看上去 + Adj/klausa',
    explanation: '看上去 mirip dengan 看起来, bermakna "tampak dari penampilan/dari luar". Keduanya sering bisa dipertukarkan, namun 看上去 lebih menekankan penilaian dari tampilan fisik.',
    examples: [
      { zh: '这件衣服看上去很不错。', pinyin: 'Zhè jiàn yīfu kànshàngqù hěn búcuò.', id: 'Baju ini tampaknya bagus sekali.' },
      { zh: '那沙发看上去非常结实。', pinyin: 'Nà shāfā kànshàngqù fēicháng jiēshi.', id: 'Sofa itu tampaknya sangat kuat.' },
    ],
    tags: ['frasa tetap', 'penampilan', 'penilaian'],
    level: 3,
  },

  {
    id: 'g3-037',
    title: 'Frasa Tetap: 有的是 (ada banyak/berlimpah)',
    titleZh: '固定短语：有的是',
    pattern: 'Subyek + 有的是 + N',
    explanation: '有的是 berarti "ada banyak/berlimpah ruah". Dipakai untuk menunjukkan ketersediaan yang melimpah dari sesuatu.',
    examples: [
      { zh: '咱们图书馆有的是书，你可以多看看。', pinyin: 'Zánmen túshūguǎn yǒu de shì shū, nǐ kěyǐ duō kànkàn.', id: 'Perpustakaan kita berlimpah buku, kamu bisa banyak-banyak membaca.' },
      { zh: '这儿水果有的是，你多拿一点儿。', pinyin: 'Zhèr shuǐguǒ yǒu de shì, nǐ duō ná yīdiǎnr.', id: 'Di sini buah berlimpah, ambillah lebih banyak.' },
    ],
    tags: ['frasa tetap', 'kuantitas', 'berlimpah'],
    level: 3,
  },

  // ════════════════════════════════════════════════════════════
  // A.3.4 POLA TETAP (固定格式)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g3-038',
    title: 'Pola: 除了……（以外），……还/也/都……',
    titleZh: '固定格式：除了……（以外），……还/也/都……',
    pattern: '除了 + X + (以外), + S + 还/也 + VP',
    explanation: 'Pola ini menyatakan "selain X, juga..." Menunjukkan penambahan, bukan pengecualian. Harus dibedakan dengan 除了...都 yang berarti pengecualian.',
    examples: [
      { zh: '除了上课，我还要参加各种活动。', pinyin: 'Chúle shàngkè, wǒ hái yào cānjiā gè zhǒng huódòng.', id: 'Selain kuliah, saya juga harus ikut berbagai kegiatan.' },
      { zh: '除了我，我姐姐和弟弟也会说中文。', pinyin: 'Chúle wǒ, wǒ jiějie hé dìdi yě huì shuō Zhōngwén.', id: 'Selain saya, kakak perempuan dan adik laki-laki saya juga bisa bahasa Mandarin.' },
    ],
    tags: ['pola tetap', 'penambahan', 'pengecualian'],
    level: 3,
  },

  {
    id: 'g3-039',
    title: 'Pola: 从……起 (mulai dari...)',
    titleZh: '固定格式：从……起',
    pattern: '从 + Titik Waktu/Tempat + 起 + VP',
    explanation: '从……起 berarti "mulai dari (titik waktu/tempat tertentu)". Menekankan permulaan suatu situasi atau kebiasaan baru.',
    examples: [
      { zh: '从现在起，你要努力学习了。', pinyin: 'Cóng xiànzài qǐ, nǐ yào nǔlì xuéxí le.', id: 'Mulai sekarang, kamu harus belajar dengan sungguh-sungguh.' },
      { zh: '从今天起，我就用这台新电脑了。', pinyin: 'Cóng jīntiān qǐ, wǒ jiù yòng zhè tái xīn diànnǎo le.', id: 'Mulai hari ini, saya akan menggunakan komputer baru ini.' },
    ],
    tags: ['pola tetap', 'titik awal', 'waktu'],
    level: 3,
  },

  {
    id: 'g3-040',
    title: 'Pola: 对……来说 (bagi.../menurut...)',
    titleZh: '固定格式：对……来说',
    pattern: '对 + Orang/Kelompok + 来说 + klausa',
    explanation: '对……来说 berarti "bagi .../dari sudut pandang ...". Digunakan untuk menyatakan perspektif atau pandangan seseorang terhadap sesuatu.',
    examples: [
      { zh: '对日本留学生来说，汉字不太难。', pinyin: 'Duì Rìběn liúxuéshēng lái shuō, Hànzì bú tài nán.', id: 'Bagi pelajar asing dari Jepang, karakter Tionghoa tidak terlalu sulit.' },
      { zh: '对专家来说，这个问题很容易解决。', pinyin: 'Duì zhuānjiā lái shuō, zhège wèntí hěn róngyì jiějué.', id: 'Bagi para ahli, masalah ini sangat mudah diselesaikan.' },
    ],
    tags: ['pola tetap', 'perspektif', 'sudut pandang'],
    level: 3,
  },

  {
    id: 'g3-041',
    title: 'Pola: 一……也/都+不/没…… (satu pun tidak)',
    titleZh: '固定格式：一……也/都+不/没……',
    pattern: '一 + 量词/N + 也/都 + 不/没 + V',
    explanation: 'Pola ini menyatakan negasi total: "satu pun tidak ada/tidak". Menekankan penolakan atau ketidakadaan secara mutlak.',
    examples: [
      { zh: '他一句中文也不会说。', pinyin: 'Tā yī jù Zhōngwén yě bù huì shuō.', id: 'Dia satu kalimat pun bahasa Mandarin tidak bisa.' },
      { zh: '我上午一口水也没喝，现在渴极了。', pinyin: 'Wǒ shàngwǔ yī kǒu shuǐ yě méi hē, xiànzài kě jí le.', id: 'Saya pagi ini satu teguk pun tidak minum air, sekarang haus sekali.' },
      { zh: '这个公园我一次都没去过。', pinyin: 'Zhège gōngyuán wǒ yī cì dōu méi qùguò.', id: 'Taman ini satu kali pun belum pernah saya kunjungi.' },
    ],
    tags: ['pola tetap', 'negasi total', 'penekanan'],
    level: 3,
  },

  {
    id: 'g3-042',
    title: 'Pola: 越……越…… (semakin...semakin...)',
    titleZh: '固定格式：越……越……',
    pattern: '越 + Adj/V + 越 + Adj/V',
    explanation: 'Pola 越……越…… menyatakan hubungan proporsional: "semakin A, semakin B". Kedua bagian bisa berupa kata sifat atau kata kerja.',
    examples: [
      { zh: '中文越学越有意思。', pinyin: 'Zhōngwén yuè xué yuè yǒu yìsi.', id: 'Bahasa Mandarin semakin dipelajari semakin menarik.' },
      { zh: '衣服的牌子越有名，价钱越贵。', pinyin: 'Yīfu de páizi yuè yǒumíng, jiàqián yuè guì.', id: 'Merek pakaian semakin terkenal, harganya semakin mahal.' },
    ],
    tags: ['pola tetap', 'proporsional', 'perbandingan'],
    level: 3,
  },

  // ════════════════════════════════════════════════════════════
  // A.3.5 KOMPONEN KALIMAT (句子成分)
  // ════════════════════════════════════════════════════════════

  // A.3.5.1 Subjek
  {
    id: 'g3-043',
    title: 'Kata Kerja/Frasa Verbal & Kata Sifat sebagai Subjek',
    titleZh: '动词或动词性短语、形容词或形容词性短语作主语',
    pattern: 'V/VP/Adj + 作主语 + VP',
    explanation: 'Dalam bahasa Mandarin, kata kerja, frasa verbal, dan kata sifat bisa berfungsi sebagai subjek kalimat. Ini berbeda dari bahasa Indonesia yang biasanya memerlukan nominalisasi.',
    examples: [
      { zh: '哭对身体有好处。', pinyin: 'Kū duì shēntǐ yǒu hǎochu.', id: 'Menangis baik untuk kesehatan.' },
      { zh: '早一点儿来比较合适。', pinyin: 'Zǎo yīdiǎnr lái bǐjiào héshì.', id: 'Datang lebih awal lebih tepat.' },
      { zh: '太冷了不好，太热了也不好。', pinyin: 'Tài lěng le bù hǎo, tài rè le yě bù hǎo.', id: 'Terlalu dingin tidak baik, terlalu panas pun tidak baik.' },
    ],
    tags: ['subjek', 'nominalisasi', 'struktur kalimat'],
    level: 3,
  },

  // A.3.5.2 Objek
  {
    id: 'g3-044',
    title: 'V/VP/Adj/Frasa Subjek-Predikat sebagai Objek',
    titleZh: '动词或动词性短语、形容词或形容词性短语和主谓短语作宾语',
    pattern: 'V + 宾语 (berupa V/Adj/klausa S-P)',
    explanation: 'Kata kerja, kata sifat, atau bahkan klausa subjek-predikat utuh bisa menjadi objek suatu kata kerja. Ini mencerminkan fleksibilitas struktural bahasa Mandarin.',
    examples: [
      { zh: '我打算去上海。', pinyin: 'Wǒ dǎsuàn qù Shànghǎi.', id: 'Saya berencana pergi ke Shanghai.' },
      { zh: '她喜欢安静。', pinyin: 'Tā xǐhuān ānjìng.', id: 'Dia suka ketenangan.' },
      { zh: '老师希望大家都能取得好成绩。', pinyin: 'Lǎoshī xīwàng dàjiā dōu néng qǔdé hǎo chéngjì.', id: 'Guru berharap semua orang bisa mendapat prestasi bagus.' },
    ],
    tags: ['objek', 'klausa objek', 'struktur kalimat'],
    level: 3,
  },

  // A.3.5.3 Atribut
  {
    id: 'g3-045',
    title: 'V/VP/Klausa S-P sebagai Atribut (定语)',
    titleZh: '动词或动词性短语、主谓短语作定语',
    pattern: 'V/VP/S-P + 的 + N',
    explanation: 'Kata kerja, frasa verbal, atau klausa subjek-predikat bisa menjadi atribut (penjelas nomina) dengan bantuan 的. Ini membentuk klausa relatif dalam bahasa Mandarin.',
    examples: [
      { zh: '你看见那个跳舞的女孩儿了吗？', pinyin: 'Nǐ kànjiàn nàge tiàowǔ de nǚháir le ma?', id: 'Kamu melihat gadis yang menari itu?' },
      { zh: '观看演出的观众请从右边的门进去。', pinyin: 'Guānkàn yǎnchū de guānzhòng qǐng cóng yòubiān de mén jìnqù.', id: 'Penonton yang menonton pertunjukan, silakan masuk dari pintu sebelah kanan.' },
      { zh: '小白讲的故事很有意思。', pinyin: 'Xiǎo Bái jiǎng de gùshi hěn yǒu yìsi.', id: 'Cerita yang diceritakan Xiao Bai sangat menarik.' },
    ],
    tags: ['atribut', 'klausa relatif', '的'],
    level: 3,
  },

  // A.3.5.4 Komplemen
  {
    id: 'g3-046',
    title: 'Komplemen Hasil 2: V + 到/住/走',
    titleZh: '结果补语2：动词+到/住/走',
    pattern: 'V + 到 / V + 住 / V + 走',
    explanation: '到 sebagai komplemen hasil berarti mencapai tujuan atau titik akhir. 住 berarti "tertahan/berhasil pegang". 走 berarti "pergi/terbawa pergi". Komplemen ini tidak bisa dipisah dari kata kerjanya.',
    examples: [
      { zh: '他终于买到火车票了。', pinyin: 'Tā zhōngyú mǎidào huǒchē piào le.', id: 'Dia akhirnya berhasil membeli tiket kereta.' },
      { zh: '我把球传给他，可是他没接住。', pinyin: 'Wǒ bǎ qiú chuán gěi tā, kěshì tā méi jiēzhù.', id: 'Saya mengoper bola kepadanya, tapi dia tidak bisa menangkap.' },
      { zh: '那本书他取走了吗？', pinyin: 'Nà běn shū tā qǔzǒu le ma?', id: 'Buku itu sudah diambilnya pergi?' },
    ],
    tags: ['komplemen', 'hasil', 'kata kerja'],
    level: 3,
  },

  {
    id: 'g3-047',
    title: 'Komplemen Arah 2: Makna Lanjutan Komplemen Arah Majemuk',
    titleZh: '趋向补语2：复合趋向补语的趋向意义用法',
    pattern: 'V + 出来/出去/过来/过去/回来/回去/进来/进去/起来/上来/上去/下来/下去',
    explanation: 'Komplemen arah majemuk tidak hanya bermakna arah fisik, tapi juga arah abstrak: ke luar, ke dalam, melewati, kembali, naik, turun. Objek bisa disisipkan di antara V dan komplemen.',
    examples: [
      { zh: '他从书包里拿出一本书来。', pinyin: 'Tā cóng shūbāo lǐ ná chū yī běn shū lái.', id: 'Dia mengeluarkan sebuah buku dari tas.' },
      { zh: '外边的桌子你搬进来了没有？', pinyin: 'Wàibiān de zhuōzi nǐ bān jìnlái le méiyǒu?', id: 'Meja di luar sudah kamu angkut masuk belum?' },
      { zh: '你站起来。', pinyin: 'Nǐ zhàn qǐlái.', id: 'Kamu berdiri.' },
    ],
    tags: ['komplemen', 'arah', 'majemuk'],
    level: 3,
  },

  {
    id: 'g3-048',
    title: 'Komplemen Potensial 1: V + 得/不 + V/Adj (bisa/tidak bisa)',
    titleZh: '可能补语1：动词+得/不+动词/形容词',
    pattern: 'V + 得 + Komplemen (bisa) | V + 不 + Komplemen (tidak bisa)',
    explanation: 'Komplemen potensial menyatakan kemampuan untuk mencapai hasil. Bentuk positif: V得Komplemen (bisa). Bentuk negatif: V不Komplemen (tidak bisa). Pertanyaan: V得/不Komplemen吗？',
    examples: [
      { zh: '老师的话我都听得懂。', pinyin: 'Lǎoshī de huà wǒ dōu tīngdedǒng.', id: 'Ucapan guru semuanya bisa saya pahami.' },
      { zh: '这件衣服太脏了，洗不干净。', pinyin: 'Zhè jiàn yīfu tài zāng le, xǐ bu gānjìng.', id: 'Baju ini terlalu kotor, tidak bisa dicuci bersih.' },
      { zh: '明天的比赛你参加得了吗？', pinyin: 'Míngtiān de bǐsài nǐ cānjiādéliǎo ma?', id: 'Pertandingan besok kamu bisa ikut tidak?' },
    ],
    tags: ['komplemen', 'potensial', 'kemampuan'],
    level: 3,
  },

  {
    id: 'g3-049',
    title: 'Komplemen Derajat 1: Adj/V Psikologis + 得很/极了/死了',
    titleZh: '程度补语1：形容词/心理动词+得很/极了/死了',
    pattern: 'Adj/V psikologis + 得很 / + 极了 / + 死了',
    explanation: 'Komplemen derajat yang sangat kuat: 得很 (sangat sekali, lisan), 极了 (luar biasa/paling), 死了 (sampai mati—hiperbola santai). Menyatakan derajat yang sangat tinggi.',
    examples: [
      { zh: '我累得很。', pinyin: 'Wǒ lèi de hěn.', id: 'Saya sangat sekali lelah.' },
      { zh: '外面冷极了。', pinyin: 'Wàimiàn lěng jí le.', id: 'Di luar dingin sekali.' },
      { zh: '他们今天忙死了。', pinyin: 'Tāmen jīntiān máng sǐ le.', id: 'Mereka hari ini sibuk luar biasa.' },
    ],
    tags: ['komplemen', 'derajat', 'hiperbola'],
    level: 3,
  },

  {
    id: 'g3-050',
    title: 'Komplemen Kuantitas 3: V + Komplemen Kuantitas (O dan komplemen hadir bersamaan)',
    titleZh: '数量补语3：动词+动量补语（宾语和动量补语共现）',
    pattern: 'V + O + V + 数量补语 | V + 数量补语 + O',
    explanation: 'Ketika ada objek dan komplemen kuantitas bersamaan, ada dua pola: (1) V + O + V + 数量补语 (kata kerja diulang), atau (2) V + 数量补语 + O (komplemen sebelum objek).',
    examples: [
      { zh: '我找了他两次。', pinyin: 'Wǒ zhǎo le tā liǎng cì.', id: 'Saya mencarinya dua kali.' },
      { zh: '我来过中国一次。', pinyin: 'Wǒ lái guò Zhōngguó yī cì.', id: 'Saya pernah ke China satu kali.' },
      { zh: '他读了三遍课文。', pinyin: 'Tā dú le sān biàn kèwén.', id: 'Dia membaca teks pelajaran tiga kali.' },
    ],
    tags: ['komplemen', 'kuantitas', 'frekuensi'],
    level: 3,
  },

  {
    id: 'g3-051',
    title: 'Komplemen Kuantitas 4: V + Komplemen Waktu (durasi tindakan)',
    titleZh: '数量补语4：动词+时量补语（表示动作持续的时间）',
    pattern: 'V + 了 + 时量 | V + 了 + 时量 + 的 + O',
    explanation: 'Komplemen waktu menyatakan berapa lama suatu tindakan berlangsung. Bila ada objek, bisa: (1) V+O+V+时量, atau (2) V+了+时量+的+O (dengan 的 memisahkan).',
    examples: [
      { zh: '我学中文学了两年。', pinyin: 'Wǒ xué Zhōngwén xué le liǎng nián.', id: 'Saya belajar bahasa Mandarin sudah dua tahun.' },
      { zh: '我等了他半个多小时。', pinyin: 'Wǒ děng le tā bàn gè duō xiǎoshí.', id: 'Saya menunggunya lebih dari setengah jam.' },
      { zh: '他游泳游了四十分钟。', pinyin: 'Tā yóuyǒng yóu le sìshí fēnzhōng.', id: 'Dia berenang selama empat puluh menit.' },
    ],
    tags: ['komplemen', 'waktu', 'durasi'],
    level: 3,
  },

  {
    id: 'g3-052',
    title: 'Komplemen Kuantitas 5: V + Komplemen Waktu (interval sejak selesai)',
    titleZh: '数量补语5：动词+时量补语（表示动作结束后到某个时间点的间隔时间）',
    pattern: 'V + 了 + 时量 + 了',
    explanation: 'Pola ini menyatakan berapa lama waktu yang telah berlalu sejak suatu tindakan selesai. Berbeda dengan komplemen durasi (三51), ini menekankan jarak waktu dari titik selesai hingga sekarang.',
    examples: [
      { zh: '他们来中国两个月了。', pinyin: 'Tāmen lái Zhōngguó liǎng gè yuè le.', id: 'Mereka sudah datang ke China dua bulan lalu.' },
      { zh: '哥哥去北京一个星期了。', pinyin: 'Gēge qù Běijīng yī gè xīngqī le.', id: 'Kakak laki-laki sudah pergi ke Beijing selama satu minggu.' },
      { zh: '我父母结婚二十年了。', pinyin: 'Wǒ fùmǔ jiéhūn èrshí nián le.', id: 'Orang tua saya sudah menikah dua puluh tahun.' },
    ],
    tags: ['komplemen', 'waktu', 'interval'],
    level: 3,
  },

  // ════════════════════════════════════════════════════════════
  // A.3.6 JENIS KALIMAT (句子的类型)
  // ════════════════════════════════════════════════════════════

  // A.3.6.1 Tipe Kalimat (句型)
  {
    id: 'g3-053',
    title: 'Kalimat Subjek-Predikat 4: Kalimat Predikat S-P',
    titleZh: '主谓句4：主谓谓语句',
    pattern: 'Topik + [S + P]',
    explanation: 'Kalimat predikat S-P (主谓谓语句) adalah kalimat yang predikatnya sendiri berupa klausa subjek-predikat. Topik kalimat (大主语) biasanya memperkenalkan referensi, lalu klausa S-P mendeskripsikannya.',
    examples: [
      { zh: '奶奶身体非常好。', pinyin: 'Nǎinai shēntǐ fēicháng hǎo.', id: 'Nenek tubuhnya sangat sehat.' },
      { zh: '这件衣服颜色很好看。', pinyin: 'Zhè jiàn yīfu yánsè hěn hǎokàn.', id: 'Baju ini warnanya sangat bagus.' },
      { zh: '那本书我没看过。', pinyin: 'Nà běn shū wǒ méi kànguò.', id: 'Buku itu saya belum pernah baca.' },
    ],
    tags: ['kalimat', 'subjek-predikat', 'topik'],
    level: 3,
  },

  // A.3.6.2 Tipe Kalimat Khusus
  {
    id: 'g3-054',
    title: 'Kalimat 把 1: Menyatakan Penempatan/Pemindahan Objek',
    titleZh: '"把"字句1：表处置',
    pattern: 'S + 把 + O + V + 在/到/给 + Lokasi/Penerima | S + 把 + O + V + 结果/趋向/状态补语',
    explanation: 'Kalimat 把 memindahkan objek ke posisi sebelum predikat untuk menekankan "apa yang dilakukan terhadap objek". Ada tiga sub-pola utama: (1) V+在/到+lokasi, (2) V+给+penerima, (3) V+komplemen hasil/arah/keadaan.',
    examples: [
      { zh: '老师把书放在桌子上了。', pinyin: 'Lǎoshī bǎ shū fàng zài zhuōzi shàng le.', id: 'Guru menaruh buku di atas meja.' },
      { zh: '爸爸把新买的手机送给妹妹了。', pinyin: 'Bàba bǎ xīn mǎi de shǒujī sòng gěi mèimei le.', id: 'Ayah memberikan HP yang baru dibeli kepada adik perempuan.' },
      { zh: '孩子们把手洗得干干净净的。', pinyin: 'Háizimen bǎ shǒu xǐ de gāngānjìngjìng de.', id: 'Anak-anak mencuci tangan sampai bersih sekali.' },
    ],
    tags: ['kalimat把', 'disposal', 'objek'],
    level: 3,
  },

  {
    id: 'g3-055',
    title: 'Kalimat Pasif 1: S + 被/叫/让 + Agen + V + Komplemen',
    titleZh: '被动句1：主语+被/叫/让+宾语+动词+其他成分',
    pattern: 'S (penderita) + 被/叫/让 + Agen + V + ...',
    explanation: 'Kalimat pasif menyatakan bahwa subjek adalah penderita tindakan. 被 lebih formal/tulisan, 叫/让 lebih lisan. Setelah V harus ada komplemen atau keterangan lain.',
    examples: [
      { zh: '那个手机早被我用坏了。', pinyin: 'Nàge shǒujī zǎo bèi wǒ yòng huài le.', id: 'HP itu sudah lama dirusakkan olehku karena pemakaian.' },
      { zh: '我的词典叫弟弟弄脏了。', pinyin: 'Wǒ de cídiǎn jiào dìdi nòng zāng le.', id: 'Kamus saya dikotori oleh adik laki-laki.' },
      { zh: '他完全让这位姑娘迷住了。', pinyin: 'Tā wánquán ràng zhè wèi gūniáng mí zhù le.', id: 'Dia sepenuhnya terpesona oleh gadis ini.' },
    ],
    tags: ['kalimat pasif', '被', 'penderita'],
    level: 3,
  },

  {
    id: 'g3-056',
    title: 'Kalimat Seri 2: Dua Tindakan Berurutan',
    titleZh: '连动句2',
    pattern: '(1) V₁ + (方式) + V₂ | (2) V₁ + (Tujuan) + V₂',
    explanation: '(1) Tindakan pertama adalah cara/metode tindakan kedua: 他笑着说 (dia berkata sambil tersenyum). (2) Tindakan pertama dilakukan untuk tujuan tindakan kedua: 他去超市买水果 (dia pergi ke supermarket untuk beli buah).',
    examples: [
      { zh: '他笑着说："没事儿。"', pinyin: 'Tā xiào zhe shuō: "Méi shìr."', id: 'Dia sambil tersenyum berkata: "Tidak apa-apa."' },
      { zh: '我明天坐飞机去北京。', pinyin: 'Wǒ míngtiān zuò fēijī qù Běijīng.', id: 'Besok saya naik pesawat pergi ke Beijing.' },
      { zh: '他去超市买水果。', pinyin: 'Tā qù chāoshì mǎi shuǐguǒ.', id: 'Dia pergi ke supermarket membeli buah.' },
    ],
    tags: ['kalimat seri', 'cara', 'tujuan'],
    level: 3,
  },

  {
    id: 'g3-057',
    title: 'Kalimat Pivot 1: S + V₁ + O₁ (=S₂) + V₂ + O₂',
    titleZh: '兼语句1：表使令',
    pattern: 'S + 叫/派/请/让 + O₁ + V₂ + O₂',
    explanation: 'Kalimat pivot (兼语句) adalah kalimat di mana O₁ dari V₁ sekaligus menjadi S₂ dari V₂. Kata kerja pivot yang umum: 叫 (suruh), 派 (mengutus), 请 (memohon), 让 (memperbolehkan/menyuruh).',
    examples: [
      { zh: '经理叫他介绍一下儿中国市场情况。', pinyin: 'Jīnglǐ jiào tā jièshào yīxiàr Zhōngguó shìchǎng qíngkuàng.', id: 'Manajer menyuruhnya memperkenalkan situasi pasar China.' },
      { zh: '公司派我来中国学习中文。', pinyin: 'Gōngsī pài wǒ lái Zhōngguó xuéxí Zhōngwén.', id: 'Perusahaan mengutus saya datang ke China belajar bahasa Mandarin.' },
      { zh: '妈妈让我早点儿回国。', pinyin: 'Māma ràng wǒ zǎodiǎnr huíguó.', id: 'Ibu menyuruh saya pulang ke negara lebih awal.' },
    ],
    tags: ['kalimat pivot', 'perintah', 'kausal'],
    level: 3,
  },

  {
    id: 'g3-058',
    title: 'Kalimat Perbandingan 4: Berbagai Pola 比',
    titleZh: '比较句4',
    pattern: '(1) A比B + V + 得 + Adj | (2) A不比B + Adj | (3) A + V + 得 + 比B + Adj | (4) A比B + 多/少/早/晚 + V + 数量短语',
    explanation: 'Level 3 memperkenalkan pola 比 yang lebih kompleks: (1) V+得+Adj untuk perbandingan tindakan, (2) 不比 untuk menyatakan tidak lebih dari, (3) komplemen cara perbandingan, (4) selisih kuantitas.',
    examples: [
      { zh: '我比他跑得快。', pinyin: 'Wǒ bǐ tā pǎo de kuài.', id: 'Saya berlari lebih cepat dari dia.' },
      { zh: '我姐姐不比我高。', pinyin: 'Wǒ jiějie bù bǐ wǒ gāo.', id: 'Kakak perempuan saya tidak lebih tinggi dari saya.' },
      { zh: '他比我多吃了五个饺子。', pinyin: 'Tā bǐ wǒ duō chī le wǔ gè jiǎozi.', id: 'Dia makan lima pangsit lebih banyak dari saya.' },
    ],
    tags: ['kalimat perbandingan', '比', 'selisih'],
    level: 3,
  },

  {
    id: 'g3-059',
    title: 'Kata Kerja Reduplikat: S + V + O + V + 补语',
    titleZh: '重动词：主语+动词+宾语+动词+补语',
    pattern: 'S + V + O + V + 得 + Adj',
    explanation: 'Ketika kata kerja memiliki objek dan komplemen cara sekaligus, kata kerja harus diulang. Ini disebut pola 重动句. Objek diletakkan setelah V₁, komplemen 得+Adj setelah V₂.',
    examples: [
      { zh: '他打篮球打得很好。', pinyin: 'Tā dǎ lánqiú dǎ de hěn hǎo.', id: 'Dia bermain basket dengan sangat baik.' },
      { zh: '她游泳游得很快。', pinyin: 'Tā yóuyǒng yóu de hěn kuài.', id: 'Dia berenang dengan sangat cepat.' },
      { zh: '我看电视看了两个小时。', pinyin: 'Wǒ kàn diànshì kàn le liǎng gè xiǎoshí.', id: 'Saya menonton TV selama dua jam.' },
    ],
    tags: ['kata kerja reduplikat', 'komplemen cara', 'objek'],
    level: 3,
  },

  // A.3.6.3 Kalimat Majemuk (复句)
  {
    id: 'g3-060',
    title: 'Kalimat Majemuk Setara: (也)……，也……',
    titleZh: '并列复句：（也）……，也……',
    pattern: '（也）Klausa 1，也 + Klausa 2',
    explanation: 'Pola ini menggabungkan dua klausa setara dengan makna "...juga..., ...juga...". Menunjukkan dua situasi atau tindakan yang sama-sama berlaku.',
    examples: [
      { zh: '篮球他喜欢，排球他也喜欢。', pinyin: 'Lánqiú tā xǐhuān, páiqiú tā yě xǐhuān.', id: 'Basket dia suka, voli dia juga suka.' },
      { zh: '面条儿我也爱吃，米饭我也爱吃。', pinyin: 'Miàntiáor wǒ yě ài chī, mǐfàn wǒ yě ài chī.', id: 'Mie saya juga suka, nasi putih saya juga suka.' },
    ],
    tags: ['kalimat majemuk', 'setara', 'juga'],
    level: 3,
  },

  {
    id: 'g3-061',
    title: 'Kalimat Majemuk Setara: 一会儿……，一会儿……',
    titleZh: '并列复句：一会儿……，一会儿……',
    pattern: '一会儿 + Situasi 1，一会儿 + Situasi 2',
    explanation: '一会儿……，一会儿…… berarti "sebentar begini, sebentar begitu". Menyatakan situasi atau kondisi yang bergantian/berubah-ubah.',
    examples: [
      { zh: '最近天气有点儿奇怪，一会儿冷，一会儿热。', pinyin: 'Zuìjìn tiānqì yǒudiǎnr qíguài, yīhuìr lěng, yīhuìr rè.', id: 'Belakangan ini cuaca agak aneh, sebentar dingin, sebentar panas.' },
      { zh: '他们在晚会上一会儿唱歌，一会儿跳舞，玩儿得很开心。', pinyin: 'Tāmen zài wǎnhuì shàng yīhuìr chànggē, yīhuìr tiàowǔ, wánr de hěn kāixīn.', id: 'Mereka di pesta malam sebentar bernyanyi, sebentar menari, bermain dengan sangat gembira.' },
    ],
    tags: ['kalimat majemuk', 'bergantian', 'paralel'],
    level: 3,
  },

  {
    id: 'g3-062',
    title: 'Kalimat Majemuk Setara: 一方面……，另一方面……',
    titleZh: '并列复句：一方面……，另一方面……',
    pattern: '一方面 + Aspek 1，另一方面 + Aspek 2',
    explanation: '一方面……，另一方面…… berarti "di satu sisi..., di sisi lain...". Digunakan untuk mengemukakan dua aspek dari suatu masalah atau situasi.',
    examples: [
      { zh: '我们一方面要看到他们的优点，另一方面也要指出他们的缺点。', pinyin: 'Wǒmen yīfāngmiàn yào kàndào tāmen de yōudiǎn, lìng yīfāngmiàn yě yào zhǐchū tāmen de quēdiǎn.', id: 'Di satu sisi kita harus melihat kelebihan mereka, di sisi lain juga harus menunjukkan kekurangan mereka.' },
      { zh: '在实习中一方面可以增加工作经验，另一方面可以学习新的知识。', pinyin: 'Zài shíxí zhōng yīfāngmiàn kěyǐ zēngjiā gōngzuò jīngyàn, lìng yīfāngmiàn kěyǐ xuéxí xīn de zhīshi.', id: 'Dalam magang di satu sisi bisa menambah pengalaman kerja, di sisi lain bisa mempelajari pengetahuan baru.' },
    ],
    tags: ['kalimat majemuk', 'dua sisi', 'kontras'],
    level: 3,
  },

  {
    id: 'g3-063',
    title: 'Kalimat Majemuk Setara: 又……，又……',
    titleZh: '并列复句：又……，又……',
    pattern: '又 + Adj/V₁，又 + Adj/V₂',
    explanation: '又……，又…… berarti "sekaligus.../baik...maupun...". Menunjukkan dua sifat atau tindakan yang terjadi bersamaan. Berbeda dengan 一会儿...一会儿 yang bergantian, pola ini bersifat simultan.',
    examples: [
      { zh: '晚会上大家又唱歌，又跳舞，高兴极了。', pinyin: 'Wǎnhuì shàng dàjiā yòu chànggē, yòu tiàowǔ, gāoxìng jí le.', id: 'Di pesta malam semua orang baik bernyanyi maupun menari, sangat gembira.' },
      { zh: '这件衣服又好看，价格又便宜。', pinyin: 'Zhè jiàn yīfu yòu hǎokàn, jiàgé yòu piányí.', id: 'Baju ini bagus sekaligus harganya murah.' },
    ],
    tags: ['kalimat majemuk', 'simultan', 'sekaligus'],
    level: 3,
  },

  {
    id: 'g3-064',
    title: 'Kalimat Majemuk Beruntun: 首先……，然后……',
    titleZh: '承接复句：首先……，然后……',
    pattern: '首先 + Tindakan 1，然后 + Tindakan 2',
    explanation: '首先……，然后…… berarti "pertama-tama..., kemudian...". Menyatakan urutan tindakan secara kronologis. 首先 selalu di depan.',
    examples: [
      { zh: '同学们首先读了一遍课文，然后认真地回答了黑板上的问题。', pinyin: 'Tóngxuémen shǒuxiān dú le yī biàn kèwén, rán hòu rènzhēn de huídá le hēibǎn shàng de wèntí.', id: 'Teman-teman sekelas pertama-tama membaca teks sekali, kemudian dengan serius menjawab pertanyaan di papan tulis.' },
      { zh: '我们首先要找到科学的练习方法，然后坚持每天练习。', pinyin: 'Wǒmen shǒuxiān yào zhǎodào kēxué de liànxí fāngfǎ, rán hòu jiānchí měitiān liànxí.', id: 'Kita pertama-tama harus menemukan metode latihan yang ilmiah, kemudian tekun berlatih setiap hari.' },
    ],
    tags: ['kalimat majemuk', 'urutan', 'kronologis'],
    level: 3,
  },

  {
    id: 'g3-065',
    title: 'Kalimat Majemuk Progresif: ……，并且……',
    titleZh: '递进复句：……，并且……',
    pattern: 'Klausa 1，并且 + Klausa 2 (lebih lanjut)',
    explanation: '并且 menghubungkan dua klausa dengan makna progresif: "dan bahkan/lagipula". Klausa kedua lebih maju/lebih jauh dari klausa pertama.',
    examples: [
      { zh: '专家们对这个问题进行了讨论，并且提出了解决办法。', pinyin: 'Zhuānjiāmen duì zhège wèntí jìnxíng le tǎolùn, bìngqiě tíchū le jiějué bànfǎ.', id: 'Para ahli mendiskusikan masalah ini, dan bahkan mengajukan solusi penyelesaian.' },
      { zh: '这种办法可以保存食物，并且能保存很久。', pinyin: 'Zhè zhǒng bànfǎ kěyǐ bǎocún shíwù, bìngqiě néng bǎocún hěn jiǔ.', id: 'Cara ini bisa mengawetkan makanan, bahkan bisa disimpan lama.' },
    ],
    tags: ['kalimat majemuk', 'progresif', 'penambahan'],
    level: 3,
  },

  {
    id: 'g3-066',
    title: 'Kalimat Majemuk Progresif: 不仅/不光……，还/而且……',
    titleZh: '递进复句：不仅/不光……，还/而且……',
    pattern: '不仅/不光 + Klausa 1，还/而且 + Klausa 2',
    explanation: '"Tidak hanya..., bahkan/melainkan juga...". Klausa kedua menyatakan sesuatu yang lebih jauh/lebih banyak dari klausa pertama.',
    examples: [
      { zh: '那个地方我们不仅去过，还去过好几次呢。', pinyin: 'Nàge dìfāng wǒmen bùjǐn qùguò, hái qùguò hǎo jǐ cì ne.', id: 'Tempat itu tidak hanya sudah kami kunjungi, bahkan sudah beberapa kali.' },
      { zh: '不光我会说中文，而且我姐姐也会说中文。', pinyin: 'Bù guāng wǒ huì shuō Zhōngwén, érqiě wǒ jiějie yě huì shuō Zhōngwén.', id: 'Tidak hanya saya yang bisa bahasa Mandarin, bahkan kakak perempuan saya pun juga bisa.' },
    ],
    tags: ['kalimat majemuk', 'progresif', 'tidak hanya'],
    level: 3,
  },

  {
    id: 'g3-067',
    title: 'Kalimat Majemuk Pilihan: 不是……，就是……',
    titleZh: '选择复句：不是……，就是……',
    pattern: '不是 + Pilihan 1，就是 + Pilihan 2',
    explanation: '"Bukan...ya...". Menyatakan bahwa situasinya pasti salah satu dari dua pilihan tersebut, tidak ada alternatif lain.',
    examples: [
      { zh: '他不是在办公室，就是在实验室。', pinyin: 'Tā bú shì zài bàngōngshì, jiù shì zài shíyànshì.', id: 'Dia bukan di kantor, ya di laboratorium.' },
      { zh: '这些衣服都不合适，不是太大，就是太小。', pinyin: 'Zhèxiē yīfu dōu bù héshì, bú shì tài dà, jiù shì tài xiǎo.', id: 'Baju-baju ini semuanya tidak cocok, bukan terlalu besar ya terlalu kecil.' },
    ],
    tags: ['kalimat majemuk', 'pilihan', 'alternatif'],
    level: 3,
  },

  {
    id: 'g3-068',
    title: 'Kalimat Majemuk Kontras: ……X是X，就是/不过……',
    titleZh: '转折复句：……X是X，就是/不过……',
    pattern: '...X是X，就是/不过 + Kontras',
    explanation: 'Pola ini mengakui sesuatu (X memang X), tapi segera menambahkan kontras atau kekurangan. "Memang X benar, tapi..."',
    examples: [
      { zh: '这件衣服好看是好看，就是有点儿贵。', pinyin: 'Zhè jiàn yīfu hǎokàn shì hǎokàn, jiù shì yǒudiǎnr guì.', id: 'Baju ini memang bagus, tapi agak mahal.' },
      { zh: '坐公交车方便是方便，不过人太多了。', pinyin: 'Zuò gōngjiāochē fāngbiàn shì fāngbiàn, bùguò rén tài duō le.', id: 'Naik bus memang nyaman, tapi orangnya terlalu banyak.' },
    ],
    tags: ['kalimat majemuk', 'kontras', 'pengakuan'],
    level: 3,
  },

  {
    id: 'g3-069',
    title: 'Kalimat Majemuk Pengandaian: 要是……，就……',
    titleZh: '假设复句：要是……，就……',
    pattern: '要是 + Kondisi，就 + Konsekuensi',
    explanation: '要是……，就…… adalah pola pengandaian lisan: "kalau/jika..., maka...". 要是 lebih kasual dari 如果. Klausa konsekuensi menggunakan 就.',
    examples: [
      { zh: '要是不开心，我就会大声唱歌。', pinyin: 'Yàoshi bù kāixīn, wǒ jiù huì dàshēng chànggē.', id: 'Kalau tidak senang, saya akan bernyanyi keras-keras.' },
      { zh: '要是你明天有时间，就跟我一起去长城吧。', pinyin: 'Yàoshi nǐ míngtiān yǒu shíjiān, jiù gēn wǒ yīqǐ qù Chángchéng ba.', id: 'Kalau kamu besok ada waktu, mari ikut saya ke Tembok Besar.' },
    ],
    tags: ['kalimat majemuk', 'pengandaian', 'kondisi'],
    level: 3,
  },

  {
    id: 'g3-070',
    title: 'Kalimat Majemuk Kondisional: 只有……，才……',
    titleZh: '条件复句：只有……，才……',
    pattern: '只有 + Syarat Satu-Satunya，才 + Hasil',
    explanation: '只有……，才…… berarti "hanya dengan.../hanya jika..., barulah...". Menyatakan kondisi yang merupakan satu-satunya syarat untuk mendapatkan hasil.',
    examples: [
      { zh: '只有认真检查，我们才会发现问题、解决问题。', pinyin: 'Zhǐyǒu rènzhēn jiǎnchá, wǒmen cái huì fāxiàn wèntí, jiějué wèntí.', id: 'Hanya dengan memeriksa dengan serius, kita baru bisa menemukan dan menyelesaikan masalah.' },
      { zh: '只有多听多说，你才能提高中文水平。', pinyin: 'Zhǐyǒu duō tīng duō shuō, nǐ cái néng tígāo Zhōngwén shuǐpíng.', id: 'Hanya dengan banyak mendengar dan berbicara, kamu baru bisa meningkatkan kemampuan Mandarin.' },
    ],
    tags: ['kalimat majemuk', 'kondisional', 'syarat tunggal'],
    level: 3,
  },

  {
    id: 'g3-071',
    title: 'Kalimat Majemuk Sebab-Akibat: (由于)……，所以/因此……',
    titleZh: '因果复句：（由于）……，所以/因此……',
    pattern: '（由于）+ Sebab，所以/因此 + Akibat',
    explanation: 'Pola sebab-akibat Level 3 meliputi 由于 (lebih formal, untuk sebab) dan 因此 (maka/oleh karena itu, untuk akibat). 由于 tidak dipakai bersama 所以 dalam satu kalimat.',
    examples: [
      { zh: '由于身体不好，所以爸爸打算提前退休。', pinyin: 'Yóuyú shēntǐ bù hǎo, suǒyǐ bàba dǎsuàn tíqián tuìxiū.', id: 'Karena kesehatan tidak baik, ayah berencana pensiun lebih awal.' },
      { zh: '他工作很努力，因此取得了很大的成功。', pinyin: 'Tā gōngzuò hěn nǔlì, yīncǐ qǔdé le hěn dà de chénggōng.', id: 'Dia bekerja sangat keras, oleh karena itu meraih kesuksesan besar.' },
    ],
    tags: ['kalimat majemuk', 'sebab-akibat', 'kausal'],
    level: 3,
  },

  {
    id: 'g3-072',
    title: 'Kalimat Majemuk Tujuan: 为了……，……',
    titleZh: '目的复句：为了……，……',
    pattern: '为了 + Tujuan，+ klausa tindakan',
    explanation: '为了 di awal kalimat menyatakan tujuan atau motivasi dari suatu tindakan. "Demi..., maka..."',
    examples: [
      { zh: '为了保持健康，他每天坚持运动。', pinyin: 'Wèile bǎochí jiànkāng, tā měitiān jiānchí yùndòng.', id: 'Demi menjaga kesehatan, dia tekun berolahraga setiap hari.' },
      { zh: '为了学好中文，我每天都要看中国电视剧。', pinyin: 'Wèile xuéhǎo Zhōngwén, wǒ měitiān dōu yào kàn Zhōngguó diànshìjù.', id: 'Demi belajar bahasa Mandarin dengan baik, saya setiap hari harus menonton drama China.' },
    ],
    tags: ['kalimat majemuk', 'tujuan', 'motivasi'],
    level: 3,
  },

  {
    id: 'g3-073',
    title: 'Kalimat Majemuk Terkompres: ……了……（就）……',
    titleZh: '紧缩复句：……了……（就）……',
    pattern: 'V₁ + 了 + (就) + V₂',
    explanation: 'Kalimat terkompres menggabungkan dua klausa kondisi-akibat tanpa penanda hubung eksplisit. "Begitu V₁, langsung V₂". Hubungannya tersirat dari konteks.',
    examples: [
      { zh: '他下了课就去图书馆。', pinyin: 'Tā xià le kè jiù qù túshūguǎn.', id: 'Dia begitu selesai kuliah langsung pergi ke perpustakaan.' },
      { zh: '他喝了酒就会脸红。', pinyin: 'Tā hē le jiǔ jiù huì liǎn hóng.', id: 'Dia begitu minum alkohol langsung muka merah.' },
    ],
    tags: ['kalimat majemuk', 'terkompres', 'urutan segera'],
    level: 3,
  },

  // ════════════════════════════════════════════════════════════
  // A.3.7 CARA EKSPRESI KHUSUS (特殊表达法)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g3-074',
    title: 'Menyatakan Perkiraan 2: 大概/大约/几 dan Pola Lain',
    titleZh: '概数表示法2',
    pattern: '(1) 大概/大约/几 + 数量 | (2) 相邻数词连用 | (3) 数词 + 左右/前后',
    explanation: 'Tiga cara menyatakan perkiraan angka: (1) 大概/大约/几 (kira-kira/beberapa), (2) dua angka berdekatan digabung: 三四个、十五六岁、七八十人 (perkiraan antara dua angka), (3) 左右/前后 setelah angka (sekitar/lebih kurang).',
    examples: [
      { zh: '这个手机大概两千块。', pinyin: 'Zhège shǒujī dàgài liǎng qiān kuài.', id: 'HP ini kira-kira dua ribu yuan.' },
      { zh: '教室里坐了七八十个人。', pinyin: 'Jiàoshì lǐ zuò le qī bā shí gè rén.', id: 'Di kelas duduk tujuh-delapan puluh orang.' },
      { zh: '春节前后大家都很忙。', pinyin: 'Chūnjié qiánhòu dàjiā dōu hěn máng.', id: 'Sekitar perayaan Tahun Baru Imlek semua orang sangat sibuk.' },
    ],
    tags: ['perkiraan', 'angka', 'ekspresi khusus'],
    level: 3,
  },

  // A.3.8 Cara Penekanan (强调的方法)
  {
    id: 'g3-075',
    title: 'Penekanan: 一点儿也不……',
    titleZh: '强调：用"一点儿也不……"表示强调',
    pattern: '一点儿也不/没 + Adj/V',
    explanation: '"Sedikit pun tidak/sama sekali tidak". Pola ini menekankan penolakan atau ketidakadaan secara total. Lebih kuat dari sekadar 不.',
    examples: [
      { zh: '中文一点儿也不简单。', pinyin: 'Zhōngwén yīdiǎnr yě bù jiǎndān.', id: 'Bahasa Mandarin sama sekali tidak mudah.' },
      { zh: '这双球鞋穿着一点儿也不舒服。', pinyin: 'Zhè shuāng qiúxié chuānzhe yīdiǎnr yě bù shūfu.', id: 'Sepatu olahraga ini dipakai sama sekali tidak nyaman.' },
    ],
    tags: ['penekanan', 'negasi total', 'ekspresi'],
    level: 3,
  },

  {
    id: 'g3-076',
    title: 'Penekanan dengan Kalimat Retorika: 不是……吗？/ 难道……吗？',
    titleZh: '用反问句表示强调：不是……吗？/难道……吗？',
    pattern: '不是 + Pernyataan + 吗？| 难道 + Pernyataan + 吗？',
    explanation: 'Kalimat retorika dipakai untuk menekankan, bukan benar-benar bertanya. 不是……吗 = "bukankah...?" (mengkonfirmasi). 难道……吗 = "masa iya...?" (mengekspresikan keheranan atau penyangkalan kuat).',
    examples: [
      { zh: '今天不是星期天吗？', pinyin: 'Jīntiān bú shì xīngqītiān ma?', id: 'Bukankah hari ini hari Minggu?' },
      { zh: '难道你没去过长城吗？', pinyin: 'Nándào nǐ méi qùguò Chángchéng ma?', id: 'Masa kamu belum pernah ke Tembok Besar?' },
    ],
    tags: ['penekanan', 'retorika', 'kalimat tanya'],
    level: 3,
  },

  {
    id: 'g3-077',
    title: 'Penekanan dengan 是',
    titleZh: '用"是"强调',
    pattern: 'S + 是 + Fokus (bagian yang ditekankan) + 的',
    explanation: '是……的 dipakai untuk menekankan bagian tertentu dari kalimat yang menyatakan tindakan yang sudah terjadi: waktu, tempat, cara, atau pelaku. Hanya bagian yang difokuskan yang diletakkan setelah 是.',
    examples: [
      { zh: '你说得对，这位经理是很负责。', pinyin: 'Nǐ shuō de duì, zhè wèi jīnglǐ shì hěn fùzé.', id: 'Kamu benar, manajer ini memang sangat bertanggung jawab.' },
      { zh: '我同意，那电影是很有意思。', pinyin: 'Wǒ tóngyì, nà diànyǐng shì hěn yǒu yìsi.', id: 'Saya setuju, film itu memang sangat menarik.' },
    ],
    tags: ['penekanan', '是', 'fokus'],
    level: 3,
  },

  // A.3.9 Cara Bertanya (提问的方法)
  {
    id: 'g3-078',
    title: 'Bertanya dengan Intonasi Naik',
    titleZh: '用疑问语调表示疑问',
    pattern: 'Kalimat pernyataan + ? (intonasi naik)',
    explanation: 'Selain 吗, 呢, kata tanya, dan A不A, bahasa Mandarin juga bisa membentuk pertanyaan hanya dengan intonasi naik di akhir kalimat. Biasanya dalam percakapan informal.',
    examples: [
      { zh: '今天是星期六？', pinyin: 'Jīntiān shì xīngqīliù?', id: 'Hari ini hari Sabtu?' },
      { zh: '你打算去旅行？', pinyin: 'Nǐ dǎsuàn qù lǚxíng?', id: 'Kamu berencana pergi wisata?' },
    ],
    tags: ['pertanyaan', 'intonasi', 'cara bertanya'],
    level: 3,
  },

  // A.3.10 Pola Lisan (口语格式)
  {
    id: 'g3-079',
    title: 'Pola Lisan: 都……了',
    titleZh: '口语格式：都……了',
    pattern: '都 + Situasi/Waktu + 了',
    explanation: '都……了 dalam pola lisan menyatakan "sudah (terlambat/lama sekali)...". Mengekspresikan bahwa sesuatu sudah sampai batas tertentu yang mengejutkan atau tidak terduga.',
    examples: [
      { zh: '都十一点了，你别看电视了。', pinyin: 'Dōu shíyī diǎn le, nǐ bié kàn diànshì le.', id: 'Sudah jam sebelas, jangan nonton TV lagi.' },
      { zh: '都三天了，他怎么还没回来？', pinyin: 'Dōu sān tiān le, tā zěnme hái méi huí lái?', id: 'Sudah tiga hari, kenapa dia belum kembali?' },
    ],
    tags: ['lisan', 'pola', 'penekanan waktu'],
    level: 3,
  },

  {
    id: 'g3-080',
    title: 'Pola Lisan: X就X（点儿）吧',
    titleZh: '口语格式：X就X（点儿）吧',
    pattern: 'Adj/V + 就 + Adj/V + (点儿) + 吧',
    explanation: 'Pola lisan ini menyatakan penerimaan/konsesi dengan sedikit ketidakpuasan: "ya sudah...lah, meski begitu". Mengakui situasi sambil menyarankan tindakan.',
    examples: [
      { zh: '慢就慢吧，他能完成任务就很不错了。', pinyin: 'Màn jiù màn ba, tā néng wánchéng rènwu jiù hěn búcuò le.', id: 'Ya sudah lambat, asal dia bisa menyelesaikan tugas sudah cukup baik.' },
      { zh: '忙就忙点儿吧，我们过几天就能休息了。', pinyin: 'Máng jiù máng diǎnr ba, wǒmen guò jǐ tiān jiù néng xiūxi le.', id: 'Ya sudah sibuk sedikit, beberapa hari lagi kita bisa istirahat.' },
    ],
    tags: ['lisan', 'pola', 'konsesi'],
    level: 3,
  },

  {
    id: 'g3-081',
    title: 'Pola Lisan: X什么（啊）',
    titleZh: '口语格式：X什么（啊）',
    pattern: 'V/Adj + 什么 + (啊)',
    explanation: 'Pola lisan 什么(啊) dipakai untuk menolak atau mempertanyakan suatu penilaian dengan nada tidak setuju atau meremehkan: "apa yang... (itu)", "mana ada...". Mengekspresikan penyangkalan atau keberatan ringan.',
    examples: [
      { zh: '玩儿什么，我们赶快工作吧。', pinyin: 'Wánr shénme, wǒmen gǎnkuài gōngzuò ba.', id: 'Main apa, ayo kita segera bekerja.' },
      { zh: '舒服什么啊，办公室空调坏了。', pinyin: 'Shūfu shénme a, bàngōngshì kōngtiáo huài le.', id: 'Nyaman apa, AC kantor rusak.' },
    ],
    tags: ['lisan', 'pola', 'penyangkalan'],
    level: 3,
  },

];

export default hsk3Grammar;