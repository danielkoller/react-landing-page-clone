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

const appleLogoStyles = css`
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

const featureWrapperStyles = css`
  color: #161616;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  width: 600px;
  z-index: 10;
  margin: auto;
  margin-top: 50px;
  padding-top: 20px;
  position: relative;
  &::before {
    height: 3px;
    width: 800px;
    background: url(https://wunderbucket.io/img/pattern.png?version=c5a55f285d805811dbd500e645586c37);
    display: block;
    position: absolute;
    top: 0;
    content: '';
    margin-left: -150px;
    transform: rotate(-1deg);
    background-position: bottom;
  }
`;

const pFeaturesStyles = css`
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

const picLeftFeatureStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: flex;
  width: 900px;
  margin-left: -150px;
  align-items: center;
`;

const asideFeatureStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  display: block;
`;

const h3FeatureStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  font-family: 'PT Serif Caption', serif;
  font-size: 25px;
`;

const pInsideFeaturesStyles = css`
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  font-style: normal;
  margin: 26px 0;
  color: #161616;
  font-weight: 300;
  font-size: 18px;
  line-height: normal;
`;

const picRightFeatureStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: flex;
  flex-direction: row-reverse;
  width: 900px;
  margin-left: -150px;
  align-items: center;
`;

const picFeatureStyles = css`
  color: #161616;
  height: 400px;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  width: 400px;
`;

const downloadEndDivStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  margin-top: 50px;
`;

const downloadAEndStyles = css`
  margin: 0;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
  font-size: 24px;
  display: flex;
  align-items: center;
  color: black;
  transition: background-color 0.2s linear;
  border: 2px solid black;
  padding: 10px 20px;
  border-radius: 35px;
  white-space: nowrap;
  font-weight: 700 !important;
  justify-content: center;
  &:hover {
    background-color: rgba(255, 43, 43, 0.507);
  }
`;

const withoutPicFeatureStyles = css`
  color: #161616;
  margin: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  padding: 20px;
  box-sizing: border-box;
`;

const footerStyles = css`
  color: #161616;
  margin: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: flex;
  padding: 25px;
  box-sizing: border-box;
  z-index: 10;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: center;
`;

const pFooterStyles = css`
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  font-style: normal;
  font-weight: 200;
  line-height: 1.6;
  color: #161616;
  margin: 0;
  font-size: 14px;
`;

const navFooterStyles = css`
  color: #161616;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  margin-left: 3em;
  text-align: right;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  gap: 25px;
`;

const aNavFooterStyles = css`
  text-align: right;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  color: #161616;
  text-decoration: none;
  font-weight: 500;
  margin: auto 25px;
  font-size: 14px;
  margin-left: 0;
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
                      css={appleLogoStyles}
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
        <div css={featureWrapperStyles}>
          <p css={pFeaturesStyles}>
            Here's some of the highlights of the features you get when you build
            sites with Wunderbucket.
          </p>
          <div css={picLeftFeatureStyles}>
            <img
              css={picFeatureStyles}
              src="https://wunderbucket.io/img/cloud-hosted.png?version=cae378b9f7e1cceb9d18c8649f0e9eae"
              alt="Cloud
              Hosted
              Drawing"
            />

            <aside css={asideFeatureStyles}>
              <h3 css={h3FeatureStyles}>Cloud Hosted</h3>
              <p css={pInsideFeaturesStyles}>
                All your content is hosted on Amazon's Cloud. This is the
                infrastructure that powers the world's biggest websites, not a
                server running out of a garage. You're in good hands.
              </p>
            </aside>
          </div>
          <div css={picRightFeatureStyles}>
            <img
              css={picFeatureStyles}
              src="https://wunderbucket.io/img/instant-publish.png?version=644599e5cfde7ec13408d24dd723eebf"
              alt="Instant Publish Styles"
            />
            <aside css={asideFeatureStyles}>
              <h3 css={h3FeatureStyles}>Instant Publish</h3>
              <p css={pInsideFeaturesStyles}>
                When you're done making changes in a local folder, just click
                "publish" and it's live. No branch, merge, build, deploy just to
                fix a typo or change a font. It lets you quickly iterate, and
                tinker. It works how you work.
              </p>
            </aside>
          </div>
          <div css={picLeftFeatureStyles}>
            <img
              css={picFeatureStyles}
              src="https://wunderbucket.io/img/edit-anywhere.png?version=5de61b2ed820228ebdd89f614f1a7205"
              alt="Edit Anywhere"
            />

            <aside css={asideFeatureStyles}>
              <h3 css={h3FeatureStyles}>Edit Anywhere</h3>
              <p css={pInsideFeaturesStyles}>
                Sync your site's code to multiple computers. Allow your
                teammates to made edits and publish sites from multiple
                desktops.
              </p>
            </aside>
          </div>
          <div css={picRightFeatureStyles}>
            <img
              css={picFeatureStyles}
              src="https://wunderbucket.io/img/smart-localhost.png?version=b3317aa0f5240ecac7f7ba51ac679ae6"
              alt="Smart Localhost"
            />
            <aside css={asideFeatureStyles}>
              <h3 css={h3FeatureStyles}>Smart Localhost</h3>
              <p css={pInsideFeaturesStyles}>
                When you add a folder to Wunderbucket, you get a localhost
                server that will reload the page any time you change your source
                code. You'll never need to hit refresh again.
              </p>
            </aside>
          </div>
          <div css={picLeftFeatureStyles}>
            <img
              css={picFeatureStyles}
              src="https://wunderbucket.io/img/mac-native.png?version=af81060f922e3d7a0d95a3d1ed2e5305"
              alt="Mac Native"
            />

            <aside css={asideFeatureStyles}>
              <h3 css={h3FeatureStyles}>Mac Native</h3>
              <p css={pInsideFeaturesStyles}>
                A totally different take on static hosting, Wunderbucket is
                deeply integrated in the macOS experience. It makes publishing
                static content a completely natural part of your normal Mac
                workflow.
              </p>
            </aside>
          </div>
          <div css={picRightFeatureStyles}>
            <img
              css={picFeatureStyles}
              src="https://wunderbucket.io/img/any-editor.png?version=db4bd9ee5fb16e0017974e061bfeddf3"
              alt="Works with any code editor"
            />
            <aside css={asideFeatureStyles}>
              <h3 css={h3FeatureStyles}>Works with any code editor</h3>
              <p css={pInsideFeaturesStyles}>
                Use your favorite code editor to build your web sites: Nova,
                Coda, Espresso, Visual Studio Code, BBEdit, TextWangler, etc.
                Because Wunderbucket natively integrates with the macOS Finder
                it works with all of them.
              </p>
            </aside>
          </div>
          <div css={picLeftFeatureStyles}>
            <img
              css={picFeatureStyles}
              src="https://wunderbucket.io/img/custom-domains.png?version=c56f5f474cc698ed9a5216d524d66c05"
              alt="Own domain"
            />

            <aside css={asideFeatureStyles}>
              <h3 css={h3FeatureStyles}>Use your own domain</h3>
              <p css={pInsideFeaturesStyles}>
                All Wunderbucket sites support custom domains with minimal
                configuration. It only takes minutes to get your site running
                off of your own domain.
              </p>
            </aside>
          </div>
          <div css={picRightFeatureStyles}>
            <img
              css={picFeatureStyles}
              src="https://wunderbucket.io/img/global-cdn.png?version=b5bae358838fb8f48262d0c7541f9fde"
              alt="Global CDN"
            />
            <aside css={asideFeatureStyles}>
              <h3 css={h3FeatureStyles}>Global CDN</h3>
              <p css={pInsideFeaturesStyles}>
                Your sites will load super fast on any device from any location
                when they're published over our global content distribution
                network.
              </p>
            </aside>
          </div>
          <div css={picLeftFeatureStyles}>
            <img
              css={picFeatureStyles}
              src="https://wunderbucket.io/img/free-ssl.png?version=1c0da3d1922c26455a733991e416c801"
              alt="Free SSL"
            />

            <aside css={asideFeatureStyles}>
              <h3 css={h3FeatureStyles}>Free SSL</h3>
              <p css={pInsideFeaturesStyles}>
                All of your pages and assets will be served over https. You
                won't have to worry about purchasing or renewing your SSL
                certificate.
              </p>
            </aside>
          </div>
          <div css={withoutPicFeatureStyles}>
            <h3 css={h3FeatureStyles}>Cloud by AWS</h3>
            <p css={pInsideFeaturesStyles}>
              With Wunderbucket, your sites will be hosted on the AWS Cloud: The
              world's fastest and most reliable hosting platform.
            </p>
          </div>
          <div css={downloadEndDivStyles}>
            <a
              css={downloadAEndStyles}
              href="https://wunderbucket.io/#download"
            >
              <img
                css={appleLogoStyles}
                src="https://wunderbucket.io/img/apple-logo.svg?version=c00abf15cc86c91ecc3bc722fc4a2b94"
                alt="Apple Logo"
              />
              Download for Mac
            </a>
          </div>
        </div>
      </main>
      <footer css={footerStyles}>
        <p css={pFooterStyles}>
          © 2022 <a href="https://smmall.site">Smmall Inc.</a>
          <br />
          Illustrations by <a href="https://humanities.studio">Humanities</a>
        </p>
        <nav css={navFooterStyles}>
          <a css={aNavFooterStyles} href="/about.html">
            About
          </a>
          <a css={aNavFooterStyles} href="/blog">
            Blog
          </a>
          <a css={aNavFooterStyles} href="/docs">
            Docs
          </a>
          <a
            css={aNavFooterStyles}
            href="https://status.wunderbucket.io/49572-Wunderbucket"
          >
            System Status
          </a>
          <a css={aNavFooterStyles} href="/privacy.html">
            Privacy
          </a>
          <a css={aNavFooterStyles} href="/terms.html">
            Terms
          </a>
          <a css={aNavFooterStyles} href="/contact.html">
            Contact
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
