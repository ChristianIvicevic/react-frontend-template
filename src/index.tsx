import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import 'index.scss';

import { App } from 'ui/app';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
