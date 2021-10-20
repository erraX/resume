import React from 'react';
import Icon from '../icons/Icon';
import { useI18nContext } from '../I18nContext';

export default function Header({
  name,
  title,
  mobile,
  email,
  experience,
  github,
}) {
  const { t } = useI18nContext();
  return (
    <div className="h-auto pt-5 text-gray-800 text-left text-sm">
      <h1 className="mb-2">
        <span className="text-4xl font-bold align-text-bottom">{name}</span>
        <span className="ml-2 text-sm align-text-bottom font-normal">
          {title} {experience}
          {t('year')}
        </span>
      </h1>
      <div>
        <Icon type="phoneCall" className="inline mr-2" />
        {mobile}
      </div>
      <div>
        <Icon type="email" className="inline mr-2" />
        <a href={`mailto: ${email}`}>{email}</a>
      </div>
      <a href={`http://${github}`} target="_blank" rel="noreferrer">
        <Icon type="github" className="inline mr-2" />
        {github}
      </a>
    </div>
  );
}
