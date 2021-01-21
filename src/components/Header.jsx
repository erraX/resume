import React from 'react';

export default function Header({
  name,
  title,
  mobile,
  email,
  experience,
  github,
}) {
  return (
    <div className="h-auto p-8 mb-5 text-gray-800 text-center text-sm border-b border-gray-800 border-opacity-25 border-dashed">
      <h1 className="text-5xl mb-3 text-center font-bold">{name}</h1>
      <div className="">
        {title} - {experience}年开发经验
      </div>
      <div>Mobile: {mobile}</div>
      <div>Email: {email}</div>
      <a className="underline" href={`http://${github}`} target="_blank">
        Github: {github}
      </a>
    </div>
  );
}
