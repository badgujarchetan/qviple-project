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
      {" "}
      <nav
        className={"_navbar"}
        initial={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
        }}
        animate={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)",
        }}
      >
        <div className="g-row-full flex items-center justify-between">
          <a
            href="/"
            className="homepage-link relative overflow-hidden"
            aria-label="Homepage"
          >
            <span className="_wordmark" data-tone="neutral">
              <div className="glyphs">
                <div className="glyph">
                  <span className="brand_name">QVIPLE</span>
                </div>
              </div>
              <svg
                className="spacer"
                width="1558"
                height="415"
                aria-hidden="true"
              />
            </span>
          </a>

          <div className="lang-cta-wrapper">
            <div className="_dropdown _language-select">
              <button className=" _button flex items-center justify-center ">
                {/* <span className="_icon">🌐</span> */}
                <span className="ml-1">EN</span>
                <span className="_icon chevron">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down-icon lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>
            </div>

            <div className="ctas ">
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                href="/login"
                className="_button"
                data-variant="outline"
              >
                Login
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                href="/signup"
                className="_button"
                data-variant="primary"
              >
                Sign Up
              </motion.button>
            </div>
          </div>
        </div>
      </nav>
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
              src="/videos/56449435.mp4"
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
