const dataList = [
  {
    cid: '117',
    description: '架起警民沟通的桥梁',
    image: 'http://www.hndt.com/hnradio/117.jpg',
    name: '警广之声',
    hotline: '037165887252',
    interact: '1',
    streams: ['http://stream.hndt.com/live/jgzs/playlist.m3u8'],
    video_streams: [''],
    update_id: '13212',
    isprograms: 1,
    live: '《音乐斑马线》',
    time: '16:00 - 18:00'
  },
  {
    cid: '120',
    description:
      '星河音乐是河南广播电视台推出的专业音乐电台，音乐特点唯美、清新、高保真。在高品质音乐声中，赋予聆听者一个极大的想像空间，可以不受形式限制，自由地在无限的想像空间中驰骋。聆听者感受到了那种静夜里雪花落下轻触地面的感觉；吹过莎草的清风的干燥呼吸的感觉；远天闪电的折纹的感觉；傍晚的湖水拍打着岸边的感觉……',
    image:
      'http://program.hndt.com/files/images/2018/01/05/1515144881197542.png',
    name: '星河音乐台',
    hotline: '',
    interact: '1',
    streams: ['http://stream.hndt.com/live/1061/playlist.m3u8'],
    video_streams: [''],
    update_id: '13214',
    isprograms: 1,
    live: '黑胶时光',
    time: '14:00 - 17:00'
  },
  {
    cid: '11',
    description:
      '“天籁936”是河南省第一家以播出古典音乐为主的专业调频广播,旨在提升我省听众的文化素质，普及高雅音乐，陶冶人们情操，助力“文明河南”。',
    image:
      'http://program.hndt.com/files/images/2017/06/23/1498187980794598.png',
    name: '古典音乐·天籁936',
    hotline: '',
    interact: '1',
    streams: ['http://stream.hndt.com/live/gudian/playlist.m3u8'],
    video_streams: [''],
    update_id: '13202',
    isprograms: 1,
    live: '天籁晨之曲',
    time: '15:00 - 17:00'
  },
  {
    cid: '17',
    description:
      '贝多芬说，音乐是比一切智慧、一切哲学更高的启示。\n“天籁古典”音乐台，用古典音乐注入它她的内涵，选取不同时代不同体裁不同类型的作品，内容涵盖交响乐、协奏曲、奏鸣曲、清唱剧、交响诗、歌剧、舞剧音乐、组曲、序曲、夜曲、舞曲、器乐曲、抒情小品、古典民族民间音乐、现代经典创作、东西方民歌民谣、跨界音乐等。一支支经典的乐曲，铺阵通往心灵深处的长廊，为你展现博大精深的古典音乐。\n魅力回旋，释放经典。“天籁古典”音乐台，这里的古典音乐有温度，有情感。它是生活美学，也是生活哲学。你爱上它，它就会融入你的生命。\n“天籁古典”，为你而来。',
    image: 'http://www.hndt.com/hnradio/17.jpg',
    name: '天籁古典',
    hotline: '',
    interact: '1',
    streams: ['http://r.yibo.so/live/5950a4a485027b68b9e8be8c.m3u8'],
    video_streams: [''],
    update_id: 0,
    isprograms: 0,
    live: '',
    time: ''
  },
  {
    cid: '18',
    description:
      '爵士音乐的俱乐部，随性的爵士乐，最新最快的娱乐资讯，陪你度过慵懒的午后时光。',
    image: 'http://www.hndt.com/hnradio/18.jpg',
    name: '爵士FM',
    hotline: '',
    interact: '1',
    streams: ['http://r.yibo.so/live/589d4e6b2273b659ce4c3ea9.m3u8'],
    video_streams: [''],
    update_id: 0,
    isprograms: 0,
    live: '',
    time: ''
  },
  {
    cid: '19',
    description:
      '爱摇人群的时尚爬，奔放的电吉他SOLO、热血的青春鼓点、让你体验重金属嗓音带来声音快感。',
    image: 'http://www.hndt.com/hnradio/19.jpg',
    name: '摇滚天空台',
    hotline: '',
    interact: '1',
    streams: ['http://r.yibo.so/live/589d4f122273b659ce4c3ecc.m3u8'],
    video_streams: [''],
    update_id: 0,
    isprograms: 0,
    live: '',
    time: ''
  },
  {
    cid: '20',
    description:
      '民谣爱好者的音乐盒，悠扬的歌声，动听的六弦琴给你别具一格的清新、畅快；',
    image: 'http://www.hndt.com/hnradio/20.jpg',
    name: '民谣音乐台',
    hotline: '',
    interact: '1',
    streams: ['http://r.yibo.so/live/589d4ed02273b659ce4c3eb9.m3u8'],
    video_streams: [''],
    update_id: 0,
    isprograms: 0,
    live: '',
    time: ''
  },
  {
    cid: '21',
    description:
      '70后男性的火柴盒，它陪你阅读新鲜的资讯，欣赏经典的音乐，一起重温青春的记忆；',
    image: 'http://www.hndt.com/hnradio/21.jpg',
    name: '经典FM',
    hotline: '',
    interact: '1',
    streams: ['http://r.yibo.so/live/55801ddeb3ee794c623ff452.m3u8'],
    video_streams: [''],
    update_id: 0,
    isprograms: 0,
    live: '',
    time: ''
  },
  {
    cid: '22',
    description:
      '80后男人的聚集地，我们一起选择高品质、懂生活的声音，我们一起享受上班下班寂寞的时光。',
    image: 'http://www.hndt.com/hnradio/22.jpg',
    name: '80后音悦台',
    hotline: '',
    interact: '1',
    streams: ['http://r.yibo.so/live/5746ac3f934ff0e41b1e19b5.m3u8'],
    video_streams: [''],
    update_id: 0,
    isprograms: 0,
    live: '',
    time: ''
  },
  {
    cid: '23',
    description:
      '90后男生的生活玩伴，它陪你一起感受生命的朝气蓬勃、青春的逆反孤单；',
    image: 'http://www.hndt.com/hnradio/23.jpg',
    name: '潮流音悦台',
    hotline: '',
    interact: '1',
    streams: ['http://r.yibo.so/live/5746ac6e934ff0e41b1e19b6.m3u8'],
    video_streams: [''],
    update_id: 0,
    isprograms: 0,
    live: '',
    time: ''
  },
  {
    cid: '25',
    description:
      '国乐悠扬网络广播，是由河南人民广播电台主办的以中国古典音乐为主的纯音乐类网络广播节目，以传承民族文化，弘扬民族音乐，介绍民族乐器为节目主旨，以古筝、琵琶、扬琴、二胡等民族传统乐器为主，播放旋律优美，节奏舒缓的民族古典音乐。节目直播流全天分为八个栏目板块，分别是《民乐新韵》，《染指年华》，《文化深处》、《琴心茶韵》，《曲苑风荷》、《弦外有音》、《民族风情》、《渔舟唱晚》。',
    image:
      'http://program.hndt.com/files/images/2017/06/23/1498187765828570.png',
    name: '国乐悠扬',
    hotline: '',
    interact: '1',
    streams: ['http://stream.hndt.com/live/minyue/playlist.m3u8'],
    video_streams: [''],
    update_id: '13204',
    isprograms: 1,
    live: '曲苑风荷',
    time: '15:00 - 17:00'
  },
  {
    cid: '26',
    description: '河南戏曲网络广播',
    image:
      'http://program.hndt.com/files/images/2017/06/23/1498187753774837.png',
    name: '河南戏曲网络广播',
    hotline: '',
    interact: '0',
    streams: ['http://stream.hndt.com/live/wangluoxiqu/playlist.m3u8'],
    video_streams: [''],
    update_id: 0,
    isprograms: 0,
    live: '',
    time: ''
  },
  {
    cid: '118',
    description: '育婴知识、胎教音乐、儿童故事为主要内容的公益广播。',
    image:
      'http://program.hndt.com/files/images/2018/06/15/1529027972770543.jpg',
    name: '易象孕育台',
    hotline: '',
    interact: '1',
    streams: ['http://stream.hndt.com/live/yxsc/playlist.m3u8'],
    video_streams: [''],
    update_id: 0,
    isprograms: 0,
    live: '',
    time: ''
  },
  {
    cid: '119',
    description:
      '精彩节目不容错过，热点事件及时掌握。《有声文摘》汇聚国内广播电视的优秀栏目，让您释放眼睛，用耳朵来获得更多新知。',
    image:
      'http://program.hndt.com/files/images/2017/12/22/1513910910582954.png',
    name: '有声文摘',
    hotline: '',
    interact: '1',
    streams: ['http://stream.hndt.com/live/yswz/playlist.m3u8'],
    video_streams: [''],
    update_id: '13213',
    isprograms: 1,
    live: '《精彩音乐汇》',
    time: '15:46 - 17:15'
  }
]

export default dataList
