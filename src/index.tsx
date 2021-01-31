import { StrictMode } from 'react';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { App } from 'ui/components/app/app';
import { GlobalStyles } from 'ui/styles/global-styles';

ReactDOM.render(
  <StrictMode>
    <Normalize />
    <GlobalStyles />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
