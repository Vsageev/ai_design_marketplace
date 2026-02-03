'use client';

import React, { useEffect, useRef } from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

  .pmb-root {
    --bg: #0a0c14;
    --ink: #f4f6ff;
    --muted: #8a90a3;
    --accent: #7ef2ff;

    font-family: 'Space Mono', monospace;
    background: radial-gradient(900px 520px at 80% -20%, rgba(126, 242, 255, 0.18), transparent 60%),
      var(--bg);
    color: var(--ink);
    min-height: 100vh;
    padding: 56px 24px 80px;
  }

  .pmb-container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .pmb-header {
    display: grid;
    gap: 10px;
    margin-bottom: 28px;
  }

  .pmb-header h1 {
    margin: 0;
    font-size: 34px;
  }

  .pmb-header p {
    margin: 0;
    color: var(--muted);
    max-width: 560px;
    line-height: 1.6;
  }

  .pmb-band {
    position: relative;
    padding: 26px 0;
    border-radius: 18px;
    background: linear-gradient(120deg, rgba(24, 30, 48, 0.9), rgba(10, 12, 20, 0.9));
    border: 1px solid rgba(126, 242, 255, 0.2);
    overflow: hidden;
  }

  .pmb-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pmb-layer span {
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 1px solid rgba(126, 242, 255, 0.25);
    box-shadow: 0 0 40px rgba(126, 242, 255, 0.2);
  }

  .pmb-layer span:nth-child(1) {
    top: 10px;
    left: 10%;
  }

  .pmb-layer span:nth-child(2) {
    bottom: -30px;
    right: 18%;
    width: 160px;
    height: 160px;
  }

  .pmb-layer span:nth-child(3) {
    top: -50px;
    right: 40%;
    width: 90px;
    height: 90px;
  }

  .pmb-marquee {
    display: flex;
    gap: 32px;
    white-space: nowrap;
    animation: pmbScroll 16s linear infinite;
  }

  .pmb-marquee span {
    font-size: 14px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
  }

  .pmb-marquee-row {
    display: flex;
    gap: 32px;
    padding-left: 32px;
  }

  @keyframes pmbScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @media (prefers-reduced-motion: reduce) {
    .pmb-marquee {
      animation: none;
    }
  }
`;

export default function ParallaxMarqueeBandPage() {
  const bandRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const band = bandRef.current;
    if (!band) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const layers = Array.from(band.querySelectorAll<HTMLElement>('[data-layer]'));
    let rafId = 0;

    const update = () => {
      const scrollY = window.scrollY;
      layers.forEach((layer) => {
        const speed = Number(layer.dataset.speed || '0.2');
        layer.style.transform = `translateY(${scrollY * speed * -0.08}px)`;
      });
      rafId = window.requestAnimationFrame(update);
    };

    rafId = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <style>{cssStyles}</style>
      <section className="pmb-root">
        <div className="pmb-container">
          <div className="pmb-header">
            <h1>Parallax Marquee Band</h1>
            <p>Layered orbs float behind a looping marquee for a kinetic band divider.</p>
          </div>

          <div className="pmb-band" ref={bandRef}>
            <div className="pmb-layer" data-layer data-speed="0.2">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="pmb-marquee" aria-hidden="true">
              <div className="pmb-marquee-row">
                <span>Threat routing</span>
                <span>Signal fusion</span>
                <span>Autonomous scans</span>
                <span>Live telemetry</span>
                <span>Risk surfacing</span>
                <span>Threat routing</span>
                <span>Signal fusion</span>
                <span>Autonomous scans</span>
                <span>Live telemetry</span>
                <span>Risk surfacing</span>
              </div>
              <div className="pmb-marquee-row" aria-hidden="true">
                <span>Threat routing</span>
                <span>Signal fusion</span>
                <span>Autonomous scans</span>
                <span>Live telemetry</span>
                <span>Risk surfacing</span>
                <span>Threat routing</span>
                <span>Signal fusion</span>
                <span>Autonomous scans</span>
                <span>Live telemetry</span>
                <span>Risk surfacing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
