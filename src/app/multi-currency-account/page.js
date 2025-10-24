
"use client"
import React from "react";
import "./multi-currency-account.css";
import { useState } from "react";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
export default function page() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="multi-currency-main">
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
                Multi Currency <br></br> Account
              </h1>
              <p className="account-p">
                Manage your finances accross multiple currencies
              </p>
              <a
                className="account-a"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </div>
      <picture className="account-picture">
        <img
          alt="Your Digital Partner in Banking"
          className="account-imgss"
          loading="eager"
          width="973"
          height="732"
          src="/images/jtn-ui-2.webp"
        ></img>
      </picture>

      <div className="manage-linear spy-16">
        <div className="manage-page-container max-wi">
          <div className="divide-2-section">
            <div>
              <h2 className="global-transactions">
                Manage over 30 currencies in one account and simplify global
                transactions with ease.
              </h2>
              <div className="global-transactions-image">
                <div className="global-transactions-bg">
                  <img
                    alt="Move your business to digital"
                    loading="lazy"
                    width="59"
                    height="44"
                    decoding="async"
                    data-nimg="1"
                    className="cloud-images"
                    style={{ color: "transparent" }}
                    src="/images/cloud-money.svg"
                  ></img>
                </div>
                <div>
                  <h2 className="competitive-title">Competitive FX Rates</h2>
                  <p className="enhance-text">
                    Enhance your FX experience with our streamlined solutions,
                    enabling real-time transactions at competitive rates.
                  </p>
                </div>
              </div>
              <div className="global-transactions-image">
                <div className="global-transactions-bg">
                  <img
                    alt="Move your business to digital"
                    loading="lazy"
                    width="59"
                    height="44"
                    decoding="async"
                    data-nimg="1"
                    className="cloud-images"
                    style={{ color: "transparent" }}
                    src="/images/cloud-money.svg"
                  ></img>
                </div>
                <div>
                  <h2 className="competitive-title fx-rates">
                    Competitive FX Rates
                  </h2>
                  <p className="enhance-text">
                    Enhance your FX experience with our streamlined solutions,
                    enabling real-time transactions at competitive rates.
                  </p>
                </div>
              </div>
              <div className="global-transactions-image">
                <div className="global-transactions-bg">
                  <img
                    alt="Move your business to digital"
                    loading="lazy"
                    width="59"
                    height="44"
                    decoding="async"
                    data-nimg="1"
                    className="cloud-images"
                    style={{ color: "transparent" }}
                    src="/images/cloud-money.svg"
                  ></img>
                </div>
                <div>
                  <h2 className="competitive-title fx-rates">
                    Competitive FX Rates
                  </h2>
                  <p className="enhance-text">
                    Enhance your FX experience with our streamlined solutions,
                    enabling real-time transactions at competitive rates.
                  </p>
                </div>
              </div>
              <div className="global-transactions-image">
                <div className="global-transactions-bg">
                  <img
                    alt="Move your business to digital"
                    loading="lazy"
                    width="59"
                    height="44"
                    decoding="async"
                    data-nimg="1"
                    className="cloud-images"
                    style={{ color: "transparent" }}
                    src="/images/cloud-money.svg"
                  ></img>
                </div>
                <div>
                  <h2 className="competitive-title fx-rates">
                    Competitive FX Rates
                  </h2>
                  <p className="enhance-text">
                    Enhance your FX experience with our streamlined solutions,
                    enabling real-time transactions at competitive rates.
                  </p>
                </div>
              </div>
            </div>

            <img
              alt="Competitive FX Rates"
              loading="lazy"
              width="464"
              height="500"
              decoding="async"
              data-nimg="1"
              className="competitive-imges"
              style={{ color: "transparent" }}
              src="/images/mdc.webp"
            ></img>
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
    </div>
  );
}

const faqs = [
  {
    question: "Which currencies are supported?",
    answer:
      "A multi-currency account allows businesses to hold, manage, and transact in multiple currencies within a single account. It simplifies international payments and helps avoid unnecessary conversion fees.",
  },
  {
    question: "Who can open a multi-currency account?",
    answer:
      "Anyone who meets our verification requirements — individuals or businesses — can open an account.",
  },
  {
    question: "How can I benefit from competitive exchange rates?",
    answer:
      "We provide real-time market-based exchange rates, helping you save on international transfers.",
  },
  {
    question: "Can I send and receive payments in different currencies?",
    answer:
      "Yes, you can easily send and receive funds in multiple currencies from one account.",
  },
  {
    question: "Is there a fee for currency conversion?",
    answer:
      "A small conversion fee applies depending on the currency pair. Check our fee schedule for details.",
  },
];
