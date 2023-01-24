import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          border: 0;
          font: inherit;
          vertical-align: baseline;
          line-height: 1;
          font-family: 'Noto Sans JP', sans-serif;
          box-sizing: border-box;
          color: #161616;
          overflow-x: hidden;
          background: cornsilk;
        }
        *,
        ::after,
        ::before {
          box-sizing: border-box;
        }
        a {
          color: #161616;
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
        }
      `}
    />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
