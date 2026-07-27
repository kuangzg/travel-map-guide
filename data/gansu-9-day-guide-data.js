window.TRAVEL_GUIDES = {
  ...(window.TRAVEL_GUIDES || {}),
  gansu: {
    meta: {
      documentTitle: '甘肃大环线9日自驾地图导览',
      title: '甘肃大环线9日自驾地图导览',
      subtitle: '8月1日周六上海飞西宁、当地取还车，串联青海湖、茶卡、大柴旦、敦煌、嘉峪关、张掖与祁连草原。',
      ariaLabel: '甘肃大环线9日自驾地图导览：上海飞西宁，当地租车，青甘大环线后从西宁飞回上海。',
      mapAriaLabel: '青海与甘肃9日自驾大环线高德地图',
      currentLabel: '当前日程',
      summaryPills: [
        { value: '9天', label: '8月1日周六出发，8月9日周日返沪' },
        { value: '环线', label: '西宁取车 / 西宁还车' },
        { value: '约2400km', label: '青海湖 + 河西走廊 + 祁连山' }
      ]
    },
    globalNotes: [
      { title: '莫高窟预约', text: '确定航班后优先锁定D5莫高窟场次，只从莫高窟参观预约网或官方小程序购票。' },
      { title: '高原适应', text: '前两天逐步升高，避免饮酒、熬夜和剧烈活动；明显头痛、胸闷时及时下撤或就医。' },
      { title: '长途驾驶', text: '全程约2400km，D3和D8路程较长；两人轮换驾驶，不夜驾，不在国道弯道和无停车带路段拍照。' },
      { title: '天气与路况', text: '青海湖、祁连山昼夜温差大，出发前逐日核对G227、G3011及景区公告，遇强降雨或道路管制改走高速。' }
    ],
    days: [
      {
        day: 'D1',
        date: '8/1 周六',
        title: '上海飞西宁，取车适应',
        route: ['上海', '西宁机场', '西宁市区'],
        stay: '西宁市区',
        pace: '飞行 + 取车 + 高原适应',
        highlight: '青海初印象与当地晚餐',
        drive: '验车、补给，不安排远途',
        point: { name: '西宁', lon: 101.778, lat: 36.617 },
        segment: 0,
        tips: ['尽量选择周六早班直飞，落地后在机场取车并完整拍摄车况。', '下午只安排市区散步和补给，晚上早点休息，为第二天青海湖路段留体力。'],
        warning: '西宁海拔约2200m，首日不建议饮酒、跑步或临时追加高强度景点。'
      },
      {
        day: 'D2',
        date: '8/2 周日',
        title: '日月山穿越到青海湖与茶卡',
        route: ['西宁', '日月山', '青海湖', '茶卡镇'],
        stay: '茶卡镇',
        pace: '湖区观景 + 中长距离转场',
        highlight: '青海湖、日月山、草原公路',
        drive: '早出发，湖边只在正规停车区停靠',
        point: { name: '青海湖', lon: 100.229, lat: 36.583 },
        segment: 1,
        tips: ['上午经日月山到青海湖二郎剑，下午沿湖西行后前往茶卡镇。', '不追求把所有湖边点位走完，天气好就多留青海湖，晚饭前抵达茶卡。'],
        warning: '湖边风大紫外线强，禁止随意驶入牧场或在公路边急停拍照。'
      },
      {
        day: 'D3',
        date: '8/3 周一',
        title: '茶卡盐湖经德令哈到大柴旦',
        route: ['茶卡', '茶卡盐湖', '德令哈', '大柴旦'],
        stay: '大柴旦镇',
        pace: '晨间盐湖 + 当日最长转场',
        highlight: '天空之镜、柴达木盆地',
        drive: '约450km，控制停留点数量',
        point: { name: '茶卡盐湖', lon: 99.075, lat: 36.699 },
        segment: 2,
        tips: ['茶卡盐湖尽量赶早入园，离开后经德令哈直奔大柴旦。', '午后路段景观开阔但容易疲劳，至少每2小时进入服务区休息。'],
        warning: '当天里程长、补给间距大，出发前加满油并备足饮水；不要驶入无人区非铺装支路。'
      },
      {
        day: 'D4',
        date: '8/4 周二',
        title: '翡翠湖翻越当金山到敦煌',
        route: ['大柴旦', '翡翠湖', '当金山', '敦煌'],
        stay: '敦煌市区',
        pace: '盐湖观景 + 山口转场',
        highlight: '翡翠湖、戈壁、当金山',
        drive: '午前离开大柴旦，日落前到敦煌',
        point: { name: '大柴旦翡翠湖', lon: 95.191, lat: 37.759 },
        segment: 3,
        tips: ['上午游翡翠湖，午前开始向敦煌转场，不额外绕行黑独山。', '翻越当金山后在阿克塞短休，抵达敦煌先入住，再看体力安排夜市。'],
        warning: '租赁车辆不要进入黑独山等无正规道路区域；戈壁横风、牲畜和疲劳驾驶都需要警惕。'
      },
      {
        day: 'D5',
        date: '8/5 周三',
        title: '莫高窟与鸣沙山月牙泉',
        route: ['敦煌', '莫高窟', '鸣沙山月牙泉', '沙州夜市'],
        stay: '敦煌市区',
        pace: '整天留给敦煌核心景点',
        highlight: '石窟艺术、沙山日落',
        drive: '市区短途，按预约场次行动',
        point: { name: '莫高窟', lon: 94.805, lat: 40.039 },
        segment: 4,
        tips: ['上午或中午按已预约场次参观莫高窟，行程围绕票面时间安排。', '鸣沙山放到下午较晚时段，避开正午暴晒；体力不足就不爬高沙脊。'],
        warning: '莫高窟实名预约且旺季紧张，勿从非官方渠道购买加价票；洞窟内遵守拍摄规定。'
      },
      {
        day: 'D6',
        date: '8/6 周四',
        title: '敦煌经瓜州到嘉峪关',
        route: ['敦煌', '瓜州', '大地之子', '嘉峪关'],
        stay: '嘉峪关市区',
        pace: '河西走廊转场日',
        highlight: '戈壁公路、瓜州雕塑群',
        drive: '高速为主，景点顺路短停',
        point: { name: '嘉峪关', lon: 98.290, lat: 39.773 },
        segment: 5,
        tips: ['上午离开敦煌，经瓜州服务区和大地之子短停后继续东行。', '下午抵达嘉峪关后休整，关城主体安排到第二天上午，避免赶闭园。'],
        warning: '河西走廊横风较多，大车并行时握稳方向，不在高速应急车道停车拍照。'
      },
      {
        day: 'D7',
        date: '8/7 周五',
        title: '嘉峪关关城到张掖丹霞',
        route: ['嘉峪关', '嘉峪关关城', '张掖七彩丹霞', '张掖'],
        stay: '张掖市区或丹霞景区旁',
        pace: '长城人文 + 丹霞日落',
        highlight: '天下第一雄关、七彩丘陵',
        drive: '下午向张掖转场',
        point: { name: '张掖七彩丹霞', lon: 100.068, lat: 38.973 },
        segment: 6,
        tips: ['上午参观嘉峪关关城，中午前后开往张掖。', '七彩丹霞尽量选下午场，光线和地貌层次更好；入住点提前考虑第二天G227方向。'],
        warning: '景区内部按观光车线路游览，不跨越护栏；大风或雷雨时服从现场调整。'
      },
      {
        day: 'D8',
        date: '8/8 周六',
        title: '穿越祁连草原回西宁',
        route: ['张掖', '扁都口', '祁连草原', '门源', '西宁'],
        stay: '西宁市区',
        pace: '景观公路 + 长距离收环',
        highlight: 'G227、祁连山、门源草原',
        drive: '早出发，天黑前回西宁',
        point: { name: '祁连草原', lon: 100.933, lat: 38.206 },
        segment: 7,
        tips: ['早上离开张掖，经扁都口、祁连草原和门源回西宁，只在正规观景区短停。', '若G227受天气或施工影响，立即按高德与交警提示改走高速，不强行穿越。'],
        warning: '当天海拔起伏和弯道较多，是全程第二个高负荷驾驶日；不要把张掖景点留到上午再出发。'
      },
      {
        day: 'D9',
        date: '8/9 周日',
        title: '西宁还车，晚班机返上海',
        route: ['西宁', '加油洗车', '西宁机场', '上海'],
        stay: '返程',
        pace: '机动半日 + 还车返程',
        highlight: '从容收尾，不再赶远景点',
        drive: '预留还车与值机时间',
        point: { name: '西宁曹家堡机场', lon: 102.044, lat: 36.527 },
        segment: 8,
        tips: ['优先选择周日下午或晚间返沪航班，上午留作休息、补购和整理行李。', '按租车合同补油、洗车、拍摄还车车况，至少提前3小时抵达机场还车点。'],
        warning: '返程日不再安排塔尔寺、青海湖等远点，避免路况或排队影响航班。'
      }
    ],
    pinPoints: [
      { key: 0, label: 'D1', name: '西宁', position: [101.778, 36.617] },
      { key: 1, label: 'D2', name: '青海湖', position: [100.229, 36.583] },
      { key: 2, label: 'D3', name: '茶卡盐湖', position: [99.075, 36.699] },
      { key: 3, label: 'D4', name: '大柴旦', position: [95.365, 37.853] },
      { key: 4, label: 'D5', name: '敦煌', position: [94.661, 40.142] },
      { key: 5, label: 'D6', name: '嘉峪关', position: [98.290, 39.773] },
      { key: 6, label: 'D7', name: '张掖', position: [100.449, 38.925] },
      { key: 7, label: 'D8', name: '祁连草原', position: [100.933, 38.206] },
      { key: 8, label: 'D9', name: '西宁机场', position: [102.044, 36.527] }
    ],
    routePath: [
      [102.044, 36.527],
      [101.778, 36.617],
      [100.229, 36.583],
      [99.075, 36.699],
      [95.365, 37.853],
      [94.661, 40.142],
      [98.290, 39.773],
      [100.449, 38.925],
      [100.933, 38.206],
      [101.778, 36.617],
      [102.044, 36.527]
    ],
    routeSegments: {
      1: [[101.778, 36.617], [100.982, 36.437], [100.229, 36.583], [99.785, 36.728], [99.080, 36.782]],
      2: [[99.080, 36.782], [99.075, 36.699], [97.361, 37.369], [95.365, 37.853]],
      3: [[95.365, 37.853], [95.191, 37.759], [94.340, 39.633], [94.661, 40.142]],
      4: [[94.661, 40.142], [94.805, 40.039], [94.675, 40.089], [94.661, 40.142]],
      5: [[94.661, 40.142], [95.620, 40.514], [98.290, 39.773]],
      6: [[98.290, 39.773], [98.217, 39.802], [100.068, 38.973], [100.449, 38.925]],
      7: [[100.449, 38.925], [100.947, 38.264], [100.933, 38.206], [101.407, 37.717], [101.778, 36.617]],
      8: [[101.778, 36.617], [102.044, 36.527]]
    },
    dailyRoutes: {
      0: {
        distance: '约35-45km',
        duration: '约1-1.5小时含取车',
        points: [
          { name: '西宁曹家堡机场', position: [102.044, 36.527] },
          { name: '机场取车点', position: [102.044, 36.527] },
          { name: '西宁市区酒店', position: [101.778, 36.617] },
          { name: '新千夜市', position: [101.799, 36.609] }
        ],
        legs: [
          { from: '西宁机场', to: '取车点', meta: '机场内办理 / 约30-60分钟', note: '核对保险、轮胎、备胎和高原长途限制，拍全车视频。' },
          { from: '机场', to: '西宁市区', meta: '约30km / 40-60分钟', note: '入住后只做补给和轻量散步，不追加远途景点。' }
        ]
      },
      1: {
        distance: '约320-360km',
        duration: '约7-9小时含游览',
        points: [
          { name: '西宁', position: [101.778, 36.617] },
          { name: '日月山', position: [100.982, 36.437] },
          { name: '青海湖二郎剑', position: [100.229, 36.583] },
          { name: '黑马河', position: [99.785, 36.728] },
          { name: '茶卡镇', position: [99.080, 36.782] }
        ],
        legs: [
          { from: '西宁', to: '日月山', meta: '约100km / 2小时左右', note: '早出发，日月山只做短停适应高海拔。' },
          { from: '日月山', to: '青海湖二郎剑', meta: '约70-90km / 1.5小时', note: '把主要游览时间留给正规湖区景点。' },
          { from: '青海湖', to: '茶卡镇', meta: '约150-180km / 2.5-3.5小时', note: '经黑马河向西，晚饭前入住茶卡。' }
        ]
      },
      2: {
        distance: '约430-480km',
        duration: '约8-10小时含游览',
        points: [
          { name: '茶卡镇', position: [99.080, 36.782] },
          { name: '茶卡盐湖', position: [99.075, 36.699] },
          { name: '德令哈', position: [97.361, 37.369] },
          { name: '小柴旦湖', position: [95.513, 37.483] },
          { name: '大柴旦镇', position: [95.365, 37.853] }
        ],
        legs: [
          { from: '茶卡镇', to: '茶卡盐湖', meta: '约15km / 20-30分钟', note: '赶早入园，控制在2-3小时内离开。' },
          { from: '茶卡', to: '德令哈', meta: '约200km / 2.5-3小时', note: '午餐、加油和补水集中在德令哈完成。' },
          { from: '德令哈', to: '大柴旦', meta: '约210-240km / 3-4小时', note: '下午以到达为目标，小柴旦湖只在安全停车区短停。' }
        ]
      },
      3: {
        distance: '约370-420km',
        duration: '约7-9小时含游览',
        points: [
          { name: '大柴旦镇', position: [95.365, 37.853] },
          { name: '大柴旦翡翠湖', position: [95.191, 37.759] },
          { name: '当金山口', position: [94.294, 39.360] },
          { name: '阿克塞', position: [94.340, 39.633] },
          { name: '敦煌市区', position: [94.661, 40.142] }
        ],
        legs: [
          { from: '大柴旦', to: '翡翠湖', meta: '约15-25km / 30-50分钟', note: '上午游览后及时回到主路，不绕行无人区。' },
          { from: '翡翠湖', to: '阿克塞', meta: '约250-300km / 4-5小时', note: '翻越当金山，注意长下坡和横风。' },
          { from: '阿克塞', to: '敦煌', meta: '约80-100km / 1.5小时', note: '日落前进城入住，夜市按体力决定。' }
        ]
      },
      4: {
        distance: '敦煌周边约70-100km',
        duration: '整天含景区游览',
        points: [
          { name: '敦煌市区', position: [94.661, 40.142] },
          { name: '莫高窟数字展示中心', position: [94.775, 40.119] },
          { name: '莫高窟', position: [94.805, 40.039] },
          { name: '鸣沙山月牙泉', position: [94.675, 40.089] },
          { name: '沙州夜市', position: [94.662, 40.142] }
        ],
        legs: [
          { from: '敦煌市区', to: '莫高窟数字展示中心', meta: '约12km / 20-30分钟', note: '严格按预约时间提前抵达，统一换乘景区交通。' },
          { from: '莫高窟', to: '鸣沙山月牙泉', meta: '约25-35km / 40-60分钟', note: '先回城休息，下午较晚再进入沙山。' },
          { from: '鸣沙山', to: '沙州夜市', meta: '约6km / 15-25分钟', note: '体力允许再夜游，给第二天转场保留睡眠。' }
        ]
      },
      5: {
        distance: '约370-400km',
        duration: '约5-6.5小时不含停留',
        points: [
          { name: '敦煌市区', position: [94.661, 40.142] },
          { name: '瓜州服务区', position: [95.780, 40.525] },
          { name: '大地之子', position: [95.620, 40.514] },
          { name: '嘉峪关市区', position: [98.290, 39.773] }
        ],
        legs: [
          { from: '敦煌', to: '瓜州', meta: '约120km / 1.5-2小时', note: '服务区完成补给，大地之子顺路短停。' },
          { from: '瓜州', to: '嘉峪关', meta: '约250-280km / 3-4小时', note: '高速转场为主，下午到达后休整。' }
        ]
      },
      6: {
        distance: '约280-320km',
        duration: '约6-8小时含游览',
        points: [
          { name: '嘉峪关市区', position: [98.290, 39.773] },
          { name: '嘉峪关关城', position: [98.217, 39.802] },
          { name: '张掖七彩丹霞', position: [100.068, 38.973] },
          { name: '张掖市区', position: [100.449, 38.925] }
        ],
        legs: [
          { from: '嘉峪关市区', to: '嘉峪关关城', meta: '约10km / 20分钟', note: '上午参观，午前后开始向张掖转场。' },
          { from: '嘉峪关', to: '七彩丹霞', meta: '约220-250km / 3小时', note: '下午抵达，按预约和天气入园。' },
          { from: '七彩丹霞', to: '张掖', meta: '约40km / 50-70分钟', note: '日落后回城，避免再追加平山湖大峡谷。' }
        ]
      },
      7: {
        distance: '约390-450km',
        duration: '约8-10小时含停留',
        points: [
          { name: '张掖市区', position: [100.449, 38.925] },
          { name: '扁都口', position: [100.947, 38.264] },
          { name: '祁连草原', position: [100.933, 38.206] },
          { name: '门源青石嘴', position: [101.407, 37.717] },
          { name: '西宁市区', position: [101.778, 36.617] }
        ],
        legs: [
          { from: '张掖', to: '扁都口', meta: '约160-190km / 2.5-3小时', note: '早出发进入G227，沿途只在正式观景区停车。' },
          { from: '扁都口', to: '门源', meta: '约120-160km / 3小时左右', note: '穿越祁连草原，天气变化时减少停靠。' },
          { from: '门源', to: '西宁', meta: '约130-160km / 2.5-3小时', note: '下午收节奏，天黑前回到西宁。' }
        ]
      },
      8: {
        distance: '约35-45km',
        duration: '约1.5-2.5小时含还车',
        points: [
          { name: '西宁市区', position: [101.778, 36.617] },
          { name: '加油洗车点', position: [101.915, 36.612] },
          { name: '西宁曹家堡机场', position: [102.044, 36.527] }
        ],
        legs: [
          { from: '西宁市区', to: '加油洗车点', meta: '约15-25km / 30-45分钟', note: '按合同补油、清理车辆并拍摄还车前车况。' },
          { from: '加油洗车点', to: '西宁机场', meta: '约20-30km / 30-50分钟', note: '至少预留1小时验车，再进入航站楼值机。' }
        ]
      }
    },
    scenicWaypointDetails: {
      '日月山': {
        type: '高原山口',
        time: '建议 30-60 分钟',
        photoLabel: '经幡 / 草原 / 山口',
        photoTone: 'linear-gradient(135deg, #0f766e, #38bdf8 46%, #f8fafc)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Qinghai.Riyue_shan.jpg/1920px-Qinghai.Riyue_shan.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Qinghai.Riyue_shan.jpg',
        intro: '日月山是从西宁进入青海湖盆地的过渡点，适合短停看地貌变化，不宜在首个高原日久留。',
        points: ['慢走、注意风寒。', '保留体力给青海湖和后续驾驶。']
      },
      '青海湖二郎剑': {
        type: '高原湖泊',
        time: '建议 2-3 小时',
        photoLabel: '湖面 / 草原 / 远山',
        photoTone: 'linear-gradient(135deg, #075985, #38bdf8 46%, #facc15)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/202606_Qinghai_Lake_04.jpg/1920px-202606_Qinghai_Lake_04.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:202606_Qinghai_Lake_04.jpg',
        intro: '二郎剑是青海湖成熟的游览区域，停车、观景和服务设施相对集中，适合第一次到访。',
        points: ['只在正规区域停车。', '防晒、防风，尊重牧场边界。']
      },
      '茶卡盐湖': {
        type: '盐湖景观',
        time: '建议 2-3 小时',
        photoLabel: '盐湖 / 倒影 / 小火车',
        photoTone: 'linear-gradient(135deg, #0e7490, #e0f2fe 48%, #f8fafc)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/%E8%8C%B6%E5%8D%A1%E7%9B%90%E6%B9%96%E6%B9%96%E9%9D%A210.jpg/1920px-%E8%8C%B6%E5%8D%A1%E7%9B%90%E6%B9%96%E6%B9%96%E9%9D%A210.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:%E8%8C%B6%E5%8D%A1%E7%9B%90%E6%B9%96%E6%B9%96%E9%9D%A210.jpg',
        intro: '茶卡盐湖适合清晨游览，风小、光线稳定时更容易看到倒影，也能给长途转场留出时间。',
        points: ['准备鞋套、防晒和饮水。', '天气一般就及时离开，不为倒影拖延。']
      },
      '小柴旦湖': {
        type: '戈壁湖泊',
        time: '建议短停',
        photoLabel: '戈壁 / 湖面 / 公路',
        photoTone: 'linear-gradient(135deg, #334155, #22d3ee 44%, #f8fafc)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Xiao_Qaidam_Lake_2022-10-13_Sentinel-2_L2A_True_color.jpg/1920px-Xiao_Qaidam_Lake_2022-10-13_Sentinel-2_L2A_True_color.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Xiao_Qaidam_Lake_2022-10-13_Sentinel-2_L2A_True_color.jpg',
        intro: '小柴旦湖是德令哈到大柴旦途中的顺路景观，适合在合法停车区短休，不单独消耗大量时间。',
        points: ['确认安全停车位置。', '风大时减少湖边停留。']
      },
      '大柴旦翡翠湖': {
        type: '盐湖景观',
        time: '建议 2-3 小时',
        photoLabel: '翠色盐池 / 戈壁',
        photoTone: 'linear-gradient(135deg, #0f766e, #34d399 44%, #dbeafe)',
        spotDetailImage: 'https://dimg04.c-ctrip.com/images/1mf4f12000hp7yn5o753C_W_640_400_Q90.jpg',
        spotDetailImageSource: 'https://you.ctrip.com/travels/qinghai100032/4154946.html',
        intro: '翡翠湖由不同色泽的盐池组成，是从柴达木盆地转向敦煌前最值得保留的半日景点。',
        points: ['上午光线柔和、人相对少。', '游览后直接回主路，不绕行无人区。']
      },
      '当金山口': {
        type: '山口公路',
        time: '行车观景',
        photoLabel: '垭口 / 戈壁 / 长坡',
        photoTone: 'linear-gradient(135deg, #475569, #cbd5e1 42%, #f59e0b)',
        spotDetailImage: 'https://www.gzhphb.com/img/allimg/230323/11-230323113242159.png',
        spotDetailImageSource: 'https://www.gzhphb.com/zx/5148.html',
        intro: '当金山连接柴达木与河西走廊，地貌转换明显，但驾驶注意力优先于拍照。',
        points: ['长下坡控制车速。', '只在明确停车区停靠。']
      },
      '莫高窟': {
        type: '世界文化遗产',
        time: '按预约场次约 3-4 小时',
        photoLabel: '石窟 / 壁画 / 九层楼',
        photoTone: 'linear-gradient(135deg, #7c2d12, #d97706 46%, #fef3c7)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Dunhuang_Mogao_Ku_2013.12.31_12-30-18.jpg/1920px-Dunhuang_Mogao_Ku_2013.12.31_12-30-18.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Dunhuang_Mogao_Ku_2013.12.31_12-30-18.jpg',
        intro: '莫高窟是本行程的人文核心，需要围绕实名预约场次安排整天节奏，并从数字展示中心开始参观。',
        points: ['只走官方预约渠道。', '洞窟内遵守讲解、拍摄和保护规定。']
      },
      '鸣沙山月牙泉': {
        type: '沙漠景观',
        time: '建议 3-4 小时',
        photoLabel: '沙山 / 月牙泉 / 日落',
        photoTone: 'linear-gradient(135deg, #b45309, #fbbf24 48%, #0e7490)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Crescent_Lake_from_the_Singing_Sand_Dunes_%2820230918101214%29.jpg/1920px-Crescent_Lake_from_the_Singing_Sand_Dunes_%2820230918101214%29.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Crescent_Lake_from_the_Singing_Sand_Dunes_(20230918101214).jpg',
        intro: '鸣沙山适合下午较晚进入，把沙山光影和日落作为敦煌完整日的收尾。',
        points: ['避开正午暴晒。', '量力爬沙，不在体力不足时追高点。']
      },
      '大地之子': {
        type: '戈壁艺术',
        time: '建议 20-40 分钟',
        photoLabel: '戈壁 / 雕塑 / 天际线',
        photoTone: 'linear-gradient(135deg, #92400e, #eab308 44%, #38bdf8)',
        spotDetailImage: 'https://xhsc.app.xinhuanet.com/cms/xhharticle/image/20231024/8020f6ed-f8ed-43cd-b64b-f442cd3e9103.png',
        spotDetailImageSource: 'https://app.xinhuanet.com/news/article.html?articleId=5feea092-b67a-4b1e-8a19-96cf00b15b06',
        intro: '大地之子位于瓜州沿线，适合作为敦煌到嘉峪关转场中的短暂停靠点。',
        points: ['控制停留时间。', '按停车区和现场动线行走。']
      },
      '嘉峪关关城': {
        type: '长城关隘',
        time: '建议 2-3 小时',
        photoLabel: '关城 / 城墙 / 祁连雪山',
        photoTone: 'linear-gradient(135deg, #78350f, #d97706 44%, #64748b)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/20080716_Jiayuguan_Pass_03.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:20080716_Jiayuguan_Pass_03.jpg',
        intro: '嘉峪关关城是河西走廊长城人文段的核心，安排在上午参观后再向张掖转场更从容。',
        points: ['提前查看预约和入园要求。', '大风天注意城墙台阶。']
      },
      '张掖七彩丹霞': {
        type: '彩色丘陵',
        time: '建议 3-4 小时',
        photoLabel: '丹霞 / 彩丘 / 日落',
        photoTone: 'linear-gradient(135deg, #be123c, #f97316 44%, #facc15)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Zhangye_Danxia.JPG/1920px-Zhangye_Danxia.JPG',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Zhangye_Danxia.JPG',
        intro: '七彩丹霞适合下午进入，沿景区观光车顺序游览，傍晚斜射光能增强地貌层次。',
        points: ['不跨越护栏踩踏地貌。', '雷雨大风时服从景区安排。']
      },
      '扁都口': {
        type: '祁连山口',
        time: '建议 30-60 分钟',
        photoLabel: '峡谷 / 草原 / 花田',
        photoTone: 'linear-gradient(135deg, #166534, #84cc16 44%, #38bdf8)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Qilian_landscape.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Qilian_landscape.jpg',
        intro: '扁都口是张掖返回青海的重要节点，景观随季节变化，适合作为G227穿越中的短停点。',
        points: ['先确认道路通行情况。', '不要因拍照延误回西宁时间。']
      },
      '祁连草原': {
        type: '高原草原',
        time: '沿途分段停留',
        photoLabel: '草原 / 牛羊 / 雪山',
        photoTone: 'linear-gradient(135deg, #14532d, #65a30d 42%, #dbeafe)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/3/30/20240321_Aerial_view_of_Qilian_Mountains_06.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:20240321_Aerial_view_of_Qilian_Mountains_06.jpg',
        intro: '祁连草原是大环线收尾的景观高潮，但D8里程较长，应以安全穿越和按时回西宁为先。',
        points: ['不进入私人牧场。', '天气转差就减少停靠并尽快下山。']
      }
    }
  }
};
