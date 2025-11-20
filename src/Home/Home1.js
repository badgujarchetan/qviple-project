"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";

export default function Home1() {
  const [hover, setHover] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  // bg-gradient-to-b from-[#001A33] via-[#002D62] to-[#0047AB]
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-red-500 ">
      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full z-50 px-[4%] py-5 flex justify-between items-center">
        <a
          href="/"
          className="text-[1.8rem] font-extrabold tracking-[1px] 
       bg-gradient-to-r from-[#ff6a00] to-[#ee0979] 
       bg-clip-text text-transparent"
        >
          Qviple
        </a>

        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.5,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="bg-gradient-to-r from-[#ff6a00] to-[#ee0979]
  text-white
  px-[1.3rem] py-[0.5rem]
  rounded-[30px]
  font-semibold
  no-underline
  transition-all duration-300
  shadow-[0_2px_10px_rgba(255,105,180,0.2)]"
        >
          <Link href="/enquiry">Enquiry</Link>
        </motion.button>
      </nav>

      {/* HERO SECTION */}
      <header className="relative w-full h-full">
        {/* Background Video */}
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out`}
          style={{
            transform: hover ? "scale(1.1)" : "scale(1)",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <video
            className={`w-full h-full object-cover transition-opacity duration-[1.4s] ease-out ${
              videoLoaded ? "opacity-100" : "opacity-70"
            }`}
            src="/videos/background.mp4"
            type="video/mp4"
            loop
            autoPlay
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
          ></video>
        </div>

        {/* Gradient overlay for visibility */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Main Content */}
        <div className="relative z-20 flex flex-wrap w-full min-h-screen text-white px-[4%] pt-40 pb-48 items-end">
          {/* Left column */}
          <div className="flex-1 md:max-w-[50%] flex flex-col justify-end">
            <h2 className="text-[3rem] sm:text-[4.2rem] md:text-[5rem] lg:text-[6.2rem] font-semibold leading-[1.1]">
              <span className="block">One app</span>
              <span className="block">for all needs</span>
            </h2>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-end md:max-w-[25%] mt-10 md:mt-0 md:ml-[20%] mb-14">
            <p className="text-lg md:text-xl font-medium leading-snug">
              Single account for all your payments.
            </p>

            <div className="flex flex-wrap gap-5 mt-8">
              {/* App Store */}
              <a
                href="https://apps.apple.com/in/app/qviple-your-education-online/id6463501865"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[148px] h-[44px] rounded-md border border-white/30 overflow-hidden backdrop-blur-md hover:scale-105 transition-all duration-300"
              >
                <img
                  src="/images/app-store-neutral.svg"
                  alt="App Store"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </a>

              {/* Google Play */}
              <Link
                href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-[148px] h-[44px] rounded-md border border-white/30 overflow-hidden backdrop-blur-md hover:scale-105 transition-all duration-300"
              >
                <img
                  src="/images/google-play-neutral.svg"
                  alt="Google Play"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
