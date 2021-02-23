import Header from './components/Header';
import SkillsPanel from './components/SkillsPanel';
import CareerPanel from './components/CareerPanel';
import OpenSourcePanel from './components/OpenSourcePanel';
import SharePanel from './components/SharePanel';
import EduationPanel from './components/EduationPanel';

export default function Resume() {
  return (
    <>
      <Header
        name="倪敏杰"
        title="Web 前端工程师"
        mobile="17717375633"
        experience="5"
        email="niminjiecide@outlook.com"
        github={'github.com/errax'}
      />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <CareerPanel />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <OpenSourcePanel />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <SharePanel />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <SkillsPanel
        items={[
          '有大型中后台系统架构设计经验，能够根据业务实际需求设计系统架构、技术选型',
          '熟悉 Javascript、ES2015+，能够编写高可用，高扩展的代码',
          '熟悉 Vue 技术栈，了解 Vue2 Vue3 原理和源码，贡献过 nuxt.js 社区代码',
          '熟练使用 Git, webpack, lerna, yarn, TypeScript 等工具',
          '了解 React，能够使用框架写出中小型的项目，了解 Angular、Svelte 等其他前端框架',
          '了解前端单元测试，熟练使用 Jest 测试框架，能够对 UI 层做简单单元测试',
          '了解 Docker、 K8s、 ci、自动化部署',
          '了解 Node.js 开发，能够编写简单命令行工具、使用 express, koa 编写简单接口',
          '能够阅读英文文档，Github，Stackoverflow 上能够使用英语书面交流',
          '关注最新前端趋势(Micro Frontends、Low-code、Bundleless)',
        ]}
      />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <EduationPanel />
    </>
  );
}
