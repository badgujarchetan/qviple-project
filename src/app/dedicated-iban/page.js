"use client";
import { useState } from "react";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
import React from "react";
import "./dedicatd-iban.css";
export default function page() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="dedicatd-iban-section">
      <QvipleNavbar />
      <div className="dedicatd-iban-container">
        <img
          alt="Hero Background"
          fetchPriority="high"
          loading="eager"
          width="2560"
          height="640"
          decoding="async"
          data-nimg="1"
          className="private-hero-img"
          style={{ color: "transparent" }}
          src="/images/private-hero-pattern.webp"
        ></img>
        <div className="container">
          <div className="cont-div">
            <div className="padding-top-div">
              <h1 className="cont-h1">
                Get a dedicated SEPA IBAN account for your business
              </h1>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white contact"
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
            <picture className="img-right-section">
              <img
                alt="dedicated IBAN"
                loading="eager"
                width="606"
                height="670"
                decoding="async"
                data-nimg="1"
                className="dedicated-hero-img"
                style={{ color: "transparent" }}
                src="/images/dedicated-hero.webp"
              ></img>
            </picture>
          </div>
        </div>
      </div>
      <div className="back-img"></div>
      <div className="container-blue-section">
        <div className="blue-section">
          <div className="text-white-section">
            <h2 className="text-white-h2">
              Get a Euro IBAN for your company’s tradings
            </h2>
            <p className="text-white-p">
              Creating a private IBAN account for your business in an ordinary
              bank may be more difficult and troublesome than you imagine. It is
              both a time consuming and a complex process.
              <br></br>
              This is where we step in as Jetonbank. We offer you the
              opportunity to make your Euro transactions by creating a
              completely secure and unique IBAN account. With your Euro IBAN
              account, which you can get online, you can perform all your
              trading without any problems.
            </p>
          </div>
          <img
            alt="Euro IBAN"
            loading="lazy"
            width="700"
            height="526"
            decoding="async"
            data-nimg="1"
            className="Euro-IBAN-imag"
            style={{ color: "trans'" }}
            src="/images/jtn-ui-2.webp"
          ></img>
        </div>
      </div>
      <div className="start-small">
        <p className="start-small-p">START SMALL, GROW WITH JETONBANK</p>
        <h2 className="start-small-h2">
          Let’s grow your business <br></br> together in digital banking
        </h2>
        <div className="start-small-div">
          <div>
            <h2 className="h2-premium">
              Premium low fee Euro IBAN{" "}
              <span className="span-h2">for Selected Businesses</span>
            </h2>
            <p className="p-premium">
              Jetonbank makes your business easier with the low fee Euro IBAN
              account it offers to selected business owners. You can also create
              an account for detailed information about business account setup
              and pricing.
            </p>
          </div>
          <img
            alt="Premium low fee Euro IBAN"
            fetchPriority="high"
            width="600"
            height="400"
            decoding="async"
            data-nimg="1"
            className="image-premium"
            style={{ color: "transparent" }}
            src="/images/euro-iban.webp"
          ></img>
        </div>

        <div
          style={{
            backgroundImage: `linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)`,
          }}
          className="additional-service"
        >
          <div className="container-additional-service">
            <p className="additional-service-p">Additional Services</p>
            <h2 className="additional-service-h2">
              Discover Jetonbank Services <br /> for Seamless Digital Banking
            </h2>

            <div className="additional-service-grid">
              <div className="grid-card-section">
                <div className="phone-frame">
                  <img
                    alt="Transfers with EU SEPA"
                    src="/images/sepa.webp"
                    className="phone-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h2 className="h2-additional-service">
                  Transfers with EU SEPA
                </h2>
                <p className="p-additional-service">
                  If you live in the Eurozone, this is a great service method of
                  sending and receiving money that you can easily use in your
                  daily life!
                </p>
              </div>

              <div className="grid-card-section">
                <div className="phone-frame">
                  <img
                    alt="SWIFT Transfers Worldwide"
                    src="/images/worldwide.webp"
                    className="phone-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h2 className="h2-additional-service">
                  SWIFT Transfers Worldwide
                </h2>
                <p className="p-additional-service">
                  You can schedule your SWIFT transfers to pay the same amount
                  regularly — effortless, reliable, and completely safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-container">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${openIndex === index ? "open" : ""}`}
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className="faq-answer"
              style={{
                maxHeight: openIndex === index ? "200px" : "0",
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grow-your-business">
        <div className="grow-container">
          <div className="grow-container-div">
            <div className="grow-divide-section">
              <h2 className="grow-h2">Grow your business with Jetonbank</h2>
              <p className="grow-p">
                All the banking transactions your business needs in a single
                account.
              </p>
              <a
                className="grow-btn-primary"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SIGN UP NOW →
              </a>
            </div>
            <img
              src="/images/jtn-laptop.webp"
              alt="Grow your business with Jetonbank"
              className="jtn-laptop"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "How do I generate an IBAN?",
    answer:
      "The International Bank Account Number is a numbering system that allows identifying the beneficiary when it comes to cross-border and international money transfers. It is utilized within the eurozone and by other countries. The length of an IBAN differs, but it can't contain more than 34 characters.",
  },
  {
    question: "Is the IBAN number unique for each account?",
    answer:
      "Anyone who meets our verification requirements — individuals or businesses — can open an account.",
  },
  {
    question: "How to transfer money to an IBAN account?",
    answer:
      "It depends on the type of transfer you make. For instance, both SEPA and SWIFT payments require an IBAN or an account number (in case of SWIFT transfers), a BIC code, and the beneficiary's name.",
  },
  {
    question: "What is the difference between IBAN and account number?",
    answer:
      "As was mentioned above, the IBAN consists of many different indicators, one of which is the account number. The account number (usually 10 to 12 characters) is shorter than the IBAN.",
  },
];
