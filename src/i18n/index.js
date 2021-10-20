import en from './en';
import zh from './zh';

const langs = {
  en,
  zh,
};

export const i18n = (lang, key) => {
  return langs?.[lang]?.[key] || '';
};
