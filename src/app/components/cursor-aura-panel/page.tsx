'use client';

import React, { useEffect, useRef } from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

  .cap-root {
    --panel-bg: #0f1118;
    --panel-ink: #e8ecf6;
    --panel-muted: #8a93a6;
    --aura-color: rgba(120, 176, 255, 0.6);
    --aura-x: 50%;
    --aura-y: 50%;
    --aura-active: 0;

    font-family: 'Space Grotesk', sans-serif;
    background: radial-gradient(1200px 540px at 20% -10%, rgba(63, 87, 140, 0.3), transparent 65%),
      var(--panel-bg);
    color: var(--panel-ink);
    min-height: 100vh;
    padding: 56px 24px 80px;
  }

  .cap-container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .cap-hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr);
    gap: 32px;
    align-items: center;
    margin-bottom: 32px;
  }

  .cap-hero h1 {
    font-size: 42px;
    letter-spacing: -0.02em;
    margin: 0 0 12px;
  }

  .cap-hero p {
    margin: 0 0 18px;
    color: var(--panel-muted);
    line-height: 1.6;
  }

  .cap-panel {
    position: relative;
    border-radius: 20px;
    padding: 24px;
    background: linear-gradient(140deg, rgba(22, 25, 36, 0.9), rgba(12, 14, 20, 0.95));
    border: 1px solid rgba(120, 140, 180, 0.2);
    overflow: hidden;
    min-height: 320px;
  }

  .cap-panel::before {
    content: '';
    position: absolute;
    inset: -80px;
    background: radial-gradient(220px 220px at var(--aura-x) var(--aura-y), var(--aura-color), transparent 60%);
    opacity: calc(0.2 + var(--aura-active) * 0.8);
    transition: opacity 200ms ease;
    pointer-events: none;
  }

  .cap-panel::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 40%);
    pointer-events: none;
  }

  .cap-panel-grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    z-index: 1;
  }

  .cap-tile {
    border-radius: 16px;
    padding: 16px;
    background: rgba(18, 20, 30, 0.9);
    border: 1px solid rgba(120, 140, 180, 0.18);
    transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
  }

  .cap-tile:hover {
    transform: translateY(-4px);
    border-color: rgba(120, 176, 255, 0.5);
    box-shadow: 0 16px 30px rgba(12, 14, 22, 0.5);
  }

  .cap-tile h3 {
    font-size: 16px;
    margin: 0 0 8px;
  }

  .cap-tile p {
    margin: 0;
    color: var(--panel-muted);
    font-size: 13px;
    line-height: 1.5;
  }

  @media (max-width: 900px) {
    .cap-hero {
      grid-template-columns: 1fr;
    }

    .cap-panel-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cap-panel::before {
      opacity: 0.25;
    }

    .cap-tile {
      transition: none;
    }
  }
`;

export default function CursorAuraPanelPage() {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;

    let rafId = 0;
    let targetX = panel.clientWidth / 2;
    let targetY = panel.clientHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const update = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      panel.style.setProperty('--aura-x', `${currentX}px`);
      panel.style.setProperty('--aura-y', `${currentY}px`);
      rafId = window.requestAnimationFrame(update);
    };

    const handleMove = (event: PointerEvent) => {
      const rect = panel.getBoundingClientRect();
      targetX = event.clientX - rect.left;
      targetY = event.clientY - rect.top;
      panel.style.setProperty('--aura-active', '1');
    };

    const handleLeave = () => {
      panel.style.setProperty('--aura-active', '0');
      targetX = panel.clientWidth / 2;
      targetY = panel.clientHeight / 2;
    };

    panel.addEventListener('pointermove', handleMove);
    panel.addEventListener('pointerleave', handleLeave);
    rafId = window.requestAnimationFrame(update);

    return () => {
      panel.removeEventListener('pointermove', handleMove);
      panel.removeEventListener('pointerleave', handleLeave);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <style>{cssStyles}</style>
      <section className="cap-root">
        <div className="cap-container">
          <div className="cap-hero">
            <div>
              <h1>Cursor Aura Panel</h1>
              <p>
                A spotlight-style aura that follows the pointer, with depth-rich tiles that respond to hover.
              </p>
            </div>
          </div>

          <div className="cap-panel" ref={panelRef}>
            <div className="cap-panel-grid">
              {['Signal Maps', 'Exposure Score', 'Guided Triage', 'Guardrails', 'Autonomous Mode', 'Live Trails'].map(
                (label) => (
                  <div className="cap-tile" key={label}>
                    <h3>{label}</h3>
                    <p>Hover and watch the aura react to the surface.</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
