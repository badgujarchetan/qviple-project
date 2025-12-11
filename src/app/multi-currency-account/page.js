"use client";
import React, { useState } from "react";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";

export default function Page() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="-mt-[5rem]">
      <QvipleNavbar />

      {/* ---------- HERO SECTION ---------- */}
      <div className="relative pt-[120px] pb-[80px]">
        <img
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="/images/grow-hero-bg.webp"
        />

        <div className="w-full max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-[40px] md:text-[64px] font-bold leading-tight text-[#222]">
            Multi Currency <br className="hidden md:block" /> Account
          </h1>

          <p className="text-[16px] md:text-[20px] text-[#666] mt-4 md:mt-5 mb-6">
            Manage your finances across multiple currencies
          </p>

          <a
            href="/"
            className="inline-block bg-[#4888FB] text-white text-[16px] md:text-[18px] font-medium rounded-md py-[14px] px-6 md:px-10"
          >
            GET STARTED
          </a>
        </div>
      </div>

      {/* ---------- MID IMAGE ---------- */}
      <div className="w-full flex justify-center px-4">
        <img
          src="/images/jtn-ui-2.webp"
          className="w-full max-w-[900px] rounded-lg mt-10"
          alt="ui"
        />
      </div>

      <div className="relative py-16 md:py-28 mt-10 bg-[#111B37]">
        <div className="w-full max-w-[1300px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className=" pl-[3rem]">
            <h2 className="text-white text-[30px] md:text-[42px] font-bold leading-[1.3] mb-10">
              Manage over 30 currencies in one account and simplify global
              transactions with ease.
            </h2>

            {/* FEATURES LOOP */}
            {features.map((feature, i) => (
              <div
                key={i}
                className="group flex gap-6 pb-6 mb-6 border-b border-white/10 hover:border-[#4b8bff] transition-all duration-300"
              >
                {/* <div
                  className="
    bg-[#1b2a52]
    w-[70px] h-[70px] 
    md:w-[90px] md:h-[90px] 
    flex justify-center items-center
    rounded-2xl
    shadow-[0_8px_25px_rgba(0,0,0,0.25)]
    transition-all duration-300 ease-out
    group-hover:scale-110 group-hover:shadow-[0_12px_35px_rgba(11,94,255,0.4)]
  "
                >
                  <img
                    src={feature.icon}
                    alt="icon"
                    className="w-[34px] h-[34px] md:w-[42px] md:h-[42px] transition-transform duration-300 group-hover:scale-110"
                  />
                </div> */}

                <div>
                  <h3 className="text-white text-[20px] md:text-[24px] font-semibold mb-2 group-hover:text-[#4b8bff] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#9fb2d1] text-[14px] md:text-[16px] leading-[1.7]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/images/mdc.webp"
              className="w-full max-w-[520px] drop-shadow-2xl rounded-xl transition-all duration-500 hover:scale-[1.03]"
              alt="ui"
            />
          </div>
        </div>
      </div>

      {/* ---------- FAQ SECTION ---------- */}
      <section className="mt-10 lg:mt-20 px-5 sm:px-6 lg:px-20 mb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-[#0e1a2c] text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-200 overflow-hidden">
            {faqs.map((item, index) => {
              const open = openIndex === index;
              return (
                <div key={index} className="">
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={open}
                    aria-controls={`faq-${index}`}
                    className={`w-full cursor-pointer flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left text-[#0f172a] transition-colors duration-200 ${
                      open
                        ? "bg-[#f9fafb] text-[#4888FB]"
                        : "bg-white hover:bg-gray-50"
                    }`}
                    style={{ minHeight: 56 }}
                  >
                    <span className="text-base sm:text-[18px] font-medium">
                      {item.question}
                    </span>
                    <span className="ml-4 text-[20px] font-bold text-[#4888FB]">
                      {open ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={`faq-${index}`}
                    className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ${
                      open ? "max-h-[400px] py-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-[#6b7280] text-sm sm:text-[15px] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

const faqs = [
  {
    question: "Which currencies are supported?",
    answer:
      "A multi-currency account allows businesses to hold and transact in multiple currencies to avoid unnecessary conversion fees.",
  },
  {
    question: "Who can open a multi-currency account?",
    answer: "Any verified individual or business can open this account.",
  },
  {
    question: "How can I benefit from competitive exchange rates?",
    answer:
      "You get real-time market exchange rates, allowing affordable international transfers.",
  },
  {
    question: "Can I send and receive payments in different currencies?",
    answer:
      "Yes, you can send and receive money in different currencies inside one account.",
  },
  {
    question: "Is there a fee for currency conversion?",
    answer:
      "A small fee applies depending on the currency pair. View our pricing page for full details.",
  },
];
const features = [
  {
    title: "Competitive FX Rates",
    desc: "Enhance your FX experience with our streamlined solutions, enabling real-time transactions at competitive rates.",
    // icon: "/images/cloud-money.svg",
  },
  {
    title: "International Transactions",
    desc: "Effortlessly hold and manage multiple currencies, including USD, EUR, GBP, and more. Simplify international transactions while reducing the risks associated with currency fluctuations.",
    // icon: "/images/cloud-money.svg",
  },
  {
    title: "Easy Account Management",
    desc: "Manage all your currencies from a single account with ease. Our intuitive platform gives you a clear overview of your balances and transaction history, helping you stay in control of your finances.",
    // icon: "/images/cloud-money.svg",
  },
  {
    title: "Competitive FX Rates",
    desc: "Enhance your FX experience with our streamlined solutions, enabling real-time transactions at competitive rates.",
    // icon: "/images/cloud-money.svg",
  },
];
