// HSK 5 - Grammar (语法大纲)
// Sumber: tabel resmi 语法大纲 HSK 5 pada PDF yang dilampirkan user (hal. 395-397).
// PENTING: file ini DIBANGUN ULANG dari tabel PDF tsb, BUKAN dari draft hsk5grammar.js
// sebelumnya yang ternyata bersumber dari edisi lain (mengaku "GF 0025-2021") dan
// isinya berbeda dari PDF yang dilampirkan (mis. baris 名量词 di draft lama berisi
// "册、朵、幅、届、颗、匹、扇" sedangkan PDF resmi berisi "册、朵、届、颗、匹、行、
// 架、群、支、根、批、束、副、集、周"). Sesuai instruksi, draft lama TIDAK dipakai.
//
// Granularitas: 1 entry = 1 BARIS resmi di tabel PDF (kolom 类别/类别名称/细目),
// bukan per-kata individual di dalam satu baris (satu baris bisa berisi banyak kata
// yang levelnya sama, mis. baris 程度副词 berisi 6 kata sekaligus).
// Total baris resmi = 66 (语素:1, 词类:73→20 baris, 短语:17 baris, 句子成分:7 baris,
// 句子的类型:22 baris → total baris unik = 66).
//
// relatedVocabIds: PENDING - menunggu file hsk5.js (vocab) untuk dicocokkan secara
// terprogram. Saat ini semua diisi [] sebagai placeholder yang jujur (bukan diisi asal).
//
// Struktur: { id, gfCode, title (Indonesia), titleZh, pattern, explanation (Indonesia),
//            examples: [{ zh, pinyin, id }], tags, relatedVocabIds, level }

export const hsk5Grammar = [

  // ============================================================
  // 语素 (MORFEM) - 1 baris
  // ============================================================
  {
    id: 'g5-001', gfCode: 'W-01',
    title: 'Ungkapan 一头: langsung, dengan sekali gerak',
    titleZh: '语素后缀：一头',
    pattern: '动词 + 一头 + (钻/扎/栽等) ；一头 + 雾水',
    explanation: '一头 di sini bukan sekadar kata bilangan, melainkan ungkapan yang membentuk makna "langsung, dengan kepala lebih dulu, sekaligus", menerangkan cara suatu tindakan dilakukan secara tiba-tiba dan penuh.',
    examples: [
      { zh: '他一头扎进水里，游得飞快。', pinyin: 'Tā yìtóu zhā jìn shuǐ lǐ, yóu de fēikuài.', id: 'Dia langsung menceburkan diri ke air dan berenang dengan sangat cepat.' },
      { zh: '听了这个消息，我一头雾水，完全不知道发生了什么。', pinyin: 'Tīngle zhège xiāoxi, wǒ yìtóu wùshuǐ, wánquán bù zhīdào fāshēngle shénme.', id: 'Mendengar kabar itu, aku jadi benar-benar bingung, sama sekali tidak tahu apa yang terjadi.' },
    ],
    tags: ['语素', '后缀'], relatedVocabIds: [], level: 5,
  },

  // ============================================================
  // 词类 (KELAS KATA) - 20 baris
  // ============================================================
  {
    id: 'g5-002', gfCode: 'W-02',
    title: 'Kata Ganti Penunjuk: 彼此、如此、本',
    titleZh: '代词（指示代词）：彼此、如此、本',
    pattern: '彼此 = satu sama lain；如此 = demikian/seperti ini；本 + Nomina = -ini (formal)',
    explanation: '彼此 menyatakan hubungan timbal balik antara dua pihak/lebih. 如此 dipakai untuk merujuk pada keadaan/cara yang telah disebutkan sebelumnya, mirip "seperti ini/itu". 本 dipakai formal di depan kata benda untuk merujuk pihak/tempat/waktu yang sedang dibicarakan (mis. 本人, 本校, 本次).',
    examples: [
      { zh: '老同学见面，彼此都很激动。', pinyin: 'Lǎo tóngxué jiànmiàn, bǐcǐ dōu hěn jīdòng.', id: 'Teman lama bertemu, keduanya sama-sama sangat terharu.' },
      { zh: '情况既然如此，我们只能重新安排计划。', pinyin: 'Qíngkuàng jìrán rúcǐ, wǒmen zhǐ néng chóngxīn ānpái jìhuà.', id: 'Karena keadaannya begini, kami hanya bisa menyusun ulang rencana.' },
      { zh: '本次活动由学生会负责组织。', pinyin: 'Běn cì huódòng yóu xuéshēnghuì fùzé zǔzhī.', id: 'Kegiatan kali ini diselenggarakan oleh badan perwakilan mahasiswa.' },
    ],
    tags: ['代词', '指示代词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-003', gfCode: 'W-03',
    title: 'Kata Bantu Bilangan (Nomina): 册、朵、届、颗、匹、行、架、群、支、根、批、束、副、集、周',
    titleZh: '量词（名量词）：册、朵、届、颗、匹、行、架、群、支、根、批、束、副、集、周',
    pattern: '数词 + 量词 + 名词',
    explanation: 'Kelompok kata bantu bilangan untuk benda tertentu: 册(jilid buku), 朵(bunga/awan), 届(sesi/angkatan acara berkala), 颗(benda bulat kecil), 匹(kuda/kain), 行(baris), 架(mesin/alat), 群(kelompok makhluk), 支(benda panjang tipis), 根(benda panjang tipis kaku), 批(kelompok/gelombang), 束(ikatan), 副(sepasang/set), 集(episode), 周(putaran/episode mingguan).',
    examples: [
      { zh: '这套书一共有十册。', pinyin: 'Zhè tào shū yígòng yǒu shí cè.', id: 'Set buku ini seluruhnya ada sepuluh jilid.' },
      { zh: '她买了一束花，还有一副手套。', pinyin: 'Tā mǎile yí shù huā, hái yǒu yí fù shǒutào.', id: 'Dia membeli seikat bunga, dan juga sepasang sarung tangan.' },
      { zh: '这部电视剧一共有三十集。', pinyin: 'Zhè bù diànshìjù yígòng yǒu sānshí jí.', id: 'Serial TV ini seluruhnya ada tiga puluh episode.' },
    ],
    tags: ['量词', '名量词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-004', gfCode: 'W-04',
    title: 'Kata Bantu Bilangan (Verba): 眼',
    titleZh: '量词（动量词）：眼',
    pattern: '动词 + 数词 + 眼',
    explanation: '眼 dipakai sebagai kata bantu bilangan untuk tindakan "melihat sekilas", menghitung jumlah kali melirik/melihat sekilas.',
    examples: [
      { zh: '他看了我一眼，什么都没说就走了。', pinyin: 'Tā kànle wǒ yì yǎn, shénme dōu méi shuō jiù zǒule.', id: 'Dia melirik sekilas ke arahku, lalu pergi tanpa berkata apa-apa.' },
      { zh: '我瞄了一眼菜单，就点了平时爱吃的那道菜。', pinyin: 'Wǒ miáole yì yǎn càidān, jiù diǎnle píngshí ài chī de nà dào cài.', id: 'Aku melirik sekilas menu, lalu memesan masakan yang biasa kusukai.' },
    ],
    tags: ['量词', '动量词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-005', gfCode: 'W-05',
    title: 'Kata Keterangan Derajat: 过于、相当、较、可、格外、极其',
    titleZh: '副词（程度副词）：过于、相当、较¹、可²、格外、极其',
    pattern: '过于/相当/较/可/格外/极其 + Kata Sifat/Verba Psikologis',
    explanation: '过于 = terlalu (bernada negatif); 相当 = cukup/lumayan; 较 = lebih (perbandingan ringan, formal); 可 = sungguh/memang (menegaskan, nada seru); 格外 = luar biasa, lebih dari biasanya; 极其 = amat sangat (formal, tingkat ekstrem).',
    examples: [
      { zh: '这个要求过于严格了，很多人都做不到。', pinyin: 'Zhège yāoqiú guòyú yángé le, hěn duō rén dōu zuò bu dào.', id: 'Persyaratan ini terlalu ketat, banyak orang tidak bisa memenuhinya.' },
      { zh: '今天的考试相当难，我没写完。', pinyin: 'Jīntiān de kǎoshì xiāngdāng nán, wǒ méi xiěwán.', id: 'Ujian hari ini cukup sulit, aku tidak sempat menyelesaikannya.' },
      { zh: '下雪以后，山上的风景格外美丽。', pinyin: 'Xià xuě yǐhòu, shānshàng de fēngjǐng géwài měilì.', id: 'Setelah turun salju, pemandangan di gunung menjadi luar biasa indah.' },
      { zh: '这次比赛的难度较去年提高了不少。', pinyin: 'Zhè cì bǐsài de nándù jiào qùnián tígāole bù shǎo.', id: 'Tingkat kesulitan lomba kali ini lebih tinggi dibanding tahun lalu.' },
    ],
    tags: ['副词', '程度副词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-006', gfCode: 'W-06',
    title: 'Kata Keterangan Waktu: 时刻、曾经、立刻、连忙、始终、早已、即将、急忙、渐渐、尽快、早晚',
    titleZh: '副词（时间副词）：时刻、曾经、立刻、连忙、始终、早已、即将、急忙、渐渐、尽快、早晚',
    pattern: '时间副词 + 动词/形容词',
    explanation: '时刻 = setiap saat; 曾经 = pernah; 立刻/连忙/急忙 = segera/tergesa; 始终 = dari awal sampai akhir; 早已 = sudah sejak lama; 即将 = akan segera (formal); 渐渐 = berangsur-angsur; 尽快 = secepat mungkin; 早晚 = cepat/lambat pada akhirnya.',
    examples: [
      { zh: '医生随时提醒我们要时刻注意身体健康。', pinyin: 'Yīshēng suíshí tíxǐng wǒmen yào shíkè zhùyì shēntǐ jiànkāng.', id: 'Dokter selalu mengingatkan kami untuk senantiasa memperhatikan kesehatan tubuh.' },
      { zh: '他曾经在这家公司工作过五年。', pinyin: 'Tā céngjīng zài zhè jiā gōngsī gōngzuòguò wǔ nián.', id: 'Dia pernah bekerja di perusahaan ini selama lima tahun.' },
      { zh: '听到消息，她连忙跑了出去。', pinyin: 'Tīngdào xiāoxi, tā liánmáng pǎole chūqù.', id: 'Mendengar kabar itu, dia segera berlari keluar.' },
      { zh: '天渐渐黑了，我们尽快往回走吧。', pinyin: 'Tiān jiànjiàn hēi le, wǒmen jǐnkuài wǎng huí zǒu ba.', id: 'Hari semakin gelap, ayo kita secepatnya berjalan pulang.' },
    ],
    tags: ['副词', '时间副词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-007', gfCode: 'W-07',
    title: 'Kata Keterangan Frekuensi: 老是、通常、时常',
    titleZh: '副词（频率副词）：老是、通常、时常',
    pattern: '老是/通常/时常 + 动词',
    explanation: '老是 = selalu saja (sering bernada keluhan); 通常 = biasanya, umumnya; 时常 = sering kali.',
    examples: [
      { zh: '他老是迟到，大家都习惯了。', pinyin: 'Tā lǎoshi chídào, dàjiā dōu xíguàn le.', id: 'Dia selalu saja terlambat, semua orang sudah terbiasa.' },
      { zh: '我通常六点半起床。', pinyin: 'Wǒ tōngcháng liù diǎn bàn qǐchuáng.', id: 'Aku biasanya bangun jam setengah tujuh.' },
      { zh: '周末我们时常一起去爬山。', pinyin: 'Zhōumò wǒmen shícháng yìqǐ qù páshān.', id: 'Akhir pekan kami sering pergi mendaki gunung bersama.' },
    ],
    tags: ['副词', '频率副词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-008', gfCode: 'W-08',
    title: 'Kata Keterangan Cara: 尽量、亲自',
    titleZh: '副词（方式副词）：尽量、亲自',
    pattern: '尽量/亲自 + 动词',
    explanation: '尽量 = sebisa mungkin, semaksimal mungkin; 亲自 = secara langsung/pribadi (tidak diwakilkan).',
    examples: [
      { zh: '请大家尽量提前到场。', pinyin: 'Qǐng dàjiā jǐnliàng tíqián dàochǎng.', id: 'Mohon semuanya sebisa mungkin datang lebih awal.' },
      { zh: '经理亲自来机场接我们。', pinyin: 'Jīnglǐ qīnzì lái jīchǎng jiē wǒmen.', id: 'Manajer datang sendiri ke bandara untuk menjemput kami.' },
    ],
    tags: ['副词', '方式副词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-009', gfCode: 'W-09',
    title: 'Kata Keterangan Penghubung: 便、一旦',
    titleZh: '副词（关联副词）：便、一旦',
    pattern: '(一旦) + Klausa1，便 + Klausa2',
    explanation: '便 setara dengan 就 (lalu, maka), lebih formal, menghubungkan dua kejadian yang beruntun. 一旦 berarti "begitu/sekali saja (terjadi)", sering berpasangan dengan 便/就.',
    examples: [
      { zh: '他一到家，便打开电脑开始工作。', pinyin: 'Tā yí dào jiā, biàn dǎkāi diànnǎo kāishǐ gōngzuò.', id: 'Begitu sampai rumah, dia langsung membuka komputer dan mulai bekerja.' },
      { zh: '一旦决定了，就不要轻易改变。', pinyin: 'Yídàn juédìngle, jiù búyào qīngyì gǎibiàn.', id: 'Begitu sudah diputuskan, jangan mudah mengubahnya.' },
    ],
    tags: ['副词', '关联副词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-010', gfCode: 'W-10',
    title: 'Kata Keterangan Modalitas: 似乎、仿佛',
    titleZh: '副词（情态副词）：似乎、仿佛',
    pattern: '似乎/仿佛 + Klausa',
    explanation: '似乎 dan 仿佛 sama-sama berarti "sepertinya, seolah-olah", dipakai untuk menyampaikan dugaan/kesan berdasarkan pengamatan, bukan fakta pasti. 仿佛 lebih bergaya sastrawi.',
    examples: [
      { zh: '他似乎不太满意这个结果。', pinyin: 'Tā sìhū bú tài mǎnyì zhège jiéguǒ.', id: 'Dia sepertinya kurang puas dengan hasil ini.' },
      { zh: '站在山顶往下看，仿佛整个城市都在脚下。', pinyin: 'Zhàn zài shāndǐng wǎng xià kàn, fǎngfú zhěnggè chéngshì dōu zài jiǎoxià.', id: 'Berdiri di puncak gunung memandang ke bawah, seolah-olah seluruh kota berada di bawah kaki.' },
    ],
    tags: ['副词', '情态副词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-011', gfCode: 'W-11',
    title: 'Kata Keterangan Nada Bicara: 毕竟、居然、反正、根本、果然、简直、绝对、的确、反而、白、刚好、可',
    titleZh: '副词（语气副词）：毕竟、居然、反正、根本、果然、简直、绝对、的确、反而、白、刚好、可³',
    pattern: '语气副词 + Klausa',
    explanation: '毕竟 = bagaimanapun juga; 居然 = ternyata (di luar dugaan); 反正 = bagaimanapun juga (tak peduli kondisi); 根本 = sama sekali (menegaskan, sering + 不/没); 果然 = benar seperti dugaan; 简直 = benar-benar/hampir-hampir; 绝对 = mutlak/pasti; 的确 = memang benar; 反而 = sebaliknya/malah; 白 = sia-sia; 刚好 = kebetulan pas; 可 = sungguh (nada seru).',
    examples: [
      { zh: '他毕竟是老师，说的话还是有道理的。', pinyin: 'Tā bìjìng shì lǎoshī, shuō de huà háishi yǒu dàolǐ de.', id: 'Bagaimanapun juga dia adalah guru, apa yang dikatakannya tetap masuk akal.' },
      { zh: '没想到他居然一个人完成了这么大的项目。', pinyin: 'Méi xiǎngdào tā jūrán yí ge rén wánchéngle zhème dà de xiàngmù.', id: 'Tidak disangka dia ternyata menyelesaikan proyek sebesar ini sendirian.' },
      { zh: '天气预报说今天会下雨，果然到了下午就下起来了。', pinyin: 'Tiānqì yùbào shuō jīntiān huì xiàyǔ, guǒrán dàole xiàwǔ jiù xiàqilai le.', id: 'Ramalan cuaca bilang hari ini akan hujan, dan benar saja siang harinya mulai turun hujan.' },
      { zh: '我白等了他两个小时，他根本没来。', pinyin: 'Wǒ bái děngle tā liǎng ge xiǎoshí, tā gēnběn méi lái.', id: 'Aku sia-sia menunggunya dua jam, dia sama sekali tidak datang.' },
    ],
    tags: ['副词', '语气副词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-012', gfCode: 'W-12',
    title: 'Kata Depan Penanda Waktu/Tempat Asal: 自从',
    titleZh: '介词（引出时间、处所）：自从',
    pattern: '自从 + Waktu/Peristiwa，(就/都)……',
    explanation: '自从 berarti "sejak", menandai titik awal waktu suatu keadaan/kebiasaan dimulai, sering diikuti 就 atau 以后/以来.',
    examples: [
      { zh: '自从搬到这里，他每天都骑车上班。', pinyin: 'Zìcóng bāndào zhèlǐ, tā měitiān dōu qí chē shàngbān.', id: 'Sejak pindah ke sini, setiap hari dia bersepeda pergi kerja.' },
      { zh: '自从上次见面，我们已经三年没联系了。', pinyin: 'Zìcóng shàng cì jiànmiàn, wǒmen yǐjīng sān nián méi liánxì le.', id: 'Sejak pertemuan terakhir, kami sudah tiga tahun tidak berhubungan.' },
    ],
    tags: ['介词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-013', gfCode: 'W-13',
    title: 'Kata Depan Penanda Arah: 朝、沿（着）',
    titleZh: '介词（引出方向、路径）：朝、沿（着）',
    pattern: '朝/沿（着） + Tempat/Arah + 动词',
    explanation: '朝 menunjukkan arah tujuan tindakan ("menghadap/ke arah"); 沿(着) menunjukkan rute yang diikuti ("menyusuri/sepanjang").',
    examples: [
      { zh: '他朝我笑了笑，然后走开了。', pinyin: 'Tā cháo wǒ xiàole xiào, ránhòu zǒukāi le.', id: 'Dia tersenyum ke arahku, lalu berjalan pergi.' },
      { zh: '我们沿着河边散步，聊了很久。', pinyin: 'Wǒmen yánzhe hébiān sànbù, liáole hěn jiǔ.', id: 'Kami berjalan-jalan menyusuri tepi sungai dan mengobrol lama.' },
    ],
    tags: ['介词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-014', gfCode: 'W-14',
    title: 'Kata Depan Penanda Objek: 替、同、较',
    titleZh: '介词（引出对象）：替、同¹、较²',
    pattern: 'A + 替/同/较 + B + 动词/形容词',
    explanation: '替 = untuk/menggantikan; 同 (sebagai preposisi) = dengan (setara 跟); 较 = dibanding (perbandingan formal).',
    examples: [
      { zh: '今天我身体不舒服，请你替我请个假。', pinyin: 'Jīntiān wǒ shēntǐ bù shūfu, qǐng nǐ tì wǒ qǐng ge jià.', id: 'Hari ini badanku kurang enak, tolong ajukan izin untukku.' },
      { zh: '这个方案较原来的计划更省时间。', pinyin: 'Zhège fāng\'àn jiào yuánlái de jìhuà gèng shěng shíjiān.', id: 'Rencana ini lebih menghemat waktu dibanding rencana semula.' },
      { zh: '他同经理商量了很久，才做出决定。', pinyin: 'Tā tóng jīnglǐ shāngliangle hěn jiǔ, cái zuòchū juédìng.', id: 'Dia berdiskusi cukup lama dengan manajer, baru kemudian membuat keputusan.' },
    ],
    tags: ['介词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-015', gfCode: 'W-15',
    title: 'Kata Depan Penanda Sarana: 凭',
    titleZh: '介词（引出凭借、依据）：凭',
    pattern: '凭 + Sarana/Kemampuan + 动词',
    explanation: '凭 berarti "berdasarkan/mengandalkan", menunjukkan sarana/kemampuan yang menjadi dasar suatu tindakan.',
    examples: [
      { zh: '他凭自己的努力考上了理想的大学。', pinyin: 'Tā píng zìjǐ de nǔlì kǎoshàngle lǐxiǎng de dàxué.', id: 'Dia berhasil masuk universitas impian berkat usahanya sendiri.' },
      { zh: '凭这张卡，你可以免费参观博物馆。', pinyin: 'Píng zhè zhāng kǎ, nǐ kěyǐ miǎnfèi cānguān bówùguǎn.', id: 'Dengan kartu ini, kamu bisa mengunjungi museum secara gratis.' },
    ],
    tags: ['介词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-016', gfCode: 'W-16',
    title: 'Kata Depan Penanda Sumber Informasi: 据',
    titleZh: '介词（引出凭借、依据）：据',
    pattern: '据 + Sumber Informasi，……',
    explanation: '据 berarti "menurut/berdasarkan", dipakai di awal kalimat merujuk sumber informasi, gaya formal/tertulis.',
    examples: [
      { zh: '据天气预报，明天会有大雨。', pinyin: 'Jù tiānqì yùbào, míngtiān huì yǒu dàyǔ.', id: 'Menurut ramalan cuaca, besok akan turun hujan lebat.' },
      { zh: '据了解，这家公司下个月要搬到新办公室。', pinyin: 'Jù liǎojiě, zhè jiā gōngsī xià ge yuè yào bāndào xīn bàngōngshì.', id: 'Menurut informasi yang diperoleh, perusahaan ini bulan depan akan pindah ke kantor baru.' },
    ],
    tags: ['介词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-017', gfCode: 'W-17',
    title: 'Kata Depan Penanda Dasar/Landasan: 依据',
    titleZh: '介词（引出凭借、依据）：依据',
    pattern: '依据 + Dasar/Landasan，……',
    explanation: '依据 berarti "berdasarkan/berlandaskan", lebih formal daripada 根据, sering dipakai dalam konteks hukum, aturan, atau data resmi.',
    examples: [
      { zh: '依据公司规定，迟到三次要扣工资。', pinyin: 'Yījù gōngsī guīdìng, chídào sān cì yào kòu gōngzī.', id: 'Berdasarkan peraturan perusahaan, terlambat tiga kali akan dipotong gaji.' },
      { zh: '法院依据现有证据做出了判决。', pinyin: 'Fǎyuàn yījù xiànyǒu zhèngjù zuòchūle pànjué.', id: 'Pengadilan membuat putusan berdasarkan bukti yang ada.' },
    ],
    tags: ['介词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-018', gfCode: 'W-18',
    title: 'Kata Sambung Penghubung Kata/Frasa: 以及、同',
    titleZh: '连词（连接词或词组）：以及、同²',
    pattern: 'A、B、以及/同 C',
    explanation: '以及 dan 同 (konjungsi) sama-sama berarti "dan/serta", menghubungkan kata benda/frasa sejajar; 以及 lebih formal dan biasa dipakai di item terakhir daftar.',
    examples: [
      { zh: '会议将讨论预算、计划以及人员安排等问题。', pinyin: 'Huìyì jiāng tǎolùn yùsuàn, jìhuà yǐjí rényuán ānpái děng wèntí.', id: 'Rapat akan membahas anggaran, rencana, serta penempatan karyawan.' },
      { zh: '老师同学生一起讨论了这个问题。', pinyin: 'Lǎoshī tóng xuésheng yìqǐ tǎolùnle zhège wèntí.', id: 'Guru bersama para murid mendiskusikan masalah ini.' },
    ],
    tags: ['连词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-019', gfCode: 'W-19',
    title: 'Kata Sambung Penghubung Klausa: 从而、可见、假如、总之',
    titleZh: '连词（连接分句或句子）：从而、可见、假如、总之',
    pattern: '……，从而/可见/总之……；假如……，(就)……',
    explanation: '从而 = sehingga (akibat dari klausa sebelumnya); 可见 = terlihat jelas bahwa (menyimpulkan dari bukti); 假如 = seandainya/jika; 总之 = pokoknya/singkatnya (merangkum kesimpulan).',
    examples: [
      { zh: '公司改进了服务，从而吸引了更多顾客。', pinyin: 'Gōngsī gǎijìnle fúwù, cóng\'ér xīyǐnle gèng duō gùkè.', id: 'Perusahaan memperbaiki pelayanannya, sehingga menarik lebih banyak pelanggan.' },
      { zh: '他连续三次考第一，可见他真的很努力。', pinyin: 'Tā liánxù sān cì kǎo dì-yī, kějiàn tā zhēn de hěn nǔlì.', id: 'Dia tiga kali berturut-turut meraih peringkat pertama, terlihat jelas dia memang sangat berusaha.' },
      { zh: '假如明天不下雨，我们就去爬山。', pinyin: 'Jiǎrú míngtiān bú xiàyǔ, wǒmen jiù qù páshān.', id: 'Seandainya besok tidak hujan, kita akan pergi mendaki gunung.' },
      { zh: '总之，这次旅行让我们都很开心。', pinyin: 'Zǒngzhī, zhè cì lǚxíng ràng wǒmen dōu hěn kāixīn.', id: 'Pokoknya, perjalanan kali ini membuat kami semua senang.' },
    ],
    tags: ['连词'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-020', gfCode: 'W-20',
    title: 'Partikel Perumpamaan: 似的',
    titleZh: '助词（其他助词）：似的',
    pattern: 'Nomina/Klausa + 似的',
    explanation: '似的 dipakai di akhir frasa untuk menyatakan perumpamaan "seperti/bagaikan", setara dengan 一样/好像...一样.',
    examples: [
      { zh: '外面冷得像冰箱似的。', pinyin: 'Wàimiàn lěng de xiàng bīngxiāng shìde.', id: 'Di luar dingin seperti kulkas.' },
      { zh: '他跑得飞似的，一下子就不见了。', pinyin: 'Tā pǎo de fēi shìde, yíxiàzi jiù bú jiàn le.', id: 'Dia berlari secepat terbang, dalam sekejap sudah menghilang.' },
    ],
    tags: ['助词'], relatedVocabIds: [], level: 5,
  },

  // ============================================================
  // 短语 (FRASA) - 17 baris
  // ============================================================
  {
    id: 'g5-021', gfCode: 'W-21',
    title: 'Ungkapan Empat Karakter: A来A去、A着A着、没A没B、说A就A',
    titleZh: '短语（四字格）：A来A去、A着A着、没A没B、说A就A',
    pattern: 'A来A去 (bolak-balik); A着A着 (terus-menerus, lalu tiba-tiba...); 没A没B (tak keruan); 说A就A (langsung dilakukan begitu diucapkan)',
    explanation: 'A来A去 menekankan tindakan berulang bolak-balik tanpa hasil jelas; A着A着 menyatakan tindakan berlangsung terus lalu tiba-tiba berubah; 没A没B menyatakan keadaan tak beraturan/tak sopan; 说A就A menyatakan tindakan langsung dilakukan begitu diputuskan.',
    examples: [
      { zh: '他想来想去，还是决定不去了。', pinyin: 'Tā xiǎng lái xiǎng qù, háishi juédìng bú qù le.', id: 'Dia berpikir bolak-balik, akhirnya tetap memutuskan tidak pergi.' },
      { zh: '他说着说着，突然哭了起来。', pinyin: 'Tā shuōzhe shuōzhe, tūrán kūle qǐlái.', id: 'Dia bicara terus, lalu tiba-tiba menangis.' },
      { zh: '这孩子一点礼貌都没有，没大没小的。', pinyin: 'Zhè háizi yìdiǎn lǐmào dōu méiyǒu, méi dà méi xiǎo de.', id: 'Anak ini tidak sopan sama sekali, tidak tahu tata krama pada yang lebih tua.' },
      { zh: '他说走就走，一点儿也不犹豫。', pinyin: 'Tā shuō zǒu jiù zǒu, yìdiǎnr yě bù yóuyù.', id: 'Begitu bilang mau pergi, dia langsung pergi, tanpa ragu sedikit pun.' },
    ],
    tags: ['短语', '四字格'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-022', gfCode: 'W-22',
    title: 'Ungkapan Tetap: 不得了、用不着',
    titleZh: '短语（其他）：不得了、用不着',
    pattern: '形容词 + 得 + 不得了；用不着 + 名词/动词',
    explanation: '不得了 dipakai setelah 得 untuk menekankan tingkat yang luar biasa ("sampai-sampai"); 用不着 berarti "tidak perlu/tidak akan berguna".',
    examples: [
      { zh: '听到自己被录取了，她高兴得不得了。', pinyin: 'Tīngdào zìjǐ bèi lùqǔ le, tā gāoxìng de bùdéliǎo.', id: 'Mendengar dirinya diterima, dia senang bukan main.' },
      { zh: '这些旧衣服你用不着了吧，可以捐出去。', pinyin: 'Zhèxiē jiù yīfu nǐ yòngbuzháo le ba, kěyǐ juān chūqù.', id: 'Baju-baju lama ini sudah tidak kamu perlukan lagi kan, bisa disumbangkan.' },
    ],
    tags: ['短语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-023', gfCode: 'W-23',
    title: 'Format Tetap: 从……来看',
    titleZh: '固定格式：从……来看',
    pattern: '从 + Sudut Pandang + 来看，……',
    explanation: 'Menyatakan "dilihat dari segi..." untuk memperkenalkan sudut pandang yang menjadi dasar penilaian.',
    examples: [
      { zh: '从目前的情况来看，这个计划很难按时完成。', pinyin: 'Cóng mùqián de qíngkuàng lái kàn, zhège jìhuà hěn nán ànshí wánchéng.', id: 'Dilihat dari keadaan saat ini, rencana ini sulit selesai tepat waktu.' },
      { zh: '从销售数据来看，这款产品很受欢迎。', pinyin: 'Cóng xiāoshòu shùjù lái kàn, zhè kuǎn chǎnpǐn hěn shòu huānyíng.', id: 'Dilihat dari data penjualan, produk ini sangat diminati.' },
    ],
    tags: ['固定格式'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-024', gfCode: 'W-24',
    title: 'Format Tetap: A的A，B的B',
    titleZh: '固定格式：A的A，B的B',
    pattern: 'A的A，B的B',
    explanation: 'Menyatakan bahwa dalam suatu kelompok, sebagian melakukan/menjadi A dan sebagian lain melakukan/menjadi B, masing-masing dengan caranya sendiri.',
    examples: [
      { zh: '放假了，同学们走的走，留的留，各有各的安排。', pinyin: 'Fàngjià le, tóngxuémen zǒu de zǒu, liú de liú, gè yǒu gè de ānpái.', id: 'Setelah libur, ada yang pergi ada yang tinggal, masing-masing punya rencana sendiri.' },
      { zh: '大家忙的忙，累的累，谁也没时间说话。', pinyin: 'Dàjiā máng de máng, lèi de lèi, shéi yě méi shíjiān shuōhuà.', id: 'Semua orang sibuk masing-masing dan lelah masing-masing, tidak ada yang sempat mengobrol.' },
    ],
    tags: ['固定格式'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-025', gfCode: 'W-25',
    title: 'Format Tetap: （自）……以来',
    titleZh: '固定格式：（自）……以来',
    pattern: '（自）+ Titik Waktu + 以来，……',
    explanation: 'Menyatakan "sejak... hingga sekarang", menandai jangka waktu dari suatu titik di masa lalu sampai saat ini.',
    examples: [
      { zh: '自今年年初以来，公司业绩一直在上升。', pinyin: 'Zì jīnnián niánchū yǐlái, gōngsī yèjì yìzhí zài shàngshēng.', id: 'Sejak awal tahun ini, kinerja perusahaan terus meningkat.' },
      { zh: '入学以来，他的中文水平提高了很多。', pinyin: 'Rùxué yǐlái, tā de Zhōngwén shuǐpíng tígāole hěn duō.', id: 'Sejak masuk sekolah, kemampuan bahasa Mandarinnya banyak meningkat.' },
    ],
    tags: ['固定格式'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-026', gfCode: 'W-26',
    title: 'Format Tetap: 由……组成',
    titleZh: '固定格式：由……组成',
    pattern: 'Subjek + 由 + Unsur + 组成',
    explanation: 'Menyatakan "terdiri dari/dibentuk oleh", menjelaskan komponen pembentuk suatu keseluruhan.',
    examples: [
      { zh: '这个团队由五名工程师组成。', pinyin: 'Zhège tuánduì yóu wǔ míng gōngchéngshī zǔchéng.', id: 'Tim ini terdiri dari lima orang insinyur.' },
      { zh: '这本书由三个部分组成。', pinyin: 'Zhè běn shū yóu sān ge bùfen zǔchéng.', id: 'Buku ini terdiri dari tiga bagian.' },
    ],
    tags: ['固定格式'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-027', gfCode: 'W-27',
    title: 'Format Tetap: X也不是，Y也不是',
    titleZh: '固定格式：X也不是，Y也不是',
    pattern: 'X也不是，Y也不是',
    explanation: 'Menyatakan keadaan serba salah/bingung memilih di antara dua pilihan, tidak ada yang tepat.',
    examples: [
      { zh: '他站在那儿，坐也不是，站也不是，看起来很尴尬。', pinyin: 'Tā zhàn zài nàr, zuò yě búshì, zhàn yě búshì, kànqǐlai hěn gāngà.', id: 'Dia berdiri di situ, duduk salah, berdiri juga salah, terlihat sangat canggung.' },
      { zh: '面对这个问题，我说也不是，不说也不是。', pinyin: 'Miànduì zhège wèntí, wǒ shuō yě búshì, bù shuō yě búshì.', id: 'Menghadapi masalah ini, aku serba salah, bicara salah, tidak bicara juga salah.' },
    ],
    tags: ['固定格式', '口语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-028', gfCode: 'W-28',
    title: 'Format Tetap: X也X不得，Y也Y不得',
    titleZh: '固定格式：X也X不得，Y也Y不得',
    pattern: 'X也X不得，Y也Y不得',
    explanation: 'Menyatakan situasi serba sulit di mana melakukan tindakan apa pun (X maupun Y) tidak diperbolehkan/tidak mungkin dilakukan.',
    examples: [
      { zh: '病还没好，他吃也吃不得，喝也喝不得。', pinyin: 'Bìng hái méi hǎo, tā chī yě chī bu dé, hē yě hē bu dé.', id: 'Sakitnya belum sembuh, makan tidak boleh, minum juga tidak boleh.' },
      { zh: '这个消息说也说不得，瞒也瞒不得，真让人为难。', pinyin: 'Zhège xiāoxi shuō yě shuō bu dé, mán yě mán bu dé, zhēn ràng rén wéinán.', id: 'Kabar ini diberitahu tidak boleh, disembunyikan juga tidak bisa, sungguh membuat serba salah.' },
    ],
    tags: ['固定格式', '口语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-029', gfCode: 'W-29',
    title: 'Format Tetap: X是它，Y也是它',
    titleZh: '固定格式：X是它，Y也是它',
    pattern: 'X是它，Y也是它',
    explanation: 'Menyatakan bahwa berbagai hal sebenarnya sama saja/tidak ada bedanya, dipakai untuk menyatakan sikap pasrah atau tidak peduli pada pilihan.',
    examples: [
      { zh: '反正都要做，早做是它，晚做也是它，不如现在就开始。', pinyin: 'Fǎnzhèng dōu yào zuò, zǎo zuò shì tā, wǎn zuò yě shì tā, bùrú xiànzài jiù kāishǐ.', id: 'Bagaimanapun harus dikerjakan, cepat atau lambat sama saja, lebih baik mulai sekarang.' },
      { zh: '这几家店的东西质量都差不多，买这家是它，买那家也是它。', pinyin: 'Zhè jǐ jiā diàn de dōngxi zhìliàng dōu chàbuduō, mǎi zhè jiā shì tā, mǎi nà jiā yě shì tā.', id: 'Kualitas barang di beberapa toko ini kurang lebih sama, beli di sini atau di sana sama saja.' },
    ],
    tags: ['固定格式', '口语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-030', gfCode: 'W-30',
    title: 'Format Tetap: X着也是X着',
    titleZh: '固定格式：X着也是X着',
    pattern: 'X着也是X着',
    explanation: 'Menyatakan bahwa suatu keadaan tetap berlangsung sama saja apa pun yang dilakukan, dipakai untuk menyatakan tidak ada bedanya melakukan sesuatu dengan cara berbeda.',
    examples: [
      { zh: '反正闲着也是闲着，不如帮我打扫一下房间。', pinyin: 'Fǎnzhèng xiánzhe yě shì xiánzhe, bùrú bāng wǒ dǎsǎo yíxià fángjiān.', id: 'Toh nganggur juga sama saja, lebih baik bantu aku bersihkan kamar.' },
      { zh: '等着也是等着，我们干脆去附近走走吧。', pinyin: 'Děngzhe yě shì děngzhe, wǒmen gāncuì qù fùjìn zǒuzou ba.', id: 'Menunggu juga sama saja, kita jalan-jalan di sekitar sini saja.' },
    ],
    tags: ['固定格式', '口语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-031', gfCode: 'W-31',
    title: 'Format Tetap: 不管怎样说',
    titleZh: '固定格式：不管怎样说',
    pattern: '不管怎样说，……',
    explanation: 'Berarti "bagaimanapun juga dikatakan/dipikirkan", dipakai di awal kalimat untuk menegaskan kesimpulan yang tetap berlaku meski ada berbagai pandangan berbeda.',
    examples: [
      { zh: '不管怎样说，安全永远是第一位的。', pinyin: 'Bùguǎn zěnyàng shuō, ānquán yǒngyuǎn shì dì yī wèi de.', id: 'Bagaimanapun juga, keselamatan selalu yang utama.' },
      { zh: '不管怎样说，他这次的表现还是让人满意的。', pinyin: 'Bùguǎn zěnyàng shuō, tā zhè cì de biǎoxiàn háishi ràng rén mǎnyì de.', id: 'Bagaimanapun juga, penampilannya kali ini tetap memuaskan.' },
    ],
    tags: ['固定格式', '口语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-032', gfCode: 'W-32',
    title: 'Format Tetap: 真有你/他/她的',
    titleZh: '固定格式：真有你/他/她的',
    pattern: '真有 + 代词 + 的',
    explanation: 'Ungkapan lisan untuk memuji (kadang bernada bercanda/kagum) kehebatan atau kecerdikan seseorang, kira-kira berarti "kamu/dia benar-benar hebat".',
    examples: [
      { zh: '你居然一个人做完了这么多工作，真有你的！', pinyin: 'Nǐ jūrán yí ge rén zuòwánle zhème duō gōngzuò, zhēn yǒu nǐ de!', id: 'Kamu ternyata bisa menyelesaikan begitu banyak pekerjaan sendirian, kamu memang hebat!' },
      { zh: '他又想出了新办法，真有他的。', pinyin: 'Tā yòu xiǎngchūle xīn bànfǎ, zhēn yǒu tā de.', id: 'Dia lagi-lagi memikirkan cara baru, dia memang hebat.' },
    ],
    tags: ['固定格式', '口语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-033', gfCode: 'W-33',
    title: 'Format Tetap: X什么X',
    titleZh: '固定格式：X什么X',
    pattern: 'X什么X',
    explanation: 'Dipakai untuk menyatakan nada menolak/tidak setuju terhadap suatu tindakan yang disebut, kira-kira berarti "X apaan/buat apa X".',
    examples: [
      { zh: '都这么晚了，你还出门什么出门，明天再说吧。', pinyin: 'Dōu zhème wǎn le, nǐ hái chūmén shénme chūmén, míngtiān zài shuō ba.', id: 'Sudah selarut ini, buat apa kamu masih keluar, besok saja bicarakannya.' },
      { zh: '急什么急，时间还早呢。', pinyin: 'Jí shénme jí, shíjiān hái zǎo ne.', id: 'Buru-buru apaan, waktunya masih lama.' },
    ],
    tags: ['固定格式', '口语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-034', gfCode: 'W-34',
    title: 'Format Tetap: 什么X不X（的）',
    titleZh: '固定格式：什么X不X（的）',
    pattern: '什么X不X（的）',
    explanation: 'Menyatakan sikap meremehkan atau menolak alasan yang disebut, kira-kira berarti "apa pentingnya X, tidak masalah".',
    examples: [
      { zh: '什么面子不面子的，先把事情解决了再说。', pinyin: 'Shénme miànzi bù miànzi de, xiān bǎ shìqing jiějuéle zài shuō.', id: 'Gengsi apaan segala, selesaikan dulu masalahnya baru bicara yang lain.' },
      { zh: '什么规矩不规矩的，大家开心就好。', pinyin: 'Shénme guīju bù guīju de, dàjiā kāixīn jiù hǎo.', id: 'Aturan apaan segala, yang penting semua senang.' },
    ],
    tags: ['固定格式', '口语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-035', gfCode: 'W-35',
    title: 'Format Tetap: 不X白不X',
    titleZh: '固定格式：不X白不X',
    pattern: '不X白不X',
    explanation: 'Menyatakan sikap "kalau tidak melakukan X akan rugi/sayang", sering dipakai untuk mendorong memanfaatkan kesempatan.',
    examples: [
      { zh: '反正是免费的，不吃白不吃。', pinyin: 'Fǎnzhèng shì miǎnfèi de, bù chī bái bù chī.', id: 'Toh gratis, kalau tidak dimakan sayang saja.' },
      { zh: '公司给的假期不休白不休。', pinyin: 'Gōngsī gěi de jiàqī bù xiū bái bù xiū.', id: 'Cuti yang diberikan perusahaan, kalau tidak diambil ya rugi sendiri.' },
    ],
    tags: ['固定格式', '口语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-036', gfCode: 'W-36',
    title: 'Format Tetap: X来X去，都是/就是……',
    titleZh: '固定格式：X来X去，都是/就是……',
    pattern: 'X来X去，都是/就是……',
    explanation: 'Menyatakan bahwa setelah melakukan sesuatu berulang-ulang, hasilnya tetap sama saja/tidak berubah.',
    examples: [
      { zh: '挑来挑去，就是这件衣服最合适。', pinyin: 'Tiāo lái tiāo qù, jiùshì zhè jiàn yīfu zuì héshì.', id: 'Pilih punya pilih, ternyata baju ini yang paling cocok.' },
      { zh: '讨论来讨论去，都是老问题，没有新办法。', pinyin: 'Tǎolùn lái tǎolùn qù, dōu shì lǎo wèntí, méiyǒu xīn bànfǎ.', id: 'Diskusi berulang-ulang, tetap masalah lama, tidak ada cara baru.' },
    ],
    tags: ['固定格式', '口语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-037', gfCode: 'W-37',
    title: 'Format Tetap: 动词+什么（就）是什么',
    titleZh: '固定格式：动词+什么（就）是什么',
    pattern: '动词 + 什么（就）是什么',
    explanation: 'Menyatakan sikap menerima apa adanya, tanpa memilih-milih, kira-kira berarti "apa pun yang ada/diberikan, ya itulah".',
    examples: [
      { zh: '我不挑食，做什么就是什么，都能吃。', pinyin: 'Wǒ bù tiāoshí, zuò shénme jiùshì shénme, dōu néng chī.', id: 'Aku tidak pilih-pilih makanan, apa pun yang dimasak, aku bisa makan.' },
      { zh: '时间紧张，有什么材料就是什么材料，先用着吧。', pinyin: 'Shíjiān jǐnzhāng, yǒu shénme cáiliào jiùshì shénme cáiliào, xiān yòngzhe ba.', id: 'Waktu mepet, bahan apa pun yang ada ya itu saja dulu yang dipakai.' },
    ],
    tags: ['固定格式', '口语'], relatedVocabIds: [], level: 5,
  },

  // ============================================================
  // 句子成分 (UNSUR KALIMAT) - 7 baris
  // ============================================================
  {
    id: 'g5-038', gfCode: 'W-38',
    title: 'Keterangan Berlapis (Multi-Adverbial)',
    titleZh: '句子成分（状语）：多项状语',
    pattern: '(Waktu) + (Tempat) + (Sikap/Cara) + (Objek Preposisi) + 动词',
    explanation: 'Dalam satu kalimat, kata keterangan (状语) bisa muncul lebih dari satu jenis sekaligus (waktu, tempat, cara, dsb.), dengan urutan umum: waktu → tempat → sikap/perasaan → cara/sarana → objek preposisi, tepat sebelum kata kerja utama.',
    examples: [
      { zh: '他昨天晚上在图书馆认真地复习了功课。', pinyin: 'Tā zuótiān wǎnshang zài túshūguǎn rènzhēn de fùxíle gōngkè.', id: 'Kemarin malam dia belajar dengan sungguh-sungguh di perpustakaan.' },
      { zh: '我们明天早上一起在操场上锻炼身体。', pinyin: 'Wǒmen míngtiān zǎoshang yìqǐ zài cāochǎng shàng duànliàn shēntǐ.', id: 'Besok pagi kita berolahraga bersama di lapangan.' },
    ],
    tags: ['句子成分', '状语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-039', gfCode: 'W-39',
    title: 'Komplemen Kemungkinan: Verba+得/不得',
    titleZh: '句子成分（可能补语2）：动词 + 得/不得',
    pattern: '动词 + 得/不得',
    explanation: 'Pola ini menyatakan sesuatu boleh/tidak boleh atau layak/tidak layak dilakukan (bukan sekadar mampu secara fisik), misalnya makanan yang aman/tidak aman dimakan.',
    examples: [
      { zh: '这种蘑菇有毒，吃不得。', pinyin: 'Zhè zhǒng mógu yǒu dú, chī bu dé.', id: 'Jamur jenis ini beracun, tidak boleh dimakan.' },
      { zh: '这件事很重要，马虎不得。', pinyin: 'Zhè jiàn shì hěn zhòngyào, mǎhu bu dé.', id: 'Hal ini sangat penting, tidak boleh disepelekan.' },
    ],
    tags: ['句子成分', '补语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-040', gfCode: 'W-40',
    title: 'Komplemen Derajat: Kata Sifat/Verba Psikologis+得+不得了',
    titleZh: '句子成分（程度补语2）：形容词/心理动词 + 得 + 不得了',
    pattern: '形容词/心理动词 + 得 + 不得了',
    explanation: 'Pola ini menekankan tingkat yang sangat ekstrem/luar biasa dari suatu perasaan atau sifat, kira-kira berarti "sangat...sekali, luar biasa".',
    examples: [
      { zh: '听到这个好消息，全家高兴得不得了。', pinyin: 'Tīngdào zhège hǎo xiāoxi, quánjiā gāoxìng de bùdéliǎo.', id: 'Mendengar kabar baik ini, seluruh keluarga senang bukan main.' },
      { zh: '今天的天气热得不得了，出门一会儿就出汗了。', pinyin: 'Jīntiān de tiānqì rè de bùdéliǎo, chūmén yíhuìr jiù chūhàn le.', id: 'Cuaca hari ini panas sekali, baru sebentar keluar sudah berkeringat.' },
    ],
    tags: ['句子成分', '补语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-041', gfCode: 'W-41',
    title: 'Komplemen Arah (Makna Kiasan): 下来/下去/起来/过来/过去',
    titleZh: '句子成分：趋向补语的引申用法：动词/形容词 + 下来/下去/起来/过来/过去',
    pattern: '动词/形容词 + 下来/下去/起来/过来/过去',
    explanation: 'Komplemen arah di sini dipakai bukan untuk makna arah fisik, melainkan makna kiasan: 下来 = mencapai keadaan stabil/selesai; 下去 = keberlanjutan; 起来 = mulai terjadi/menilai; 过来 = kembali ke keadaan normal; 过去 = kehilangan kesadaran/melewati fase sulit.',
    examples: [
      { zh: '天气慢慢冷下来了。', pinyin: 'Tiānqì mànman lěng xiàlai le.', id: 'Cuaca perlahan menjadi dingin.' },
      { zh: '只要坚持下去，一定会成功的。', pinyin: 'Zhǐyào jiānchí xiàqu, yídìng huì chénggōng de.', id: 'Selama terus bertahan, pasti akan berhasil.' },
      { zh: '听了这个笑话，大家都笑了起来。', pinyin: 'Tīngle zhège xiàohua, dàjiā dōu xiàole qǐlai.', id: 'Mendengar lelucon itu, semua orang tertawa.' },
      { zh: '他昏倒了，过了几分钟才醒过来。', pinyin: 'Tā hūndǎo le, guòle jǐ fēnzhōng cái xǐng guòlai.', id: 'Dia pingsan, baru sadar kembali setelah beberapa menit.' },
    ],
    tags: ['句子成分', '补语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-042', gfCode: 'W-42',
    title: 'Komplemen Keadaan (1): Verba/Kata Sifat + 得 + Frasa Verba',
    titleZh: '句子成分（状态补语2）（1）：动词/形容词 + 得 + 动词短语',
    pattern: '动词/形容词 + 得 + 动词短语',
    explanation: 'Komplemen keadaan diikuti frasa verba untuk menjelaskan akibat langsung dari suatu tindakan atau sifat.',
    examples: [
      { zh: '他累得走不动路了。', pinyin: 'Tā lèi de zǒu bu dòng lù le.', id: 'Dia lelah sampai tidak bisa berjalan lagi.' },
      { zh: '这个消息让她激动得说不出话来。', pinyin: 'Zhège xiāoxi ràng tā jīdòng de shuō bu chū huà lái.', id: 'Kabar ini membuatnya begitu terharu sampai tidak bisa berkata-kata.' },
    ],
    tags: ['句子成分', '补语', '状态补语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-043', gfCode: 'W-43',
    title: 'Komplemen Keadaan (2): Verba/Kata Sifat + 得 + Frasa Subjek-Predikat',
    titleZh: '句子成分（状态补语2）（2）：动词/形容词 + 得 + 主谓短语',
    pattern: '动词/形容词 + 得 + 主谓短语',
    explanation: 'Komplemen keadaan diikuti sebuah klausa lengkap (subjek+predikat) sebagai penjelas derajat/hasil suatu tindakan atau sifat.',
    examples: [
      { zh: '他说得大家都笑了。', pinyin: 'Tā shuō de dàjiā dōu xiào le.', id: 'Dia berbicara sampai membuat semua orang tertawa.' },
      { zh: '这部电影感动得很多观众都哭了。', pinyin: 'Zhè bù diànyǐng gǎndòng de hěn duō guānzhòng dōu kū le.', id: 'Film ini begitu menyentuh sampai banyak penonton menangis.' },
    ],
    tags: ['句子成分', '补语', '状态补语'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-044', gfCode: 'W-44',
    title: 'Komplemen Keadaan (3): Verba/Kata Sifat + 得 + Ungkapan Tetap',
    titleZh: '句子成分（状态补语2）（3）：动词/形容词 + 得 + 固定短语',
    pattern: '动词/形容词 + 得 + 固定短语',
    explanation: 'Komplemen keadaan diikuti ungkapan tetap/idiomatis untuk memberi nuansa lebih ekspresif pada derajat suatu tindakan/sifat.',
    examples: [
      { zh: '他忙得不可开交，一点儿休息时间都没有。', pinyin: 'Tā máng de bùkě kāijiāo, yìdiǎnr xiūxi shíjiān dōu méiyǒu.', id: 'Dia sibuk luar biasa, tidak ada waktu istirahat sedikit pun.' },
      { zh: '屋子里乱得一塌糊涂。', pinyin: 'Wūzi lǐ luàn de yìtāhútú.', id: 'Kamarnya berantakan sekali, kacau balau.' },
    ],
    tags: ['句子成分', '补语', '状态补语'], relatedVocabIds: [], level: 5,
  },

  // ============================================================
  // 句子的类型 (JENIS KALIMAT) - 22 baris
  // ============================================================
  {
    id: 'g5-045', gfCode: 'W-45',
    title: 'Kalimat "有" (1): Menyatakan Keberadaan/Kepemilikan yang Berlangsung',
    titleZh: '"有"字句3（1）表示存在、具有：主语+有+着+宾语',
    pattern: '主语 + 有 + 着 + 宾语',
    explanation: 'Menyatakan bahwa subjek sedang memiliki/berada dalam keadaan tertentu yang berlangsung, memakai 着 setelah 有 untuk menekankan keberlangsungan keadaan tersebut.',
    examples: [
      { zh: '这个村子有着悠久的历史。', pinyin: 'Zhège cūnzi yǒuzhe yōujiǔ de lìshǐ.', id: 'Desa ini memiliki sejarah yang panjang.' },
      { zh: '他们两个人有着深厚的友谊。', pinyin: 'Tāmen liǎng ge rén yǒuzhe shēnhòu de yǒuyì.', id: 'Mereka berdua memiliki persahabatan yang mendalam.' },
    ],
    tags: ['句子的类型', '特殊句型', '有字句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-046', gfCode: 'W-46',
    title: 'Kalimat "有" (2): Menyatakan Keterikatan/Kelekatan',
    titleZh: '"有"字句3（2）表示附着：主语+动词+有+宾语',
    pattern: '主语 + 动词 + 有 + 宾语',
    explanation: 'Menyatakan bahwa suatu benda melekat/tersimpan pada subjek setelah suatu tindakan dilakukan, 有 di sini menegaskan hasil keberadaan objek pada subjek.',
    examples: [
      { zh: '墙上挂有一幅古画。', pinyin: 'Qiáng shàng guà yǒu yì fú gǔhuà.', id: 'Di dinding tergantung sebuah lukisan kuno.' },
      { zh: '桌子上放有几本旧书。', pinyin: 'Zhuōzi shàng fàng yǒu jǐ běn jiù shū.', id: 'Di atas meja ada beberapa buku lama yang tersimpan.' },
    ],
    tags: ['句子的类型', '特殊句型', '有字句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-047', gfCode: 'W-47',
    title: 'Kalimat "把" (1): Objek + 一 + Verba',
    titleZh: '"把"字句3（1）主语+把+宾语+一+动词',
    pattern: '主语 + 把 + 宾语 + 一 + 动词',
    explanation: 'Pola ini menyatakan tindakan singkat/sekali lakukan terhadap objek, menekankan kesederhanaan atau kecepatan tindakan.',
    examples: [
      { zh: '他把门一推，就走了进去。', pinyin: 'Tā bǎ mén yì tuī, jiù zǒule jìnqù.', id: 'Dia mendorong pintu sekali, lalu masuk.' },
      { zh: '她把眼睛一闭，就睡着了。', pinyin: 'Tā bǎ yǎnjing yì bì, jiù shuìzháo le.', id: 'Dia menutup matanya sekali, langsung tertidur.' },
    ],
    tags: ['句子的类型', '特殊句型', '把字句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-048', gfCode: 'W-48',
    title: 'Kalimat "把" (2): Objek1 + Verba + Objek2',
    titleZh: '"把"字句3（2）主语+把+宾语1+动词+宾语2',
    pattern: '主语 + 把 + 宾语1 + 动词 + 宾语2',
    explanation: 'Pola ini menyatakan bahwa objek pertama (yang di-把-kan) diberikan/dikenakan sesuatu (objek kedua) melalui suatu tindakan.',
    examples: [
      { zh: '他把这件事告诉了我。', pinyin: 'Tā bǎ zhè jiàn shì gàosùle wǒ.', id: 'Dia memberitahuku tentang hal ini.' },
      { zh: '老师把作业发给了大家。', pinyin: 'Lǎoshī bǎ zuòyè fāgěile dàjiā.', id: 'Guru membagikan tugas kepada semua orang.' },
    ],
    tags: ['句子的类型', '特殊句型', '把字句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-049', gfCode: 'W-49',
    title: 'Kalimat Verba Berangkai (3): Hubungan Sebab-Akibat/Kontras/Syarat',
    titleZh: '连动句3：前后两个动词性词语具有因果、转折、条件关系',
    pattern: '主语 + 动词1 (+宾语1) + 动词2 (+宾语2)',
    explanation: 'Dua frasa verba berurutan dalam satu subjek, di mana hubungan keduanya bukan sekadar berurutan waktu, melainkan menunjukkan sebab-akibat, kontras, atau syarat.',
    examples: [
      { zh: '他生病住院，没能参加比赛。', pinyin: 'Tā shēngbìng zhùyuàn, méi néng cānjiā bǐsài.', id: 'Dia sakit dan dirawat di rumah sakit, sehingga tidak bisa ikut lomba.' },
      { zh: '他有钱不花，天天省吃俭用。', pinyin: 'Tā yǒu qián bù huā, tiāntiān shěngchījiǎnyòng.', id: 'Dia punya uang tapi tidak membelanjakannya, setiap hari hidup hemat.' },
    ],
    tags: ['句子的类型', '特殊句型', '连动句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-050', gfCode: 'W-50',
    title: 'Kalimat Perbandingan (4): A + Kata Sifat + B + Komplemen Kuantitas',
    titleZh: '比较句4：A+形容词+B+数量补语',
    pattern: 'A + 比 + B + 形容词 + 数量补语',
    explanation: 'Pola perbandingan yang ditambahkan komplemen kuantitas di akhir untuk menyatakan secara spesifik seberapa besar selisihnya.',
    examples: [
      { zh: '这个箱子比那个箱子重五公斤。', pinyin: 'Zhège xiāngzi bǐ nàge xiāngzi zhòng wǔ gōngjīn.', id: 'Kotak ini lebih berat lima kilogram daripada kotak itu.' },
      { zh: '弟弟比我小三岁。', pinyin: 'Dìdi bǐ wǒ xiǎo sān suì.', id: 'Adik laki-lakiku lebih muda tiga tahun dariku.' },
    ],
    tags: ['句子的类型', '特殊句型', '比较句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-051', gfCode: 'W-51',
    title: 'Kalimat Pasif (3): 被/叫/让……给……',
    titleZh: '被动句3：主语+被/叫/让+宾语+给+动词+其他成分',
    pattern: '主语 + 被/叫/让 + 宾语 + 给 + 动词 + 其他成分',
    explanation: 'Pola kalimat pasif lisan dengan tambahan 给 sebelum kata kerja, memperkuat nada penekanan pada akibat yang dialami subjek.',
    examples: [
      { zh: '我的自行车被人给偷走了。', pinyin: 'Wǒ de zìxíngchē bèi rén gěi tōuzǒu le.', id: 'Sepedaku dicuri orang.' },
      { zh: '杯子叫他不小心给打破了。', pinyin: 'Bēizi jiào tā bù xiǎoxīn gěi dǎpò le.', id: 'Gelasnya dipecahkan olehnya karena tidak hati-hati.' },
    ],
    tags: ['句子的类型', '特殊句型', '被动句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-052', gfCode: 'W-52',
    title: 'Kalimat Majemuk Berurutan: ……，便……',
    titleZh: '复句（承接复句）：……，便……',
    pattern: 'Klausa1，便 + Klausa2',
    explanation: '便 di sini setara dengan 就, menghubungkan dua peristiwa yang terjadi berurutan langsung satu setelah yang lain.',
    examples: [
      { zh: '他放下书包，便去厨房帮妈妈做饭。', pinyin: 'Tā fàngxià shūbāo, biàn qù chúfáng bāng māma zuò fàn.', id: 'Dia meletakkan tasnya, lalu langsung ke dapur membantu ibunya memasak.' },
      { zh: '上课铃一响，学生们便安静了下来。', pinyin: 'Shàngkè líng yì xiǎng, xuéshengmen biàn ānjìngle xiàlai.', id: 'Begitu bel masuk berbunyi, para murid langsung menjadi tenang.' },
    ],
    tags: ['句子的类型', '复句', '承接复句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-053', gfCode: 'W-53',
    title: 'Kalimat Majemuk Pilihan: 或是……，或是……',
    titleZh: '复句（选择复句）：或是……，或是……',
    pattern: '或是 + Pilihan1，或是 + Pilihan2',
    explanation: 'Menyatakan dua pilihan yang setara, salah satu dari keduanya pasti terjadi/dipilih.',
    examples: [
      { zh: '周末我们或是去看电影，或是在家休息。', pinyin: 'Zhōumò wǒmen huòshì qù kàn diànyǐng, huòshì zài jiā xiūxi.', id: 'Akhir pekan kami entah pergi menonton film, atau istirahat di rumah.' },
      { zh: '这个问题或是你解决，或是我来处理。', pinyin: 'Zhège wèntí huòshì nǐ jiějué, huòshì wǒ lái chǔlǐ.', id: 'Masalah ini entah kamu yang selesaikan, atau aku yang menanganinya.' },
    ],
    tags: ['句子的类型', '复句', '选择复句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-054', gfCode: 'W-54',
    title: 'Kalimat Majemuk Pengandaian: 一旦……，就……',
    titleZh: '复句（假设复句）：一旦……，就……',
    pattern: '一旦 + Klausa1，就 + Klausa2',
    explanation: 'Menyatakan bahwa begitu suatu kondisi (biasanya belum terjadi) terpenuhi, akibat tertentu akan langsung menyusul.',
    examples: [
      { zh: '一旦发现问题，就要马上报告。', pinyin: 'Yídàn fāxiàn wèntí, jiù yào mǎshàng bàogào.', id: 'Begitu ditemukan masalah, harus segera dilaporkan.' },
      { zh: '一旦养成好习惯，就会受益一生。', pinyin: 'Yídàn yǎngchéng hǎo xíguàn, jiù huì shòuyì yìshēng.', id: 'Begitu kebiasaan baik terbentuk, akan bermanfaat seumur hidup.' },
    ],
    tags: ['句子的类型', '复句', '假设复句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-055', gfCode: 'W-55',
    title: 'Kalimat Majemuk Pengandaian: 假如……，（就）……',
    titleZh: '复句（假设复句）：假如……，（就）……',
    pattern: '假如 + Klausa1，（就）+ Klausa2',
    explanation: 'Menyatakan pengandaian yang mungkin/tidak mungkin terjadi, dengan 就 di klausa kedua sebagai penghubung akibat, boleh dihilangkan.',
    examples: [
      { zh: '假如没有网络，我们的生活会变成什么样？', pinyin: 'Jiǎrú méiyǒu wǎngluò, wǒmen de shēnghuó huì biànchéng shénme yàng?', id: 'Seandainya tidak ada internet, kehidupan kita akan menjadi seperti apa?' },
      { zh: '假如你早点儿告诉我，我就能帮上忙了。', pinyin: 'Jiǎrú nǐ zǎodiǎnr gàosu wǒ, wǒ jiù néng bāngshàng máng le.', id: 'Seandainya kamu memberitahuku lebih awal, aku pasti bisa membantu.' },
    ],
    tags: ['句子的类型', '复句', '假设复句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-056', gfCode: 'W-56',
    title: 'Kalimat Majemuk Pengandaian: 万一……，（就）……',
    titleZh: '复句（假设复句）：万一……，（就）……',
    pattern: '万一 + Klausa1，（就）+ Klausa2',
    explanation: '万一 dipakai untuk pengandaian kemungkinan buruk yang jarang terjadi tapi perlu diantisipasi, kira-kira berarti "seandainya (yang tidak diharapkan) terjadi".',
    examples: [
      { zh: '万一下雨，我们就改到室内举行。', pinyin: 'Wànyī xiàyǔ, wǒmen jiù gǎidào shìnèi jǔxíng.', id: 'Seandainya hujan turun, kita akan pindah ke dalam ruangan.' },
      { zh: '你带上雨伞，万一天气变了也不怕。', pinyin: 'Nǐ dàishàng yǔsǎn, wànyī tiānqì biànle yě búpà.', id: 'Bawalah payung, seandainya cuaca berubah pun tidak perlu khawatir.' },
    ],
    tags: ['句子的类型', '复句', '假设复句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-057', gfCode: 'W-57',
    title: 'Kalimat Majemuk Pengandaian: ……，要不然/不然……',
    titleZh: '复句（假设复句）：……，要不然/不然……',
    pattern: 'Klausa1，要不然/不然 + Klausa2',
    explanation: 'Menyatakan akibat yang akan terjadi jika saran/keharusan di klausa pertama tidak dilakukan, kira-kira berarti "kalau tidak begitu, maka...".',
    examples: [
      { zh: '快点儿走吧，要不然就要迟到了。', pinyin: 'Kuàidiǎnr zǒu ba, yàobùrán jiù yào chídào le.', id: 'Ayo jalan cepat, kalau tidak nanti terlambat.' },
      { zh: '你得多复习，不然考试会通不过。', pinyin: 'Nǐ děi duō fùxí, bùrán kǎoshì huì tōng bu guò.', id: 'Kamu harus lebih banyak belajar, kalau tidak ujiannya bisa tidak lulus.' },
    ],
    tags: ['句子的类型', '复句', '假设复句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-058', gfCode: 'W-58',
    title: 'Kalimat Majemuk Sebab-Akibat: ……，因而……',
    titleZh: '复句（因果复句）：……，因而……',
    pattern: 'Klausa Sebab，因而 + Klausa Akibat',
    explanation: '因而 berarti "oleh karena itu/sehingga", menghubungkan sebab dengan akibat secara formal.',
    examples: [
      { zh: '他准备得很充分，因而面试很顺利。', pinyin: 'Tā zhǔnbèi de hěn chōngfèn, yīn\'ér miànshì hěn shùnlì.', id: 'Dia sudah mempersiapkan diri dengan matang, sehingga wawancaranya berjalan lancar.' },
      { zh: '这条路正在修路，因而交通比较拥堵。', pinyin: 'Zhè tiáo lù zhèngzài xiūlù, yīn\'ér jiāotōng bǐjiào yōngdǔ.', id: 'Jalan ini sedang diperbaiki, sehingga lalu lintas cukup padat.' },
    ],
    tags: ['句子的类型', '复句', '因果复句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-059', gfCode: 'W-59',
    title: 'Kalimat Majemuk Sebab-Akibat: ……，可见……',
    titleZh: '复句（因果复句）：……，可见……',
    pattern: 'Bukti/Fakta，可见 + Kesimpulan',
    explanation: '可见 berarti "dapat terlihat/tersimpulkan bahwa", dipakai untuk menarik kesimpulan logis dari fakta yang disebutkan sebelumnya.',
    examples: [
      { zh: '他每次都提前完成任务，可见他工作很有效率。', pinyin: 'Tā měi cì dōu tíqián wánchéng rènwu, kějiàn tā gōngzuò hěn yǒu xiàolǜ.', id: 'Dia selalu menyelesaikan tugas lebih awal, terlihat jelas dia bekerja dengan sangat efisien.' },
      { zh: '这本书卖了几百万册，可见它有多受欢迎。', pinyin: 'Zhè běn shū màile jǐ bǎiwàn cè, kějiàn tā yǒu duō shòu huānyíng.', id: 'Buku ini terjual jutaan eksemplar, terlihat jelas betapa populernya buku itu.' },
    ],
    tags: ['句子的类型', '复句', '因果复句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-060', gfCode: 'W-60',
    title: 'Kalimat Majemuk Konsesif: 哪怕……，也……',
    titleZh: '复句（让步复句）：哪怕……，也……',
    pattern: '哪怕 + Klausa Ekstrem，也 + Klausa Akibat',
    explanation: '哪怕 berarti "biarpun/sekalipun (kondisi ekstrem)", menyatakan bahwa akibat di klausa kedua tetap berlaku meski kondisi pertama sangat sulit/ekstrem.',
    examples: [
      { zh: '哪怕再累，他也坚持每天锻炼身体。', pinyin: 'Nǎpà zài lèi, tā yě jiānchí měitiān duànliàn shēntǐ.', id: 'Sekalipun sangat lelah, dia tetap konsisten berolahraga setiap hari.' },
      { zh: '哪怕只有百分之一的希望，我们也不能放弃。', pinyin: 'Nǎpà zhǐyǒu bǎifēnzhī yī de xīwàng, wǒmen yě bùnéng fàngqì.', id: 'Sekalipun hanya ada satu persen harapan, kita tidak boleh menyerah.' },
    ],
    tags: ['句子的类型', '复句', '让步复句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-061', gfCode: 'W-61',
    title: 'Kalimat Majemuk Bertingkat: 不但不/不但没有……，反而……',
    titleZh: '复句（递进复句）：不但不/不但没有……，反而……',
    pattern: '不但不/不但没有 + Klausa1，反而 + Klausa2',
    explanation: 'Menyatakan bahwa bukan hanya suatu hal yang diharapkan tidak terjadi, tetapi malah sebaliknya yang terjadi.',
    examples: [
      { zh: '他不但不生气，反而笑着安慰了我。', pinyin: 'Tā búdàn bù shēngqì, fǎn\'ér xiàozhe ānwèile wǒ.', id: 'Dia bukan hanya tidak marah, malah tersenyum dan menghiburku.' },
      { zh: '加了班，工作不但没有减少，反而越来越多。', pinyin: 'Jiāle bān, gōngzuò búdàn méiyǒu jiǎnshǎo, fǎn\'ér yuè lái yuè duō.', id: 'Sudah lembur, pekerjaan bukannya berkurang, malah semakin banyak.' },
    ],
    tags: ['句子的类型', '复句', '递进复句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-062', gfCode: 'W-62',
    title: 'Kalimat Majemuk Bertingkat: 不是……，还/还是……',
    titleZh: '复句（递进复句）：不是……，还/还是……',
    pattern: '不是 + Klausa1，还/还是 + Klausa2',
    explanation: 'Menyatakan penekanan bertingkat, bahwa selain hal pertama, masih ada lagi hal tambahan (还) yang lebih jauh/penting.',
    examples: [
      { zh: '这不是小问题，还是关系到大家安全的大事。', pinyin: 'Zhè búshì xiǎo wèntí, háishi guānxì dào dàjiā ānquán de dàshì.', id: 'Ini bukan masalah kecil, melainkan hal besar yang menyangkut keselamatan semua orang.' },
      { zh: '他不是不想帮忙，还是能力有限，帮不了太多。', pinyin: 'Tā búshì bùxiǎng bāngmáng, háishi nénglì yǒuxiàn, bāng bùliǎo tài duō.', id: 'Dia bukannya tidak mau membantu, hanya saja kemampuannya terbatas, tidak bisa membantu banyak.' },
    ],
    tags: ['句子的类型', '复句', '递进复句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-063', gfCode: 'W-63',
    title: 'Kalimat Majemuk Tujuan: ……，为的是……',
    titleZh: '复句（目的复句）：……，为的是……',
    pattern: 'Klausa Tindakan，为的是 + Tujuan',
    explanation: '为的是 berarti "tujuannya adalah", dipakai di akhir kalimat untuk menjelaskan maksud dari tindakan yang disebut sebelumnya.',
    examples: [
      { zh: '他每天早起锻炼，为的是保持身体健康。', pinyin: 'Tā měitiān zǎoqǐ duànliàn, wèi de shì bǎochí shēntǐ jiànkāng.', id: 'Dia bangun pagi berolahraga setiap hari, tujuannya untuk menjaga kesehatan tubuh.' },
      { zh: '我们努力学习，为的是将来能有更多选择。', pinyin: 'Wǒmen nǔlì xuéxí, wèi de shì jiānglái néng yǒu gèng duō xuǎnzé.', id: 'Kami belajar dengan giat, tujuannya agar di masa depan punya lebih banyak pilihan.' },
    ],
    tags: ['句子的类型', '复句', '目的复句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-064', gfCode: 'W-64',
    title: 'Kalimat Majemuk Padat: 没有……就没有……',
    titleZh: '复句（紧缩复句）：没有……就没有……',
    pattern: '没有 + Syarat，就没有 + Akibat',
    explanation: 'Menekankan bahwa suatu hasil mustahil tercapai tanpa syarat tertentu, kira-kira berarti "tanpa..., tidak akan ada...".',
    examples: [
      { zh: '没有大家的努力，就没有今天的成功。', pinyin: 'Méiyǒu dàjiā de nǔlì, jiù méiyǒu jīntiān de chénggōng.', id: 'Tanpa usaha semua orang, tidak akan ada kesuksesan hari ini.' },
      { zh: '没有付出，就没有收获。', pinyin: 'Méiyǒu fùchū, jiù méiyǒu shōuhuò.', id: 'Tanpa pengorbanan, tidak akan ada hasil.' },
    ],
    tags: ['句子的类型', '复句', '紧缩复句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-065', gfCode: 'W-65',
    title: 'Kalimat Majemuk Padat: 不……不……',
    titleZh: '复句（紧缩复句）：不……不……',
    pattern: '不 + Syarat，不 + Akibat',
    explanation: 'Menyatakan hubungan syarat yang ketat: tanpa hal pertama terjadi, hal kedua juga tidak akan terjadi.',
    examples: [
      { zh: '不见到证据，我不相信这件事。', pinyin: 'Bú jiàndào zhèngjù, wǒ bù xiāngxìn zhè jiàn shì.', id: 'Kalau belum melihat buktinya, aku tidak percaya hal ini.' },
      { zh: '不到长城，不算真正来过北京。', pinyin: 'Bú dào Chángchéng, bú suàn zhēnzhèng láiguò Běijīng.', id: 'Kalau belum sampai ke Tembok Besar, belum dianggap benar-benar pernah ke Beijing.' },
    ],
    tags: ['句子的类型', '复句', '紧缩复句'], relatedVocabIds: [], level: 5,
  },
  {
    id: 'g5-066', gfCode: 'W-66',
    title: 'Kalimat Majemuk Padat: 再……也……',
    titleZh: '复句（紧缩复句）：再……也……',
    pattern: '再 + Kondisi Ekstrem，也 + Akibat',
    explanation: 'Menyatakan bahwa meskipun kondisi mencapai tingkat paling ekstrem sekalipun, akibat di klausa kedua tetap berlaku, mirip dengan 哪怕...也....',
    examples: [
      { zh: '再忙，我也要抽时间陪陪家人。', pinyin: 'Zài máng, wǒ yě yào chōu shíjiān péipei jiārén.', id: 'Sesibuk apa pun, aku tetap harus meluangkan waktu menemani keluarga.' },
      { zh: '再难的问题，他也总能找到解决办法。', pinyin: 'Zài nán de wèntí, tā yě zǒng néng zhǎodào jiějué bànfǎ.', id: 'Masalah sesulit apa pun, dia selalu bisa menemukan cara menyelesaikannya.' },
    ],
    tags: ['句子的类型', '复句', '紧缩复句'], relatedVocabIds: [], level: 5,
  },
];