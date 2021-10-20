import Icon from '../icons/Icon';
import { useI18nContext } from '../I18nContext';

const SharePanel = ({ shares }) => {
  const { t } = useI18nContext();
  return (
    <>
      <h2 className="text-2xl mb-3 font-bold">
        <Icon type="keynote" className="inline align-text-bottom mb-0.5 mr-2" />
        {t('share.title')}
      </h2>
      <ul className="list-disc pl-6">
        {shares.map(({ name, link }) => (
          <li key={link} className="mb-1">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SharePanel;
