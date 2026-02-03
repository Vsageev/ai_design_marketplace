'use client';

import React, { useEffect } from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');

  .tgc-root {
    --bg: #0b0f12;
    --ink: #f6f7fb;
    --muted: #9aa3b2;
    --glow: rgba(126, 189, 255, 0.45);
    --card-border: rgba(255, 255, 255, 0.12);

    font-family: 'Manrope', sans-serif;
    background: radial-gradient(900px 520px at 15% -10%, rgba(80, 130, 190, 0.35), transparent 60%),
      var(--bg);
    color: var(--ink);
    min-height: 100vh;
    padding: 56px 24px 80px;
  }

  .tgc-container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .tgc-header {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
  }

  .tgc-header h1 {
    font-size: 40px;
    letter-spacing: -0.02em;
    margin: 0;
  }

  .tgc-header p {
    margin: 0;
    color: var(--muted);
    max-width: 560px;
    line-height: 1.6;
  }

  .tgc-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
  }

  .tgc-card {
    position: relative;
    background: rgba(16, 20, 26, 0.8);
    border-radius: 18px;
    padding: 22px;
    border: 1px solid var(--card-border);
    transform-style: preserve-3d;
    transition: transform 180ms ease, box-shadow 180ms ease;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  .tgc-card::after {
    content: '';
    position: absolute;
    inset: -40%;
    background: radial-gradient(220px 180px at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255, 255, 255, 0.35), transparent 60%);
    opacity: 0.8;
    transform: translateZ(40px);
    pointer-events: none;
    transition: opacity 200ms ease;
  }

  .tgc-card h3 {
    margin: 0 0 10px;
    font-size: 18px;
  }

  .tgc-card p {
    margin: 0 0 18px;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.5;
  }

  .tgc-chip {
    display: inline-flex;
    align-items: center;
    padding: 6px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
    background: rgba(126, 189, 255, 0.14);
    color: #cfe6ff;
  }

  .tgc-card[data-active='true'] {
    box-shadow: 0 24px 44px rgba(20, 40, 80, 0.4);
  }

  @media (max-width: 900px) {
    .tgc-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .tgc-card {
      transition: none;
      transform: none !important;
    }

    .tgc-card::after {
      opacity: 0.3;
    }
  }
`;

export default function TiltGlassCardsPage() {
  useEffect(() => {
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!supportsHover || reduceMotion) return;

    const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt-card]'));

    const handleMove = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const px = x / rect.width - 0.5;
      const py = y / rect.height - 0.5;
      const rotateX = (-py * 10).toFixed(2);
      const rotateY = (px * 12).toFixed(2);

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.setProperty('--glare-x', `${x}px`);
      card.style.setProperty('--glare-y', `${y}px`);
      card.dataset.active = 'true';
    };

    const handleLeave = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      card.dataset.active = 'false';
    };

    cards.forEach((card) => {
      card.addEventListener('pointermove', handleMove);
      card.addEventListener('pointerleave', handleLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('pointermove', handleMove);
        card.removeEventListener('pointerleave', handleLeave);
      });
    };
  }, []);

  return (
    <>
      <style>{cssStyles}</style>
      <section className="tgc-root">
        <div className="tgc-container">
          <div className="tgc-header">
            <h1>Tilt Glass Cards</h1>
            <p>Interactive glass cards with tilt, glare, and subtle depth for premium dashboards.</p>
          </div>

          <div className="tgc-grid">
            {['Secure Telemetry', 'Threat Surface', 'Adaptive Scans'].map((title, index) => (
              <article className="tgc-card" data-tilt-card key={title}>
                <h3>{title}</h3>
                <p>Hover to reveal the tilt and live glare that tracks the pointer.</p>
                <span className="tgc-chip">Priority +{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
