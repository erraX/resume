import Icon from '../icons/Icon';
import { useI18nContext } from '../I18nContext';

const EduationPanel = ({ educations }) => {
  const { t } = useI18nContext();
  return (
    <>
      <h2 className="text-2xl mb-3 font-bold">
        <Icon
          type="education"
          className="inline align-text-bottom mb-0.5 mr-2"
        />
        {t('education.title')}
      </h2>
      <ul className="list-disc pl-6">
        {educations.map(({ school, start, end, major, degree }) => (
          <li key={school} className="mb-3">
            <div className="flex mb-2 items-center">
              <span className="flex-1 text-xl font-bold">{school}</span>
              <span className="flex-none text-sm">
                {start} - {end}
              </span>
            </div>
            <div className="text-sm">
              {major} / {degree}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EduationPanel;
