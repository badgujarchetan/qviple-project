"use client";
import { useEffect, useRef } from "react";

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
        const k = getInterpolated(t);
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
    <section
      ref={rootRef}
      className="relative grid overflow-hidden mt-16 md:mt-24 lg:mt-32"
    >
      {/* --- Foreground Layer --- */}
      <div
        ref={fgRef}
        className="z-20 flex flex-col items-center justify-center text-center bg-white text-[#f73b20] py-32 sm:py-40 md:py-48 px-6"
      >
        <h2 className="font-semibold leading-[0.9] text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6rem] tracking-tight">
          1 million users, <br /> plus you.
        </h2>
        <p className="mt-8 text-[1.1rem] sm:text-[1.25rem] md:text-[1.4rem] leading-[1.3] max-w-xl font-medium">
          It only takes few seconds to get started.
        </p>

        <div className="flex gap-4 mt-10 flex-wrap justify-center">
          <a
            href="https://apps.apple.com/us/app/jeton/id6499320378"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-36 h-12 rounded-lg border border-[#f73b20] overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/app-store-orange.svg"
              alt="App Store"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-36 h-12 rounded-lg border border-[#f73b20] overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/google-play-orange.svg"
              alt="Google Play"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </a>
        </div>
      </div>

      {/* --- Background Animated Layer --- */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-[#f73b20] bg-[#f73b20] transition-all duration-200 ease-linear"
        style={{
          clipPath:
            "polygon(0% -1%, 100% -1%, 100% 100%, 50% 101%, 50% 101%, 0% 100%)",
        }}
      >
        <h2 className="font-semibold leading-[0.9] text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6rem] tracking-tight text-white">
          1 million users, plus you.
        </h2>
        <p className="mt-8 text-[1.1rem] sm:text-[1.25rem] md:text-[1.4rem] leading-[1.3] font-medium text-white max-w-xl">
          It only takes few seconds to get started.
        </p>
        <div className="flex gap-4 mt-10 flex-wrap justify-center">
          <span className="relative flex items-center justify-center w-36 h-12 rounded-lg border border-white overflow-hidden opacity-80">
            <img
              src="/app-store-orange.svg"
              alt="App Store"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </span>
          <span className="relative flex items-center justify-center w-36 h-12 rounded-lg border border-white overflow-hidden opacity-80">
            <img
              src="/google-play-orange.svg"
              alt="Google Play"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </span>
        </div>
      </div>
    </section>
  );
}
