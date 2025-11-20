import Navbar from "@/Navbar/Navbar";
import React from "react";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="about-section">
      <Navbar />

      <header className="hero">
        <video
          className="bg-video"
          src="/images/aboutvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        <div className="bg-overlay"></div>

        <div className="hero-content">
          <div className="left-text">
            <h1>
              Your money.
              <br />
              Your way.
            </h1>
          </div>

          <div className="right-side">
            <p className="desc">
              We make finance accessible, easy, friendly, and fun for everyone.
            </p>
            <button className="cta">Let's connect</button>
          </div>
        </div>
      </header>
      <section className="about-jeton">
        <div className="about-row">
          <div className="about-col">
            <span className="about-tag" data-tone="orange">
              <div style={{ display: "none" }} className="outline-bg"></div>
              Mission
              <svg
                className="mission-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="70.92500305175781"
                height="27.600000381469727"
                viewBox="0 0 70.92500305175781 27.600000381469727"
                style={{
                  display: "block",
                  opacity: 1,
                  transform: "translate(0px, 0px) scale(1) rotate(0deg)",
                }}
              >
                <rect x="0" y="0" width="100%" height="100%" rx="13.8"></rect>

                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  rx="13.8"
                  style={{
                    "--length": "172.79925537109375",
                    "--p": "1",
                  }}
                ></rect>
              </svg>
            </span>
            <h2 className="money-title">Money, but better.</h2>
          </div>
        </div>
        <div className="about-row">
          <div data-text-block className="data-text-box">
            <p className="p-block">
              Our goal is to make money better. Whether you’re opening an
              account with us, sending or receiving money, we make it better for
              you.{" "}
            </p>
          </div>
        </div>
        <div className="about-full-image">
          <img src="/images/aboutImage.jpg"></img>
        </div>
        <article className="secondary-blocks about-row ">
          <h3 className="title-secondary  about-col">
            We love to make things easier for everyone.
          </h3>
          <div className="about-col hidden-fees">
            <div data-text-block className="hidden-section">
              <p>
                No hidden fees, complicated words or complex processes. We make
                money relatable, effortless, easy to understand and manage. Our
                goal for each of our users to manage their money with a few
                taps.{" "}
              </p>
            </div>
            <div className="hidden-image">
              <div className="_skSection">
                <img
                  src="/images/phone-two-man.jpg"
                  width="2712"
                  height="1696"
                  alt="Two people looks at a phone"
                ></img>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
