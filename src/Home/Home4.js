"use client";

import React, { useEffect, useRef, useCallback } from "react";
import "../style/Home4.css";

export default function Home4() {
  const rootRef = useRef(null);
  const bgRef = useRef(null);
  const fgRef = useRef(null);

  // easing and lerp helpers
  const easeInOut = (x) =>
    x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  const lerp = (a, b, t) => a + (b - a) * t;
  const lerpArr = (a, b, t) => a.map((v, i) => Math.round(lerp(v, b[i], t)));

  // Calculate progress using section geometry and its padding
  const calcProgress = useCallback(() => {
    const section = rootRef.current;
    if (!section) return 0;
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;

    // Use section height and padding to determine a more forgiving start/end
    const sectH = rect.height || vh * 0.6;
    const top = rect.top;
    const startTrigger = vh - Math.min(sectH * 0.25, vh * 0.45); // start when lower part is near viewport bottom
    const endTrigger = Math.max(vh * 0.08, sectH * 0.08); // end earlier for tall sections

    const raw = (startTrigger - top) / (startTrigger - endTrigger);
    const clamped = Math.max(0, Math.min(1, raw));
    return easeInOut(clamped);
  }, []);

  useEffect(() => {
    const section = rootRef.current;
    const bg = bgRef.current;
    const fg = fgRef.current;
    if (!section || !bg || !fg) return;

    // tuned keyframes
    const keyframes = {
      start: {
        thirdY: 100,
        fourthY: 102,
        sixthY: 100,
        bgRgb: [247, 59, 32], // orange
        fgTextRgb: [255, 255, 255], // white
        bgTranslate: 20, // px - subtle parallax
      },
      mid: {
        thirdY: 60,
        fourthY: 30,
        sixthY: 60,
        bgTranslate: 8,
      },
      end: {
        thirdY: 0,
        fourthY: 1,
        sixthY: 0,
        bgRgb: [255, 255, 255], // white
        fgTextRgb: [247, 59, 32], // orange
        bgTranslate: 0,
      },
    };

    let rafId = null;
    let lastT = -1;

    const update = () => {
      const t = calcProgress();

      // skip unnecessary updates if progress hasn't meaningfully changed
      if (Math.abs(t - lastT) < 0.0008) {
        rafId = requestAnimationFrame(update);
        return;
      }
      lastT = t;

      // smoother two-stage interpolation (start -> mid -> end)
      let thirdY, fourthY, sixthY, bgRgb, fgTextRgb, bgTranslate;
      if (t <= 0.5) {
        const u = t / 0.5;
        thirdY = lerp(keyframes.start.thirdY, keyframes.mid.thirdY, u);
        fourthY = lerp(keyframes.start.fourthY, keyframes.mid.fourthY, u);
        sixthY = lerp(keyframes.start.sixthY, keyframes.mid.sixthY, u);
        bgRgb = lerpArr(keyframes.start.bgRgb, keyframes.end.bgRgb, u * 0.5);
        fgTextRgb = lerpArr(
          keyframes.start.fgTextRgb,
          keyframes.end.fgTextRgb || keyframes.start.fgTextRgb,
          u * 0.5
        );
        bgTranslate = lerp(
          keyframes.start.bgTranslate,
          keyframes.mid.bgTranslate,
          u
        );
      } else {
        const u = (t - 0.5) / 0.5;
        thirdY = lerp(keyframes.mid.thirdY, keyframes.end.thirdY, u);
        fourthY = lerp(keyframes.mid.fourthY, keyframes.end.fourthY, u);
        sixthY = lerp(keyframes.mid.sixthY, keyframes.end.sixthY, u);
        bgRgb = lerpArr(
          keyframes.start.bgRgb,
          keyframes.end.bgRgb,
          0.5 + u * 0.5
        );
        fgTextRgb = lerpArr(
          keyframes.start.fgTextRgb,
          keyframes.end.fgTextRgb || keyframes.start.fgTextRgb,
          0.5 + u * 0.5
        );
        bgTranslate = lerp(
          keyframes.mid.bgTranslate,
          keyframes.end.bgTranslate,
          u
        );
      }

      // Clip path tuned to reduce sudden shape jumps on small screens
      const clip = `polygon(0% -6%, 100% -6%, 100% ${thirdY}%, 52% ${fourthY}%, 48% ${fourthY}%, 0% ${sixthY}%)`;
      bg.style.webkitClipPath = clip;
      bg.style.clipPath = clip;

      // set CSS variables (cheap)
      const bgColor = `rgb(${bgRgb.join(",")})`;
      bg.style.setProperty("--bg-color", bgColor);

      const fgTextColor = `rgb(${fgTextRgb.join(",")})`;
      fg.style.setProperty("--fg-text", fgTextColor);

      // parallax: translateY for bg (transform = cheap)
      bg.style.transform = `translateY(${Math.round(bgTranslate)}px)`;

      rafId = requestAnimationFrame(update);
    };

    // kick off animation loop
    rafId = requestAnimationFrame(update);

    // recalc on resize or font load
    const onResize = () => {
      lastT = -1;
    };
    const onFontLoad = () => {
      lastT = -1;
    };

    window.addEventListener("resize", onResize, { passive: true });
    // font loading could change layout; attempt to respond if available
    if (document.fonts && document.fonts.addEventListener) {
      document.fonts.addEventListener("loadingdone", onFontLoad);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      if (document.fonts && document.fonts.removeEventListener) {
        document.fonts.removeEventListener("loadingdone", onFontLoad);
      }
    };
  }, [calcProgress]);

  return (
    <section className="extra-bold-hero grid-stack" ref={rootRef}>
      <div className="users fg-layer" ref={fgRef}>
        <h2 className="title">
          1 million users,
          <br />
          plus you.
        </h2>
        <p className="subhead-2">It only takes a few seconds to get started.</p>

        <div className="millions">
          <a
            href="https://apps.apple.com/in/app/qviple-your-education-online/id6463501865"
            target="_blank"
            rel="noopener noreferrer"
            className="_app-button"
            aria-label="go to App Store"
          >
            <div className="btn-bg" aria-hidden />
            <img src="/app-store-orange.svg" alt="App Store" />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple"
            target="_blank"
            rel="noopener noreferrer"
            className="_app-button"
            aria-label="go to Google Play"
          >
            <div className="btn-bg" aria-hidden />
            <img src="/google-play-orange.svg" alt="Google Play" />
          </a>
        </div>
      </div>

      {/* Background (animated polygon layer) */}
      <div
        aria-hidden="true"
        className="users bg-layer"
        ref={bgRef}
        style={{
          // base color controlled by CSS variable for cheaper repaints
          backgroundColor: "var(--bg-color, rgb(247,59,32))",
        }}
      >
        <div className="title" aria-hidden>
          1 million users, plus you.
        </div>
        <div className="subhead-2" aria-hidden>
          It only takes a few seconds to get started.
        </div>

        {/* Background placeholders for store badges (mirror) */}
        <div className="millions" aria-hidden>
          <span className="_app-button" aria-hidden>
            <div className="btn-bg" aria-hidden />

            <img src="/app-store-orange.svg" alt="" />
          </span>

          <span className="_app-button" aria-hidden>
            <div className="btn-bg" aria-hidden />
            <img src="/google-play-orange.svg" alt="" />
          </span>
        </div>
      </div>
    </section>
  );
}