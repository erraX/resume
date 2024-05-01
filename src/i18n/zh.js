// eslint-disable-next-line import/no-anonymous-default-export
export default {
  experience: '5年开发经验',
  'infomation.name': '倪敏杰',
  'infomation.title': 'Web 前端工程师',
  'career.title': '工作&主要项目经历',
  'company.alibaba.name': '阿里巴巴',
  'company.alibaba.rank': '前端架构师(P7)',
  'company.alibaba.desc':
    'Teambition/阿里云盘 前端架构师。\r\n负责团队基础设施建设、性能、项目架构、前端工程优化。',
  'company.alibaba.project.teambition.name': 'Teambition',
  'company.alibaba.project.teambition.desc':
    '团队协同办公工具, 有敏捷开发工具、甘特图、任务管理、待办管理、项目看板等功能。\r\n技术栈: CoffeeScript, TypeScript, Backbone, React, RxJS, Qiankun, lerna。',
  'company.alibaba.project.teambition.duty.1':
    '负责团队监控体系建设, 监控 SDK 设计和开发',
  'company.alibaba.project.teambition.duty.2':
    '监控 SDK 实现了接口层，隐藏了底层平台SDK细节, 对接入方透明, 支持多个监控平台多写。扩展功能使用插件化开发，开发了 FMP、 掉帧监测、Promise全局捕捉等插件',
  'company.alibaba.project.teambition.duty.3':
    '负责 Teambition 钉钉端登录页性能优化',
  // 'company.alibaba.project.teambition.duty.4':
  //   '参与前端微应用改造, 使用 IoC 容器管理运行时模块, 能够适配微应用在不同环境(Web, 钉钉)加载而执行的不同逻辑',
  'company.alibaba.project.aliyundrive.name': '阿里云盘',
  'company.alibaba.project.aliyundrive.desc':
    '跨平台云盘, 可上传/下载/分享各种资源。\r\n技术栈：Electron, React, MobX, RxJS, lerna。',
  'company.alibaba.project.aliyundrive.duty.1':
    '推动监控体系落地, 各端全部使用 SDK 统一接入, 为业务方开发相关插件扩展, 配置告警规则, 监控大盘',
  'company.alibaba.project.aliyundrive.duty.2':
    '文件传输客户端模块重构, 使用 RxJS, 时间分片渲染优化了客户端在大量文件传输下的渲染性能',
  'company.tencent.name': '腾讯',
  'company.tencent.rank': '资深前端工程师(T9)',
  'company.tencent.desc':
    '腾讯广告/新闻视频广告/合约广告投放端 前端负责人。\r\n负责团队基础技术建设、开发规范制定、技术架构演进、需求概要设计和评审, 与产品、设计、后端推动产品落地, 参与了团队大部分项目的开发。',
  'company.tencent.project.inquiry.name': '合约广告询量预订系统',
  'company.tencent.project.inquiry.desc':
    '广告销售可在平台上查询未来的广告库存, 并可预订、补量广告资源。\r\n项目陈旧(10年), 使用 vanillaJS 开发、非标准模块化方案、前后端未分离、无打现代包工具、手动部署上线。\r\n业务逻辑复杂, 其中表单字段多(几十个)、联动多(多对多、循环、链式、异步联动)、各种特殊逻辑。\r\n负责项目日常迭代、重构、架构升级、工程化改造、开发提效等工作。 ',
  'company.tencent.project.inquiry.duty.1':
    '模块化改造：自写 babel 插件来编译非标准的模块至 CommonJS, 能够使用 npm 管理依赖包并使用 Webpack 打包',
  'company.tencent.project.inquiry.duty.2':
    '自动化部署：由手动调用接口, PHP 编译 JS, 上传代码至 Git 仓库部署, 升级为通过 CI 线上自动化编译',
  'company.tencent.project.inquiry.duty.3':
    '框架渐进升级：部分组件/模块使用 Vue 重写, 升级, 提高代码维护性、支持更多交互方式，新老组件可通过 RxJS 通信',
  'company.tencent.project.inquiry.duty.4':
    '开发提效：由原来增加一个字段需要修改 20+ 处, 使用依赖倒置, 只需修改3个模块(字段配置、组件、数据绑定)',
  'company.tencent.project.inquiry.duty.5':
    '无侵入重构：把组件事件转换为 RxJS 事件流, 来处理表单复杂联动、异步竞态问题',
  'company.tencent.project.inquiry.duty.6':
    '基础设施建设：脚手架快速生成表单字段 Model 和组件、表单状态可视化 Chrome 插件',
  'company.tencent.threeone.name': '合约广告投放端三合一',
  'company.tencent.threeone.desc':
    '腾讯合约广告(库存、预订、投放系统三个10年的老系统)的系统整合, 广告销售可在平台上进行库存询量、预订、下单、补量的一站式服务，业务逻辑复杂。\r\n技术栈：Vue2 + vue-composition-api, Nuxt.js, RxJS, InversifyJS, lerna',
  'company.tencent.threeone.duty.1':
    '从 0 到 1 搭建整个项目架构, 带领4个前端开发, 项目初期贡献了 70% 的代码，3个月完成初版上线',
  'company.tencent.threeone.duty.2':
    '负责项目开发规范制定、Git 分支模型设计、设计/需求评审、需求概设、CR、CI自动化部署等工作',
  'company.tencent.threeone.duty.3':
    '对 Nuxt.js 和 vue-composition-api 进行了二次封装, 包括路由、权限、服务端预取数据、API请求配置、mock等模块',
  'company.tencent.threeone.duty.4':
    '对于核心模块表单, 设计了表单配置化方案, 开发了headless form(类似formik)来维护表单状态, 使用 IoC 的方式管理各个模块,  RxJS 处理复杂联动',
  'company.baidu.name': '百度',
  'company.baidu.rank': '前端工程师 (T4)',
  'company.baidu.desc':
    '负责C端、B端的各种项目开发，包括广告中后台管理系统、广告投放移动端SDK、在线编辑器。设计过大型复杂项目架构，维护过祖传项目。',
  'company.baidu.project.dsp.name': '百意 DSP 平台',
  'company.baidu.project.dsp.desc':
    '网盟唯一 DSP 平台, 日均消费500W+, 一站式投放平台, 为企业提供品效合一的程序化广告购买服务。\r\n技术栈：jQuery, ER(百度内部 MVC 框架), Edp(类似 gulp)',
  'company.baidu.project.dsp.duty.1':
    '架构升级：对部分模块(jQuery + 模版引擎渲染), 进行了 M(V+C) 分离',
  'company.baidu.project.dsp.duty.2':
    '基础模块封装：Api请求、弹窗视图、表单校验、事件中心等',
  'company.baidu.project.dsp.duty.3':
    '业务模块封装：列表页 ListModel ListView 封装',
  'company.baidu.project.landing.name': '落地页建站平台',
  'company.baidu.project.landing.desc':
    '可视化编辑平台, 帮助广告主快速搭建H5落地页, 并提供表单统计功能, 广告主可在平台上查看, 下载表单数据。\r\n技术栈: React, Redux, SSR, Ant Design',
  'company.baidu.project.landing.duty.1':
    '前端主力开发, 从 0 到 1 负责技术选型、框架搭建、前端交互设计',
  'company.baidu.project.landing.duty.2':
    '根据业务需求, 封装多个库：最小化字体打包、Redux 中间件统计渲染时间等',
  'company.baidu.project.landing.duty.3':
    '设计组件统一JSON Schema语言, 落地页组件与编辑器组件同构, 可使用同一套渲染引擎, 保证一致性',
  'company.baidu.project.nichang.name': '百度霓裳',
  'company.baidu.project.nichang.desc':
    '可视化在线编辑平台, 设计师、广告主可在线制作物料, 支持数十种素材组件、支持缩放, 旋转等操作, 对于不同的广告尺寸可联动同时编辑。\r\n技术栈：Backbone, React, Grunt',
  'company.baidu.project.nichang.duty.1':
    '前端主力开发, 负责大部分需求开发和代码重构',
  'company.baidu.project.nichang.duty.2':
    '基于 Backbone 对大部分模块做了 View 与 Model 的分离',
  'company.baidu.project.nichang.duty.3':
    '对于 View 部分使用了 React 对广告素材组件重构, 提升了渲染效率',
  'opensource.title': '开源项目',
  'opensource.desc.1': 'headless form component',
  'opensource.desc.2': 'nuxt 枚举封装',
  'opensource.desc.3': '轻量级 IoC 容器',
  'opensource.desc.4': 'webpack `HtmlWebpackPlugin` 字符串替换插件',
  'share.title': '技术分享',
  'share.1': 'me.js 模块化改造方案',
  'share.2': 'Vite 原理和开发体验',
  'share.3': '配置化表单构建方案',
  'skills.title': '专业技能',
  'skills.1':
    '有大型中后台系统架构设计经验, 能够根据业务实际需求设计系统架构、技术选型',
  'skills.2': '熟悉 Javascript、ES2015+, 能够编写高可用, 高扩展的代码',
  'skills.3':
    '熟悉 Vue 技术栈, 了解 Vue2 Vue3 原理和源码, 贡献过 nuxt.js 社区代码',
  'skills.4': '熟练使用 Git, webpack, lerna, yarn, TypeScript 等工具',
  'skills.5':
    '了解 React, 能够使用框架写出中小型的项目, 了解 Angular、Svelte 等其他前端框架',
  'skills.6':
    '了解前端单元测试, 熟练使用 Jest 测试框架, 能够对 UI 层做简单单元测试',
  'skills.7': '了解 Docker、 K8s、 ci、自动化部署',
  'skills.8':
    '了解 Node.js 开发, 能够编写简单命令行工具、使用 express, koa 编写简单接口',
  'skills.9': '能够阅读英文文档, Github, Stackoverflow 上能够使用英语书面交流',
  'skills.10': '关注最新前端趋势(Micro Frontends、Low-code、Bundleless)',
  'education.title': '教育经历',
  'university.name.1': '华东师范大学',
  'university.major.1': '计算机科学与技术',
  'university.degree.1': '硕士',
  'university.name.2': '上海对外经贸大学',
  'university.major.2': '信息管理与信息系统',
  'university.degree.2': '学士',
};
