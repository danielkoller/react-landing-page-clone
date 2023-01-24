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
  font-weight: 200;
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
  font-size: 18px;
  margin: auto 25px;
  border: 2px solid #161616;
  border-radius: 25px;
  padding: 7px 15px;
  margin-left: 0;
  margin-right: 0;
`;

const aDownloadHeaderStyles = css`
  font-weight: 700 !important;
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

const navHomeStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  margin-top: 50px;
  display: flex;
`;

const divNavHomeStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: flex;
  justify-content: start;
`;

const downloadNavHomeStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
`;

const aDownloadNavHomeStyles = css`
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
  margin: auto 25px;
  transition: background-color 0.2s linear;
  border: 2px solid black;
  padding: 10px 20px;
  border-radius: 35px;
  white-space: nowrap;
  font-weight: 700 !important;
  justify-content: center;
  margin-left: 0;
  font-size: 120%;
  display: flex;
  align-items: center;
  opacity: 0.8;
  color: black;
  &:hover {
    background-color: rgba(255, 43, 43, 0.507);
  }
`;

const imgDownloadNavHomeStyles = css`
  white-space: nowrap;
  color: black;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  margin-top: -4px;
  margin-right: 10px;
`;

const pNavHomeStyles = css`
  border: 0;
  font: inherit;
  vertical-align: baseline;
  font-style: normal;
  font-weight: 200;
  line-height: 1.6;
  color: #161616;
  font-size: 90%;
  padding: 5px 10px;
  margin: 0;
`;

const videoNavHomeStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  margin-top: 10px;
`;

const aVideoNavHomeStyles = css`
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
  font-weight: 500;
  margin: auto 25px;
  margin-left: 0;
  font-size: 120%;
  display: flex;
  align-items: center;
  opacity: 0.8;
  color: black;
`;

const imgVideoNavHomeStyles = css`
  color: black;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  margin-right: 10px;
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
              <a
                css={aDownloadHeaderStyles}
                href="https://wunderbucket.io/#download"
              >
                Download
              </a>
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
            <nav css={navHomeStyles}>
              <div css={divNavHomeStyles}>
                <div css={downloadNavHomeStyles}>
                  <a
                    css={aDownloadNavHomeStyles}
                    href="https://wunderbucket.io/#download"
                  >
                    <img
                      css={imgDownloadNavHomeStyles}
                      src="https://wunderbucket.io/img/apple-logo.svg?version=c00abf15cc86c91ecc3bc722fc4a2b94"
                      alt="Apple Logo"
                    />
                    Download for Mac
                  </a>
                  <p css={pNavHomeStyles}>
                    Available on Setapp & the App Store
                  </p>
                </div>
                <div css={videoNavHomeStyles}>
                  <a
                    css={aVideoNavHomeStyles}
                    href="https://wunderbucket.io/#tour-video"
                  >
                    <img
                      css={imgVideoNavHomeStyles}
                      src="https://wunderbucket.io/img/play.svg?version=4fd9564999a4c8a470b4f2f2bc4f2cc4"
                      alt="Video"
                    />
                    See how it works
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </main>
      <footer>My Footer</footer>
    </div>
  );
}

export default App;
