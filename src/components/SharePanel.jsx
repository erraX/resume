import Keynote from './Keynote';

const SharePanel = () => (
  <>
    <h2 className="text-2xl mb-3 font-bold">
      <Keynote className="inline align-text-bottom mb-0.5 mr-2" />
      技术分享
    </h2>
    <ul className="list-disc pl-6">
      <li className="mb-3">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500"
        >
          me.js 模块化改造
        </a>
      </li>
      <li className="mb-3">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500"
        >
          使用 vite 开发
        </a>
      </li>
      <li className="mb-3">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500"
        >
          复杂表单构建思路
        </a>
      </li>
    </ul>
  </>
);

export default SharePanel;