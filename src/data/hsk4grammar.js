// HSK 3.0 Level 4 — Grammar Points
// Berdasarkan GF 0025-2021 Appendix A.4 四级语法点
// PDF page 211-222 (dokumen hal 205-216), total 76 poin [四01]–[四76]
// Struktur: { id, title, titleZh, pattern, explanation, examples, tags, level }

export const hsk4Grammar = [

  // ════════════════════════════════════════════════════════════
  // A.4.1 词类 (KELAS KATA)
  // ════════════════════════════════════════════════════════════

  // A.4.1.1 动词

  {
    id: 'g4-001',
    title: 'Kata Kerja Modal: 得 (děi)',
    titleZh: '能愿动词：得',
    pattern: 'S + 得 + V',
    explanation: '得 (děi) berarti "harus/perlu". Berbeda dengan 得 (de) sebagai partikel komplemen. Digunakan untuk menyatakan keharusan atau kebutuhan mendesak.',
    examples: [
      { zh: '今天下课我得早点儿回家。', pinyin: 'Jīntiān xià kè wǒ děi zǎodiǎnr huí jiā.', id: 'Hari ini setelah kelas saya harus pulang lebih awal.' },
      { zh: '时间不早了，我得回家了。', pinyin: 'Shíjiān bù zǎo le, wǒ děi huí jiā le.', id: 'Sudah tidak awal lagi, saya harus pulang.' },
      { zh: '你再忙也得好好吃饭啊！', pinyin: 'Nǐ zài máng yě děi hǎohǎo chī fàn a!', id: 'Sesibuk apapun kamu harus tetap makan dengan baik!' },
    ],
    tags: ['kata kerja modal', 'keharusan', 'kewajiban'],
    level: 4,
  },

  // A.4.1.2 代词

  {
    id: 'g4-002',
    title: 'Kata Ganti Orang: 人家',
    titleZh: '人称代词：人家',
    pattern: '人家 + kalimat',
    explanation: '人家 bisa berarti "orang lain" (pihak ketiga) atau digunakan sebagai kata ganti orang pertama yang agak manja/emosional (= saya). Umumnya dipakai oleh perempuan.',
    examples: [
      { zh: '人家也是为你好啊。', pinyin: 'Rénjia yě shì wèi nǐ hǎo a.', id: 'Orang lain (dia) juga berbuat baik untukmu.' },
      { zh: '人家现在有困难，咱们应该帮他。', pinyin: 'Rénjia xiànzài yǒu kùnnan, zánmen yīnggāi bāng tā.', id: 'Orang itu sekarang sedang kesulitan, kita seharusnya membantunya.' },
      { zh: '你看人家经常锻炼，身体多好。', pinyin: 'Nǐ kàn rénjia jīngcháng duànliàn, shēntǐ duō hǎo.', id: 'Lihat dia, sering berolahraga, badannya sangat sehat.' },
    ],
    tags: ['kata ganti', 'orang ketiga', 'informal'],
    level: 4,
  },

  // A.4.1.3 量词

  {
    id: 'g4-003',
    title: 'Kata Bilangan Benda: 打、袋、根、卷、棵、批',
    titleZh: '名量词：打、袋、根、卷、棵、批',
    pattern: '数词 + 打/袋/根/卷/棵/批 + 名词',
    explanation: '打 (dǎ) = selusin (12 buah). 袋 = kantong/sak. 根 = batang/helai (untuk benda panjang). 卷 = gulungan. 棵 = pohon/tanaman. 批 = kelompok/kumpulan.',
    examples: [
      { zh: '一打啤酒', pinyin: 'yī dǎ píjiǔ', id: 'satu lusin bir' },
      { zh: '一袋米', pinyin: 'yī dài mǐ', id: 'satu karung beras' },
      { zh: '一根头发', pinyin: 'yī gēn tóufa', id: 'sehelai rambut' },
      { zh: '一卷纸', pinyin: 'yī juǎn zhǐ', id: 'satu gulungan kertas' },
      { zh: '一棵树', pinyin: 'yī kē shù', id: 'sebatang pohon' },
      { zh: '一批学生', pinyin: 'yī pī xuéshēng', id: 'sekelompok pelajar' },
    ],
    tags: ['kata bilangan', 'satuan', 'nomina'],
    level: 4,
  },

  {
    id: 'g4-004',
    title: 'Kata Bilangan Pinjaman',
    titleZh: '借用量词',
    pattern: '一 + 碗/脸/手/屋子/桌子 + 名词 / 一 + 刀/针 + 动作',
    explanation: 'Nomina tertentu bisa dipakai sebagai kata bilangan: (1) Nomina: 碗、脸、手、屋子、桌子 — "satu mangkuk X", "satu wajah X", "satu ruangan penuh X". (2) Kata kerja: 刀、针 — menyatakan sekali tindakan.',
    examples: [
      { zh: '一碗汤', pinyin: 'yī wǎn tāng', id: 'semangkuk sup' },
      { zh: '一脸水', pinyin: 'yī liǎn shuǐ', id: 'wajah penuh air' },
      { zh: '一手油', pinyin: 'yī shǒu yóu', id: 'tangan penuh minyak' },
      { zh: '一屋子人', pinyin: 'yī wūzi rén', id: 'satu ruangan penuh orang' },
      { zh: '切两刀', pinyin: 'qiē liǎng dāo', id: 'memotong dua kali' },
      { zh: '打一针', pinyin: 'dǎ yī zhēn', id: 'menyuntik sekali' },
    ],
    tags: ['kata bilangan', 'pinjaman', 'informal'],
    level: 4,
  },

  // A.4.1.4 副词

  {
    id: 'g4-005',
    title: 'Kata Keterangan Derajat: 格外、极、极其',
    titleZh: '程度副词：格外、极、极其',
    pattern: '格外/极/极其 + Adj/V',
    explanation: '格外 = sangat/luar biasa (di luar biasanya). 极 = sangat/sekali (dipakai setelah adjektiva: Adj + 极了). 极其 = sangat/amat (lebih formal, sebelum adjektiva).',
    examples: [
      { zh: '老师今天格外开心。', pinyin: 'Lǎoshī jīntiān géwài kāixīn.', id: 'Guru hari ini sangat gembira (luar biasa).' },
      { zh: '这些字极小，我都看不清楚。', pinyin: 'Zhèxiē zì jí xiǎo, wǒ dōu kàn bu qīngchǔ.', id: 'Huruf-huruf ini sangat kecil sekali, saya tidak bisa melihat jelas.' },
      { zh: '校长是一个极其负责的人。', pinyin: 'Xiàozhǎng shì yī gè jíqí fùzé de rén.', id: 'Kepala sekolah adalah orang yang sangat bertanggung jawab.' },
    ],
    tags: ['kata keterangan', 'derajat', 'intensitas'],
    level: 4,
  },

  {
    id: 'g4-006',
    title: 'Kata Keterangan Cakupan/Kolektif: 共',
    titleZh: '范围、协同副词：共',
    pattern: '共 + 数量短语 + V / S + 共 + V',
    explanation: '共 berarti "bersama-sama" atau "seluruhnya/total". Menyatakan jumlah keseluruhan atau tindakan bersama.',
    examples: [
      { zh: '共有三十人出席会议。', pinyin: 'Gòng yǒu sānshí rén chūxí huìyì.', id: 'Total ada tiga puluh orang yang menghadiri rapat.' },
      { zh: '这本书共十五课。', pinyin: 'Zhè běn shū gòng shíwǔ kè.', id: 'Buku ini seluruhnya ada lima belas pelajaran.' },
    ],
    tags: ['kata keterangan', 'cakupan', 'total', 'jumlah'],
    level: 4,
  },

  {
    id: 'g4-007',
    title: 'Kata Keterangan Waktu: 按时、即将、急忙、渐渐、尽快',
    titleZh: '时间副词：按时、即将、急忙、渐渐、尽快',
    pattern: '按时/即将/急忙/渐渐/尽快 + V',
    explanation: '按时 = tepat waktu. 即将 = akan segera/hampir (formal). 急忙 = dengan tergesa-gesa. 渐渐 = perlahan-lahan/bertahap. 尽快 = sesegera mungkin.',
    examples: [
      { zh: '你要按时吃药。', pinyin: 'Nǐ yào ànshí chī yào.', id: 'Kamu harus minum obat tepat waktu.' },
      { zh: '同学们即将毕业。', pinyin: 'Tóngxuémen jíjiāng bìyè.', id: 'Para siswa akan segera lulus.' },
      { zh: '春天来了，天气渐渐暖和起来。', pinyin: 'Chūntiān lái le, tiānqì jiànjiàn nuǎnhuo qǐlai.', id: 'Musim semi datang, cuaca perlahan-lahan menjadi hangat.' },
      { zh: '你尽快给他回个电话。', pinyin: 'Nǐ jǐnkuài gěi tā huí gè diànhuà.', id: 'Segera balas teleponnya.' },
    ],
    tags: ['kata keterangan', 'waktu', 'tempo'],
    level: 4,
  },

  {
    id: 'g4-008',
    title: 'Kata Keterangan Frekuensi/Pengulangan: 一再、再三',
    titleZh: '频率、重复副词：一再、再三',
    pattern: '一再/再三 + V',
    explanation: '一再 = berulang kali/terus-menerus (menunjukkan pengulangan yang tidak berhenti). 再三 = berkali-kali/berulang kali (menekankan bahwa seseorang mencoba lebih dari dua kali).',
    examples: [
      { zh: '他一再表示自己不会出席这次会议。', pinyin: 'Tā yīzài biǎoshì zìjǐ bù huì chūxí zhè cì huìyì.', id: 'Dia berulang kali menyatakan tidak akan hadir dalam rapat ini.' },
      { zh: '我再三解释，他还是不相信。', pinyin: 'Wǒ zàisān jiěshì, tā háishi bù xiāngxìn.', id: 'Saya sudah menjelaskan berkali-kali, dia masih tidak percaya.' },
    ],
    tags: ['kata keterangan', 'frekuensi', 'pengulangan'],
    level: 4,
  },

  {
    id: 'g4-009',
    title: 'Kata Keterangan Hubungan: 却',
    titleZh: '关联副词：却',
    pattern: 'Klausa 1, S + 却 + Klausa 2',
    explanation: '却 menyatakan kontras atau pertentangan dengan apa yang diharapkan. Artinya "namun/tetapi/justru". Selalu digunakan di klausa kedua.',
    examples: [
      { zh: '我来了，他却没来。', pinyin: 'Wǒ lái le, tā què méi lái.', id: 'Saya datang, namun dia tidak datang.' },
      { zh: '同学们都出去活动了，他却坐在教室里面不动。', pinyin: 'Tóngxuémen dōu chūqù huódòng le, tā què zuò zài jiàoshì lǐmiàn bù dòng.', id: 'Semua teman pergi beraktivitas, tetapi dia justru duduk diam di dalam kelas.' },
    ],
    tags: ['kata keterangan', 'kontras', 'pertentangan'],
    level: 4,
  },

  {
    id: 'g4-010',
    title: 'Kata Keterangan Negasi: 未必',
    titleZh: '否定副词：未必',
    pattern: 'S + 未必 + Adj/V',
    explanation: '未必 berarti "belum tentu/tidak selalu". Menyatakan bahwa sesuatu tidak pasti benar atau tidak selalu demikian. Lebih sopan dan hati-hati daripada 不一定.',
    examples: [
      { zh: '这个消息未必可靠，咱们再等等吧。', pinyin: 'Zhège xiāoxi wèibì kěkào, zánmen zài děngdeng ba.', id: 'Kabar ini belum tentu bisa dipercaya, mari kita tunggu sebentar lagi.' },
      { zh: '别等了，他未必会来。', pinyin: 'Bié děng le, tā wèibì huì lái.', id: 'Jangan menunggu lagi, dia belum tentu datang.' },
    ],
    tags: ['kata keterangan', 'negasi', 'ketidakpastian'],
    level: 4,
  },

  {
    id: 'g4-011',
    title: 'Kata Keterangan Perkiraan: 几乎、似乎',
    titleZh: '情态副词：几乎、似乎',
    pattern: 'S + 几乎/似乎 + V/Adj',
    explanation: '几乎 = hampir/nyaris (kuantitas mendekati 100% atau hampir terjadi). 似乎 = tampaknya/sepertinya/seolah-olah (perkiraan berdasarkan kesan/perasaan).',
    examples: [
      { zh: '他的话我几乎都没听懂。', pinyin: 'Tā de huà wǒ jīhū dōu méi tīng dǒng.', id: 'Perkataannya hampir semua tidak saya pahami.' },
      { zh: '她似乎对自己的表现很不满意。', pinyin: 'Tā sìhū duì zìjǐ de biǎoxiàn hěn bù mǎnyì.', id: 'Dia tampaknya sangat tidak puas dengan penampilannya sendiri.' },
    ],
    tags: ['kata keterangan', 'perkiraan', 'hampir'],
    level: 4,
  },

  {
    id: 'g4-012',
    title: 'Kata Keterangan Nada: 的确、反而、还、竟然、究竟',
    titleZh: '语气副词：的确、反而、还⁴、竟然、究竟',
    pattern: 'S + 的确/反而/竟然/究竟 + V/Adj',
    explanation: '的确 = memang/sungguh (menegaskan kebenaran). 反而 = malah/sebaliknya (berlawanan dari yang diharapkan). 还 (hái)⁴ = masih ada lagi/lebih dari itu. 竟然 = ternyata/sungguh tak disangka. 究竟 = sebenarnya/sebenarnya apa (dalam pertanyaan atau untuk penekanan).',
    examples: [
      { zh: '这的确是我的错。', pinyin: 'Zhè díquè shì wǒ de cuò.', id: 'Ini memang benar kesalahan saya.' },
      { zh: '风不但没停，反而越来越大。', pinyin: 'Fēng búdàn méi tíng, fǎn\'ér yuè lái yuè dà.', id: 'Angin bukan saja tidak berhenti, malah semakin kencang.' },
      { zh: '这道题很简单，同学们竟然都做错了。', pinyin: 'Zhè dào tí hěn jiǎndān, tóngxuémen jìngrán dōu zuò cuò le.', id: 'Soal ini sangat mudah, ternyata semua siswa menjawab salah.' },
      { zh: '明天的晚会你究竟去不去？', pinyin: 'Míngtiān de wǎnhuì nǐ jiūjìng qù bu qù?', id: 'Pesta malam besok, sebenarnya kamu mau pergi atau tidak?' },
    ],
    tags: ['kata keterangan', 'nada', 'penegasan', 'kontras'],
    level: 4,
  },

  // A.4.1.5 介词

  {
    id: 'g4-013',
    title: 'Preposisi: 自 (menunjukkan waktu/tempat asal)',
    titleZh: '自',
    pattern: '自 + Waktu/Tempat + V',
    explanation: '自 berarti "sejak/dari" (formal). Menunjukkan titik awal waktu atau tempat. Lebih formal daripada 从.',
    examples: [
      { zh: '自1978年以来，中国发生了很大的变化。', pinyin: 'Zì yījiǔqībā nián yǐlái, Zhōngguó fāshēng le hěn dà de biànhuà.', id: 'Sejak tahun 1978, Tiongkok telah mengalami perubahan besar.' },
      { zh: '我们的航班准时自北京出发。', pinyin: 'Wǒmen de hángbān zhǔnshí zì Běijīng chūfā.', id: 'Penerbangan kami berangkat tepat waktu dari Beijing.' },
    ],
    tags: ['preposisi', 'waktu', 'asal', 'formal'],
    level: 4,
  },

  {
    id: 'g4-014',
    title: 'Preposisi: 对于 (menunjukkan objek/sasaran)',
    titleZh: '对于',
    pattern: '对于 + N/Klausa + (来说), S + V',
    explanation: '对于 menunjukkan objek atau sasaran suatu tindakan/sikap. Bisa diletakkan di awal kalimat atau sebelum predikat. Sering diikuti "来说" (dari sudut pandang...).',
    examples: [
      { zh: '对于任何一种语言来说，文字的出现都是十分重要的。', pinyin: 'Duìyú rènhé yī zhǒng yǔyán lái shuō, wénzì de chūxiàn dōu shì shífēn zhòngyào de.', id: 'Bagi bahasa apapun, kemunculan tulisan adalah hal yang sangat penting.' },
      { zh: '对于这个问题，我们还得认真讨论。', pinyin: 'Duìyú zhège wèntí, wǒmen hái děi rènzhēn tǎolùn.', id: 'Mengenai masalah ini, kita masih perlu mendiskusikannya dengan serius.' },
    ],
    tags: ['preposisi', 'objek', 'sasaran', 'topik'],
    level: 4,
  },

  {
    id: 'g4-015',
    title: 'Preposisi: 关于 (mengenai/tentang)',
    titleZh: '关于',
    pattern: '关于 + N/Topik + kalimat',
    explanation: '关于 berarti "mengenai/tentang". Menunjukkan topik atau ruang lingkup pembicaraan. Biasanya di awal kalimat sebagai topik. Berbeda dengan 对于: 关于 menekankan topik, 对于 menekankan objek tindakan.',
    examples: [
      { zh: '我读了几本关于环境保护的书。', pinyin: 'Wǒ dú le jǐ běn guānyú huánjìng bǎohù de shū.', id: 'Saya telah membaca beberapa buku tentang perlindungan lingkungan.' },
      { zh: '关于明天的考试，学校做了具体的规定。', pinyin: 'Guānyú míngtiān de kǎoshì, xuéxiào zuò le jùtǐ de guīdìng.', id: 'Mengenai ujian besok, sekolah telah membuat peraturan yang spesifik.' },
    ],
    tags: ['preposisi', 'topik', 'mengenai'],
    level: 4,
  },

  {
    id: 'g4-016',
    title: 'Preposisi: 替 (menggantikan/mewakili)',
    titleZh: '替',
    pattern: 'S + 替 + O + V',
    explanation: '替 berarti "untuk/menggantikan/mewakili seseorang". Menunjukkan bahwa tindakan dilakukan demi kepentingan orang lain atau sebagai pengganti orang lain.',
    examples: [
      { zh: '你别替我担心了，我自己处理。', pinyin: 'Nǐ bié tì wǒ dānxīn le, wǒ zìjǐ chǔlǐ.', id: 'Jangan khawatir untukku, saya akan menanganinya sendiri.' },
      { zh: '取得这么好的成绩，大家都替你感到高兴。', pinyin: 'Qǔdé zhème hǎo de chéngjì, dàjiā dōu tì nǐ gǎndào gāoxìng.', id: 'Dengan raihan prestasi yang begitu baik, semua orang merasa senang untukmu.' },
    ],
    tags: ['preposisi', 'menggantikan', 'mewakili'],
    level: 4,
  },

  {
    id: 'g4-017',
    title: 'Preposisi: 根据 (berdasarkan)',
    titleZh: '根据',
    pattern: '根据 + N/Klausa, S + V',
    explanation: '根据 berarti "berdasarkan/sesuai dengan". Menunjukkan dasar atau landasan suatu tindakan atau keputusan.',
    examples: [
      { zh: '学校根据学生的中文水平分班。', pinyin: 'Xuéxiào gēnjù xuéshēng de Zhōngwén shuǐpíng fēn bān.', id: 'Sekolah membagi kelas berdasarkan tingkat kemampuan bahasa Mandarin siswa.' },
      { zh: '根据大家的意见，我们修改了计划。', pinyin: 'Gēnjù dàjiā de yìjiàn, wǒmen xiūgǎi le jìhuà.', id: 'Berdasarkan pendapat semua orang, kami merevisi rencana.' },
    ],
    tags: ['preposisi', 'berdasarkan', 'dasar', 'alasan'],
    level: 4,
  },

  {
    id: 'g4-018',
    title: 'Preposisi: 作为 (sebagai)',
    titleZh: '作为',
    pattern: '作为 + N (peran/identitas), S + V',
    explanation: '作为 berarti "sebagai/bertindak sebagai". Menunjukkan peran, status, atau identitas seseorang/sesuatu. Biasanya diikuti oleh kata benda yang menunjukkan peran.',
    examples: [
      { zh: '他作为教师代表参加了这次会议。', pinyin: 'Tā zuòwéi jiàoshī dàibiǎo cānjiā le zhè cì huìyì.', id: 'Dia menghadiri rapat ini sebagai perwakilan guru.' },
      { zh: '作为学生，你应该按时完成作业。', pinyin: 'Zuòwéi xuéshēng, nǐ yīnggāi ànshí wánchéng zuòyè.', id: 'Sebagai pelajar, kamu harus menyelesaikan pekerjaan rumah tepat waktu.' },
    ],
    tags: ['preposisi', 'peran', 'identitas', 'sebagai'],
    level: 4,
  },

  // A.4.1.6 连词

  {
    id: 'g4-019',
    title: 'Kata Hubung Penambahan: 并、以及',
    titleZh: '连接词或词组：并²、以及',
    pattern: 'A + 并/以及 + B',
    explanation: '并 (bìng)² = dan/serta (menghubungkan predikat atau klausa, lebih formal). 以及 = serta/dan juga (menghubungkan nomina dalam daftar, formal).',
    examples: [
      { zh: '他们同意并支持我们的建议。', pinyin: 'Tāmen tóngyì bìng zhīchí wǒmen de jiànyì.', id: 'Mereka setuju dan mendukung saran kami.' },
      { zh: '小王、小李以及另外三名同学都通过了考试。', pinyin: 'Xiǎo Wáng, Xiǎo Lǐ yǐjí lìngwài sān míng tóngxué dōu tōngguò le kǎoshì.', id: 'Xiao Wang, Xiao Li serta tiga teman lainnya semua lulus ujian.' },
    ],
    tags: ['kata hubung', 'penambahan', 'formal'],
    level: 4,
  },

  {
    id: 'g4-020',
    title: 'Kata Hubung Klausa: 此外、而、而是、既然、可见、甚至、假如、总之',
    titleZh: '连接分句或句子：此外、而¹、而是、既然、可见、甚至、假如、总之',
    pattern: 'Klausa 1 + 此外/甚至/总之 + Klausa 2 / 既然/假如 + Klausa 1, + Klausa 2',
    explanation: '此外 = selain itu. 而 = sedangkan/sementara (kontras). 而是 = melainkan/tetapi. 既然 = karena/mengingat (sudah terjadi). 可见 = terbukti/dari sini terlihat. 甚至 = bahkan. 假如 = seandainya/jika. 总之 = singkatnya/pokoknya.',
    examples: [
      { zh: '我们要认真听讲，此外还要积极完成作业。', pinyin: 'Wǒmen yào rènzhēn tīng jiǎng, cǐwài hái yào jījí wánchéng zuòyè.', id: 'Kita harus mendengarkan dengan serius, selain itu juga harus aktif menyelesaikan tugas.' },
      { zh: '听说重要，读写也很重要，总之，这四项能力都很重要。', pinyin: 'Tīng shuō zhòngqiào, dú xiě yě hěn zhòngqiào, zǒngzhī, zhè sì xiàng nénglì dōu hěn zhòngqiào.', id: 'Menyimak dan berbicara penting, membaca dan menulis juga penting, singkatnya keempat kemampuan ini semuanya penting.' },
    ],
    tags: ['kata hubung', 'klausa', 'transisi'],
    level: 4,
  },

  // A.4.1.7 助词

  {
    id: 'g4-021',
    title: 'Partikel Lain: 似的',
    titleZh: '其他助词：似的',
    pattern: 'N/V/Adj + 似的',
    explanation: '似的 digunakan setelah nomina, adjektiva, atau frasa untuk menyatakan "seperti/layaknya/bagai". Menunjukkan perbandingan atau kesamaan yang tidak persis.',
    examples: [
      { zh: '她俩好像从来没见过似的。', pinyin: 'Tā liǎ hǎoxiàng cónglái méi jiàn guò sìde.', id: 'Keduanya seperti tidak pernah bertemu sebelumnya.' },
      { zh: '这里的景色像画儿似的。', pinyin: 'Zhèlǐ de jǐngsè xiàng huàr sìde.', id: 'Pemandangan di sini bagai lukisan.' },
      { zh: '他的中文说得跟中国人似的。', pinyin: 'Tā de Zhōngwén shuō de gēn Zhōngguórén sìde.', id: 'Bahasa Mandarinnya seperti orang Tiongkok asli.' },
    ],
    tags: ['partikel', 'perbandingan', 'seperti'],
    level: 4,
  },

  // A.4.1.8 叹词

  {
    id: 'g4-022',
    title: 'Kata Seru: 啊² (nada berbeda)',
    titleZh: '叹词：啊²',
    pattern: '啊！/ ...啊？ / ...啊，...',
    explanation: '啊² digunakan sebagai kata seru dengan nada yang beragam: ekspresi kejutan, kepahaman mendadak, kekaguman, atau penekanan emosi. Berbeda dengan 啊 yang digunakan di akhir kalimat sebagai partikel nada.',
    examples: [
      { zh: '啊，你怎么在这里？', pinyin: 'Ā, nǐ zěnme zài zhèlǐ?', id: 'Ah, kamu kenapa ada di sini?' },
      { zh: '啊，我明白了。', pinyin: 'Ā, wǒ míngbái le.', id: 'Oh, saya mengerti sekarang.' },
      { zh: '啊！太美了！', pinyin: 'Ā! Tài měi le!', id: 'Wah! Indah sekali!' },
    ],
    tags: ['kata seru', 'ekspresi', 'emosi'],
    level: 4,
  },

  // ════════════════════════════════════════════════════════════
  // A.4.2 短语 (FRASA TETAP)
  // ════════════════════════════════════════════════════════════

  // A.4.2.1 固定短语 — 四字格

  {
    id: 'g4-023',
    title: 'Frasa Empat Karakter: 大A大B',
    titleZh: '四字格：大A大B',
    pattern: '大 + X + 大 + Y',
    explanation: 'Pola "大A大B" menyatakan perilaku/sifat yang berlebihan atau tidak terkontrol. Contoh: 大吃大喝 (makan minum berlebihan), 大吵大闹 (ribut-ribut besar).',
    examples: [
      { zh: '你这大吃大喝的毛病对身体不好，一定要改改。', pinyin: 'Nǐ zhè dà chī dà hē de máobìng duì shēntǐ bù hǎo, yīdìng yào gǎigǎi.', id: 'Kebiasaanmu makan minum berlebihan ini tidak baik untuk kesehatan, harus diperbaiki.' },
      { zh: '她心情不好，为一点儿小事就大吵大闹。', pinyin: 'Tā xīnqíng bù hǎo, wèi yīdiǎnr xiǎoshì jiù dà chǎo dà nào.', id: 'Suasana hatinya buruk, karena hal kecil saja langsung ribut besar.' },
    ],
    tags: ['frasa tetap', 'empat karakter', 'pengulangan pola'],
    level: 4,
  },

  {
    id: 'g4-024',
    title: 'Frasa Empat Karakter: 一A一B',
    titleZh: '四字格：一A一B',
    pattern: '一 + X + 一 + Y',
    explanation: 'Pola "一A一B" menyatakan ketelitian, kesempurnaan, atau tindakan yang dilakukan satu per satu. Contoh: 一针一线 (satu jarum satu benang = sangat teliti), 一五一十 (satu-lima-satu-sepuluh = rinci/lengkap).',
    examples: [
      { zh: '这是别人的东西，我们一针一线都不能拿。', pinyin: 'Zhè shì biérén de dōngxi, wǒmen yī zhēn yī xiàn dōu bù néng ná.', id: 'Ini adalah milik orang lain, satu jarum satu benang pun kita tidak boleh mengambil.' },
      { zh: '他一五一十地把情况汇报给了老师。', pinyin: 'Tā yīwǔyīshí de bǎ qíngkuàng huìbào gěi le lǎoshī.', id: 'Dia melaporkan situasinya secara rinci lengkap kepada guru.' },
    ],
    tags: ['frasa tetap', 'empat karakter', 'pengulangan pola'],
    level: 4,
  },

  // A.4.2.1.2 其他

  {
    id: 'g4-025',
    title: 'Frasa Tetap: 看来',
    titleZh: '看来',
    pattern: '看来 + kalimat / kalimat, + 看来 + kalimat',
    explanation: '看来 berarti "tampaknya/sepertinya/kelihatannya". Menyatakan kesimpulan atau perkiraan berdasarkan fakta yang ada. Bisa di awal atau tengah kalimat.',
    examples: [
      { zh: '看来他是个好人。', pinyin: 'Kànlái tā shì gè hǎo rén.', id: 'Tampaknya dia orang baik.' },
      { zh: '看来明天不会再下雨了。', pinyin: 'Kànlái míngtiān bù huì zài xià yǔ le.', id: 'Tampaknya besok tidak akan hujan lagi.' },
      { zh: '看来这次考试他能通过。', pinyin: 'Kànlái zhè cì kǎoshì tā néng tōngguò.', id: 'Tampaknya dia bisa lulus ujian kali ini.' },
    ],
    tags: ['frasa tetap', 'kesimpulan', 'perkiraan'],
    level: 4,
  },

  {
    id: 'g4-026',
    title: 'Frasa Tetap: 来得及 / 来不及',
    titleZh: '来得及 / 来不及',
    pattern: 'S + 来得及/来不及 + V',
    explanation: '来得及 = masih sempat/masih ada waktu. 来不及 = tidak sempat/tidak ada waktu lagi. Keduanya menyatakan apakah masih ada waktu untuk melakukan sesuatu.',
    examples: [
      { zh: '你别着急，时间来得及。', pinyin: 'Nǐ bié zháojí, shíjiān láidejí.', id: 'Jangan tergesa-gesa, masih ada waktu.' },
      { zh: '来不及了，我们快走吧。', pinyin: 'Láibují le, wǒmen kuài zǒu ba.', id: 'Sudah tidak sempat lagi, ayo kita cepat pergi.' },
    ],
    tags: ['frasa tetap', 'waktu', 'sempat'],
    level: 4,
  },

  {
    id: 'g4-027',
    title: 'Frasa Tetap: 说不定',
    titleZh: '说不定',
    pattern: '说不定 + S + V / 说不定 + kalimat',
    explanation: '说不定 berarti "mungkin saja/bisa jadi/siapa tahu". Menyatakan kemungkinan yang tidak dapat dipastikan.',
    examples: [
      { zh: '下雨了，说不定他今天不来了。', pinyin: 'Xià yǔ le, shuōbudìng tā jīntiān bù lái le.', id: 'Hujan turun, bisa jadi dia tidak datang hari ini.' },
      { zh: '今年能不能去中国现在还说不定。', pinyin: 'Jīnnián néng bù néng qù Zhōngguó xiànzài hái shuōbudìng.', id: 'Apakah tahun ini bisa pergi ke Tiongkok, sekarang masih belum bisa dipastikan.' },
    ],
    tags: ['frasa tetap', 'kemungkinan', 'ketidakpastian'],
    level: 4,
  },

  {
    id: 'g4-028',
    title: 'Frasa Tetap: 一般来说',
    titleZh: '一般来说',
    pattern: '一般来说，+ kalimat',
    explanation: '一般来说 berarti "pada umumnya/secara umum/biasanya". Digunakan untuk membuat generalisasi atau pernyataan yang berlaku secara umum.',
    examples: [
      { zh: '一般来说，选手参加了比赛是不能退出的。', pinyin: 'Yībān lái shuō, xuǎnshǒu cānjiā le bǐsài shì bù néng tuìchū de.', id: 'Pada umumnya, peserta yang sudah ikut kompetisi tidak bisa mundur.' },
      { zh: '一般来说，跟青年人相比，老年人的经验更丰富。', pinyin: 'Yībān lái shuō, gēn qīngnián rén xiāngbǐ, lǎonián rén de jīngyàn gèng fēngfù.', id: 'Secara umum, dibandingkan dengan orang muda, orang tua lebih kaya pengalaman.' },
    ],
    tags: ['frasa tetap', 'generalisasi', 'umumnya'],
    level: 4,
  },

  // ════════════════════════════════════════════════════════════
  // A.4.3 固定格式 (FORMAT TETAP)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g4-029',
    title: 'Format Tetap: 一+量词+比+一+量词',
    titleZh: '一＋量词＋比＋一＋量词',
    pattern: '一 + 量词 + 比 + 一 + 量词 + Adj',
    explanation: 'Menyatakan perubahan bertahap yang semakin meningkat: "semakin lama semakin..." atau "dari satu ke berikutnya semakin...".',
    examples: [
      { zh: '这些球鞋一双比一双好看。', pinyin: 'Zhèxiē qiúxié yī shuāng bǐ yī shuāng hǎokàn.', id: 'Sepatu-sepatu ini semakin cantik satu sama lain.' },
      { zh: '天气一天比一天暖和。', pinyin: 'Tiānqì yī tiān bǐ yī tiān nuǎnhuo.', id: 'Cuaca semakin hari semakin hangat.' },
    ],
    tags: ['format tetap', 'perbandingan', 'perubahan bertahap'],
    level: 4,
  },

  {
    id: 'g4-030',
    title: 'Format Tetap: (自)……以来',
    titleZh: '（自）……以来',
    pattern: '(自) + Titik Waktu + 以来，S + V',
    explanation: 'Menyatakan "sejak (waktu tertentu) sampai sekarang". Menggambarkan situasi yang berlangsung dari waktu tertentu di masa lalu hingga saat ini.',
    examples: [
      { zh: '自去年以来，我一直生活在北京。', pinyin: 'Zì qùnián yǐlái, wǒ yīzhí shēnghuó zài Běijīng.', id: 'Sejak tahun lalu, saya telah tinggal di Beijing.' },
      { zh: '上大学以来，他一直坚持学习中文。', pinyin: 'Shàng dàxué yǐlái, tā yīzhí jiānchí xuéxí Zhōngwén.', id: 'Sejak masuk universitas, dia terus tekun belajar bahasa Mandarin.' },
    ],
    tags: ['format tetap', 'waktu', 'sejak', 'durasi'],
    level: 4,
  },

  {
    id: 'g4-031',
    title: 'Format Tetap: 由……组成',
    titleZh: '由……组成',
    pattern: 'S + 由 + N + 组成',
    explanation: 'Menyatakan bahwa sesuatu "terdiri dari/tersusun dari" beberapa bagian atau unsur.',
    examples: [
      { zh: '我们班由两位老师和二十位学生组成。', pinyin: 'Wǒmen bān yóu liǎng wèi lǎoshī hé èrshí wèi xuéshēng zǔchéng.', id: 'Kelas kami terdiri dari dua guru dan dua puluh siswa.' },
      { zh: '这张试卷是由十道选择题和一道写作题组成的。', pinyin: 'Zhè zhāng shìjuàn shì yóu shí dào xuǎnzétí hé yī dào xiězuòtí zǔchéng de.', id: 'Soal ujian ini terdiri dari sepuluh soal pilihan ganda dan satu soal menulis.' },
    ],
    tags: ['format tetap', 'komposisi', 'terdiri dari'],
    level: 4,
  },

  {
    id: 'g4-032',
    title: 'Format Tetap: 在……方面',
    titleZh: '在……方面',
    pattern: '在 + N + 方面，S + V',
    explanation: 'Menyatakan "dalam hal/bidang..." atau "dari segi...". Menunjukkan aspek atau bidang tertentu yang sedang dibicarakan.',
    examples: [
      { zh: '在这方面，我没有什么经验。', pinyin: 'Zài zhè fāngmiàn, wǒ méiyǒu shénme jīngyàn.', id: 'Dalam hal ini, saya tidak punya pengalaman.' },
      { zh: '在修理电脑方面，她是个专家。', pinyin: 'Zài xiūlǐ diànnǎo fāngmiàn, tā shì gè zhuānjiā.', id: 'Dalam bidang perbaikan komputer, dia adalah seorang ahli.' },
    ],
    tags: ['format tetap', 'bidang', 'aspek'],
    level: 4,
  },

  {
    id: 'g4-033',
    title: 'Format Tetap: 在……上/下/中',
    titleZh: '在……上／下／中',
    pattern: '在 + N + 上/下/中, S + V',
    explanation: '在…上 = dalam hal/di bidang. 在…下 = di bawah (pengaruh/kondisi). 在…中 = dalam proses/di tengah. Menunjukkan kondisi, pengaruh, atau lingkup.',
    examples: [
      { zh: '在这件事情上，最好多听听父母的意见。', pinyin: 'Zài zhè jiàn shìqíng shàng, zuìhǎo duō tīngting fùmǔ de yìjiàn.', id: 'Dalam hal ini, sebaiknya lebih banyak mendengarkan pendapat orang tua.' },
      { zh: '在他的影响下，我喜欢上了中文。', pinyin: 'Zài tā de yǐngxiǎng xià, wǒ xǐhuān shàng le Zhōngwén.', id: 'Di bawah pengaruhnya, saya jadi menyukai bahasa Mandarin.' },
      { zh: '在这篇课文中，我们一共学了三十个生词。', pinyin: 'Zài zhè piān kèwén zhōng, wǒmen yígòng xué le sānshí gè shēngcí.', id: 'Dalam teks pelajaran ini, kami belajar total tiga puluh kosakata baru.' },
    ],
    tags: ['format tetap', 'kondisi', 'lingkup'],
    level: 4,
  },

  // ════════════════════════════════════════════════════════════
  // A.4.4 句子成分 (KOMPONEN KALIMAT)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g4-034',
    title: 'Subjek Frasa Nominal (Klausa Subjektif)',
    titleZh: '主谓短语作主语',
    pattern: 'Frasa S-P + (是) + Adj/N',
    explanation: 'Sebuah frasa subjek-predikat bisa berfungsi sebagai subjek kalimat. Ini adalah tipe kalimat di mana subjeknya sendiri merupakan klausa.',
    examples: [
      { zh: '他不去也可以。', pinyin: 'Tā bù qù yě kěyǐ.', id: 'Dia tidak pergi pun tidak apa-apa.' },
      { zh: '身体健康很重要。', pinyin: 'Shēntǐ jiànkāng hěn zhòngqiào.', id: 'Kesehatan tubuh sangat penting.' },
      { zh: '我参加中文水平考试是为了获得奖学金去中国留学。', pinyin: 'Wǒ cānjiā Zhōngwén shuǐpíng kǎoshì shì wèile huòdé jiǎngxuéjīn qù Zhōngguó liúxué.', id: 'Saya mengikuti ujian kemampuan bahasa Mandarin adalah untuk mendapatkan beasiswa belajar di Tiongkok.' },
    ],
    tags: ['subjek', 'frasa nominal', 'klausa subjektif'],
    level: 4,
  },

  {
    id: 'g4-035',
    title: 'Subjek Penerima Tindakan (受事主语)',
    titleZh: '受事主语',
    pattern: 'Objek Logis + V + 了',
    explanation: 'Dalam kalimat ini, subjek gramatikal sebenarnya adalah penerima tindakan (bukan pelaku). Umum dalam bahasa Mandarin untuk menyatakan sesuatu yang sudah selesai/habis.',
    examples: [
      { zh: '饭都吃光了。', pinyin: 'Fàn dōu chī guāng le.', id: 'Nasi sudah habis dimakan.' },
      { zh: '作业我做完了。', pinyin: 'Zuòyè wǒ zuò wán le.', id: 'Pekerjaan rumah sudah saya selesaikan.' },
      { zh: '这本书我已经看过三遍了。', pinyin: 'Zhè běn shū wǒ yǐjīng kàn guò sān biàn le.', id: 'Buku ini sudah saya baca tiga kali.' },
    ],
    tags: ['subjek', 'penerima tindakan', 'pasif'],
    level: 4,
  },

  {
    id: 'g4-036',
    title: 'Atribut Majemuk (Beberapa Atribut Berurutan)',
    titleZh: '多项定语',
    pattern: 'Num + Pengukur + Adj + N',
    explanation: 'Ketika sebuah nomina memiliki beberapa atribut (keterangan), urutannya adalah: nomor/jumlah → pengukur → adjektiva → nomina inti. Atribut terdekat ke nomina paling melekat padanya.',
    examples: [
      { zh: '我有一条漂亮的红围巾。', pinyin: 'Wǒ yǒu yī tiáo piàoliang de hóng wéijīn.', id: 'Saya punya sebuah syal merah yang cantik.' },
      { zh: '那位戴着眼镜的白头发高个子老人就是我们的校长。', pinyin: 'Nà wèi dàizhe yǎnjìng de bái tóufa gāo gèzi lǎorén jiùshì wǒmen de xiàozhǎng.', id: 'Orang tua berambut putih, berbadan tinggi, dan berkacamata itu adalah kepala sekolah kami.' },
    ],
    tags: ['atribut', 'urutan kata', 'modifier majemuk'],
    level: 4,
  },

  {
    id: 'g4-037',
    title: 'Komplemen Arah 3: Makna Hasil (趋向补语引申用法)',
    titleZh: '趋向补语3（引申用法）：动词＋上／出／起／下',
    pattern: 'V + 上/出/起/下 (makna kiasan)',
    explanation: 'Komplemen arah dapat memiliki makna kiasan: 上 = mulai/mencapai kontak. 出 = menghasilkan/mengeluarkan. 起 = mulai/teringat. 下 = menyimpan/menampung.',
    examples: [
      { zh: '请同学们离开教室时关上窗户。', pinyin: 'Qǐng tóngxuémen líkāi jiàoshì shí guān shàng chuānghù.', id: 'Mohon siswa menutup jendela saat meninggalkan kelas.' },
      { zh: '他终于想起了当时的情况。', pinyin: 'Tā zhōngyú xiǎng qǐ le dāngshí de qíngkuàng.', id: 'Dia akhirnya teringat situasi saat itu.' },
      { zh: '请留下你的地址和手机号。', pinyin: 'Qǐng liú xià nǐ de dìzhǐ hé shǒujīhào.', id: 'Silakan tinggalkan alamat dan nomor HP kamu.' },
    ],
    tags: ['komplemen', 'arah', 'makna kiasan', 'hasil'],
    level: 4,
  },

  {
    id: 'g4-038',
    title: 'Kalimat 把 (2): Menyatakan Penempatan/Perubahan Posisi',
    titleZh: '"把"字句2：表处置',
    pattern: 'S + 把 + O + V + (了/着) / S + 把 + O + V + 给 + O2',
    explanation: 'Kalimat 把 digunakan untuk menyatakan bagaimana suatu objek diperlakukan, dipindahkan, atau diubah keadaannya. Objek setelah 把 harus definitif (sudah diketahui).',
    examples: [
      { zh: '同学们再把试卷检查检查。', pinyin: 'Tóngxuémen zài bǎ shìjuàn jiǎnchá jiǎnchá.', id: 'Para siswa periksa lagi lembar ujiannya.' },
      { zh: '他把冬天的衣服晒了，收在箱子里。', pinyin: 'Tā bǎ dōngtiān de yīfu shài le, shōu zài xiāngzi lǐ.', id: 'Dia menjemur pakaian musim dingin lalu menyimpannya di koper.' },
      { zh: '他拿不了了，你帮他把这些东西给拿着。', pinyin: 'Tā ná bù liǎo le, nǐ bāng tā bǎ zhèxiē dōngxi gěi ná zhe.', id: 'Dia tidak bisa membawa lagi, tolong kamu bantu dia membawakan barang-barang ini.' },
    ],
    tags: ['kalimat 把', 'tata bahasa', 'disposisi objek'],
    level: 4,
  },

  {
    id: 'g4-039',
    title: 'Kalimat Pasif 被 (2): Diperluas',
    titleZh: '被动句2：主语＋被＋动词＋其他成分',
    pattern: 'S + 被 (+ Agen) + V + Komplemen/了',
    explanation: 'Kalimat pasif dengan 被 menunjukkan bahwa subjek menerima tindakan dari orang/hal lain. Agen (pelaku) bisa disebutkan atau dihilangkan. Sering digunakan ketika hasilnya tidak diinginkan.',
    examples: [
      { zh: '王老师被请去开会了。', pinyin: 'Wáng lǎoshī bèi qǐng qù kāi huì le.', id: 'Guru Wang diminta untuk pergi rapat.' },
      { zh: '教室的灯早就被关上了。', pinyin: 'Jiàoshì de dēng zǎo jiù bèi guān shàng le.', id: 'Lampu kelas sudah dimatikan sejak tadi.' },
      { zh: '那张画儿被买走了。', pinyin: 'Nà zhāng huàr bèi mǎi zǒu le.', id: 'Lukisan itu sudah dibeli (oleh seseorang).' },
    ],
    tags: ['kalimat pasif', '被', 'tata bahasa'],
    level: 4,
  },

  {
    id: 'g4-040',
    title: 'Kalimat Keberadaan 2 (存现句): Muncul dan Menghilang',
    titleZh: '存现句2',
    pattern: 'Tempat + V + 趋向补语/结果补语 + (了) + 数量 + N',
    explanation: 'Kalimat ini menyatakan kemunculan atau menghilangnya sesuatu/seseorang di suatu tempat. (1) Kemunculan: Tempat + V + Komplemen + Jumlah + N. (2) Menghilang: Tempat + V + 走/掉 + 了 + Jumlah + N.',
    examples: [
      { zh: '前边开来一辆车。', pinyin: 'Qiánbiān kāi lái yī liàng chē.', id: 'Dari depan datang satu mobil.' },
      { zh: '教室里走出来一位老师。', pinyin: 'Jiàoshì lǐ zǒu chūlái yī wèi lǎoshī.', id: 'Dari dalam kelas berjalan keluar seorang guru.' },
      { zh: '我们班里转走了一个学生。', pinyin: 'Wǒmen bān lǐ zhuǎn zǒu le yī gè xuéshēng.', id: 'Di kelas kami ada satu siswa yang pindah.' },
    ],
    tags: ['kalimat keberadaan', 'kemunculan', 'menghilang'],
    level: 4,
  },

  {
    id: 'g4-041',
    title: 'Kalimat Ganda (兼语句 2): Pujian/Kritik dan Penamaan',
    titleZh: '兼语句2',
    pattern: 'S + 表扬/批评 + O1 + V + O2 / S + 叫/称/说/收/选 + O1 + 做/为/当/是 + O2',
    explanation: '(1) Menyatakan pujian/kritik: S memuji/mengkritik O1 karena O1 melakukan sesuatu pada O2. (2) Menyatakan penamaan/pengakuan: O1 disebut/diangkat sebagai O2.',
    examples: [
      { zh: '老师表扬他帮助同学。', pinyin: 'Lǎoshī biǎoyáng tā bāngzhù tóngxué.', id: 'Guru memuji dia karena membantu teman.' },
      { zh: '大家都称他为先生。', pinyin: 'Dàjiā dōu chēng tā wéi xiānsheng.', id: 'Semua orang memanggilnya sebagai "tuan".' },
      { zh: '同学们都选他当班长。', pinyin: 'Tóngxuémen dōu xuǎn tā dāng bānzhǎng.', id: 'Semua teman sekelas memilihnya menjadi ketua kelas.' },
    ],
    tags: ['kalimat ganda', 'pivot', 'penamaan'],
    level: 4,
  },

  {
    id: 'g4-042',
    title: 'Kalimat 是……的 (2): Menegaskan Pandangan/Sikap',
    titleZh: '"是……的"句2：强调说话人的看法或态度',
    pattern: 'S + 是 + Adj/V + 的',
    explanation: 'Pola 是…的 digunakan untuk menegaskan pandangan, sikap, atau penilaian pembicara. Berbeda dengan pola 是…的 untuk menekankan waktu/cara/tempat suatu kejadian.',
    examples: [
      { zh: '这个问题是可以解决的。', pinyin: 'Zhège wèntí shì kěyǐ jiějué de.', id: 'Masalah ini bisa diselesaikan (saya yakin).' },
      { zh: '那样的事情是绝对不会发生的。', pinyin: 'Nàyàng de shìqíng shì juéduì bù huì fāshēng de.', id: 'Hal seperti itu sungguh tidak akan pernah terjadi.' },
    ],
    tags: ['kalimat 是的', 'penekanan', 'penegasan', 'sikap'],
    level: 4,
  },

  // ════════════════════════════════════════════════════════════
  // A.4.5 句子的类型 (JENIS KALIMAT)
  // A.4.5.2 复句 (KALIMAT MAJEMUK)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g4-043',
    title: 'Kalimat Majemuk Setara: 不是……，而是……',
    titleZh: '并列复句：不是……，而是……',
    pattern: 'S + 不是 + X，而是 + Y',
    explanation: 'Menyatakan koreksi atau klarifikasi: "bukan X, melainkan Y". Menolak pernyataan pertama dan menetapkan pernyataan kedua sebagai yang benar.',
    examples: [
      { zh: '我不是不想去，而是没有时间。', pinyin: 'Wǒ búshì bù xiǎng qù, érshì méiyǒu shíjiān.', id: 'Saya bukan tidak mau pergi, melainkan tidak punya waktu.' },
      { zh: '这件事错的不是我，而是他。', pinyin: 'Zhè jiàn shì cuò de búshì wǒ, érshì tā.', id: 'Yang salah dalam hal ini bukan saya, melainkan dia.' },
    ],
    tags: ['kalimat majemuk', 'koreksi', 'bukan-melainkan'],
    level: 4,
  },

  {
    id: 'g4-044',
    title: 'Kalimat Majemuk Setara: 既……，又/也……',
    titleZh: '并列复句：既……，又／也……',
    pattern: 'S + 既 + V1/Adj1，又/也 + V2/Adj2',
    explanation: 'Menyatakan bahwa dua kondisi atau sifat ada secara bersamaan: "baik A maupun B" atau "sekaligus A dan B".',
    examples: [
      { zh: '这件新衣服既好看，又暖和。', pinyin: 'Zhè jiàn xīn yīfu jì hǎokàn, yòu nuǎnhuo.', id: 'Baju baru ini sekaligus bagus dan hangat.' },
      { zh: '他既是我们的老师，也是我们的朋友。', pinyin: 'Tā jì shì wǒmen de lǎoshī, yě shì wǒmen de péngyou.', id: 'Dia sekaligus adalah guru kami dan juga teman kami.' },
    ],
    tags: ['kalimat majemuk', 'setara', 'sekaligus'],
    level: 4,
  },

  {
    id: 'g4-045',
    title: 'Kalimat Majemuk Berurutan: 首先……，其次……',
    titleZh: '承接复句：首先……，其次……',
    pattern: '首先 + Klausa 1，其次 + Klausa 2 (，再次 + Klausa 3)',
    explanation: 'Menyatakan urutan prioritas atau langkah-langkah: "pertama... kemudian/kedua...". 首先 = pertama/yang utama. 其次 = kedua/selanjutnya.',
    examples: [
      { zh: '首先我们要读一遍课文，其次我们要根据课文做一个练习。', pinyin: 'Shǒuxiān wǒmen yào dú yī biàn kèwén, qícì wǒmen yào gēnjù kèwén zuò yī gè liànxí.', id: 'Pertama kita perlu membaca teks sekali, kemudian kita perlu mengerjakan latihan berdasarkan teks.' },
      { zh: '评价一个学生，首先看品质，其次看成绩。', pinyin: 'Píngjià yī gè xuéshēng, shǒuxiān kàn pǐnzhì, qícì kàn chéngjì.', id: 'Menilai seorang siswa, pertama lihat karakternya, kedua lihat prestasinya.' },
    ],
    tags: ['kalimat majemuk', 'berurutan', 'prioritas', 'langkah'],
    level: 4,
  },

  {
    id: 'g4-046',
    title: 'Kalimat Majemuk Berurutan: ……，于是……',
    titleZh: '承接复句：……，于是……',
    pattern: 'Klausa sebab, + 于是 + Klausa akibat/tindakan lanjut',
    explanation: '于是 menyatakan urutan sebab-akibat langsung: "maka/lalu/oleh karena itu". Akibat mengikuti secara alami dari kondisi sebelumnya.',
    examples: [
      { zh: '风停了，下起雨来，于是人们纷纷打起了雨伞。', pinyin: 'Fēng tíng le, xià qǐ yǔ lái, yúshì rénmen fēnfēn dǎ qǐ le yǔsǎn.', id: 'Angin berhenti, hujan mulai turun, maka orang-orang ramai-ramai membuka payung.' },
      { zh: '离开会的时间还早，于是我们去逛了逛书店。', pinyin: 'Lí kāi huì de shíjiān hái zǎo, yúshì wǒmen qù guàng le guàng shūdiàn.', id: 'Masih lama sebelum waktunya rapat, maka kami pergi berkeliling ke toko buku.' },
    ],
    tags: ['kalimat majemuk', 'berurutan', 'maka', 'akibat'],
    level: 4,
  },

  {
    id: 'g4-047',
    title: 'Kalimat Majemuk Progresif: ……，甚至……',
    titleZh: '递进复句：……，甚至……',
    pattern: 'Klausa 1，甚至 + Klausa 2 (yang lebih ekstrem)',
    explanation: '甚至 menyatakan bahwa sesuatu bahkan lebih ekstrem dari yang disebutkan sebelumnya: "bahkan/sampai-sampai".',
    examples: [
      { zh: '他什么都不会，甚至连最简单的汉字也写不了。', pinyin: 'Tā shénme dōu bù huì, shènzhì lián zuì jiǎndān de Hànzì yě xiě bù liǎo.', id: 'Dia tidak bisa apa-apa, bahkan huruf Han yang paling sederhana pun tidak bisa ditulis.' },
      { zh: '妈妈真的很生气，甚至连晚饭都没有吃。', pinyin: 'Māma zhēnde hěn shēngqì, shènzhì lián wǎnfàn dōu méiyǒu chī.', id: 'Ibu sungguh sangat marah, bahkan makan malam pun tidak makan.' },
    ],
    tags: ['kalimat majemuk', 'progresif', 'bahkan', 'ekstrem'],
    level: 4,
  },

  {
    id: 'g4-048',
    title: 'Kalimat Majemuk Pilihan: 或者……，或者……',
    titleZh: '选择复句：或者……，或者……',
    pattern: '或者 + Pilihan 1，或者 + Pilihan 2',
    explanation: 'Menyatakan pilihan antara dua atau lebih kemungkinan: "entah... atau...". 或者 digunakan dalam kalimat deklaratif (berbeda dengan 还是 yang untuk pertanyaan).',
    examples: [
      { zh: '这件事或者赶快停止，或者重新开始。', pinyin: 'Zhè jiàn shì huòzhě gǎnkuài tíngzhǐ, huòzhě chóngxīn kāishǐ.', id: 'Hal ini entah harus segera dihentikan, atau dimulai kembali.' },
      { zh: '咱们三个人，或者你去，或者我去，或者他去，谁去都可以。', pinyin: 'Zánmen sān gè rén, huòzhě nǐ qù, huòzhě wǒ qù, huòzhě tā qù, shéi qù dōu kěyǐ.', id: 'Kita bertiga, entah kamu yang pergi, atau saya, atau dia, siapa yang pergi boleh saja.' },
    ],
    tags: ['kalimat majemuk', 'pilihan', 'atau'],
    level: 4,
  },

  {
    id: 'g4-049',
    title: 'Kalimat Majemuk Pertentangan: ……，然而……',
    titleZh: '转折复句：……，然而……',
    pattern: 'Klausa 1，然而 + Klausa 2 (berlawanan)',
    explanation: '然而 = namun demikian/akan tetapi (formal). Menyatakan pertentangan yang lebih kuat dari 但是, biasanya dalam bahasa tulis.',
    examples: [
      { zh: '我知道中文很有用，然而中文也太难了。', pinyin: 'Wǒ zhīdào Zhōngwén hěn yǒuyòng, rán\'ér Zhōngwén yě tài nán le.', id: 'Saya tahu bahasa Mandarin sangat berguna, namun bahasa Mandarin juga terlalu sulit.' },
      { zh: '他说他不喜欢这部电影，然而我觉得很有意思。', pinyin: 'Tā shuō tā bù xǐhuān zhè bù diànyǐng, rán\'ér wǒ juéde hěn yǒu yìsi.', id: 'Dia bilang tidak suka film ini, namun saya merasa sangat menarik.' },
    ],
    tags: ['kalimat majemuk', 'pertentangan', 'namun', 'formal'],
    level: 4,
  },

  {
    id: 'g4-050',
    title: 'Kalimat Majemuk Bersyarat: ……，否则……',
    titleZh: '假设复句：……，否则……',
    pattern: 'Syarat/tindakan, 否则 + akibat negatif',
    explanation: '否则 = kalau tidak/jika tidak demikian/sebaliknya. Menunjukkan konsekuensi negatif jika kondisi pertama tidak terpenuhi.',
    examples: [
      { zh: '我要认真复习，否则考试会不及格的。', pinyin: 'Wǒ yào rènzhēn fùxí, fǒuzé kǎoshì huì bù jígé de.', id: 'Saya harus belajar dengan serius, kalau tidak ujian bisa tidak lulus.' },
      { zh: '上课前一定要预习好生词和课文，否则就听不懂老师讲的。', pinyin: 'Shàng kè qián yīdìng yào yùxí hǎo shēngcí hé kèwén, fǒuzé jiù tīng bù dǒng lǎoshī jiǎng de.', id: 'Sebelum kelas harus mempelajari kosakata dan teks dulu, kalau tidak tidak akan paham penjelasan guru.' },
    ],
    tags: ['kalimat majemuk', 'syarat', 'kalau tidak', 'konsekuensi'],
    level: 4,
  },

  {
    id: 'g4-051',
    title: 'Kalimat Majemuk Pengandaian: 假如……，（就）……',
    titleZh: '假设复句：假如……，（就）……',
    pattern: '假如 + Kondisi Hipotetis, (S) + 就 + Konsekuensi',
    explanation: '假如 = seandainya/andaikata (pengandaian). Menyatakan kondisi hipotetis yang mungkin terjadi di masa depan, diikuti konsekuensinya.',
    examples: [
      { zh: '假如有困难，你一定要告诉我。', pinyin: 'Jiǎrú yǒu kùnnan, nǐ yīdìng yào gàosu wǒ.', id: 'Seandainya ada kesulitan, kamu harus memberitahu saya.' },
      { zh: '假如能通过这个考试，我就可以拿到学校的奖学金了。', pinyin: 'Jiǎrú néng tōngguò zhège kǎoshì, wǒ jiù kěyǐ ná dào xuéxiào de jiǎngxuéjīn le.', id: 'Seandainya bisa lulus ujian ini, saya bisa mendapatkan beasiswa sekolah.' },
    ],
    tags: ['kalimat majemuk', 'pengandaian', 'hipotetis'],
    level: 4,
  },

  {
    id: 'g4-052',
    title: 'Kalimat Majemuk Pengandaian: 万一……，（就）……',
    titleZh: '假设复句：万一……，（就）……',
    pattern: '万一 + Kemungkinan Buruk, (S) + 就 + Tindakan Antisipasi',
    explanation: '万一 = kalau-kalau/jika seandainya (kemungkinan kecil tapi mungkin terjadi, umumnya hal negatif). Menyatakan antisipasi terhadap kemungkinan buruk.',
    examples: [
      { zh: '万一我没来，你就自己先去吧。', pinyin: 'Wànyī wǒ méi lái, nǐ jiù zìjǐ xiān qù ba.', id: 'Kalau-kalau saya tidak datang, kamu pergi sendiri dulu saja.' },
      { zh: '一定要把你们的护照带上，万一需要，没带就麻烦了。', pinyin: 'Yīdìng yào bǎ nǐmen de hùzhào dài shàng, wànyī xūyào, méi dài jiù máfan le.', id: 'Harus bawa paspor kalian, kalau-kalau diperlukan, tidak bawa bisa repot.' },
    ],
    tags: ['kalimat majemuk', 'pengandaian', 'antisipasi', 'kemungkinan kecil'],
    level: 4,
  },

  {
    id: 'g4-053',
    title: 'Kalimat Majemuk Kondisional: 不管……，都/也……',
    titleZh: '条件复句：不管……，都／也……',
    pattern: '不管 + Kondisi Apapun, S + 都/也 + V',
    explanation: '不管 = tidak peduli/bagaimanapun. Menyatakan bahwa hasilnya tidak berubah apapun kondisinya. Biasanya diikuti kata tanya (什么、怎么、多) dalam klausa pertama.',
    examples: [
      { zh: '不管明天是否下雨，我们都要去看他。', pinyin: 'Bùguǎn míngtiān shìfǒu xià yǔ, wǒmen dōu yào qù kàn tā.', id: 'Tidak peduli besok hujan atau tidak, kami tetap akan pergi menjenguknya.' },
      { zh: '不管有多难，我也会坚持学下去。', pinyin: 'Bùguǎn yǒu duō nán, wǒ yě huì jiānchí xué xiàqù.', id: 'Tidak peduli seberapa sulitnya, saya akan tetap terus belajar.' },
    ],
    tags: ['kalimat majemuk', 'kondisional', 'tidak peduli', 'konsesi'],
    level: 4,
  },

  {
    id: 'g4-054',
    title: 'Kalimat Majemuk Kondisional: 无论……，都/也……',
    titleZh: '条件复句：无论……，都／也……',
    pattern: '无论 + Kondisi Apapun, S + 都/也 + V',
    explanation: '无论 = bagaimanapun/apapun (lebih formal dari 不管). Menyatakan bahwa hasil tidak berubah dalam kondisi apapun.',
    examples: [
      { zh: '无论学习多么紧张，我都坚持每天锻炼一个小时。', pinyin: 'Wúlùn xuéxí duōme jǐnzhāng, wǒ dōu jiānchí měitiān duànliàn yī gè xiǎoshí.', id: 'Bagaimanapun sibuknya belajar, saya tetap berolahraga satu jam setiap hari.' },
      { zh: '无论他怎么说，也没有人相信他。', pinyin: 'Wúlùn tā zěnme shuō, yě méiyǒu rén xiāngxìn tā.', id: 'Apapun yang dia katakan, tidak ada yang mempercayainya.' },
    ],
    tags: ['kalimat majemuk', 'kondisional', 'bagaimanapun', 'formal'],
    level: 4,
  },

  {
    id: 'g4-055',
    title: 'Kalimat Majemuk Sebab-Akibat: 既然……，就……',
    titleZh: '因果复句：既然……，就……',
    pattern: '既然 + Fakta yang Diterima, S + 就 + Kesimpulan/Tindakan',
    explanation: '既然 = karena/mengingat (bahwa sudah demikian). Digunakan ketika kondisi sudah terjadi/diterima sebagai fakta, maka tindakan logis harus diambil.',
    examples: [
      { zh: '既然这事已经决定了，我就不说什么了。', pinyin: 'Jìrán zhè shì yǐjīng juédìng le, wǒ jiù bù shuō shénme le.', id: 'Karena hal ini sudah diputuskan, saya tidak akan berkata apa-apa lagi.' },
      { zh: '既然外面下雨了，我们就明天再去吧。', pinyin: 'Jìrán wàimiàn xià yǔ le, wǒmen jiù míngtiān zài qù ba.', id: 'Karena di luar sudah hujan, kita pergi besok saja.' },
    ],
    tags: ['kalimat majemuk', 'sebab-akibat', 'karena-maka', 'logis'],
    level: 4,
  },

  {
    id: 'g4-056',
    title: 'Kalimat Majemuk Sebab-Akibat: ……，可见……',
    titleZh: '因果复句：……，可见……',
    pattern: 'Fakta/Bukti, 可见 + Kesimpulan',
    explanation: '可见 = terbukti/dari sini terlihat/jelas bahwa. Menyatakan kesimpulan logis yang ditarik dari fakta yang disebutkan.',
    examples: [
      { zh: '他的中文水平很高，可见他在留学期间学习是多么努力。', pinyin: 'Tā de Zhōngwén shuǐpíng hěn gāo, kějiàn tā zài liúxué qījiān xuéxí shì duōme nǔlì.', id: 'Tingkat bahasa Mandarinnya sangat tinggi, terbukti betapa kerasnya dia belajar selama studi di luar negeri.' },
      { zh: '他在我困难的时候一直帮助我，可见他是我多么好的朋友。', pinyin: 'Tā zài wǒ kùnnan de shíhou yīzhí bāngzhù wǒ, kějiàn tā shì wǒ duōme hǎo de péngyou.', id: 'Dia selalu membantu saya saat kesulitan, terbukti betapa baiknya dia sebagai teman saya.' },
    ],
    tags: ['kalimat majemuk', 'kesimpulan', 'terbukti', 'deduksi'],
    level: 4,
  },

  {
    id: 'g4-057',
    title: 'Kalimat Majemuk Konsesif: 哪怕……，也/还……',
    titleZh: '让步复句：哪怕……，也／还……',
    pattern: '哪怕 + Kondisi Ekstrem, S + 也/还 + V',
    explanation: '哪怕 = sekalipun/walau/meski (kondisi yang sangat ekstrem sekalipun). Menyatakan bahwa tidak peduli betapa ekstremnya kondisi, hasilnya tetap sama.',
    examples: [
      { zh: '哪怕明天下雨，足球比赛也要继续进行。', pinyin: 'Nǎpà míngtiān xià yǔ, zúqiú bǐsài yě yào jìxù jìnxíng.', id: 'Sekalipun besok hujan, pertandingan sepak bola tetap harus berlanjut.' },
      { zh: '哪怕机会不大，我还是要去试一试。', pinyin: 'Nǎpà jīhuì bù dà, wǒ háishi yào qù shì yi shì.', id: 'Sekalipun peluangnya kecil, saya tetap akan mencobanya.' },
    ],
    tags: ['kalimat majemuk', 'konsesif', 'sekalipun', 'tetap'],
    level: 4,
  },

  {
    id: 'g4-058',
    title: 'Kalimat Majemuk Tujuan: ……，好……',
    titleZh: '目的复句：……，好……',
    pattern: 'Tindakan, + 好 + Tujuan',
    explanation: '好 di sini berarti "agar bisa/supaya". Menyatakan tujuan dari tindakan yang dilakukan.',
    examples: [
      { zh: '老师布置了听写作业，好帮助学生练习汉字。', pinyin: 'Lǎoshī bùzhì le tīngxiě zuòyè, hǎo bāngzhù xuéshēng liànxí Hànzì.', id: 'Guru memberikan tugas dikte, agar membantu siswa berlatih menulis huruf Han.' },
      { zh: '她每天都给家里打电话，好让父母放心。', pinyin: 'Tā měitiān dōu gěi jiālǐ dǎ diànhuà, hǎo ràng fùmǔ fàng xīn.', id: 'Dia menelepon rumah setiap hari, agar orang tua tenang.' },
    ],
    tags: ['kalimat majemuk', 'tujuan', 'agar'],
    level: 4,
  },

  {
    id: 'g4-059',
    title: 'Kalimat Majemuk Ringkas Tanpa Penanda',
    titleZh: '紧缩复句：无标记',
    pattern: 'S1 + V1, S2/S + V2 (tanpa kata hubung)',
    explanation: 'Kalimat majemuk ringkas tanpa kata penghubung: dua proposisi bergabung langsung, hubungannya tersirat dari konteks. Umumnya menyatakan kondisi/konsekuensi.',
    examples: [
      { zh: '你有事你先走。', pinyin: 'Nǐ yǒu shì nǐ xiān zǒu.', id: 'Kalau kamu ada urusan, kamu pergi duluan.' },
      { zh: '你不怕我怕。', pinyin: 'Nǐ bù pà wǒ pà.', id: 'Kalau kamu tidak takut, aku yang takut.' },
    ],
    tags: ['kalimat majemuk', 'ringkas', 'tanpa penanda', 'implisit'],
    level: 4,
  },

  {
    id: 'g4-060',
    title: 'Kalimat Majemuk Ringkas: 不……也……',
    titleZh: '紧缩复句：不……也……',
    pattern: 'S + 不 + V1 + 也 + 要/得 + V2',
    explanation: 'Menyatakan bahwa meski tidak melakukan V1, tetap harus/akan melakukan V2. "Meski tidak... tetap harus/juga...".',
    examples: [
      { zh: '今天晚上我不睡觉也要把这篇作文写完。', pinyin: 'Jīntiān wǎnshang wǒ bù shuìjiào yě yào bǎ zhè piān zuòwén xiě wán.', id: 'Malam ini meski tidak tidur pun saya harus menyelesaikan karangan ini.' },
      { zh: '他不吃饭也要帮我修电脑。', pinyin: 'Tā bù chī fàn yě yào bāng wǒ xiū diànnǎo.', id: 'Dia meski tidak makan pun mau membantu saya memperbaiki komputer.' },
    ],
    tags: ['kalimat majemuk', 'ringkas', 'meski tidak'],
    level: 4,
  },

  // ════════════════════════════════════════════════════════════
  // A.4.6 特殊表达法 (EKSPRESI KHUSUS)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g4-061',
    title: 'Menyatakan Bilangan Perkiraan 3: 数词+来+量词',
    titleZh: '概数表示法3：数词＋来＋量词',
    pattern: '十/百/千 + 来 + 量词',
    explanation: 'Menyatakan bilangan perkiraan dengan menambahkan 来 antara angka bulat dan kata ukur: "lebih kurang/kira-kira". Hanya bisa digunakan setelah angka bulat seperti 10, 50, 100.',
    examples: [
      { zh: '十来本', pinyin: 'shí lái běn', id: 'sekitar sepuluh buku' },
      { zh: '五十来斤', pinyin: 'wǔshí lái jīn', id: 'sekitar lima puluh jin' },
      { zh: '一百来辆', pinyin: 'yī bǎi lái liàng', id: 'sekitar seratus kendaraan' },
    ],
    tags: ['bilangan', 'perkiraan', 'sekitar'],
    level: 4,
  },

  {
    id: 'g4-062',
    title: 'Bilangan Desimal, Pecahan, Persen, dan Kelipatan',
    titleZh: '小数、分数、百分数、倍数的表示法',
    pattern: '零点X (desimal) / X分之Y (pecahan) / 百分之X (persen) / X倍 (kelipatan)',
    explanation: 'Cara menyatakan: Desimal: 零点三 (0,3). Pecahan: 三分之二 (2/3) — penyebut dahulu diikuti 分之 lalu pembilang. Persen: 百分之五十 (50%). Kelipatan: 五倍 (5 kali lipat).',
    examples: [
      { zh: '零点三', pinyin: 'líng diǎn sān', id: '0,3 (nol koma tiga)' },
      { zh: '三分之二', pinyin: 'sān fēn zhī èr', id: '2/3 (dua pertiga)' },
      { zh: '百分之五十', pinyin: 'bǎifēnzhī wǔshí', id: '50% (lima puluh persen)' },
      { zh: '三班男生人数是女生人数的三倍。', pinyin: 'Sān bān nánnshēng rénshù shì nǚshēng rénshù de sān bèi.', id: 'Jumlah siswa laki-laki kelas tiga adalah tiga kali jumlah siswa perempuan.' },
    ],
    tags: ['bilangan', 'desimal', 'pecahan', 'persen', 'kelipatan'],
    level: 4,
  },

  // A.4.7 强调的方法

  {
    id: 'g4-063',
    title: 'Penekanan dengan Kalimat Tanya Retoris 2: Kata Tanya sebagai Penekanan',
    titleZh: '用反问句表示强调：反问句2 — 由疑问代词构成的反问句',
    pattern: 'Kata tanya (哪儿/怎么/谁/哪) + 否定/肯定 (retoris)',
    explanation: 'Kalimat tanya retoris menggunakan kata tanya untuk menegaskan kebalikannya. "他去哪儿，我怎么会知道呢？" = Saya tidak mungkin tahu dia pergi ke mana.',
    examples: [
      { zh: '他这么有名，谁不知道呢？', pinyin: 'Tā zhème yǒumíng, shéi bù zhīdào ne?', id: 'Dia sepopuler itu, siapa yang tidak tahu? (= semua orang tahu)' },
      { zh: '作业这么多，我哪儿有时间出去玩儿？', pinyin: 'Zuòyè zhème duō, wǒ nǎr yǒu shíjiān chūqù wánr?', id: 'Tugas sebanyak ini, mana ada waktu saya untuk keluar main? (= tidak ada waktu)' },
    ],
    tags: ['penekanan', 'kalimat tanya retoris', 'kata tanya'],
    level: 4,
  },

  {
    id: 'g4-064',
    title: 'Penekanan dengan Negasi Ganda',
    titleZh: '用双重否定表示强调',
    pattern: '没有 + N + 不 + V / 不 + V1 + 不 + V2',
    explanation: 'Dua negasi berturut-turut menghasilkan penegasan yang kuat: "tidak ada yang tidak..." = "semua...". Menekankan universalitas atau keniscayaan.',
    examples: [
      { zh: '没有孩子不喜欢玩儿。', pinyin: 'Méiyǒu háizi bù xǐhuān wánr.', id: 'Tidak ada anak yang tidak suka bermain. (= semua anak suka bermain)' },
      { zh: '这么重要的活动我不可能不参加。', pinyin: 'Zhème zhòngqiào de huódòng wǒ bù kěnéng bù cānjiā.', id: 'Kegiatan sepenting ini tidak mungkin saya tidak ikuti.' },
    ],
    tags: ['penekanan', 'negasi ganda', 'penegasan kuat'],
    level: 4,
  },

  {
    id: 'g4-065',
    title: 'Penekanan dengan 一+量词+也/都/也没(不)…',
    titleZh: '用"一＋量词（＋名词）＋也（都）／也没（不）……"表示强调',
    pattern: '一 + 量词 (+N) + 也(都)/也没(不) + V',
    explanation: 'Pola ini menekankan "sama sekali tidak/sedikitpun tidak". "一本书也没看" = tidak membaca satu buku pun. Sangat menekankan ketiadaan total.',
    examples: [
      { zh: '我一本中文书也没看过。', pinyin: 'Wǒ yī běn Zhōngwén shū yě méi kàn guò.', id: 'Saya tidak pernah membaca satu buku Mandarin pun.' },
      { zh: '刚来中国时，他一句中文也听不懂。', pinyin: 'Gāng lái Zhōngguó shí, tā yī jù Zhōngwén yě tīng bu dǒng.', id: 'Waktu baru datang ke Tiongkok, dia satu kalimat Mandarin pun tidak mengerti.' },
    ],
    tags: ['penekanan', 'sama sekali tidak', 'satu pun tidak'],
    level: 4,
  },

  {
    id: 'g4-066',
    title: 'Penekanan dengan 连……也/都……',
    titleZh: '用"连……也／都……"表示强调',
    pattern: '连 + N/Klausa + 也/都 + V (negatif atau positif)',
    explanation: '连…也/都 menekankan bahwa bahkan hal yang paling dasar/tidak terduga pun termasuk. "连…也不" = bahkan…pun tidak. "连…都" = bahkan…pun.',
    examples: [
      { zh: '他连这个作家的名字也没听说过。', pinyin: 'Tā lián zhège zuòjiā de míngzi yě méi tīng shuō guò.', id: 'Bahkan nama penulis ini pun belum pernah dia dengar.' },
      { zh: '我连最简单的汉字都写不出来。', pinyin: 'Wǒ lián zuì jiǎndān de Hànzì dōu xiě bù chūlái.', id: 'Bahkan huruf Han yang paling sederhana pun tidak bisa saya tulis.' },
    ],
    tags: ['penekanan', 'bahkan', 'inklusif', '连'],
    level: 4,
  },

  // ════════════════════════════════════════════════════════════
  // A.4.8 口语格式 (FORMAT PERCAKAPAN)
  // ════════════════════════════════════════════════════════════

  {
    id: 'g4-067',
    title: 'Format Percakapan: 不X白不X',
    titleZh: '不X白不X',
    pattern: '不 + X + 白 + 不 + X',
    explanation: 'Menyatakan "tidak melakukan X berarti rugi/sayang". Mendorong seseorang untuk memanfaatkan kesempatan karena jika tidak, kesempatan itu terbuang sia-sia.',
    examples: [
      { zh: '今天班长请客，咱们不吃白不吃。', pinyin: 'Jīntiān bānzhǎng qǐngkè, zánmen bù chī bái bù chī.', id: 'Hari ini ketua kelas mentraktir, kalau tidak kita makan sayang saja.' },
      { zh: '这个电影是免费的，我们为什么不去看电影？不看白不看。', pinyin: 'Zhège diànyǐng shì miǎnfèi de, wǒmen wèishéme bù qù kàn diànyǐng? Bù kàn bái bù kàn.', id: 'Film ini gratis, kenapa kita tidak nonton? Tidak nonton sayang saja.' },
    ],
    tags: ['percakapan', 'informal', 'sayang kalau tidak'],
    level: 4,
  },

  {
    id: 'g4-068',
    title: 'Format Percakapan: 动词+一+X是一+X',
    titleZh: '动词＋一＋X是一＋X',
    pattern: 'V + 一 + X + 是 + 一 + X',
    explanation: 'Menyatakan bahwa setiap satu unit sudah cukup/sudah ada artinya, atau menekankan melakukan sesuatu satu per satu. Kadang menyatakan kepasrahan positif.',
    examples: [
      { zh: '虽然日子过得很难，但也不能过一天是一天。', pinyin: 'Suīrán rìzi guò de hěn nán, dàn yě bù néng guò yī tiān shì yī tiān.', id: 'Meski hari-hari dijalani dengan susah payah, tidak bisa juga pasrah hari ini adalah hari ini.' },
      { zh: '能做一件是一件吧。', pinyin: 'Néng zuò yī jiàn shì yī jiàn ba.', id: 'Bisa mengerjakan satu ya kerjakan satu dulu.' },
    ],
    tags: ['percakapan', 'satu per satu', 'kepasrahan'],
    level: 4,
  },

  {
    id: 'g4-069',
    title: 'Format Percakapan: (没)有什么(好)X的',
    titleZh: '（没）有什么（好）X的',
    pattern: '(没)有什么(好) + V/Adj + 的',
    explanation: 'Menyatakan bahwa sesuatu tidak perlu dikhawatirkan atau tidak ada yang istimewa: "tidak ada yang perlu di-X" atau "ada apa yang perlu di-X?".',
    examples: [
      { zh: '这才刚刚开始，没有什么好激动的。', pinyin: 'Zhè cái gānggāng kāishǐ, méiyǒu shénme hǎo jīdòng de.', id: 'Ini baru saja dimulai, tidak ada yang perlu terlalu bersemangat.' },
      { zh: '有什么好害怕的，这种事早就想到了。', pinyin: 'Yǒu shénme hǎo hàipà de, zhè zhǒng shì zǎo jiù xiǎngdào le.', id: 'Ada apa yang perlu ditakutkan, hal seperti ini sudah lama terpikir.' },
    ],
    tags: ['percakapan', 'tidak perlu', 'meremehkan'],
    level: 4,
  },

  {
    id: 'g4-070',
    title: 'Format Percakapan: X是X，Y是Y',
    titleZh: 'X是X，Y是Y',
    pattern: 'X + 是 + X，Y + 是 + Y',
    explanation: 'Menyatakan bahwa dua hal harus dibedakan dengan jelas dan tidak boleh dicampur: "X ya X, Y ya Y". Menekankan perbedaan atau pemisahan.',
    examples: [
      { zh: '一是一，二是二，这要分清楚。', pinyin: 'Yī shì yī, èr shì èr, zhè yào fēn qīngchǔ.', id: 'Satu ya satu, dua ya dua, ini harus dibedakan dengan jelas.' },
      { zh: '昨天是昨天，今天是今天，你得交作业。', pinyin: 'Zuótiān shì zuótiān, jīntiān shì jīntiān, nǐ děi jiāo zuòyè.', id: 'Kemarin ya kemarin, hari ini ya hari ini, kamu harus mengumpulkan tugas.' },
    ],
    tags: ['percakapan', 'pemisahan', 'pembedaan', 'tegas'],
    level: 4,
  },

  {
    id: 'g4-071',
    title: 'Format Percakapan: X也得X，不X也得X',
    titleZh: 'X也得X，不X也得X',
    pattern: 'V + 也得 + V，不 + V + 也得 + V',
    explanation: 'Menyatakan keharusan mutlak: "mau X atau tidak mau X, tetap harus X". Tidak ada pilihan lain.',
    examples: [
      { zh: '这件事很重要，你做也得做，不做也得做。', pinyin: 'Zhè jiàn shì hěn zhòngqiào, nǐ zuò yě děi zuò, bù zuò yě děi zuò.', id: 'Hal ini sangat penting, kamu mau mengerjakan atau tidak, tetap harus dikerjakan.' },
      { zh: '你吃也得吃，不吃也得吃，不能浪费粮食。', pinyin: 'Nǐ chī yě děi chī, bù chī yě děi chī, bù néng làngfèi liángshí.', id: 'Kamu mau makan atau tidak mau, tetap harus makan, tidak boleh membuang makanan.' },
    ],
    tags: ['percakapan', 'keharusan mutlak', 'tidak ada pilihan'],
    level: 4,
  },

  {
    id: 'g4-072',
    title: 'Format Percakapan: X就是了',
    titleZh: 'X就是了',
    pattern: 'V/Adj + 就是了',
    explanation: '就是了 menyatakan bahwa solusi atau hal yang tepat sangat sederhana: "cukup X saja sudah". Menyederhanakan masalah yang tampak rumit.',
    examples: [
      { zh: '你别浪费时间了，直接说就是了。', pinyin: 'Nǐ bié làngfèi shíjiān le, zhíjiē shuō jiùshì le.', id: 'Jangan buang waktu, langsung bilang saja.' },
      { zh: '你不要生气，以后别跟他说话就是了。', pinyin: 'Nǐ bùyào shēngqì, yǐhòu bié gēn tā shuōhuà jiùshì le.', id: 'Jangan marah, ke depannya tidak usah bicara dengannya saja.' },
    ],
    tags: ['percakapan', 'solusi sederhana', 'cukup saja'],
    level: 4,
  },

  {
    id: 'g4-073',
    title: 'Format Percakapan: 还X呢',
    titleZh: '还X呢',
    pattern: '还 + N/V + 呢',
    explanation: '还…呢 menyatakan rasa tidak percaya, sindiran, atau kontras ironis: "masih saja X" atau "justru X (padahal seharusnya tidak)". Bernada sedikit sarkastis.',
    examples: [
      { zh: '还名牌儿呢，我听都没听过。', pinyin: 'Hái míngpáir ne, wǒ tīng dōu méi tīng guò.', id: 'Masih dibilang merek terkenal, saya dengar saja belum pernah.' },
      { zh: '还著名的专家呢，这水平还没我高。', pinyin: 'Hái zhùmíng de zhuānjiā ne, zhè shuǐpíng hái méi wǒ gāo.', id: 'Masih dibilang pakar terkenal, levelnya malah belum setinggi saya.' },
    ],
    tags: ['percakapan', 'sindiran', 'ironi', 'tidak percaya'],
    level: 4,
  },

  {
    id: 'g4-074',
    title: 'Format Percakapan: 你X你的吧',
    titleZh: '你X你的吧',
    pattern: '你 + V + 你的 + 吧',
    explanation: 'Menyatakan "kamu urus saja urusan kamu" atau "kamu lakukan saja apa yang kamu lakukan". Menunjukkan izin atau sikap tidak turut campur.',
    examples: [
      { zh: '你吃你的吧，别给我留。', pinyin: 'Nǐ chī nǐ de ba, bié gěi wǒ liú.', id: 'Kamu makan saja bagianmu, tidak perlu sisakan untuk saya.' },
      { zh: '没有什么事，你休息你的吧！', pinyin: 'Méiyǒu shénme shì, nǐ xiūxi nǐ de ba!', id: 'Tidak ada apa-apa, kamu istirahat saja!' },
    ],
    tags: ['percakapan', 'izin', 'tidak turut campur', 'informal'],
    level: 4,
  },

  {
    id: 'g4-075',
    title: 'Format Percakapan: 让/叫X就X',
    titleZh: '让／叫X就X',
    pattern: '让/叫 + Orang + V + 就 + V',
    explanation: 'Menyatakan bahwa seseorang harus melakukan apa yang diperintahkan tanpa banyak tanya: "disuruh X ya X saja". Bernada tegas dan tidak mau berkompromi.',
    examples: [
      { zh: '让你做你就做，别多问了。', pinyin: 'Ràng nǐ zuò nǐ jiù zuò, bié duō wèn le.', id: 'Disuruh kerjakan ya kerjakan saja, jangan banyak tanya.' },
      { zh: '让你安静你就安静，别那么多话。', pinyin: 'Ràng nǐ ānjìng nǐ jiù ānjìng, bié nàme duō huà.', id: 'Disuruh diam ya diam saja, jangan banyak bicara.' },
    ],
    tags: ['percakapan', 'perintah tegas', 'tidak berkompromi'],
    level: 4,
  },

  {
    id: 'g4-076',
    title: 'Format Percakapan: 说什么/怎么(着)也得X',
    titleZh: '说什么／怎么（着）也得X',
    pattern: '说什么/怎么(着) + 也 + 得 + V',
    explanation: 'Menyatakan tekad atau keharusan yang tidak bisa dihindari: "apapun yang terjadi, pasti/harus X". Menekankan bahwa seseorang akan melakukan sesuatu tidak peduli apapun.',
    examples: [
      { zh: '他生病了，我说什么也得去看看他。', pinyin: 'Tā shēng bìng le, wǒ shuō shénme yě děi qù kànkan tā.', id: 'Dia sakit, apapun yang terjadi saya harus pergi menjenguknya.' },
      { zh: '这么重要的场合他是不会迟到的，怎么着也得准时到。', pinyin: 'Zhème zhòngqiào de chǎnghé tā shì bù huì chídào de, zěnme zhe yě děi zhǔnshí dào.', id: 'Acara sepenting ini dia tidak akan terlambat, bagaimanapun harus datang tepat waktu.' },
    ],
    tags: ['percakapan', 'tekad', 'keharusan', 'apapun terjadi'],
    level: 4,
  },

];