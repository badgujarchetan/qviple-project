import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
import React from "react";
import "./erp-dashbord.css";
export default function page() {
  return (
    <div className="erp-main">
      <QvipleNavbar />
      <div className="erp-dashbord-section">
        <img
          className="bg-color-img"
          src="/images/private-hero-pattern.webp"
        ></img>
        <div className="erp-container">
          <div className="erp-container-space">
            <div className="space-1">
              <h1 className="h1-space">
                Business <br></br> Banking
              </h1>
              <p className="erp-space-1-description">
                Grow your business with <br></br> international banking
              </p>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="erp-contact"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                >
                  <path
                    fill="#131E3D"
                    d="M7.5 11h2v2h-2v-2Zm14-5v14c0 1.1-.9 2-2 2h-14a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2Zm-16 2h14V6h-14v2Zm14 12V10h-14v10h14Zm-4-7h2v-2h-2v2Zm-4 0h2v-2h-2v2Z"
                  ></path>
                </svg>
                Schedule Now
              </a>
            </div>
            <picture className="space-2">
              <img
                alt="Business Banking"
                className="business-hero-img"
                loading="eager"
                width="566"
                height="725"
                src="/images/business-hero-mobile.webp"
              ></img>
            </picture>
          </div>
        </div>
      </div>

      <div className="coperate-digital">
        <div className="custome-container">
          <div className="blue-section">
            <div className="data-section">
              <div className="data-section-1">
                <h2 className="coperate-digital-h2">
                  In corporate digital banking, choose Jetonbank.
                </h2>
                <p className="coperate-digital-support">
                  Reach our customer support team whenever you need. 24/7.
                </p>
              </div>
              <div>
                <img
                  src="/images/section.webp"
                  alt="In corporate digital banking, choose Jetonbank."
                  className="coperate-digital-image"
                ></img>
              </div>
            </div>
          </div>
          <div className="erp-main-card">
            <div className="box-section">
              <div className="box-section-icons">
                <img
                  src="/images/multi-currency.svg"
                  alt="Multi-currency transactions are now possible"
                  width="28"
                  height="27"
                  loading="lazy"
                ></img>
              </div>
              <h3 className="box-section-h3">
                Multi-currency transactions are now possible
              </h3>
              <p className="box-section-p">
                Transact with more than one currency in your business. Partner
                with international businesses.
              </p>
            </div>
            <div className="box-section">
              <div className="box-section-icons">
                <img
                  src="/images/multi-currency.svg"
                  alt="Multi-currency transactions are now possible"
                  width="28"
                  height="27"
                  loading="lazy"
                ></img>
              </div>
              <h3 className="box-section-h3">
                Multi-currency transactions are now possible
              </h3>
              <p className="box-section-p">
                Transact with more than one currency in your business. Partner
                with international businesses.
              </p>
            </div>
            <div className="box-section">
              <div className="box-section-icons">
                <img
                  src="/images/multi-currency.svg"
                  alt="Multi-currency transactions are now possible"
                  width="28"
                  height="27"
                  loading="lazy"
                ></img>
              </div>
              <h3 className="box-section-h3">
                Multi-currency transactions are now possible
              </h3>
              <p className="box-section-p">
                Transact with more than one currency in your business. Partner
                with international businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="time-grow">
        <div className="containe">
          <div className="text-data">
            <h2 className="text-data-h2">
              It's time to grow with digital <br></br>banking in the business
              world.
            </h2>

            <p className="text-data-p">
              All the transactions you need regarding corporate banking
              <br></br> are gathered in one center. It's time to grow.
            </p>
            <a className="btn-blue" href="/" target="_blank">
              Create Account
            </a>
          </div>
        </div>
      </div>
      <div className="form-chain">
        <div className="form-chain-contianer">
          <div className="bg-form">
            <div>
              <div className="jetonBussiness">
                <p className="jetonBussiness-p">Jetonbank Business</p>
              </div>
              <h2 className="jetonBussiness-h2">
                Fill out the form for a custom pricing offer for you.
              </h2>
              <p className="p-bussiness">
                Help us offer you the best pricing with three simple questions.
              </p>
            </div>
            <form className="form-enquiry">
              <input
                placeholder="Name"
                type="text"
                required=""
                className="form_name"
                name="name"
                value=""
                readOnly
              ></input>
              <select
                name="interestedIn"
                required=""
                className="interestedIn select"
                aria-label="interested-in"
              >
                <option disabled="" hidden="" selected="">
                  Interested in?
                </option>
                <option value="digital-wallet-and-fiat-transfers">
                  Digital Wallet &amp; Fiat Transfers
                </option>
                <option value="crypto-products">Crypto Products</option>
                <option value="other">Other</option>
              </select>
              <select
                name="interestedIn"
                required=""
                className="interestedIn select"
                aria-label="interested-in"
              >
                <option disabled="" hidden="" selected="">
                  What is your expected monthly volume?
                </option>
                <option value="digital-wallet-and-fiat-transfers">
                  Digital Wallet &amp; Fiat Transfers
                </option>
                <option value="crypto-products">Crypto Products</option>
                <option value="other">Other</option>
              </select>
              <input
                placeholder="Your Email"
                type="email"
                required=""
                className="form_name"
                name="email"
                value=""
                readOnly
              ></input>
              <div className="check-box">
                <input
                  id="terms-conditions"
                  type="checkbox"
                  className="checkbox-pointer"
                  required=""
                  name="termsConditionsAccept"
                ></input>
                <label for="terms-conditions" className="checkbox-labels">
                  I confirm that I have read and agree with{" "}
                  <a className="label-a" href="/terms-conditions">
                    Terms &amp; Conditions{" "}
                  </a>
                  and{" "}
                  <a className="font-medium" href="/privacy-policy">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              <div className="get-offer-button">
                <button type="submit" className="getbtnsubmit _btnGet_Primary">
                  Get the Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contorl-erp-section">
        <div className="control-grid">
          <div className="grid-col-section">
            <h2
              className="contorl-erp-h2
            "
            >
              Easy control with single center
            </h2>
            <p className="contorl-erp-p">
              International transactions are no longer difficult. Grow your
              business, manage all your transactions from a single center.
            </p>
            <div className="control-getStarted">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="control-a"
              >
                Get Started
                <img
                  alt="arrow 1"
                  loading="lazy"
                  width="16"
                  height="14"
                  decoding="async"
                  data-nimg="1"
                  className="control-arrow"
                  style={{ color: "transparent" }}
                  src="/images/arrow-right.svg"
                />
              </a>
              <img
                src="/images/business-box-1.webp"
                className="business-img-box1"
                style={{ color: "transparent" }}
              ></img>
            </div>
          </div>
          <div className="grid-col-section">
            <h2
              className="contorl-erp-h2
            "
            >
              {/* Money transfer between businesses */}
              Safe and secure account
            </h2>
            <p className="contorl-erp-p">
              International transactions are no longer difficult. Grow your
              business, manage all your transactions from a single center.
            </p>
            <div className="control-getStarted">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="control-a"
              >
                Get Started
                <img
                  alt="arrow 1"
                  loading="lazy"
                  width="16"
                  height="14"
                  decoding="async"
                  data-nimg="1"
                  className="control-arrow"
                  style={{ color: "transparent" }}
                  src="/images/arrow-right.svg"
                />
              </a>
              <img
                src="/images/business-box-1.webp"
                className="business-img-box1"
                style={{ color: "transparent" }}
              ></img>
            </div>
          </div>
          <div className="grid-col-section">
            <h2
              className="contorl-erp-h2
            "
            >
              {/* Safe and secure account */}Money transfer between businesses
            </h2>
            <p className="contorl-erp-p">
              International transactions are no longer difficult. Grow your
              business, manage all your transactions from a single center.
            </p>
            <div className="control-getStarted">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="control-a"
              >
                Get Started
                <img
                  alt="arrow 1"
                  loading="lazy"
                  width="16"
                  height="14"
                  decoding="async"
                  data-nimg="1"
                  className="control-arrow"
                  style={{ color: "transparent" }}
                  src="/images/arrow-right.svg"
                />
              </a>
              <img
                src="/images/business-box-1.webp"
                className="business-img-box1"
                style={{ color: "transparent" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
