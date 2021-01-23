import Header from './components/Header';
import SkillsPanel from './components/SkillsPanel';
import CareerPanel from './components/CareerPanel';
import OpenSourcePanel from './components/OpenSourcePanel';
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
      <SkillsPanel />
      <CareerPanel />
      <OpenSourcePanel />
      <EduationPanel />
    </>
  );
}
