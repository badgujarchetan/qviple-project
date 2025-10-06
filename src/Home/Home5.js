import React from "react";
import "../style/Home5.css";
export default function Home5() {
  return (
    <section className="_mobile_app_hero">
      <div className="bg-video-section">
        <video
          className="_video-asset"
          src="/videos/3dapp-mobile.mp4"
          type="video/mp4"
          width="2880"
          height="2160"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          data-media="video"
          data-intersecting="true"
        ></video>
      </div>
      <div className="_mobile_app_hero-g-row">
        <div className="_mobile_app_hero-g-col xxl-7 finances-in-one-app">
          <h2 className="title-3">All your finances, in one app.</h2>
          <p className="subhead-2">Join 1M+ happy users today. </p>
          <div className="get_started_button">
            <a
              href="/"
              target="_blank"
              className="_button no-tap-highlight"
              data-button=""
              data-label="true"
              data-tone="neutral"
              data-variant="primary"
            >
              <div data-button-background=""></div>
              <span className="label relative body -book">
                <span data-split-text="" className="whitespace-nowrap">
                  <span className="c">G</span>
                  <span className="c">e</span>
                  <span className="c">t</span>
                  <span className="c -space"> </span>
                  <span className="c">S</span>
                  <span className="c">t</span>
                  <span className="c">a</span>
                  <span className="c">r</span>
                  <span className="c">t</span>
                  <span className="c">e</span>
                  <span className="c">d</span>
                </span>
                {/* <span
                  data-split-text=""
                  className="clone whitespace-nowrap"
                  aria-hidden="true"
                >
                  <span className="c">G</span>
                  <span className="c">e</span>
                  <span className="c">t</span>
                  <span className="c -space"> </span>
                  <span className="c">S</span>
                  <span className="c">t</span>
                  <span className="c">a</span>
                  <span className="c">r</span>
                  <span className="c">t</span>
                  <span className="c">e</span>
                  <span className="c">d</span>
                </span> */}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="btnFinance">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="_app-buttons"
          data-button=""
          data-tone="orange"
          data-variant="outlines"
          aria-label="go to mobile app"
        >
          <div data-button-backgrounds=""></div>
          <div className="outlines"></div>
          <img
            className="imgeess"
            src="/images/app-store-neutral.svg"
            alt="App Store icon"
          />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="_app-buttons"
          data-button=""
          data-tone="orange"
          data-variant="outlines"
          aria-label="go to mobile app"
        >
          <div data-button-background=""></div>
          <div className="outlines"></div>
          <img
            className="imgeess"
            src="/images/google-play-neutral.svg"
            alt="App Store icon"
          />
        </a>
      </div>
    </section>
  );
}
