import PencilIcon from './PencilIcon';

const SkillsPanel = () => (
  <div className="mb-8">
    <h2 className="text-2xl mb-3">
      01. <PencilIcon className="inline align-text-bottom" />
      专业技能
    </h2>
    <div className="border-b mb-3 border-gray-800 border-opacity-25"></div>
    <ul className="list-disc pl-6">
      <li>
        <div className="text-lg">前端:</div>
        <ul className="list-circle pl-6">
          <li>Javascript 基础较扎实，能够编写高可用，高扩展的代码</li>
          <li>有大型中后台系统架构设计经验，技术架构契合复杂的业务诉求</li>
          <li>
            熟悉 Vue 技术栈，了解 Vue2 Vue3 原理和源码，贡献过 nuxt 社区代码
          </li>
          <li>了解 React 能够使用框架写出中小型的项目</li>
          <li>了解 Angular、Svelte等其他前端框架</li>
          <li>了解前端单元测试，熟练使用 jest 测试框架</li>
          <li>了解 Docker, K8s, ci自动化部署</li>
          <li>熟练使用 Git, Webpack, Typescript, ...</li>
          <li>
            关注最新前端趋势(Micro Frontends、low-code、no-bundle)并有所实践
          </li>
        </ul>
      </li>
      <li>
        <div className="text-lg">后端:</div>
        <ul className="list-circle pl-6">
          <li>了解 http 协议，在前后端联调过程中能够快速排查问题</li>
          <li>能够使用 Node.js 编写简单接口</li>
          <li>能够使用 Shell 满足日常开发需求</li>
        </ul>
      </li>
      <li>
        <div className="text-lg">其他:</div>
        <ul className="list-circle pl-6">
          <li>
            拥有一定的 UI/UE 设计能力，在缺乏 UI/UE 设计的项目中能够满足业务诉求
          </li>
          <li>能够阅读英文文档、github，stackoverflow上能够使用英语书面交流</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default SkillsPanel;
