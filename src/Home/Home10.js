"use client";
import React, { useState } from "react";

export default function Home10() {
  const [hover, setHover] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <header className="_common_header" data-layout="full">
      {/* Background with hover zoom */}
      <div
        className="_background"
        style={{
          transition: "transform 0.3s ease-in-out",
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
        ></video>
      </div>

      {/* Main content */}
      <div className="main-row g-row">
        <div className="_grow-main-col _xxl-8 _oneAppsForNeedsSection">
          <h2 className="title-2">
            <span data-split-text="" data-clip="chars">
              <div className="l">
                <span className="w">
                  <span className="c"><span className="f t">O</span></span>
                  <span className="c"><span className="f t">n</span></span>
                  <span className="c"><span className="f t">e</span></span>
                  <span className="c"><span className="f t"> </span></span>
                </span>
                <span className="w">
                  <span className="c"><span className="f t">a</span></span>
                  <span className="c"><span className="f t">p</span></span>
                  <span className="c"><span className="f t">p</span></span>
                  <span className="c"><span className="f t"> </span></span>
                </span>
                <span className="w">
                  <span className="c"><span className="f t">f</span></span>
                  <span className="c"><span className="f t">o</span></span>
                  <span className="c"><span className="f t">r</span></span>
                  <span className="c"><span className="f t"> </span></span>
                </span>
                <span className="w">
                  <span className="c"><span className="f t">a</span></span>
                  <span className="c"><span className="f t">l</span></span>
                  <span className="c"><span className="f t">l</span></span>
                  <span className="c"><span className="f t"> </span></span>
                </span>
                <span className="w">
                  <span className="c"><span className="f t">n</span></span>
                  <span className="c"><span className="f t">e</span></span>
                  <span className="c"><span className="f t">e</span></span>
                  <span className="c"><span className="f t">d</span></span>
                  <span className="c"><span className="f t">s</span></span>
                </span>
              </div>
            </span>
          </h2>
        </div>
        <div className="_grow-main-col"></div>
      </div>
    </header>
  );
}
