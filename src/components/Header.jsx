import React from 'react';
import PhoneCall from './PhoneCall';
import Email from './Email';
import Github from './Github';

export default function Header({
  name,
  title,
  mobile,
  email,
  experience,
  github,
}) {
  return (
    <div className="h-auto pt-5 text-gray-800 text-left text-sm">
      <h1 className="mb-2">
        <span className="text-4xl font-bold align-text-bottom">{name}</span>
        <span className="ml-2 text-sm align-text-bottom font-normal">
          {title} {experience}年
        </span>
      </h1>
      <div>
        <PhoneCall className="inline mr-2" />
        {mobile}
      </div>
      <div>
        <Email className="inline mr-2" />
        <a href={`mailto: ${email}`}>{email}</a>
      </div>
      <a href={`http://${github}`} target="_blank" rel="noreferrer">
        <Github className="inline mr-2" />
        {github}
      </a>
    </div>
  );
}
