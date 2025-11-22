"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import "../style/Home3.css";

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
    title: "The best payment solution for German customers",
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

// CARD ANIMATION VARIANTS
const cardVariants = {
  hiddenDown: (i) => ({
    opacity: 0,
    y: 30,
    scale: 0.97,
    rotateX: -6,
    transition: {
      duration: 0.45,
      ease: [0.16, 0.84, 0.44, 1],
      delay: i * 0.04,
    },
  }),
  hiddenUp: (i) => ({
    opacity: 0,
    y: -30,
    scale: 0.97,
    rotateX: 6,
    transition: {
      duration: 0.45,
      ease: [0.16, 0.84, 0.44, 1],
      delay: i * 0.04,
    },
  }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 0.8,
      delay: i * 0.09,
    },
  }),
};

function AnimatedCard({ card, index, scrollDirection }) {
  const controls = useAnimation();

  // Scroll direction ke hisaab se starting direction set
  useEffect(() => {
    controls.set(scrollDirection === "down" ? "hiddenDown" : "hiddenUp");
  }, [controls, scrollDirection]);

  return (
    <motion.li
      className="card_wrapper"
      custom={index}
      variants={cardVariants}
      initial={false}
      animate={controls}
      whileInView="visible"
      viewport={{ amount: 0.5, once: false }}
      onViewportLeave={() => {
        controls.start(
          scrollDirection === "down" ? "hiddenDown" : "hiddenUp"
        );
      }}
    >
      <motion.div
        className="card_li"
        whileHover={{
          y: -4,
          scale: 1.01,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 18,
          mass: 0.6,
        }}
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
    </motion.li>
  );
}

export default function Home6() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const sectionRef = useRef(null);

  // Section ke andar parallax background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // chhota movement ignore (direction flicker kam)
      if (Math.abs(currentY - lastY) < 2) return;

      if (currentY > lastY) {
        setScrollDirection("down");
      } else if (currentY < lastY) {
        setScrollDirection("up");
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="_client_testimonial">
      <div className="background">
        <motion.img
          className="our_client_image"
          src="/images/bg_image.jpg"
          alt="Client background"
          style={{ y: bgY }}
        />
      </div>

      <div className="color-orange">
        <h2 className="h2_text">Hear it from our clients</h2>
      </div>

      <ul className="cards">
        {cards.map((card, index) => (
          <AnimatedCard
            key={card.name}
            card={card}
            index={index}
            scrollDirection={scrollDirection}
          />
        ))}
      </ul>
    </section>
  );
}
