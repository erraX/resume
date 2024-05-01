import { useI18nContext } from '../I18nContext';

export default function I18nSelector() {
  const { lang, setLang } = useI18nContext();
  return (
    <div className="flex i18n-selector justify-center items-center fixed right-0 top-0 h-10 w-20 cursor-pointer">
      <select value={lang} onChange={(evt) => setLang(evt.target.value)}>
        <option value="zh">中文</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
