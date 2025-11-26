"use client";
import React from "react";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";

export default function Page() {
  return (
    <div className="-mt-[5rem] text-gray-800">
      <QvipleNavbar />

      {/* HERO */}
      <div className="relative pt-[120px] pb-[80px]">
        <img
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src="/images/grow-hero-bg.webp"
        />

        <div className="w-full max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-[40px] md:text-[64px] font-bold leading-tight text-[#222]">
            Your Digital
            <br className="hidden md:block" /> Partner in Banking
          </h1>

          <p className="text-[16px] md:text-[20px] text-[#666] mt-4 md:mt-5 mb-6">
           Your Easy payment and tracking system-fast and completely safe!
          </p>

          <a
            href="/"
            className="inline-block bg-[#4888FB] text-white text-[16px] md:text-[18px] font-medium rounded-md py-[14px] px-6 md:px-10"
          >
           Schedule Now
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

      {/* FEATURES SECTION */}
      <section className="bg-[#0f213f] py-12 md:py-20">
        <div className="container mx-auto px-6 lg:px-12 text-white">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
            <div className="flex-1 grid gap-6">
              {[
                {
                  title: "Move your business to digital!",
                  desc: "Get rid of unnecessary paperwork — everything is a click away.",
                  icon: "/images/cloud-money.svg",
                },
                {
                  title: "Create your own limits",
                  desc: "Keep investor funds in separate accounts and manage budgets easily.",
                  icon: "/images/limits.webp",
                },
                {
                  title: "Fast international transfers",
                  desc: "Pay globally with competitive fees and clear pricing.",
                  icon: "/images/global.webp",
                },
                {
                  title: "24/7 support",
                  desc: "Reach our team via Email, Live Chat or Telegram anytime.",
                  icon: "/images/24-7.webp",
                },
              ].map((item, idx) => (
                <article
                  key={idx}
                  className="flex gap-5 items-start bg-[#19274e]/40 rounded-xl p-5 md:p-6 border border-[#4888FB]/20"
                >
                  <div className="flex-shrink-0 rounded-full bg-[#19274e] w-20 h-20 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt="feature icon"
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#9fb0cf]">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex-1 flex items-center justify-center">
              <img
                src="/images/mdc.webp"
                alt="dashboard mock"
                className="w-full max-w-md rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRACKING + LIMITS */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/images/limits.webp"
              alt="limits"
              className="w-full rounded-lg shadow"
            />
          </div>

          <div>
            <h2 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-semibold text-[#0f1724]">
              Create your own limits
            </h2>
            <p className="mt-4 text-[1rem] text-[#556270]">
              Keep investor funds separate and tailor account limits to your
              team and vendors. Ideal for safer bookkeeping and governance.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block bg-[#e7f0ff] rounded-full p-2">
                  ✔
                </span>
                <span className="text-[#374151] pt-[0.8rem]">
                  Custom spending caps
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block bg-[#e7f0ff] rounded-full p-2">
                  ✔
                </span>
                <span className="text-[#374151] pt-[0.8rem]">
                  Per-project account separation
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="/"
                className="inline-block bg-[#4888FB] text-white px-5 py-3 rounded-md"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[url('/images/grow-bg.webp')] bg-cover bg-center">
        <div className="mx-auto max-w-[75rem] px-4 sm:px-6 lg:px-8">
          {/* Top */}
          <div className="text-center max-w-xl mx-auto">
            <p className="text-[13px] sm:text-sm text-blue-400 font-medium tracking-wide uppercase">
              International Transfers
            </p>

            <h2 className="mt-2 text-2xl sm:text-4xl font-semibold text-white leading-snug">
              Send money anywhere globally
            </h2>

            <p className="mt-3 text-gray-300 text-[15px] sm:text-lg leading-relaxed">
              Fast, secure, and transparent payments with zero hidden charges.
            </p>
          </div>

          {/* Feature 1 */}
          <div className="mt-12 sm:mt-16 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-10 lg:gap-16 items-center">
            {/* Image on mobile comes first (better UX) */}
            <div className="sm:order-2">
              <img
                src="/images/payments.webp"
                alt="payments"
                className="rounded-xl w-full border border-white/15 shadow-md object-cover"
              />
            </div>

            <div className="text-center sm:text-left sm:order-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                No transfer limits
              </h3>

              <p className="mt-3 text-gray-300 text-[15px] leading-relaxed">
                Send high-value payments globally with complete freedom — no
                restrictions.
              </p>

              <ul className="mt-5 text-gray-200 text-[15px] space-y-2">
                <li>✔ Unlimited transfers</li>
                <li>✔ Instant settlement</li>
                <li>✔ Bank-level security</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/15 my-14"></div>

          {/* Feature 2 */}
          <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-10 lg:gap-16 items-center">
            <div>
              <img
                src="/images/global.webp"
                alt="global"
                className="rounded-xl w-full border border-white/15 shadow-md object-cover"
              />
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Go global without extra fees
              </h3>

              <p className="mt-3 text-gray-300 text-[15px] leading-relaxed">
                Clear, predictable pricing — no hidden conversion or handling
                charges.
              </p>

              <ul className="mt-5 text-gray-200 text-[15px] space-y-2">
                <li>✔ Low FX fees</li>
                <li>✔ Real-time conversion</li>
                <li>✔ Worldwide access</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <a
              href="/support"
              className="inline-block w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-500 text-white py-3 px-8 rounded-lg text-[15px] font-medium transition-all duration-200"
            >
              Get Started →
            </a>
          </div>
        </div>
      </section>

      {/* FUNDING */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[#4888FB] font-medium">
            Access your funds whenever you want.
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-semibold text-[#0f1724]">
            Funding in business is no longer a challenge.
          </h2>
          <p className="mt-4 text-[#556270]">
            Take control of your money — make payments quickly and securely
            without surprise fees.
          </p>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
            <img
              src="/images/devices.webp"
              alt="devices"
              className="w-full max-w-[700px] rounded-lg shadow"
            />

            <div className="max-w-xl">
              <h3 className="text-2xl font-medium">
                Take control of your money
              </h3>
              <p className="mt-3 text-[#556270]">
                Plan payments, reconcile transactions, and manage cash flow with
                ease.
              </p>

              <a
                href="/signup"
                className="mt-5 inline-block bg-[#4888FB] px-6 py-3 rounded-md text-white"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-[url('/images/grow-bg.webp')] bg-cover bg-center text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-blue-300 font-semibold uppercase tracking-wide">
              Smart Support
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
              We care about our customers.
            </h2>

            <p className="mt-4 text-gray-200 text-base md:text-lg leading-relaxed">
              Our dedicated support team is available 24/7 to assist you through
              Email, Live Chat or Telegram with fast response times.
            </p>

            <div className="mt-8">
              <a
                href="/support"
                className="inline-block bg-white text-black font-medium px-8 py-3 rounded-lg text-lg border border-transparent hover:border-white hover:bg-transparent hover:text-white transition-all duration-300"
              >
                Contact Support
              </a>
            </div>
          </div>

          {/* Optional Benefits Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white/10 rounded-lg border border-white/10">
              <h4 className="text-xl font-semibold">24/7 Availability</h4>
              <p className="text-gray-300 text-sm mt-2">
                Support at any time of the day.
              </p>
            </div>

            <div className="p-6 bg-white/10 rounded-lg border border-white/10">
              <h4 className="text-xl font-semibold">Multi-Platform</h4>
              <p className="text-gray-300 text-sm mt-2">
                Email, live chat & Telegram support.
              </p>
            </div>

            <div className="p-6 bg-white/10 rounded-lg border border-white/10">
              <h4 className="text-xl font-semibold">Fast Response</h4>
              <p className="text-gray-300 text-sm mt-2">
                Average response under 5 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
