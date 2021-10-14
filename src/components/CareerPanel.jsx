import Company from './Company';
import Project from './Project';
import Icon from '../icons/Icon';

const CareerPanel = ({ careers }) => (
  <>
    <h2 className="text-2xl mb-3 font-bold">
      <Icon type="bag" className="inline align-text-bottom mb-0.5 mr-2" />
      工作&主要项目经历
    </h2>
    <ul className="list-disc pl-6">
      {careers.map(({ company, rank, begin, end, desc, projects }, index) => (
        <li key={index}>
          <Company
            name={company}
            rank={rank}
            beginTime={begin}
            endTime={end}
            desc={desc}
          />
          <ul className="list-circle pl-4">
            {projects.map(({ name, desc, items }, index) => (
              <li key={index} className="mb-4">
                <Project name={name} desc={desc} items={items} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </>
);

export default CareerPanel;
