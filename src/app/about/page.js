"use client";
import Navbar from "@/Navbar/Navbar";
import React from "react";
import "./about.css";
import { useEffect } from "react";

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
      <section className="jeton-card-s">
        <div className="about-row div-jeton">
          <img
            src="/images/phone-one-girls.png"
            width="348"
            height="348"
            alt="Person using smartphone"
            className="person-using-phone about-col"
          ></img>
        </div>
        <div className="about-row product-about">
          <div className="about-col product-div">
            <span className="product-tag" data-tone="neutral">
              <div
                style={{ display: "none" }}
                className="product-outlline"
              ></div>
              Product
              <svg
                className="product-svg"
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
            <h2 className="your-next-app">Your Next-Gen App</h2>
          </div>
        </div>
        <div className="about-row product-desc">
          <div className="about-col next-desc">
            <p className="product-p">
              Money extends beyond borders and that’s where Jeton comes in. An
              all-in-one payment app & web app that opens doors to world full of
              opportunities. With the Jeton App, you can access many features
              that simplify and improve your every day financial experience, no
              matter where you are.
            </p>
          </div>
        </div>
        <div className="about-row produc-btn">
          <div className="flex-product">
            <a
              href="/"
              target="_blank"
              className="_product-button"
              data-button=""
              data-tone="neutral"
              data-variant="outline"
              aria-label="go to mobile app"
            >
              <div data-button-background=""></div>
              <div class="outline absolute inset-0"></div>
              <img
                class="absolute inset-0"
                src="/images/app-store-neutral.svg"
                alt="App marketplace icon"
              />
            </a>
            <a
              href="/"
              target="_blank"
              className="_product-button"
              data-button=""
              data-tone="neutral"
              data-variant="outline"
              aria-label="go to mobile app"
            >
              <div data-button-background=""></div>
              <div class="outline absolute inset-0"></div>
              <img
                class="absolute inset-0"
                src="/images/google-play-neutral.svg"
                alt="App marketplace icon"
              />
            </a>
          </div>
        </div>
        <div className="about-row user">
          <ul className="about-ul about-stats ">
            <li>
              <div className="one-millions">1M+</div>
              <div className="register-user">Registers Users</div>
            </li>
            <li>
              <div className="one-millions">27</div>
              <div className="register-user">Available Countries</div>
            </li>
            <li>
              <div className="one-millions">50+</div>
              <div className="register-user">Payment Methods</div>
            </li>
          </ul>
        </div>
        <div className="_scroll-stack" data-method="transform" style={{}}>
          <div className="views-slot">
            <div
              className="_scroll-stack-view"
              data-active="true"
              style={{
                "--index": 0,
                transform: "translate3d(0px, -62px, 0px)",
              }}
            >
              <div className="view-inner-container">
                <div className="view-background view-back"></div>
                <div className="slot-container grow ">
                  <article className="g-table g-article" data-layout="text">
                    <div className="title-multi">
                      <h3 className="title-multi-h3">
                        Exchange multi-currencies
                      </h3>
                    </div>
                    <div className="discription-view">
                      <p className="view-p">
                        Traveling becomes hassle-free with Jeton. Say goodbye to
                        the inconvenience of searching for currency exchange
                        counters during your trips.
                      </p>
                    </div>
                    <div className="text-view">
                      <p className="about-text-p">
                        Exchange your money to multi-currencies at competitive
                        rates, ensuring you always get the best value for your
                        money.
                      </p>
                    </div>
                    <figure className="laptop-image">
                      <img
                        src="/images/mobileandlaptop.jpg"
                        width="2380"
                        height="2608"
                        alt="sitting outside on a laptop"
                        className="sitting-laptop"
                      ></img>
                    </figure>
                    <figure className="second-img">
                      <img
                        src="/images/girls_image.jpg"
                        width="422"
                        height="372"
                        alt="scrolling on a smartphone"
                        className="scrolling-phone"
                      ></img>
                    </figure>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-values">
        <div className="about-col-values values-section">
          <span className="values-tag" data-tone="neutral">
            <div style={{ display: "none" }} className="values-outlline"></div>
            values
            <svg
              className="values-svg"
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
          <h2 className="values-h2">
            Working for an all inclusive financial future
          </h2>
        </div>
      </section>
      <section>
        <article className="about-row for-you">
          <h3 className="about-col for-you-h3">
            <span className="forspan">
              01.<span className="foryouu">For you</span>
            </span>
          </h3>
          <p className="about-col foryou-p">
            Jeton is designed with you at its core. Our goal is to create a
            product that seamlessly fits into your life, simplifying your
            finances and make money better for you.
          </p>
        </article>
        <article className="about-row for-you">
          <h3 className="about-col for-you-h3">
            <span className="forspan">
              02.<span className="foryouu">Accessible</span>
            </span>
          </h3>
          <p className="about-col foryou-p">
            Jeton is designed with you at its core. Our goal is to create a
            product that seamlessly fits into your life, simplifying your
            finances and make money better for you.
          </p>
        </article>
        <article className="about-row for-you">
          <h3 className="about-col for-you-h3">
            <span className="forspan">
              03.<span className="foryouu">Transparent</span>
            </span>
          </h3>
          <p className="about-col foryou-p">
            Jeton is designed with you at its core. Our goal is to create a
            product that seamlessly fits into your life, simplifying your
            finances and make money better for you.
          </p>
        </article>
        <div className="we-observerd">
          <div className="about-col we-observerd-div">
            <div
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                opacity: 1,
                transform: "translate(0px, 0px)",
              }}
              className="quote-card"
            >
              <blockquote className="blockquote">
                We observed how difficult it was for people to manage their
                finances. Even the simplest tasks took too long or became
                extremely intricate. The fact that today’s financial system was
                not all-inclusive for everyone, ignited our desire to create
                Jeton. We wanted to offer a human touch and make a positive
                impact in people's lives. Our mission is to give everyone total
                control of their assets and easier access to their funds. At the
                end of the day, it is their money, and they should control it
                the way their hearts desire.
              </blockquote>
              <div className="endorser">
                <span className="avtar-about">
                  <span className="hs">H.S</span>
                </span>
                <div>
                  <div>Harbin S.</div>
                  <div className="ceo">CEO of Jeton</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="_certifications-list">
        <div className="about-row certification-mb">
          <div className="about-col award-section">
            <span className="about-tag" data-tone="orange">
              <div style={{ display: "none" }} className="outline-bg"></div>
              Awards & Certifications
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
            <h2 className="certification-h2">
              We are here to make money better for you
            </h2>
            <p className="certification-p">
              We work with a passion that returns in achievements and rewards.{" "}
            </p>
          </div>
          <ul className="about-col certification-ul">
            <li className="certification-li">
              <h3 className="certification-h3">UKAS Management Systems</h3>
              <div className="divider"></div>
            </li>
            <li className="certification-li">
              <h3 className="certification-h3">Cyber Essentials Certified</h3>
              <div className="divider"></div>
            </li>
            <li className="certification-li">
              <h3 className="certification-h3">ISO 27001 Certified</h3>
              <div className="divider"></div>
            </li>
            <li className="certification-li">
              <h3 className="certification-h3">
                EBA Associate Member/ EBA Standard Ecosystem Partner of the Euro
                Banking Association
              </h3>
              <div className="divider"></div>
            </li>
            <li className="certification-li">
              <h3 className="certification-h3">
                FT 1000 Europe's fastest growing companies 2024 & 2025
              </h3>
              <div className="divider"></div>
            </li>
            <li className="certification-li">
              <h3 className="certification-h3">
                Cyber Essentials Certified Plus
              </h3>
              <div className="divider"></div>
            </li>
          </ul>
        </div>
      </section>
      <section className="_medium-hero">
        <div className="medium-full">
          <span className="values-tag" data-tone="neutral">
            <div style={{ display: "none" }} className="values-outlline"></div>
            Careers
            <svg
              className="values-svg"
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
          <h2 className="hero-h2">Job openings</h2>
          <p className="hero-p">
            Thanks for your interest in Jeton! There are no open roles at this
            time — but feel free to send your spontaneous application below!
          </p>
          <button className="cta">Spontaneous application</button>
        </div>
      </section>
    </div>
  );
}
// this is about page section