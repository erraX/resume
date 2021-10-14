import Icon from '../icons/Icon';

const SkillsPanel = ({ items }) => (
  <>
    <h2 className="text-2xl mb-3 font-bold">
      <Icon type="setting" className="inline align-text-bottom mb-0.5 mr-2" />
      专业技能
    </h2>
    <ul className="list-disc pl-6">
      {items.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  </>
);

export default SkillsPanel;
