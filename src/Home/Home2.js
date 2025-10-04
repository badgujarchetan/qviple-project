"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../style/Home2.css"

export default function Home2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const snippets = [
    { id: 1, src: "/images/snippet-secure.png", alt: "Deposit" },
    { id: 2, src: "/images/snippet-send.png", alt: "Send" },
    { id: 3, src: "/images/snippet-pay.png", alt: "Pay" },
    { id: 4, src: "/images/snippet-enjoycoffee.png", alt: "Card" },
    { id: 5, src: "/images/snippet-exchange.png", alt: "Exchange" },
  ];

  const taglines = [
    { text: "Add", color: "#34C771", icon: "➕" },
    { text: "Send", color: "#477EE9", icon: "📤" },
    { text: "Exchange", color: "#FB2D54", icon: "🔄" },
  ];

  // Animate each tagline individually
  const scales = taglines.map((_, i) =>
    useTransform(scrollYProgress, [0.1 * i, 0.1 * (i + 1)], [1.5, 1])
  );
  const yPositions = taglines.map((_, i) =>
    useTransform(scrollYProgress, [0.1 * i, 0.1 * (i + 1)], [150 - i * 50, 0])
  );

  return (
    <section className="_hero-introduction" ref={ref}>
      <header className="hero-header">
        <div className="sticky-slot">
          <div className="hero-title">
            <motion.h2
              className="title-text"
              style={{
                scale: useTransform(scrollYProgress, [0, 0.3], [2, 0.3]),
              }}
            >
              Unify your{"\n"}finances
            </motion.h2>
          </div>

          <ul className="snippets">
            {snippets.map((snip, i) => {
              const x = useTransform(
                scrollYProgress,
                [0, 0.5],[(i - 2) * 150, 0]);
              const y = useTransform(
                scrollYProgress,
                [0, 0.5],[(i - 2) * 50, 0]);
              const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
              return (
                <motion.li
                  key={snip.id}
                  className={`snippet-item item-${i + 1}`}
                  style={{ x, y, scale }}
                >
                  <div className="snippet">
                    <img src={snip.src} alt={snip.alt} />
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </header>

      <main>
        <ul className="taglines">
          {taglines.map((tag, i) => (
            <motion.li
              key={i}
              className="tagline-item"
              style={{ "--color": tag.color, scale: scales[i], y: yPositions[i] }}
            >
              <div className="tagline-content">
                <div className="icon-card">
                  <span className="_icon">{tag.icon}</span>
                </div>
                <h3>{tag.text}</h3>
              </div>
            </motion.li>
          ))}
        </ul>
      </main>
    </section>
  );
}