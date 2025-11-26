"use client";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
import React, { useState } from "react";

export default function Page() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="overflow-x-hidden bg-white">
      <QvipleNavbar />

      {/* HERO */}
      <header className="relative pt-20 lg:pt-[109px]">
        <img
          alt="Hero Background"
          fetchPriority="high"
          width="900"
          height="839"
          decoding="async"
          data-nimg="1"
          className="absolute -z-10 inset-0 w-full h-full object-cover pointer-events-none"
          style={{ color: "transparent" }}
          src="/images/pattern.webp"
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="relative flex flex-col-reverse lg:flex-row items-start lg:items-center gap-8 lg:gap-0">
            {/* Left: text */}
            <div className="w-full lg:w-1/2 lg:pl-[12%]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold text-[#222] leading-snug lg:leading-[60px]">
                Refer and Earn
              </h1>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-[#666] leading-relaxed max-w-xl">
                Invite your friends to Jetonbank and start earning. Our referral
                program is built so you can share benefits and get rewarded for
                every successful referral — simple and transparent.
              </p>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 rounded-md bg-[#4888FB] text-white px-6 py-3 text-base font-medium shadow-md hover:shadow-lg transition"
              >
                Create Account
              </a>
            </div>

            {/* Right: image - desktop absolute like before, mobile stacked below */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                alt="Refer and Earn"
                loading="lazy"
                width="1132"
                height="755"
                decoding="async"
                data-nimg="1"
                src="/images/refer-hero.webp"
                style={{ color: "transparent" }}
                className="w-full max-w-md md:max-w-lg lg:max-w-[1132px] object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* === EARN UP TO SECTION === */}
      <section className="pt-10 lg:pt-16 px-5 sm:px-6 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#222]">
            Earn up to <span className="text-[#4888FB]">30%</span>
          </h2>
          <h3 className="mt-3 text-sm sm:text-lg lg:text-2xl text-[#444] font-medium">
            Start Earning in 3 Easy Steps
          </h3>
        </div>



        <div className="max-w-6xl mx-auto mt-8 lg:mt-12 grid gap-6 md:gap-8 ">
          <article className="bg-[#f6f6f6] rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-lg transition">
            <div className="flex flex-col md:px-[5rem] md:flex-row items-center gap-6 md:gap-36">
              <img
                src="/images/refer-phone.webp"
                alt="Invite Your Friends"
                className="w-full max-w-xs mx-auto md:mx-0 md:w-40 lg:w-72"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl lg:text-[40px] font-semibold text-[#222] leading-tight">
                  <span className="text-[#4888FB]">Step 1</span>
                  <br />
                  Invite Your Friends
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#666] leading-7 max-w-md mx-auto md:mx-0">
                  Share your unique invitation link and have your friends sign
                  up. To qualify, they must complete onboarding and submit any
                  required application fee.
                </p>
              </div>
            </div>
          </article>

          {/* STEP 2 */}
          <article className="bg-[#f6f6f6] rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row-reverse items-center md:px-[5rem] gap-6 md:gap-36">
              <img
                src="/images/refer-rewards.webp"
                alt="Earn Monthly Rewards"
                className="w-full max-w-xs mx-auto md:mx-0 md:w-40 lg:w-72"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl lg:text-[40px] font-semibold text-[#222] leading-tight">
                  <span className="text-[#4888FB]">Step 2</span>
                  <br />
                  Earn Monthly Rewards
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#666] leading-7 max-w-md mx-auto md:mx-0">
                  Referral bonuses are paid out monthly in EUR. Make sure your
                  own onboarding is complete to unlock EUR-denominated rewards.
                </p>
              </div>
            </div>
          </article>

          {/* STEP 3 */}
          <article className="bg-[#f6f6f6] rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row items-center md:px-[5rem] gap-6 md:gap-36">
              <img
                src="/images/refer-chart.webp"
                alt="Tier Based Rewards"
                className="w-full max-w-xs mx-auto md:mx-0 md:w-40 lg:w-72"
              />
              <div className="text-center md:text-left">
                <h3 className="text-xl sm:text-2xl lg:text-[40px] font-semibold text-[#222] leading-tight">
                  <span className="text-[#4888FB]">Step 3</span>
                  <br />
                  Tier Based Rewards
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#666] leading-7 max-w-md mx-auto md:mx-0">
                  Your reward percentage depends on your referrals’ monthly
                  transaction volume — higher activity means bigger rewards.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* === FAQ SECTION === */}
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
                    className={`w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left text-[#0f172a] transition-colors duration-200 ${
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
    question: "How do I generate an IBAN?",
    answer:
      "The International Bank Account Number (IBAN) helps identify beneficiaries for international transfers. It contains up to 34 characters and ensures accuracy in cross-border payments.",
  },
  {
    question: "Is the IBAN number unique for each account?",
    answer:
      "Yes, each IBAN is unique to an individual or business account after successful verification.",
  },
  {
    question: "How to transfer money to an IBAN account?",
    answer:
      "Depending on whether it’s SEPA or SWIFT, you’ll need the IBAN, BIC code, and the beneficiary’s name to complete your transaction.",
  },
  {
    question: "What is the difference between IBAN and account number?",
    answer:
      "The IBAN includes your country, bank, and account number in one string, while an account number alone is shorter and used domestically.",
  },
];
