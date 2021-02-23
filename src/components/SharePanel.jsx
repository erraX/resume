import Keynote from './Keynote';

const SharePanel = () => (
  <>
    <h2 className="text-2xl mb-3 font-bold">
      <Keynote className="inline align-text-bottom mb-0.5 mr-2" />
      技术分享
    </h2>
    <ul className="list-disc pl-6">
      <li className="mb-1">
        <a
          href="/slides/bi-module.pdf"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500"
        >
          me.js 模块化改造方案
        </a>
      </li>
      <li className="mb-1">
        <a
          href="/slides/vite.pdf"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500"
        >
          Vite 原理和开发体验
        </a>
      </li>
      <li className="mb-1">
        <a
          href="/slides/form.pdf"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500"
        >
          配置化表单构建方案
        </a>
      </li>
    </ul>
  </>
);

export default SharePanel;
