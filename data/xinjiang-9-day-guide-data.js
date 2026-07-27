window.TRAVEL_GUIDE_DATA = {
  meta: {
    documentTitle: '新疆9天自驾地图导览',
    title: '新疆9天自驾地图导览',
    subtitle: '7月25日出发，8月2日返回。伊宁机场取车，乌鲁木齐机场还车，串联赛里木湖、伊昭公路、夏塔、特克斯、那拉提和独库北段。',
    ariaLabel: '新疆9天自驾地图导览：7月25日出发，8月2日返回。伊宁机场取车，乌鲁木齐机场还车。',
    mapAriaLabel: '伊宁到乌鲁木齐9天自驾高德地图',
    currentLabel: '当前日程',
    summaryPills: [
      { value: '9天', label: '伊犁精华 + 独库北段' },
      { value: '异地', label: '伊宁取车 / 乌鲁木齐还车' },
      { value: '7/25', label: '周六出发，周日返沪' }
    ]
  },
  globalNotes: [
    { title: '伊昭公路', text: '按规划建议：9:00-21:00 开放，夜间禁行，务必白天通过。' },
    { title: '独库北段', text: '预约与天气管控频繁，D8 出发前再看新疆交警/路网消息。' },
    { title: '那拉提', text: '自驾票提前预约；抢不到就改区间车，不建议重排全线。' },
    { title: '自驾原则', text: '不夜驾、不弯道停车、每日满油/满电、离线地图提前下载。' }
  ],
  days: [
      {
        day: 'D1',
        date: '7/25 周六',
        title: '上海飞伊宁，轻量适应',
        route: ['上海', '伊宁机场', '六星街/喀赞其'],
        stay: '伊宁',
        pace: '落地适应，不长途开车',
        highlight: '六星街、喀赞其街区',
        drive: '取车验车，熟悉车况',
        point: { x: 142, y: 323, name: '伊宁', lon: 81.3179, lat: 43.9219 },
        segment: 0,
        tips: ['落地后先补给、办电话流量、下载离线地图。', '晚间只安排城市漫步，避免第一天疲劳驾驶。'],
        warning: '取车时重点看轮胎、备胎、玻璃、底盘剐蹭和异地还车费。'
      },
      {
        day: 'D2',
        date: '7/26',
        title: '赛里木湖环湖与果子沟',
        route: ['伊宁', '赛里木湖', '果子沟大桥', '清水河/霍城'],
        stay: '清水河或赛湖附近',
        pace: '半天以上给赛湖',
        highlight: '蓝湖、草坡、雪山层次',
        drive: '环湖慢行，留足拍照时间',
        point: { x: 225, y: 218, name: '赛里木湖', lon: 81.183, lat: 44.594 },
        segment: 1,
        tips: ['赛湖适合把节奏放慢，晴天优先安排湖边停留。', '果子沟大桥适合作为返程方向的观景节点。'],
        warning: '景区和观景台停车要看现场管理，不要在弯道、桥梁和应急车道停车。'
      },
      {
        day: 'D3',
        date: '7/27',
        title: '伊昭公路进昭苏',
        route: ['清水河/霍城', '伊昭公路', '昭苏'],
        stay: '昭苏或夏塔乡',
        pace: '白天通过山路',
        highlight: '达坂、草原、雪山公路',
        drive: '上山前加满油',
        point: { x: 304, y: 255, name: '昭苏', lon: 81.1307, lat: 43.1573 },
        segment: 2,
        tips: ['伊昭路美但弯多，上午出发更从容。', '到昭苏后不要再追加远距离支线。'],
        warning: '规划建议中伊昭公路为 9:00-21:00 开放、夜间禁行；遇封路改走可用国道，不硬等硬闯。'
      },
      {
        day: 'D4',
        date: '7/28',
        title: '夏塔深度游后到特克斯',
        route: ['夏塔景区', '特克斯'],
        stay: '特克斯',
        pace: '景区半天到一天',
        highlight: '雪山、森林、草甸',
        drive: '傍晚短途转场',
        point: { x: 452, y: 356, name: '夏塔/特克斯', lon: 81.8357, lat: 43.2172 },
        segment: 3,
        tips: ['D4 尽量早进夏塔，旺季提前买票。', '体力允许可把主要时间留给景区内部徒步和观景。'],
        warning: '夏塔天气变化快，带薄外套、雨具和饮水；晚间去特克斯不赶夜路。'
      },
      {
        day: 'D5',
        date: '7/29',
        title: '喀拉峻或琼库什台二选一',
        route: ['特克斯', '喀拉峻/阔克苏', '或琼库什台'],
        stay: '特克斯或琼库什台',
        pace: '二选一，不贪多',
        highlight: '草原峡谷或村落徒步感',
        drive: '琼库什台路更慢',
        point: { x: 608, y: 421, name: '特克斯周边', lon: 82.04, lat: 43.05 },
        segment: 4,
        tips: ['想省心选喀拉峻/阔克苏，景区组织更成熟。', '想村落和徒步感选琼库什台，但要接受慢路和住宿不确定性。'],
        warning: '底盘太低的小车不建议去琼库什台；当天不要同时塞两个方向。'
      },
      {
        day: 'D6',
        date: '7/30',
        title: '草原过渡到那拉提',
        route: ['特克斯', '恰西/库尔德宁', '那拉提'],
        stay: '那拉提镇',
        pace: '过渡日，别排太满',
        highlight: '森林草原与河谷变化',
        drive: '中长距离转场',
        point: { x: 765, y: 344, name: '那拉提', lon: 83.259, lat: 43.355 },
        segment: 5,
        tips: ['恰西和库尔德宁根据天气、路况、体力选一个。', '尽量在天黑前到那拉提镇，给 D7 留体力。'],
        warning: '这天最容易因为临时加点导致疲劳，下午开始要主动收节奏。'
      },
      {
        day: 'D7',
        date: '7/31',
        title: '那拉提空中草原与盘龙谷道',
        route: ['那拉提景区', '空中草原', '盘龙谷道'],
        stay: '那拉提或新源',
        pace: '整天给景区',
        highlight: '草原、森林、河谷公路',
        drive: '自驾票或区间车',
        point: { x: 765, y: 344, name: '那拉提', lon: 83.259, lat: 43.355 },
        segment: 5,
        tips: ['提前 7 天关注那拉提自驾票；抢不到就用门票+区间车。', '空中草原和盘龙谷道不要都用赶场心态玩。'],
        warning: '那拉提自驾票对车辆和司机条件有要求；预约失败不值得推翻整个行程。'
      },
      {
        day: 'D8',
        date: '8/1',
        title: '独库北段到独山子/奎屯',
        route: ['那拉提', '独库北段', '乔尔玛', '独山子/奎屯'],
        stay: '独山子或奎屯',
        pace: '风景密集，山路为主',
        highlight: '独库北段、乔尔玛',
        drive: '不夜驾，查预约和路况',
        point: { x: 883, y: 464, name: '独山子/奎屯', lon: 84.885, lat: 44.326 },
        segment: 6,
        tips: ['清晨看路况再出发，遇天气管控及时改方案。', '这天拍照点很多，但山路不要随意停车。'],
        warning: '独库公路通行受天气、施工、预约影响很大；宁可绕行，也不要赶夜路。'
      },
      {
        day: 'D9',
        date: '8/2 周日',
        title: '还车返沪',
        route: ['独山子/奎屯', '乌鲁木齐机场', '上海'],
        stay: '返程',
        pace: '留足高速和还车余量',
        highlight: '收尾补给与返程',
        drive: '建议下午或晚班机',
        point: { x: 880, y: 546, name: '乌鲁木齐机场', lon: 87.474, lat: 43.907 },
        segment: 7,
        tips: ['回程航班尽量订下午或晚上。', '还车前整理票据、检查油量和违章押金规则。'],
        warning: '不要把机场还车时间压到极限；高速、加油、洗车和柜台排队都要留余量。'
      }
    ],
  pinPoints: [
      { key: 0, label: 'D1', name: '伊宁', position: [81.3179, 43.9219] },
      { key: 1, label: 'D2', name: '赛里木湖', position: [81.183, 44.594] },
      { key: 2, label: 'D3', name: '昭苏', position: [81.1307, 43.1573] },
      { key: 3, label: 'D4', name: '夏塔/特克斯', position: [81.8357, 43.2172] },
      { key: 4, label: 'D5', name: '特克斯周边', position: [82.04, 43.05] },
      { key: 5, label: 'D6-D7', name: '那拉提', position: [83.259, 43.355] },
      { key: 7, label: 'D8', name: '独山子', position: [84.885, 44.326] },
      { key: 8, label: 'D9', name: '乌鲁木齐机场', position: [87.474, 43.907] }
    ],
  routePath: [
      [81.3179, 43.9219],
      [81.183, 44.594],
      [80.878, 44.053],
      [81.1307, 43.1573],
      [81.149, 42.81],
      [81.8357, 43.2172],
      [82.04, 43.05],
      [83.259, 43.355],
      [84.106, 43.986],
      [84.885, 44.326],
      [87.474, 43.907]
    ],
  routeSegments: {
      1: [[81.3179, 43.9219], [81.183, 44.594], [80.878, 44.053]],
      2: [[80.878, 44.053], [81.1307, 43.1573]],
      3: [[81.1307, 43.1573], [81.149, 42.81], [81.8357, 43.2172]],
      4: [[81.8357, 43.2172], [82.04, 43.05]],
      5: [[82.04, 43.05], [83.259, 43.355]],
      6: [[83.259, 43.355], [84.106, 43.986], [84.885, 44.326]],
      7: [[84.885, 44.326], [87.474, 43.907]]
    },
  dailyRoutes: {
      0: {
        distance: '城市内短途',
        duration: '约30-60分钟',
        points: [
          { name: '伊宁机场', position: [81.330, 43.955] },
          { name: '酒店/取车点', position: [81.3179, 43.9219] },
          { name: '六星街', position: [81.308, 43.918] },
          { name: '喀赞其', position: [81.322, 43.904] }
        ],
        legs: [
          { from: '伊宁机场', to: '酒店/取车点', meta: '约10-20km / 20-35分钟', note: '落地先验车、补给、确认异地还车和保险。' },
          { from: '酒店/取车点', to: '六星街/喀赞其', meta: '城市短途 / 机动安排', note: '只做轻量城市漫步，不安排长途驾驶。' }
        ]
      },
      1: {
        distance: '约180-230km',
        duration: '约4-5.5小时含游览',
        points: [
          { name: '伊宁', position: [81.3179, 43.9219] },
          { name: '霍城', position: [80.878, 44.053] },
          { name: '赛湖东门', position: [81.000, 44.500] },
          { name: '赛里木湖环湖', position: [81.183, 44.594] },
          { name: '果子沟大桥', position: [80.920, 44.330] },
          { name: '清水河', position: [80.780, 44.160] }
        ],
        legs: [
          { from: '伊宁', to: '霍城', meta: '约70km / 1-1.5小时', note: '高速/国道为主，作为进入赛湖前的补给节点。' },
          { from: '霍城', to: '赛里木湖环湖', meta: '约90km / 1.5-2小时', note: '进入景区后放慢节奏，按天气决定环湖停留点。' },
          { from: '赛里木湖', to: '果子沟大桥/清水河', meta: '约40-70km / 1-1.5小时', note: '离开景区后看天色决定住清水河或赛湖附近。' }
        ]
      },
      2: {
        distance: '约210-260km',
        duration: '约5-7小时',
        points: [
          { name: '清水河', position: [80.780, 44.160] },
          { name: '霍城', position: [80.878, 44.053] },
          { name: '察布查尔', position: [81.150, 43.830] },
          { name: '伊昭公路北口', position: [81.020, 43.610] },
          { name: '白石峰/达坂', position: [81.030, 43.390] },
          { name: '昭苏', position: [81.1307, 43.1573] }
        ],
        legs: [
          { from: '清水河', to: '察布查尔', meta: '约90-120km / 2小时左右', note: '先完成平原段转场，进山前加油补水。' },
          { from: '察布查尔', to: '伊昭公路达坂', meta: '山路慢行 / 2-3小时', note: '弯多、海拔变化快，遇雾雨主动降速。' },
          { from: '达坂', to: '昭苏', meta: '约60-80km / 1.5-2小时', note: '务必白天通过，抵达后不要再追加远线。' }
        ]
      },
      3: {
        distance: '约150-210km',
        duration: '约4-6小时含景区转场',
        points: [
          { name: '昭苏', position: [81.1307, 43.1573] },
          { name: '夏塔乡', position: [80.810, 42.830] },
          { name: '夏塔景区', position: [81.149, 42.810] },
          { name: '昭苏回程节点', position: [81.1307, 43.1573] },
          { name: '特克斯', position: [81.8357, 43.2172] }
        ],
        legs: [
          { from: '昭苏', to: '夏塔景区', meta: '约70-90km / 1.5-2小时', note: '尽量早进景区，把好天气留给雪山和草甸。' },
          { from: '夏塔景区', to: '特克斯', meta: '约130-160km / 2.5-3.5小时', note: '傍晚转场，避免游玩过久导致夜路。' }
        ]
      },
      4: {
        distance: '约80-170km',
        duration: '约3-6小时，取决于二选一方向',
        points: [
          { name: '特克斯', position: [81.8357, 43.2172] },
          { name: '喀拉峻游客中心', position: [82.160, 43.020] },
          { name: '阔克苏峡谷', position: [82.330, 43.110] },
          { name: '琼库什台岔路', position: [82.000, 43.000] },
          { name: '琼库什台', position: [82.090, 42.900] },
          { name: '特克斯', position: [81.8357, 43.2172] }
        ],
        legs: [
          { from: '特克斯', to: '喀拉峻/阔克苏', meta: '约40-80km / 1-2小时', note: '省心路线，景区组织成熟，适合当日往返。' },
          { from: '特克斯', to: '琼库什台', meta: '约90km+ / 2.5-4小时', note: '村落徒步感更强，但路窄慢行，对车型和天气更敏感。' }
        ]
      },
      5: {
        distance: '约230-310km',
        duration: '约5-7小时',
        points: [
          { name: '特克斯', position: [81.8357, 43.2172] },
          { name: '巩留', position: [82.230, 43.480] },
          { name: '恰西', position: [82.600, 43.280] },
          { name: '库尔德宁', position: [82.900, 43.370] },
          { name: '新源', position: [83.260, 43.430] },
          { name: '那拉提镇', position: [83.259, 43.355] }
        ],
        legs: [
          { from: '特克斯', to: '巩留/恰西', meta: '约110-150km / 2.5-3.5小时', note: '看天气选择恰西或库尔德宁，不建议两个都深玩。' },
          { from: '恰西/库尔德宁', to: '新源', meta: '约80-120km / 2小时左右', note: '草原过渡日，下午开始主动收节奏。' },
          { from: '新源', to: '那拉提镇', meta: '约60km / 1小时左右', note: '天黑前抵达，为 D7 景区日留体力。' }
        ]
      },
      6: {
        distance: '景区内部环线',
        duration: '半天到一天',
        points: [
          { name: '那拉提镇', position: [83.259, 43.355] },
          { name: '游客中心', position: [83.275, 43.350] },
          { name: '空中草原', position: [83.400, 43.280] },
          { name: '盘龙谷道', position: [83.500, 43.250] },
          { name: '那拉提镇', position: [83.259, 43.355] }
        ],
        legs: [
          { from: '游客中心', to: '空中草原', meta: '景区道路 / 区间车或自驾票', note: '抢到自驾票体验更自由，否则按区间车节奏走。' },
          { from: '空中草原', to: '盘龙谷道', meta: '景区内部慢游', note: '把光线和体力留给核心观景段，不赶景点数量。' }
        ]
      },
      7: {
        distance: '约280-340km',
        duration: '约7-9小时',
        points: [
          { name: '那拉提', position: [83.259, 43.355] },
          { name: '独库北段入口', position: [83.620, 43.680] },
          { name: '乔尔玛', position: [84.106, 43.986] },
          { name: '哈希勒根达坂', position: [84.350, 44.090] },
          { name: '独山子大峡谷方向', position: [84.780, 44.250] },
          { name: '独山子/奎屯', position: [84.885, 44.326] }
        ],
        legs: [
          { from: '那拉提', to: '乔尔玛', meta: '约110-150km / 3-4小时', note: '山路密集，出发前看独库预约、天气和施工信息。' },
          { from: '乔尔玛', to: '哈希勒根达坂', meta: '约60-90km / 2小时左右', note: '独库精华路段，严禁弯道停车拍照。' },
          { from: '达坂', to: '独山子/奎屯', meta: '约100km+ / 2.5-3.5小时', note: '下山后仍要留精力，不把住宿压到深夜。' }
        ]
      },
      8: {
        distance: '约250-290km',
        duration: '约3.5-5小时',
        points: [
          { name: '独山子/奎屯', position: [84.885, 44.326] },
          { name: '奎屯', position: [84.900, 44.430] },
          { name: '石河子', position: [86.080, 44.300] },
          { name: '昌吉', position: [87.310, 44.020] },
          { name: '乌鲁木齐机场', position: [87.474, 43.907] }
        ],
        legs: [
          { from: '独山子/奎屯', to: '石河子', meta: '约120-150km / 1.5-2小时', note: '高速为主，按返程航班倒推出发时间。' },
          { from: '石河子', to: '乌鲁木齐机场', meta: '约130-150km / 2-3小时', note: '预留加油、洗车、还车验车和柜台排队时间。' }
        ]
      }
    },
  scenicWaypointDetails: {
      '六星街': {
        type: '城市街区',
        time: '建议 1-2 小时',
        photoLabel: '彩色街巷 / 伊宁慢生活',
        photoTone: 'linear-gradient(135deg, #7c2d12, #c026d3 48%, #ef4444)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/%E4%B8%AD%E5%9B%BD%E6%96%B0%E7%96%86%E4%BC%8A%E5%AE%81%E5%B8%82_China_Xinjiang%2C_Yining_City%2C_China_Xinjiang_Urumq_-_panoramio.jpg/1920px-%E4%B8%AD%E5%9B%BD%E6%96%B0%E7%96%86%E4%BC%8A%E5%AE%81%E5%B8%82_China_Xinjiang%2C_Yining_City%2C_China_Xinjiang_Urumq_-_panoramio.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E5%9B%BD%E6%96%B0%E7%96%86%E4%BC%8A%E5%AE%81%E5%B8%82_China_Xinjiang,_Yining_City,_China_Xinjiang_Urumq_-_panoramio.jpg',
        intro: '伊宁很适合落地第一晚慢慢适应，六星街以彩色街巷、咖啡小店和本地生活气息为主，适合轻量步行。',
        points: ['傍晚光线更柔和，适合随走随拍。', '不要把第一天排成赶场，保留体力给后续长线。']
      },
      '喀赞其': {
        type: '民俗街区',
        time: '建议 1-2 小时',
        photoLabel: '蓝墙院落 / 老城街巷',
        photoTone: 'linear-gradient(135deg, #1d4ed8, #38bdf8 45%, #f8fafc)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Along_the_Ili_River%2C_Yining%2C_Xinjiang_2020-10-03.jpg/1920px-Along_the_Ili_River%2C_Yining%2C_Xinjiang_2020-10-03.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Along_the_Ili_River,_Yining,_Xinjiang_2020-10-03.jpg',
        intro: '喀赞其更偏生活化街区，蓝色院墙、老城小巷和当地小吃适合放慢节奏体验。',
        points: ['尊重居民生活，不进入私人院落。', '适合和六星街合并成落地后的城市漫步。']
      },
      '赛里木湖环湖': {
        type: '湖泊景区',
        time: '建议半天以上',
        photoLabel: '蓝湖 / 草坡 / 雪山',
        photoTone: 'linear-gradient(135deg, #0369a1, #38bdf8 42%, #bef264)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Sayram_Lake_scenery.jpg/1920px-Sayram_Lake_scenery.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Sayram_Lake_scenery.jpg',
        intro: '赛里木湖是这条线最适合放慢节奏的湖泊段，晴天时湖色、草坡和远山层次很明显。',
        points: ['优先把晴天和好光线留给环湖。', '停车以景区管理点为准，不在弯道和应急区域停车。']
      },
      '果子沟大桥': {
        type: '公路观景',
        time: '建议 20-40 分钟',
        photoLabel: '山谷桥梁 / 公路视角',
        photoTone: 'linear-gradient(135deg, #475569, #be123c 46%, #bae6fd)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Guozigou_Bridge.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Guozigou_Bridge.jpg',
        intro: '果子沟大桥适合作为赛湖离开方向的观景节点，重点看峡谷和桥梁空间感。',
        points: ['按现场停车和观景点管理停留。', '天气差或天色晚时不要强行加长停留。']
      },
      '白石峰/达坂': {
        type: '山路达坂',
        time: '路过观景',
        photoLabel: '达坂 / 雪峰 / 山路',
        photoTone: 'linear-gradient(135deg, #64748b, #e2e8f0 48%, #7c3aed)',
        spotDetailImage: 'https://e0.ifengimg.com/01/2019/0730/E5362AF56BBCB3840D282344FA60E3F06CD0EE08_size103_w750_h501.jpeg',
        spotDetailImageSource: 'https://ishare.ifeng.com/c/s/7ojKwLlarF1',
        intro: '伊昭公路的高海拔山路节点，景色好但路况和天气变化快，适合短暂停留不久耗。',
        points: ['雾雨天气主动降速。', '严禁弯道、窄路和非停车区拍照。']
      },
      '夏塔景区': {
        type: '雪山徒步',
        time: '建议半天到一天',
        photoLabel: '雪山 / 森林 / 草甸',
        photoTone: 'linear-gradient(135deg, #166534, #86efac 42%, #f8fafc)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Xinjiang_Xiate_Glacier_%28HDR%29_%287067222313%29.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Xinjiang_Xiate_Glacier_(HDR)_(7067222313).jpg',
        intro: '夏塔适合把时间留给景区内部，雪山、森林和草甸层次丰富，天气变化也更明显。',
        points: ['旺季尽量早进景区并提前购票。', '带薄外套、雨具、饮水，按体力控制徒步距离。']
      },
      '喀拉峻游客中心': {
        type: '草原景区',
        time: '建议半天',
        photoLabel: '草原台地 / 阔景',
        photoTone: 'linear-gradient(135deg, #15803d, #a3e635 48%, #38bdf8)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Kalajun_Grassland.jpg/1920px-Kalajun_Grassland.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Kalajun_Grassland.jpg',
        intro: '喀拉峻更成熟省心，适合想稳定获得草原和峡谷景观的人，当日往返节奏更可控。',
        points: ['适合和阔克苏峡谷搭配。', '若想轻松，当天优先选这条而不是琼库什台。']
      },
      '阔克苏峡谷': {
        type: '峡谷景观',
        time: '建议 2-3 小时',
        photoLabel: '峡谷 / 河湾 / 草坡',
        photoTone: 'linear-gradient(135deg, #065f46, #2563eb 42%, #facc15)',
        spotDetailImage: 'https://k.sinaimg.cn/n/sinakd20220806ac/600/w1920h1080/20220806/7782-e020a58e7b8573822d2cd07713656dca.jpg/w700d1q75cms.jpg',
        spotDetailImageSource: 'https://k.sina.cn/article_1464920000_5750e7c0001014iim.html',
        intro: '阔克苏峡谷是喀拉峻方向的重点景观，适合看峡谷、河湾和草原过渡。',
        points: ['与喀拉峻同日安排更顺。', '注意景区交通组织和末班车时间。']
      },
      '琼库什台': {
        type: '村落徒步',
        time: '建议半天以上',
        photoLabel: '木屋村落 / 山谷徒步',
        photoTone: 'linear-gradient(135deg, #78350f, #c026d3 38%, #2563eb)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Kalajun_Grassland.jpg/1920px-Kalajun_Grassland.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Kalajun_Grassland.jpg',
        intro: '琼库什台村落感和徒步感更强，但道路更慢，对天气、车型和住宿确定性要求更高。',
        points: ['不建议和喀拉峻同日深玩。', '底盘低或天气差时谨慎选择。']
      },
      '恰西': {
        type: '森林草原',
        time: '建议 2-4 小时',
        photoLabel: '森林 / 草甸 / 河谷',
        photoTone: 'linear-gradient(135deg, #14532d, #4ade80 44%, #0ea5e9)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Nalati_Grassland_3.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Nalati_Grassland_3.jpg',
        intro: '恰西适合作为特克斯到那拉提之间的风景缓冲点，森林草原和河谷感更明显。',
        points: ['与库尔德宁二选一更稳。', '下午开始收节奏，避免夜间抵达那拉提。']
      },
      '库尔德宁': {
        type: '云杉河谷',
        time: '建议 2-4 小时',
        photoLabel: '云杉 / 河谷 / 草坡',
        photoTone: 'linear-gradient(135deg, #064e3b, #2dd4bf 44%, #bae6fd)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Nalati_Grassland_1.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Nalati_Grassland_1.jpg',
        intro: '库尔德宁偏云杉河谷风格，适合想看森林层次和更安静草原景观的过渡日。',
        points: ['和恰西按天气与路况二选一。', '别为了两个都去牺牲抵达那拉提的时间。']
      },
      '那拉提镇': {
        type: '草原基地',
        time: '住宿/补给节点',
        photoLabel: '草原门户 / 小镇补给',
        photoTone: 'linear-gradient(135deg, #166534, #4f46e5 44%, #38bdf8)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Nalati_Grassland_4%2C_Xinjiang%2C_China.jpg/1920px-Nalati_Grassland_4%2C_Xinjiang%2C_China.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Nalati_Grassland_4,_Xinjiang,_China.jpg',
        intro: '那拉提镇是进入那拉提景区前后的住宿和补给节点，适合为 D7 景区日蓄力。',
        points: ['提前确认住宿、门票和自驾票。', '抵达后不再追加远距离支线。']
      },
      '空中草原': {
        type: '核心草原',
        time: '建议半天',
        photoLabel: '高山草原 / 河谷视野',
        photoTone: 'linear-gradient(135deg, #15803d, #bef264 46%, #0ea5e9)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Nalati_Grassland_1.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Nalati_Grassland_1.jpg',
        intro: '空中草原是那拉提的核心体验之一，视野开阔，适合把好光线和体力留在这里。',
        points: ['抢不到自驾票就按区间车节奏走。', '不要用赶场心态压缩核心观景时间。']
      },
      '盘龙谷道': {
        type: '景区道路',
        time: '建议 1-2 小时',
        photoLabel: '谷道 / 森林 / 草坡',
        photoTone: 'linear-gradient(135deg, #365314, #65a30d 45%, #facc15)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/XM_-_Duku_Roads_-_Great_Bends.jpg/1920px-XM_-_Duku_Roads_-_Great_Bends.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:XM_-_Duku_Roads_-_Great_Bends.jpg',
        intro: '盘龙谷道偏道路体验和谷地景观，适合与空中草原组合，但不建议两边都赶。',
        points: ['看现场交通组织选择自驾或区间车。', '留意天气和景区末班时间。']
      },
      '乔尔玛': {
        type: '独库节点',
        time: '补给/纪念节点',
        photoLabel: '独库中段 / 山谷节点',
        photoTone: 'linear-gradient(135deg, #334155, #94a3b8 42%, #7c3aed)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/XM_-_Duku_Roads_-_View_above_the_Grassy_Valley.jpg/1920px-XM_-_Duku_Roads_-_View_above_the_Grassy_Valley.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:XM_-_Duku_Roads_-_View_above_the_Grassy_Valley.jpg',
        intro: '乔尔玛是独库北段重要节点，适合短暂停留、补给和了解独库公路背景。',
        points: ['山路日不要停留过久。', '当天优先保证安全通过独库北段。']
      },
      '哈希勒根达坂': {
        type: '高山达坂',
        time: '路过观景',
        photoLabel: '达坂 / 冰雪 / 山路',
        photoTone: 'linear-gradient(135deg, #475569, #cbd5e1 44%, #38bdf8)',
        spotDetailImage: 'https://e0.ifengimg.com/01/2019/0730/E5362AF56BBCB3840D282344FA60E3F06CD0EE08_size103_w750_h501.jpeg',
        spotDetailImageSource: 'https://ishare.ifeng.com/c/s/7ojKwLlarF1',
        intro: '独库北段高山达坂景观强，但天气、施工和交通管控都可能影响通行。',
        points: ['出发前再次查看路况和管控。', '只在允许停车的位置短暂停留。']
      }
    }
};
window.TRAVEL_GUIDES = {
  ...(window.TRAVEL_GUIDES || {}),
  xinjiang: window.TRAVEL_GUIDE_DATA
};
