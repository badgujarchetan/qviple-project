"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Home5() {
  return (
    <section className="relative w-full flex items-center overflow-hidden">

      {/* Background Video */}
      <div className="absolute inset-0 -z-20">
        <video
          className="md:h-full w-full object-cover"
          src="/videos/currencies-video-bg.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>

      {/* Layer gradient for text clarity */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70 -z-10"></div> */}

      {/* CONTENT */}
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-24 flex flex-col gap-8 py-40 ">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white font-semibold leading-tight text-[clamp(2.6rem,6vw,5rem)] tracking-tight"
        >
          All your finances,
          <br />
          in one app.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-gray-200 text-[clamp(18px,2vw,24px)] max-w-[550px] leading-relaxed"
        >
          Secure. Fast. Built for the future of money.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap items-center gap-4 mt-2"
        >
          <a
            href="/"
            className="px-8 py-3 bg-white text-black rounded-xl font-semibold text-lg hover:scale-[1.04] hover:shadow-xl transition-all duration-200"
          >
            Get Started
          </a>
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-4 mt-6"
        >
          {/* App Store */}
          <a
            href="https://apps.apple.com/"
            className="w-[160px] h-[52px] rounded-xl border border-white/20 bg-white/10 backdrop-blur-md flex justify-center items-center hover:bg-white/20 hover:scale-105 transition-all duration-200"
          >
            <img src="/images/app-store-neutral.svg" className="w-[80%]" />
          </a>

          {/* Google Play */}
          <a
            href="https://play.google.com/"
            className="w-[160px] h-[52px] rounded-xl border border-white/20 bg-white/10 backdrop-blur-md flex justify-center items-center hover:bg-white/20 hover:scale-105 transition-all duration-200"
          >
            <img src="/images/google-play-neutral.svg" className="w-[80%]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
