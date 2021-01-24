import Setting from './Setting';

const SkillsPanel = () => (
  <>
    <h2 className="text-2xl mb-3 font-bold">
      <Setting className="inline align-text-bottom mb-0.5 mr-2" />
      专业技能
    </h2>
    <ul className="list-disc pl-6">
      <li>有大型中后台系统架构设计经验，技术架构契合复杂的业务诉求</li>
      <li>熟悉 Javascript，ES2015+，能够编写高可用，高扩展的代码</li>
      <li>熟悉 Vue 技术栈，了解 Vue2 Vue3 原理和源码，贡献过 nuxt 社区代码</li>
      <li>熟练使用 Git, Webpack, Typescript</li>
      <li>
        了解 React 能够使用框架写出中小型的项目，了解
        Angular、Svelte等其他前端框架
      </li>
      <li>
        了解前端单元测试，熟练使用 jest 测试框架，能够对 UI 层做简单单元测试
      </li>
      <li>了解 http 协议，在前后端联调过程中能够快速排查问题</li>
      <li>了解 Docker, K8s, ci自动化部署</li>
      <li>了解 linux 开发环境，能够使用 Shell 满足日常开发需求</li>
      <li>了解 node.js 后端开发，能够编写简单接口、工具</li>
      <li>能够阅读英文文档、github，stackoverflow上能够使用英语书面交流</li>
      <li>关注最新前端趋势(Micro Frontends、low-code、no-bundle)</li>
    </ul>
  </>
);

export default SkillsPanel;
