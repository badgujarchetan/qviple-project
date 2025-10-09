"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import "../style/Home1.css";

export default function Home1() {
  const [hover, setHover] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
      
        <header className="_common_header" data-layout="full">
          {/* Background with hover zoom */}
          <div
            className="_background"
            style={{
              transition: "transform 0.5s ease-in-out",
              transform: hover ? "scale(1.1)" : "scale(1)",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <video
              className={`_video-asset ${videoLoaded ? "show" : ""}`}
              src="/videos/background.mp4"
              type="video/mp4"
              width="3840"
              height="2160"
              loop
              autoPlay
              muted
              playsInline
              preload="metadata"
              data-media="video"
              data-intersecting="true"
              onLoadedData={() => setVideoLoaded(true)}
              style={{ opacity: 1 }}
            ></video>
          </div>

          {/* Main content */}
          <div className="main-row g-row">
            <div className="_grow-main-col _xxl-8 _oneAppsForNeedsSection">
              <h2 className="title-2">
                <span data-split-text="" data-clip="chars">
                  <div className="l">
                    <span className="w">
                      <span className="c">
                        <span className="f t">O</span>
                      </span>
                      <span className="c">
                        <span className="f t">n</span>
                      </span>
                      <span className="c">
                        <span className="f t">e</span>
                      </span>
                      <span className="c">
                        <span className="f t"> </span>
                      </span>
                    </span>
                    <span className="w">
                      <span className="c">
                        <span className="f t">a</span>
                      </span>
                      <span className="c">
                        <span className="f t">p</span>
                      </span>
                      <span className="c">
                        <span className="f t">p</span>
                      </span>
                      <span className="c">
                        <span className="f t"> </span>
                      </span>
                    </span>
                    <br></br>
                    <span className="w">
                      <span className="c">
                        <span className="f t">f</span>
                      </span>
                      <span className="c">
                        <span className="f t">o</span>
                      </span>
                      <span className="c">
                        <span className="f t">r</span>
                      </span>
                      <span className="c">
                        <span className="f t"> </span>
                      </span>
                    </span>
                    <span className="w">
                      <span className="c">
                        <span className="f t">a</span>
                      </span>
                      <span className="c">
                        <span className="f t">l</span>
                      </span>
                      <span className="c">
                        <span className="f t">l</span>
                      </span>
                      <span className="c">
                        <span className="f t"> </span>
                      </span>
                    </span>
                    <span className="w">
                      <span className="c">
                        <span className="f t">n</span>
                      </span>
                      <span className="c">
                        <span className="f t">e</span>
                      </span>
                      <span className="c">
                        <span className="f t">e</span>
                      </span>
                      <span className="c">
                        <span className="f t">d</span>
                      </span>
                      <span className="c">
                        <span className="f t">s</span>
                      </span>
                    </span>
                  </div>
                </span>
              </h2>
            </div>
            <div className="_grow-main-col _xxl-4 xx-offset _oneAppsForNeedsSection">
              <p className="subhead-2">Single account for all your payments.</p>
              <div className="btn">
                <a
                  href="https://apps.apple.com/in/app/qviple-your-education-online/id6463501865mi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="_app-button"
                  data-button=""
                  data-tone="orange"
                  data-variant="outline"
                  aria-label="go to mobile app"
                >
                  <div data-button-background=""></div>
                  <div className="outline"></div>
                  <img
                    className="imgess"
                    src="/images/app-store-neutral.svg"
                    alt="App Store icon"
                  />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="_app-button"
                  data-button=""
                  data-tone="orange"
                  data-variant="outline"
                  aria-label="go to mobile app"
                >
                  <div data-button-background=""></div>
                  <div className="outline"></div>
                  <img
                    className="imgess"
                    src="/images/google-play-neutral.svg"
                    alt="Google Play icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

