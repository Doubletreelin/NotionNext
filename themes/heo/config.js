const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-01-01', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟  --《水调歌头·明月几时有》', url: 'https://hanyu.baidu.com/shici/detail?from=aladdin&pid=946d8372884d445eb0a4cc6e3826dbe8' },
    { title: '大江东去，浪淘尽，千古风流人物  --《念奴娇·赤壁怀古》', url: 'https://hanyu.baidu.com/shici/detail?from=aladdin&pid=da476d6bf6c243e69a9dda1f0dd7c524' },
    { title: '天生我材必有用，千金散尽还复来 --《将进酒·君不见》', url: 'https://hanyu.baidu.com/shici/detail?from=aladdin&pid=60841450e8714b78a6f7ef385dcb63e0' },
    { title: '花间一壶酒，独酌无相亲。举杯邀明月，对影成三人 --《月下独酌（其一）》', url: 'https://hanyu.baidu.com/shici/detail?pid=c4d0f96418f04c0eb0af54a2c21075f0' },
    { title: '醉卧沙场君莫笑，古来征战几人回  --《凉州词》', url: 'https://hanyu.baidu.com/shici/detail?pid=7022af4aa9d04d02bb3f7e2d8fde87b9' },
    { title: '会当凌绝顶，一览众山小  --《望岳》', url: 'https://hanyu.baidu.com/shici/detail?pid=3999faed1b1b457fa95a85935ddc9544' },
    { title: '安能摧眉折腰事权贵，使我不得开心颜  --《梦游天姥吟留别》', url: 'https://hanyu.baidu.com/shici/detail?pid=c9445bc0f57411e58459c8e0eb15ce01&tn=sug_click' },
    { title: '香雾云鬟湿，清辉玉臂寒。何时倚虚幌，双照泪痕干！ --《月夜》', url: 'https://hanyu.baidu.com/shici/detail?pid=a2eceb57bba743bbbd949eb8fb5152cb&tn=sug_click' },
    { title: '欲穷千里目，更上一层楼  --《登鹳雀楼》', url: 'https://hanyu.baidu.com/shici/detail?pid=fb5803490d4f46b7b8ab5f2956a35cce&tn=sug_click' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '分享编程',
  HEO_HERO_TITLE_2: '与思维认知',
  HEO_HERO_TITLE_3: 'Doubletree_lin',
  HEO_HERO_TITLE_4: '代码、诗与远方',
  HEO_HERO_TITLE_5: '天行健，君子以自强不息；地势坤，君子以厚德载物',
  HEO_HERO_TITLE_LINK: 'http://myblog.doubletree.fun',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/推荐' },
  HEO_HERO_CATEGORY_2: { title: '建站教程', url: '/tag/建站' },
  HEO_HERO_CATEGORY_3: { title: '心情随笔', url: '/category/心情随笔' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🤝 专修交互与设计',
    '🏃 脚踏实地行动派',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
    '🧱 团队小组发动机'
  ],
  HEO_INFO_CARD_URL: 'https://github.com/tangly1024/NotionNext', // 个人资料底部按钮链接

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/20239df3f66615b532ce571eac6d14ff21cf072602.webp',
      color_1: '#989bf8',
      title_2: 'Sketch',
      img_2: '/images/heo/2023e0ded7b724a39f12d59c3dc8fbdc7cbe074202.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/20231108a540b2862d26f8850172e4ea58ed075102.webp',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/2023e4058a91608ea41751c4f102b131f267075902.webp',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/heo/20233e777652412247dd57fd9b48cf997c01070702.webp',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: '/images/heo/2023f76570d2770c8e84801f7e107cd911b5073202.webp',
      color_2: '#8f55ba'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/heo/20237359d71b45ab77829cee5972e36f8c30073902.webp',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/images/heo/20237c548846044a20dad68a13c0f0e1502f074602.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/2023786e7fc488f453d5fb2be760c96185c0075502.webp',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/202372b4d760fd8a497d442140c295655426070302.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
