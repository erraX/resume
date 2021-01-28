import Education from './Education';

const EduationPanel = () => (
  <>
    <h2 className="text-2xl mb-3 font-bold">
      <Education className="inline align-text-bottom mb-0.5 mr-2" />
      教育经历
    </h2>
    <ul className="list-disc pl-6">
      <li className="mb-3">
        <div className="flex mb-2 w-1/3 items-center">
          <span className="flex-1 text-xl font-bold">华东师范大学</span>
          <span className="flex-none text-sm">2013 - 2016</span>
        </div>
        <div className="text-sm">计算机科学与技术 / 硕士</div>
      </li>
      <li className="mb-3">
        <div className="flex mb-2 w-1/3 items-center">
          <span className="flex-1 text-xl font-bold">上海对外经贸大学</span>
          <span className="flex-none text-sm">2009 - 2013</span>
        </div>
        <div className="text-sm">信息管理与信息系统 / 学士</div>
      </li>
    </ul>
  </>
);

export default EduationPanel;
