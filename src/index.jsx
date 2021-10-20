import React from 'react';
import ReactDOM from 'react-dom';
import I18nSelector from './components/I18nSelector';
import Resume from './Resume';
import { I18nContextProvider } from './I18nContext';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <I18nContextProvider defaultLang="en">
      <Resume />
      <I18nSelector />
    </I18nContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
