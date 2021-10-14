import Icon from '../icons/Icon';

const SharePanel = ({ shares }) => (
  <>
    <h2 className="text-2xl mb-3 font-bold">
      <Icon type="keynote" className="inline align-text-bottom mb-0.5 mr-2" />
      技术分享
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

export default SharePanel;
