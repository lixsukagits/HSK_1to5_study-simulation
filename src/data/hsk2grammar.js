// HSK 3.0 Level 2 — Poin Tata Bahasa (语法点)
// Sumber: GF 0025-2021 Lampiran A.2 (二级语法点)
// Divalidasi: OCR langsung dari PDF GF 0025-2021 hal. 185–197
// Format SAMA PERSIS dengan hsk1_grammar.js
// { id, title, titleZh, pattern, explanation, examples: [{zh, pinyin, id}], tags, level }

export const hsk2Grammar = [

  // ════════════════════════════════════════════════════════════
  // A.2.1 KELAS KATA (词类)
  // ════════════════════════════════════════════════════════════

  // ── A.2.1.1 Kata Kerja Modal ────────────────────────────────

  {
    id: 'g2-001',
    title: 'Kata Kerja Modal: 可能 (mungkin)',
    titleZh: '能愿动词：可能',
    pattern: '可能 + V | 不可能 + V',
    explanation: '可能 menyatakan kemungkinan. Bisa sebagai kata sifat, kata benda (kemungkinan), atau kata modal. Negatif: 不可能.',
    examples: [
      { zh: '他可能出去了。', pinyin: 'Tā kěnéng chūqù le.', id: 'Dia mungkin sudah keluar.' },
      { zh: '我今天不可能写完这么多作业。', pinyin: 'Wǒ jīntiān bù kěnéng xiě wán zhème duō zuòyè.', id: 'Hari ini saya tidak mungkin menyelesaikan PR sebanyak ini.' },
    ],
    tags: ['kata kerja modal', '可能', 'kemungkinan'],
    level: 2,
  },

  {
    id: 'g2-002',
    title: 'Kata Kerja Modal: 该 / 应该 (seharusnya)',
    titleZh: '能愿动词：该、应该',
    pattern: '该/应该 + V',
    explanation: '应该 menyatakan keharusan atau kewajiban moral. 该 adalah bentuk pendeknya, sering dipakai dalam percakapan. Negatif: 不应该.',
    examples: [
      { zh: '你该吃药了。', pinyin: 'Nǐ gāi chī yào le.', id: 'Sudah waktunya kamu minum obat.' },
      { zh: '你们应该去检查一下儿身体。', pinyin: 'Nǐmen yīnggāi qù jiǎnchá yīxiàr shēntǐ.', id: 'Kalian seharusnya pergi memeriksakan kesehatan.' },
    ],
    tags: ['kata kerja modal', '应该', '该', 'kewajiban'],
    level: 2,
  },

  {
    id: 'g2-003',
    title: 'Kata Kerja Modal: 愿意 (bersedia/mau)',
    titleZh: '能愿动词：愿意',
    pattern: '愿意 + V | 不愿意 + V',
    explanation: '愿意 menyatakan kemauan atau kesediaan melakukan sesuatu secara sukarela. Negatif: 不愿意.',
    examples: [
      { zh: '我愿意帮助同学。', pinyin: 'Wǒ yuànyì bāngzhù tóngxué.', id: 'Saya bersedia membantu teman sekelas.' },
      { zh: '我不愿意去外地工作。', pinyin: 'Wǒ bù yuànyì qù wàidì gōngzuò.', id: 'Saya tidak mau pergi bekerja di luar kota.' },
    ],
    tags: ['kata kerja modal', '愿意', 'kemauan'],
    level: 2,
  },

  {
    id: 'g2-004',
    title: 'Reduplikasi Kata Kerja: AA / A一A / A了A / ABAB',
    titleZh: '动词重叠：AA、A一A、A了A、ABAB',
    pattern: 'V+V | V+一+V | V+了+V | AB+AB',
    explanation: 'Reduplikasi kata kerja menyatakan tindakan dilakukan sebentar atau santai: AA (看看), A一A (看一看), A了A (看了看), ABAB (介绍介绍).',
    examples: [
      { zh: '我能用用你的手机吗？', pinyin: 'Wǒ néng yòng yong nǐ de shǒujī ma?', id: 'Bolehkah saya meminjam HP-mu sebentar?' },
      { zh: '你想一想这个字的意思。', pinyin: 'Nǐ xiǎng yi xiǎng zhège zì de yìsi.', id: 'Coba kamu pikir-pikir arti karakter ini.' },
      { zh: '他看了看我，没说话。', pinyin: 'Tā kàn le kàn wǒ, méi shuōhuà.', id: 'Dia melihat saya sebentar, lalu tidak berkata apa-apa.' },
      { zh: '请介绍介绍你的朋友。', pinyin: 'Qǐng jièshào jièshào nǐ de péngyou.', id: 'Tolong perkenalkan teman-temanmu.' },
    ],
    tags: ['reduplikasi', 'kata kerja', 'tindakan singkat'],
    level: 2,
  },

  // ── A.2.1.2 Kata Ganti ──────────────────────────────────────

  {
    id: 'g2-005',
    title: 'Kata Tanya Baru: 多久、为什么、怎么样、怎样',
    titleZh: '疑问代词：多久、为什么、怎么样、怎样',
    pattern: '多久 / 为什么 / 怎么样 / 怎样 + ?',
    explanation: '多久 = berapa lama?; 为什么 = mengapa?; 怎么样 = bagaimana keadaannya?; 怎样 = bagaimana caranya?',
    examples: [
      { zh: '昨天的作业，你写了多久？', pinyin: 'Zuótiān de zuòyè, nǐ xiě le duō jiǔ?', id: 'PR kemarin, kamu mengerjakannya berapa lama?' },
      { zh: '你为什么不去上课？', pinyin: 'Nǐ wèishénme bù qù shàngkè?', id: 'Mengapa kamu tidak pergi ke kelas?' },
      { zh: '爸爸的身体怎么样？', pinyin: 'Bàba de shēntǐ zěnmeyàng?', id: 'Bagaimana kondisi kesehatan ayah?' },
      { zh: '这个字怎样写？', pinyin: 'Zhège zì zěnyàng xiě?', id: 'Bagaimana cara menulis karakter ini?' },
    ],
    tags: ['kata tanya', '多久', '为什么', '怎么样', '怎样'],
    level: 2,
  },

  {
    id: 'g2-006',
    title: 'Kata Ganti Orang Baru: 别人、大家、它们、咱们、自己',
    titleZh: '人称代词：别人、大家、它、它们、咱、咱们、自己',
    pattern: '别人 / 大家 / 它(们) / 咱们 / 自己',
    explanation: '别人 = orang lain; 大家 = semua orang; 它/它们 = dia/mereka (benda/hewan); 咱/咱们 = kita (termasuk lawan bicara); 自己 = diri sendiri.',
    examples: [
      { zh: '我想听听别人的意见。', pinyin: 'Wǒ xiǎng tīng ting biérén de yìjiàn.', id: 'Saya ingin mendengar pendapat orang lain.' },
      { zh: '大家一起唱歌吧。', pinyin: 'Dàjiā yìqǐ chànggē ba.', id: 'Ayo semua bernyanyi bersama.' },
      { zh: '那个书包很好看，我喜欢它的颜色。', pinyin: 'Nàge shūbāo hěn hǎokàn, wǒ xǐhuan tā de yánsè.', id: 'Tas itu sangat bagus, saya suka warnanya.' },
      { zh: '你一定要相信自己。', pinyin: 'Nǐ yīdìng yào xiāngxìn zìjǐ.', id: 'Kamu harus percaya pada diri sendiri.' },
    ],
    tags: ['kata ganti', '别人', '大家', '自己', '咱们'],
    level: 2,
  },

  {
    id: 'g2-007',
    title: 'Kata Tunjuk: 那么、那样、这么、这样',
    titleZh: '指示代词：那么、那样、这么、这样',
    pattern: '那么/那样 + Adj | 这么/这样 + Adj/V',
    explanation: '那么/那样 = seperti itu/sebegitu; 这么/这样 = seperti ini/sebegini. Menunjuk derajat atau cara.',
    examples: [
      { zh: '你女朋友有她那么漂亮吗？', pinyin: 'Nǐ nǚpéngyou yǒu tā nàme piàoliang ma?', id: 'Apakah pacarmu secantik dia?' },
      { zh: '筷子不能那样拿。', pinyin: 'Kuàizi bù néng nàyàng ná.', id: 'Sumpit tidak bisa dipegang seperti itu.' },
      { zh: '他哥哥有你这么高。', pinyin: 'Tā gēge yǒu nǐ zhème gāo.', id: 'Kakaknya setinggi kamu.' },
      { zh: '这个汉字这样写。', pinyin: 'Zhège Hànzì zhèyàng xiě.', id: 'Karakter Hanzi ini ditulis seperti ini.' },
    ],
    tags: ['kata tunjuk', '那么', '那样', '这么', '这样'],
    level: 2,
  },

  // ── A.2.1.3 Kata Sifat ──────────────────────────────────────

  {
    id: 'g2-008',
    title: 'Reduplikasi Kata Sifat: AA / AABB',
    titleZh: '形容词重叠：AA、AABB',
    pattern: 'A+A | AA+BB',
    explanation: 'Reduplikasi kata sifat memperkuat deskripsi. AA sebagai atribut/adverbia. AABB sebagai predikat/atribut.',
    examples: [
      { zh: '那个女孩儿高高的个子，大大的眼睛，非常漂亮。', pinyin: 'Nàge nǚháir gāogāo de gèzi, dàdà de yǎnjing, fēicháng piàoliang.', id: 'Gadis itu berbadan tinggi, bermata besar, sangat cantik.' },
      { zh: '这个房间干干净净的。', pinyin: 'Zhège fángjiān gāngānjìngjìng de.', id: 'Kamar ini bersih sekali.' },
      { zh: '他们都高高兴兴地回家了。', pinyin: 'Tāmen dōu gāogāoxìngxìng de huí jiā le.', id: 'Mereka semua pulang ke rumah dengan sangat gembira.' },
    ],
    tags: ['reduplikasi', 'kata sifat', 'AABB'],
    level: 2,
  },

  // ── A.2.1.4–5 Bilangan & Kata Ukuran ───────────────────────

  {
    id: 'g2-009',
    title: 'Bilangan Besar: 千、万、亿',
    titleZh: '数词：千、万、亿',
    pattern: '千 (1.000) | 万 (10.000) | 亿 (100.000.000)',
    explanation: 'Sistem bilangan Mandarin: 千 = ribu, 万 = sepuluh ribu, 亿 = seratus juta. PERHATIAN: 万 bukan "juta"!',
    examples: [
      { zh: '一千三百五十二', pinyin: 'yī qiān sān bǎi wǔshí èr', id: 'Seribu tiga ratus lima puluh dua (1.352)' },
      { zh: '两万一千四百六十五', pinyin: 'liǎng wàn yī qiān sì bǎi liùshíwǔ', id: 'Dua puluh satu ribu empat ratus enam puluh lima (21.465)' },
      { zh: '四亿五千万', pinyin: 'sì yì wǔ qiān wàn', id: 'Empat ratus lima puluh juta (450.000.000)' },
    ],
    tags: ['bilangan', '千', '万', '亿'],
    level: 2,
  },

  {
    id: 'g2-010',
    title: 'Kata Ukuran Benda Baru: 层、封、件、条、位',
    titleZh: '名量词：层、封、件、条、位',
    pattern: '数 + 层/封/件/条/位 + N',
    explanation: '层 = lantai/lapisan; 封 = lembar surat; 件 = buah (pakaian/urusan); 条 = ekor/buah (benda panjang-tipis); 位 = orang (kata ukuran hormat).',
    examples: [
      { zh: '两层楼', pinyin: 'liǎng céng lóu', id: 'gedung dua lantai' },
      { zh: '一封信', pinyin: 'yī fēng xìn', id: 'sepucuk surat' },
      { zh: '一件衣服', pinyin: 'yī jiàn yīfu', id: 'sehelai pakaian' },
      { zh: '一条河', pinyin: 'yī tiáo hé', id: 'sebuah sungai' },
      { zh: '一位老师', pinyin: 'yī wèi lǎoshī', id: 'seorang guru (hormat)' },
    ],
    tags: ['kata ukuran benda', '层', '封', '件', '条', '位'],
    level: 2,
  },

  {
    id: 'g2-011',
    title: 'Kata Ukuran Tindakan: 遍、次、场、回、下',
    titleZh: '动量词：遍、次、场、回、下',
    pattern: 'V + 数 + 遍/次/场/回/下',
    explanation: '遍 = kali (proses penuh awal–akhir); 次 = kali (frekuensi); 场 = kali (pertunjukan/pertandingan); 回 = kali (bolak-balik); 下 = kali (gerakan cepat).',
    examples: [
      { zh: '看两遍', pinyin: 'kàn liǎng biàn', id: 'membaca dua kali (dari awal sampai akhir)' },
      { zh: '去一次', pinyin: 'qù yī cì', id: 'pergi sekali' },
      { zh: '演一场', pinyin: 'yǎn yī chǎng', id: 'tampil satu kali pertunjukan' },
      { zh: '来两回', pinyin: 'lái liǎng huí', id: 'datang dua kali' },
      { zh: '打一下儿', pinyin: 'dǎ yīxiàr', id: 'memukul sekali (cepat)' },
    ],
    tags: ['kata ukuran tindakan', '遍', '次', '场', '回', '下'],
    level: 2,
  },

  {
    id: 'g2-012',
    title: 'Kata Ukuran Waktu: 分钟、年、天、周',
    titleZh: '时量词：分钟、年、天、周',
    pattern: '数 + 分钟/年/天/周',
    explanation: 'Kata ukuran durasi: 分钟 = menit, 年 = tahun, 天 = hari, 周 = minggu. Dipakai setelah angka untuk menyatakan lamanya.',
    examples: [
      { zh: '十分钟', pinyin: 'shí fēnzhōng', id: 'sepuluh menit' },
      { zh: '两年', pinyin: 'liǎng nián', id: 'dua tahun' },
      { zh: '五天', pinyin: 'wǔ tiān', id: 'lima hari' },
      { zh: '三周', pinyin: 'sān zhōu', id: 'tiga minggu' },
    ],
    tags: ['kata ukuran waktu', '分钟', '年', '天', '周'],
    level: 2,
  },

  // ── A.2.1.6 Kata Keterangan ─────────────────────────────────

  {
    id: 'g2-013',
    title: 'Kata Keterangan Derajat: 多么、更、十分、特别、挺、有(一)点儿',
    titleZh: '程度副词：多、多么、好、更、十分、特别、挺、有（一）点儿',
    pattern: '副词 + Adj/V',
    explanation: '多/多么 = betapa! (seru); 更 = lebih lagi; 十分 = sangat (formal); 特别 = terutama/sangat; 挺 = cukup (santai); 有(一)点儿 = agak.',
    examples: [
      { zh: '这孩子多可爱啊！', pinyin: 'Zhè háizi duō kě\'ài a!', id: 'Betapa lucunya anak ini!' },
      { zh: '他很高，他弟弟更高。', pinyin: 'Tā hěn gāo, tā dìdi gèng gāo.', id: 'Dia sangat tinggi, adiknya lebih tinggi lagi.' },
      { zh: '这包子十分好吃。', pinyin: 'Zhè bāozi shífēn hǎochī.', id: 'Bakpao ini sangat lezat.' },
      { zh: '王老师的儿子特别可爱。', pinyin: 'Wáng lǎoshī de érzi tèbié kě\'ài.', id: 'Putra Bu Wang sangat menggemaskan.' },
      { zh: '那儿挺安静的。', pinyin: 'Nàr tǐng ānjìng de.', id: 'Tempat itu cukup tenang.' },
      { zh: '今天天气有一点儿热。', pinyin: 'Jīntiān tiānqì yǒu yīdiǎnr rè.', id: 'Hari ini cuacanya agak panas.' },
    ],
    tags: ['derajat', '更', '特别', '十分', '挺', '有一点儿'],
    level: 2,
  },

  {
    id: 'g2-014',
    title: 'Kata Keterangan Cakupan: 全、一共、只',
    titleZh: '范围副词：全、一共、只',
    pattern: '全/一共/只 + V/Adj',
    explanation: '全 = semua/seluruhnya; 一共 = semuanya/total; 只 = hanya/cuma.',
    examples: [
      { zh: '同学们全来了。', pinyin: 'Tóngxuémen quán lái le.', id: 'Semua teman kelas sudah datang.' },
      { zh: '我们班一共有二十人。', pinyin: 'Wǒmen bān yīgòng yǒu èrshí rén.', id: 'Di kelas kami total ada dua puluh orang.' },
      { zh: '卡里只有二百块钱。', pinyin: 'Kǎ lǐ zhǐ yǒu èr bǎi kuài qián.', id: 'Di kartu hanya ada dua ratus yuan.' },
    ],
    tags: ['cakupan', '全', '一共', '只'],
    level: 2,
  },

  {
    id: 'g2-015',
    title: 'Kata Keterangan Waktu: 刚、刚刚、还、忽然、一直、已经',
    titleZh: '时间副词：刚、刚刚、还、忽然、一直、已经',
    pattern: '副词 + V',
    explanation: '刚/刚刚 = baru saja; 还 = masih; 忽然 = tiba-tiba; 一直 = terus-menerus; 已经 = sudah.',
    examples: [
      { zh: '我刚从学校回到家。', pinyin: 'Wǒ gāng cóng xuéxiào huí dào jiā.', id: 'Saya baru saja pulang dari sekolah.' },
      { zh: '外边还在下雨呢。', pinyin: 'Wàibian hái zài xià yǔ ne.', id: 'Di luar masih hujan.' },
      { zh: '街上的灯忽然都亮了。', pinyin: 'Jiē shàng de dēng hūrán dōu liàng le.', id: 'Lampu di jalan tiba-tiba menyala semua.' },
      { zh: '她一直在说话。', pinyin: 'Tā yīzhí zài shuōhuà.', id: 'Dia terus berbicara.' },
      { zh: '校长已经下班了。', pinyin: 'Xiàozhǎng yǐjīng xiàbān le.', id: 'Kepala sekolah sudah pulang kerja.' },
    ],
    tags: ['waktu', '刚', '忽然', '一直', '已经', '还'],
    level: 2,
  },

  {
    id: 'g2-016',
    title: 'Kata Keterangan Frekuensi: 重新、经常、老是、又',
    titleZh: '频率副词：重新、经常、老、老是、又',
    pattern: '副词 + V',
    explanation: '重新 = dari awal lagi; 经常 = sering; 老/老是 = selalu saja (nuansa mengeluh); 又 = lagi (kejadian yang berulang).',
    examples: [
      { zh: '这篇作文我要重新写一遍。', pinyin: 'Zhè piān zuòwén wǒ yào chóngxīn xiě yī biàn.', id: 'Karangan ini harus saya tulis ulang dari awal.' },
      { zh: '我经常看见他在图书馆学习。', pinyin: 'Wǒ jīngcháng kànjiàn tā zài túshūguǎn xuéxí.', id: 'Saya sering melihat dia belajar di perpustakaan.' },
      { zh: '这个月北京老是下雨。', pinyin: 'Zhège yuè Běijīng lǎoshi xià yǔ.', id: 'Bulan ini Beijing selalu saja hujan.' },
      { zh: '我们队又进了一个球。', pinyin: 'Wǒmen duì yòu jìn le yī gè qiú.', id: 'Tim kami mencetak satu gol lagi.' },
    ],
    tags: ['frekuensi', '重新', '经常', '老是', '又'],
    level: 2,
  },

  {
    id: 'g2-017',
    title: 'Kata Keterangan Penghubung: 就 (dalam kalimat kondisional)',
    titleZh: '关联副词：就',
    pattern: '如果/要是……，就……',
    explanation: '就 berpasangan dengan 如果/要是/……的话 untuk menyatakan kondisi–akibat.',
    examples: [
      { zh: '如果明天天气好，我就去爬山。', pinyin: 'Rúguǒ míngtiān tiānqì hǎo, wǒ jiù qù páshān.', id: 'Jika cuaca besok bagus, saya akan mendaki gunung.' },
      { zh: '你有时间的话，我们就一起出去走走吧。', pinyin: 'Nǐ yǒu shíjiān de huà, wǒmen jiù yīqǐ chūqù zǒuzou ba.', id: 'Kalau kamu punya waktu, ayo kita jalan-jalan bersama.' },
    ],
    tags: ['penghubung', '就', '如果', 'kondisional'],
    level: 2,
  },

  {
    id: 'g2-018',
    title: 'Kata Keterangan Cara: 故意 (dengan sengaja)',
    titleZh: '方式副词：故意',
    pattern: '故意 + V',
    explanation: '故意 = dengan sengaja; disengaja. Tindakan dilakukan secara sadar dan memang diniatkan.',
    examples: [
      { zh: '说话的时候，他故意提高声音。', pinyin: 'Shuōhuà de shíhou, tā gùyì tígāo shēngyīn.', id: 'Saat berbicara, dia sengaja meninggikan suaranya.' },
      { zh: '我不是故意弄坏电脑的。', pinyin: 'Wǒ bú shì gùyì nòng huài diànnǎo de.', id: 'Saya tidak sengaja merusak komputernya.' },
    ],
    tags: ['cara', '故意', 'sengaja'],
    level: 2,
  },

  {
    id: 'g2-019',
    title: 'Kata Keterangan Situasi: 必须、差不多、好像、一定、也许',
    titleZh: '情态副词：必须、差不多、好像、一定、也许',
    pattern: '副词 + V/Adj',
    explanation: '必须 = harus mutlak; 差不多 = kira-kira/hampir; 好像 = sepertinya; 一定 = pasti; 也许 = mungkin.',
    examples: [
      { zh: '要取得好成绩，大家必须努力学习。', pinyin: 'Yào qǔdé hǎo chéngjì, dàjiā bìxū nǔlì xuéxí.', id: 'Untuk mendapat nilai bagus, semua harus belajar dengan giat.' },
      { zh: '机票差不多要两千块钱。', pinyin: 'Jīpiào chàbuduō yào liǎng qiān kuài qián.', id: 'Harga tiket pesawat kira-kira dua ribu yuan.' },
      { zh: '今天好像要下雨。', pinyin: 'Jīntiān hǎoxiàng yào xià yǔ.', id: 'Sepertinya hari ini akan hujan.' },
      { zh: '你到北京后，一定要去看看王老师。', pinyin: 'Nǐ dào Běijīng hòu, yīdìng yào qù kànkàn Wáng lǎoshī.', id: 'Setelah tiba di Beijing, kamu pasti harus menjenguk Bu Wang.' },
      { zh: '我今年也许会去中国学习中文。', pinyin: 'Wǒ jīnnián yěxǔ huì qù Zhōngguó xuéxí Zhōngwén.', id: 'Tahun ini mungkin saya akan pergi ke Tiongkok belajar bahasa Mandarin.' },
    ],
    tags: ['situasi', '必须', '差不多', '好像', '一定', '也许'],
    level: 2,
  },

  {
    id: 'g2-020',
    title: 'Kata Keterangan Nada: 才、都、就、正好',
    titleZh: '语气副词：才、都、就、正好',
    pattern: '才/都/就/正好 + V',
    explanation: '才 = baru/barulah (terlambat/sedikit); 都 = sudah/bahkan (mengejutkan); 就 = tepat/persis; 正好 = kebetulan/pas.',
    examples: [
      { zh: '我今天八点才起床。', pinyin: 'Wǒ jīntiān bā diǎn cái qǐchuáng.', id: 'Hari ini saya baru bangun pukul delapan.' },
      { zh: '都十二点了，我们该睡觉了。', pinyin: 'Dōu shí\'èr diǎn le, wǒmen gāi shuìjiào le.', id: 'Sudah jam dua belas, kita sudah seharusnya tidur.' },
      { zh: '班长七点半就到教室了。', pinyin: 'Bānzhǎng qī diǎn bàn jiù dào jiàoshì le.', id: 'Ketua kelas sudah sampai di kelas tepat pukul tujuh setengah.' },
      { zh: '今年我的生日正好是星期天。', pinyin: 'Jīnnián wǒ de shēngrì zhènghǎo shì xīngqītiān.', id: 'Tahun ini ulang tahun saya kebetulan jatuh pada hari Minggu.' },
    ],
    tags: ['nada', '才', '都', '就', '正好'],
    level: 2,
  },

  // ── A.2.1.7 Preposisi ───────────────────────────────────────

  {
    id: 'g2-021',
    title: 'Preposisi Waktu: 当……的时候 (ketika)',
    titleZh: '介词：当（引出时间）',
    pattern: '当 + waktu/V + 的时候，……',
    explanation: '当……的时候 = ketika/pada saat. Menyatakan waktu terjadinya peristiwa lain.',
    examples: [
      { zh: '当他进来的时候，我们正在看电视。', pinyin: 'Dāng tā jìnlái de shíhou, wǒmen zhèngzài kàn diànshì.', id: 'Ketika dia masuk, kami sedang menonton TV.' },
      { zh: '当爸爸回来的时候，妈妈已经做好晚饭了。', pinyin: 'Dāng bàba huílái de shíhou, māma yǐjīng zuò hǎo wǎnfàn le.', id: 'Ketika ayah pulang, ibu sudah selesai memasak makan malam.' },
    ],
    tags: ['preposisi', '当', 'waktu', '的时候'],
    level: 2,
  },

  {
    id: 'g2-022',
    title: 'Preposisi Arah: 往 (menuju)',
    titleZh: '介词：往（引出方向）',
    pattern: '往 + arah + V',
    explanation: '往 = menuju/ke arah. Menekankan arah gerakan.',
    examples: [
      { zh: '你往左走，就能看见洗手间。', pinyin: 'Nǐ wǎng zuǒ zǒu, jiù néng kànjiàn xǐshǒujiān.', id: 'Kamu jalan ke kiri, nanti bisa melihat toilet.' },
      { zh: '你往前走一百米就到了。', pinyin: 'Nǐ wǎng qián zǒu yī bǎi mǐ jiù dào le.', id: 'Kamu jalan ke depan seratus meter sampai.' },
    ],
    tags: ['preposisi', '往', 'arah'],
    level: 2,
  },

  {
    id: 'g2-023',
    title: 'Preposisi Arah: 向 (ke arah/kepada)',
    titleZh: '介词：向（引出方向）',
    pattern: '向 + arah/orang + V',
    explanation: '向 = ke arah/kepada. Mirip 往 tapi bisa juga ke orang.',
    examples: [
      { zh: '你向西边看，看见西山了吗？', pinyin: 'Nǐ xiàng xībian kàn, kànjiàn Xī Shān le ma?', id: 'Kamu lihat ke arah barat, apakah kelihatan Bukit Barat?' },
      { zh: '他向图书馆走去了。', pinyin: 'Tā xiàng túshūguǎn zǒu qù le.', id: 'Dia berjalan menuju perpustakaan.' },
    ],
    tags: ['preposisi', '向', 'arah'],
    level: 2,
  },

  {
    id: 'g2-024',
    title: 'Preposisi Asal: 从 (dari titik awal)',
    titleZh: '介词：从（引出方向、路径）',
    pattern: '从 + tempat/waktu + V',
    explanation: '从 = dari (titik awal). Menekankan titik berangkat, berbeda dari 离 (jarak).',
    examples: [
      { zh: '你从这儿走，五分钟就到书店了。', pinyin: 'Nǐ cóng zhèr zǒu, wǔ fēnzhōng jiù dào shūdiàn le.', id: 'Dari sini kamu jalan, lima menit sampai toko buku.' },
      { zh: '这路公交车从我们学校前口过。', pinyin: 'Zhè lù gōngjiāochē cóng wǒmen xuéxiào qián kǒu guò.', id: 'Bus jalur ini melewati depan sekolah kami.' },
    ],
    tags: ['preposisi', '从', 'titik awal'],
    level: 2,
  },

  {
    id: 'g2-025',
    title: 'Preposisi Objek: 对 (terhadap)',
    titleZh: '介词：对（引出对象）',
    pattern: '对 + orang/hal + V/Adj',
    explanation: '对 = terhadap/kepada. Memperkenalkan objek dari sikap atau tindakan.',
    examples: [
      { zh: '她对顾客非常热情。', pinyin: 'Tā duì gùkè fēicháng rèqíng.', id: 'Dia sangat ramah terhadap pelanggan.' },
      { zh: '这件事你对他说了吗？', pinyin: 'Zhè jiàn shì nǐ duì tā shuō le ma?', id: 'Apakah kamu sudah memberitahu hal ini kepadanya?' },
    ],
    tags: ['preposisi', '对', 'objek'],
    level: 2,
  },

  {
    id: 'g2-026',
    title: 'Preposisi Penerima: 给 (untuk/kepada)',
    titleZh: '介词：给（引出对象）',
    pattern: '给 + orang + V',
    explanation: '给 sebagai preposisi = kepada/untuk. Memperkenalkan penerima tindakan.',
    examples: [
      { zh: '我晚上要给女朋友打电话。', pinyin: 'Wǒ wǎnshang yào gěi nǚpéngyou dǎ diànhuà.', id: 'Malam ini saya mau menelepon pacar.' },
      { zh: '她后天过生日，我们给她送什么礼物呢？', pinyin: 'Tā hòutiān guò shēngrì, wǒmen gěi tā sòng shénme lǐwù ne?', id: 'Lusa dia ulang tahun, hadiah apa yang kita berikan kepadanya?' },
    ],
    tags: ['preposisi', '给', 'penerima'],
    level: 2,
  },

  {
    id: 'g2-027',
    title: 'Preposisi Jarak: 离 (berjarak dari)',
    titleZh: '介词：离（引出距离）',
    pattern: 'A + 离 + B + jarak/waktu',
    explanation: '离 = berjarak dari. Menyatakan jarak fisik atau selisih waktu antara dua titik.',
    examples: [
      { zh: '这儿离车站有点儿远。', pinyin: 'Zhèr lí chēzhàn yǒudiǎnr yuǎn.', id: 'Dari sini ke halte agak jauh.' },
      { zh: '现在离放假有一个星期的时间。', pinyin: 'Xiànzài lí fàngjià yǒu yī gè xīngqī de shíjiān.', id: 'Sekarang tersisa satu minggu lagi sebelum liburan.' },
    ],
    tags: ['preposisi', '离', 'jarak'],
    level: 2,
  },

  {
    id: 'g2-028',
    title: 'Preposisi Tujuan: 为 (demi/untuk)',
    titleZh: '介词：为（引出目的、原因）',
    pattern: '为 + orang/hal + V',
    explanation: '为 = demi/untuk. Menyatakan tujuan atau penerima manfaat suatu tindakan.',
    examples: [
      { zh: '为大家的健康干杯！', pinyin: 'Wèi dàjiā de jiànkāng gānbēi!', id: 'Demi kesehatan semua orang, mari bersulang!' },
      { zh: '我们都为你的好成绩高兴。', pinyin: 'Wǒmen dōu wèi nǐ de hǎo chéngjì gāoxìng.', id: 'Kami semua ikut senang atas nilaimu yang bagus.' },
    ],
    tags: ['preposisi', '为', 'tujuan'],
    level: 2,
  },

  // ── A.2.1.8 Kata Sambung ────────────────────────────────────

  {
    id: 'g2-029',
    title: 'Kata Sambung Pilihan: 或、或者 (atau)',
    titleZh: '连词：或、或者（连接词或短语）',
    pattern: 'A + 或/或者 + B',
    explanation: '或/或者 = atau (dalam kalimat pernyataan). Berbeda dari 还是 yang dipakai di kalimat tanya.',
    examples: [
      { zh: '星期天我想去看电影或听音乐会。', pinyin: 'Xīngqītiān wǒ xiǎng qù kàn diànyǐng huò tīng yīnyuèhuì.', id: 'Hari Minggu saya ingin menonton film atau mendengarkan konser.' },
      { zh: '我下午去打球或者去爬山。', pinyin: 'Wǒ xiàwǔ qù dǎqiú huòzhě qù páshān.', id: 'Sore nanti saya mau main bola atau mendaki gunung.' },
    ],
    tags: ['konjungsi', '或', '或者', 'pilihan'],
    level: 2,
  },

  {
    id: 'g2-030',
    title: 'Kata Sambung: 不过、但是、而且、那、如果、虽然、只要',
    titleZh: '连词：不过、但、但是、而且、那、如果、虽然、只要',
    pattern: '……，不过/但是/而且/虽然…… | 如果/只要……，就……',
    explanation: '不过 = namun (ringan); 但/但是 = tetapi; 而且 = dan juga; 那 = kalau begitu; 如果 = jika; 虽然 = meskipun; 只要 = asal saja.',
    examples: [
      { zh: '现在已经是冬天了，但北京还不太冷。', pinyin: 'Xiànzài yǐjīng shì dōngtiān le, dàn Běijīng hái bù tài lěng.', id: 'Sekarang sudah musim dingin, tetapi Beijing belum terlalu dingin.' },
      { zh: '你不去，那我就一个人去。', pinyin: 'Nǐ bù qù, nà wǒ jiù yīgèrén qù.', id: 'Kalau kamu tidak mau pergi, kalau begitu saya pergi sendiri.' },
    ],
    tags: ['konjungsi', '但是', '而且', '如果', '虽然', '只要'],
    level: 2,
  },

  // ── A.2.1.9 Partikel ────────────────────────────────────────

  {
    id: 'g2-031',
    title: 'Partikel Struktural: 得 (komplemen derajat)',
    titleZh: '结构助词：得',
    pattern: 'V + 得 + komplemen',
    explanation: '得 menghubungkan kata kerja dengan komplemen derajatnya. Berbeda dari 的 (kepemilikan) dan 地 (adverbia).',
    examples: [
      { zh: '他走得有点儿快。', pinyin: 'Tā zǒu de yǒudiǎnr kuài.', id: 'Dia berjalan agak cepat.' },
      { zh: '她篮球打得很不错。', pinyin: 'Tā lánqiú dǎ de hěn búcuò.', id: 'Dia bermain basket dengan cukup bagus.' },
    ],
    tags: ['partikel', '得', 'komplemen derajat'],
    level: 2,
  },

  {
    id: 'g2-032',
    title: 'Partikel Aspek: 过 (pengalaman)',
    titleZh: '动态助词：过（经历态）',
    pattern: 'V + 过 | 没 + V + 过',
    explanation: '过 menyatakan pengalaman — suatu tindakan pernah dilakukan. Negatif: 没 + V + 过 (belum pernah).',
    examples: [
      { zh: '我去过一次中国。', pinyin: 'Wǒ qù guo yī cì Zhōngguó.', id: 'Saya pernah pergi ke Tiongkok sekali.' },
      { zh: '他学过一点儿中文。', pinyin: 'Tā xué guo yīdiǎnr Zhōngwén.', id: 'Dia pernah belajar sedikit bahasa Mandarin.' },
      { zh: '我没去过中国。', pinyin: 'Wǒ méi qù guo Zhōngguó.', id: 'Saya belum pernah pergi ke Tiongkok.' },
    ],
    tags: ['partikel aspek', '过', 'pengalaman'],
    level: 2,
  },

  {
    id: 'g2-033',
    title: 'Partikel Aspek: 着 (keadaan berlanjut)',
    titleZh: '动态助词：着（持续状态）',
    pattern: 'V + 着 | 没 + V + 着',
    explanation: '着 menyatakan keadaan yang sedang berlangsung. Negatif: 没 + V + 着.',
    examples: [
      { zh: '门关着。', pinyin: 'Mén guān zhe.', id: 'Pintunya (dalam keadaan) tertutup.' },
      { zh: '电视开着呢。', pinyin: 'Diànshì kāi zhe ne.', id: 'TV-nya masih menyala.' },
      { zh: '他穿着一件黑大衣。', pinyin: 'Tā chuān zhe yī jiàn hēi dà yī.', id: 'Dia memakai mantel hitam.' },
      { zh: '孩子们在教室里高兴地唱着歌。', pinyin: 'Háizimen zài jiàoshì lǐ gāoxìng de chàng zhe gē.', id: 'Anak-anak bernyanyi dengan gembira di ruang kelas.' },
    ],
    tags: ['partikel aspek', '着', 'keadaan berlanjut'],
    level: 2,
  },

  {
    id: 'g2-034',
    title: 'Partikel Nada: 啊、吧、的',
    titleZh: '语气助词：啊、吧、的',
    pattern: '句子 + 啊/吧/的',
    explanation: '啊 = ekspresi kejutan/kagum; 吧 = meminta konfirmasi; 的 dalam "是……的" = menekankan waktu/tempat/cara.',
    examples: [
      { zh: '今天真冷啊！', pinyin: 'Jīntiān zhēn lěng a!', id: 'Hari ini sungguh dingin ya!' },
      { zh: '您是老师吧？', pinyin: 'Nín shì lǎoshī ba?', id: 'Anda adalah guru, bukan?' },
      { zh: '我是昨天来的。', pinyin: 'Wǒ shì zuótiān lái de.', id: 'Saya (memang) datang kemarin. (menekankan waktu)' },
    ],
    tags: ['partikel nada', '啊', '吧', '的'],
    level: 2,
  },

  {
    id: 'g2-035',
    title: 'Partikel Lain: 的话 (kalau)、等 (dsb.)',
    titleZh: '其他助词：的话、等',
    pattern: '条件 + 的话，…… | daftar + 等',
    explanation: '的话 = kalau/jika; 等 = dan lain-lain/dsb (setelah daftar).',
    examples: [
      { zh: '你要来的话，就给我打个电话。', pinyin: 'Nǐ yào lái de huà, jiù gěi wǒ dǎ gè diànhuà.', id: 'Kalau kamu mau datang, telepon saya dulu.' },
      { zh: '我去超市买了很多东西，有酒、水果、牛奶等。', pinyin: 'Wǒ qù chāoshì mǎi le hěn duō dōngxi, yǒu jiǔ, shuǐguǒ, niúnǎi děng.', id: 'Saya membeli banyak barang: wine, buah, susu, dsb.' },
    ],
    tags: ['partikel', '的话', '等', 'kondisi'],
    level: 2,
  },

  {
    id: 'g2-036',
    title: 'Kata Seru: 喂 (halo/hey)',
    titleZh: '叹词：喂',
    pattern: '喂，……',
    explanation: '喂 = halo (di telepon) / hey (memanggil). Digunakan saat menelepon atau memanggil perhatian.',
    examples: [
      { zh: '喂，是王老师吗？', pinyin: 'Wèi, shì Wáng lǎoshī ma?', id: 'Halo, apakah ini Bu Wang?' },
      { zh: '喂，您找哪位？', pinyin: 'Wèi, nín zhǎo nǎ wèi?', id: 'Halo, Anda mencari siapa?' },
    ],
    tags: ['kata seru', '喂', 'telepon'],
    level: 2,
  },

  // ════════════════════════════════════════════════════════════
  // A.2.2 FRASA (短语)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g2-037',
    title: 'Tipe Struktur Frasa Dasar',
    titleZh: '基本结构类型',
    pattern: '联合 / 偏正 / 动宾 / 动补 / 主谓',
    explanation: 'Lima tipe frasa: (1) Koordinatif; (2) Modifikatif; (3) Verba-Objek; (4) Verba-Komplemen; (5) Subjek-Predikat.',
    examples: [
      { zh: '北京上海 / 我和他', pinyin: 'Běijīng Shànghǎi / Wǒ hé tā', id: '(Koordinatif) Beijing Shanghai / saya dan dia' },
      { zh: '新衣服 / 学校的图书馆', pinyin: 'Xīn yīfu / xuéxiào de túshūguǎn', id: '(Modifikatif) baju baru / perpustakaan sekolah' },
      { zh: '买东西 / 学习中文', pinyin: 'Mǎi dōngxi / xuéxí Zhōngwén', id: '(V-O) berbelanja / belajar bahasa Mandarin' },
      { zh: '听清楚 / 说得很高兴', pinyin: 'Tīng qīngchǔ / shuō de hěn gāoxìng', id: '(V-Komp) mendengar jelas / bicara gembira' },
      { zh: '他出国 / 教室很大', pinyin: 'Tā chūguó / jiàoshì hěn dà', id: '(S-P) dia pergi ke luar negeri / kelas sangat besar' },
    ],
    tags: ['frasa', 'struktur dasar', 'tipe frasa'],
    level: 2,
  },

  {
    id: 'g2-038',
    title: 'Frasa "的" dan Frasa Verba Berantai',
    titleZh: '"的"字短语 / 连谓短语',
    pattern: '……的 + (N) | V1 + V2 (berantai)',
    explanation: '"的" membentuk frasa nominal. Frasa verba berantai (连谓短语) = dua aksi berurutan dari subjek yang sama.',
    examples: [
      { zh: '黑的 / 吃的 / 他买的', pinyin: 'hēi de / chī de / tā mǎi de', id: 'yang hitam / yang dimakan / yang dibeli dia' },
      { zh: '去买东西', pinyin: 'qù mǎi dōngxi', id: 'pergi membeli barang (V1 → V2)' },
      { zh: '坐飞机去北京', pinyin: 'zuò fēijī qù Běijīng', id: 'naik pesawat pergi ke Beijing' },
    ],
    tags: ['frasa 的', 'verba berantai', '连谓'],
    level: 2,
  },

  // ════════════════════════════════════════════════════════════
  // A.2.3 POLA TETAP (固定格式)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g2-039',
    title: 'Pola Tetap: 不一会儿……就…… (tidak lama kemudian)',
    titleZh: '固定短语：不一会儿',
    pattern: '不一会儿，就 + V',
    explanation: '不一会儿 = tidak lama kemudian. Menyatakan waktu sangat singkat antara dua kejadian.',
    examples: [
      { zh: '今天的作业我不一会儿就做完了。', pinyin: 'Jīntiān de zuòyè wǒ bù yīhuìr jiù zuò wán le.', id: 'PR hari ini tidak lama kemudian langsung selesai.' },
      { zh: '我们走到车站，不一会儿，公交车就来了。', pinyin: 'Wǒmen zǒu dào chēzhàn, bù yīhuìr, gōngjiāochē jiù lái le.', id: 'Kami berjalan ke halte, tidak lama kemudian bus langsung datang.' },
    ],
    tags: ['pola tetap', '不一会儿', 'waktu singkat'],
    level: 2,
  },

  {
    id: 'g2-040',
    title: 'Pola Tetap: ……什么的 (dan sebagainya)',
    titleZh: '固定短语：什么的',
    pattern: 'daftar + 什么的',
    explanation: '什么的 di akhir daftar = dan sebagainya/dll. Menyatakan daftar tidak habis.',
    examples: [
      { zh: '考试前多做点儿练习什么的。', pinyin: 'Kǎoshì qián duō zuò diǎnr liànxí shénme de.', id: 'Sebelum ujian perbanyak latihan soal dan sebagainya.' },
      { zh: '我去超市买了一些水果、面包什么的。', pinyin: 'Wǒ qù chāoshì mǎi le yīxiē shuǐguǒ, miànbāo shénme de.', id: 'Saya membeli buah, roti, dan lain-lain di supermarket.' },
    ],
    tags: ['pola tetap', '什么的', 'dan seterusnya'],
    level: 2,
  },

  {
    id: 'g2-041',
    title: 'Pola Tetap: 越来越…… (semakin)',
    titleZh: '固定短语：越来越',
    pattern: '越来越 + Adj/V',
    explanation: '越来越 = semakin; makin lama makin. Menyatakan perubahan bertahap yang terus berlangsung.',
    examples: [
      { zh: '天气越来越热了。', pinyin: 'Tiānqì yuèláiyuè rè le.', id: 'Cuaca semakin panas.' },
      { zh: '我越来越喜欢学习中文。', pinyin: 'Wǒ yuèláiyuè xǐhuan xuéxí Zhōngwén.', id: 'Saya semakin suka belajar bahasa Mandarin.' },
    ],
    tags: ['pola tetap', '越来越', 'perubahan bertahap'],
    level: 2,
  },

  {
    id: 'g2-042',
    title: 'Pola Tetap: 还是……吧 (lebih baik)',
    titleZh: '固定格式：还是……吧',
    pattern: '还是 + V + 吧',
    explanation: '还是……吧 = lebih baik.../sebaiknya.... Digunakan untuk memberikan saran.',
    examples: [
      { zh: '打车太贵了，你还是坐地铁吧。', pinyin: 'Dǎchē tài guì le, nǐ háishi zuò dìtiě ba.', id: 'Naik taksi terlalu mahal, lebih baik kamu naik MRT.' },
      { zh: '外边下雨了，我们还是在房间看电视吧。', pinyin: 'Wàibian xià yǔ le, wǒmen háishi zài fángjiān kàn diànshì ba.', id: 'Di luar hujan, lebih baik kita nonton TV di kamar saja.' },
    ],
    tags: ['pola tetap', '还是', 'saran'],
    level: 2,
  },

  {
    id: 'g2-043',
    title: 'Pola Tetap: 又……又…… (sekaligus / dan juga)',
    titleZh: '固定格式：又……又……',
    pattern: '又 + A + 又 + B',
    explanation: '又……又…… = sekaligus A dan juga B. Dua kondisi berlaku bersamaan.',
    examples: [
      { zh: '这个饭馆的菜又好吃又便宜。', pinyin: 'Zhège fànguǎn de cài yòu hǎochī yòu piányi.', id: 'Masakan restoran ini enak sekaligus murah.' },
      { zh: '这双球鞋又贵又不好看。', pinyin: 'Zhè shuāng qiúxié yòu guì yòu bù hǎokàn.', id: 'Sepatu olahraga ini mahal sekaligus tidak bagus.' },
    ],
    tags: ['pola tetap', '又...又...', 'dua kondisi'],
    level: 2,
  },

  {
    id: 'g2-044',
    title: 'Pola Tetap: (在)……以前/以后 (sebelum/setelah)',
    titleZh: '固定格式：（在）……以前/以后/前/后',
    pattern: '(在) + waktu/V + 以前/以后',
    explanation: '(在)……以前 = sebelum; (在)……以后 = setelah. Menyatakan urutan waktu.',
    examples: [
      { zh: '在来中国以前，我只学过一点儿中文。', pinyin: 'Zài lái Zhōngguó yǐqián, wǒ zhǐ xué guo yīdiǎnr Zhōngwén.', id: 'Sebelum datang ke Tiongkok, saya hanya pernah belajar sedikit bahasa Mandarin.' },
      { zh: '吃完午饭以后，我常常会休息一会儿。', pinyin: 'Chī wán wǔfàn yǐhòu, wǒ chángcháng huì xiūxi yīhuìr.', id: 'Setelah selesai makan siang, saya biasanya akan istirahat sebentar.' },
    ],
    tags: ['pola tetap', '以前', '以后', 'urutan waktu'],
    level: 2,
  },

  // ════════════════════════════════════════════════════════════
  // A.2.4 KOMPONEN KALIMAT (句子成分)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g2-045',
    title: 'Predikat Nominal: Nomina/Bilangan sebagai Predikat',
    titleZh: '名词、数词作谓语',
    pattern: 'S + 名词/数词 (tanpa 是)',
    explanation: 'Dalam bahasa Mandarin, nomina atau bilangan bisa langsung jadi predikat tanpa 是. Umum untuk waktu, usia, harga.',
    examples: [
      { zh: '今天晴天。', pinyin: 'Jīntiān qíngtiān.', id: 'Hari ini cerah.' },
      { zh: '明天星期五。', pinyin: 'Míngtiān xīngqīwǔ.', id: 'Besok hari Jumat.' },
      { zh: '他四十，女儿十六。', pinyin: 'Tā sìshí, nǚ\'ér shíliù.', id: 'Dia empat puluh, putrinya enam belas.' },
      { zh: '这本中文书二十五块。', pinyin: 'Zhè běn Zhōngwén shū èrshíwǔ kuài.', id: 'Buku bahasa Mandarin ini dua puluh lima yuan.' },
    ],
    tags: ['predikat nominal', 'tanpa 是', 'usia', 'waktu'],
    level: 2,
  },

  {
    id: 'g2-046',
    title: 'Komplemen Hasil 1: V + 错/懂/干净/好/会/清楚/完',
    titleZh: '结果补语1：动词+错/懂/干净/好/会/清楚/完',
    pattern: 'V + 错/懂/干净/好/会/清楚/完',
    explanation: 'Komplemen hasil menyatakan hasil yang dicapai dari tindakan. Negatif: 没 + V + 补语.',
    examples: [
      { zh: '你写错了两个汉字。', pinyin: 'Nǐ xiě cuò le liǎng gè Hànzì.', id: 'Kamu salah menulis dua karakter Hanzi.' },
      { zh: '这个句子我没看懂。', pinyin: 'Zhège jùzi wǒ méi kàn dǒng.', id: 'Kalimat ini saya tidak mengerti setelah membacanya.' },
      { zh: '衣服我洗干净了。', pinyin: 'Yīfu wǒ xǐ gānjìng le.', id: 'Baju sudah saya cuci bersih.' },
      { zh: '你听清楚老师的话了吗？', pinyin: 'Nǐ tīng qīngchǔ lǎoshī de huà le ma?', id: 'Apakah kamu sudah mendengar dengan jelas perkataan guru?' },
    ],
    tags: ['komplemen hasil', '错', '懂', '干净', '好', '会', '清楚', '完'],
    level: 2,
  },

  {
    id: 'g2-047',
    title: 'Komplemen Arah 1: V + 来/去 dan V + 上/下/进/出/回/过/起 + 来/去',
    titleZh: '趋向补语1：简单趋向补语',
    pattern: 'V + 来/去 | V + 上/下/进/出/回/过/起 + 来/去',
    explanation: 'Komplemen arah menyatakan arah gerak dari tindakan. 来 = ke sini; 去 = ke sana. Dapat dikombinasikan: 上来, 下去, 进来, 出去, 回来, dll.',
    examples: [
      { zh: '你看，他向这边走来了。', pinyin: 'Nǐ kàn, tā xiàng zhèbiān zǒu lái le.', id: 'Lihat, dia berjalan ke sini.' },
      { zh: '爸爸从车上拿下电脑，放回房间。', pinyin: 'Bàba cóng chē shàng ná xià diànnǎo, fàng huí fángjiān.', id: 'Ayah mengambil laptop dari mobil, menaruhnya kembali ke kamar.' },
      { zh: '妈妈走上二楼，从包里拿出一封信。', pinyin: 'Māma zǒu shàng èr lóu, cóng bāo lǐ ná chū yī fēng xìn.', id: 'Ibu naik ke lantai dua, mengeluarkan sepucuk surat dari tas.' },
    ],
    tags: ['komplemen arah', '来', '去', '上', '下', '进', '出', '回'],
    level: 2,
  },

  {
    id: 'g2-048',
    title: 'Komplemen Status: V + 得 + Adj (keadaan hasil)',
    titleZh: '状态补语1：动词+得+形容词性词语',
    pattern: 'V + 得 + Adj/frasa',
    explanation: 'Komplemen status menyatakan keadaan/kondisi hasil dari tindakan. Mirip komplemen derajat, tapi lebih mendeskripsikan kondisi.',
    examples: [
      { zh: '她跑得很快。', pinyin: 'Tā pǎo de hěn kuài.', id: 'Dia berlari dengan sangat cepat.' },
      { zh: '我们玩儿得很高兴。', pinyin: 'Wǒmen wánr de hěn gāoxìng.', id: 'Kami bermain dengan sangat gembira.' },
    ],
    tags: ['komplemen status', '得', 'keadaan hasil'],
    level: 2,
  },

  {
    id: 'g2-049',
    title: 'Komplemen Kuantitas: Adj + 数量补语',
    titleZh: '数量补语2：形容词+数量补语',
    pattern: 'A + 比 + B + Adj + 数量补语',
    explanation: 'Komplemen kuantitas setelah adjektif dalam kalimat perbandingan menyatakan selisih yang tepat.',
    examples: [
      { zh: '我比弟弟大两岁。', pinyin: 'Wǒ bǐ dìdi dà liǎng suì.', id: 'Saya lebih tua dua tahun dari adik.' },
      { zh: '昨天很热，今天凉快一点儿。', pinyin: 'Zuótiān hěn rè, jīntiān liángkuai yīdiǎnr.', id: 'Kemarin sangat panas, hari ini sedikit lebih sejuk.' },
      { zh: '她的中文比我流利一些。', pinyin: 'Tā de Zhōngwén bǐ wǒ liúlì yīxiē.', id: 'Bahasa Mandarinnya lebih fasih sedikit dari saya.' },
    ],
    tags: ['komplemen kuantitas', 'perbandingan', 'selisih'],
    level: 2,
  },

  // ════════════════════════════════════════════════════════════
  // A.2.5 TIPE KALIMAT (句子的类型)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g2-050',
    title: 'Kalimat 有 2: Menyatakan Perkiraan/Perbandingan',
    titleZh: '"有"字句2：表示评价、达到、比较',
    pattern: 'S + 有 + ukuran/usia | A + 有 + B + (这么/那么) + Adj',
    explanation: '有 bisa menyatakan perkiraan ukuran/usia, atau perbandingan kesetaraan.',
    examples: [
      { zh: '他有一米八高。', pinyin: 'Tā yǒu yī mǐ bā gāo.', id: 'Tingginya sekitar satu koma delapan meter.' },
      { zh: '他有三十多岁。', pinyin: 'Tā yǒu sānshí duō suì.', id: 'Usianya sekitar lebih dari tiga puluh tahun.' },
      { zh: '你哥哥有你那么高吗？', pinyin: 'Nǐ gēge yǒu nǐ nàme gāo ma?', id: 'Apakah kakakmu setinggi kamu?' },
    ],
    tags: ['有字句', 'perkiraan', 'perbandingan kesetaraan'],
    level: 2,
  },

  {
    id: 'g2-051',
    title: 'Kalimat Eksistensial: 处所 + V + 着 + N',
    titleZh: '存现句1：处所+动词+着+名词',
    pattern: '处所 + V + 着 + (数量) + N',
    explanation: 'Kalimat eksistensial menyatakan ada sesuatu di suatu tempat dalam kondisi tertentu.',
    examples: [
      { zh: '桌子上放着一本词典。', pinyin: 'Zhuōzi shàng fàng zhe yī běn cídiǎn.', id: 'Di atas meja terdapat sebuah kamus.' },
      { zh: '教室前边站着一位老师。', pinyin: 'Jiàoshì qiánbian zhàn zhe yī wèi lǎoshī.', id: 'Di depan kelas berdiri seorang guru.' },
    ],
    tags: ['kalimat eksistensial', '存现句', '着'],
    level: 2,
  },

  {
    id: 'g2-052',
    title: 'Kalimat Verba Berantai 1: Dua Tindakan Berurutan',
    titleZh: '连动句1：前后动作先后发生',
    pattern: 'S + V1 + (O1) + V2 + (O2)',
    explanation: 'Dua kata kerja dari satu subjek, menyatakan tindakan yang terjadi berurutan.',
    examples: [
      { zh: '他开门出去了。', pinyin: 'Tā kāi mén chūqù le.', id: 'Dia membuka pintu lalu keluar.' },
      { zh: '我们吃完饭去图书馆吧。', pinyin: 'Wǒmen chī wán fàn qù túshūguǎn ba.', id: 'Ayo kita makan dulu baru pergi ke perpustakaan.' },
    ],
    tags: ['verba berantai', '连动句', 'berurutan'],
    level: 2,
  },

  {
    id: 'g2-053',
    title: 'Kalimat Perbandingan 2: A比B、A不如B、A有B那么',
    titleZh: '比较句2：A比B+形容词、A不如B、A有B那么+形容词',
    pattern: 'A + 比 + B + Adj | A + 不如 + B | A + 有 + B + 那么 + Adj',
    explanation: 'A比B+Adj = A lebih ... dari B; A不如B = A tidak sebaik B; A有B那么 = A sama ... nya dengan B.',
    examples: [
      { zh: '他的手机比我的更贵。', pinyin: 'Tā de shǒujī bǐ wǒ de gèng guì.', id: 'HP-nya lebih mahal dari milik saya.' },
      { zh: '我的中文成绩不如班长。', pinyin: 'Wǒ de Zhōngwén chéngjì bùrú bānzhǎng.', id: 'Nilai bahasa Mandarin saya tidak sebaik ketua kelas.' },
      { zh: '火车不如飞机快。', pinyin: 'Huǒchē bùrú fēijī kuài.', id: 'Kereta tidak secepat pesawat.' },
    ],
    tags: ['perbandingan', '比', '不如', '有那么'],
    level: 2,
  },

  {
    id: 'g2-054',
    title: 'Kalimat Perbandingan 3: A跟B一样 (sama dengan)',
    titleZh: '比较句3：A跟B一样/不一样/一样+形容词',
    pattern: 'A + 跟 + B + 一样/不一样 (+ Adj)',
    explanation: 'A跟B一样 = A sama dengan B; A跟B不一样 = A berbeda dengan B; A跟B一样+Adj = A sama [sifat]-nya dengan B.',
    examples: [
      { zh: '我的爱好跟姐姐一样。', pinyin: 'Wǒ de àihào gēn jiějie yīyàng.', id: 'Hobi saya sama dengan kakak perempuan.' },
      { zh: '哥哥的手机跟我的不一样。', pinyin: 'Gēge de shǒujī gēn wǒ de bù yīyàng.', id: 'HP kakak tidak sama dengan milik saya.' },
      { zh: '姐姐跟妹妹一样可爱。', pinyin: 'Jiějie gēn mèimei yīyàng kě\'ài.', id: 'Kakak perempuan sama cantiknya dengan adik perempuan.' },
    ],
    tags: ['perbandingan', '一样', '跟', '不一样'],
    level: 2,
  },

  {
    id: 'g2-055',
    title: 'Kalimat "是……的" 1: Menekankan Waktu/Tempat/Cara',
    titleZh: '"是……的"句1：强调时间、地点、方式、动作者',
    pattern: '是 + waktu/tempat/cara + V + 的',
    explanation: '"是……的" menekankan KAPAN, DI MANA, DENGAN CARA APA, atau SIAPA yang melakukan tindakan yang sudah terjadi.',
    examples: [
      { zh: '我是昨天到北京的。', pinyin: 'Wǒ shì zuótiān dào Běijīng de.', id: 'Saya tiba di Beijing kemarin. (menekankan waktu)' },
      { zh: '他是在网上买的手机。', pinyin: 'Tā shì zài wǎngshàng mǎi de shǒujī.', id: 'Dia membeli HP secara online. (menekankan tempat)' },
      { zh: '我们是坐飞机来的。', pinyin: 'Wǒmen shì zuò fēijī lái de.', id: 'Kami datang dengan pesawat. (menekankan cara)' },
      { zh: '这件事是老师告诉我的。', pinyin: 'Zhè jiàn shì shì lǎoshī gàosu wǒ de.', id: 'Hal ini yang memberitahu saya adalah guru. (menekankan pelaku)' },
    ],
    tags: ['是...的', 'penekanan', 'waktu', 'cara', 'tempat'],
    level: 2,
  },

  {
    id: 'g2-056',
    title: 'Kalimat Objek Ganda',
    titleZh: '双宾语句',
    pattern: 'S + V + 宾语(orang) + 宾语(benda) | S + V + 给 + 宾语(orang) + 宾语(benda)',
    explanation: 'Kata kerja seperti 给、送、借、教 bisa punya dua objek: objek orang + objek benda.',
    examples: [
      { zh: '我给妹妹一本书。', pinyin: 'Wǒ gěi mèimei yī běn shū.', id: 'Saya memberikan adik perempuan sebuah buku.' },
      { zh: '朋友借给我一千块钱。', pinyin: 'Péngyou jiè gěi wǒ yī qiān kuài qián.', id: 'Teman meminjamkan saya uang seribu yuan.' },
      { zh: '姐姐送给我一个手机。', pinyin: 'Jiějie sòng gěi wǒ yī gè shǒujī.', id: 'Kakak perempuan menghadiahi saya sebuah HP.' },
    ],
    tags: ['objek ganda', '双宾语', '给', '送'],
    level: 2,
  },

  // ── A.2.5.3 Kalimat Majemuk (复句) ──────────────────────────

  {
    id: 'g2-057',
    title: 'Kalimat Majemuk Berurutan: 先……再/然后……',
    titleZh: '承接复句：先……，再/然后……',
    pattern: '先 + V1，再/然后 + V2',
    explanation: '先……再/然后…… = pertama A, lalu B. Menyatakan urutan tindakan.',
    examples: [
      { zh: '你先去超市买东西，再回家。', pinyin: 'Nǐ xiān qù chāoshì mǎi dōngxi, zài huí jiā.', id: 'Kamu pergi dulu ke supermarket belanja, baru pulang.' },
      { zh: '我先去吃午饭，然后回房间休息。', pinyin: 'Wǒ xiān qù chī wǔfàn, ránhòu huí fángjiān xiūxi.', id: 'Saya makan siang dulu, kemudian kembali ke kamar istirahat.' },
    ],
    tags: ['kalimat majemuk', '先...再...', '然后', 'berurutan'],
    level: 2,
  },

  {
    id: 'g2-058',
    title: 'Kalimat Majemuk Progresif: 不但……而且……',
    titleZh: '递进复句：……，更/还……；不但……，而且……',
    pattern: '不但/不仅 + A，而且/还 + B | ……，更/还……',
    explanation: '不但……而且…… = tidak hanya A, bahkan juga B. Menyatakan progresivitas.',
    examples: [
      { zh: '昨天很冷，今天更冷了。', pinyin: 'Zuótiān hěn lěng, jīntiān gèng lěng le.', id: 'Kemarin sangat dingin, hari ini lebih dingin lagi.' },
      { zh: '班长学习很好，还经常帮助同学。', pinyin: 'Bānzhǎng xuéxí hěn hǎo, hái jīngcháng bāngzhù tóngxué.', id: 'Ketua kelas nilainya bagus, dan juga sering membantu teman.' },
      { zh: '她不但会说中文，而且说得很好。', pinyin: 'Tā búdàn huì shuō Zhōngwén, érqiě shuō de hěn hǎo.', id: 'Dia tidak hanya bisa berbicara bahasa Mandarin, bahkan sangat lancar.' },
    ],
    tags: ['majemuk progresif', '不但...而且...', '更', '还'],
    level: 2,
  },

  {
    id: 'g2-059',
    title: 'Kalimat Majemuk Pilihan: (是)……还是……',
    titleZh: '选择复句：（是）……，还是……',
    pattern: '(是) A，还是 B？',
    explanation: 'Menyatakan pilihan antara dua kemungkinan. 还是 di kalimat tanya = "atau".',
    examples: [
      { zh: '你是坐火车来的，还是坐飞机来的？', pinyin: 'Nǐ shì zuò huǒchē lái de, háishi zuò fēijī lái de?', id: 'Kamu datang naik kereta atau pesawat?' },
      { zh: '周末你们想去打排球，还是想去打篮球？', pinyin: 'Zhōumò nǐmen xiǎng qù dǎ páiqiú, háishi xiǎng qù dǎ lánqiú?', id: 'Akhir pekan kalian mau main voli atau basket?' },
    ],
    tags: ['majemuk pilihan', '还是', 'pertanyaan pilihan'],
    level: 2,
  },

  {
    id: 'g2-060',
    title: 'Kalimat Majemuk Kontrastif: 虽然……但是/可是/不过……',
    titleZh: '转折复句：虽然……，但是/可是……，不过……',
    pattern: '虽然 + A，但是/可是/不过 + B',
    explanation: '虽然 = meskipun; 但是/可是 = namun/tetapi; 不过 = tapi (lebih ringan).',
    examples: [
      { zh: '那个公园虽然不大，但是非常漂亮。', pinyin: 'Nàge gōngyuán suīrán bù dà, dànshì fēicháng piàoliang.', id: 'Taman itu meskipun tidak besar, namun sangat indah.' },
      { zh: '这个房间不太大，不过住着很舒服。', pinyin: 'Zhège fángjiān bù tài dà, búguò zhù zhe hěn shūfu.', id: 'Kamar ini tidak terlalu besar, tapi nyaman untuk ditinggali.' },
    ],
    tags: ['majemuk kontrastif', '虽然', '但是', '可是', '不过'],
    level: 2,
  },

  {
    id: 'g2-061',
    title: 'Kalimat Majemuk Kondisional: 如果/要是……就……',
    titleZh: '假设复句：如果……就……；……的话，就……',
    pattern: '如果/要是 + A，就 + B | A + 的话，就 + B',
    explanation: '如果/要是 = jika/apabila; 就 = maka. Atau dengan "……的话，就……".',
    examples: [
      { zh: '如果你下午有时间，我们就一起去超市吧。', pinyin: 'Rúguǒ nǐ xiàwǔ yǒu shíjiān, wǒmen jiù yīqǐ qù chāoshì ba.', id: 'Jika kamu punya waktu sore ini, ayo kita pergi ke supermarket bersama.' },
      { zh: '明天天气不好的话，我就不去公园了。', pinyin: 'Míngtiān tiānqì bù hǎo de huà, wǒ jiù bù qù gōngyuán le.', id: 'Kalau cuaca besok tidak bagus, saya tidak jadi pergi ke taman.' },
    ],
    tags: ['majemuk kondisional', '如果', '要是', '就', '的话'],
    level: 2,
  },

  {
    id: 'g2-062',
    title: 'Kalimat Majemuk Syarat: 只要……就……',
    titleZh: '条件复句：只要……，就……',
    pattern: '只要 + syarat，就 + akibat',
    explanation: '只要……就…… = asal saja.../selama.... Jika syarat terpenuhi, hasil pasti terjadi.',
    examples: [
      { zh: '只要你认真学习，就一定能取得好成绩。', pinyin: 'Zhǐyào nǐ rènzhēn xuéxí, jiù yīdìng néng qǔdé hǎo chéngjì.', id: 'Asal kamu belajar dengan serius, pasti bisa mendapatkan nilai bagus.' },
      { zh: '只要你通过这次考试，我就送你一件礼物。', pinyin: 'Zhǐyào nǐ tōngguò zhè cì kǎoshì, wǒ jiù sòng nǐ yī jiàn lǐwù.', id: 'Selama kamu lulus ujian ini, saya akan memberi kamu hadiah.' },
    ],
    tags: ['syarat', '只要...就...', 'kondisional'],
    level: 2,
  },

  {
    id: 'g2-063',
    title: 'Kalimat Majemuk Sebab-Akibat: 因为……所以……',
    titleZh: '因果复句：因为……，所以……',
    pattern: '因为 + sebab，所以 + akibat',
    explanation: '因为 = karena; 所以 = oleh sebab itu/maka. Keduanya bisa dipakai bersama atau terpisah.',
    examples: [
      { zh: '因为很累，所以我今天不想做饭了。', pinyin: 'Yīnwèi hěn lèi, suǒyǐ wǒ jīntiān bù xiǎng zuòfàn le.', id: 'Karena sangat lelah, maka hari ini saya tidak mau memasak.' },
      { zh: '因为明天有考试，所以我想早一点儿睡觉。', pinyin: 'Yīnwèi míngtiān yǒu kǎoshì, suǒyǐ wǒ xiǎng zǎo yīdiǎnr shuìjiào.', id: 'Karena besok ada ujian, saya mau tidur lebih awal.' },
    ],
    tags: ['sebab-akibat', '因为', '所以'],
    level: 2,
  },

  {
    id: 'g2-064',
    title: 'Kalimat Majemuk Ringkas: 一……就……',
    titleZh: '紧缩复句：一……就……',
    pattern: '一 + V1，就 + V2',
    explanation: '一……就…… = begitu A, langsung B. Menyatakan dua tindakan berturut-turut sangat cepat.',
    examples: [
      { zh: '他一起床就去洗脸。', pinyin: 'Tā yī qǐchuáng jiù qù xǐliǎn.', id: 'Begitu dia bangun, langsung pergi cuci muka.' },
      { zh: '我一喝酒就脸红。', pinyin: 'Wǒ yī hējiǔ jiù liǎn hóng.', id: 'Begitu saya minum alkohol, langsung muka merah.' },
    ],
    tags: ['majemuk ringkas', '一...就...', 'berturut-turut'],
    level: 2,
  },

  // ════════════════════════════════════════════════════════════
  // A.2.6 ASPEK TINDAKAN (动作的态)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g2-065',
    title: 'Aspek Kelanjutan: V + 着',
    titleZh: '持续态：动词+着',
    pattern: 'V + 着 (keadaan) | V + 着 + O + 呢 (tindakan)',
    explanation: '着 menyatakan: (1) keadaan yang berlanjut; (2) tindakan yang sedang berlangsung bersamaan. Negatif: 没 + V + 着.',
    examples: [
      { zh: '灯一直亮着。', pinyin: 'Dēng yīzhí liàng zhe.', id: 'Lampu terus menyala.' },
      { zh: '电脑开着。', pinyin: 'Diànnǎo kāi zhe.', id: 'Komputer masih menyala.' },
      { zh: '外边下着雪呢。', pinyin: 'Wàibian xià zhe xuě ne.', id: 'Di luar sedang turun salju.' },
      { zh: '他们说着、笑着，不一会儿就到学校了。', pinyin: 'Tāmen shuō zhe, xiào zhe, bù yīhuìr jiù dào xuéxiào le.', id: 'Sambil berbicara dan tertawa, tidak lama kemudian mereka sudah sampai di sekolah.' },
    ],
    tags: ['aspek', '着', 'kelanjutan', 'keadaan'],
    level: 2,
  },

  {
    id: 'g2-066',
    title: 'Aspek Pengalaman: V + 过',
    titleZh: '经历态：用动态助词"过"表示',
    pattern: 'V + 过 | 没 + V + 过',
    explanation: '过 menyatakan pengalaman (pernah dilakukan). Negatif: 没 + V + 过 = belum pernah.',
    examples: [
      { zh: '他学过中文。', pinyin: 'Tā xué guo Zhōngwén.', id: 'Dia pernah belajar bahasa Mandarin.' },
      { zh: '我吃过饺子。', pinyin: 'Wǒ chī guo jiǎozi.', id: 'Saya pernah makan pangsit.' },
      { zh: '我没吃过饺子。', pinyin: 'Wǒ méi chī guo jiǎozi.', id: 'Saya belum pernah makan pangsit.' },
    ],
    tags: ['aspek', '过', 'pengalaman'],
    level: 2,
  },

  // ════════════════════════════════════════════════════════════
  // A.2.7 CARA UNGKAPAN KHUSUS (特殊表达法)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g2-067',
    title: 'Bilangan Urut: 第 + angka',
    titleZh: '序数表示法',
    pattern: '第 + 数 (+ 量) | angka + 量 (tanpa 第)',
    explanation: 'Bilangan urut dibentuk dengan 第 + angka. Untuk nomor lantai, kamar, nomor bus sering tanpa 第.',
    examples: [
      { zh: '第一 / 第三', pinyin: 'Dì yī / Dì sān', id: 'pertama / ketiga' },
      { zh: '13号楼 / 205房间', pinyin: 'Shísān hào lóu / Liǎng líng wǔ fángjiān', id: 'Gedung nomor 13 / kamar 205' },
      { zh: '302路公交车', pinyin: 'Sān líng èr lù gōngjiāochē', id: 'Bus jalur 302' },
    ],
    tags: ['bilangan urut', '第', 'ordinal'],
    level: 2,
  },

  {
    id: 'g2-068',
    title: 'Bilangan Perkiraan: 数词+多+量词 / 数词+量词+多',
    titleZh: '概数表示法1',
    pattern: '数 + 多 + 量 | 数 + 量 + 多',
    explanation: '数+多+量 = lebih dari angka itu; 数+量+多 = angka dan sedikit lebih.',
    examples: [
      { zh: '三十多本', pinyin: 'sānshí duō běn', id: 'lebih dari tiga puluh buku' },
      { zh: '十多斤', pinyin: 'shí duō jīn', id: 'lebih dari sepuluh jin' },
      { zh: '三块多', pinyin: 'sān kuài duō', id: 'tiga yuan lebih (3-sekian yuan)' },
    ],
    tags: ['bilangan perkiraan', '多', 'lebih dari'],
    level: 2,
  },

  // ════════════════════════════════════════════════════════════
  // A.2.8 PENEKANAN (强调的方法)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g2-069',
    title: 'Penekanan dengan 就',
    titleZh: '用"就"表示强调',
    pattern: '……就……',
    explanation: '就 dalam konteks penekanan = tepat/persis/justru. Menekankan lokasi, identitas, atau fakta.',
    examples: [
      { zh: '教学楼就在前边。', pinyin: 'Jiàoxuélóu jiù zài qiánbian.', id: 'Gedung kelas tepat ada di depan.' },
      { zh: '你看，这就是我们上课的教室。', pinyin: 'Nǐ kàn, zhè jiù shì wǒmen shàngkè de jiàoshì.', id: 'Lihat, inilah ruang kelas tempat kita belajar.' },
    ],
    tags: ['penekanan', '就', 'persis'],
    level: 2,
  },

  // ════════════════════════════════════════════════════════════
  // A.2.9 CARA BERTANYA (提问的方法)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g2-070',
    title: 'Bertanya Halus: 好吗、可以吗、行吗、怎么样',
    titleZh: '用"好吗、可以吗、行吗、怎么样"提问',
    pattern: '句子 + 好吗/可以吗/行吗/怎么样？',
    explanation: 'Menambahkan 好吗/可以吗/行吗/怎么样 di akhir untuk meminta persetujuan secara sopan.',
    examples: [
      { zh: '我们明天八点出发，好吗？', pinyin: 'Wǒmen míngtiān bā diǎn chūfā, hǎo ma?', id: 'Kita berangkat besok pukul delapan, boleh?' },
      { zh: '你的词典借我用用，行吗？', pinyin: 'Nǐ de cídiǎn jiè wǒ yòng yong, xíng ma?', id: 'Boleh saya pinjam kamusmu?' },
      { zh: '我们今天吃面条儿，怎么样？', pinyin: 'Wǒmen jīntiān chī miàntiáor, zěnmeyàng?', id: 'Kita makan mie hari ini, bagaimana?' },
    ],
    tags: ['bertanya sopan', '好吗', '可以吗', '行吗', '怎么样'],
    level: 2,
  },

  {
    id: 'g2-071',
    title: 'Bertanya: 什么时候、什么样、为什么、怎么样、怎样',
    titleZh: '用"什么时候、什么样、为什么、怎么样、怎样"提问',
    pattern: '什么时候/什么样/为什么/怎么样/怎样 + ……',
    explanation: '什么时候 = kapan; 什么样 = seperti apa; 为什么 = mengapa; 怎么样 = bagaimana kondisi; 怎样 = bagaimana caranya.',
    examples: [
      { zh: '你们什么时候见面？', pinyin: 'Nǐmen shénme shíhou jiànmiàn?', id: 'Kapan kalian bertemu?' },
      { zh: '你喜欢什么样的朋友？', pinyin: 'Nǐ xǐhuan shénme yàng de péngyou?', id: 'Kamu suka teman yang seperti apa?' },
      { zh: '你为什么没去上课？', pinyin: 'Nǐ wèishénme méi qù shàngkè?', id: 'Mengapa kamu tidak pergi ke kelas?' },
    ],
    tags: ['bertanya', '什么时候', '什么样', '为什么'],
    level: 2,
  },

  {
    id: 'g2-072',
    title: 'Kalimat Tanya Elips: kata ganti/N + 呢',
    titleZh: '用"呢"构成的省略式疑问句',
    pattern: '代词/N + 呢？',
    explanation: '呢 di akhir kata/frasa membentuk pertanyaan elips — konteks sudah jelas, menanyakan hal yang sama.',
    examples: [
      { zh: '我去医院，你呢？', pinyin: 'Wǒ qù yīyuàn, nǐ ne?', id: 'Saya pergi ke rumah sakit, kamu bagaimana?' },
      { zh: '书在桌子上，笔呢？', pinyin: 'Shū zài zhuōzi shàng, bǐ ne?', id: 'Bukunya ada di atas meja, penanya?' },
    ],
    tags: ['kalimat tanya', '呢', 'elips'],
    level: 2,
  },

  {
    id: 'g2-073',
    title: 'Bertanya Konfirmasi: 是不是',
    titleZh: '用"是不是"提问',
    pattern: '是不是 + 句子 | 句子 + 是不是？',
    explanation: '是不是 = apakah ...atau tidak? Mengkonfirmasi dugaan. Bisa di awal atau akhir kalimat.',
    examples: [
      { zh: '你要去体育馆打球，是不是？', pinyin: 'Nǐ yào qù tǐyùguǎn dǎqiú, shì bu shì?', id: 'Kamu mau pergi ke gym main bola, kan?' },
      { zh: '是不是你拿了我的笔？', pinyin: 'Shì bu shì nǐ ná le wǒ de bǐ?', id: 'Apakah kamu yang mengambil pena saya?' },
    ],
    tags: ['kalimat tanya', '是不是', 'konfirmasi'],
    level: 2,
  },

  {
    id: 'g2-074',
    title: 'Bertanya dengan 吧 (dugaan)',
    titleZh: '用"吧"提问',
    pattern: '句子 + 吧？',
    explanation: '吧 di akhir kalimat menyatakan perkiraan yang meminta konfirmasi. Pembicara punya dugaan.',
    examples: [
      { zh: '您是经理吧？', pinyin: 'Nín shì jīnglǐ ba?', id: 'Anda adalah manajer, bukan?' },
      { zh: '你以前学过中文吧？', pinyin: 'Nǐ yǐqián xué guo Zhōngwén ba?', id: 'Kamu pernah belajar bahasa Mandarin sebelumnya, kan?' },
    ],
    tags: ['kalimat tanya', '吧', 'dugaan'],
    level: 2,
  },

  // ════════════════════════════════════════════════════════════
  // A.2.10 UNGKAPAN LISAN (口语格式)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g2-075',
    title: 'Ungkapan Lisan: 该……了 (sudah waktunya)',
    titleZh: '口语格式：该……了',
    pattern: '该 + V + 了',
    explanation: '该……了 = sudah waktunya untuk.../sudah saatnya.... Menyatakan sudah tiba saatnya melakukan sesuatu.',
    examples: [
      { zh: '十一点了，该睡觉了。', pinyin: 'Shíyī diǎn le, gāi shuìjiào le.', id: 'Sudah pukul sebelas, sudah waktunya tidur.' },
      { zh: '明天有听写，我该复习词语了。', pinyin: 'Míngtiān yǒu tīngxiě, wǒ gāi fùxí cíyǔ le.', id: 'Besok ada dikte, sudah waktunya saya mengulang kosakata.' },
    ],
    tags: ['ungkapan lisan', '该...了', 'sudah waktunya'],
    level: 2,
  },

  {
    id: 'g2-076',
    title: 'Ungkapan Lisan: 要/快要/就要……了 (hampir/segera)',
    titleZh: '口语格式：要/快要/就要……了',
    pattern: '要/快要/就要 + V + 了',
    explanation: '要/快要/就要……了 = akan segera.../hampir.... Menyatakan peristiwa yang akan segera terjadi.',
    examples: [
      { zh: '要下雨了。', pinyin: 'Yào xià yǔ le.', id: 'Sebentar lagi akan hujan.' },
      { zh: '我们快要放假了。', pinyin: 'Wǒmen kuàiyào fàngjià le.', id: 'Kita hampir liburan.' },
      { zh: '他们明天就要考试了。', pinyin: 'Tāmen míngtiān jiùyào kǎoshì le.', id: 'Mereka besok akan segera ujian.' },
    ],
    tags: ['hampir', '要...了', '快要', '就要', 'segera'],
    level: 2,
  },

]