
"use client";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
import React from "react";

export default function Page() {
  return (
    <div className="relative -mt-20 ">
      <QvipleNavbar />

      <section className="w-full bg-[url('/images/pattern.webp')] bg-cover bg-center min-h-[300px] md:min-h-[450px] md:pt-24 flex items-center justify-center">
        <h1 className="text-[clamp(28px,6vw,52px)] font-semibold text-gray-900 text-center">
          Information Security Policy
        </h1>
      </section>

      <div className="w-full md:max-w-[1200px] mx-auto px-2 md:px-10 lg:px-20 -mt-24">
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 md:p-16 text-gray-800 leading-7 text-[15px] md:text-lg">
          {termsData.map((item, index) => (
            <div key={index}>
              {item.type === "title" && (
                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">
                  {item.content}
                </h3>
              )}

              {item.type === "paragraph" && (
                <p className="text-[1.15rem] leading-[2rem] text-gray-700 my-4">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

       <section className="w-full px-4 md:px-[16%]">
        <div className="bg-[#4888fb] rounded-2xl text-center py-16 md:py-24 mt-4 px-6 flex flex-col items-center">
          <h2 className="text-white font-semibold text-[clamp(28px,6vw,50px)] leading-tight max-w-[750px]">
            Jetonbank is an entirely new kind of bank.
          </h2>
          <p className="text-white text-[15px] md:text-xl leading-7 max-w-[500px] mt-4">
            We're all-digital, mission driven, and designed for the way you
            live.
          </p>

          <button className="md:mt-6 mt-[1rem] px-8 cursor-pointer py-3 text-lg bg-white text-[#4888fb] font-semibold rounded-lg shadow hover:scale-105 transition-all">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
const termsData = [
  {
    type: "paragraph",
    content: `Jeton Bank Limited, an international bank existing under the Commonwealth of Dominica, and having its registered Head Office, at 1st Floor, 43 Great George Street, Roseau, Commonwealth of Dominica, licensed as a bank institution under the Offshore Banking Act (the “Law”), fully authorized to provide services to clients worldwide, except for Commonwealth of Dominica citizens and residents, under the prudential supervision of the Financial Services Unit ).`,
  },
  { type: "title", content: "1. General" },
  {
    type: "paragraph",
    content: `1.1. Please read the details set out below carefully before using this website (the “Site”). By accessing this Site, you agree to be bound by the following terms and conditions and disclaimers (the “Terms”).`,
  },
  {
    type: "paragraph",
    content: `1.2. Before using this Site, you should read the Terms carefully, as well as our Privacy Notice (which includes our Cookies Policy).`,
  },
  {
    type: "paragraph",
    content: `1.3. References to ‘you’ and ‘your’ are references to you and the person(s) accessing the Site in respect of your Account(s).`,
  },
  {
    type: "paragraph",
    content: `1.4. References to ‘Bank’, ‘we’, ‘us’ and ‘our’ are references to Jeton Bank Limited, 1st Floor, 43 Great George Street, Roseau, Commonwealth of Dominica.`,
  },
  {
    type: "paragraph",
    content: `1.5. All our products and services are subject to the terms and conditions...`,
  },
  { type: "title", content: "2. Users of This Site" },
  {
    type: "paragraph",
    content: `2.1. This Site is owned, operated, managed and issued by the Bank, which is licensed to conduct banking business...`,
  },
  {
    type: "paragraph",
    content: `2.2. You are wholly responsible for the use of the Site by any person using your computer...`,
  },
  { type: "title", content: "3. Country Guidelines" },
  {
    type: "paragraph",
    content: `3.1. Not all products, services and investments described on this site are available in all jurisdictions...`,
  },
  {
    type: "paragraph",
    content: `3.2. This Site does not constitute an invitation to buy or the solicitation of an offer...`,
  },
  { type: "title", content: "4. About and Conditions" },
  {
    type: "paragraph",
    content: `4.1. Please read the details set out below carefully before using this website (the “Site”). By accessing this Site, you agree to be bound by the following terms and conditions and disclaimers (the “Terms”).`,
  },
];
