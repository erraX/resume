import { createContext, useMemo, useContext, useState } from 'react';
import { i18n } from './i18n';

const i18nContext = createContext();

export function I18nContextProvider({ defaultLang = 'zh', children }) {
  const [lang, setLang] = useState(defaultLang);

  const context = useMemo(
    () => ({
      lang,
      setLang,
      t: (key) => i18n(lang, key),
    }),
    [lang]
  );
  return (
    <i18nContext.Provider value={context}>{children}</i18nContext.Provider>
  );
}

export const useI18nContext = () => {
  const context = useContext(i18nContext);
  if (!context) {
    throw new Error(
      '`useI18nContext` must be used inner `I18nContextProvider`'
    );
  }
  return context;
};
