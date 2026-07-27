window.TRAVEL_GUIDES = {
  ...(window.TRAVEL_GUIDES || {}),
  yunnan: {
    meta: {
      documentTitle: '云南8日自驾地图导览',
      title: '云南8日自驾地图导览',
      subtitle: '飞机到丽江、当地租车，大理还车返程。路线串联丽江古城、白沙、虎跳峡徒步、香格里拉、沙溪和大理。',
      ariaLabel: '云南8日自驾地图导览：丽江进，大理出，当地租车，中段安排虎跳峡徒步。',
      mapAriaLabel: '丽江到大理8日自驾高德地图',
      currentLabel: '当前日程',
      summaryPills: [
        { value: '8天', label: '丽江 + 虎跳峡 + 香格里拉 + 大理' },
        { value: '异地', label: '丽江取车 / 大理还车' },
        { value: '徒步', label: '中段安排虎跳峡' }
      ]
    },
    globalNotes: [
      { title: '当地租车', text: '建议丽江机场取车、大理机场还车；下单前确认异地还车费、保险和高原地区限制。' },
      { title: '虎跳峡徒步', text: '高路徒步按体力二选一：轻量走中虎跳，体力好再走纳西雅阁到茶马客栈段。' },
      { title: '高原节奏', text: '香格里拉海拔更高，前一晚避免饮酒和熬夜；不把徒步、长途和高海拔强行叠满。' },
      { title: '自驾原则', text: '山路不夜驾、不弯道停车；雨季提前看塌方、落石和景区开放情况。' }
    ],
    days: [
      {
        day: 'D1',
        date: '第1天',
        title: '飞抵丽江，当地租车适应',
        route: ['出发地', '丽江机场', '丽江古城'],
        stay: '丽江古城或束河',
        pace: '落地适应，不长途开车',
        highlight: '丽江古城夜景、束河慢逛',
        drive: '取车验车，熟悉山路车况',
        point: { name: '丽江古城', lon: 100.234, lat: 26.876 },
        segment: 0,
        tips: ['落地后优先取车、补给、确认还车点和保险。', '首日只安排古城/束河轻量步行，给后续高原和徒步留体力。'],
        warning: '丽江古城周边停车不轻松，优先选择带停车位的住宿。'
      },
      {
        day: 'D2',
        date: '第2天',
        title: '白沙古镇与玉龙雪山脚下',
        route: ['丽江', '白沙古镇', '玉湖村/雪山脚下', '丽江'],
        stay: '丽江',
        pace: '轻量高原适应日',
        highlight: '白沙、雪山视野、纳西村落',
        drive: '短途环线，避免太晚返城',
        point: { name: '白沙古镇', lon: 100.214, lat: 26.966 },
        segment: 1,
        tips: ['不建议第二天就把玉龙雪山大索道和长途转场叠在一起。', '白沙适合上午慢逛，下午看天气决定玉湖村或雪山脚下。'],
        warning: '雪山区域天气变化快，海拔适应不佳就只做远眺和村落散步。'
      },
      {
        day: 'D3',
        date: '第3天',
        title: '虎跳峡徒步后到香格里拉',
        route: ['丽江', '虎跳峡镇', '中虎跳徒步', '香格里拉'],
        stay: '香格里拉',
        pace: '徒步 + 山路转场',
        highlight: '虎跳峡徒步、金沙江峡谷',
        drive: '徒步前后都不赶夜路',
        point: { name: '虎跳峡', lon: 100.128, lat: 27.192 },
        segment: 2,
        tips: ['轻量方案：停车到中虎跳，走栈道和峡谷观景后继续去香格里拉。', '体力好且天气稳定，可加走高路徒步一段，但要提前约好接驳。'],
        warning: '虎跳峡徒步有台阶、碎石和临崖路段，雨天、落石提示或体力不足时及时缩短路线。'
      },
      {
        day: 'D4',
        date: '第4天',
        title: '香格里拉慢游',
        route: ['独克宗古城', '松赞林寺', '纳帕海'],
        stay: '香格里拉',
        pace: '高原慢节奏',
        highlight: '寺院、草甸、古城转经',
        drive: '城市周边短途',
        point: { name: '香格里拉', lon: 99.706, lat: 27.826 },
        segment: 3,
        tips: ['上午松赞林寺，下午根据天气去纳帕海或独克宗古城。', '这天不建议追加梅里雪山方向，避免变成长途赶路。'],
        warning: '香格里拉海拔约 3200m，头痛胸闷时减少活动，别硬撑。'
      },
      {
        day: 'D5',
        date: '第5天',
        title: '香格里拉转场沙溪古镇',
        route: ['香格里拉', '长江第一湾', '沙溪古镇'],
        stay: '沙溪古镇',
        pace: '中长距离转场',
        highlight: '山谷公路、茶马古道古镇',
        drive: '山路为主，下午收节奏',
        point: { name: '沙溪古镇', lon: 99.853, lat: 26.324 },
        segment: 4,
        tips: ['上午离开香格里拉，路上只选一两个顺路观景点。', '沙溪适合傍晚抵达后慢逛，不适合当作赶场中转站。'],
        warning: '这天山路和弯道多，遇雨或落石提示就减少停靠。'
      },
      {
        day: 'D6',
        date: '第6天',
        title: '沙溪到大理，环海北线',
        route: ['沙溪', '喜洲古镇', '双廊', '大理古城'],
        stay: '大理古城或洱海边',
        pace: '古镇 + 洱海慢行',
        highlight: '喜洲稻田、洱海北线、双廊',
        drive: '环海路慢行，停车看现场',
        point: { name: '大理古城', lon: 100.164, lat: 25.695 },
        segment: 5,
        tips: ['从沙溪到大理后，优先走喜洲和双廊，不必完整环海一圈。', '洱海边停车和临停管理较严，按标识停车。'],
        warning: '环海不要频繁急停拍照，骑行、电动车和行人很多。'
      },
      {
        day: 'D7',
        date: '第7天',
        title: '大理深度停留',
        route: ['大理古城', '苍山脚下', '洱海生态廊道'],
        stay: '大理',
        pace: '整天给大理',
        highlight: '苍山、古城、洱海日落',
        drive: '少开车，多步行/骑行',
        point: { name: '洱海生态廊道', lon: 100.184, lat: 25.738 },
        segment: 6,
        tips: ['想轻松就古城 + 洱海生态廊道；想看山再加苍山脚下。', '最后一晚整理行李和还车材料，别安排太晚的远点。'],
        warning: '生态廊道很多区域不允许机动车进入，提前确认停车点。'
      },
      {
        day: 'D8',
        date: '第8天',
        title: '大理还车返程',
        route: ['大理', '大理机场', '出发地'],
        stay: '返程',
        pace: '留足还车余量',
        highlight: '洱海晨景与返程',
        drive: '机场还车，建议下午航班',
        point: { name: '大理机场', lon: 100.318, lat: 25.649 },
        segment: 7,
        tips: ['航班尽量选下午或晚上，给加油、洗车、还车验车留时间。', '如果大理航班不合适，可改大理动车到昆明/丽江再飞。'],
        warning: '不要把环海游玩压到返程当天上午太满，机场路和还车柜台都要留余量。'
      }
    ],
    pinPoints: [
      { key: 0, label: 'D1', name: '丽江', position: [100.234, 26.876] },
      { key: 1, label: 'D2', name: '白沙古镇', position: [100.214, 26.966] },
      { key: 2, label: 'D3', name: '虎跳峡', position: [100.128, 27.192] },
      { key: 3, label: 'D4', name: '香格里拉', position: [99.706, 27.826] },
      { key: 4, label: 'D5', name: '沙溪古镇', position: [99.853, 26.324] },
      { key: 5, label: 'D6-D7', name: '大理', position: [100.164, 25.695] },
      { key: 7, label: 'D8', name: '大理机场', position: [100.318, 25.649] }
    ],
    routePath: [
      [100.246, 26.680],
      [100.234, 26.876],
      [100.214, 26.966],
      [100.128, 27.192],
      [99.706, 27.826],
      [99.853, 26.324],
      [100.164, 25.695],
      [100.318, 25.649]
    ],
    routeSegments: {
      1: [[100.234, 26.876], [100.214, 26.966], [100.252, 27.106], [100.234, 26.876]],
      2: [[100.234, 26.876], [100.097, 27.186], [100.128, 27.192], [99.706, 27.826]],
      3: [[99.706, 27.826], [99.707, 27.866], [99.620, 27.870], [99.706, 27.826]],
      4: [[99.706, 27.826], [100.020, 26.870], [99.853, 26.324]],
      5: [[99.853, 26.324], [100.132, 25.848], [100.197, 25.907], [100.164, 25.695]],
      6: [[100.164, 25.695], [100.117, 25.703], [100.184, 25.738], [100.164, 25.695]],
      7: [[100.164, 25.695], [100.318, 25.649]]
    },
    dailyRoutes: {
      0: {
        distance: '约35-45km',
        duration: '约1-1.5小时含取车',
        points: [
          { name: '丽江机场', position: [100.246, 26.680] },
          { name: '取车点', position: [100.246, 26.680] },
          { name: '丽江古城', position: [100.234, 26.876] },
          { name: '束河古镇', position: [100.207, 26.914] }
        ],
        legs: [
          { from: '丽江机场', to: '丽江古城', meta: '约30km / 45-60分钟', note: '落地取车后直接进城，优先入住带停车位的酒店。' },
          { from: '丽江古城', to: '束河古镇', meta: '城市短途 / 机动安排', note: '只做轻量夜游，不安排长途驾驶。' }
        ]
      },
      1: {
        distance: '约60-90km',
        duration: '约3-5小时含游览',
        points: [
          { name: '丽江古城', position: [100.234, 26.876] },
          { name: '白沙古镇', position: [100.214, 26.966] },
          { name: '玉湖村', position: [100.236, 27.026] },
          { name: '玉龙雪山脚下', position: [100.252, 27.106] },
          { name: '丽江古城', position: [100.234, 26.876] }
        ],
        legs: [
          { from: '丽江古城', to: '白沙古镇', meta: '约12km / 25-40分钟', note: '上午慢逛，适合适应海拔和节奏。' },
          { from: '白沙', to: '玉湖村/雪山脚下', meta: '约20-35km / 1小时左右', note: '看天气决定是否靠近雪山，身体不适就远眺。' },
          { from: '雪山脚下', to: '丽江', meta: '约30km / 1小时左右', note: '傍晚回城，避免山区夜路。' }
        ]
      },
      2: {
        distance: '约200-240km',
        duration: '约6-8小时含徒步',
        points: [
          { name: '丽江古城', position: [100.234, 26.876] },
          { name: '虎跳峡镇', position: [100.097, 27.186] },
          { name: '中虎跳徒步口', position: [100.128, 27.192] },
          { name: '虎跳峡徒步', position: [100.141, 27.205] },
          { name: '香格里拉', position: [99.706, 27.826] }
        ],
        legs: [
          { from: '丽江', to: '虎跳峡镇', meta: '约80km / 1.5-2小时', note: '上午出发，把体力和天气留给徒步。' },
          { from: '虎跳峡镇', to: '中虎跳徒步', meta: '徒步约2-4小时', note: '轻量走中虎跳；体力好再选择高路徒步一段。' },
          { from: '虎跳峡', to: '香格里拉', meta: '约100-130km / 2.5-3.5小时', note: '徒步后不要赶夜路，天黑前到香格里拉。' }
        ]
      },
      3: {
        distance: '约40-80km',
        duration: '约3-5小时含游览',
        points: [
          { name: '独克宗古城', position: [99.704, 27.823] },
          { name: '松赞林寺', position: [99.707, 27.866] },
          { name: '纳帕海', position: [99.620, 27.870] },
          { name: '香格里拉', position: [99.706, 27.826] }
        ],
        legs: [
          { from: '独克宗古城', to: '松赞林寺', meta: '约6km / 15-25分钟', note: '上午寺院游览，节奏放慢。' },
          { from: '松赞林寺', to: '纳帕海', meta: '约15-30km / 1小时左右', note: '看天气选择环湖或观景点，不强求完整绕行。' }
        ]
      },
      4: {
        distance: '约260-320km',
        duration: '约6-8小时',
        points: [
          { name: '香格里拉', position: [99.706, 27.826] },
          { name: '长江第一湾', position: [100.020, 26.870] },
          { name: '剑川', position: [99.905, 26.537] },
          { name: '沙溪古镇', position: [99.853, 26.324] }
        ],
        legs: [
          { from: '香格里拉', to: '长江第一湾', meta: '约130-170km / 3-4小时', note: '山路转场日，顺路短停即可。' },
          { from: '长江第一湾', to: '沙溪古镇', meta: '约120-150km / 3小时左右', note: '下午收节奏，傍晚到沙溪慢逛。' }
        ]
      },
      5: {
        distance: '约160-220km',
        duration: '约5-7小时含游览',
        points: [
          { name: '沙溪古镇', position: [99.853, 26.324] },
          { name: '喜洲古镇', position: [100.132, 25.848] },
          { name: '双廊', position: [100.197, 25.907] },
          { name: '大理古城', position: [100.164, 25.695] }
        ],
        legs: [
          { from: '沙溪', to: '喜洲', meta: '约110-140km / 2.5-3.5小时', note: '上午离开沙溪，抵达大理北线。' },
          { from: '喜洲', to: '双廊/大理古城', meta: '环海北线 / 2-3小时', note: '按停车和天色决定停留点，不必完整环海。' }
        ]
      },
      6: {
        distance: '大理周边短途',
        duration: '半天到一天',
        points: [
          { name: '大理古城', position: [100.164, 25.695] },
          { name: '苍山脚下', position: [100.117, 25.703] },
          { name: '洱海生态廊道', position: [100.184, 25.738] },
          { name: '大理古城', position: [100.164, 25.695] }
        ],
        legs: [
          { from: '大理古城', to: '苍山脚下', meta: '短途 / 20-40分钟', note: '想看山就上午安排苍山脚下，避免高强度爬升。' },
          { from: '古城', to: '洱海生态廊道', meta: '短途 / 骑行或步行更合适', note: '很多区域机动车不能进入，提前找停车点。' }
        ]
      },
      7: {
        distance: '约20-40km',
        duration: '约1-2小时含还车',
        points: [
          { name: '大理古城', position: [100.164, 25.695] },
          { name: '加油/洗车点', position: [100.247, 25.666] },
          { name: '大理机场', position: [100.318, 25.649] }
        ],
        legs: [
          { from: '大理古城', to: '加油/洗车点', meta: '约15-25km / 30-45分钟', note: '按租车要求补油、清理车内物品。' },
          { from: '加油/洗车点', to: '大理机场', meta: '约10-20km / 20-35分钟', note: '预留柜台验车、押金和航班值机时间。' }
        ]
      }
    },
    scenicWaypointDetails: {
      '丽江古城': {
        type: '古城街区',
        time: '建议 2-3 小时',
        photoLabel: '古城街巷 / 夜景',
        photoTone: 'linear-gradient(135deg, #7c2d12, #c026d3 46%, #2563eb)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/1_lijiang_old_town_night.jpg/1920px-1_lijiang_old_town_night.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:1_lijiang_old_town_night.jpg',
        intro: '丽江古城适合作为落地后的轻量适应点，晚上氛围好，但不建议把第一天排太满。',
        points: ['优先住在停车方便的位置。', '晚间只做短距离步行，保留体力。']
      },
      '白沙古镇': {
        type: '古镇慢游',
        time: '建议 2-3 小时',
        photoLabel: '雪山视野 / 纳西村落',
        photoTone: 'linear-gradient(135deg, #1d4ed8, #94a3b8 42%, #f8fafc)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Road_To_Baisha_%28121112463%29.jpeg/1920px-Road_To_Baisha_%28121112463%29.jpeg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Road_To_Baisha_(121112463).jpeg',
        intro: '白沙比丽江古城更松弛，适合看雪山、逛小店和适应云南西北线节奏。',
        points: ['上午人少光线更舒服。', '可与玉湖村、雪山脚下顺路组合。']
      },
      '玉龙雪山脚下': {
        type: '雪山观景',
        time: '路过观景',
        photoLabel: '雪山 / 村落 / 高原',
        photoTone: 'linear-gradient(135deg, #334155, #e2e8f0 46%, #38bdf8)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Lijiang_Yunnan_China_Jade-Dragon-Snow-Mountain-01.jpg/1920px-Lijiang_Yunnan_China_Jade-Dragon-Snow-Mountain-01.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Lijiang_Yunnan_China_Jade-Dragon-Snow-Mountain-01.jpg',
        intro: '不强求大索道时，可以把玉龙雪山脚下作为适应性观景点，降低行程强度。',
        points: ['天气不好就不硬等。', '高反不适时减少停留。']
      },
      '虎跳峡徒步': {
        type: '峡谷徒步',
        time: '建议 2-4 小时',
        photoLabel: '金沙江峡谷 / 徒步线',
        photoTone: 'linear-gradient(135deg, #78350f, #dc2626 45%, #38bdf8)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Yunnan_China_Tiger-Leaping-Gorge-05.jpg/1920px-Yunnan_China_Tiger-Leaping-Gorge-05.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Yunnan_China_Tiger-Leaping-Gorge-05.jpg',
        intro: '虎跳峡是本行程的核心徒步段，建议按体力选择中虎跳轻量徒步或高路徒步的一段。',
        points: ['雨天、落石提示或体力不足时缩短路线。', '徒步后还要开往香格里拉，不要贪长线。']
      },
      '中虎跳徒步口': {
        type: '徒步入口',
        time: '徒步起点',
        photoLabel: '峡谷入口 / 栈道',
        photoTone: 'linear-gradient(135deg, #92400e, #be123c 42%, #bae6fd)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Tiger_Leaping_Gorge_trail_11.JPG/1920px-Tiger_Leaping_Gorge_trail_11.JPG',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Tiger_Leaping_Gorge_trail_11.JPG',
        intro: '中虎跳适合自驾游客做半日徒步，强度比完整高路徒步更可控。',
        points: ['提前确认停车和接驳。', '带水、防晒和防滑鞋。']
      },
      '松赞林寺': {
        type: '寺院人文',
        time: '建议 1.5-2.5 小时',
        photoLabel: '寺院 / 高原光影',
        photoTone: 'linear-gradient(135deg, #7c2d12, #facc15 44%, #4f46e5)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/1_songzanlin_monastery_yunnan_2018.jpg/1920px-1_songzanlin_monastery_yunnan_2018.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:1_songzanlin_monastery_yunnan_2018.jpg',
        intro: '松赞林寺适合安排在香格里拉慢游日，节奏比长途转场更从容。',
        points: ['尊重宗教空间和拍照规定。', '海拔较高，慢走少爬急坡。']
      },
      '纳帕海': {
        type: '草甸湖泊',
        time: '建议 1-2 小时',
        photoLabel: '草甸 / 湖面 / 远山',
        photoTone: 'linear-gradient(135deg, #166534, #38bdf8 44%, #f8fafc)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Napa_Lake%2C_Shangri_La_-_49077120652.jpg/1920px-Napa_Lake%2C_Shangri_La_-_49077120652.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Napa_Lake,_Shangri_La_-_49077120652.jpg',
        intro: '纳帕海适合作为香格里拉周边短途观景，天气好时草甸和湖面层次明显。',
        points: ['按季节水位和道路情况选择观景点。', '不建议天黑后继续绕行。']
      },
      '沙溪古镇': {
        type: '茶马古道古镇',
        time: '建议半天',
        photoLabel: '古戏台 / 石板路',
        photoTone: 'linear-gradient(135deg, #78350f, #c026d3 40%, #2563eb)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Shaxi%2C_Yunnan%2C_China.jpg/1920px-Shaxi%2C_Yunnan%2C_China.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Shaxi,_Yunnan,_China.jpg',
        intro: '沙溪适合在香格里拉到大理之间降速，古镇尺度舒服，适合傍晚慢逛。',
        points: ['住宿尽量选古镇周边，少折腾停车。', '不要把沙溪当成只睡一觉的中转点。']
      },
      '喜洲古镇': {
        type: '白族古镇',
        time: '建议 1-2 小时',
        photoLabel: '稻田 / 白族院落',
        photoTone: 'linear-gradient(135deg, #14532d, #bef264 44%, #2563eb)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Xizhou_Town_%2821200714911%29.jpg/1920px-Xizhou_Town_%2821200714911%29.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Xizhou_Town_(21200714911).jpg',
        intro: '喜洲适合进入大理后的第一站，古镇、稻田和白族院落都比较顺路。',
        points: ['按停车场停放，别进窄巷。', '可以与洱海北线组合。']
      },
      '双廊': {
        type: '洱海镇子',
        time: '建议 1-2 小时',
        photoLabel: '洱海 / 小镇 / 苍山',
        photoTone: 'linear-gradient(135deg, #0369a1, #38bdf8 45%, #e2e8f0)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Shuanglang%2C_Dali%2C_Yunnan%2C_China_01.jpg/1920px-Shuanglang%2C_Dali%2C_Yunnan%2C_China_01.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Shuanglang,_Dali,_Yunnan,_China_01.jpg',
        intro: '双廊是洱海北线的经典停留点，适合看湖景，但旺季停车和人流较集中。',
        points: ['不要为拍照频繁临停。', '人多时缩短停留，把时间留给住宿周边。']
      },
      '苍山脚下': {
        type: '山景观景',
        time: '建议 1-2 小时',
        photoLabel: '苍山 / 古城边',
        photoTone: 'linear-gradient(135deg, #334155, #94a3b8 42%, #22d3ee)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Dali-Cangshan_Erhai_Lake_2017-11-16.jpg/1920px-Dali-Cangshan_Erhai_Lake_2017-11-16.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:Dali-Cangshan_Erhai_Lake_2017-11-16.jpg',
        intro: '苍山脚下适合作为大理深度日的山景补充，不一定要安排高强度登山。',
        points: ['看天气决定是否靠近山脚。', '给洱海日落留时间。']
      },
      '洱海生态廊道': {
        type: '湖边慢行',
        time: '建议 2-3 小时',
        photoLabel: '洱海 / 骑行 / 日落',
        photoTone: 'linear-gradient(135deg, #075985, #38bdf8 45%, #facc15)',
        spotDetailImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/20260223_Erhai_Park_in_Dali%2C_Yunnan.jpg/1920px-20260223_Erhai_Park_in_Dali%2C_Yunnan.jpg',
        spotDetailImageSource: 'https://commons.wikimedia.org/wiki/File:20260223_Erhai_Park_in_Dali,_Yunnan.jpg',
        intro: '洱海生态廊道适合步行或骑行，是大理最后一个完整游玩日里最轻松的收尾。',
        points: ['提前找机动车停车点。', '傍晚光线更适合慢行和拍照。']
      }
    }
  }
};
