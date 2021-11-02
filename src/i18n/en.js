// eslint-disable-next-line import/no-anonymous-default-export
export default {
  year: 'years',
  experience: "with 5 Years' Experience",
  'infomation.name': 'Minjie Ni',
  'infomation.title': 'Web Front-end Engineer',
  'career.title': 'Work',
  'company.alibaba.name': 'Alibaba',
  'company.alibaba.rank': 'Front End Architect (P7)',
  'company.alibaba.desc':
    'Teambition / Aliyun Drive team front-end architect.\r\nResponsible for infrastructure construction, performance, architecture and front-end engineer optimization.',
  'company.alibaba.project.teambition.name': 'Teambition',
  'company.alibaba.project.teambition.desc':
    'Large-scale collaborative software like jira, which contains various functions, such as agile, schedule management, gantt chart, etc.\r\nTech stack: CoffeeScript, TypeScript, Backbone, React, RxJS, Qiankun, lerna.',
  'company.alibaba.project.teambition.duty.1':
    'Responsible for team monitoring infrastructure construction, monitoring sdk design and development, and correcting abnormal monitoring index',
  'company.alibaba.project.teambition.duty.2':
    'Monitoring SDK implement API abstract layer which is transparent for sdk users, and be able to multiple writing. Extended function are scaled by plugin module, such as FMP, dropped frame detection, global uncaught promise handler, etc.',
  'company.alibaba.project.teambition.duty.3':
    'Optimize dingtalk login performance. Bring about 30% login speed increasement',
  'company.alibaba.project.teambition.duty.4':
    'Participate in the refactoring of micro front-end. By using IoC to initiate runtime modules, it could be able to flexibly execute different logic according to platforms(Web, DingTalk)',
  'company.alibaba.project.aliyundrive.name': 'Aliyun Drive',
  'company.alibaba.project.aliyundrive.desc':
    'Cross-platform cloud network disk, which could upload/download/share files.\r\nTech stack: Electron, React, MobX, RxJS, lerna.',
  'company.alibaba.project.aliyundrive.duty.1':
    'Lead and push the monitoring infrastructure, all of the client platforms have been used monitoring SDK. Moreover, there are some business monitoring plugins, alert rules, dashboard, etc.',
  'company.alibaba.project.aliyundrive.duty.2':
    'Refactor client core module of file transfer by RxJs, time slicing rendering, lead to rendering performance optimization in huge amount of file transfer scenario.',
  'company.tencent.name': 'Tencent',
  'company.tencent.rank': 'Senior Front End Engineer (T9)',
  'company.tencent.desc':
    "Tencent Contract Advertisement team front-end tech leader.\r\nResponsible for the team's infrastructure construction, development principles, architecture evolution and requirement outline design etc, as well as the implementation of requirement.",
  'company.tencent.project.inquiry.name':
    'Contract Advertising Inquiry and Order Platform',
  'company.tencent.project.inquiry.desc':
    'Sellers could inquiry future advertisement inventory and reserve and replenish inventory. \r\nThe original platform is a legacy project(10 years old). Developed by vanilla js, it has many problems. For example, the platform uses non-standard module, no modern bundler, and front-end back-end are not separated. \r\nAnd the business logic is complicated because of thousands advertising forms. So it is hard to maintain and evolve.',
  'company.tencent.project.inquiry.duty.1':
    'Modular refactoring: transpile non-standard modules to CommonJS by babel plugin, and be able to use npm packages and bundle with Webpack',
  'company.tencent.project.inquiry.duty.2':
    'Automatic delopyment: manually call PHP api to bundle js, and upload output to git repo to deploy, upgrade to build, depoly automatically by CI/CD',
  'company.tencent.project.inquiry.duty.3':
    'Frameworks upgrade: Rewrite partial components by Vue.js, makes codebases more maintainable and extensible',
  'company.tencent.project.inquiry.duty.4':
    'Efficiency boosting: refactor form module by dependency inversion. To add a form field, originally need to modify 20 places, but now only need to modify 3 places (field config, component type, data binding)',
  'company.tencent.project.inquiry.duty.5':
    'Non-intrusive refactoring: convert normal events to RxJS observable stream to deal with complex form fields linkage and asynchronous race problem',
  'company.tencent.project.inquiry.duty.6':
    "Infrastructure construction: scaffold for quickly generating form fields' components and models, chrome extension for form state visualization",
  'company.tencent.threeone.name':
    'Contract Advertisement Three-in-one Platform',
  'company.tencent.threeone.desc':
    'Integrate three out-of-date advertising platforms (advertisement inventory, order and delivery platform) into one complete, large-scale platform which provides one-stop services: sellers could inquiry, reserve, order, replenish at platform.\r\nTech stack: Vue2 + vue-composition-api, Nuxt.js, RxJS, InversifyJS, lerna.',
  'company.tencent.threeone.duty.1':
    'Build the entire architecture from scratch to launch, lead 4 front-end developer, and contribute 70% of the code at the early stage of the project, released initial version in three months',
  'company.tencent.threeone.duty.2':
    'Responsible for making team development priciples, designing Git workflow, reviewing design and requirements, code review, CI/CD deployment etc',
  'company.tencent.threeone.duty.3':
    'Abstract basic modules with nuxt.js and vue-composition-api, include configurable router, permission management, SSR pre-fetch component, api requester, mock middleware, etc',
  'company.tencent.threeone.duty.4':
    'Core modules(form and detail pages) are built with IoC, headless component(like formik), and using RxJS to dealwith complex form linkage',
  'company.baidu.name': 'Baidu',
  'company.baidu.rank': 'Junior Front End Engineer (T4)',
  'company.baidu.desc':
    'Responsible for many "B2C" and "B2B" projects development, include mobile advertising sdk, large-scale admin platform, online maker, etc. And also design architecture for new projects, maintain legacy projects.',
  'company.baidu.project.dsp.name': 'BaiYi Demand-side Platform',
  'company.baidu.project.dsp.desc':
    'The only DSP platform in WangMeng department, with an average daily consumption of five million RMB. It is a one-stop delivery platform, which provides advertiser with programmed advertising purchase services.\r\nTech stack: jQuery, ER(MVC framework in Baidu), Edp(like gulp).',
  'company.baidu.project.dsp.duty.1':
    'Refactor architecture from jQuery + Template engine pattern to MVC pattern(like Backbone.js)',
  'company.baidu.project.dsp.duty.2':
    'Encapsulate basic modules, such as api requester, dialog business component, form validation, event center module',
  'company.baidu.project.dsp.duty.3':
    'Encapsulate business modules, such as ListModel and ListView',
  'company.baidu.project.landing.name': 'Landing Page Online Maker',
  'company.baidu.project.landing.desc':
    'This is the visual editing platform, which helps advertisers quickly build H5 landing pages with rich components, and provides form data statistics. Advertisers can view and download these form data.\r\nTech stack: React, Redux, SSR, Ant Design.',
  'company.baidu.project.landing.duty.1':
    'Key developer, responsible for UI/UE design, tech stack selection, architecture design from scratch to launch',
  'company.baidu.project.landing.duty.2':
    'Encapsulate several basic modules according to requirements: minify Chinese fonts, Redux performance monitoring middleware, etc.',
  'company.baidu.project.landing.duty.3':
    'Design JSON schema which describe rendering logic of landing page. Render engine render consistent elements both in online maker and landing page',
  'company.baidu.project.nichang.name': 'Advertising Material Online Maker',
  'company.baidu.project.nichang.desc':
    'This is the visual online advertising material making platform. Designers and advertisers can make materials online, it supports dozens of material components. Advertisers can zoom, scale, rotate and drag on canvas, and can cascade different advertising sizes automatically at the same time.\r\nTech stack: Backbone, React, Grunt.',
  'company.baidu.project.nichang.duty.1':
    'Key developer, responsible for most requirement and code refactoring.',
  'company.baidu.project.nichang.duty.2': `Separated most modules' "View" and "Model" by Backbone.js`,
  'company.baidu.project.nichang.duty.3': `Refactored core components' "View" by React, optimized rendering performance`,
  'opensource.title': 'OpenSource',
  'opensource.desc.1': 'headless form component',
  'opensource.desc.2':
    'nuxt enum plugin, convenient to use enum all over the codebases',
  'opensource.desc.3': 'lightweight IoC container',
  'opensource.desc.4':
    'webpack `HtmlWebpackPlugin` plugin for string replacement',
  'share.title': 'Talks',
  'share.1': 'Me.js module refactoring',
  'share.2': 'Dive into vite development',
  'share.3': 'Scalable and configurable form',
  'skills.title': 'Skills',
  'skills.1':
    'Experience in developing large-scale project from scratch to launch, especially architecture design, framework selection',
  'skills.2':
    'Experience with vanilla Javascript, ES2015+, be able to write readable, extensible code',
  'skills.3':
    'Experience with Vue stack, understand vue2 or vue3 concepts, contributed to `axios-nuxt`',
  'skills.4': 'Familiar with Git, Webpack, lerna, yarn, TypeScript, etc',
  'skills.5':
    'Understand React，be able to build large-scale projects on my own, also understand other frameworkds like Angular、Svelte',
  'skills.6':
    'Understand unit test and framework like Jest, could write test cases for UI',
  'skills.7': 'Understand Docker, K8s, ci/cd',
  'skills.8':
    'Understand Node.js, be able to code cli tools, build express or koa apis',
  'skills.9':
    'Be able to read English documents, talk on Github or Stackoverflow',
  'skills.10':
    'Following the latest front-end trends(Micro Frontends、Low-code、Bundleless)',
  'education.title': 'Education',
  'university.name.1': 'East China Normal University',
  'university.major.1': 'Computer Science and Technology',
  'university.degree.1': 'Master',
  'university.name.2':
    'Shanghai University of International Business and Economics',
  'university.major.2': 'Information Management and Information System',
  'university.degree.2': 'Bachelor',
};
