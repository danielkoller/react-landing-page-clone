/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const wrapperStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 155px;
  position: relative;
  box-sizing: border-box;
`;

const headerStyles = css`
  color: #161616;
  margin: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  padding: 25px;
  box-sizing: border-box;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const logoHeaderStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  display: block;
`;

const imgHeaderStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  width: 35px;
`;

const textImgHeaderStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  height: 25px;
  margin-left: 15px;
`;

const navBarStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;

  display: block;
`;

const ulHeaderStyles = css`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  list-style: none;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 26px;
  color: #161616;
  display: flex;
  justify-content: flex-end;
`;

const liHeaderStyles = css`
  list-style: none !important;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  color: #161616;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  margin: auto 25px;
  margin-left: 0;
`;

const downloadHeaderStyles = css`
  list-style: none !important;
  font: inherit;
  vertical-align: baseline;
  color: #161616;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  margin: auto 25px;
  border: 2px solid #161616;
  border-radius: 25px;
  padding: 7px 15px;
  margin-left: 0;
  margin-right: 0;
`;

const homeWrapperStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
`;

const imgHomeStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  display: block;
  width: 650px;
  height: 271, 78px;
`;

const wrapperInsideHomeWrapperStyles = css`
  color: #161616;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  width: 600px;
  z-index: 10;
  margin: auto;
`;

const h1Styles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  font-family: 'PT Serif Caption', serif;
  font-style: normal;
  font-size: 65px;
  margin-top: 26px;
  line-height: 1.2;
  letter-spacing: 1.2px;
`;

const pHomeStyles = css`
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 1.6;
  margin: 26px 0;
  color: #161616;
`;

function App() {
  return (
    <div css={wrapperStyles}>
      <header css={headerStyles}>
        <div css={logoHeaderStyles}>
          <a href="https://wunderbucket.io/">
            <img
              css={imgHeaderStyles}
              src="https://wunderbucket.io/img/icon-white.svg?version=da05e9af8a2f66cd1fda286eae82c81e"
              alt="Wunderbucket Logo"
            />
          </a>
          <a href="https://wunderbucket.io/">
            <img
              css={textImgHeaderStyles}
              src="https://wunderbucket.io/img/wunderbucket-type.svg?version=ebc27272259d6f56c03da7bf2cef1e12"
              alt="Wunderbucket Second Logo"
            />
          </a>
        </div>
        <nav css={navBarStyles}>
          <ul css={ulHeaderStyles}>
            <li css={liHeaderStyles}>
              <a href="https://wunderbucket.io/docs/">Getting started</a>
            </li>
            <li css={liHeaderStyles}>
              <a href="https://wunderbucket.io/pricing.html">Pricing</a>
            </li>
            <li css={downloadHeaderStyles}>
              <a href="https://wunderbucket.io/#download">Download</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div css={homeWrapperStyles}>
          <img
            css={imgHomeStyles}
            src="https://wunderbucket.io/img/hero@2x.png?version=6eb84737808a603b9b4fc9faaba3f87d"
            alt="Wunderbucket Hero"
          />
          <div css={wrapperInsideHomeWrapperStyles}>
            <h1 css={h1Styles}>Turn local folders into websites</h1>
            <p css={pHomeStyles}>
              For designers & developers who want fast, secure websites without
              command lines, or configs. It’s like if Dropbox had a cute little
              static hosting service baby.
            </p>
          </div>
        </div>
      </main>
      <footer>My Footer</footer>
    </div>
  );
}

export default App;
