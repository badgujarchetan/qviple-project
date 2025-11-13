"use client";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
import React, { useState } from "react";
import "./refer-and-earn.css";
export default function Page() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="mt-[-5rem] overflow-x-hidden">
      <QvipleNavbar />

      {/* <div className="relative pt-[109px] bg-gradient-to-br from-[#f8faff] to-[#eef4ff] overflow-hidden">
        <img
          src="/images/pattern.webp"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-25"
        />

        <div className="container mx-auto px-[12%] py-[180px] flex flex-col lg:flex-row justify-between items-center relative gap-10">
         
          <div className="max-w-[540px] z-10">
            <h1 className="text-[56px] md:text-[64px] font-semibold text-[#222] leading-[1.1]">
              Refer and Earn
            </h1>
            <p className="text-[#555] text-[18px] md:text-[20px] my-7 leading-[1.7]">
              Invite your friends to{" "}
              <span className="font-semibold text-[#4888FB]">Jetonbank</span>{" "}
              and start earning. Share the benefits and get rewarded for every
              successful referral you make.
            </p>
            <a
              href="#"
              className="inline-block bg-[#4888FB] hover:bg-[#2f6ee8] transition-all text-white px-8 py-3 rounded-md text-[18px] font-medium shadow-md hover:shadow-lg"
            >
              Create Account
            </a>
          </div>

          <div className="relative flex justify-center lg:justify-end w-full lg:w-[100%]">
            <div className="w-full flex justify-center lg:justify-end pr-0 lg:pr-[4rem] xl:pr-[8rem]">
              <img
                src="/images/refer-hero.webp"
                alt="Refer and Earn Illustration"
                className="w-[100%] max-w-[950px] lg:max-w-[1000px] xl:max-w-[1100px] object-contain drop-shadow-2xl scale-[1.05] lg:scale-[1.15] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className=" relative pt-[109px]">
        <img
          alt="Hero Background"
          fetchPriority="high"
          width="900"
          height="839"
          decoding="async"
          data-nimg="1"
          className="absolute -z-10 w-full h-full left-0 top-0 object-cover"
          style={{ color: "transparent" }}
          src="/images/pattern.webp"
        ></img>
        <div className=" w-[100%] mr-auto ml-auto pr-[20px] pl-[20px]">
          <div className="pl-[12%]  items-center justify-center relative pt-[207px] pb-[263px]">
            <div className=" max-w-[540px]">
              <h1 className="text-[64px] text-primary font-semibold leading-[60px]">Refer and Earn</h1>
              <p className="text-secondary text-[20px] my-7 leading-[26px] ">Invite your friends to Jetonbank and start earning. Our referral program is designed to make it easy for you to share the benefits of Jetonbank while getting rewarded for every successful referral.</p>
              <a className="sign-up-create" href="#" target="_blank">Create Account</a>
            </div>
            <img
              alt="Refer and Earn"
              loading="lazy"  
              width="1132"
              height="755"
              decoding="async"
              data-nimg="1"
              className="max-w-[1132px] w-full absolute bottom-0 -right-[13rem]  pr-[12%] "
              style={{ color: "transparent" }}
              src="/images/refer-hero.webp"
            ></img>
          </div>
        </div>
      </div>

      {/* === EARN UP TO SECTION === */}
      <div className="px-5">
        <h2 className="text-center text-[#222] font-semibold text-5xl mt-32">
          Earn up to 30%
        </h2>
        <h3 className="text-center text-[#444] font-medium text-3xl mt-3 mb-20">
          Start Earning in 3 Easy Steps
        </h3>

        <div className="flex flex-col gap-16 px-[11%]">
          {/* STEP 1 */}
          <div className="flex flex-col lg:flex-row justify-between bg-[#f6f6f6] rounded-2xl p-10 items-center hover:shadow-xl transition-all duration-300">
            <div className="max-w-[570px] py-10">
              <h3 className="text-[#222] text-[40px] font-semibold leading-[45px] mb-5">
                <span className="text-[#4888FB]">Step 1</span> <br /> Invite
                Your Friends
              </h3>
              <p className="text-[#666] text-[18px] leading-7">
                Share your unique invitation link and have your friends sign up.
                To qualify, they must complete onboarding and submit any
                required application fee.
              </p>
            </div>
            <img
              src="/images/refer-phone.webp"
              alt="Invite Your Friends"
              className="max-w-[329px] w-full mt-[-1rem]"
            />
          </div>

          {/* STEP 2 */}
          <div className="flex flex-col lg:flex-row justify-between items-center bg-[#f6f6f6] rounded-2xl px-10 py-8 hover:shadow-xl transition-all duration-300">
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
                Referral bonuses are paid out monthly in EUR. Make sure your own
                onboarding is complete to unlock EUR-denominated rewards.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex flex-col lg:flex-row justify-between bg-[#f6f6f6] rounded-2xl p-10 items-center hover:shadow-xl transition-all duration-300">
            <div className="max-w-[570px] py-10">
              <h3 className="text-[#222] text-[40px] font-semibold leading-[45px] mb-5">
                <span className="text-[#4888FB]">Step 3</span> <br /> Tier Based
                Rewards
              </h3>
              <p className="text-[#666] text-[18px] leading-7">
                Your reward percentage depends on your referrals’ monthly
                transaction volume — higher activity means bigger rewards.
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

      {/* === FAQ SECTION === */}
      <div className="mt-28 px-5 mb-28">
        <h2 className="text-center text-[#0e1a2c] text-[40px] font-semibold mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
          {faqs.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className={`w-full flex justify-between items-center text-left py-6 px-6 md:px-10 font-medium text-[#0f172a] text-[18px] transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#f9f9f9] text-[#4888FB]"
                    : "bg-white hover:bg-gray-50"
                }`}
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <span className="text-[22px] font-bold text-[#4888FB]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="px-6 md:px-10 text-[#6b7280] text-[15px] leading-relaxed pb-5">
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
