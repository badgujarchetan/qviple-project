"use client";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
import React, { useState } from "react";

export default function Page() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="mt-[-5rem] overflow-x-hidden">
      <QvipleNavbar />

      {/* HERO SECTION */}
      <div className="relative pt-[109px]">
        <img
          src="/images/pattern.webp"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="container mx-auto px-[12%] py-[200px] flex flex-col lg:flex-row justify-between items-center relative">
          <div className="max-w-[540px]">
            <h1 className="text-[64px] font-semibold text-[#222] leading-[60px]">
              Refer and Earn
            </h1>
            <p className="text-[#666] text-[20px] my-7">
              Invite your friends to Jetonbank and start earning. Our referral
              program is designed to make it easy for you to share the benefits
              of Jetonbank while getting rewarded for every successful referral.
            </p>
            <a
              href="#"
              className="inline-block bg-[#4888FB] text-white px-8 py-3 rounded-md text-[18px] font-medium"
            >
              Create Account
            </a>
          </div>

          <img
            src="/images/refer-hero.webp"
            alt="Refer and Earn"
            className="max-w-[700px] w-full relative lg:absolute lg:right-[-13rem] lg:bottom-0"
          />
        </div>
      </div>

      {/* EARN UP TO SECTION */}
      <div className="px-5">
        <h2 className="text-center text-[#222] font-semibold text-5xl mt-32">
          Earn up to 30%
        </h2>
        <h3 className="text-center text-[#222] font-semibold text-3xl mt-3 mb-20">
          Start Earning in 3 Easy Steps
        </h3>

        {/* STEP 1 */}
        <div className="flex flex-col gap-12 px-[11%]">
          <div className="flex flex-col lg:flex-row justify-between bg-[#f6f6f6] rounded-lg p-10 items-center">
            <div className="max-w-[570px] py-10">
              <h3 className="text-[#222] text-[40px] font-semibold leading-[45px] mb-5">
                <span className="text-[#4888FB]">Step 1</span> <br /> Invite Your
                Friends
              </h3>
              <p className="text-[#666] text-[18px] leading-7">
                Share your unique invitation link and have your friends sign up.
                To qualify, they must complete the onboarding process and submit
                the application fee (if applicable).
              </p>
            </div>
            <img
              src="/images/refer-phone.webp"
              alt="Invite Your Friends"
              className="max-w-[329px] w-full mt-[-1rem]"
            />
          </div>

          {/* STEP 2 */}
          <div className="flex flex-col lg:flex-row justify-between items-center bg-[#f6f6f6] rounded-lg px-10 py-8">
            <img
              src="/images/refer-rewards.webp"
              alt="Earn Monthly Rewards"
              className="max-w-[456px] w-full mb-5 lg:mb-0"
            />
            <div className="max-w-[472px]">
              <h3 className="text-[#222] text-[40px] font-semibold leading-[45px] mb-5">
                <span className="text-[#4888FB]">Step 2</span> <br /> Earn
                Monthly Rewards
              </h3>
              <p className="text-[#666] text-[18px] leading-7">
                Your referral bonuses will be paid out every month in EUR. To
                unlock EUR-denominated rewards, ensure your own onboarding is
                complete.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex flex-col lg:flex-row justify-between bg-[#f6f6f6] rounded-lg p-10 items-center">
            <div className="max-w-[570px] py-10">
              <h3 className="text-[#222] text-[40px] font-semibold leading-[45px] mb-5">
                <span className="text-[#4888FB]">Step 3</span> <br /> Tier Based
                Rewards
              </h3>
              <p className="text-[#666] text-[18px] leading-7">
                The percentage of your referral rewards is calculated based on
                your friends’ monthly transactional volumes, with higher volumes
                unlocking greater rewards.
              </p>
            </div>
            <img
              src="/images/refer-chart.webp"
              alt="Tier Based Rewards"
              className="max-w-[520px] w-full"
            />
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-28 px-5">
        <h2 className="text-center text-[#0e1a2c] text-[40px] font-semibold mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto">
          {faqs.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className={`w-full flex justify-between items-center text-left py-6 px-4 md:px-10 font-medium text-[#0f172a] text-[18px] transition-colors ${
                  openIndex === index ? "bg-gray-50" : "bg-white"
                }`}
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <span className="text-[22px] font-bold text-[#0d2b4a]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="px-4 md:px-10 text-[#6b7280] text-[15px] leading-relaxed pb-5">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
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
