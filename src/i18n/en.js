// eslint-disable-next-line import/no-anonymous-default-export
export default {
  year: 'years',
  'infomation.name': 'Minjie Ni',
  'infomation.title': 'Web Front-end Engineer',
  'career.title': 'Work',
  'company.alibaba.name': 'Alibaba',
  'company.alibaba.rank': 'Front End Architect (P7)',
  'company.alibaba.desc':
    'Teambition / Aliyun Drive frone-end architect, be responsible for infrastructure construction, performance optimization and architecture design.',
  'company.alibaba.project.teambition.name': 'Teambition',
  'company.alibaba.project.teambition.desc':
    'Large-scale collaborative software like jira, which contains agile management, schedule management, gantt chart, etc.',
  'company.alibaba.project.teambition.duty.1':
    'Construct error and performance monitoring infrastructure, monitor sdk design and development',
  'company.alibaba.project.teambition.duty.2':
    'Participate in micro front-end refactor, be able to flexibly adapt app loading in multi-platform (Web, DingTalk)',
  'company.alibaba.project.teambition.duty.3':
    'Optimize dingtalk login performance. Bring about 30% login speed increasement',
  'company.alibaba.project.aliyundrive.name': 'Aliyun Drive',
  'company.alibaba.project.aliyundrive.desc':
    'Cross-platform cloud network disk, which could upload/download files, share files.',
  'company.alibaba.project.aliyundrive.duty.1':
    'Land monitoring infrastructure',
  'company.alibaba.project.aliyundrive.duty.2':
    'Refactor client file transfer module',
  'company.tencent.name': 'Tencent',
  'company.tencent.rank': 'Senior Front End Engineer (T9)',
  'company.tencent.desc':
    'Tencent Contract Advertisement front-end tech leader, project manager, be responsible for infrastructure construction, drafting team development principles, overhauling architect, requirement review, etc.\r\nClosely work with PM, designer and back-end engineer to land product. Participated in developing most projects of the team.',
  'company.tencent.project.inquiry.name':
    'Contract Advertisement Inquiry Platform',
  'company.tencent.project.inquiry.desc':
    "Legacy project(10 years old), developed by vanilla js, non-standard module, no modern bundler, and front-end back-end are not separated. \r\nAnd the business logic is complicated because of thousands ad forms.\r\nThere are huge amount of form fields, it's cascade is complex(chian, multi to multi, circle, async cascade) and have a lot of special logic to handle.",
  'company.tencent.project.inquiry.duty.1':
    'Modular refactoring: transpile non-standard modules to CommonJS, therefore could using npm packages and bundle with Webpack',
  'company.tencent.project.inquiry.duty.2':
    'Automatically delopy: refactor from calling PHP api to build js, upload to git repo and deploy manually to build, depoly automatically by CI pipeline',
  'company.tencent.project.inquiry.duty.3':
    'Frameworks upgrade: Rewrite partial components by Vue.js, makes codebases more maintainable and extensible',
  'company.tencent.project.inquiry.duty.4':
    'Efficiency boosting: refactor form by dependency inversion, adding a form fields originally 20 places need to be modified, now only 3 places(field config, component type, data binding)',
  'company.tencent.project.inquiry.duty.5':
    'Non-invasive refactoring: transform normal events to RxJS observable stream to handle complex form fields cascade and Asynchronous race problem',
  'company.tencent.project.inquiry.duty.6':
    'Infrastructure construction: scaffold for generating form fields, chrome extension for form state visualization',
  'company.tencent.threeone.name': 'Contract Advertisement One-stop Platform',
  'company.tencent.threeone.desc':
    'Mix three legacy platform(inventory, reserve, delivery platform) into one, large-scale project, complicated business logic.',
  'company.tencent.threeone.duty.1':
    'Build the entire architecture from scratch to launch, lead 4 front-end developer, and contribute 70% of the code at the beginning of the project',
  'company.tencent.threeone.duty.2':
    'Be responsible for priciples of development, Git branch model design, requirement review, UI/UE require, CR, CI deployment, etc',
  'company.tencent.threeone.duty.3':
    'Framework selection：Monorepo + Nuxt.js + vue-composition-api + RxJS + InversifyJS',
  'company.tencent.threeone.duty.4':
    'Abstract some infrastructure with nuxt.js and vue-composition-api, include configurable router, authority management, SSR pre-fetch component, api requester, mock middleware, etc',
  'company.tencent.threeone.duty.5':
    'Core modules(form and detail pages) are built with IoC, headless component(like formik), and using RxJS to handle complex form cascade',
  'company.baidu.name': 'Baidu',
  'company.baidu.rank': 'Junior Front End Engineer (T4)',
  'company.baidu.desc':
    'Develped "to Customer" and "to Business" projects, mobile websites, designed large-scale project architect, maintained ancient project.',
  'company.baidu.project.dsp.name': 'BaiYi Demand-side Platform',
  'company.baidu.project.dsp.desc':
    'The only DSP platform in Baidu Advertising alliance department, five million RMB daily consumption. Developed by vanillaJS, MVC pattern.',
  'company.baidu.project.dsp.duty.1':
    'Refactor architecture from jQuery + Template engine pattern to MVC pattern(like Backbone.js)',
  'company.baidu.project.dsp.duty.2':
    'Encapsulate api requester, dialog, form validation, event center mdoule',
  'company.baidu.project.landing.name': 'Landing Page Online Maker',
  'company.baidu.project.landing.desc':
    'Online web page maker, which help advertisers make HTML5 landing page fast. There are many components can be used in Form. Advertisers could analyze statistics on the platform or download it.',
  'company.baidu.project.landing.duty.1':
    'As a Front-end leader, design UI/UE, architecture,  from scratch to launch',
  'company.baidu.project.landing.duty.2': 'Frameworks are React + Redux',
  'company.baidu.project.landing.duty.3':
    'Abstract some infrastructure module, like minify Chinese fonts, Redux performance monitoring middleware',
  'company.baidu.project.landing.duty.4':
    'Design JSON schema and render engine to describe elements of landing page, and render universal web page.',
  'company.baidu.project.nichang.name': 'Advertisement Material Online Maker',
  'company.baidu.project.nichang.desc':
    'Online ad material maker, which help advertisers or designer make ad material(image). Advertisers could zoom, drag, rotate materials on canvas, and difference material ratio(16:9 or 4:3, etc...) can cascade according to their ratio.',
  'company.baidu.project.nichang.duty.1':
    'As a main front-end developer, be responsible for most requirement.',
  'company.baidu.project.nichang.duty.2': `Separated most modules' "View" and "Model" by Backbone.js`,
  'company.baidu.project.nichang.duty.3': `Refactored core components' "View" by React, optimized render performance`,
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
    'Experience developing large-scale project from scratch to launch, especially architecture design, framework selection',
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
    'Be concerned with the latest front-end trends(Micro Frontends、Low-code、Bundleless)',
  'education.title': 'Education',
  'university.name.1': 'East China Normal University',
  'university.major.1': 'Computer Science and Technology',
  'university.degree.1': 'Master',
  'university.name.2':
    'Shanghai University of International Business and Economics',
  'university.major.2': 'Information Management and Information System',
  'university.degree.2': 'Bachelor',
};
