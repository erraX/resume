import Icon from '../icons/Icon';
import { useI18nContext } from '../I18nContext';

const SkillsPanel = ({ items }) => {
  const { t } = useI18nContext();
  return (
    <>
      <h2 className="text-2xl mb-3 font-bold">
        <Icon type="setting" className="inline align-text-bottom mb-0.5 mr-2" />
        {t('skills.title')}
      </h2>
      <ul className="list-disc pl-6">
        {items.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </>
  );
};

export default SkillsPanel;
