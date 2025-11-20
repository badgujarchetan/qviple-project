"use client";

import { useEffect, useRef } from "react";
import "../style/Home4.css";

export default function Home4() {
  const rootRef = useRef(null);
  const bgRef = useRef(null);
  const fgRef = useRef(null);

  useEffect(() => {
    const section = rootRef.current;
    const bg = bgRef.current;
    const fg = fgRef.current;
    if (!section || !bg || !fg) return;

    const keyframes = {
      start: {
        thirdY: 100.0,
        fourthY: 101.0,
        sixthY: 100.0,
        bgRgb: [247, 59, 32],
        fgTextRgb: [247, 59, 32],
        fgBgRgb: [255, 255, 255],
      },
      mid: {
        thirdY: 51.5485,
        fourthY: 14.491,
        sixthY: 51.5485,
      },
      end: {
        thirdY: 0.0,
        fourthY: 1.0,
        sixthY: 0.0,
        bgRgb: [255, 255, 255],
        fgTextRgb: [247, 59, 32],
        fgBgRgb: [255, 255, 255],
      },
    };

    const lerp = (a, b, t) => a + (b - a) * t;
    const easeInOut = (x) =>
      x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    const lerpArr = (a, b, t) => a.map((v, i) => Math.round(lerp(v, b[i], t)));

    function getInterpolated(t) {
      t = Math.max(0, Math.min(1, t));
      if (t <= 0.5) {
        const u = t / 0.5;
        return {
          thirdY: lerp(keyframes.start.thirdY, keyframes.mid.thirdY, u),
          fourthY: lerp(keyframes.start.fourthY, keyframes.mid.fourthY, u),
          sixthY: lerp(keyframes.start.sixthY, keyframes.mid.sixthY, u),
          bgRgb: lerpArr(keyframes.start.bgRgb, keyframes.end.bgRgb, u * 0.5),
          fgTextRgb: lerpArr(
            keyframes.start.fgTextRgb,
            keyframes.end.fgTextRgb,
            u * 0.5
          ),
        };
      } else {
        const u = (t - 0.5) / 0.5;
        return {
          thirdY: lerp(keyframes.mid.thirdY, keyframes.end.thirdY, u),
          fourthY: lerp(keyframes.mid.fourthY, keyframes.end.fourthY, u),
          sixthY: lerp(keyframes.mid.sixthY, keyframes.end.sixthY, u),
          bgRgb: lerpArr(
            keyframes.start.bgRgb,
            keyframes.end.bgRgb,
            0.5 + u * 0.5
          ),
          fgTextRgb: lerpArr(
            keyframes.start.fgTextRgb,
            keyframes.end.fgTextRgb,
            0.5 + u * 0.5
          ),
        };
      }
    }

    function calcProgress() {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const startTrigger = vh * 0.98;
      const endTrigger = vh * 0.12;
      const raw = (startTrigger - rect.top) / (startTrigger - endTrigger);
      const clamped = Math.max(0, Math.min(1, raw));
      return easeInOut(clamped);
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const t = calcProgress();
        const mappedT = t;
        const k = getInterpolated(mappedT);

        const clip = `polygon(0% -1%, 100% -1%, 100% ${k.thirdY}%, 50% ${k.fourthY}%, 50% ${k.fourthY}%, 0% ${k.sixthY}%)`;

        bg.style.clipPath = clip;
        bg.style.webkitClipPath = clip;

       

        ticking = false;
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="extra-bold-hero grid-stack" ref={rootRef}>
    
      <div
        className="flex flex-col items-center text-center py-216-140 users fg-layer"
        ref={fgRef}
      >
        <h2 className="title-1 -medium w-cols-12 sm-w-cols-14 xs-w-cols-16 title">
          1 million users,
          <br /> plus you.
        </h2>
        <p className="subhead-2 -medium w-cols-10 xs-w-cols-12 mt-64-24">
          It only takes few seconds to get started.
        </p>
        <div className="millions flex gap-24 mt-64-48">
          <a
            href="https://apps.apple.com/us/app/jeton/id6499320378"
            target="_blank"
            rel="noopener noreferrer"
            className="_app-button"
            data-button=""
            data-tone="orange"
            data-variant="outline"
            aria-label="go to mobile app"
          >
            <div data-button-background></div>
            <div className="outline absolute inset-0"></div>
            <img
              className="imgess absolute inset-0"
              src="/app-store-orange.svg"
              alt="App Store icon"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple"
            target="_blank"
            rel="noopener noreferrer"
            className="_app-button"
            data-button=""
            data-tone="orange"
            data-variant="outline"
            aria-label="go to mobile app"
          >
            <div data-button-background=""></div>
            <div className="outline"></div>
            <img
              className="imgess"
              src="/google-play-orange.svg"
              alt="Google Play icon"
            />
          </a>
        </div>
      </div>

      {/* Background (animated polygon layer) */}
      <div
        aria-hidden="true"
        className="flex flex-col items-center text-center py-216-140 users bg-layer"
        ref={bgRef}
        style={{
          color: "#fff",
          backgroundColor: "#f73b20",
          clipPath:
            "polygon(0% -1%, 100% -1%, 100% 100%, 50% 101%, 50% 101%, 0% 100%)",
        }}
      >
        <div className="title-1 -medium w-cols-12 sm-w-cols-14 xs-w-cols-16 title">
          1 million users, plus you.
        </div>
        <div className="-medium w-cols-10 xs-w-cols-12 mt-64-24 subhead-2">
          It only takes few seconds to get started.
        </div>
        <div className="millions flex gap-24 mt-64-48">
          <span
            className="_app-button"
            data-button=""
            data-tone="orange"
            data-variant="outline"
            aria-hidden
          >
            <div data-button-background></div>
            <div className="outline absolute inset-0"></div>
            <img
              className="imgess absolute inset-0"
              src="/app-store-orange.svg"
              alt="App Store icon"
            />
          </span>

          <span
            className="_app-button"
            data-button
            data-tone="orange"
            data-variant="outline"
            aria-hidden
          >
            <div data-button-background></div>
            <div className="outline absolute inset-0"></div>
            <img
              className="imgess absolute inset-0"
              src="/google-play-orange.svg"
              alt="Google Play icon"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
