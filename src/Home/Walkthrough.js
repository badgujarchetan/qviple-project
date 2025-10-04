"use client"
import React, { useEffect, useRef, useState } from "react";
import "../style/Walkthrough.css"

/**
 * Walkthrough.jsx
 * - 5 slides (auto advance every 2000ms)
 * - Canvas-based Floating Neon Shapes (circles + triangles) — "Option C"
 * - Jeton red background (#f73b20)
 * - Pause on hover / focus for better UX
 *
 * Later: Replace <canvas ref={canvasRef} /> with your Rive mount.
 */

const SLIDES = [
  { title: "All currencies", subtitle: "One App" },
  { title: "Add or send", subtitle: "Add or send in a few taps" },
  { title: "50+ payment methods", subtitle: "Across Europe" },
  { title: "Fast and safe", subtitle: "Fast and safe transactions" },
  { title: "Simple, fast & safe", subtitle: "Everything in one place" },
];

export default function Walkthrough() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);
  const runningRef = useRef(true);
  const AUTO_MS = 2000;


  useEffect(() => {
    startAuto();
    return () => stopAuto();
    
  }, []);

  function startAuto() {
    stopAuto();
    intervalRef.current = setInterval(() => {
      if (runningRef.current) setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTO_MS);
  }
  function stopAuto() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  const goTo = (i) => {
    setIndex(i);
    
    startAuto();
  };

  // Pause on hover/focus
  const handlePointerEnter = () => {
    runningRef.current = false;
  };
  const handlePointerLeave = () => {
    runningRef.current = true;
  };

  // Canvas animation (neon floating shapes)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let dpr = Math.max(1, window.devicePixelRatio || 1);
    let w = 0,
      h = 0;

    // config
    const NUM_CIRCLES = 8; // large neon orbs
    const NUM_TRI = 6; // rotating triangles
    const shapes = [];

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function setup() {
      cancelAnimationFrame(rafRef.current);
      dpr = Math.max(1, window.devicePixelRatio || 1);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      shapes.length = 0;
      // neon circles (big glowing orbs)
      const circlePalette = [
        { h: 18, s: 95, l: 60 }, // warm orange
        { h: 28, s: 95, l: 60 }, // yellow-orange
        { h: 12, s: 95, l: 60 }, // more red
      ];
      for (let i = 0; i < NUM_CIRCLES; i++) {
        const pal = circlePalette[i % circlePalette.length];
        shapes.push({
          type: "circle",
          x: rand(0, w),
          y: rand(0, h),
          r: rand(Math.min(w, h) * 0.06, Math.min(w, h) * 0.18),
          vx: rand(-0.02, 0.02),
          vy: rand(-0.01, 0.01),
          hue: pal.h,
          sat: pal.s,
          light: pal.l,
          alphaBase: rand(0.18, 0.32),
          phase: rand(0, Math.PI * 2),
        });
      }

      // neon triangles (rotating, slightly smaller)
      for (let i = 0; i < NUM_TRI; i++) {
        shapes.push({
          type: "tri",
          x: rand(0, w),
          y: rand(0, h),
          size: rand(Math.min(w, h) * 0.04, Math.min(w, h) * 0.09),
          vx: rand(-0.06, 0.06),
          vy: rand(-0.03, 0.03),
          rot: rand(0, Math.PI * 2),
          rotSpeed: rand(-0.004, 0.004),
          hue: 200 + rand(-40, 40), // cyan-ish to purple-ish variance
          sat: rand(70, 95),
          light: rand(55, 70),
          alphaBase: rand(0.08, 0.22),
        });
      }
    }

    // soft background gradient (subtle)
    function drawBackground() {
      // Background cleared lightly to keep glow trails subtle
      ctx.fillStyle = "rgba(247,59,32,1)"; // solid Jeton red base
      ctx.fillRect(0, 0, w, h);
      // add radial vignette to center
      const g = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.1, w / 2, h / 2, Math.max(w, h));
      g.addColorStop(0, "rgba(255,255,255,0.02)");
      g.addColorStop(0.35, "rgba(0,0,0,0.04)");
      g.addColorStop(1, "rgba(0,0,0,0.2)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }

    let last = performance.now();
    function loop(now) {
      const dt = Math.min(40, now - last);
      last = now;

      // subtle motion blur effect — draw translucent rect to preserve faint trails
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(247,59,32,0.12)"; // fade to base (controls trail length)
      ctx.fillRect(0, 0, w, h);

      // draw background vignette each frame for depth
      // (we overlay vignette with low alpha so it doesn't remove trails)
      ctx.globalCompositeOperation = "overlay";
      const vignette = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.1, w / 2, h / 2, Math.max(w, h));
      vignette.addColorStop(0, "rgba(255,255,255,0.02)");
      vignette.addColorStop(0.4, "rgba(0,0,0,0.02)");
      vignette.addColorStop(1, "rgba(0,0,0,0.15)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter"; // additive for neon glow

      for (let s of shapes) {
        // motion
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        if (s.type === "tri") s.rot += s.rotSpeed * dt;

        // wrap around edges smoothly
        if (s.x < -s.r && s.type === "circle") s.x = w + s.r;
        if (s.x > w + (s.r || s.size) && s.type === "circle") s.x = -s.r;
        if (s.y < -s.r && s.type === "circle") s.y = h + s.r;
        if (s.y > h + s.r && s.type === "circle") s.y = -s.r;
        if (s.x < -s.size && s.type === "tri") s.x = w + s.size;
        if (s.x > w + s.size && s.type === "tri") s.x = -s.size;
        if (s.y < -s.size && s.type === "tri") s.y = h + s.size;
        if (s.y > h + s.size && s.type === "tri") s.y = -s.size;

        // subtle pulsation
        const pulse = 0.5 + Math.sin((now / 1000) + (s.phase || 0)) * 0.5;

        if (s.type === "circle") {
          const alpha = Math.max(0.06, Math.min(0.9, s.alphaBase * (0.7 + Math.sin(now / 800 + s.phase) * 0.25)));
          const radius = s.r * (0.9 + Math.sin(now / 1200 + s.phase) * 0.06);

          const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, radius * 1.8);
          grad.addColorStop(0, `hsla(${s.hue}, ${s.sat}%, ${s.light}%, ${alpha})`);
          grad.addColorStop(0.18, `hsla(${s.hue}, ${s.sat}%, ${s.light - 6}%, ${alpha * 0.6})`);
          grad.addColorStop(0.6, `hsla(${s.hue}, ${s.sat}%, ${s.light - 12}%, ${alpha * 0.18})`);
          grad.addColorStop(1, `rgba(0,0,0,0)`);

          ctx.beginPath();
          ctx.fillStyle = grad;
          ctx.arc(s.x, s.y, radius, 0, Math.PI * 2);
          ctx.fill();
        } else if (s.type === "tri") {
          const alpha = Math.max(0.04, s.alphaBase * (0.8 + Math.cos(now / 900 + s.rot) * 0.2));
          // draw soft blurred triangle by drawing multiple strokes
          ctx.save();
          ctx.translate(s.x, s.y);
          ctx.rotate(s.rot);
          // neon outer glow
          ctx.beginPath();
          const size = s.size * (0.9 + Math.sin(now / 700 + s.rot) * 0.06);
          ctx.moveTo(0, -size);
          ctx.lineTo(size * 0.86, size * 0.5);
          ctx.lineTo(-size * 0.86, size * 0.5);
          ctx.closePath();

          // thick blurred fill
          ctx.fillStyle = `hsla(${s.hue}, ${s.sat}%, ${s.light}%, ${alpha * 0.26})`;
          ctx.fill();

          // thin stroked core to enhance neon edge
          ctx.lineWidth = Math.max(1, size * 0.07);
          ctx.strokeStyle = `hsla(${s.hue - 10}, ${s.sat}%, ${Math.max(60, s.light)}%, ${alpha * 0.95})`;
          ctx.stroke();

          ctx.restore();
        }
      }

      // soft center glass highlight
      ctx.globalCompositeOperation = "soft-light";
      ctx.beginPath();
      const cg = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.8);
      cg.addColorStop(0, "rgba(255,255,255,0.02)");
      cg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = cg;
      ctx.fillRect(0, 0, w, h);

      rafRef.current = requestAnimationFrame(loop);
    }

    // responsive resize observer
    const ro = new ResizeObserver(() => {
      setup();
    });
    ro.observe(canvas);

    setup();
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="jw-walkthrough jw-premium"
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
      onFocus={handlePointerEnter}
      onBlur={handlePointerLeave}
    >
      <div className="jw-background">
        {/* Canvas placeholder (premium neon shapes).
            Later replace this canvas with Rive mount if you want .riv playback.
            Example: <div id="rive-mount" /> and use @rive-app/web to load .riv */}
        <canvas ref={canvasRef} className="jw-canvas" aria-hidden="true" />
      </div>

      <div className="jw-center">
        <div className="jw-device-mock" role="region" aria-label="Walkthrough preview">
          <div className="jw-screen">
            {SLIDES.map((s, i) => (
              <div
                key={i}
                className={`jw-slide ${i === index ? "active" : ""}`}
                aria-hidden={i === index ? "false" : "true"}
              >
                <h2 className="jw-title">{s.title}</h2>
                <p className="jw-sub">{s.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="jw-stepper" role="tablist" aria-label="Walkthrough steps">
        <ul>
          {SLIDES.map((_, i) => (
            <li key={i}>
              <button
                className={`jw-step ${i === index ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-current={i === index}
                aria-label={`Step ${String(i + 1).padStart(2, "0")}`}
              >
                <span className="jw-step-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="jw-step-label">{i === index ? "Active" : " "}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
