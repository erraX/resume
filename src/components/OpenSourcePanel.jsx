const OpenSourcePanel = () => (
  <div className="mb-8">
    <h2 className="text-2xl mb-3">03. 开源项目</h2>
    <div className="border-b mb-3 border-gray-800 border-opacity-25"></div>
    <ul className="list-disc pl-6">
      <li>
        `html-string-replace-webpack-plugin` - Webpack `HtmlWebpackPlugin`
        字符串替换插件
      </li>
      <li>`inversion.js` 轻量级 IoC 容器</li>
      <li>`redux-timer` redux 中间件，用于统计 rerender 时间</li>
      <li>`form-after-all` headless form component</li>
      <li>`v-rx` vue composition hooks Rxjs 封装</li>
      <li>`v-hooks` vue composition hooks 常用 hooks 封装</li>
      <li>`nuxt-router-module` nuxt 自定义路由配置插件</li>
      <li>`nuxt-enum-module` nuxt 枚举封装</li>
    </ul>
  </div>
);

export default OpenSourcePanel;
