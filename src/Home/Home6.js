"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import "../style/Home3.css";

// Reduced motion check
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Animation Variants
const cardVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    rotateX: -5,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 0.7,
      delay: i * 0.06,
    },
  }),
};

function AnimatedCard({ card, index }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const liRef = useRef(null);

  // Only animate once when visible
  const inView = useInView(ref, { amount: 0.35, once: true });

  // Smooth 3D hover tilt
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const el = liRef.current;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      el.style.setProperty("--rx", `${-(y - 0.5) * 10}deg`);
      el.style.setProperty("--ry", `${(x - 0.5) * 10}deg`);
      el.style.setProperty("--tz", "14px");
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
  }, [inView]);

  return (
    <motion.li
      ref={ref}
      className="card_wrapper"
      custom={index}
      variants={cardVariants}
      initial="initial"
      animate={controls}
    >
      <div className="card_inner" ref={liRef}>
        <motion.div
          className="card_li"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
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
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

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
          <AnimatedCard key={i} index={i} card={card} />
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
    text: "I've been a Jeton user for a few years! The support was always great and I'm always able to make my payments easily.",
    initials: "KR",
    name: "Karl R.",
  },
  {
    title: "Easy and Fast",
    text: "Great app for fast and easy transfers. Recently started using Jeton Card for everyday purchases too.",
    initials: "DP",
    name: "Dennis P.",
  },
];
