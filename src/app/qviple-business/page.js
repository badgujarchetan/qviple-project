import React from "react";
import "./qviple-business.css";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";

export default function page() {
  return (
    <div className="main-wrapper ">
      <QvipleNavbar />

      {/*  */}
      <div className="qysm">
        <div className="custom_container">
          <video
            className="bg-video"
            src="/videos/header-bg.mp4"
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <div className="top">
            <h1>
              The Bank for <br></br> All Businesses
            </h1>
            <div className="desc">
              Experience business banking without borders. Scale your business
              with <br></br> secure, efficient, and global financial solutions.
            </div>
            <div className="actions container">
              <a href="/" className="gfcQZS" target="_blank">
                <span>Book a Meeting</span>
                <div className="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      d="M1 1H9.8M9.8 1V10M9.8 1L1 9.8"
                      stroke="#F6F6F6"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
              </a>
              <a href="/" className="gfcQZS darkblue" target="_blank">
                <span>Create an Account</span>
                <div className="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      d="M1 1H9.8M9.8 1V10M9.8 1L1 9.8"
                      stroke="#F6F6F6"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="all-in-one-solution">
        <h2>
          All-in-one <br /> Banking Solutions
        </h2>
      </div>
      {/*  */}

      <div className="home3-container">
        <div className="background">
          <div className="left"></div>
          <div className="right">
            <div className="content">
              <div className="center"></div>
              <h2 className="customer-support">Customer Support</h2>
              <h1 className="dedicated">
                Dedicated <br></br> account manager
              </h1>
              <div className="desc">
                Enjoy direct access to a dedicated account manager and <br></br>
                personalised business guidance tailored to your needs<br></br>
                just a few of the exclusive benefits Jetonbank offers.
              </div>
              <div className="btn-group">
                <a href="/">
                  <div className="btn">
                    Connect with a dedicated expert
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="97"
                      height="96"
                      viewBox="0 0 97 96"
                      fill="none"
                    >
                      <foreignObject
                        x="-12.2"
                        y="-12.2"
                        width="121.4"
                        height="120.4"
                      >
                        {/* Use className instead of class */}
                        <div className="btn-svg"></div>
                      </foreignObject>

                      <path
                        data-figma-bg-blur-radius="12.2"
                        d="M0 0H77C88.0457 0 97 8.9543 97 20V76C97 87.0457 88.0457 96 77 96H0V0Z"
                        fill="#002991"
                      ></path>

                      <path
                        d="M42 41H55M55 41V54M55 41L42 53.7111"
                        stroke="white"
                        strokeWidth="1.5" // use camelCase in React
                      ></path>

                      <defs>
                        <clipPath id="bgblur_0_367_10724_clip_path">
                          <path
                            transform="translate(12.2 12.2)"
                            d="M0 0H77C88.0457 0 97 8.9543 97 20V76C97 87.0457 88.0457 96 77 96H0V0Z"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                    {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="97"
                    height="120"
                    viewBox="0 0 97 120"
                    fill="none"
                    className="mobile"
                  >
                    <foreignObject
                      x="-12.2"
                      y="-12.2"
                      width="121.4"
                      height="144.4"
                    >
                      <div className="btn-svg"></div>
                    </foreignObject>
                    <rect
                      data-figma-bg-blur-radius="12.2"
                      width="97"
                      height="120"
                      rx="14"
                      fill="#002991"
                    ></rect>
                    <path
                      d="M42 53H55M55 53V66M55 53L42 65.7111"
                      stroke="white"
                      strokeWidth="1.5"
                    ></path>
                    <defs>
                      <clipPath id="bgblur_0_451_30563_clip_path">
                        <rect
                          transform="translate(12.2 12.2)"
                          width="97"
                          height="120"
                          rx="14"
                        />
                      </clipPath>
                    </defs>
                  </svg> */}
                  </div>
                </a>
                <div className="btn-desc">
                  Contact your dedicated account manager during and after
                  integration. We are here to help you get started with
                  Jetonbank and offer assistance via chat or email whenever
                  required.
                </div>
              </div>
            </div>
            <video
              className="video"
              autoPlay
              playsInline
              muted
              loop
              src="/videos/customer-support-right-bg.mp4"
            ></video>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="WxVrs">
        <div className="back-video">
          <video
            src="/videos/currencies-video-bg.mp4"
            autoPlay
            loop
            playsInline
            muted
          ></video>
        </div>
        <div className="top-section">
          <div className="container-custom">
            <div className="contends">
              <div>
                <h2>
                  Tailored Banking <br></br> with Advanced <br></br> Security
                </h2>
              </div>
              <div className="description">
                Jetonbank offers tailored banking solutions paired with strong
                security features to protect your business and support its
                growth. Manage your finances confidently and securely.
                <div className="margin-t">
                  <a href="/" className="transpernt">
                    <span>Book a Meeting</span>
                    <div className="icon-containerss">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                      >
                        <path
                          d="M1 1H9.8M9.8 1V10M9.8 1L1 9.8"
                          stroke="#F6F6F6"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="numbers">
              <div className="itemss">
                <div className="number">
                  <span className="num">40</span>
                  <span className="plus">+</span>
                </div>
                <div>
                  <span className="qv-label">Currencies</span>
                </div>
              </div>
              <div className="itemss">
                <div className="number">
                  <span className="num">25</span>
                  <span className="plus">+</span>
                </div>
                <div>
                  <span className="label">Payment Methods</span>
                </div>
              </div>
              <div className="itemss">
                <div className="number">
                  <span className="num">80</span>
                  <span className="plus">+</span>
                </div>
                <div>
                  <span className="label">Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="kPkxTt">
        <div className="custom-container">
          <div className="brand-name">Qviple App</div>
          <h2>
            Driving the next <br></br> generation of wealth.
          </h2>
          <div className="descrip">
            Download Qviple app to your devices and <br></br> unlock financial
            freedom.
          </div>
          <div className="store-links">
            <a href="https://apps.apple.com/in/app/qviple-your-education-online/id6463501865">
              <img
                alt="App Store"
                loading="lazy"
                width={219}
                height={64}
                decoding="async"
                src="/images/app-store.svg"
                style={{ color: "transparent" }}
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple">
              <img
                alt="google-play"
                loading="lazy"
                width={219}
                height={64}
                decoding="async"
                src="/images/google-play-store.svg"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
        </div>
        <video
          src="/videos/store-video.mp4"
          autoPlay
          muted
          playsInline
          loop
        ></video>
      </div>

      <div className="cIuFrH">
        <div className="custom-container">
          <div className="footer-hero">
            <h2>
              Looking for a true <br></br> partner to help{" "}
              <span>grow your business?</span>
            </h2>
            <div className="actions">
              <a className="book bluees">
                <span>Book a Meeting</span>
                <div className="btn-con">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      d="M1 1H9.8M9.8 1V10M9.8 1L1 9.8"
                      stroke="#F6F6F6"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="desc-data">
          If you have any questions or need assistance, <br></br> feel free to
          reach out to us at{" "}
          <a href="/" className="und">
            connect@qviple.com
          </a>{" "}
          <br></br> or click the button above to book a meeting with our team.{" "}
          <br></br> We're here to support you every step of the way.{" "}
        </div>
      </div>
    </div>
  );
}
