import React from "react";
import "./your-banking-manger.css";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
export default function page() {
  return (
    <div className="your-banking-manger-section">
      <QvipleNavbar />
      <div className="account-bg">
        <img
          alt="Hero Background"
          fetchPriority="high"
          loading="eager"
          width="2560"
          height="880"
          decoding="async"
          data-nimg="1"
          className="account-img"
          style={{ color: "transparent" }}
          src="/images/grow-hero-bg.webp"
        ></img>
        <div className="account-container">
          <div className="account-main-contend">
            <div>
              <h1 className="account-h1">
                Your Digital <br></br> Partner in Banking
              </h1>
              <p className="account-p">
                Your Easy payment and tracking system-fast and completely safe!
              </p>
              <a
                className="account-a"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Now
              </a>
            </div>
          </div>
        </div>
        {/* <div> */}
        {/* ChatGPT said: Life is a journey filled with moments of joy,
          challenges, and constant learning. Every day brings new opportunities
          to grow, explore, and understand ourselves better. Sometimes, things
          may not go as planned, but those experiences often teach us the most
          valuable lessons. It’s important to stay patient and trust the process
          because success rarely happens overnight. The world around us is
          changing rapidly with technology, innovation, and creativity shaping
          our future. Amid this fast-paced life, taking time for self-care,
          family, and friends helps maintain balance. Dreams may seem distant at
          times, but with dedication and consistency, even the impossible
          becomes possible. Nature, too, reminds us of resilience—after every
          storm, the sun shines again. Similarly, after every failure, there
          lies a new chance to rise stronger. Life is not just about achieving
          goals but also about enjoying the little things—like a peaceful
          evening, a good conversation, or a kind gesture. When we appreciate
          these small moments, we realize how beautiful life truly is. Keep
          learning, stay humble, and move forward with hope and positivity
          because every chapter of life has something meaningful to offer. */}
        {/* </div> */}
      </div>
      <picture className="Banking-image-section">
        <img
          alt="Your Digital Partner in Banking"
          className="bankI"
          loading="eager"
          width="973"
          height="732"
          src="/images/jtn-ui-2.webp"
        ></img>
      </picture>

      <div className="manage-linear">
        <div className="container">
          <div className="divide-section">
            <div>
              <div className="left-section">
                <div className="posi-section">
                  <img
                    alt="Move your business to digital"
                    loading="lazy"
                    width="59"
                    height="44"
                    decoding="async"
                    data-nimg="1"
                    className="posi-image"
                    style={{ color: "transparent" }}
                    src="/images/cloud-money.svg"
                  ></img>
                </div>
                <div>
                  <h2 className="digital-text">
                    Move your business to digital!
                  </h2>
                  <p className="digital-text-p">
                    Get rid of unnecessary paperwork. Everything is just a click
                    away.
                  </p>
                </div>
              </div>
              <div className="left-section">
                <div className="posi-section">
                  <img
                    alt="Move your business to digital"
                    loading="lazy"
                    width="59"
                    height="44"
                    decoding="async"
                    data-nimg="1"
                    className="posi-image"
                    style={{ color: "transparent" }}
                    src="/images/cloud-money.svg"
                  ></img>
                </div>
                <div>
                  <h2 className="digital-text">
                    Move your business to digital!
                  </h2>
                  <p className="digital-text-p">
                    Get rid of unnecessary paperwork. Everything is just a click
                    away.
                  </p>
                </div>
              </div>
              <div className="left-section">
                <div className="posi-section">
                  <img
                    alt="Move your business to digital"
                    loading="lazy"
                    width="59"
                    height="44"
                    decoding="async"
                    data-nimg="1"
                    className="posi-image"
                    style={{ color: "transparent" }}
                    src="/images/cloud-money.svg"
                  ></img>
                </div>
                <div>
                  <h2 className="digital-text">
                    Move your business to digital!
                  </h2>
                  <p className="digital-text-p">
                    Get rid of unnecessary paperwork. Everything is just a click
                    away.
                  </p>
                </div>
              </div>
              <div className="left-section">
                <div className="posi-section">
                  <img
                    alt="Move your business to digital"
                    loading="lazy"
                    width="59"
                    height="44"
                    decoding="async"
                    data-nimg="1"
                    className="posi-image"
                    style={{ color: "transparent" }}
                    src="/images/cloud-money.svg"
                  ></img>
                </div>
                <div>
                  <h2 className="digital-text">
                    Move your business to digital!
                  </h2>
                  <p className="digital-text-p">
                    Get rid of unnecessary paperwork. Everything is just a click
                    away.
                  </p>
                </div>
              </div>
            </div>

            <img
              alt="Move your business to digital!"
              loading="lazy"
              width="464"
              height="500"
              decoding="async"
              data-nimg="1"
              className="mdc-img"
              style={{ color: "transparent" }}
              src="/images/mdc.webp"
            ></img>
          </div>
        </div>
      </div>
      <div className="track-funds-section">
        <div className="track-funds-div">
          <h3 className="track-funds-h3">
            Ideal for all kinds <br></br>of banking transactions in your
            business.
          </h3>
          <h2 className="track-funds-h2">Easily track your business funds.</h2>
          <div className="own-limits">
            <img
              alt="Easily track your business funds."
              loading="lazy"
              width="490"
              height="415"
              decoding="async"
              data-nimg="1"
              className="limits-img"
              style={{ color: "transparent" }}
              src="/images/limits.webp"
            ></img>
            <div className="own-limits-div">
              <h3 className="own-limits-h3">Create your own limits.</h3>
              <p className="own-limits-p">
                It is now possible to keep investor funds in separate accounts
                and store your needs in different accounts.
              </p>
            </div>
          </div>
        </div>
        <div className="recive-money">
          <div className="recive-money-div">
            <h3 className="recive-money-h3">
              Both transfer and receive money faster.
            </h3>
            <p className="recive-money-p">
              You can plan all your payments and record the payments made.
            </p>
          </div>
          <img  
            alt="Create your own limits."
            loading="lazy"
            width="490"
            height="415"
            decoding="async"
            data-nimg="1"
            className="faster-img"
            style={{ color: "transparent" }}
            src="/images/faster.webp"
          ></img>
        </div>
      </div>
      <div className="fast-transfer-opportunities">
        <div className="fast-transfer-container">
          <div className="fast-transfer-img">
            <img
              alt="Hero Background"
              className="hero-bg"
              loading="lazy"
              width="2560"
              height="880"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="/images/light-blue-bg.webp"
            ></img>
            <div className="fast-transfer-div">
              <div className="rounded-div">
                <p className="rounded-div-p">
                  International payments are here.
                </p>
              </div>
            </div>
            <h2 className="fast-transfer-h2">
              Fast transfer opportunity to all over the world.
            </h2>
            <div className="no-limits-payments-section">
              <img
                alt="No limit for payments"
                loading="lazy"
                width="380"
                height="500"
                decoding="async"
                data-nimg="1"
                className="no-limits-payments-img"
                style={{ color: "transparent" }}
                src="/images/payments.webp"
              ></img>
              <div className="text-no-limits">
                <h3 className="text-no-limits-h3">No limit for payments</h3>
                <p className="text-no-limits-p">
                  Make unlimited payments to the other side of the world with
                  Jetonbank.
                </p>
              </div>
            </div>
            <img
              alt="bracket"
              loading="lazy"
              width="2560"
              height="100"
              decoding="async"
              data-nimg="1"
              className="bracket-img"
              style={{ color: "transparent" }}
              src="/images/bracket.svg"
            ></img>
            <div className="no-limits-payments-section">
              <div className="text-no-limits">
                <h3 className="text-no-limits-h3">Don't be afraid to go global</h3>
                <p className="text-no-limits-p">
                  Jetonbank does not include the excessive fees of traditional banking. Don't worry, let's grow together
                </p>
              </div>
              <img
                alt="No limit for payments"
                loading="lazy"
                width="380"
                height="500"
                decoding="async"
                data-nimg="1"
                className="no-limits-payments-img"
                style={{ color: "transparent" }}
                src="/images/global.webp"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
