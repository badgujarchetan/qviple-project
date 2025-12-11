"use client";

import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
import React from "react";

export default function Page() {
  return (
    <div className="relative -mt-20  mb-[1rem]">
      <QvipleNavbar />

      <section className="w-full bg-[url('/images/pattern.webp')] bg-cover bg-center min-h-[300px] md:min-h-[450px] md:pt-24 flex items-center justify-center">
        <h1 className="text-[clamp(28px,6vw,52px)] font-semibold text-gray-900 text-center">
          General Terms
        </h1>
      </section>

      <section className="w-full md:max-w-[1200px] mx-auto px-4 md:px-10 lg:px-20 -mt-24">
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 md:p-16 text-gray-800 leading-7 text-[15px] md:text-lg">
          <div className="space-y-6">
            {termsData.map((item, index) => {
              if (item.type === "paragraph") {
                return (
                  <p key={index}>
                    {item.bold && (
                      <strong className="font-semibold text-gray-900">
                        {item.bold}
                      </strong>
                    )}
                    {item.text}
                  </p>
                );
              }

              if (item.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-semibold text-gray-900 mt-8"
                  >
                    {item.title}
                  </h2>
                );
              }

              // if (item.type === "heading") {
              //   return (
              //     <h3
              //       key={index}
              //       className="text-xl font-semibold text-gray-900 mt-6"
              //     >
              //       {item.title}
              //     </h3>
              //   );
              // }

              if (item.type === "list") {
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>
                );
              }

              return null;
            })}
          </div>
        </div>
      </section>

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
    bold: "Our agreement for the provision of Jeton Bank Services to you.",
    text: "We (Jeton Bank Limited...) Lorem ipsum dolor sit amet consectetur adipisicing elit kind of people",
  },
  {
    type: "heading",
    title: "1. Introduction",
  },
  {
    type: "paragraph",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar...",
  },
  {
    type: "heading",
    title: "1.1 Eligibility",
  },
  {
    type: "list",
    items: [
      "You must be 18+",
      "You must agree to terms",
      "You must provide valid documents",
      "You must provide valid documents",
    ],
  },
  {
    type: "heading",
    title: "1.2 Registration Requirements",
  },
  {
    type: "list",
    items: [
      "Provide government ID",
      "Verify phone number",
      "Accept Privacy Policy",
    ],
  },
  {
    type: "heading",
    title: "1.3 Compliance Rules",
  },
  {
    type: "list",
    items: [
      "No fraudulent activity",
      "No illegal transactions",
      "Maintain truthful information",
    ],
  },
  {
    type: "heading",
    title: "1.4 Maintain truthful information",
  },
  {
    type: "list",
    items: [
      "No fraudulent activity",
      "No illegal transactions",
      "Maintain truthful information",
    ],
  },
  // {
  //   type: "paragraph",
  //   text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem…",
  // },
];
