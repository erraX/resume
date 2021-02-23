import Company from './Company';
import Project from './Project';
import Bag from './Bag';

const CareerPanel = () => (
  <>
    <h2 className="text-2xl mb-3 font-bold">
      <Bag className="inline align-text-bottom mb-0.5 mr-2" />
      工作&主要项目经历
    </h2>
    <ul className="list-disc pl-6">
      <li>
        <Company
          name="腾讯"
          rank="资深前端工程师(T9)"
          beginTime="2018.07"
          endTime="now"
          desc="腾讯广告/新闻视频广告/合约广告投放端 前端负责人、技术PM，负责团队基础技术建设、开发规范制定、技术架构演进、需求概要设计，与产品、设计、后端推动产品落地，参与了团队大部分项目的开发"
        />
        <ul className="list-circle pl-4">
          <li className="mb-4">
            <Project
              name="合约广告询量下单系统"
              renderDesc={() => (
                <div>
                  合约广告库存询量、下单后台管理系统。负责项目日常迭代、重构、架构升级、工程化改造、开发提效等工作。
                  其项目陈旧(10年)，使用 vanillaJS
                  开发、非标准模块化方案、前后端未分离、无打包工具、手动部署上线。
                  业务逻辑复杂，其中表单字段多(几十个)、联动多(多对多、循环、链式、异步联动)、各种特殊逻辑
                </div>
              )}
              items={[
                '模块化改造：使用 babel 来编译非标准的模块至 CommonJS，能够使用 npm 管理依赖包、使用 Webpack 打包',
                '自动化部署：由手动调用接口, Php 编译 JS ，上传代码至 Git 仓库部署，升级为通过 CI 线上自动化编译',
                '框架升级：部分组件/模块使用 Vue 重写，升级，提高代码维护性、支持更多交互方式',
                '开发提效：由原来增加一个字段需要修改 20+ 处，使用依赖倒置，只需修改 3个 模块(字段配置、组件、数据绑定)',
                '无侵入重构：把组件事件转换为 RxJS 事件流，来处理表单复杂联动、异步竞态问题',
                '基础设施建设：脚手架快速生成表单字段和组件、表单状态管理 Chrome 插件',
              ]}
            />
          </li>
          <li className="mb-4">
            <Project
              name="合约广告投放端三合一"
              desc="合约广告(库存、预订、投放系统三个10年的老系统)的后台管理系统整合，大型项目、业务逻辑复杂"
              items={[
                '从 0 到 1 搭建整个项目架构，带领4个前端开发，项目初期贡献了 70% 的代码',
                '负责团队开发规范制定、Git 分支模型设计、设计评审、需求概设、CR、CI自动化部署等工作',
                '技术选型：Monorepo + Nuxt.js + vue-composition-api + RxJS + InversifyJS',
                '对 Nuxt.js 和 vue-composition-api 进行了二次封装，包括路由、权限、服务端预取数据、API请求配置、mock等模块',
                '对于核心模块：表单页，设计了表单配置化方案，开发了headless form(类似formik)来维护表单状态，使用 IoC 的方式管理各个模块， RxJS 处理复杂联动',
              ]}
            />
          </li>
        </ul>
      </li>
      <li>
        <Company
          name="百度"
          rank="高级前端工程师(T4)"
          beginTime="2015.07"
          endTime="2018.07"
          desc="在职期间开发过 C端、B端、移动端项目、设计过大型复杂项目架构、维护过祖传项目"
        />
        <ul className="list-circle pl-4">
          <li>
            <Project
              name="百意 DSP 平台"
              desc="网盟唯一 DSP 平台，日均消费500W+，一站式投放平台，为企业提供品效合一的程序化广告购买服务。"
              items={[
                '项目架构较老(jQuery + 模版引擎渲染)，对页面进行了 M(V+C) 分离(类似Backbone)',
                '基础模块封装：Api 请求、弹窗视图、表单校验、事件中心等',
              ]}
            />
          </li>
          {/*<li>*/}
          {/*  <Project*/}
          {/*    name="网盟广告投放移动端SDK"*/}
          {/*    desc="接入 WebView，负责请求、渲染广告，对接内容联盟、信息流广告、LU DSP等，日均消费400W+"*/}
          {/*    items={[*/}
          {/*      '前端负责人，负责维护 JsSdk 投放脚本、JsBridge',*/}
          {/*      '对第三方媒体做技术支持，帮助其更快的接入，提供性能优化建议，提高了媒体的收入',*/}
          {/*      '推动广告渲染实验，为公司带来实际收入',*/}
          {/*    ]}*/}
          {/*  />*/}
          {/*</li>*/}
          <li>
            <Project
              name="落地页建站平台"
              desc="可视化编辑平台，帮助广告主快速搭建 H5 落地页，组件丰富，并提供表单手机统计功能，广告主可在平台上查看并下载表单数据"
              items={[
                '前端负责人，从 0 到 1 负责技术选型、框架搭建、前端交互设计',
                '使用 React + Redux 开发',
                '根据业务需求，封装多个库：最小化字体打包、Redux 中间件统计渲染时间等',
                '设计组件统一JSON Schema语言，落地页组件与编辑器组件同构，可使用同一套渲染引擎，保证一致性',
              ]}
            />
          </li>
          <li>
            <Project
              name="百度霓裳"
              desc="可视化在线编辑平台，设计师、广告主可在线制作物料，支持数十种素材组件、支持缩放，旋转等操作，对于不同的广告尺寸可联动同时编辑"
              items={[
                '前端主力开发，负责大部分需求开发和代码重构',
                '基于 Backbone 对大部分模块做了 View 与 Model 的分离',
                '对于 View 部分使用了 React 对 广告素材组件 重构，提升了渲染效率',
              ]}
            />
          </li>
        </ul>
      </li>
    </ul>
  </>
);

export default CareerPanel;
