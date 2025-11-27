import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";
import React from "react";

export default function page() {
  return (
    <div className="-mt-[5rem]">
      <QvipleNavbar />
      <div className="relative w-full bg-white overflow-hidden">
        {/* Background */}
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
          src="/images/private-hero-pattern.webp"
          alt="private-hero-pattern.webp"
        />

        {/* WRAPPER */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 py-24 lg:py-24">
          <div
            className="
        grid grid-cols-1 
        lg:grid-cols-2 
        items-center 
        gap-12 
        lg:gap-16 
        order-last
      "
          >
            {/* RIGHT SIDE IMAGE — NOW COMES FIRST ON MOBILE */}
            <div className="flex justify-center order-1 lg:order-2">
              <picture>
                <img
                  alt="Business Banking"
                  className="w-[90%] sm:w-[75%] lg:w-full max-w-[520px] mx-auto drop-shadow-xl rounded-2xl"
                  loading="eager"
                  src="/images/business-hero-mobile.webp"
                />
              </picture>
            </div>

            {/* LEFT SIDE TEXT — NOW BELOW IMAGE ON MOBILE */}
            <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Business <br /> Banking
              </h1>

              <p className="text-lg sm:text-xl text-gray-600">
                Grow your business with <br className="hidden sm:block" />
                international banking
              </p>

              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-all text-gray-900 font-medium"
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
                  />
                </svg>
                Schedule Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  mb-[3rem] md:pb-[4.3rem] px-1.5 md:px-4">
        <div className="max-w-6xl mx-auto">
          {/* BLUE SECTION */}
          <div className="bg-[#4888FB] rounded-2xl px-6 sm:px-10 py-12 mt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* TEXT */}
              <div className="text-white space-y-5 max-w-xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                  In corporate digital banking, choose Jetonbank.
                </h2>
                <p className="text-lg leading-relaxed">
                  Reach our customer support team whenever you need. 24/7.
                </p>
              </div>

              {/* IMAGE */}
              <img
                src="/images/section.webp"
                alt="In corporate digital banking, choose Jetonbank."
                className="max-w-sm sm:max-w-md lg:max-w-lg w-full"
              />
            </div>
          </div>

          {/* CARDS SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[-6rem] relative z-10 px-2">
            {/* CARD 1 */}
            <div className="flex flex-col bg-white rounded-xl p-6 shadow-xl">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                <img
                  src="/images/multi-currency.svg"
                  width="28"
                  height="27"
                  alt="Multi currency"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                Multi-currency transactions are now possible
              </h3>

              <p className="text-gray-600 text-[15px] leading-relaxed">
                Transact with more than one currency in your business. Partner
                with international businesses.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="flex flex-col bg-white rounded-xl p-6 shadow-xl">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                <img
                  src="/images/multi-currency.svg"
                  width="28"
                  height="27"
                  alt="Multi currency"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                Multi-currency transactions are now possible
              </h3>

              <p className="text-gray-600 text-[15px] leading-relaxed">
                Transact with more than one currency in your business. Partner
                with international businesses.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="flex flex-col bg-white rounded-xl p-6 shadow-xl">
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                <img
                  src="/images/multi-currency.svg"
                  width="28"
                  height="27"
                  alt="Multi currency"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">
                Multi-currency transactions are now possible
              </h3>

              <p className="text-gray-600 text-[15px] leading-relaxed">
                Transact with more than one currency in your business. Partner
                with international businesses.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full bg-cover bg-center py-28 px-4"
        style={{ backgroundImage: "url('/images/grow-bg.webp')" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* TITLE */}
          <h2 className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            It's time to grow with digital <br className="hidden sm:block" />
            banking in the business world.
          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/80 text-lg sm:text-xl font-light leading-relaxed mt-6 mb-10">
            All the transactions you need regarding corporate banking
            <br className="hidden sm:block" /> are gathered in one center. It's
            time to grow.
          </p>

          {/* BUTTON */}
          <a
            href="/"
            target="_blank"
            className="inline-block bg-[#4888FB] text-white text-lg font-medium px-10 py-3 rounded-md shadow-md hover:shadow-lg transition-all"
          >
            Create Account
          </a>
        </div>
      </div>
      <div
        className="w-full bg-no-repeat bg-contain py-8 md:py-20 px-1.5 md:px-4"
        style={{ backgroundImage: "url('/images/chain-bg.png')" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* FORM WRAPPER */}
          <div
            className="bg-cover rounded-2xl px-6 sm:px-10 lg:px-16 py-12 flex flex-col lg:flex-row items-start justify-between gap-10"
            style={{ backgroundImage: "url('/images/light-blue-bg.webp')" }}
          >
            {/* LEFT SIDE TEXT */}
            <div className="max-w-xl">
              <div className="bg-white/20 rounded-full px-4 py-2 inline-flex">
                <p className="text-white font-bold">Jetonbank Business</p>
              </div>

              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mt-6 mb-4">
                Fill out the form for a custom pricing offer for you.
              </h2>

              <p className="text-white text-lg leading-relaxed">
                Help us offer you the best pricing with three simple questions.
              </p>
            </div>

            {/* RIGHT SIDE FORM */}
            <form className="bg-white rounded-sm p-6 sm:p-8 w-full max-w-md flex flex-col gap-4">
              {/* NAME */}
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-400 rounded-md py-3 px-3 text-gray-600 text-sm font-medium"
                required
              />

              {/* SELECT 1 */}
              <select
                aria-label="interested-in"
                className="w-full border border-gray-300 rounded-md py-3 px-3 text-gray-600 text-sm font-medium"
                required
                defaultValue=""
              >
                <option value="" hidden>
                  Interested in?
                </option>
                <option value="digital-wallet-and-fiat-transfers">
                  Digital Wallet & Fiat Transfers
                </option>
                <option value="crypto-products">Crypto Products</option>
                <option value="other">Other</option>
              </select>

              {/* SELECT 2 */}
              <select
                aria-label="monthly-volume"
                className="w-full border border-gray-300 rounded-md py-3 px-3 text-gray-600 text-sm font-medium"
                required
              >
                <option hidden selected>
                  What is your expected monthly volume?
                </option>
                <option value="low">Up to $10,000</option>
                <option value="medium">$10,000 – $50,000</option>
                <option value="high">$50,000+</option>
              </select>

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-400 rounded-md py-3 px-3 text-gray-600 text-sm font-medium"
                required
              />

              {/* CHECKBOX */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="h-4 w-4 border border-gray-400 rounded-sm accent-[#4888fb]"
                />
                <label className="text-xs text-gray-700 leading-relaxed">
                  I confirm that I have read and agree with{" "}
                  <a
                    href="/terms-conditions"
                    className="font-medium underline text-blue-600"
                  >
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy-policy"
                    className="font-medium underline text-blue-600"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              {/* BUTTON */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="min-w-[180px] min-h-[56px] bg-[#131E3D] hover:bg-[#314787] text-white text-lg font-medium rounded-md px-8 py-3 transition-all"
                >
                  Get the Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full px-4 lg:px-20 xl:px-40 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col justify-between min-h-[520px]">
            <div>
              <h2 className="text-[32px] sm:text-[36px] font-semibold text-gray-900 leading-tight mb-4">
                Easy control with single center
              </h2>
              <p className="text-gray-600 text-[17px] leading-relaxed mb-6">
                International transactions are no longer difficult. Grow your
                business, manage all your transactions from a single center.
              </p>
            </div>

            <div className="w-full">
              <a
                href="/"
                target="_blank"
                className="inline-flex items-center text-gray-900 font-medium hover:text-blue-600 transition-all mb-6"
              >
                Get Started
                <img
                  src="/images/arrow-right.svg"
                  width="16"
                  height="14"
                  className="ml-2 transition-all"
                />
              </a>

              <img
                src="/images/business-box-1.webp"
                className="w-full rounded-xl"
                alt="business"
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col justify-between min-h-[520px]">
            <div>
              <h2 className="text-[32px] sm:text-[36px] font-semibold text-gray-900 leading-tight mb-4">
                Safe and secure account
              </h2>
              <p className="text-gray-600 text-[17px] leading-relaxed mb-6">
                International transactions are no longer difficult. Grow your
                business, manage all your transactions from a single center.
              </p>
            </div>

            <div className="w-full">
              <a
                href="/"
                target="_blank"
                className="inline-flex items-center text-gray-900 font-medium hover:text-blue-600 transition-all mb-6"
              >
                Get Started
                <img
                  src="/images/arrow-right.svg"
                  width="16"
                  height="14"
                  className="ml-2 transition-all"
                />
              </a>

              <img
                src="/images/business-box-1.webp"
                className="w-full rounded-xl"
                alt="business"
              />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col justify-between min-h-[520px]">
            <div>
              <h2 className="text-[32px] sm:text-[36px] font-semibold text-gray-900 leading-tight mb-4">
                Money transfer between businesses
              </h2>
              <p className="text-gray-600 text-[17px] leading-relaxed mb-6">
                International transactions are no longer difficult. Grow your
                business, manage all your transactions from a single center.
              </p>
            </div>

            <div className="w-full">
              <a
                href="/"
                target="_blank"
                className="inline-flex items-center text-gray-900 font-medium hover:text-blue-600 transition-all mb-6"
              >
                Get Started
                <img
                  src="/images/arrow-right.svg"
                  width="16"
                  height="14"
                  className="ml-2 transition-all"
                />
              </a>

              <img
                src="/images/business-box-1.webp"
                className="w-full rounded-xl"
                alt="business"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
