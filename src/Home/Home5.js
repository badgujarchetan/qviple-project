import "../style/Home5.css";

import React from "react";

export default function Home5() {
  return (
    <section className="">
      <div className="">
        <div className="">
          <span className="" data-tone="orange">
            <div className=""></div>
            Jeton Card
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="94.175"
              height="27.6"
              viewBox="0 0 94.175 27.6"
            >
              <rect x="0" y="0" width="100%" height="100%" rx="13.8"></rect>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                rx="13.8"
                style={{ "--length": 219.29, "--p": 1 }}
              ></rect>
            </svg>
          </span>
          <h2 className="">
            Contactless payments? Sure.
            {"\n"}Spending limits? Check.
            {"\n"}Card freezing? Also check.
          </h2>
        </div>
      </div>

      {/* Video section */}
      <div className="">
        <div className="">
          <video
            className=""
            src="/videos/jeton-card-rip.mp4"
            type="video/mp4"
            width="1960"
            height="1240"
            loop
            muted
            playsInline
            autoPlay
            preload="metadata"
            style={{
              transform: "translate(0%, 10%) rotate(0deg) scale(0.9, 0.9)",
            }}
          ></video>
        </div>
      </div>

      {/* Bottom content with CTA */}
      <div className="">
        <div className="">
          <h3 className="">Jeton Card: Your Go-To for Every Purchase</h3>
          <p className=""></p>
          <div className="">
            <a
              href="/jeton-card"
              className="_button no-tap-highlight"
              data-button=""
              data-label="true"
              data-tone="orange"
              data-variant="primary"
            >
              <div data-button-background=""></div>
              <span className="">
                <span data-split-text="" className="whitespace-nowrap">
                  <span className="c">L</span>
                  <span className="c">e</span>
                  <span className="c">a</span>
                  <span className="c">r</span>
                  <span className="c">n</span>
                  <span className="c -space"> </span>
                  <span className="c">m</span>
                  <span className="c">o</span>
                  <span className="c">r</span>
                  <span className="c">e</span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
