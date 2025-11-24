"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import "../style/Home3.css"



// check for reduced motion users
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const cardVariants = {
  hiddenDown: (i) => ({
    opacity: 0,
    y: 40,
    scale: 0.97,
    rotateX: -6,
    transition: { duration: 0.45, ease: [0.16, 0.84, 0.44, 1], delay: i * 0.05 },
  }),
  hiddenUp: (i) => ({
    opacity: 0,
    y: -40,
    scale: 0.97,
    rotateX: 6,
    transition: { duration: 0.45, ease: [0.16, 0.84, 0.44, 1], delay: i * 0.05 },
  }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 130,
      damping: 20,
      mass: 0.7,
      delay: i * 0.08,
    },
  }),
};

function AnimatedCard({ card, index, scrollDirection }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const liRef = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });

  // 3D hover tilt
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = liRef.current;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      el.style.setProperty("--rx", `${-(y - 0.5) * 12}deg`);
      el.style.setProperty("--ry", `${(x - 0.5) * 12}deg`);
      el.style.setProperty("--tz", "12px");
    };

    const resetTilt = () => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--tz", "0px");
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", resetTilt);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", resetTilt);
    };
  }, []);

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start(scrollDirection === "down" ? "hiddenDown" : "hiddenUp");
  }, [inView, scrollDirection]);

  return (
    <motion.li
      ref={ref}
      className="card_wrapper"
      custom={index}
      variants={cardVariants}
      initial="hiddenDown"
      animate={controls}
    >
      <div className="card_inner" ref={liRef}>
        <motion.div className="card_li" whileHover={{ scale: 1.015 }}>
          <p>{card.title}</p>
          <p className="opacity-cards">{card.text}</p>

          <div className="opacity-cards_div">
            <span className="opacity-cards_div-span">
              <span className="opacity-cards_div-span_inside-span">
                {card.initials}
              </span>
            </span>
            <span>{card.name}</span>
          </div>
        </motion.div>
      </div>
    </motion.li>
  );
}

export default function Home3() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      if (window.scrollY > last) setScrollDirection("down");
      else setScrollDirection("up");
      last = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="_client_testimonial" ref={sectionRef}>
      <div className="background">
        <motion.img
          src="/images/bg_image.jpg"
          className="our_client_image"
          style={{ y: bgY }}
        />
      </div>

      <div className="color-orange">
        <h2 className="h2_text">Hear it from our clients</h2>
      </div>

      <ul className="cards">
        {cards.map((card, i) => (
          <AnimatedCard
            key={i}
            index={i}
            card={card}
            scrollDirection={scrollDirection}
          />
        ))}
      </ul>
    </section>
  );
}
const cards = [
  {
    title: "Recommended",
    text: "Very happy with the app. Does what it says, simple payments and transactions. Quick account verification and withdrawals. 24/7 support available.",
    initials: "VK",
    name: "Vamsi K.",
  },
  {
    title: "Awesome app very user friendly",
    text: "Would highly recommend Jeton to my friends.",
    initials: "LA",
    name: "Leonie A.",
  },
  {
    title: "The best payment solution",
    text: "I've been a Jeton user for a few years! The support was always great and I'm always able to make my payments to the websites I want with no problem.",
    initials: "KR",
    name: "Karl R.",
  },
  {
    title: "Easy and Fast",
    text: "Great app for fast and easy transfers. I have been using Jeton for a while now without any problem. I have recently started using their Jeton Card for my everyday purchases too.",
    initials: "DP",
    name: "Dennis P.",
  },
];