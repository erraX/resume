import Company from './Company';
import Project from './Project';
import Bag from './Bag';

const CareerPanel = () => (
  <>
    <h2 className="text-2xl mb-3 font-bold">
      <Bag className="inline align-text-bottom mb-0.5 mr-2" />
      工作&项目经历
    </h2>
    <ul className="list-disc pl-6">
      <li>
        <Company
          name="腾讯"
          rank="资深前端工程师(T9)"
          beginTime="2018.07"
          endTime="now"
          desc="腾讯广告/新闻视频广告/合约广告投放端 前端负责人，负责团队基础技术建设、开发规范制定、技术架构升级"
        />
        <ul className="list-circle pl-4">
          <li className="mb-4">
            <Project
              name="合约广告询量下单系统"
              renderDesc={() => (
                <>
                  <div>
                    给销售使用的合约广告库存询量、下单系统。后台系统，其中表单字段多(几十个)、联动多(多对多、循环、链式、异步联动)、业务逻辑复杂(各种特殊逻辑)
                  </div>
                  <ul className="list-disc pl-5">
                    <li>
                      项目陈旧(10年)，代码难维护，原生 Js
                      开发，前后端未分离、无打包工具、手动部署上线
                    </li>
                    <li>非标准模块化方案，需要人工维护模块间依赖</li>
                    <li>
                      80%
                      以上需求是增加表单字段，但增加一个字段需要修改十几处、涉及
                      6,7 个模块
                    </li>
                  </ul>
                </>
              )}
              items={[
                '模块化改造：使用 Babel 来编译非标准的模块至 commonJs，能够使用npm 管理依赖，使用 webpack 打包',
                '由手动调用接口, Php 编译 js ，上传代码至 git 仓库部署 升级为 通过 ci 线上自动化编译',
                '部分组件/模块使用 Vue 重构，渐进式演进',
                '依赖倒置，使业务字段相关的逻辑内聚，进而方便表单配置化',
                '使用 Rxjs 来处理复杂联动',
                '发了配套工具: 脚手架快速生成表单字段和组件、表单状态管理 Chrome 插件',
              ]}
            />
          </li>
          <li className="mb-4">
            <Project
              name="合约广告投放端三合一"
              desc="整合合约广告(库存、预订、投放系统已存在10年)三端平台，建立统一的库存和预订管理体系"
              items={[
                '技术选型：nuxt + vue + composition api + rxjs',
                '搭建前端团队内部的持续集成，自动化部署工具',
                '前端技术管理：规范制定、概设、CR、发布上线',
                '动态表单配置化方案设计',
              ]}
            />
          </li>
          <li className="mb-4">
            <Project
              name="投放端微服务"
              desc="服务端渲染服务，可接入不同的架构(Vue，nuxt，原生js)至统一的网页中"
              items={[]}
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
              name="百意DSP平台"
              desc="网盟唯一 DSP 平台，日均消费500W+，一站式投放平台，为企业提供品效合一的程序化广告购买服务。"
              items={[
                '负责架构升级(jQuery -> MVC) 使用各模块使用 MVC 封装',
                '重写了部分底层模块，表单校验，数据绑定等',
              ]}
            />
          </li>
          <li>
            <Project
              name="网盟广告投放移动端SDK"
              desc="负责请求、渲染广告，对接内容联盟、信息流广告、LU DSP等，日均消费400W+"
              items={[
                '对投放脚本重构，减小代码体积，提高运行效率',
                '优化了信息流广告渲染速度，提高了收入',
              ]}
            />
          </li>
          <li>
            <Project
              name="落地页建站平台"
              desc="可视化编辑平台，帮助广告主快速搭建 H5 落地页，组件丰富，并提供表单手机统计功能，广告主可在平台上查看并下载表单数据"
              items={[
                '前端负责人，负责技术选型、框架搭建',
                '负责前端交互和样式设计',
                '使用 React + Redux + Webpack 开发，根据业务需求封装多个库',
                '落地页组件与编辑器同构，落地页使用后端渲染',
              ]}
            />
          </li>
          <li>
            <Project
              name="百度霓裳"
              desc="可视化编辑平台。设计师、广告主可在线制作无聊，可联动多个尺寸同时编辑"
              items={[
                '前端负责人，负责部分模块重构/重写',
                '项目架构升级： Backbone -> React，优化渲染效率',
              ]}
            />
          </li>
        </ul>
      </li>
    </ul>
  </>
);

export default CareerPanel;
