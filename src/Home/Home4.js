// "use client";

// import React, { useEffect, useRef, useCallback } from "react";
// import "../style/Home4.css";

// export default function Home4() {
//   const rootRef = useRef(null);
//   const bgRef = useRef(null);
//   const fgRef = useRef(null);

//   // easing and lerp helpers
//   const easeInOut = (x) =>
//     x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
//   const lerp = (a, b, t) => a + (b - a) * t;
//   const lerpArr = (a, b, t) => a.map((v, i) => Math.round(lerp(v, b[i], t)));

//   // Calculate progress using section geometry and its padding
//   const calcProgress = useCallback(() => {
//     const section = rootRef.current;
//     if (!section) return 0;
//     const rect = section.getBoundingClientRect();
//     const vh = window.innerHeight;

//     // Use section height and padding to determine a more forgiving start/end
//     const sectH = rect.height || vh * 0.6;
//     const top = rect.top;
//     const startTrigger = vh - Math.min(sectH * 0.25, vh * 0.45); // start when lower part is near viewport bottom
//     const endTrigger = Math.max(vh * 0.08, sectH * 0.08); // end earlier for tall sections

//     const raw = (startTrigger - top) / (startTrigger - endTrigger);
//     const clamped = Math.max(0, Math.min(1, raw));
//     return easeInOut(clamped);
//   }, []);

//   useEffect(() => {
//     const section = rootRef.current;
//     const bg = bgRef.current;
//     const fg = fgRef.current;
//     if (!section || !bg || !fg) return;

//     // tuned keyframes
//     const keyframes = {
//       start: {
//         thirdY: 100,
//         fourthY: 102,
//         sixthY: 100,
//         bgRgb: [247, 59, 32], // orange
//         fgTextRgb: [255, 255, 255], // white
//         bgTranslate: 20, // px - subtle parallax
//       },
//       mid: {
//         thirdY: 60,
//         fourthY: 30,
//         sixthY: 60,
//         bgTranslate: 8,
//       },
//       end: {
//         thirdY: 0,
//         fourthY: 1,
//         sixthY: 0,
//         bgRgb: [255, 255, 255], // white
//         fgTextRgb: [247, 59, 32], // orange
//         bgTranslate: 0,
//       },
//     };

//     let rafId = null;
//     let lastT = -1;

//     const update = () => {
//       const t = calcProgress();

//       // skip unnecessary updates if progress hasn't meaningfully changed
//       if (Math.abs(t - lastT) < 0.0008) {
//         rafId = requestAnimationFrame(update);
//         return;
//       }
//       lastT = t;

//       // smoother two-stage interpolation (start -> mid -> end)
//       let thirdY, fourthY, sixthY, bgRgb, fgTextRgb, bgTranslate;
//       if (t <= 0.5) {
//         const u = t / 0.5;
//         thirdY = lerp(keyframes.start.thirdY, keyframes.mid.thirdY, u);
//         fourthY = lerp(keyframes.start.fourthY, keyframes.mid.fourthY, u);
//         sixthY = lerp(keyframes.start.sixthY, keyframes.mid.sixthY, u);
//         bgRgb = lerpArr(keyframes.start.bgRgb, keyframes.end.bgRgb, u * 0.5);
//         fgTextRgb = lerpArr(
//           keyframes.start.fgTextRgb,
//           keyframes.end.fgTextRgb || keyframes.start.fgTextRgb,
//           u * 0.5
//         );
//         bgTranslate = lerp(
//           keyframes.start.bgTranslate,
//           keyframes.mid.bgTranslate,
//           u
//         );
//       } else {
//         const u = (t - 0.5) / 0.5;
//         thirdY = lerp(keyframes.mid.thirdY, keyframes.end.thirdY, u);
//         fourthY = lerp(keyframes.mid.fourthY, keyframes.end.fourthY, u);
//         sixthY = lerp(keyframes.mid.sixthY, keyframes.end.sixthY, u);
//         bgRgb = lerpArr(
//           keyframes.start.bgRgb,
//           keyframes.end.bgRgb,
//           0.5 + u * 0.5
//         );
//         fgTextRgb = lerpArr(
//           keyframes.start.fgTextRgb,
//           keyframes.end.fgTextRgb || keyframes.start.fgTextRgb,
//           0.5 + u * 0.5
//         );
//         bgTranslate = lerp(
//           keyframes.mid.bgTranslate,
//           keyframes.end.bgTranslate,
//           u
//         );
//       }

//       // Clip path tuned to reduce sudden shape jumps on small screens
//       const clip = `polygon(0% -6%, 100% -6%, 100% ${thirdY}%, 52% ${fourthY}%, 48% ${fourthY}%, 0% ${sixthY}%)`;
//       bg.style.webkitClipPath = clip;
//       bg.style.clipPath = clip;

//       // set CSS variables (cheap)
//       const bgColor = `rgb(${bgRgb.join(",")})`;
//       bg.style.setProperty("--bg-color", bgColor);

//       const fgTextColor = `rgb(${fgTextRgb.join(",")})`;
//       fg.style.setProperty("--fg-text", fgTextColor);

//       // parallax: translateY for bg (transform = cheap)
//       bg.style.transform = `translateY(${Math.round(bgTranslate)}px)`;

//       rafId = requestAnimationFrame(update);
//     };

//     // kick off animation loop
//     rafId = requestAnimationFrame(update);

//     // recalc on resize or font load
//     const onResize = () => {
//       lastT = -1;
//     };
//     const onFontLoad = () => {
//       lastT = -1;
//     };

//     window.addEventListener("resize", onResize, { passive: true });
//     // font loading could change layout; attempt to respond if available
//     if (document.fonts && document.fonts.addEventListener) {
//       document.fonts.addEventListener("loadingdone", onFontLoad);
//     }

//     return () => {
//       cancelAnimationFrame(rafId);
//       window.removeEventListener("resize", onResize);
//       if (document.fonts && document.fonts.removeEventListener) {
//         document.fonts.removeEventListener("loadingdone", onFontLoad);
//       }
//     };
//   }, [calcProgress]);

//   return (
//     <section className="extra-bold-hero grid-stack" ref={rootRef}>
//       <div className="users fg-layer" ref={fgRef}>
//         <h2 className="title">
//           1 million users,
//           <br />
//           plus you.
//         </h2>
//         <p className="subhead-2">It only takes a few seconds to get started.</p>

//         <div className="millions">
//           <a
//             href="https://apps.apple.com/in/app/qviple-your-education-online/id6463501865"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="_app-button"
//             aria-label="go to App Store"
//           >
//             <div className="btn-bg" aria-hidden />
//             <img src="/app-store-orange.svg" alt="App Store" />
//           </a>

//           <a
//             href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="_app-button"
//             aria-label="go to Google Play"
//           >
//             <div className="btn-bg" aria-hidden />
//             <img src="/google-play-orange.svg" alt="Google Play" />
//           </a>
//         </div>
//       </div>

//       {/* Background (animated polygon layer) */}
//       <div
//         aria-hidden="true"
//         className="users bg-layer"
//         ref={bgRef}
//         style={{
//           // base color controlled by CSS variable for cheaper repaints
//           backgroundColor: "var(--bg-color, rgb(247,59,32))",
//         }}
//       >
//         <div className="title" aria-hidden>
//           1 million users, plus you.
//         </div>
//         <div className="subhead-2" aria-hidden>
//           It only takes a few seconds to get started.
//         </div>

//         {/* Background placeholders for store badges (mirror) */}
//         <div className="millions" aria-hidden>
//           <span className="_app-button" aria-hidden>
//             <div className="btn-bg" aria-hidden />

//             <img src="/app-store-orange.svg" alt="" />
//           </span>

//           <span className="_app-button" aria-hidden>
//             <div className="btn-bg" aria-hidden />
//             <img src="/google-play-orange.svg" alt="" />
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PremiumCTA() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#07080d] px-6 py-20">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f112_1px,transparent_1px),linear-gradient(to_bottom,#6366f112_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[520px] h-[320px] bg-violet-500/25 blur-[140px] rounded-full" />
        <div className="absolute right-20 bottom-10 w-[420px] h-[260px] bg-cyan-400/20 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 w-full max-w-4xl"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-1 text-center backdrop-blur-xl">
          <div className="rounded-[2.3rem] border border-white/5 bg-gradient-to-b from-white/[0.08] to-transparent px-8 py-16 sm:px-16 sm:py-24">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                repeatType: "reverse",
              }}
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              Trusted by 1M+ learners
            </motion.div>

            {/* Heading */}
            <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6">
              1 million users, <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                plus you.
              </span>
            </h2>

            <p className="mx-auto max-w-xl text-lg text-gray-400 leading-relaxed mb-12">
              The future of education is here. Join the platform redefining how
              knowledge is shared online.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {/* App Store */}
              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                href="https://apps.apple.com/in/app/qviple-your-education-online/id6463501865"
                className="group relative flex items-center gap-3 rounded-2xl bg-white px-8 py-4 transition-all hover:shadow-[0_0_35px_-5px_rgba(139,92,246,0.4)]"
              >
                <img
                  src="/app-store-orange.svg"
                  alt="App Store"
                  className="h-7 w-auto"
                />
                <div className="text-left">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Download on
                  </span>
                  <span className="block text-lg font-bold text-black leading-none">
                    App Store
                  </span>
                </div>
              </motion.a>

              {/* Play Store */}
              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple"
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 transition-all hover:bg-white/10 hover:border-white/20"
              >
                <img
                  src="/google-play-orange.svg"
                  alt="Google Play"
                  className="h-7 w-auto"
                />
                <div className="text-left">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Get it on
                  </span>
                  <span className="block text-lg font-bold text-white leading-none">
                    Google Play
                  </span>
                </div>
              </motion.a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex items-center justify-center gap-8 pt-8 border-t border-white/5">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">4.8/5</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                  Rating
                </p>
              </div>

              <div className="h-8 w-[1px] bg-white/10" />

              <div className="text-center">
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
