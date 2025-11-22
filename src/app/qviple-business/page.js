"use client";

import React from "react";
import QvipleNavbar from "@/qviple-business_navbar/Qviple-business_navbar";

export default function Page() {
  return (
    <div className="relative">
      <QvipleNavbar />

      {/* HERO SECTION */}
      <section className="-mt-20 bg-[#1911c0] text-white relative overflow-hidden">
        {/* bg video */}
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          src="/videos/header-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center px-4 pt-24 pb-10 md:pt-32 lg:pt-40">
          <h1 className="mt-16 text-center text-3xl font-extrabold leading-tight sm:text-4xl md:mt-24 md:text-6xl md:leading-[4.5rem] lg:text-7xl lg:leading-[5.5rem] xl:text-8xl xl:leading-[6.5rem]">
            The Bank for <br /> All Businesses
          </h1>

          <p className="mt-6 text-center text-sm text-[#a7bbe0] sm:text-base md:mt-10 md:text-lg">
            Experience business banking without borders. Scale your business
            with <br className="hidden md:block" />
            secure, efficient, and global financial solutions.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-4 md:mt-10">
            {/* Book a Meeting */}
            <a
              href="/"
              target="_blank"
              className="inline-flex max-w-xs items-center justify-between rounded-full bg-[#f6f6f6] px-6 py-2 text-sm font-medium text-[#083199] sm:text-base"
            >
              <span>Book a Meeting</span>
              <span className="ml-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#083199]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <path
                    d="M1 1H9.8M9.8 1V10M9.8 1L1 9.8"
                    stroke="#F6F6F6"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </span>
            </a>

            {/* Create account */}
            <a
              href="/"
              target="_blank"
              className="inline-flex max-w-xs items-center justify-between rounded-full bg-[#001741] px-6 py-2 text-sm font-medium text-white sm:text-base"
            >
              <span>Create an Account</span>
              <span className="ml-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#083199]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <path
                    d="M1 1H9.8M9.8 1V10M9.8 1L1 9.8"
                    stroke="#F6F6F6"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ALL IN ONE */}
      <section className="bg-[#60cdff] py-16 md:py-24 lg:py-32">
        <h2 className="text-center text-2xl font-black leading-tight text-[#001741] sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem]">
          All-in-one <br /> Banking Solutions
        </h2>
      </section>

      {/* CUSTOMER SUPPORT / DEDICATED ACCOUNT MANAGER */}
      <section className="bg-[#00258a] text-white">
        <div className="flex min-h-[34rem] flex-col bg-[#00258a] md:flex-row">
          {/* left visual */}
          <div className="hidden h-[600px] flex-1 bg-[url('/images/customer-left-bg.webp')] bg-cover bg-center md:block">
            <div className="relative z-10 pt-16 pl-60">
              <h2 className="mb-2 text-xs font-normal uppercase tracking-[0.18em] text-[rgba(220,231,250,0.75)]">
                Customer Support
              </h2>

              <h1 className="text-3xl font-extrabold leading-[2.4rem] sm:text-4xl sm:leading-[2.8rem] md:text-[3.1rem] md:leading-[3.5rem]">
                Dedicated <br /> account manager
              </h1>

              <p className="mt-5 text-sm leading-relaxed text-[rgba(231,235,242,0.9)] sm:text-base">
                Enjoy direct access to a dedicated account manager and
                personalised business guidance tailored to your needs – just a
                few of the exclusive benefits Jetonbank offers.
              </p>

              <div className="mt-8 sm:mt-10">
                <a
                  href="/"
                  className="block max-w-md rounded-xl shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
                >
                  <div className="flex items-center justify-between gap-4 bg-[#69d2ff] px-6 py-5 sm:px-7">
                    <span className="text-sm font-semibold leading-snug text-[#001744] sm:text-base">
                      Connect with a dedicated expert
                    </span>
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#002991] transition-transform duration-200 ease-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M4 4H14M14 4V14M14 4L4 14"
                          stroke="#F6F6F6"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="bg-[#17357b] px-6 pb-6 pt-4 text-xs leading-relaxed text-[rgba(186,198,219,0.9)] sm:px-7 sm:text-sm">
                    Contact your dedicated account manager during and after
                    integration. We are here to help you get started with
                    Jetonbank and offer assistance via chat or email whenever
                    required.
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* right content + video */}
          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-12 sm:px-6 md:px-10 md:py-16">
            {/* video bg */}
            <video
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 md:opacity-100 mix-blend-screen"
              autoPlay
              playsInline
              muted
              loop
              src="/videos/customer-support-right-bg.mp4"
            ></video>

            {/* content */}
            <div className="block md:hidden relative z-10 max-w-md">
              <h2 className="mb-2 text-xs font-normal uppercase tracking-[0.18em] text-[rgba(220,231,250,0.75)]">
                Customer Support
              </h2>

              <h1 className="text-3xl font-extrabold leading-[2.4rem] sm:text-4xl sm:leading-[2.8rem] md:text-[3.1rem] md:leading-[3.5rem]">
                Dedicated <br /> account manager
              </h1>

              <p className="mt-5 text-sm leading-relaxed text-[rgba(231,235,242,0.9)] sm:text-base">
                Enjoy direct access to a dedicated account manager and
                personalised business guidance tailored to your needs – just a
                few of the exclusive benefits Jetonbank offers.
              </p>

              <div className="mt-8 sm:mt-10">
                <a
                  href="/"
                  className="block max-w-md rounded-xl shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
                >
                  
                  <div className="flex items-center justify-between gap-4 bg-[#69d2ff] px-6 py-5 sm:px-7">
                    <span className="text-sm font-semibold leading-snug text-[#001744] sm:text-base">
                      Connect with a dedicated expert
                    </span>
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#002991] transition-transform duration-200 ease-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M4 4H14M14 4V14M14 4L4 14"
                          stroke="#F6F6F6"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

               
                  <div className="bg-[#17357b] px-6 pb-6 pt-4 text-xs leading-relaxed text-[rgba(186,198,219,0.9)] sm:px-7 sm:text-sm">
                    Contact your dedicated account manager during and after
                    integration. We are here to help you get started with
                    Jetonbank and offer assistance via chat or email whenever
                    required.
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY + NUMBERS SECTION */}
      <section className="relative overflow-hidden bg-[#002991] text-white">
        {/* bg video */}
        <div className="absolute inset-0 mix-blend-luminosity opacity-40">
          <video
            src="/videos/currencies-video-bg.mp4"
            autoPlay
            loop
            playsInline
            muted
            className="h-full w-full object-cover"
          ></video>
        </div>

        <div className="relative z-10 mx-auto max-w-[1170px] px-4 py-16 md:py-20 lg:py-24">
          {/* text row */}
          <div className="mb-10 flex flex-col gap-8 md:mb-16 md:flex-row md:gap-16">
            <div className="w-full md:w-3/5">
              <h2 className="text-2xl font-bold leading-tight text-[#e3e9f4] sm:text-3xl md:text-4xl md:leading-[3.2rem]">
                Tailored Banking <br /> with Advanced <br /> Security
              </h2>
            </div>

            <div className="w-full text-sm text-[rgba(220,231,250,0.75)] md:w-2/5 md:text-base">
              <p>
                Jetonbank offers tailored banking solutions paired with strong
                security features to protect your business and support its
                growth. Manage your finances confidently and securely.
              </p>

              <div className="mt-8">
                <a
                  href="/"
                  className="inline-flex items-center rounded-full bg-[#8ba6d8] px-6 py-2 text-sm font-medium text-[#083199]"
                >
                  <span>Book a Meeting</span>
                  <span className="ml-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#083199]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                    >
                      <path
                        d="M1 1H9.8M9.8 1V10M9.8 1L1 9.8"
                        stroke="#F6F6F6"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* numbers card */}
          <div className="flex flex-col items-stretch justify-between gap-8 rounded-2xl border border-[rgba(168,183,212,0.23)] bg-[rgba(106,106,106,0.17)] p-8 backdrop-blur-[15px] md:flex-row md:gap-0">
            {currencies_section.map((item, i) => (
              <div
                key={i}
                className="flex flex-1 flex-col items-center gap-4 text-center"
              >
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-normal leading-none sm:text-5xl md:text-[4.5rem]">
                    {item.value}
                  </span>
                  <span className="ml-1 md:py-8 py-4 text-3xl font-normal leading-none text-[rgba(97,152,204,0.52)] sm:text-4xl">
                    +
                  </span>
                </div>
                <div>
                  {/* {item.pill ? ( */}
                    <span className="inline-block rounded-3xl bg-[#60cdff] px-6 py-2 text-sm font-medium text-[#002991]">
                      {item.label}
                    </span>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APP DOWNLOAD SECTION */}
      <section className="bg-black text-white pt-16 md:pt-20 lg:pt-24">
        <div className="mx-auto max-w-[1170px] px-4">
          <div className="text-center text-[#8ba6d8] text-base md:text-lg">
            Qviple App
          </div>

          <h2 className="mt-3 text-center text-3xl font-extrabold leading-tight text-[#e3e9f4] sm:text-4xl md:text-5xl md:leading-[3.2rem]">
            Driving the next <br /> generation of wealth.
          </h2>

          <p className="mt-4 text-center text-sm text-[rgba(227,233,244,0.72)] sm:text-base">
            Download Qviple app to your devices and{" "}
            <br className="hidden sm:block" />
            unlock financial freedom.
          </p>

          <div className="mt-8 flex flex-col items-center md:justify-center justify-between md:gap-4 gap-8 sm:flex-row">
            <a href="https://apps.apple.com/in/app/qviple-your-education-online/id6463501865">
              <img
                alt="App Store"
                loading="lazy"
                width={219}
                height={64}
                decoding="async"
                src="/images/app-store.svg"
                style={{ color: "transparent" }}
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple">
              <img
                alt="google-play"
                loading="lazy"
                width={219}
                height={64}
                decoding="async"
                src="/images/google-play-store.svg"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
        </div>

        <video
          src="/videos/store-video.mp4"
          autoPlay
          muted
          playsInline
          loop
          className="mt-10 h-64 w-full object-cover sm:h-72 md:h-80 lg:h-[35rem]"
        ></video>
      </section>

      {/* FOOTER CTA */}
      <section className="mt-16 bg-white pt-10 md:mt-20 md:pt-16">
        <div className="mx-auto max-w-[1170px] px-4">
          <div className="pb-0 text-center">
            <h2 className="text-3xl font-extrabold leading-tight text-[#001741] sm:text-4xl md:text-5xl md:leading-[3.6rem]">
              Looking for a true <br />
              partner to help{" "}
              <span className="mt-2 inline-block rounded-[2.5rem] border border-[#60cdff] px-4 py-2 text-2xl font-semibold text-[#60cdff] sm:text-3xl md:text-4xl">
                grow your business?
              </span>
            </h2>

            <div className="mt-6 flex justify-center">
              <a
                href="/"
                className="inline-flex items-center rounded-full bg-[#002991] px-6 py-2 text-sm font-medium text-white sm:text-base"
              >
                <span>Book a Meeting</span>
                <span className="ml-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#4576f3]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      d="M1 1H9.8M9.8 1V10M9.8 1L1 9.8"
                      stroke="#F6F6F6"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 mb-16 max-w-3xl px-4 text-center text-sm text-[rgba(0,23,65,0.57)] sm:text-base">
          If you have any questions or need assistance, <br />
          feel free to reach out to us at{" "}
          <a
            href="mailto:connect@qviple.com"
            className="underline underline-offset-2"
          >
            connect@qviple.com
          </a>{" "}
          <br />
          or click the button above to book a meeting with our team. <br />
          We're here to support you every step of the way.
        </p>
      </section>
    </div>
  );
}

const currencies_section = [
  { value: "40", label: "Currencies", pill: true },
  { value: "25", label: "Payment Methods" },
  { value: "80", label: "Countries" },
];
