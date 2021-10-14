import IconBag from './IconBag';
import IconEducation from './IconEducation';
import IconEmail from './IconEmail';
import IconGithub from './IconGithub';
import IconKeynote from './IconKeynote';
import IconMobile from './IconMobile';
import IconPhoneCall from './IconPhoneCall';
import IconSetting from './IconSetting';

const iconMap = {
  bag: IconBag,
  education: IconEducation,
  email: IconEmail,
  github: IconGithub,
  keynote: IconKeynote,
  mobile: IconMobile,
  phoneCall: IconPhoneCall,
  setting: IconSetting,
};

function Icon({ type, ...iconProps }) {
  const IconComponent = iconMap[type];
  return <IconComponent {...iconProps} />;
}

export default Icon;
