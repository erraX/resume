import Header from './components/Header';
import SkillsPanel from './components/SkillsPanel';
import CareerPanel from './components/CareerPanel';
import OpenSourcePanel from './components/OpenSourcePanel';
import SharePanel from './components/SharePanel';
import EduationPanel from './components/EduationPanel';

export default function Resume() {
  return (
    <>
      <Header
        name="倪敏杰"
        title="Web前端工程师"
        mobile="17717375633"
        experience="5"
        email="niminjiecide@outlook.com"
        github={'github.com/errax'}
      />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <SkillsPanel />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <CareerPanel />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <OpenSourcePanel />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <SharePanel />
      <div className="border-b my-5 border-gray-800 border-opacity-25"></div>
      <EduationPanel />
    </>
  );
}
