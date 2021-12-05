import App from 'App';
import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './index.style.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
