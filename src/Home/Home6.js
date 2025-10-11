"use client";

import "../style/Home3.css";

import React from "react";

export default function Home6() {
  return (
    <section className="_client_testimonial">
      <div className="background">
        <img
          // style={{
          //   transform:
          //     "translate3d(0px, -10.8562px, 0px) rotate(0deg) scale(1)",
          // }}
          className="our_client_image"
          src="/images\bg_image.jpg"
        ></img>
      </div>
      <div className="color-orange">
        <h2 className="h2_text">Hear it from our clients</h2>
      </div>
      <ul className="cards">
        <li>
          <div className="card_li">
            <p>Recommended</p>
            <p className="opacity-cards">
              Very happy with the app. Does what it says, simple payments and
              transactions. Quick account verification and withdrawals. 24/7
              support available.{" "}
            </p>
            <div className="opacity-cards_div">
              <span className="opacity-cards_div-span">
                <span className="opacity-cards_div-span_inside-span">VK</span>
              </span>
              <span>Vamsi K.</span>
            </div>
          </div>
        </li>

        <li>
          <div
            className="card_li"
            style={{ transform: "translate(0px, 0px) rotate(0deg) scale(1)" }}
          >
            <p>Awesome app very user friendly</p>
            <p className="opacity-cards">
              Would highly recommend Jeton to my friends.
            </p>
            <div className="opacity-cards_div">
              <span className="opacity-cards_div-span">
                <span className="opacity-cards_div-span_inside-span">LA</span>
              </span>
              <span>Leonie A.</span>
            </div>
          </div>
        </li>

        <li>
          <div
            className="card_li"
            // style={{
            //   transform:
            //     "translate3d(0px, -228.891px, 0px) scale(0.9193, 0.9193)",
            //   clipPath: "inset(72px 0px 0px)",
            // }}
          >
            <p>The best payment solution for German customers</p>
            <p className="opacity-cards">
              I've been a Jeton user for a few years!The support was always
              great and I'm always able to make my payments to the websites I
              want with no problem.
            </p>
            <div className="opacity-cards_div">
              <span className="opacity-cards_div-span">
                <span className="opacity-cards_div-span_inside-span">KR</span>
              </span>
              <span>Karl R.</span>
            </div>
          </div>
        </li>

        <li>
          <div className="card_li" 
          //  style={{
          //     transform:
          //       "translate3d(0px, -228.891px, 0px) scale(0.9193, 0.9193)",
          //     clipPath: "inset(72px 0px 0px)",
          //   }}
            >
            <p>Easy and Fast</p>
            <p className="opacity-cards">
              Great app for fast and easy transfers. I have been using Jeton for
              a while now without any problem. I have recently started using
              their Jeton Card for my everyday purchases too.
            </p>
            <div className="opacity-cards_div">
              <span className="opacity-cards_div-span">
                <span className="opacity-cards_div-span_inside-span">DP</span>
              </span>
              <span>Dennis P.</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
