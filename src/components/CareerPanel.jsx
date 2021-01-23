const CareerPanel = () => (
  <div className="mb-8">
    <h2 className="text-2xl mb-3">02. 工作&项目经历</h2>
    <div className="border-b mb-3 border-gray-800 border-opacity-25"></div>
    <ul className="list-disc pl-6">
      <li>
        <div className="text-lg">腾讯 | T9 | 2018.07 ~ 至今</div>
        <div>
          腾讯广告 - 新闻视频广告 - 合约广告投放端
          前端负责人，负责团队基础技术建设、技术架构升级、技术方案评估
        </div>
        <ul className="list-circle pl-6">
          <li>
            <h2>合约广告询量下单系统</h2>
            <div>给销售使用的后台合约广告询量、下单系统</div>
            <ul className="list-circle pl-6">
              <li>背景：项目代码陈旧(10年)，Js模块非标准化、手动部署上线</li>
              <li>
                模块化改造：使用 Babel 来编译非规范的js模块至commonJs，能够使用
                npm 管理依赖，使用 Webpack 打包
              </li>
              <li>
                自动化部署: php调用接口编译，上传代码至git ->
                ci系统线上自动化编译
              </li>
              <li>架构升级：部分组件/模块使用 Vue 重构</li>
              <li>架构升级：控制反转，配置化表单</li>
              <li>架构升级：使用 rxjs 来处理复杂异步联动</li>
              <li>页面加载性能调优</li>
              <li>为项目开发了配套工具，提高开发/调试效率：cli, chrome 插件</li>
            </ul>
          </li>
          <li>
            <h2>合约广告投放端三合一</h2>
            <div>
              整合合约广告(库存、预订、投放系统已存在10年)三端平台，建立统一的库存和预订管理体系
            </div>
            <ul className="list-circle pl-6">
              <li>技术选型：nuxt + vue + composition api + rxjs</li>
              <li>搭建前端团队内部的持续集成，自动化部署工具</li>
              <li>前端技术管理：规范制定、概设、CR、发布上线</li>
              <li>动态表单配置化方案设计</li>
            </ul>
          </li>
          <li>
            <h2>投放端微服务</h2>
            <div>
              服务端渲染服务，可接入不同的架构(Vue，nuxt，原生js)至统一的网页中
            </div>
            <ul className="list-circle pl-6">
              <li></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <div className="text-lg">百度 | T4 | 2015.07 ~ 2018.07</div>
        <div>
          在职期间开发过
          C端、B端、移动端项目、设计过大型复杂项目架构、维护过祖传项目。
        </div>
        <ul className="list-circle pl-6">
          <li>
            <h2>百意DSP平台</h2>
            <div>
              网盟唯一 DSP 平台，日均消费
              500W+，一站式投放平台，为企业提供品效合一的程序化广告购买服务。
            </div>
            <ul className="list-circle pl-6">
              <li>负责架构升级(jQuery -> MVC) 使用各模块使用 MVC 封装</li>
              <li>重写了部分底层模块，表单校验，数据绑定等</li>
            </ul>
          </li>
          <li>
            <h2>网盟广告投放移动端SDK</h2>
            <div>
              负责请求、渲染广告，对接内容联盟、信息流广告、LU DSP等，日均消费
              400W+
            </div>
            <ul className="list-circle pl-6">
              <li>对投放脚本重构，减小代码体积，提高运行效率</li>
              <li>优化了信息流广告渲染速度，提高了收入</li>
            </ul>
          </li>
          <li>
            <h2>落地页建站平台</h2>
            <div>
              可视化编辑平台，帮助广告主快速搭建 H5
              落地页，组件丰富，并提供表单手机统计功能，广告主可在平台上查看并下载表单数据
            </div>
            <ul className="list-circle pl-6">
              <li>前端负责人，负责技术选型、框架搭建</li>
              <li>负责前端交互和样式设计</li>
              <li>使用 React + Redux + Webpack 开发，根据业务需求封装多个库</li>
              <li>落地页组件与编辑器同构，落地页使用后端渲染</li>
            </ul>
          </li>
          <li>
            <h2>百度霓裳</h2>
            <div>
              可视化编辑平台。设计师、广告主可在线制作无聊，可联动多个尺寸同时编辑
            </div>
            <ul className="list-circle pl-6">
              <li>前端负责人，负责部分模块重构/重写</li>
              <li>项目架构升级： Backbone -> React，优化渲染效率</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default CareerPanel;
