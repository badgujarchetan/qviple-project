"use client";

import Navbar from "@/Navbar/Navbar";
import { motion } from "framer-motion";
import React from "react";
import "./about.css";
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7 } },
};

export default function AboutPage() {
  return (
    <main className="about-main">
      <Navbar />

      <section className="relative  min-h-[85vh] flex items-end pb-24 overflow-hidden">
        <video
          src="/images/aboutvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 " />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 mx-auto px-6 md:px-10 lg:px-32 w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:-py-32"
        >
          {/* LEFT TEXT */}
          <div className="flex-1">
            <h1 className="text-[clamp(42px,9vw,110px)] font-bold text-white leading-[1.05]">
              Your money.
              <br />
              Your way.
            </h1>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 max-w-[500px]">
            <p className="text-[clamp(16px,2vw,22px)] text-gray-300 leading-relaxed">
              Smart. Simple. Secure. Finance designed for the modern world.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-8 bg-white cursor-pointer text-[#f73b20] px-8 py-3 rounded-full font-semibold text-[17px] shadow-lg transition"
            >
              Let’s Connect
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-28">
        <motion.span
          variants={fade}
          initial="hidden"
          whileInView="show"
          className="block w-fit px-4 py-1 border border-[#f73b20] text-[#f73b20] rounded-full text-sm tracking-wide"
        >
          Mission
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="mt-6 text-[clamp(38px,7vw,90px)] font-semibold leading-tight"
        >
          Money, but better.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="mt-6 max-w-[550px] text-[clamp(17px,2vw,22px)] text-gray-600 font-medium leading-relaxed"
        >
          Your financial world should feel effortless — not overwhelming.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="mt-16 rounded-2xl overflow-hidden"
        >
          <img
            src="/images/aboutImage.jpg"
            className="w-full object-cover hover:scale-[1.02] transition-all"
          />
        </motion.div>
      </section>

      {/* ================= WHY SECTION ================= */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-28 flex flex-col lg:flex-row gap-20">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-[clamp(28px,5vw,50px)] font-semibold lg:max-w-[45%] leading-tight"
        >
          We make finance intuitive — not intimidating.
        </motion.h3>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="lg:max-w-[45%] space-y-6"
        >
          <p className="text-[clamp(16px,2vw,20px)] text-gray-600 leading-relaxed">
            No jargon. No hidden systems. Just clarity, transparency and
            control.
          </p>

          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/phone-two-man.jpg"
              className="w-full object-cover hover:scale-105 transition"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="bg-[#f73b20] text-white py-20 px-6 lg:px-36">
        <div className="max-w-[1300px] mx-auto space-y-20">
          {[
            { num: "01.", title: "For you" },
            { num: "02.", title: "Accessible" },
            { num: "03.", title: "Transparent" },
          ].map((item, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16"
            >
              <h3 className="font-semibold text-[clamp(24px,4vw,36px)] flex flex-col leading-tight">
                <span className="opacity-90">{item.num}</span>
                <span className="text-[clamp(32px,5vw,50px)] font-bold tracking-wide">
                  {item.title}
                </span>
              </h3>

              <p className="text-[clamp(18px,2vw,22px)] text-white/80 leading-relaxed max-w-[600px]">
                Jeton focuses on human experience — intuitive design, seamless
                accessibility and complete transparency.
              </p>
            </motion.article>
          ))}

          {/* QUOTE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="flex justify-end"
          >
            <div className="max-w-[500px] bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <blockquote className="text-white/90 leading-relaxed text-[clamp(17px,2vw,20px)]">
                People deserve simple access to financial freedom — without
                confusion or pressure.”
              </blockquote>

              <div className="flex items-center gap-3 mt-6">
                <span className="h-10 w-10 rounded-full bg-white text-[#f73b20] flex items-center justify-center font-semibold">
                  H.S
                </span>

                <div>
                  <p className="font-semibold text-[16px]">Harbin S.</p>
                  <p className="text-white/70 text-sm">CEO of Jeton</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CAREERS CTA ================= */}
      <section className="py-32 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="bg-[#f73b20] text-white max-w-[900px] mx-auto rounded-3xl py-11 px-6 md:px-16 text-center space-y-6 shadow-2xl"
        >
          <span className="w-fit px-4 py-1 border border-white rounded-full mx-auto text-sm tracking-wide">
            Careers
          </span>

          <h2 className="text-[clamp(38px,7vw,90px)] font-semibold leading-tight my-2">
            Job Openings
          </h2>

          <p className="max-w-[600px] mx-auto text-[clamp(18px,2.5vw,22px)] font-medium leading-snug">
            No open positions — but talented minds are always welcome.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-10 py-3 cursor-pointer bg-white text-[#f73b20] rounded-full text-[18px] font-semibold transition shadow-lg"
          >
            Send Application
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
