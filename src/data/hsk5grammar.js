// HSK 5 — Grammar Points (Poin Grammar Level 5)
// Sumber: GF 0025-2021 Appendix A.5 (五级语法点) — Standar Resmi Kementerian Pendidikan China
// Total: 71 poin grammar resmi (五01 s.d. 五71)
//
// Struktur: { id, title, titleZh, gfCode, pattern, explanation, examples, tags, level }
// - id        : 'g5-001' dst
// - gfCode    : kode resmi GF 0025 misal '五-01'
// - title     : judul dalam Bahasa Indonesia
// - titleZh   : judul dalam Bahasa Tionghoa (dari PDF)
// - pattern   : pola struktur kalimat
// - explanation: penjelasan dalam Bahasa Indonesia
// - examples  : [{ zh, pinyin, id }]  — id = terjemahan Indonesia
// - tags      : label kategori
// - level     : 5

export const hsk5Grammar = [

  // ════════════════════════════════════════════════════════════
  // A.5.1  词类 — KELAS KATA
  // ════════════════════════════════════════════════════════════

  // ── A.5.1.1 代词 (Kata Ganti) ─────────────────────────────

  {
    id: 'g5-001',
    gfCode: '五-01',
    title: 'Kata Ganti Penunjuk: 彼此、如此',
    titleZh: '指示代词：彼此、如此',
    pattern: '彼此 (satu sama lain)\n如此 (demikian; seperti ini)',
    explanation: '彼此 berarti "satu sama lain / antara satu dengan yang lain", dipakai untuk hubungan timbal balik. 如此 berarti "demikian / seperti ini / seperti itu", dipakai untuk merujuk pada situasi atau cara yang sudah disebutkan sebelumnya.',
    examples: [
      { zh: '朋友之间应该彼此信任。', pinyin: 'Péngyou zhī jiān yīnggāi bǐcǐ xìnrèn.', id: 'Di antara teman seharusnya saling percaya.' },
      { zh: '我们是多年的好朋友，不分彼此。', pinyin: 'Wǒmen shì duōnián de hǎo péngyou, bù fēn bǐcǐ.', id: 'Kami adalah teman baik bertahun-tahun, tidak ada perbedaan antara kami.' },
      { zh: '十年后，两座城市的发展状况如此不同。', pinyin: 'Shí nián hòu, liǎng zuò chéngshì de fāzhǎn zhuàngkuàng rúcǐ bùtóng.', id: 'Sepuluh tahun kemudian, kondisi perkembangan dua kota itu begitu berbeda.' },
      { zh: '他如此认真地锻炼是为了有个健康的身体。', pinyin: 'Tā rúcǐ rènzhēn de duànliàn shì wèile yǒu ge jiànkāng de shēntǐ.', id: 'Dia berlatih dengan begitu serius demi memiliki tubuh yang sehat.' },
    ],
    tags: ['kata ganti', 'penunjuk', '彼此', '如此'],
    level: 5,
  },

  // ── A.5.1.2 量词 (Kata Ukur) ──────────────────────────────

  {
    id: 'g5-002',
    gfCode: '五-02',
    title: 'Kata Ukur Benda: 册、朵、幅、届、颗、匹、扇',
    titleZh: '名量词：册、朵、幅、届、颗、匹、扇',
    pattern: 'Bilangan + 册/朵/幅/届/颗/匹/扇 + Benda',
    explanation: '册 untuk buku/jilid; 朵 untuk bunga; 幅 untuk gambar/lukisan/kain; 届 untuk angkatan/periode jabatan; 颗 untuk benda kecil bulat (bintang, gigi, bola); 匹 untuk kuda/kain; 扇 untuk pintu/jendela.',
    examples: [
      { zh: '一册书', pinyin: 'yī cè shū', id: 'satu jilid buku' },
      { zh: '一朵花', pinyin: 'yī duǒ huā', id: 'satu kuntum bunga' },
      { zh: '一幅画', pinyin: 'yī fú huà', id: 'satu buah lukisan' },
      { zh: '一届学生', pinyin: 'yī jiè xuéshēng', id: 'satu angkatan siswa' },
      { zh: '一颗糖', pinyin: 'yī kē táng', id: 'satu butir permen' },
      { zh: '一匹布', pinyin: 'yī pǐ bù', id: 'satu gulung kain' },
      { zh: '一扇窗户', pinyin: 'yī shàn chuānghù', id: 'satu buah jendela' },
    ],
    tags: ['kata ukur', 'kuantifier', 'kata benda'],
    level: 5,
  },

  // ── A.5.1.3 副词 (Kata Keterangan) ───────────────────────

  {
    id: 'g5-003',
    gfCode: '五-03',
    title: 'Kata Keterangan Tingkat: 过于、可¹、稍、稍微、尤其',
    titleZh: '程度副词：过于、可¹、稍、稍微、尤其',
    pattern: '过于/稍/稍微/尤其 + Adj/V',
    explanation: '过于 berarti "terlalu / berlebihan". 可 (dipakai untuk penekanan, bukan modal). 稍/稍微 berarti "sedikit / agak". 尤其 berarti "terutama / khususnya".',
    examples: [
      { zh: '这件事发生得过于突然了。', pinyin: 'Zhè jiàn shì fāshēng de guòyú tūrán le.', id: 'Kejadian ini terjadi terlalu tiba-tiba.' },
      { zh: '他女朋友可漂亮了！', pinyin: 'Tā nǚpéngyou kě piàoliang le!', id: 'Pacar perempuannya benar-benar cantik!' },
      { zh: '这幅画再挂得稍高一点儿。', pinyin: 'Zhè fú huà zài guà de shāo gāo yīdiǎnr.', id: 'Lukisan ini gantung sedikit lebih tinggi lagi.' },
      { zh: '稍微坚持一下儿，马上就结束了。', pinyin: 'Shāowēi jiānchí yīxiàr, mǎshàng jiù jiéshù le.', id: 'Bertahan sedikit lagi, sebentar lagi akan selesai.' },
      { zh: '她喜欢运动，尤其是游泳。', pinyin: 'Tā xǐhuan yùndòng, yóuqí shì yóuyǒng.', id: 'Dia suka olahraga, terutama renang.' },
    ],
    tags: ['kata keterangan', 'tingkat derajat', '过于', '稍微', '尤其'],
    level: 5,
  },

  {
    id: 'g5-004',
    gfCode: '五-04',
    title: 'Kata Keterangan Lingkup: 大都',
    titleZh: '范围副词：大都',
    pattern: 'S + 大都 + V/Adj',
    explanation: '大都 berarti "sebagian besar / kebanyakan / umumnya". Dipakai untuk menyatakan bahwa mayoritas dari suatu kelompok melakukan suatu tindakan atau memiliki suatu sifat.',
    examples: [
      { zh: '参加划船比赛的大都是女生。', pinyin: 'Cānjiā huáchuán bǐsài de dàdōu shì nǚshēng.', id: 'Kebanyakan yang ikut lomba dayung adalah perempuan.' },
      { zh: '我们班的学生大都很爱学习。', pinyin: 'Wǒmen bān de xuéshēng dàdōu hěn ài xuéxí.', id: 'Sebagian besar siswa di kelas kami sangat rajin belajar.' },
      { zh: '小孩儿大都喜欢吃甜的。', pinyin: 'Xiǎoháir dàdōu xǐhuan chī tián de.', id: 'Kebanyakan anak-anak suka makanan manis.' },
    ],
    tags: ['kata keterangan', 'lingkup', '大都', 'sebagian besar'],
    level: 5,
  },

  {
    id: 'g5-005',
    gfCode: '五-05',
    title: 'Kata Keterangan Waktu: 不时、将、将要、仍旧、时常、时刻、依旧、一向',
    titleZh: '时间副词：不时、将、将要、仍旧、时常、时刻、依旧、一向',
    pattern: 'S + 不时/将/仍旧/时常/时刻/依旧/一向 + V',
    explanation: '不时 = sewaktu-waktu; 将/将要 = akan (segera); 仍旧/依旧 = masih seperti dulu / tetap; 时常 = sering kali; 时刻 = setiap saat / selalu; 一向 = selalu / dari dulu memang begitu.',
    examples: [
      { zh: '我不时想起过去的事情。', pinyin: 'Wǒ bùshí xiǎngqǐ guòqù de shìqíng.', id: 'Saya sewaktu-waktu teringat hal-hal masa lalu.' },
      { zh: '明年我们将去国外考察。', pinyin: 'Míngnián wǒmen jiāng qù guówài kǎochá.', id: 'Tahun depan kami akan pergi ke luar negeri untuk studi banding.' },
      { zh: '二十年过去了，他仍旧没结婚。', pinyin: 'Èrshí nián guòqù le, tā réngjìu méi jiéhūn.', id: 'Dua puluh tahun telah berlalu, dia masih belum menikah.' },
      { zh: '长大以后，我时常怀念我的故乡。', pinyin: 'Zhǎngdà yǐhòu, wǒ shícháng huáiniàn wǒ de gùxiāng.', id: 'Setelah dewasa, saya sering merindukan kampung halaman.' },
      { zh: '在国外，我时刻想念着国内的亲人。', pinyin: 'Zài guówài, wǒ shíkè xiǎngniàn zhe guónèi de qīnrén.', id: 'Di luar negeri, setiap saat saya rindu keluarga di dalam negeri.' },
      { zh: '十年过去了，他依旧住在那里。', pinyin: 'Shí nián guòqù le, tā yījiù zhù zài nàlǐ.', id: 'Sepuluh tahun berlalu, dia masih tinggal di sana.' },
      { zh: '他一向不爱说话。', pinyin: 'Tā yīxiàng bù ài shuōhuà.', id: 'Dia dari dulu memang tidak suka bicara.' },
    ],
    tags: ['kata keterangan', 'waktu', '将要', '仍旧', '时常', '一向'],
    level: 5,
  },

  {
    id: 'g5-006',
    gfCode: '五-06',
    title: 'Kata Keterangan Frekuensi & Pengulangan: 偶尔、再次',
    titleZh: '频率、重复副词：偶尔、再次',
    pattern: 'S + 偶尔/再次 + V',
    explanation: '偶尔 berarti "sesekali / kadang-kadang" (jarang, tidak sering). 再次 berarti "sekali lagi / untuk kedua kalinya / kembali".',
    examples: [
      { zh: '他不常请假，只是偶尔迟到一次。', pinyin: 'Tā bù cháng qǐngjià, zhǐshì ǒuěr chídào yīcì.', id: 'Dia tidak sering minta izin, hanya sesekali terlambat.' },
      { zh: '我们决不让类似的事情再次发生。', pinyin: 'Wǒmen jué bù ràng lèisì de shìqíng zàicì fāshēng.', id: 'Kami tidak akan membiarkan hal serupa terjadi lagi.' },
    ],
    tags: ['kata keterangan', 'frekuensi', '偶尔', '再次'],
    level: 5,
  },

  {
    id: 'g5-007',
    gfCode: '五-07',
    title: 'Kata Keterangan Cara: 偷偷',
    titleZh: '方式副词：偷偷',
    pattern: 'S + 偷偷 + V',
    explanation: '偷偷 berarti "diam-diam / sembunyi-sembunyi / secara rahasia". Menekankan bahwa tindakan dilakukan tanpa sepengetahuan orang lain.',
    examples: [
      { zh: '我偷偷送给他一件礼物。', pinyin: 'Wǒ tōutōu sòng gěi tā yī jiàn lǐwù.', id: 'Saya diam-diam memberinya sebuah hadiah.' },
      { zh: '她偷偷地从窗户向外看。', pinyin: 'Tā tōutōu de cóng chuānghù xiàng wài kàn.', id: 'Dia sembunyi-sembunyi mengintip ke luar melalui jendela.' },
    ],
    tags: ['kata keterangan', 'cara', '偷偷', 'diam-diam'],
    level: 5,
  },

  {
    id: 'g5-008',
    gfCode: '五-08',
    title: 'Kata Keterangan Nada: 毕竟、不免、差（一）点儿、倒是、干脆、就⁴、居然、可²、明明、总算',
    titleZh: '语气副词：毕竟、不免、差（一）点儿、倒是、干脆、就⁴、居然、可²、明明、总算',
    pattern: 'S + 毕竟/不免/居然/明明/总算 + V/Adj',
    explanation: '毕竟 = bagaimanapun juga / toh. 不免 = tidak bisa tidak / tidak terhindarkan. 差（一）点儿 = hampir saja. 倒是 = justru / malah. 干脆 = langsung saja / sekalian. 就 (penekanan). 居然 = ternyata / tidak disangka. 可 (penekanan/keheranan). 明明 = jelas-jelas / sudah jelas. 总算 = akhirnya / pada akhirnya.',
    examples: [
      { zh: '不要怪他，他毕竟还小。', pinyin: 'Búyào guài tā, tā bìjìng hái xiǎo.', id: 'Jangan salahkan dia, bagaimanapun dia masih kecil.' },
      { zh: '第一次参加考试，不免有些紧张。', pinyin: 'Dì yīcì cānjiā kǎoshì, bùmiǎn yǒuxiē jǐnzhāng.', id: 'Pertama kali ikut ujian, tidak terhindarkan merasa agak gugup.' },
      { zh: '我今天上学差点儿迟到。', pinyin: 'Wǒ jīntiān shàngxué chà diǎnr chídào.', id: 'Hari ini pergi sekolah hampir saja terlambat.' },
      { zh: '这种做法倒是怪新鲜的，从来没见过。', pinyin: 'Zhè zhǒng zuòfǎ dàoshì guài xīnxiān de, cónglái méi jiànguò.', id: 'Cara ini justru cukup baru, belum pernah kelihatan sebelumnya.' },
      { zh: '这个人不讲道理，我们干脆不和他合作了。', pinyin: 'Zhège rén bù jiǎng dàolǐ, wǒmen gāncuì bù hé tā hézuò le.', id: 'Orang ini tidak masuk akal, kami langsung saja tidak bekerja sama dengannya.' },
      { zh: '别劝我，我就要去。', pinyin: 'Bié quàn wǒ, wǒ jiù yào qù.', id: 'Jangan membujuk saya, saya memang mau pergi.' },
      { zh: '没想到，这件事居然是她干的。', pinyin: 'Méi xiǎngdào, zhè jiàn shì jūrán shì tā gàn de.', id: 'Tidak disangka, ternyata hal ini dilakukan olehnya.' },
      { zh: '我可记不住这么多生词。', pinyin: 'Wǒ kě jì bú zhù zhème duō shēngcí.', id: 'Saya memang tidak bisa menghapal kata baru sebanyak ini.' },
      { zh: '明明是你做的，为什么要说是别人做的？', pinyin: 'Míngmíng shì nǐ zuò de, wèishénme yào shuō shì biérén zuò de?', id: 'Jelas-jelas kamu yang melakukan, kenapa bilang orang lain yang melakukan?' },
      { zh: '这本书总算学完了。', pinyin: 'Zhè běn shū zǒngsuàn xué wán le.', id: 'Buku ini akhirnya selesai dipelajari.' },
    ],
    tags: ['kata keterangan', 'nada', '毕竟', '居然', '明明', '总算', '干脆'],
    level: 5,
  },

  // ── A.5.1.4 介词 (Kata Depan/Preposisi) ──────────────────

  {
    id: 'g5-009',
    gfCode: '五-09',
    title: 'Preposisi Waktu/Tempat: 随着',
    titleZh: '引出时间、处所：随着',
    pattern: '随着 + N/Klausa + VP',
    explanation: '随着 berarti "seiring dengan / bersamaan dengan". Menyatakan bahwa suatu perubahan atau tindakan terjadi bersamaan atau mengikuti perubahan lain.',
    examples: [
      { zh: '随着时间的推进，我慢慢理解了他的做法。', pinyin: 'Suízhe shíjiān de tuījìn, wǒ mànman lǐjiě le tā de zuòfǎ.', id: 'Seiring berjalannya waktu, saya perlahan memahami cara bertindaknya.' },
      { zh: '随着冬天的到来，房间越来越冷。', pinyin: 'Suízhe dōngtiān de dàolái, fángjiān yuèlái yuè lěng.', id: 'Seiring datangnya musim dingin, kamar semakin dingin.' },
    ],
    tags: ['preposisi', 'waktu', 'tempat', '随着', 'seiring'],
    level: 5,
  },

  {
    id: 'g5-010',
    gfCode: '五-10',
    title: 'Preposisi Pelaku/Penerima: 将',
    titleZh: '引出施事、受事：将',
    pattern: 'S + 将 + O + V',
    explanation: '将 dipakai sebagai preposisi (mirip 把) untuk memindahkan objek ke posisi sebelum kata kerja. Lebih formal dari 把. Sering dipakai dalam bahasa tulis/formal.',
    examples: [
      { zh: '父母将他送到中国留学。', pinyin: 'Fùmǔ jiāng tā sòng dào Zhōngguó liúxué.', id: 'Orang tua mengirimnya ke Tiongkok untuk belajar.' },
      { zh: '禁止将书带出阅览室。', pinyin: 'Jìnzhǐ jiāng shū dài chū yuèlǎnshì.', id: 'Dilarang membawa buku keluar dari ruang baca.' },
    ],
    tags: ['preposisi', 'pelaku', 'penerima', '将', 'formal'],
    level: 5,
  },

  {
    id: 'g5-011',
    gfCode: '五-11',
    title: 'Preposisi Pelaku: 由²',
    titleZh: '引出施事：由²',
    pattern: '由 + N(pelaku) + V',
    explanation: '由 menyatakan "oleh / dilakukan oleh". Menunjukkan siapa yang melakukan tindakan. Berbeda dari 被 karena lebih bersifat netral (tidak selalu negatif) dan sering dipakai dalam bahasa tulis/formal.',
    examples: [
      { zh: '这道题由你来回答吧。', pinyin: 'Zhè dào tí yóu nǐ lái huídá ba.', id: 'Soal ini biar kamu yang menjawab.' },
      { zh: '这件事情由班长负责。', pinyin: 'Zhè jiàn shìqíng yóu bānzhǎng fùzé.', id: 'Urusan ini menjadi tanggung jawab ketua kelas.' },
    ],
    tags: ['preposisi', 'pelaku', '由', 'oleh'],
    level: 5,
  },

  {
    id: 'g5-012',
    gfCode: '五-12',
    title: 'Preposisi Landasan/Bukti: 凭',
    titleZh: '引出凭借、依据：凭',
    pattern: '凭 + N/V + VP',
    explanation: '凭 berarti "berdasarkan / berbekal / mengandalkan". Menyatakan dasar atau landasan untuk melakukan sesuatu.',
    examples: [
      { zh: '凭他的水平，通过这次考试没有问题。', pinyin: 'Píng tā de shuǐpíng, tōngguò zhè cì kǎoshì méiyǒu wèntí.', id: 'Berdasarkan kemampuannya, lulus ujian ini tidak ada masalah.' },
      { zh: '凭经验进行判断往往是不准确的。', pinyin: 'Píng jīngyàn jìnxíng pànduàn wǎngwǎng shì bù zhǔnquè de.', id: 'Membuat penilaian berdasarkan pengalaman saja seringkali tidak akurat.' },
    ],
    tags: ['preposisi', 'landasan', 'bukti', '凭', 'berdasarkan'],
    level: 5,
  },

  {
    id: 'g5-013',
    gfCode: '五-13',
    title: 'Preposisi Acuan: 依据',
    titleZh: '引出凭借、依据：依据',
    pattern: '依据 + N + VP',
    explanation: '依据 berarti "berdasarkan / sesuai dengan / berpedoman pada". Lebih formal dari 根据 dan 按照. Dipakai dalam konteks hukum, peraturan, dan tulisan resmi.',
    examples: [
      { zh: '要依据事实办事。', pinyin: 'Yào yījù shìshí bànshì.', id: 'Harus bertindak berdasarkan fakta.' },
      { zh: '警察依据线索抓住了坏人。', pinyin: 'Jǐngchá yījù xiànsuǒ zhuāzhù le huàirén.', id: 'Polisi menangkap penjahat berdasarkan petunjuk.' },
    ],
    tags: ['preposisi', 'acuan', '依据', 'berdasarkan', 'formal'],
    level: 5,
  },

  {
    id: 'g5-014',
    gfCode: '五-14',
    title: 'Preposisi Acuan: 依照',
    titleZh: '引出凭借、依据：依照',
    pattern: '依照 + N + VP',
    explanation: '依照 berarti "sesuai dengan / menurut / mengikuti". Menekankan ketaatan pada suatu aturan atau cara tertentu. Sering dipakai dalam bahasa formal/hukum.',
    examples: [
      { zh: '他想依照自己喜欢的方式去生活。', pinyin: 'Tā xiǎng yīzhào zìjǐ xǐhuan de fāngshì qù shēnghuó.', id: 'Dia ingin hidup sesuai dengan cara yang dia sukai.' },
      { zh: '依照学校的规定，学生要按时上课，不能迟到。', pinyin: 'Yīzhào xuéxiào de guīdìng, xuéshēng yào ànshí shàngkè, bù néng chídào.', id: 'Sesuai peraturan sekolah, siswa harus masuk kelas tepat waktu, tidak boleh terlambat.' },
    ],
    tags: ['preposisi', 'acuan', '依照', 'sesuai', 'formal'],
    level: 5,
  },

  // ── A.5.1.5 连词 (Kata Sambung) ──────────────────────────

  {
    id: 'g5-015',
    gfCode: '五-15',
    title: 'Konjungsi Penghubung Klausa: 从而、加上、完了、一旦',
    titleZh: '连接分句或句子：从而、加上、完了、一旦',
    pattern: '从而 + VP (sehingga/dengan demikian)\n加上 + N/VP (ditambah lagi)\n完了 + VP (sudah itu/lalu)\n一旦 + kondisi, + konsekuensi',
    explanation: '从而 = sehingga / dengan demikian (menunjukkan hasil logis). 加上 = ditambah lagi (menambahkan faktor). 完了 = setelah selesai itu / lalu (dalam bahasa lisan). 一旦 = begitu / apabila (menekankan momen tertentu).',
    examples: [
      { zh: '他努力学习，从而实现了当翻译的理想。', pinyin: 'Tā nǔlì xuéxí, cóng\'ér shíxiàn le dāng fānyì de lǐxiǎng.', id: 'Dia belajar keras, sehingga mewujudkan cita-cita menjadi penerjemah.' },
      { zh: '今天天气不太好，加上你还有很多作业，我们还是别去公园了吧。', pinyin: 'Jīntiān tiānqì bù tài hǎo, jiāshàng nǐ hái yǒu hěn duō zuòyè, wǒmen háishì bié qù gōngyuán le ba.', id: 'Cuaca hari ini kurang bagus, ditambah lagi kamu masih banyak PR, kita sebaiknya tidak jadi ke taman.' },
      { zh: '你快点儿写作业，完了我们去公园玩儿。', pinyin: 'Nǐ kuài diǎnr xiě zuòyè, wán le wǒmen qù gōngyuán wánr.', id: 'Cepat kerjakan PR-mu, setelah itu kita ke taman bermain.' },
      { zh: '你要想好了，一旦选择了就不能放弃。', pinyin: 'Nǐ yào xiǎng hǎo le, yīdàn xuǎnzé le jiù bù néng fàngqì.', id: 'Kamu harus pikirkan baik-baik, begitu sudah memilih tidak boleh menyerah.' },
    ],
    tags: ['konjungsi', 'kata sambung', '从而', '加上', '一旦'],
    level: 5,
  },

  // ── A.5.1.6 助词 (Partikel) ──────────────────────────────

  {
    id: 'g5-016',
    gfCode: '五-16',
    title: 'Partikel Lain: 也好',
    titleZh: '其他助词：也好',
    pattern: 'VP1 + 也好，VP2 + 也好，+ Kesimpulan',
    explanation: '也好 dipakai setelah dua alternatif untuk menyatakan "baik ... maupun ..." atau "entah ... atau ...". Artinya kedua kemungkinan sama-sama berlaku.',
    examples: [
      { zh: '让他亲自在现场试一试也好。', pinyin: 'Ràng tā qīnzì zài xiànchǎng shì yī shì yě hǎo.', id: 'Biarkan dia mencoba langsung di tempat, itu juga bagus.' },
      { zh: '你来也好，不来也好，随便吧。', pinyin: 'Nǐ lái yě hǎo, bù lái yě hǎo, suíbiàn ba.', id: 'Kamu datang boleh, tidak datang juga boleh, terserah.' },
      { zh: '多学一门语言也好，将来可以凭此找份工作。', pinyin: 'Duō xué yī mén yǔyán yě hǎo, jiānglái kěyǐ píng cǐ zhǎo fèn gōngzuò.', id: 'Belajar satu bahasa lagi juga baik, ke depannya bisa mencari kerja dengan itu.' },
    ],
    tags: ['partikel', 'pilihan', '也好', 'baik...maupun'],
    level: 5,
  },

  // ════════════════════════════════════════════════════════════
  // A.5.2  短语 — FRASA
  // ════════════════════════════════════════════════════════════

  // ── A.5.2.1 固定短语 (Frasa Tetap) ───────────────────────

  {
    id: 'g5-017',
    gfCode: '五-17',
    title: 'Frasa Empat Karakter: A来A去',
    titleZh: '四字格：A来A去',
    pattern: 'Kata Kerja + 来 + Kata Kerja + 去',
    explanation: 'Pola A来A去 menyatakan tindakan yang dilakukan berulang kali bolak-balik atau terus-menerus tanpa arah yang pasti. Menunjukkan kegiatan yang repetitif.',
    examples: [
      { zh: '想来想去，还是小王最合适。', pinyin: 'Xiǎng lái xiǎng qù, háishì Xiǎo Wáng zuì héshì.', id: 'Dipikir-pikir, Xiao Wang tetap yang paling cocok.' },
      { zh: '大家讨论来讨论去，最后还是没解决。', pinyin: 'Dàjiā tǎolùn lái tǎolùn qù, zuìhòu háishì méi jiějué.', id: 'Semua orang berdiskusi bolak-balik, akhirnya tetap tidak terpecahkan.' },
      { zh: '她是一名导游，经常在世界各地飞来飞去。', pinyin: 'Tā shì yī míng dǎoyóu, jīngcháng zài shìjiè gèdì fēi lái fēi qù.', id: 'Dia adalah seorang pemandu wisata, sering terbang ke berbagai penjuru dunia.' },
    ],
    tags: ['frasa tetap', 'empat karakter', 'A来A去', 'berulang'],
    level: 5,
  },

  {
    id: 'g5-018',
    gfCode: '五-18',
    title: 'Frasa Empat Karakter: A着A着',
    titleZh: '四字格：A着A着',
    pattern: 'Kata Kerja + 着 + Kata Kerja + 着',
    explanation: 'Pola A着A着 menyatakan bahwa suatu tindakan yang dilakukan secara terus-menerus kemudian menghasilkan perubahan keadaan atau tindakan baru yang tidak terduga.',
    examples: [
      { zh: '她说着说着就哭起来了。', pinyin: 'Tā shuōzhe shuōzhe jiù kū qǐlái le.', id: 'Saat berbicara terus-menerus, dia tiba-tiba menangis.' },
      { zh: '我躺在床上看电视，看着看着就睡着了。', pinyin: 'Wǒ tǎng zài chuángshàng kàn diànshì, kànzhe kànzhe jiù shuìzháo le.', id: 'Saya berbaring menonton TV, sambil menonton akhirnya tertidur.' },
    ],
    tags: ['frasa tetap', 'empat karakter', 'A着A着', 'bertahap'],
    level: 5,
  },

  {
    id: 'g5-019',
    gfCode: '五-19',
    title: 'Frasa Empat Karakter: 没A没B',
    titleZh: '四字格：没A没B',
    pattern: '没 + A + 没 + B',
    explanation: 'Pola 没A没B menyatakan "tidak ada A, tidak ada B" atau mengkritik sesuatu yang tidak memiliki kualitas tertentu. Mengungkapkan rasa tidak puas atau kritik.',
    examples: [
      { zh: '一上午没吃没喝，我要饿死了。', pinyin: 'Yī shàngwǔ méi chī méi hē, wǒ yào è sǐ le.', id: 'Satu pagi tidak makan tidak minum, saya hampir mati kelaparan.' },
      { zh: '这孩子说话没大没小的，一点儿礼貌都没有。', pinyin: 'Zhè háizi shuōhuà méi dà méi xiǎo de, yīdiǎnr lǐmào dōu méiyǒu.', id: 'Anak ini bicara tanpa sopan santun, tidak ada tata krama sama sekali.' },
    ],
    tags: ['frasa tetap', 'empat karakter', '没A没B', 'negatif'],
    level: 5,
  },

  {
    id: 'g5-020',
    gfCode: '五-20',
    title: 'Frasa Empat Karakter: 说A就A',
    titleZh: '四字格：说A就A',
    pattern: '说 + V + 就 + V',
    explanation: 'Pola 说A就A menyatakan tindakan yang dilakukan dengan segera tanpa ragu-ragu atau tunda. Berarti "begitu dikatakan langsung dilakukan".',
    examples: [
      { zh: '为什么人生需要有一次说走就走的旅行？', pinyin: 'Wèishénme rénshēng xūyào yǒu yīcì shuō zǒu jiù zǒu de lǚxíng?', id: 'Mengapa dalam hidup perlu ada satu perjalanan yang langsung pergi tanpa pikir panjang?' },
      { zh: '说干就干，只有干才能找到办法。', pinyin: 'Shuō gàn jiù gàn, zhǐyǒu gàn cái néng zhǎodào bànfǎ.', id: 'Bilang langsung dikerjakan, hanya dengan mengerjakan baru bisa menemukan cara.' },
    ],
    tags: ['frasa tetap', 'empat karakter', '说A就A', 'spontan'],
    level: 5,
  },

  {
    id: 'g5-021',
    gfCode: '五-21',
    title: 'Frasa Empat Karakter: 有A有B',
    titleZh: '四字格：有A有B',
    pattern: '有 + A + 有 + B',
    explanation: 'Pola 有A有B menyatakan "ada A, ada B", menggambarkan situasi yang memiliki berbagai unsur atau hal-hal yang bervarisasi. Menggambarkan kondisi yang hidup, beragam.',
    examples: [
      { zh: '下课了，同学们有说有笑地走出了教室。', pinyin: 'Xià kè le, tóngxuémen yǒu shuō yǒu xiào de zǒu chū le jiàoshì.', id: 'Pelajaran usai, para siswa bersenda gurau keluar dari kelas.' },
      { zh: '这里的农村有山有水，空气好，农民们过上了好日子。', pinyin: 'Zhèlǐ de nóngcūn yǒu shān yǒu shuǐ, kōngqì hǎo, nóngmínmen guò shàng le hǎo rìzi.', id: 'Pedesaan di sini ada gunung ada air, udaranya bagus, para petani hidup sejahtera.' },
      { zh: '节日的公园里有男有女，有老有少，十分热闹。', pinyin: 'Jiérì de gōngyuán lǐ yǒu nán yǒu nǚ, yǒu lǎo yǒu shǎo, shífēn rènào.', id: 'Di taman saat hari raya ada pria ada wanita, ada tua ada muda, sangat ramai.' },
    ],
    tags: ['frasa tetap', 'empat karakter', '有A有B', 'beragam'],
    level: 5,
  },

  {
    id: 'g5-022',
    gfCode: '五-22',
    title: 'Frasa Tetap Lain: 不得了',
    titleZh: '其他：不得了',
    pattern: 'V/Adj + 得不得了',
    explanation: '不得了 dipakai setelah 得 untuk menyatakan tingkat yang sangat ekstrem. Berarti "luar biasa / sangat sekali / tidak ketulungan".',
    examples: [
      { zh: '你又考了第一名，真是不得了！', pinyin: 'Nǐ yòu kǎo le dì yī míng, zhēnshì bùdéliǎo!', id: 'Kamu lagi-lagi dapat peringkat pertama, sungguh luar biasa!' },
      { zh: '不得了了，房间里进水了。', pinyin: 'Bùdéliǎo le, fángjiān lǐ jìnshuǐ le.', id: 'Celaka, kamar kebanjiran.' },
      { zh: '完了完了，不得了了，电脑坏了。', pinyin: 'Wán le wán le, bùdéliǎo le, diànnǎo huài le.', id: 'Habis sudah, celaka, komputernya rusak.' },
    ],
    tags: ['frasa tetap', '不得了', 'penekanan', 'ekstrem'],
    level: 5,
  },

  {
    id: 'g5-023',
    gfCode: '五-23',
    title: 'Frasa Tetap Lain: 不敢当',
    titleZh: '其他：不敢当',
    pattern: '不敢当',
    explanation: '不敢当 adalah ungkapan merendah diri yang berarti "saya tidak layak / tidak pantas mendapat pujian ini". Dipakai untuk menolak pujian dengan rendah hati.',
    examples: [
      { zh: '这样的奖励我真是不敢当。', pinyin: 'Zhèyàng de jiǎnglì wǒ zhēnshì bù gǎndāng.', id: 'Penghargaan seperti ini sungguh tidak layak saya terima.' },
      { zh: '不敢当，我只是做了我应该做的事情。', pinyin: 'Bù gǎndāng, wǒ zhǐshì zuò le wǒ yīnggāi zuò de shìqíng.', id: 'Tidak pantas dipuji, saya hanya melakukan apa yang seharusnya saya lakukan.' },
      { zh: '您千万别这样说，我实在是不敢当。', pinyin: 'Nín qiānwàn bié zhèyàng shuō, wǒ shízài shì bù gǎndāng.', id: 'Mohon jangan berkata begitu, saya sungguh tidak pantas.' },
    ],
    tags: ['frasa tetap', '不敢当', 'kesopanan', 'merendah diri'],
    level: 5,
  },

  {
    id: 'g5-024',
    gfCode: '五-24',
    title: 'Frasa Tetap Lain: 得了',
    titleZh: '其他：得了',
    pattern: '得了 + VP / 得了吧',
    explanation: '得了 dipakai untuk menyatakan "sudah / cukup / oke saja". Bisa berarti "sudahlah / tinggalkan saja itu" atau menunjukkan ketidaksetujuan/ketidakpercayaan.',
    examples: [
      { zh: '麻烦别人还不如你自己去得了。', pinyin: 'Máfan biérén hái bùrú nǐ zìjǐ qù de le.', id: 'Daripada merepotkan orang lain, lebih baik kamu pergi sendiri saja.' },
      { zh: '得了吧，他不可能帮助别人的。', pinyin: 'Dé le ba, tā bù kěnéng bāngzhù biérén de.', id: 'Sudahlah, tidak mungkin dia mau membantu orang lain.' },
      { zh: '你可得了吧，谁能这么想呢？', pinyin: 'Nǐ kě dé le ba, shuí néng zhème xiǎng ne?', id: 'Sudahlah, siapa yang bisa berpikir seperti itu?' },
    ],
    tags: ['frasa tetap', '得了', 'lisan', 'santai'],
    level: 5,
  },

  {
    id: 'g5-025',
    gfCode: '五-25',
    title: 'Frasa Tetap Lain: 用不着',
    titleZh: '其他：用不着',
    pattern: 'S + 用不着 + VP',
    explanation: '用不着 berarti "tidak perlu / tidak usah / tidak perlu repot-repot". Menyatakan bahwa suatu tindakan tidak diperlukan.',
    examples: [
      { zh: '你有话可以直接说，用不着害怕。', pinyin: 'Nǐ yǒu huà kěyǐ zhíjiē shuō, yòng bu zháo hàipà.', id: 'Kamu bisa langsung bicara, tidak perlu takut.' },
      { zh: '用不着听他的，他什么都不懂。', pinyin: 'Yòng bu zháo tīng tā de, tā shénme dōu bù dǒng.', id: 'Tidak perlu mendengarkan dia, dia tidak mengerti apa-apa.' },
      { zh: '孩子们都工作了，您用不着担心了。', pinyin: 'Háizimen dōu gōngzuò le, nín yòng bu zháo dānxīn le.', id: 'Anak-anak semua sudah bekerja, Anda tidak perlu khawatir lagi.' },
    ],
    tags: ['frasa tetap', '用不着', 'tidak perlu', 'negatif'],
    level: 5,
  },

  // ════════════════════════════════════════════════════════════
  // A.5.3  固定格式 — FORMAT TETAP
  // ════════════════════════════════════════════════════════════

  {
    id: 'g5-026',
    gfCode: '五-26',
    title: 'Format Tetap: 从……来看',
    titleZh: '固定格式：从……来看',
    pattern: '从 + N/VP + 来看，+ Penilaian',
    explanation: '从……来看 berarti "dilihat dari ... / dari sudut pandang ...". Dipakai untuk menyatakan perspektif atau dasar penilaian.',
    examples: [
      { zh: '从这个角度来看，很多问题都可以解决。', pinyin: 'Cóng zhège jiǎodù lái kàn, hěn duō wèntí dōu kěyǐ jiějué.', id: 'Dilihat dari sudut pandang ini, banyak masalah yang bisa diselesaikan.' },
      { zh: '从他的考试成绩来看，他平时根本没有认真学习。', pinyin: 'Cóng tā de kǎoshì chéngjì lái kàn, tā píngshí gēnběn méiyǒu rènzhēn xuéxí.', id: 'Dilihat dari nilai ujiannya, dia memang tidak belajar dengan serius sehari-hari.' },
      { zh: '从以往的经验来看，这件事基本上没有问题。', pinyin: 'Cóng yǐwǎng de jīngyàn lái kàn, zhè jiàn shì jīběn shàng méiyǒu wèntí.', id: 'Dilihat dari pengalaman sebelumnya, urusan ini pada dasarnya tidak ada masalah.' },
    ],
    tags: ['format tetap', '从……来看', 'sudut pandang', 'penilaian'],
    level: 5,
  },

  {
    id: 'g5-027',
    gfCode: '五-27',
    title: 'Format Tetap: 到……为止',
    titleZh: '固定格式：到……为止',
    pattern: '到 + Waktu/Titik + 为止',
    explanation: '到……为止 berarti "sampai ... / hingga ... (batas waktu)". Menyatakan batas akhir dari suatu kegiatan atau keadaan.',
    examples: [
      { zh: '到目前为止，他还没有出过什么错。', pinyin: 'Dào mùqián wéizhǐ, tā hái méiyǒu chūguò shénme cuò.', id: 'Sampai saat ini, dia belum pernah membuat kesalahan apa pun.' },
      { zh: '我的报告到此为止，谢谢！', pinyin: 'Wǒ de bàogào dào cǐ wéizhǐ, xièxiè!', id: 'Laporan saya sampai di sini, terima kasih!' },
      { zh: '到昨天为止，这个项目已经完成了一半。', pinyin: 'Dào zuótiān wéizhǐ, zhège xiàngmù yǐjīng wánchéng le yībàn.', id: 'Sampai kemarin, proyek ini sudah selesai setengahnya.' },
    ],
    tags: ['format tetap', '到……为止', 'batas waktu', 'sampai'],
    level: 5,
  },

  {
    id: 'g5-028',
    gfCode: '五-28',
    title: 'Format Tetap: 够……的',
    titleZh: '固定格式：够……的',
    pattern: '够 + Adj + 的',
    explanation: '够……的 berarti "cukup ... / sudah sangat ...". Mengungkapkan bahwa sesuatu sudah mencapai tingkat yang cukup atau bahkan berlebihan.',
    examples: [
      { zh: '眼前这几件事就够他忙的了。', pinyin: 'Yǎnqián zhè jǐ jiàn shì jiù gòu tā máng de le.', id: 'Beberapa urusan di depan ini sudah cukup membuatnya sibuk.' },
      { zh: '他可真够聪明的，竟然抓住了这个机会。', pinyin: 'Tā kě zhēn gòu cōngmíng de, jìngrán zhuāzhù le zhège jīhuì.', id: 'Dia sungguh cukup cerdas, ternyata bisa menangkap kesempatan ini.' },
      { zh: '这本书够难的，他肯定看不懂。', pinyin: 'Zhè běn shū gòu nán de, tā kěndìng kàn bu dǒng.', id: 'Buku ini sudah cukup sulit, dia pasti tidak mengerti.' },
    ],
    tags: ['format tetap', '够……的', 'tingkat', 'cukup'],
    level: 5,
  },

  {
    id: 'g5-029',
    gfCode: '五-29',
    title: 'Format Tetap: 拿……来说',
    titleZh: '固定格式：拿……来说',
    pattern: '拿 + N + 来说，+ Penjelasan',
    explanation: '拿……来说 berarti "ambil ... sebagai contoh / berbicara tentang ...". Dipakai untuk memperkenalkan contoh konkret dalam argumen.',
    examples: [
      { zh: '拿成绩来说，他绝对是第一。', pinyin: 'Ná chéngjì lái shuō, tā juéduì shì dì yī.', id: 'Kalau bicara soal nilai, dia pasti nomor satu.' },
      { zh: '拿这件事来说，你没有做错什么。', pinyin: 'Ná zhè jiàn shì lái shuō, nǐ méiyǒu zuòcuò shénme.', id: 'Ambil urusan ini sebagai contoh, kamu tidak melakukan kesalahan apa pun.' },
      { zh: '拿这次考试来说，只要平时努力就能通过。', pinyin: 'Ná zhè cì kǎoshì lái shuō, zhǐyào píngshí nǔlì jiù néng tōngguò.', id: 'Ambil ujian kali ini sebagai contoh, asalkan rajin sehari-hari pasti bisa lulus.' },
    ],
    tags: ['format tetap', '拿……来说', 'contoh', 'ilustrasi'],
    level: 5,
  },

  {
    id: 'g5-030',
    gfCode: '五-30',
    title: 'Format Tetap: A的A，B的B',
    titleZh: '固定格式：A的A，B的B',
    pattern: 'A + 的 + A，B + 的 + B',
    explanation: 'Pola A的A，B的B menyatakan kondisi yang beragam atau campur aduk, di mana setiap hal ada sendiri-sendiri. Menggambarkan situasi yang bervariasi atau tidak seragam.',
    examples: [
      { zh: '衣服大的大，小的小，没有一件合适的。', pinyin: 'Yīfú dà de dà, xiǎo de xiǎo, méiyǒu yī jiàn héshì de.', id: 'Baju ada yang besar sekali ada yang kecil sekali, tidak ada satu pun yang pas.' },
      { zh: '家里老的老，少的少，我们得帮帮她。', pinyin: 'Jiā lǐ lǎo de lǎo, shǎo de shǎo, wǒmen děi bāng bāng tā.', id: 'Di keluarganya ada yang tua ada yang kecil, kita harus membantunya.' },
      { zh: '这里的建筑高的高，低的低，不太整齐。', pinyin: 'Zhèlǐ de jiànzhù gāo de gāo, dī de dī, bù tài zhěngqí.', id: 'Bangunan di sini ada yang tinggi ada yang rendah, tidak terlalu rapi.' },
    ],
    tags: ['format tetap', 'A的A B的B', 'beragam', 'bervariasi'],
    level: 5,
  },

  {
    id: 'g5-031',
    gfCode: '五-31',
    title: 'Format Tetap: 在……看来',
    titleZh: '固定格式：在……看来',
    pattern: '在 + N + 看来，+ Penilaian',
    explanation: '在……看来 berarti "menurut ... / dalam pandangan ...". Menyatakan sudut pandang atau opini seseorang.',
    examples: [
      { zh: '在我看来，这次中文考试实在是太难了。', pinyin: 'Zài wǒ kàn lái, zhè cì Zhōngwén kǎoshì shízài shì tài nán le.', id: 'Menurut saya, ujian bahasa Mandarin kali ini sungguh terlalu sulit.' },
      { zh: '在很多人看来，这件事没有那么简单。', pinyin: 'Zài hěn duō rén kàn lái, zhè jiàn shì méiyǒu nàme jiǎndān.', id: 'Menurut banyak orang, urusan ini tidak sesederhana itu.' },
      { zh: '在老师看来，每一个学生都有自己的优点。', pinyin: 'Zài lǎoshī kàn lái, měi yī gè xuéshēng dōu yǒu zìjǐ de yōudiǎn.', id: 'Menurut pandangan guru, setiap siswa memiliki kelebihannya masing-masing.' },
    ],
    tags: ['format tetap', '在……看来', 'sudut pandang', 'opini'],
    level: 5,
  },

  // ════════════════════════════════════════════════════════════
  // A.5.4  句子成分 — KOMPONEN KALIMAT
  // ════════════════════════════════════════════════════════════

  // ── A.5.4.1 宾语 (Objek) ─────────────────────────────────

  {
    id: 'g5-032',
    gfCode: '五-32',
    title: 'Tipe Semantik Objek 1: Objek Pelaku & Penerima',
    titleZh: '宾语的语义类型1：施事宾语、受事宾语',
    pattern: '(施事) Subjek + V + Objek Pelaku\n(受事) Subjek + V + Objek Penerima',
    explanation: 'Objek 施事 (pelaku) = objek yang menjadi agen dari tindakan berikutnya (misal: 来了一位客人). Objek 受事 (penerima) = objek yang dikenai tindakan (misal: 你要去超市采购一批食品).',
    examples: [
      { zh: '家里来了一位客人。', pinyin: 'Jiā lǐ lái le yī wèi kèrén.', id: 'Di rumah datang seorang tamu.' },
      { zh: '门口站着一个人。', pinyin: 'Ménkǒu zhànzhe yī gè rén.', id: 'Di depan pintu berdiri seorang orang.' },
      { zh: '你们要去超市采购一批食品。', pinyin: 'Nǐmen yào qù chāoshì cǎigòu yī pī shípǐn.', id: 'Kalian harus pergi ke supermarket membeli sejumlah bahan makanan.' },
    ],
    tags: ['komponen kalimat', 'objek', 'semantik', '施事', '受事'],
    level: 5,
  },

  // ── A.5.4.2 状语 (Keterangan) ────────────────────────────

  {
    id: 'g5-033',
    gfCode: '五-33',
    title: 'Keterangan Majemuk',
    titleZh: '多项状语',
    pattern: '[Waktu] + [Tempat] + [Cara/Sikap] + [Alat/Tujuan] + V',
    explanation: 'Dalam bahasa Mandarin, keterangan majemuk (beberapa keterangan sekaligus) umumnya mengikuti urutan: waktu → tempat → cara/sikap → kata kerja. Keterangan yang menggambarkan "bingkai" lebih besar didahulukan.',
    examples: [
      { zh: '他昨天在教室里认真地写完了作业。', pinyin: 'Tā zuótiān zài jiàoshì lǐ rènzhēn de xiě wán le zuòyè.', id: 'Dia kemarin di dalam kelas menyelesaikan PR dengan serius.' },
      { zh: '她为了通过考试昨天在家复习了一整天。', pinyin: 'Tā wèile tōngguò kǎoshì zuótiān zài jiā fùxí le yī zhěngtiān.', id: 'Demi lulus ujian, dia kemarin belajar di rumah seharian penuh.' },
      { zh: '我前天在路上意外地碰见了多年没见的老朋友。', pinyin: 'Wǒ qiántiān zài lùshàng yìwài de pèngjiàn le duōnián méi jiàn de lǎo péngyou.', id: 'Kemarin lusa saya secara tidak sengaja bertemu teman lama yang sudah bertahun-tahun tidak jumpa di jalan.' },
    ],
    tags: ['komponen kalimat', 'keterangan', 'majemuk', 'urutan'],
    level: 5,
  },

  // ── A.5.4.3 补语 (Komplemen) ─────────────────────────────

  {
    id: 'g5-034',
    gfCode: '五-34',
    title: 'Komplemen Arah 4: Arti Lanjutan (Kiasan)',
    titleZh: '趋向补语4：表示引申意义',
    pattern: 'V + 上/起来/下去/下来 (kiasan)',
    explanation: 'Komplemen arah dipakai dalam arti kiasan/lanjutan: 上 (menempel/mulai terhubung), 起来 (mulai/bangkit), 下去 (berlanjut), 下来 (menetap/stabil). Bukan arti gerakan fisik.',
    examples: [
      { zh: '这孩子又玩儿上游戏了。', pinyin: 'Zhè háizi yòu wánr shàng yóuxì le.', id: 'Anak ini kembali asyik main game lagi.' },
      { zh: '他大声地哭起来了。', pinyin: 'Tā dàshēng de kū qǐlái le.', id: 'Dia menangis keras-keras.' },
      { zh: '这项工作上个月就干起来了。', pinyin: 'Zhè xiàng gōngzuò shàng gè yuè jiù gàn qǐlái le.', id: 'Pekerjaan ini sudah mulai dikerjakan bulan lalu.' },
      { zh: '别紧张，你说下去。', pinyin: 'Bié jǐnzhāng, nǐ shuō xià qù.', id: 'Jangan gugup, lanjutkan saja bicara.' },
      { zh: '你的中文说得不错，我建议你继续学下去。', pinyin: 'Nǐ de Zhōngwén shuō de bùcuò, wǒ jiànyì nǐ jìxù xué xià qù.', id: 'Bahasa Mandarin kamu sudah bagus, saya sarankan terus belajar.' },
    ],
    tags: ['komplemen arah', '趋向补语', 'kiasan', 'lanjutan'],
    level: 5,
  },

  {
    id: 'g5-035',
    gfCode: '五-35',
    title: 'Komplemen Kemungkinan 2: V + 得/不得',
    titleZh: '可能补语2：动词 + 得/不得',
    pattern: 'V + 得 (boleh/bisa) / V + 不得 (tidak boleh)',
    explanation: 'V + 得 menyatakan bahwa tindakan boleh atau bisa dilakukan. V + 不得 menyatakan bahwa tindakan tidak boleh dilakukan karena berbahaya atau tidak pantas.',
    examples: [
      { zh: '这种药吃得还是吃不得，得听医生的。', pinyin: 'Zhè zhǒng yào chī de háishì chī bu de, děi tīng yīshēng de.', id: 'Obat ini boleh dimakan atau tidak, harus ikut kata dokter.' },
      { zh: '这些东西你可拿不得，很危险的。', pinyin: 'Zhèxiē dōngxi nǐ kě ná bu de, hěn wēixiǎn de.', id: 'Barang-barang ini tidak boleh kamu ambil, sangat berbahaya.' },
      { zh: '这种没有原则的话可说不得。', pinyin: 'Zhè zhǒng méiyǒu yuánzé de huà kě shuō bu de.', id: 'Perkataan yang tidak berprinsip seperti ini tidak boleh diucapkan.' },
    ],
    tags: ['komplemen kemungkinan', '得/不得', 'boleh', 'larangan'],
    level: 5,
  },

  {
    id: 'g5-036',
    gfCode: '五-36',
    title: 'Komplemen Tingkat 2: Lanjutan',
    titleZh: '程度补语2：进一步说明',
    pattern: '(1) Adj/V psikologi + 得 + 不得了/慌/厉害\n(2) V/Adj + 坏/透 + 了',
    explanation: '(1) Mengungkapkan tingkat yang sangat ekstrem dengan 不得了 (luar biasa), 慌 (panik/gugup), 厉害 (hebat/parah). (2) 坏了/透了 menyatakan tingkat sangat buruk atau jenuh.',
    examples: [
      { zh: '爸爸答应去公园，儿子开心得不得了。', pinyin: 'Bàba dāyìng qù gōngyuán, érzi kāixīn de bùdéliǎo.', id: 'Ayah berjanji akan ke taman, anaknya senang sekali.' },
      { zh: '我只是累得慌，休息休息就好了。', pinyin: 'Wǒ zhǐshì lèi de huāng, xiūxí xiūxí jiù hǎo le.', id: 'Saya hanya sangat kelelahan, istirahat sebentar nanti baikan.' },
      { zh: '听说要打针，她害怕得厉害。', pinyin: 'Tīng shuō yào dǎ zhēn, tā hàipà de lìhài.', id: 'Mendengar harus disuntik, dia sangat ketakutan.' },
      { zh: '这么晚了孩子还没回家，张老师担心坏了。', pinyin: 'Zhème wǎn le háizi hái méi huí jiā, Zhāng lǎoshī dānxīn huài le.', id: 'Sudah begitu malam anak belum pulang, Guru Zhang sangat khawatir.' },
      { zh: '第一次被别人拒绝，我心情坏透了。', pinyin: 'Dì yīcì bèi biérén jùjué, wǒ xīnqíng huài tòu le.', id: 'Pertama kali ditolak orang, suasana hati saya benar-benar hancur.' },
    ],
    tags: ['komplemen tingkat', '程度补语', '不得了', '坏了', 'ekstrem'],
    level: 5,
  },

  {
    id: 'g5-037',
    gfCode: '五-37',
    title: 'Komplemen Keadaan 2: V/Adj + 得 + Klausa',
    titleZh: '状态补语2：动词/形容词 + 得 + 短语',
    pattern: '(1) V/Adj + 得 + Klausa Verbal\n(2) V/Adj + 得 + Klausa Predikat',
    explanation: '(1) V/Adj + 得 + klausa verbal pendek (misal: 难过得吃不下饭). (2) V/Adj + 得 + klausa predikat nominatif (misal: 饿得肚子疼). Komplemen keadaan yang lebih kompleks dari HSK 4.',
    examples: [
      { zh: '他难过得吃不下饭。', pinyin: 'Tā nánguò de chī bu xià fàn.', id: 'Dia sangat sedih sampai tidak bisa makan.' },
      { zh: '她气得说不出话来。', pinyin: 'Tā qì de shuō bu chū huà lái.', id: 'Dia sangat marah sampai tidak bisa berkata-kata.' },
      { zh: '她伤心得哭了起来。', pinyin: 'Tā shāngxīn de kū le qǐlái.', id: 'Dia sangat sedih sampai menangis.' },
      { zh: '我早上没吃饭，饿得肚子疼。', pinyin: 'Wǒ zǎoshàng méi chīfàn, è de dùzi téng.', id: 'Saya tidak sarapan, lapar sampai sakit perut.' },
      { zh: '房间里热得人头痛。', pinyin: 'Fángjiān lǐ rè de rén tóutòng.', id: 'Di kamar panas sampai bikin sakit kepala.' },
      { zh: '孩子得了冠军，父母乐得嘴都合不上了。', pinyin: 'Háizi dé le guànjūn, fùmǔ lè de zuǐ dōu hé bu shàng le.', id: 'Anak meraih juara, orang tua senang sampai mulut tidak bisa menutup.' },
    ],
    tags: ['komplemen keadaan', '状态补语', 'V+得', 'klausa'],
    level: 5,
  },

  // ════════════════════════════════════════════════════════════
  // A.5.5  句子的类型 — JENIS KALIMAT
  // ════════════════════════════════════════════════════════════

  // ── A.5.5.1 特殊句型 (Kalimat Khusus) ────────────────────

  {
    id: 'g5-038',
    gfCode: '五-38',
    title: 'Kalimat "有" 3',
    titleZh: '"有"字句3',
    pattern: '(1) S + 有 + 着 + O (ada+sedang)\n(2) S + V + 有 + O (V+ada)',
    explanation: '(1) 有着 menyatakan keberadaan atau kepemilikan yang sudah berlangsung lama / mendalam: S + 有着 + O. (2) Kata kerja + 有 + O: menyatakan bahwa pada subjek tersebut ada sesuatu yang terukir/tertulis.',
    examples: [
      { zh: '两个国家之间有着长期的友好关系。', pinyin: 'Liǎng gè guójiā zhī jiān yǒuzhe chángqī de yǒuhǎo guānxi.', id: 'Antara dua negara itu terdapat hubungan persahabatan jangka panjang.' },
      { zh: '他们之间有着很深的误会。', pinyin: 'Tāmen zhī jiān yǒuzhe hěn shēn de wùhuì.', id: 'Di antara mereka terdapat kesalahpahaman yang sangat dalam.' },
      { zh: '书上写有他的名字。', pinyin: 'Shū shàng xiě yǒu tā de míngzì.', id: 'Di buku tertulis namanya.' },
      { zh: '这双筷子上刻有漂亮的图案。', pinyin: 'Zhè shuāng kuàizi shàng kè yǒu piàoliang de tú\'àn.', id: 'Pada sepasang sumpit ini terukir motif yang indah.' },
    ],
    tags: ['kalimat khusus', '有字句', '有着', 'keberadaan'],
    level: 5,
  },

  {
    id: 'g5-039',
    gfCode: '五-39',
    title: 'Kalimat "把" 3: Menyatakan Perlakuan',
    titleZh: '"把"字句3：表处置',
    pattern: '(1) S + 把 + O + 状语 + V\n(2) S + 把 + O + 一 + V\n(3) S + 把 + O + V + 了\n(4) S + 把 + O1 + V + O2',
    explanation: 'Kalimat 把 tingkat lanjut: (1) Dengan keterangan cara (状语) sebelum kata kerja. (2) Dengan 一+V (tindakan sebentar). (3) Dengan 了 setelah V (tindakan selesai). (4) Dengan dua objek (O1 dipindah ke O2).',
    examples: [
      { zh: '他总是把东西到处乱扔。', pinyin: 'Tā zǒngshì bǎ dōngxi dàochù luàn rēng.', id: 'Dia selalu melempar barang ke sana ke mari sembarangan.' },
      { zh: '她把东西一放，转身就走了。', pinyin: 'Tā bǎ dōngxi yī fàng, zhuǎnshēn jiù zǒu le.', id: 'Dia meletakkan barang, lalu berbalik dan pergi.' },
      { zh: '你怎么把这件事忘了？', pinyin: 'Nǐ zěnme bǎ zhè jiàn shì wàng le?', id: 'Bagaimana kamu bisa melupakan urusan ini?' },
      { zh: '他把身上的钱交学费了。', pinyin: 'Tā bǎ shēnshàng de qián jiāo xuéfèi le.', id: 'Dia membayar uang sekolah dengan uang yang ada di badannya.' },
    ],
    tags: ['kalimat khusus', '把字句', 'perlakuan', 'lanjutan'],
    level: 5,
  },

  {
    id: 'g5-040',
    gfCode: '五-40',
    title: 'Kalimat Pasif 3: Kalimat Pasif Tersembunyi',
    titleZh: '被动句3：意念被动句',
    pattern: 'O + V + 了/光/破/完 (tanpa 被)',
    explanation: 'Kalimat pasif tersembunyi (意念被动句) adalah kalimat yang secara semantis bermakna pasif tetapi tidak menggunakan 被. Objek yang dikenai tindakan menjadi subjek kalimat.',
    examples: [
      { zh: '蛋糕吃光了。', pinyin: 'Dàngāo chī guāng le.', id: 'Kue habis dimakan (oleh seseorang).' },
      { zh: '衣服穿破了。', pinyin: 'Yīfú chuān pò le.', id: 'Baju robek karena dipakai.' },
      { zh: '车票卖完了。', pinyin: 'Chēpiào mài wán le.', id: 'Tiket habis terjual.' },
    ],
    tags: ['kalimat pasif', '意念被动句', 'pasif tersembunyi', 'tanpa被'],
    level: 5,
  },

  {
    id: 'g5-041',
    gfCode: '五-41',
    title: 'Kalimat Rangkap 3: Dua Klausa Verbal Sebab-Akibat, Kontras, Syarat',
    titleZh: '连动句3：前后两个动词性词语具有因果、转折、条件关系',
    pattern: 'VP1 (sebab/syarat/kontras) → VP2 (akibat/hasil)',
    explanation: 'Kalimat rangkap dua predikat verbal di mana klausa pertama dan kedua memiliki hubungan sebab-akibat, kontras, atau kondisi tanpa kata sambung eksplisit.',
    examples: [
      { zh: '李老师生病住院了。', pinyin: 'Lǐ lǎoshī shēngbìng zhùyuàn le.', id: 'Guru Li sakit masuk rumah sakit.' },
      { zh: '这本书她借了没看。', pinyin: 'Zhè běn shū tā jiè le méi kàn.', id: 'Buku ini dia pinjam tapi tidak dibaca.' },
      { zh: '她有办法解决问题。', pinyin: 'Tā yǒu bànfǎ jiějué wèntí.', id: 'Dia punya cara untuk menyelesaikan masalah.' },
    ],
    tags: ['kalimat rangkap', '连动句', 'sebab akibat', 'kontras', 'syarat'],
    level: 5,
  },

  {
    id: 'g5-042',
    gfCode: '五-42',
    title: 'Kalimat Kausatif 3: Menyatakan Menyuruh/Membuat',
    titleZh: '兼语句3：表致使',
    pattern: 'S + 叫/令/使/让 + 人称代词 + VP',
    explanation: 'Kalimat kausatif dengan 叫、令、使、让 menyatakan bahwa subjek menyebabkan seseorang melakukan sesuatu atau berada dalam keadaan tertentu.',
    examples: [
      { zh: '老师叫她早点儿回去。', pinyin: 'Lǎoshī jiào tā zǎo diǎnr huí qù.', id: 'Guru menyuruh dia pulang lebih awal.' },
      { zh: '这件事令她吃不下饭。', pinyin: 'Zhè jiàn shì lìng tā chī bu xià fàn.', id: 'Urusan ini membuat dia tidak bisa makan.' },
      { zh: '他的做法使大家再也不敢相信他了。', pinyin: 'Tā de zuòfǎ shǐ dàjiā zài yě bù gǎn xiāngxìn tā le.', id: 'Cara bertindaknya membuat semua orang tidak lagi berani mempercayainya.' },
      { zh: '明天的考试让我睡不着觉。', pinyin: 'Míngtiān de kǎoshì ràng wǒ shuì bu zháo jiào.', id: 'Ujian besok membuat saya tidak bisa tidur.' },
    ],
    tags: ['kalimat kausatif', '兼语句', 'menyuruh', 'membuat', '叫令使让'],
    level: 5,
  },

  {
    id: 'g5-043',
    gfCode: '五-43',
    title: 'Kalimat Perbandingan 5',
    titleZh: '比较句5',
    pattern: '(1) 跟……相比，Klausa Perbandingan\n(2) A + Adj + B + 数量补语',
    explanation: '(1) 跟……相比 berarti "dibandingkan dengan ...". (2) Pola A比B+Adj+数量补语 menyatakan perbedaan yang terukur: "A lebih ... dari B sebesar [jumlah]".',
    examples: [
      { zh: '跟上次考试相比，这次没有那么难。', pinyin: 'Gēn shàngcì kǎoshì xiāngbǐ, zhè cì méiyǒu nàme nán.', id: 'Dibandingkan dengan ujian lalu, kali ini tidak sesulit itu.' },
      { zh: '她高我五厘米。', pinyin: 'Tā gāo wǒ wǔ lí mǐ.', id: 'Dia lebih tinggi dari saya lima sentimeter.' },
      { zh: '他早我十分钟。', pinyin: 'Tā zǎo wǒ shí fēnzhōng.', id: 'Dia lebih awal dari saya sepuluh menit.' },
      { zh: '姐姐大我十岁。', pinyin: 'Jiějiě dà wǒ shí suì.', id: 'Kakak perempuan lebih tua dari saya sepuluh tahun.' },
    ],
    tags: ['kalimat perbandingan', '比较句', '跟……相比', 'selisih'],
    level: 5,
  },

  // ── A.5.5.2 复句 (Kalimat Majemuk) ──────────────────────

  {
    id: 'g5-044',
    gfCode: '五-44',
    title: 'Kalimat Pilihan: 或是……，或是……',
    titleZh: '选择复句：或是……，或是……',
    pattern: '或是 + Klausa1，或是 + Klausa2',
    explanation: '或是……，或是…… berarti "entah ... atau ...". Menyatakan dua kemungkinan pilihan yang mana salah satunya adalah benar.',
    examples: [
      { zh: '这件事或是哥哥做的，或是弟弟做的。', pinyin: 'Zhè jiàn shì huòshì gēge zuò de, huòshì dìdi zuò de.', id: 'Urusan ini entah kakak yang melakukan atau adik yang melakukan.' },
      { zh: '你或是参加这次考试，或是明年再学一遍这门课。', pinyin: 'Nǐ huòshì cānjiā zhè cì kǎoshì, huòshì míngnián zài xué yībiàn zhè mén kè.', id: 'Kamu entah ikut ujian kali ini, atau tahun depan belajar lagi mata kuliah ini.' },
    ],
    tags: ['kalimat majemuk', 'pilihan', '或是', 'entah...atau'],
    level: 5,
  },

  {
    id: 'g5-045',
    gfCode: '五-45',
    title: 'Kalimat Kontras: 尽管……，但是/可是……',
    titleZh: '转折复句：尽管……，但是/可是……',
    pattern: '尽管 + Klausa1，但是/可是 + Klausa2',
    explanation: '尽管……，但是/可是…… berarti "meskipun ... tetapi ...". Menyatakan kontras di mana kondisi pertama tidak menghalangi kondisi kedua.',
    examples: [
      { zh: '尽管这次考试很难，但是很多人都通过了。', pinyin: 'Jǐnguǎn zhè cì kǎoshì hěn nán, dànshì hěn duō rén dōu tōngguò le.', id: 'Meskipun ujian kali ini sangat sulit, tetapi banyak orang yang lulus.' },
      { zh: '尽管外面在下雨，可是他一定要去超市买东西。', pinyin: 'Jǐnguǎn wàimiàn zài xià yǔ, kěshì tā yīdìng yào qù chāoshì mǎi dōngxi.', id: 'Meskipun di luar sedang hujan, tetapi dia tetap harus pergi ke supermarket membeli sesuatu.' },
      { zh: '尽管他不接受我的意见，可是我有意见还是要向他提。', pinyin: 'Jǐnguǎn tā bù jiēshòu wǒ de yìjiàn, kěshì wǒ yǒu yìjiàn háishì yào xiàng tā tí.', id: 'Meskipun dia tidak menerima pendapat saya, tetapi jika saya punya pendapat tetap akan saya sampaikan.' },
    ],
    tags: ['kalimat majemuk', 'kontras', '尽管', '但是', 'meskipun'],
    level: 5,
  },

  {
    id: 'g5-046',
    gfCode: '五-46',
    title: 'Kalimat Hipotesis: 一旦……，就……',
    titleZh: '假设复句：一旦……，就……',
    pattern: '一旦 + kondisi，就 + akibat',
    explanation: '一旦……，就…… berarti "begitu ... maka .../kalau sampai ... maka ...". Menyatakan kondisi hipotesis yang bila terjadi akan segera mengakibatkan sesuatu. Biasanya untuk situasi yang serius.',
    examples: [
      { zh: '一旦考试不及格，我就要延期毕业了。', pinyin: 'Yīdàn kǎoshì bù jí gé, wǒ jiù yào yánqī bìyè le.', id: 'Kalau sampai tidak lulus ujian, saya harus menunda kelulusan.' },
      { zh: '一旦地铁建成，堵车的情况就可大大缓解。', pinyin: 'Yīdàn dìtiě jiànchéng, dǔchē de qíngkuàng jiù kě dàdà huǎnjiě.', id: 'Begitu MRT selesai dibangun, kemacetan akan sangat berkurang.' },
      { zh: '中文一旦学起来，就再也放不下了。', pinyin: 'Zhōngwén yīdàn xué qǐlái, jiù zài yě fàng bú xià le.', id: 'Begitu mulai belajar bahasa Mandarin, tidak akan bisa berhenti lagi.' },
    ],
    tags: ['kalimat majemuk', 'hipotesis', '一旦', 'kondisi'],
    level: 5,
  },

  {
    id: 'g5-047',
    gfCode: '五-47',
    title: 'Kalimat Hipotesis: 要是……，（就）……，否则……',
    titleZh: '假设复句：要是……，（就）……，否则……',
    pattern: '要是 + kondisi，（就）+ akibat，否则 + akibat alternatif',
    explanation: '要是……，就……，否则…… berarti "kalau ..., maka ...; kalau tidak, maka ..." Menyatakan hipotesis dengan dua kemungkinan konsekuensi.',
    examples: [
      { zh: '要是他不去，我也不去了，否则我一个人去太危险了。', pinyin: 'Yàoshi tā bú qù, wǒ yě bú qù le, fǒuzé wǒ yīgè rén qù tài wēixiǎn le.', id: 'Kalau dia tidak pergi, saya juga tidak jadi pergi, kalau tidak, pergi sendirian terlalu berbahaya.' },
      { zh: '要是明天下雨，我们就不去爬山了，否则会冻感冒的。', pinyin: 'Yàoshi míngtiān xià yǔ, wǒmen jiù bú qù páshān le, fǒuzé huì dòng gǎnmào de.', id: 'Kalau besok hujan, kita tidak jadi mendaki gunung, kalau tidak, bisa kedinginan sampai masuk angin.' },
    ],
    tags: ['kalimat majemuk', 'hipotesis', '要是', '否则', 'kalau tidak'],
    level: 5,
  },

  {
    id: 'g5-048',
    gfCode: '五-48',
    title: 'Kalimat Kondisi: 除非……，才……',
    titleZh: '条件复句：除非……，才……',
    pattern: '除非 + syarat satu-satunya，才 + akibat',
    explanation: '除非……，才…… berarti "hanya jika ... baru bisa ...". Menyatakan syarat satu-satunya yang diperlukan agar sesuatu terjadi.',
    examples: [
      { zh: '除非你答应我，我才和你一起去。', pinyin: 'Chúfēi nǐ dāyìng wǒ, wǒ cái hé nǐ yīqǐ qù.', id: 'Hanya jika kamu berjanji kepada saya, baru saya mau pergi bersama kamu.' },
      { zh: '除非你努力学习，才有可能考上大学。', pinyin: 'Chúfēi nǐ nǔlì xuéxí, cái yǒu kěnéng kǎoshàng dàxué.', id: 'Hanya jika kamu belajar keras, baru ada kemungkinan masuk universitas.' },
      { zh: '除非心情好，他才会答应我们的要求。', pinyin: 'Chúfēi xīnqíng hǎo, tā cái huì dāyìng wǒmen de yāoqiú.', id: 'Hanya jika hatinya sedang bagus, baru dia akan menyetujui permintaan kita.' },
    ],
    tags: ['kalimat majemuk', 'kondisi', '除非', '才', 'syarat satu-satunya'],
    level: 5,
  },

  {
    id: 'g5-049',
    gfCode: '五-49',
    title: 'Kalimat Kondisi: 除非……，否则/不然……',
    titleZh: '条件复句：除非……，否则/不然……',
    pattern: '除非 + kondisi，否则/不然 + akibat negatif',
    explanation: '除非……，否则/不然…… berarti "kecuali jika ...; kalau tidak maka ...". Menyatakan bahwa tanpa syarat tertentu, akibat negatif tidak dapat dihindari.',
    examples: [
      { zh: '除非坐飞机去，否则肯定来不及了。', pinyin: 'Chúfēi zuò fēijī qù, fǒuzé kěndìng lái bu jí le.', id: 'Kecuali naik pesawat pergi, kalau tidak pasti tidak keburu.' },
      { zh: '除非你仔细检查，不然太容易出错了。', pinyin: 'Chúfēi nǐ zǐxì jiǎnchá, bùrán tài róngyì chū cuò le.', id: 'Kecuali kamu periksa dengan teliti, kalau tidak terlalu mudah salah.' },
    ],
    tags: ['kalimat majemuk', 'kondisi', '除非', '否则', 'kecuali'],
    level: 5,
  },

  {
    id: 'g5-050',
    gfCode: '五-50',
    title: 'Kalimat Sebab-Akibat: ……，因而……',
    titleZh: '因果复句：……，因而……',
    pattern: 'Klausa Sebab，因而 + Klausa Akibat',
    explanation: '因而 berarti "oleh karena itu / sehingga". Menghubungkan sebab dengan akibat logisnya. Lebih formal dari 所以.',
    examples: [
      { zh: '他生病了，因而没来上课。', pinyin: 'Tā shēngbìng le, yīn\'ér méi lái shàngkè.', id: 'Dia sakit, oleh karena itu tidak datang kuliah.' },
      { zh: '她按时完成了任务，因而受到公司的奖励。', pinyin: 'Tā ànshí wánchéng le rènwù, yīn\'ér shòudào gōngsī de jiǎnglì.', id: 'Dia menyelesaikan tugas tepat waktu, sehingga mendapat penghargaan perusahaan.' },
      { zh: '这次考试太难了，因而很多学生都没有通过。', pinyin: 'Zhè cì kǎoshì tài nán le, yīn\'ér hěn duō xuéshēng dōu méiyǒu tōngguò.', id: 'Ujian kali ini terlalu sulit, sehingga banyak siswa yang tidak lulus.' },
    ],
    tags: ['kalimat majemuk', 'sebab akibat', '因而', 'oleh karena itu'],
    level: 5,
  },

  {
    id: 'g5-051',
    gfCode: '五-51',
    title: 'Kalimat Konsesi: 即使……，也……',
    titleZh: '让步复句：即使……，也……',
    pattern: '即使 + kondisi hipotesis，也 + tetap terjadi',
    explanation: '即使……，也…… berarti "sekalipun / bahkan jika ... pun tetap ...". Menyatakan bahwa kondisi di klausa pertama (meskipun ekstrem atau tidak nyata) tidak mengubah hasil di klausa kedua.',
    examples: [
      { zh: '即使天气不好，爬长城的人也不会少。', pinyin: 'Jíshǐ tiānqì bù hǎo, pá Chángchéng de rén yě bú huì shǎo.', id: 'Sekalipun cuaca tidak bagus, orang yang mendaki Tembok Besar tetap tidak akan sedikit.' },
      { zh: '他即使生病了，也坚持工作。', pinyin: 'Tā jíshǐ shēngbìng le, yě jiānchí gōngzuò.', id: 'Sekalipun dia sakit, dia tetap bertahan bekerja.' },
      { zh: '我即使睡得再晚，早上六点也准时醒。', pinyin: 'Wǒ jíshǐ shuì de zài wǎn, zǎoshàng liù diǎn yě zhǔnshí xǐng.', id: 'Sekalipun saya tidur sangat larut, jam enam pagi tetap bangun tepat waktu.' },
    ],
    tags: ['kalimat majemuk', 'konsesi', '即使', '也', 'sekalipun'],
    level: 5,
  },

  {
    id: 'g5-052',
    gfCode: '五-52',
    title: 'Kalimat Tujuan: ……，为的是……',
    titleZh: '目的复句：……，为的是……',
    pattern: 'VP，为的是 + Tujuan',
    explanation: '为的是 berarti "tujuannya adalah / dimaksudkan untuk". Menyatakan tujuan di balik suatu tindakan.',
    examples: [
      { zh: '我把车停在外面，为的是走的时候方便。', pinyin: 'Wǒ bǎ chē tíng zài wàimiàn, wèi de shì zǒu de shíhòu fāngbiàn.', id: 'Saya parkir mobil di luar, tujuannya agar mudah saat mau pergi.' },
      { zh: '她给你发这个信息，为的是提醒你注意安全。', pinyin: 'Tā gěi nǐ fā zhège xìnxī, wèi de shì tíxǐng nǐ zhùyì ānquán.', id: 'Dia mengirim pesan ini kepadamu, tujuannya adalah mengingatkanmu untuk berhati-hati.' },
      { zh: '老师这节课什么也没讲，为的是让我们有时间多练习口语。', pinyin: 'Lǎoshī zhè jié kè shénme yě méi jiǎng, wèi de shì ràng wǒmen yǒu shíjiān duō liànxí kǒuyǔ.', id: 'Guru tidak mengajarkan apa pun di sesi ini, tujuannya adalah memberi kita waktu untuk lebih banyak berlatih bahasa lisan.' },
    ],
    tags: ['kalimat majemuk', 'tujuan', '为的是', 'dimaksudkan untuk'],
    level: 5,
  },

  {
    id: 'g5-053',
    gfCode: '五-53',
    title: 'Kalimat Tujuan: ……，以便……',
    titleZh: '目的复句：……，以便……',
    pattern: 'VP1，以便 + VP2 (tujuan)',
    explanation: '以便 berarti "agar / supaya (lebih mudah)". Menghubungkan tindakan dengan tujuan praktisnya. Lebih formal dari 为了.',
    examples: [
      { zh: '我们要早一点儿出门，以便乘坐第一班公交车。', pinyin: 'Wǒmen yào zǎo yīdiǎnr chū mén, yǐbiàn chéngzuò dì yī bān gōngjiāochē.', id: 'Kita harus keluar lebih awal supaya bisa naik bus pertama.' },
      { zh: '她每天步行上班，以便锻炼身体。', pinyin: 'Tā měitiān bùxíng shàngbān, yǐbiàn duànliàn shēntǐ.', id: 'Dia berjalan kaki ke kantor setiap hari agar bisa berolahraga.' },
      { zh: '把手机号留下吧，以便跟你联系。', pinyin: 'Bǎ shǒujī hào liú xià ba, yǐbiàn gēn nǐ liánxì.', id: 'Tinggalkan nomor HPmu agar bisa menghubungimu.' },
    ],
    tags: ['kalimat majemuk', 'tujuan', '以便', 'agar', 'supaya'],
    level: 5,
  },

  {
    id: 'g5-054',
    gfCode: '五-54',
    title: 'Kalimat Kondensasi: 没有……就没有……',
    titleZh: '紧缩复句：没有……就没有……',
    pattern: '没有 + A，就没有 + B',
    explanation: '没有……就没有…… berarti "tanpa ..., tidak akan ada ...". Menyatakan hubungan kondisional yang erat: A adalah prasyarat mutlak bagi B.',
    examples: [
      { zh: '没有你的帮助就没有我的成功。', pinyin: 'Méiyǒu nǐ de bāngzhù jiù méiyǒu wǒ de chénggōng.', id: 'Tanpa bantuanmu tidak akan ada keberhasilanku.' },
      { zh: '没有水就没有生命的存在。', pinyin: 'Méiyǒu shuǐ jiù méiyǒu shēngmìng de cúnzài.', id: 'Tanpa air tidak akan ada keberadaan kehidupan.' },
      { zh: '没有平时的努力就没有今天的成绩。', pinyin: 'Méiyǒu píngshí de nǔlì jiù méiyǒu jīntiān de chéngjì.', id: 'Tanpa usaha sehari-hari tidak akan ada prestasi hari ini.' },
    ],
    tags: ['kalimat kondensasi', '没有就没有', 'syarat mutlak', 'tanpa'],
    level: 5,
  },

  {
    id: 'g5-055',
    gfCode: '五-55',
    title: 'Kalimat Konsesi Kondensasi: 再……也……',
    titleZh: '紧缩复句：再……也……',
    pattern: '再 + Adj/V + 也 + Akibat',
    explanation: '再……也…… berarti "seberapa pun ... tetap .../sekeras apapun ... tetap ...". Menyatakan bahwa walau kondisi mencapai tingkat tertinggi sekalipun, hasilnya tetap sama.',
    examples: [
      { zh: '这件事再难也要坚持下去。', pinyin: 'Zhè jiàn shì zài nán yě yào jiānchí xià qù.', id: 'Sesulit apapun urusan ini harus terus dijalankan.' },
      { zh: '雨下得再大我也要去上班。', pinyin: 'Yǔ xià de zài dà wǒ yě yào qù shàngbān.', id: 'Seberapa deras pun hujannya saya tetap harus pergi kerja.' },
      { zh: '这篇课文再长也要读完。', pinyin: 'Zhè piān kèwén zài cháng yě yào dú wán.', id: 'Sepanjang apapun teks pelajaran ini harus dibaca sampai selesai.' },
    ],
    tags: ['kalimat kondensasi', 'konsesi', '再……也', 'seberapa pun'],
    level: 5,
  },

  {
    id: 'g5-056',
    gfCode: '五-56',
    title: 'Kalimat Majemuk Ganda 1: Kalimat Sederhana + Majemuk',
    titleZh: '二重复句1：单句 + 复句；复句 + 单句',
    pattern: '单句 + 复句 / 复句 + 单句',
    explanation: 'Kalimat yang merupakan gabungan antara kalimat tunggal dengan kalimat majemuk, membentuk struktur bertingkat. Satu bagian bisa berupa kalimat tunggal dan bagian lain berupa kalimat majemuk.',
    examples: [
      { zh: '我决定去中国留学，即使中文再难我也要去学。', pinyin: 'Wǒ juédìng qù Zhōngguó liúxué, jíshǐ Zhōngwén zài nán wǒ yě yào qù xué.', id: 'Saya memutuskan belajar di Tiongkok, sekalipun bahasa Mandarin sesulit apapun saya tetap mau belajar.' },
      { zh: '因为生病所以我没去上课，没想到的是老师一下课就来看我了。', pinyin: 'Yīnwèi shēngbìng suǒyǐ wǒ méi qù shàngkè, méi xiǎngdào de shì lǎoshī yīxià kè jiù lái kàn wǒ le.', id: 'Karena sakit saya tidak masuk kuliah, yang tidak disangka adalah guru langsung datang menjenguk saya begitu kelas selesai.' },
    ],
    tags: ['kalimat majemuk ganda', '二重复句', 'bertingkat'],
    level: 5,
  },

  // ════════════════════════════════════════════════════════════
  // A.5.6  强调的方法 — METODE PENEKANAN
  // ════════════════════════════════════════════════════════════

  {
    id: 'g5-057',
    gfCode: '五-57',
    title: 'Penekanan dengan "再也不/没"',
    titleZh: '用"再也不/没"表示强调',
    pattern: 'S + 再也不/没 + V',
    explanation: '再也不 / 再也没 berarti "tidak akan pernah lagi / tidak pernah lagi". Mengungkapkan penekanan kuat bahwa sesuatu tidak akan atau tidak pernah terjadi lagi.',
    examples: [
      { zh: '从今天开始，我再也不会出这种错了。', pinyin: 'Cóng jīntiān kāishǐ, wǒ zài yě bú huì chū zhè zhǒng cuò le.', id: 'Mulai hari ini, saya tidak akan pernah membuat kesalahan seperti ini lagi.' },
      { zh: '他再也没跟我联系过。', pinyin: 'Tā zài yě méi gēn wǒ liánxìguò.', id: 'Dia tidak pernah lagi menghubungi saya.' },
      { zh: '我再也没见过她。', pinyin: 'Wǒ zài yě méi jiànguò tā.', id: 'Saya tidak pernah lagi bertemu dengannya.' },
    ],
    tags: ['penekanan', '再也不', '再也没', 'tidak pernah lagi'],
    level: 5,
  },

  {
    id: 'g5-058',
    gfCode: '五-58',
    title: 'Penekanan dengan Kata Keterangan "可"',
    titleZh: '用副词"可"表示强调',
    pattern: 'S + 可 + Adj/V + 了',
    explanation: '"可" dipakai sebagai kata keterangan untuk menekankan tingkat atau pentingnya sesuatu. Berarti "sungguh / benar-benar". Sering dipakai dalam konteks percakapan.',
    examples: [
      { zh: '你可来了，急死我了！', pinyin: 'Nǐ kě lái le, jísǐ wǒ le!', id: 'Kamu akhirnya datang juga, hampir bikin saya mati khawatir!' },
      { zh: '你可得注意身体呀，天天睡眠不足可不行！', pinyin: 'Nǐ kě děi zhùyì shēntǐ ya, tiāntiān shuìmián bùzú kě bù xíng!', id: 'Kamu benar-benar harus menjaga kesehatan, kurang tidur setiap hari sungguh tidak bisa!' },
      { zh: '你可不能让大家失望！', pinyin: 'Nǐ kě bù néng ràng dàjiā shīwàng!', id: 'Kamu sungguh tidak boleh mengecewakan semua orang!' },
    ],
    tags: ['penekanan', '可', 'benar-benar', 'menekankan'],
    level: 5,
  },

  {
    id: 'g5-059',
    gfCode: '五-59',
    title: 'Penekanan dengan "怎么都/也 + 不/没"',
    titleZh: '用"怎么都/也 + 不/没"表示强调',
    pattern: 'S + 怎么 + 都/也 + 不/没 + V',
    explanation: '怎么都/也 + 不/没 berarti "bagaimanapun juga tidak / tidak peduli bagaimana tetap tidak". Menekankan bahwa suatu tindakan tidak bisa terjadi dalam kondisi apapun.',
    examples: [
      { zh: '她怎么都没想到自己会失败。', pinyin: 'Tā zěnme dōu méi xiǎngdào zìjǐ huì shībài.', id: 'Bagaimanapun juga dia tidak pernah terpikir dirinya akan gagal.' },
      { zh: '他怎么也不会猜到谁要来看望他。', pinyin: 'Tā zěnme yě bú huì cāidào shuí yào lái kànwàng tā.', id: 'Bagaimanapun juga dia tidak akan bisa menebak siapa yang akan datang menjenguknya.' },
      { zh: '他的话我怎么都听不懂。', pinyin: 'Tā de huà wǒ zěnme dōu tīng bu dǒng.', id: 'Kata-katanya saya bagaimanapun tidak bisa mengerti.' },
      { zh: '昨天晚上我怎么也睡不着。', pinyin: 'Zuótiān wǎnshàng wǒ zěnme yě shuì bu zháo.', id: 'Tadi malam bagaimanapun saya tidak bisa tidur.' },
    ],
    tags: ['penekanan', '怎么都', '怎么也', 'tidak bisa bagaimanapun'],
    level: 5,
  },

  // ════════════════════════════════════════════════════════════
  // A.5.7  口语格式 — FORMAT PERCAKAPAN
  // ════════════════════════════════════════════════════════════

  {
    id: 'g5-060',
    gfCode: '五-60',
    title: 'Format Lisan: X也不是，Y也不是',
    titleZh: '口语格式：X也不是，Y也不是',
    pattern: 'VP1 + 也不是，VP2 + 也不是',
    explanation: 'X也不是，Y也不是 menyatakan situasi serba salah: tidak bisa melakukan X, tidak bisa pula melakukan Y. Mengungkapkan dilema atau kegalauan.',
    examples: [
      { zh: '他这样开玩笑，气得我哭也不是，笑也不是。', pinyin: 'Tā zhèyàng kāi wánxiào, qì de wǒ kū yě bú shì, xiào yě bú shì.', id: 'Dia bercanda seperti itu, bikin saya serba salah mau menangis tidak bisa, mau tertawa juga tidak bisa.' },
      { zh: '一来了这么多人，他紧张得坐也不是，站也不是。', pinyin: 'Yī lái le zhème duō rén, tā jǐnzhāng de zuò yě bú shì, zhàn yě bú shì.', id: 'Begitu datang sebanyak itu orang, dia gugup tidak tahu mau duduk atau berdiri.' },
      { zh: '走也不是，留也不是，真不知道怎么办好。', pinyin: 'Zǒu yě bú shì, liú yě bú shì, zhēn bù zhīdào zěnme bàn hǎo.', id: 'Pergi juga serba salah, tinggal juga serba salah, sungguh tidak tahu harus bagaimana.' },
    ],
    tags: ['format lisan', 'X也不是Y也不是', 'dilema', 'serba salah'],
    level: 5,
  },

  {
    id: 'g5-061',
    gfCode: '五-61',
    title: 'Format Lisan: X也X不得，Y也Y不得',
    titleZh: '口语格式：X也X不得，Y也Y不得',
    pattern: 'V1 + 也 + V1 + 不得，V2 + 也 + V2 + 不得',
    explanation: 'X也X不得，Y也Y不得 menyatakan bahwa dua tindakan yang berlawanan sama-sama tidak bisa dilakukan. Mengungkapkan situasi yang sangat susah atau serba tidak bisa.',
    examples: [
      { zh: '他腰疼起来的时候站也站不得，坐也坐不得。', pinyin: 'Tā yāo téng qǐlái de shíhòu zhàn yě zhàn bu de, zuò yě zuò bu de.', id: 'Ketika sakit pinggang kambuh, berdiri pun tidak bisa, duduk pun tidak bisa.' },
      { zh: '孩子大了，骂也骂不得，打也打不得。', pinyin: 'Háizi dà le, mà yě mà bu de, dǎ yě dǎ bu de.', id: 'Anak sudah besar, dimarahi tidak bisa, dipukul juga tidak bisa.' },
      { zh: '这件事愁得他吃也吃不得，睡也睡不得。', pinyin: 'Zhè jiàn shì chóu de tā chī yě chī bu de, shuì yě shuì bu de.', id: 'Urusan ini membuatnya cemas sampai makan tidak bisa, tidur juga tidak bisa.' },
    ],
    tags: ['format lisan', 'X也X不得', 'serba tidak bisa', 'dilema'],
    level: 5,
  },

  {
    id: 'g5-062',
    gfCode: '五-62',
    title: 'Format Lisan: X是它，Y也是它',
    titleZh: '口语格式：X是它，Y也是它',
    pattern: 'N1 + 是 + 它，N2 + 也 + 是 + 它',
    explanation: 'X是它，Y也是它 menyatakan bahwa tidak peduli apa yang terjadi (baik X maupun Y), semuanya tetap kembali ke hal yang sama. Menyatakan ketidakberdayaan atau pasrah.',
    examples: [
      { zh: '好是它，坏也是它，你没有别的选择。', pinyin: 'Hǎo shì tā, huài yě shì tā, nǐ méiyǒu biéde xuǎnzé.', id: 'Bagus itu dia, buruk juga itu dia, kamu tidak punya pilihan lain.' },
      { zh: '成功是它，失败也是它，这个选择我绝对不后悔。', pinyin: 'Chénggōng shì tā, shībài yě shì tā, zhège xuǎnzé wǒ juéduì bú hòuhuǐ.', id: 'Berhasil itu dia, gagal juga itu dia, pilihan ini saya sama sekali tidak menyesal.' },
    ],
    tags: ['format lisan', 'X是它Y也是它', 'pasrah', 'tidak ada pilihan'],
    level: 5,
  },

  {
    id: 'g5-063',
    gfCode: '五-63',
    title: 'Format Lisan: X着也是X着',
    titleZh: '口语格式：X着也是X着',
    pattern: 'V + 着 + 也 + 是 + V + 着',
    explanation: 'X着也是X着 menyatakan "toh sedang melakukan X juga, jadi tidak ada bedanya". Berarti melakukan atau tidak melakukan suatu hal tidak ada bedanya, sehingga sekalian saja.',
    examples: [
      { zh: '明天我去超市逛逛，反正闲着也是闲着。', pinyin: 'Míngtiān wǒ qù chāoshì guàngguàng, fǎnzhèng xiánzhe yě shì xiánzhe.', id: 'Besok saya mau jalan-jalan ke supermarket, toh menganggur juga menganggur.' },
      { zh: '那些衣服不喜欢了，放着也是放着，不如送人吧。', pinyin: 'Nàxiē yīfú bù xǐhuan le, fàngzhe yě shì fàngzhe, bùrú sòng rén ba.', id: 'Baju-baju itu sudah tidak suka, disimpan juga hanya tersimpan, lebih baik diberikan ke orang lain.' },
    ],
    tags: ['format lisan', 'X着也是X着', 'toh sama saja', 'sekalian'],
    level: 5,
  },

  {
    id: 'g5-064',
    gfCode: '五-64',
    title: 'Format Lisan: X归X，Y归Y',
    titleZh: '口语格式：X归X，Y归Y',
    pattern: 'N/V1 + 归 + N/V1，N/V2 + 归 + N/V2',
    explanation: 'X归X，Y归Y menyatakan bahwa X dan Y adalah dua hal yang berbeda dan harus diperlakukan secara terpisah. Berarti "urusan X ya urusan X, urusan Y ya urusan Y".',
    examples: [
      { zh: '想归想，做归做，结果完全不一样。', pinyin: 'Xiǎng guī xiǎng, zuò guī zuò, jiéguǒ wánquán bù yīyàng.', id: 'Berpikir ya urusan berpikir, berbuat ya urusan berbuat, hasilnya sama sekali berbeda.' },
      { zh: '吵归吵，闹归闹，大家还是好朋友。', pinyin: 'Chǎo guī chǎo, nào guī nào, dàjiā háishì hǎo péngyou.', id: 'Bertengkar ya bertengkar, ribut ya ribut, kalian tetap teman baik.' },
      { zh: '朋友归朋友，生意归生意，不能免费。', pinyin: 'Péngyou guī péngyou, shēngyì guī shēngyì, bù néng miǎnfèi.', id: 'Teman ya teman, bisnis ya bisnis, tidak bisa gratis.' },
    ],
    tags: ['format lisan', 'X归X Y归Y', 'pisahkan', 'berbeda urusan'],
    level: 5,
  },

  {
    id: 'g5-065',
    gfCode: '五-65',
    title: 'Format Lisan: 不管怎样说',
    titleZh: '口语格式：不管怎样说',
    pattern: '不管怎样说，+ Pernyataan',
    explanation: '不管怎样说 berarti "bagaimanapun juga dikatakan / dalam keadaan apapun". Menyatakan suatu kesimpulan atau penilaian yang berlaku tanpa tergantung pada cara pandang manapun.',
    examples: [
      { zh: '不管怎样说，你这么做就是不对的。', pinyin: 'Bùguǎn zěnyàng shuō, nǐ zhème zuò jiùshì bú duì de.', id: 'Bagaimanapun juga, kamu melakukan hal seperti ini memang tidak benar.' },
      { zh: '不管怎样说，这事总算办成了。', pinyin: 'Bùguǎn zěnyàng shuō, zhè shì zǒngsuàn bàn chéng le.', id: 'Bagaimanapun juga, urusan ini akhirnya berhasil diselesaikan.' },
    ],
    tags: ['format lisan', '不管怎样说', 'bagaimanapun', 'apapun alasannya'],
    level: 5,
  },

  {
    id: 'g5-066',
    gfCode: '五-66',
    title: 'Format Lisan: 看你X的 / 瞧他X的',
    titleZh: '口语格式：看你X的 / 瞧他X的',
    pattern: '看你/瞧他 + VP + 的',
    explanation: '看你X的 / 瞧他X的 adalah ungkapan lisan yang menyatakan kekaguman, keheranan, atau sindiran atas apa yang seseorang lakukan. Bisa positif (kagum) atau negatif (menyindir).',
    examples: [
      { zh: '看你说的，我哪里有那么能干？', pinyin: 'Kàn nǐ shuō de, wǒ nǎlǐ yǒu nàme néng gàn?', id: 'Lihat apa yang kamu bilang, mana saya sepintar itu?' },
      { zh: '甲：他说他这次准考第一。乙：瞧他吹的。', pinyin: 'Jiǎ: tā shuō tā zhè cì zhǔn kǎo dì yī. Yǐ: qiáo tā chuī de.', id: 'A: Dia bilang kali ini pasti dapat peringkat satu. B: Lihat dia omong besar.' },
    ],
    tags: ['format lisan', '看你X的', '瞧他X的', 'kagum', 'sindir'],
    level: 5,
  },

  {
    id: 'g5-067',
    gfCode: '五-67',
    title: 'Format Lisan: 真有你/他/她的',
    titleZh: '口语格式：真有你/他/她的',
    pattern: '真有 + 你/他/她 + 的',
    explanation: '真有你/他/她的 adalah ungkapan lisan yang menyatakan kekaguman atau keheranan atas kemampuan atau tindakan seseorang. Bisa bernada kagum positif atau sindiran.',
    examples: [
      { zh: '真有你的！电脑你也会修？', pinyin: 'Zhēn yǒu nǐ de! Diànnǎo nǐ yě huì xiū?', id: 'Sungguh hebat kamu! Komputer juga bisa kamu perbaiki?' },
      { zh: '这么难的事情他都有办法，真有他的！', pinyin: 'Zhème nán de shìqíng tā dōu yǒu bànfǎ, zhēn yǒu tā de!', id: 'Urusan sesulit ini dia punya cara juga, sungguh luar biasa dia!' },
    ],
    tags: ['format lisan', '真有你的', 'kagum', 'luar biasa'],
    level: 5,
  },

  {
    id: 'g5-068',
    gfCode: '五-68',
    title: 'Format Lisan: X什么X',
    titleZh: '口语格式：X什么X',
    pattern: 'V/N + 什么 + V/N',
    explanation: 'X什么X adalah pola lisan yang mengungkapkan kekesalan, pertanyaan retoris, atau sarkasme. Berarti "V apa (yang dikira), jangan V lah" atau menyatakan bahwa tindakan yang berlebihan.',
    examples: [
      { zh: '看什么看，再看就迟到了！', pinyin: 'Kàn shénme kàn, zài kàn jiù chídào le!', id: 'Lihat-lihat apa, kalau terus lihat nanti terlambat!' },
      { zh: '吃什么吃，再吃就撑死了！', pinyin: 'Chī shénme chī, zài chī jiù chēng sǐ le!', id: 'Makan-makan apa, kalau terus makan nanti kenyang mati!' },
    ],
    tags: ['format lisan', 'X什么X', 'kekesalan', 'retoris'],
    level: 5,
  },

  {
    id: 'g5-069',
    gfCode: '五-69',
    title: 'Format Lisan: 什么X不X（的）',
    titleZh: '口语格式：什么X不X（的）',
    pattern: '什么 + N/V + 不 + N/V + （的）',
    explanation: '什么X不X（的） adalah pola lisan yang meremehkan atau menganggap sesuatu tidak penting. Berarti "apa sih ... tidak ...", menyatakan bahwa X bukanlah hal yang perlu dipermasalahkan.',
    examples: [
      { zh: '什么钱不钱的，你这话说的太客气了。', pinyin: 'Shénme qián bù qián de, nǐ zhè huà shuō de tài kèqi le.', id: 'Apa sih soal uang tidak uang, kamu bicara terlalu sungkan.' },
      { zh: '什么麻烦不麻烦，我们之间不用这么客气。', pinyin: 'Shénme máfan bù máfan, wǒmen zhī jiān bùyòng zhème kèqi.', id: 'Apa sih soal merepotkan tidak merepotkan, di antara kita tidak perlu sungkan begitu.' },
      { zh: '什么合适不合适的，衣服能穿就行。', pinyin: 'Shénme héshì bù héshì de, yīfú néng chuān jiù xíng.', id: 'Apa sih soal cocok tidak cocok, baju yang bisa dipakai ya sudah.' },
    ],
    tags: ['format lisan', '什么X不X的', 'meremehkan', 'tidak penting'],
    level: 5,
  },

  // ════════════════════════════════════════════════════════════
  // A.5.8  句群 — KELOMPOK KALIMAT (WACANA)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g5-070',
    gfCode: '五-70',
    title: 'Kohesi dengan Kata Ganti (Pronominalisasi)',
    titleZh: '用代词复指',
    pattern: '(1) Kata ganti orang sebagai referensi\n(2) Kata ganti penunjuk sebagai referensi\n(3) Berbagai kata ganti yang saling mengacu',
    explanation: 'Dalam wacana, kata ganti (代词) dipakai untuk merujuk kembali pada nomina yang sudah disebutkan sebelumnya, sehingga wacana menjadi kohesif. Ada tiga jenis: (1) kata ganti orang (他、她、它), (2) kata ganti penunjuk (这、那), (3) kombinasi berbagai kata ganti.',
    examples: [
      { zh: '这个小伙子是我们学校的英国留学生。他来中国之前，在英国学过一点儿中文，他觉得中文很有意思。', pinyin: 'Zhège xiǎohuǒzi shì wǒmen xuéxiào de Yīngguó liúxuéshēng. Tā lái Zhōngguó zhīqián, zài Yīngguó xué guò yīdiǎnr Zhōngwén, tā juéde Zhōngwén hěn yǒuyìsi.', id: 'Pemuda ini adalah mahasiswa asing asal Inggris di sekolah kami. Sebelum datang ke Tiongkok, dia sudah belajar sedikit bahasa Mandarin di Inggris, dia merasa bahasa Mandarin sangat menarik.' },
      { zh: '中国的南方人喜欢喝一种酒。这种酒是用米做的，味道甜甜的，大人小孩儿都能喝。这也是北方人去南方旅行之后喜欢买的东西之一。', pinyin: 'Zhōngguó de nánfāngrén xǐhuan hē yī zhǒng jiǔ. Zhè zhǒng jiǔ shì yòng mǐ zuò de, wèidào tiántián de, dàrén xiǎoháir dōu néng hē. Zhè yě shì běifāngrén qù nánfāng lǚxíng zhīhòu xǐhuan mǎi de dōngxi zhī yī.', id: 'Orang selatan Tiongkok suka minum sejenis minuman keras. Minuman keras ini dibuat dari beras, rasanya manis, baik orang dewasa maupun anak-anak bisa meminumnya. Ini juga menjadi salah satu barang yang suka dibeli orang utara setelah wisata ke selatan.' },
    ],
    tags: ['wacana', 'kohesi', 'kata ganti', 'referensi', '代词复指'],
    level: 5,
  },

  {
    id: 'g5-071',
    gfCode: '五-71',
    title: 'Penghilangan Komponen Kalimat dalam Wacana',
    titleZh: '带省略成分',
    pattern: '(1) Penghilangan Subjek\n(2) Penghilangan Objek',
    explanation: 'Dalam wacana/paragraf, subjek atau objek yang sudah jelas bisa dihilangkan untuk menghindari pengulangan yang tidak perlu. (1) Subjek dihilangkan karena sudah disebutkan sebelumnya. (2) Objek dihilangkan karena sudah jelas dari konteks.',
    examples: [
      { zh: '（我）决定出国留学，我不得不和父母告别，想到以后再也没有人保护我、关心我，（我）心里有些担心。', pinyin: '(Wǒ) juédìng chūguó liúxué, wǒ bùdébù hé fùmǔ gàobié, xiǎngdào yǐhòu zài yě méiyǒu rén bǎohù wǒ, guānxīn wǒ, (wǒ) xīnlǐ yǒuxiē dānxīn.', id: '(Saya) memutuskan belajar ke luar negeri, saya terpaksa berpamitan dengan orang tua, membayangkan ke depannya tidak ada lagi yang melindungi saya, mempedulikan saya, (saya) agak khawatir dalam hati.' },
      { zh: '世界上任何事物都永远在运动、变化、发展，语言也是。语言的变化，包括语音、词汇和语法，短时间内不容易发现（这些变化），日子长了就表现出来了。', pinyin: 'Shìjiè shàng rènhé shìwù dōu yǒngyuǎn zài yùndòng, biànhuà, fāzhǎn, yǔyán yě shì. Yǔyán de biànhuà, bāokuò yǔyīn, cíhuì hé yǔfǎ, duǎn shíjiān nèi bù róngyì fāxiàn (zhèxiē biànhuà), rìzi cháng le jiù biǎoxiàn chūlái le.', id: 'Segala sesuatu di dunia selalu bergerak, berubah, berkembang, bahasa pun demikian. Perubahan bahasa, mencakup fonetik, kosakata, dan tata bahasa, dalam waktu singkat tidak mudah diketahui (perubahan-perubahan ini), lama-kelamaan barulah tampak.' },
    ],
    tags: ['wacana', 'kohesi', 'penghilangan', 'elipsis', '省略'],
    level: 5,
  },

];