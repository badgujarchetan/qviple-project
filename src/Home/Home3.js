"use client";
import React from "react";

export default function Home3() {
  return (
    <section className="mt-32 md:mt-40 lg:mt-48 mb-32 md:mb-40 lg:mb-48">
      {/* --- Top Section --- */}
      <div className="flex flex-wrap mx-auto w-full text-center justify-center px-4 sm:px-8 md:px-[var(--grid-padding)]">
        <div className="w-full md:w-[80%] lg:w-1/2 px-2 md:px-[var(--grid-half-gap)]">
          <span className="inline-block relative px-4 py-[6px] text-sm sm:text-base tracking-[0.03em] text-[#f73b20] cursor-pointer mb-4">
            <div className="absolute inset-0 rounded-[20px] border border-[#f73b20] pointer-events-none"></div>
            Jeton Card
          </span>

          <h2 className="mt-4 mb-4 font-medium whitespace-pre-line text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] tracking-[0.01em] leading-[1.2]">
            Contactless payments? Sure. Spending limits? Check. Card freezing?
            Also check.
          </h2>
        </div>
      </div>

      {/* --- Video Section --- */}
      <div className="flex flex-wrap mx-auto w-full text-center justify-center px-4 sm:px-8 md:px-[var(--grid-padding)] my-16 sm:my-24 md:my-32">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-1/2 px-2 md:px-[var(--grid-half-gap)]">
          <video
            className="block w-full h-auto overflow-hidden rounded-xl shadow-lg"
            src="/videos/jeton-card-rip.mp4"
            type="video/mp4"
            loop
            autoPlay
            muted
            playsInline
            preload="metadata"
            style={{
              transform: "translate(0px, 0px) rotate(0deg) scale(1)",
            }}
          ></video>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div className="flex flex-wrap mx-auto w-full text-center justify-center px-4 sm:px-8 md:px-[var(--grid-padding)]">
        <div className="w-full md:w-[80%] lg:w-1/2 px-2 md:px-[var(--grid-half-gap)]">
          <h2 className="mt-4 mb-4 font-semibold whitespace-pre-line text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] tracking-[0.01em] leading-[1.2]">
            Jeton Card: Your Go-To for Every Purchase
          </h2>

          <span className="inline-block relative px-4 py-[6px] text-sm sm:text-base tracking-[0.03em] text-[#f73b20] cursor-pointer mt-2 sm:mt-4">
            <div className="absolute inset-0 rounded-[20px] border border-[#f73b20] pointer-events-none"></div>
            Learn more
          </span>
        </div>
      </div>
    </section>
  );
}
