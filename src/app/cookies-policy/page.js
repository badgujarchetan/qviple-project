"use client";

import React from "react";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";

export default function CookiesPolicy() {
  return (
    <div className="relative -mt-20 mb-[1rem] ">
      <QvipleNavbar />

      {/* ===== HERO SECTION ===== */}
      <section className="w-full bg-[url('/images/pattern.webp')] bg-cover bg-center min-h-[300px] md:min-h-[450px] md:pt-24 flex items-center justify-center">
        <h1 className="text-[clamp(28px,6vw,52px)] font-semibold text-gray-900 text-center ">
          Cookies Policy
        </h1>
      </section>

      {/* ===== MAIN CONTENT BOX ===== */}
      <div className="w-full md:max-w-[1200px] mx-auto px-4 md:px-10 lg:px-20 -mt-24">
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 md:p-16 text-gray-800 leading-7 text-[15px] md:text-lg">
          <h3 className="text-lg font-semibold my-4">Necessary Cookies</h3>
          <p className="text-[18px] leading-[34px] my-4">
            We need to use these cookies to make our website work. These are all
            necessary for us to function and cannot be switched off in our
            systems. They are for setting responses to actions made by you, such
            as setting your privacy preferences, logging in or filling forms.
          </p>

          <h3 className="text-lg font-semibold my-6">
            Jeton Bank Limited Cookies Policy
          </h3>
          <p className="text-[18px] leading-[34px] my-4">
            These cookies allow us to count visits and traffic sources so we can
            measure and improve the performance of our site. All information
            that our cookies collect is aggregated and anonymous.
          </p>

          <p className="text-[18px] leading-[34px] my-4">
            These also allow us to see the pages and links you have visited so
            we can prevent relevant ads. We don't store directly personal
            information but identify your browser and internet device. If you do
            not allow these cookies, you will experience less targeted
            advertising.
          </p>
        </div>
      </div>

      {/* ===== BOTTOM CTA BANNER ===== */}
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
