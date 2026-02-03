'use client';

import React, { useEffect, useRef } from 'react';

// ─── Film grain (canvas pixel noise) ──────────────────────

function useFilmGrain(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  opts: { density: number; scale: number; speed: number; active: boolean }
) {
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let running = true;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      const s = Math.max(1, Math.round(opts.scale));
      canvas.width = Math.ceil(rect.width / s) * dpr;
      canvas.height = Math.ceil(rect.height / s) * dpr;
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let lastTime = 0;
    const interval = opts.speed === 0 ? Infinity : 1000 / Math.max(4, opts.speed);
    let drawnOnce = false;

    function draw(time: number) {
      if (!running || !canvas || !ctx) return;
      frameRef.current = requestAnimationFrame(draw);

      if (!opts.active && drawnOnce) return;
      if (opts.speed > 0 && time - lastTime < interval) return;
      lastTime = time;

      const w = canvas.width;
      const h = canvas.height;
      if (w === 0 || h === 0) return;

      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;
      const alpha = Math.round(opts.density * 255);

      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = alpha;
      }

      ctx.putImageData(imageData, 0, 0);
      drawnOnce = true;
    }

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
    };
  }, [canvasRef, opts.density, opts.scale, opts.speed, opts.active]);
}

// ─── Dither grain (Bayer ordered dithering) ───────────────

function useDitherGrain(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  opts: { density: number; scale: number }
) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bayer8 = [
      [0, 32, 8, 40, 2, 34, 10, 42],
      [48, 16, 56, 24, 50, 18, 58, 26],
      [12, 44, 4, 36, 14, 46, 6, 38],
      [60, 28, 52, 20, 62, 30, 54, 22],
      [3, 35, 11, 43, 1, 33, 9, 41],
      [51, 19, 59, 27, 49, 17, 57, 25],
      [15, 47, 7, 39, 13, 45, 5, 37],
      [63, 31, 55, 23, 61, 29, 53, 21],
    ];

    function render() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      const s = Math.max(1, Math.round(opts.scale));
      canvas.width = Math.ceil(rect.width / s) * dpr;
      canvas.height = Math.ceil(rect.height / s) * dpr;

      const w = canvas.width;
      const h = canvas.height;
      if (w === 0 || h === 0) return;

      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;
      const threshold = opts.density * 64;

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4;
          const bayerVal = bayer8[y % 8][x % 8];
          const on = bayerVal < threshold;
          const v = on ? 255 : 0;
          data[i] = v;
          data[i + 1] = v;
          data[i + 2] = v;
          data[i + 3] = on ? Math.round(opts.density * 180) : 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    }

    render();
    const ro = new ResizeObserver(render);
    ro.observe(canvas);

    return () => ro.disconnect();
  }, [canvasRef, opts.density, opts.scale]);
}

// ─── Stipple grain (scattered dots) ──────────────────────

function useStippleGrain(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  opts: { density: number; scale: number }
) {
  const seedRef = useRef<number[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function render() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      if (w === 0 || h === 0) return;

      ctx.clearRect(0, 0, w, h);

      const count = Math.round(opts.density * w * h * 0.003);

      if (seedRef.current.length < count * 3) {
        seedRef.current = Array.from({ length: count * 3 }, () => Math.random());
      }

      const seeds = seedRef.current;
      const dotColor = 'rgba(255,255,255,';
      const baseR = Math.max(0.4, opts.scale * 0.6);

      for (let i = 0; i < count; i++) {
        const x = seeds[i * 3] * w;
        const y = seeds[i * 3 + 1] * h;
        const rJitter = seeds[i * 3 + 2];
        const r = baseR * (0.3 + rJitter * 0.7);
        const alpha = 0.08 + rJitter * opts.density * 0.35;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = dotColor + alpha + ')';
        ctx.fill();
      }
    }

    render();
    const ro = new ResizeObserver(render);
    ro.observe(canvas);

    return () => ro.disconnect();
  }, [canvasRef, opts.density, opts.scale]);
}

// ─── Styles ───────────────────────────────────────────────

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500&display=swap');

  .gd-showcase {
    --gd-bg: #0c0b0a;
    --gd-fg: #d4d0c8;
    --gd-dim: #5a564e;
    --gd-rule: #2a2826;
    --gd-accent: #e8e4da;
    --gd-spot: #b8503a;
    --gd-success: #6b8f71;
    --gd-error: #c45c4a;
    --gd-warning: #c8a050;
    --gd-info: #6a8caf;
    --gd-success-dim: rgba(107, 143, 113, 0.1);
    --gd-error-dim: rgba(196, 92, 74, 0.1);
    --gd-warning-dim: rgba(200, 160, 80, 0.1);
    --gd-info-dim: rgba(106, 140, 175, 0.1);

    font-family: 'Azeret Mono', 'SF Mono', monospace;
    background: var(--gd-bg);
    color: var(--gd-fg);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  /* ═══ CONTENT ═══ */
  .gd-content {
    position: relative;
    z-index: 2;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px 80px;
  }

  /* ═══ SECTION ═══ */
  .gd-section {
    margin-bottom: 64px;
  }

  .gd-section:last-child {
    margin-bottom: 0;
  }

  .gd-section-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-top: 1px solid var(--gd-rule);
    padding: 16px 0;
    margin-bottom: 24px;
  }

  .gd-section-title {
    font-family: 'Newsreader', 'Georgia', serif;
    font-size: 36px;
    font-weight: 400;
    font-style: italic;
    color: var(--gd-accent);
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .gd-section-label {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: var(--gd-dim);
  }

  /* ═══ HERO ═══ */
  .gd-hero {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 0 48px;
    position: relative;
  }

  .gd-hero-grain-wrap {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .gd-hero-grain-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
    mix-blend-mode: screen;
    opacity: 0.06;
  }

  .gd-hero-label {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: var(--gd-spot);
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 4px 10px;
    border: 1px solid var(--gd-rule);
    width: fit-content;
    position: relative;
    z-index: 3;
  }

  .gd-hero-title {
    font-family: 'Newsreader', 'Georgia', serif;
    font-size: 64px;
    font-weight: 400;
    font-style: italic;
    color: var(--gd-accent);
    letter-spacing: -0.03em;
    line-height: 1;
    margin-bottom: 28px;
    max-width: 700px;
    position: relative;
    z-index: 3;
  }

  .gd-hero-subtitle {
    font-size: 13px;
    font-weight: 400;
    color: var(--gd-dim);
    line-height: 1.7;
    max-width: 480px;
    margin-bottom: 48px;
    position: relative;
    z-index: 3;
  }

  .gd-hero-rule {
    width: 60px;
    height: 1px;
    background: var(--gd-rule);
    margin-bottom: 48px;
    position: relative;
    z-index: 3;
  }

  .gd-hero-cta {
    display: flex;
    gap: 12px;
    align-items: center;
    position: relative;
    z-index: 3;
  }

  .gd-hero-idx {
    position: absolute;
    bottom: 48px;
    right: 0;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.2em;
    color: var(--gd-dim);
    text-transform: uppercase;
    z-index: 3;
  }

  /* ═══ BUTTONS ═══ */
  .gd-btn {
    font-family: 'Azeret Mono', monospace;
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: all 100ms ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }

  .gd-btn-primary {
    background: var(--gd-spot);
    color: #fff;
    border: 1px solid var(--gd-spot);
  }

  .gd-btn-primary:hover {
    background: #c85d44;
    border-color: #c85d44;
  }

  .gd-btn-secondary {
    background: transparent;
    color: var(--gd-dim);
    border: 1px solid var(--gd-rule);
  }

  .gd-btn-secondary:hover {
    border-color: var(--gd-dim);
    color: var(--gd-fg);
  }

  .gd-btn-success {
    background: var(--gd-success);
    color: #fff;
    border: 1px solid var(--gd-success);
  }

  .gd-btn-success:hover {
    opacity: 0.85;
  }

  .gd-btn-disabled {
    background: transparent;
    color: var(--gd-dim);
    border: 1px solid var(--gd-rule);
    opacity: 0.4;
    cursor: not-allowed;
  }

  .gd-btn-link {
    background: none;
    border: none;
    color: var(--gd-fg);
    padding: 0;
    font-family: 'Azeret Mono', monospace;
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    cursor: pointer;
    position: relative;
    text-decoration: none;
  }

  .gd-btn-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 1px;
    background: var(--gd-spot);
    transition: width 0.2s ease;
  }

  .gd-btn-link:hover::after {
    width: 100%;
  }

  /* ═══ SPECIMEN TAG ═══ */
  .gd-tag {
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--gd-spot);
    background: var(--gd-bg);
    padding: 3px 8px;
    border: 1px solid var(--gd-rule);
    display: inline-block;
  }

  /* ═══ COLOR PALETTE ═══ */
  .gd-palette {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2px;
  }

  .gd-swatch {
    border: 1px solid var(--gd-rule);
    background: var(--gd-bg);
    transition: border-color 150ms ease;
    position: relative;
    overflow: hidden;
  }

  .gd-swatch:hover {
    border-color: var(--gd-dim);
  }

  .gd-swatch-color {
    height: 80px;
    position: relative;
  }

  .gd-swatch-info {
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .gd-swatch-name {
    font-size: 10px;
    font-weight: 600;
    color: var(--gd-fg);
  }

  .gd-swatch-hex {
    font-size: 9px;
    color: var(--gd-dim);
    font-variant-numeric: tabular-nums;
  }

  /* ═══ TYPOGRAPHY ═══ */
  .gd-type-grid {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .gd-type-row {
    padding: 24px 0;
    border-bottom: 1px solid var(--gd-rule);
    display: grid;
    grid-template-columns: 120px 1fr;
    align-items: baseline;
    gap: 24px;
  }

  .gd-type-row:first-child {
    border-top: 1px solid var(--gd-rule);
  }

  .gd-type-label {
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--gd-dim);
    padding-top: 4px;
    align-self: start;
  }

  .gd-type-serif {
    font-family: 'Newsreader', 'Georgia', serif;
    font-style: italic;
    color: var(--gd-accent);
  }

  .gd-type-mono {
    font-family: 'Azeret Mono', monospace;
  }

  /* ═══ BUTTON SHOWCASE ═══ */
  .gd-btn-showcase {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    padding: 32px;
    border: 1px solid var(--gd-rule);
    position: relative;
  }

  .gd-btn-showcase .gd-tag {
    position: absolute;
    top: -1px;
    left: -1px;
  }

  /* ═══ CARDS ═══ */
  .gd-card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
  }

  .gd-card {
    position: relative;
    border: 1px solid var(--gd-rule);
    background: var(--gd-bg);
    overflow: hidden;
    transition: border-color 150ms ease;
  }

  .gd-card:hover {
    border-color: var(--gd-dim);
  }

  .gd-card-preview {
    position: relative;
    height: 140px;
    overflow: hidden;
  }

  .gd-card-preview-bg {
    position: absolute;
    inset: 0;
  }

  .gd-card-grain {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    image-rendering: pixelated;
    mix-blend-mode: screen;
    opacity: 0.35;
    z-index: 2;
    transition: opacity 0.3s ease;
  }

  .gd-card:hover .gd-card-grain {
    opacity: 0.7;
  }

  /* ── Scan-line sweep on card hover ── */
  .gd-card-scanline {
    position: absolute;
    inset: 0;
    z-index: 3;
    pointer-events: none;
    overflow: hidden;
  }

  .gd-card-scanline::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, var(--gd-spot) 20%, var(--gd-accent) 50%, var(--gd-spot) 80%, transparent 100%);
    opacity: 0;
    top: -2px;
    transition: none;
  }

  .gd-card:hover .gd-card-scanline::after {
    opacity: 0.6;
    animation: gd-scanline 0.6s ease-out forwards;
  }

  @keyframes gd-scanline {
    0% { top: -2px; opacity: 0.8; }
    100% { top: 100%; opacity: 0; }
  }

  .gd-card .gd-tag {
    position: absolute;
    top: 8px;
    left: 8px;
    z-index: 5;
  }

  .gd-card-body {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .gd-card-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .gd-card-name {
    font-family: 'Newsreader', 'Georgia', serif;
    font-size: 20px;
    font-weight: 400;
    font-style: italic;
    color: var(--gd-accent);
    line-height: 1.2;
  }

  .gd-card-idx {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.2em;
    color: var(--gd-dim);
    text-transform: uppercase;
  }

  .gd-card-desc {
    font-size: 12px;
    color: var(--gd-dim);
    line-height: 1.6;
  }

  .gd-card-footer {
    padding: 12px 16px;
    border-top: 1px solid var(--gd-rule);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .gd-card-meta {
    font-size: 9px;
    color: var(--gd-dim);
    display: flex;
    gap: 16px;
  }

  /* ═══ FORM ELEMENTS ═══ */
  .gd-form-grid {
    display: grid;
    gap: 24px;
    max-width: 480px;
  }

  .gd-input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .gd-input-label {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--gd-dim);
  }

  .gd-input {
    font-family: 'Azeret Mono', monospace;
    font-size: 12px;
    padding: 12px 14px;
    border: 1px solid var(--gd-rule);
    background: var(--gd-bg);
    color: var(--gd-fg);
    outline: none;
    transition: border-color 150ms ease;
  }

  .gd-input:focus {
    border-color: var(--gd-spot);
  }

  .gd-input::placeholder {
    color: var(--gd-dim);
  }

  .gd-input-error {
    border-color: var(--gd-error);
  }

  .gd-input-error:focus {
    border-color: var(--gd-error);
  }

  .gd-error-msg {
    font-size: 9px;
    font-weight: 600;
    color: var(--gd-error);
    letter-spacing: 0.05em;
  }

  .gd-checkbox-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  .gd-checkbox-box {
    width: 14px;
    height: 14px;
    border: 1px solid var(--gd-dim);
    display: grid;
    place-items: center;
    flex-shrink: 0;
  }

  .gd-checkbox-box-checked {
    background: var(--gd-spot);
    border-color: var(--gd-spot);
  }

  .gd-checkbox-box-checked::after {
    content: '';
    width: 7px;
    height: 4px;
    border-left: 1.5px solid #fff;
    border-bottom: 1.5px solid #fff;
    transform: rotate(-45deg) translateY(-1px);
  }

  .gd-checkbox-label {
    font-size: 12px;
    color: var(--gd-fg);
  }

  .gd-select-wrap {
    position: relative;
  }

  .gd-select-wrap::after {
    content: '\\2193';
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 10px;
    color: var(--gd-dim);
    pointer-events: none;
  }

  .gd-select-wrap select {
    appearance: none;
    width: 100%;
  }

  /* ═══ ALERTS ═══ */
  .gd-alert-grid {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .gd-alert {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 20px;
    border: 1px solid var(--gd-rule);
    background: var(--gd-bg);
    position: relative;
    transition: border-color 150ms ease;
  }

  .gd-alert:hover {
    border-color: var(--gd-dim);
  }

  .gd-alert-indicator {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
  }

  .gd-alert-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .gd-alert-icon {
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 3px 8px;
    flex-shrink: 0;
  }

  .gd-alert-text {
    font-size: 12px;
    color: var(--gd-fg);
  }

  .gd-alert-action {
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--gd-dim);
    cursor: pointer;
    transition: color 100ms ease;
    background: none;
    border: none;
    font-family: 'Azeret Mono', monospace;
  }

  .gd-alert-action:hover {
    color: var(--gd-fg);
  }

  /* ═══ PROGRESS ═══ */
  .gd-progress-wrap {
    margin-top: 16px;
  }

  .gd-progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .gd-progress-label {
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--gd-dim);
  }

  .gd-progress {
    height: 2px;
    background: var(--gd-rule);
    position: relative;
    overflow: hidden;
  }

  .gd-progress-bar {
    height: 100%;
    background: var(--gd-spot);
  }

  /* ═══ OPERATIONS (SAMPLE CONTENT) ═══ */
  .gd-ops-grid {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .gd-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border: 1px solid var(--gd-rule);
    background: var(--gd-bg);
    transition: border-color 150ms ease;
    position: relative;
  }

  .gd-row::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0;
    background: var(--gd-spot);
    transition: width 0.2s ease;
  }

  .gd-row:hover {
    border-color: var(--gd-dim);
  }

  .gd-row:hover::before {
    width: 3px;
  }

  .gd-row-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .gd-row-title {
    font-family: 'Newsreader', 'Georgia', serif;
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    color: var(--gd-accent);
  }

  .gd-row-desc {
    font-size: 10px;
    color: var(--gd-dim);
    letter-spacing: 0.05em;
  }

  .gd-row-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .gd-badge {
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 4px 10px;
    border: 1px solid var(--gd-rule);
    color: var(--gd-dim);
  }

  .gd-badge-active {
    border-color: var(--gd-success);
    color: var(--gd-success);
    background: var(--gd-success-dim);
  }

  .gd-badge-queued {
    border-color: var(--gd-info);
    color: var(--gd-info);
    background: var(--gd-info-dim);
  }

  .gd-badge-warning {
    border-color: var(--gd-warning);
    color: var(--gd-warning);
    background: var(--gd-warning-dim);
  }

  /* ═══ RESPONSIVE ═══ */
  @media (max-width: 768px) {
    .gd-hero-title {
      font-size: 40px;
    }

    .gd-section {
      margin-bottom: 48px;
    }

    .gd-section-title {
      font-size: 28px;
    }

    .gd-palette {
      grid-template-columns: repeat(2, 1fr);
    }

    .gd-card-grid {
      grid-template-columns: 1fr;
    }

    .gd-type-row {
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .gd-btn-showcase {
      padding: 20px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .gd-showcase * { animation: none !important; }
  }
`;

// ─── Card data ────────────────────────────────────────────

const CARDS = [
  {
    tag: 'Canvas',
    name: 'Film Grain',
    idx: 'No. 001',
    desc: 'Per-pixel random luminance via Canvas putImageData. The foundational noise layer.',
    gradient: 'radial-gradient(ellipse at 30% 40%, #1e1c18, #0c0b0a)',
    coverage: '98%',
    speed: '14 fps',
    grainType: 'film' as const,
  },
  {
    tag: 'Bayer 8x8',
    name: 'Digital Dither',
    idx: 'No. 002',
    desc: 'Ordered dithering matrix producing the characteristic cross-hatch of early digital imaging.',
    gradient: 'linear-gradient(160deg, #151310, #0c0b0a)',
    coverage: '64 cells',
    speed: 'Static',
    grainType: 'dither' as const,
  },
  {
    tag: 'Scatter',
    name: 'Organic Stipple',
    idx: 'No. 003',
    desc: 'Poisson-disk-distributed dots with jittered radius for hand-stippled illustration texture.',
    gradient: 'linear-gradient(135deg, #141210, #0c0b0a)',
    coverage: 'Variable',
    speed: 'Static',
    grainType: 'stipple' as const,
  },
];

// ─── Page component ──────────────────────────────────────

export default function DesignShowcase() {
  // Hero grain
  const heroGrainRef = useRef<HTMLCanvasElement>(null);

  // Card grain canvases
  const cardFilmRef = useRef<HTMLCanvasElement>(null);
  const cardDitherRef = useRef<HTMLCanvasElement>(null);
  const cardStippleRef = useRef<HTMLCanvasElement>(null);

  // Hook up grain renderers
  useFilmGrain(heroGrainRef, { density: 0.12, scale: 2, speed: 10, active: true });
  useFilmGrain(cardFilmRef, { density: 0.2, scale: 2, speed: 14, active: true });
  useDitherGrain(cardDitherRef, { density: 0.2, scale: 2 });
  useStippleGrain(cardStippleRef, { density: 0.2, scale: 3 });

  const cardRefs: Record<string, React.RefObject<HTMLCanvasElement | null>> = {
    film: cardFilmRef,
    dither: cardDitherRef,
    stipple: cardStippleRef,
  };

  return (
    <>
      <style>{cssStyles}</style>
      <main className="gd-showcase">
        <div className="gd-content">
          {/* ─── HERO ─── */}
          <section className="gd-section gd-hero">
            <div className="gd-hero-grain-wrap">
              <canvas ref={heroGrainRef} className="gd-hero-grain-canvas" />
            </div>
            <span className="gd-hero-label">Specimen Catalog</span>
            <h1 className="gd-hero-title">
              Grain is felt,<br />not seen
            </h1>
            <div className="gd-hero-rule" />
            <p className="gd-hero-subtitle">
              An analog photography-inspired design system built around film grain textures,
              darkroom aesthetics, and the imperfect warmth of chemical processes.
              Monospace precision meets editorial serif in a specimen-catalog layout.
            </p>
            <div className="gd-hero-cta">
              <button className="gd-btn gd-btn-primary">Browse specimens</button>
              <button className="gd-btn gd-btn-secondary">View source</button>
            </div>
            <span className="gd-hero-idx">No. 001</span>
          </section>

          {/* ─── COLOR PALETTE ─── */}
          <section className="gd-section">
            <div className="gd-section-header">
              <h2 className="gd-section-title">Color Palette</h2>
              <span className="gd-section-label">Darkroom Tones</span>
            </div>
            <div className="gd-palette">
              {[
                { name: 'Background', hex: '#0c0b0a', bg: '#0c0b0a' },
                { name: 'Foreground', hex: '#d4d0c8', bg: '#d4d0c8' },
                { name: 'Dimmed', hex: '#5a564e', bg: '#5a564e' },
                { name: 'Rule', hex: '#2a2826', bg: '#2a2826' },
                { name: 'Accent', hex: '#e8e4da', bg: '#e8e4da' },
                { name: 'Spot', hex: '#b8503a', bg: '#b8503a' },
                { name: 'Success', hex: '#6b8f71', bg: '#6b8f71' },
                { name: 'Error', hex: '#c45c4a', bg: '#c45c4a' },
                { name: 'Warning', hex: '#c8a050', bg: '#c8a050' },
                { name: 'Info', hex: '#6a8caf', bg: '#6a8caf' },
                { name: 'Warm BG', hex: '#1a1410', bg: '#1a1410' },
                { name: 'Light BG', hex: '#f0ece4', bg: '#f0ece4' },
              ].map(c => (
                <div key={c.name} className="gd-swatch">
                  <div className="gd-swatch-color" style={{ background: c.bg }} />
                  <div className="gd-swatch-info">
                    <span className="gd-swatch-name">{c.name}</span>
                    <span className="gd-swatch-hex">{c.hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── TYPOGRAPHY ─── */}
          <section className="gd-section">
            <div className="gd-section-header">
              <h2 className="gd-section-title">Typography Scale</h2>
              <span className="gd-section-label">Serif + Mono</span>
            </div>
            <div className="gd-type-grid">
              <div className="gd-type-row">
                <span className="gd-type-label">Hero / 56px</span>
                <h1 className="gd-type-serif" style={{ fontSize: '48px', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1 }}>
                  Texture adds presence
                </h1>
              </div>
              <div className="gd-type-row">
                <span className="gd-type-label">H2 / 36px</span>
                <h2 className="gd-type-serif" style={{ fontSize: '32px', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  The analog warmth of chemical processes
                </h2>
              </div>
              <div className="gd-type-row">
                <span className="gd-type-label">H3 / 22px</span>
                <h3 className="gd-type-serif" style={{ fontSize: '20px', fontWeight: 400, lineHeight: 1.3 }}>
                  Specimen labels and index numbers
                </h3>
              </div>
              <div className="gd-type-row">
                <span className="gd-type-label">Body / 13px</span>
                <p className="gd-type-mono" style={{ fontSize: '13px', lineHeight: 1.65, color: 'var(--gd-fg)', maxWidth: '500px' }}>
                  This system pairs Newsreader italic for editorial display headlines with
                  Azeret Mono for specimen labels and body text. The contrast between organic
                  serif forms and rigid monospace grids echoes the tension between analog
                  craft and digital precision.
                </p>
              </div>
              <div className="gd-type-row">
                <span className="gd-type-label">Label / 9px</span>
                <p className="gd-type-mono" style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--gd-dim)' }}>
                  Density: 20% &middot; Scale: 2px &middot; Speed: 14fps &middot; Blend: Screen
                </p>
              </div>
            </div>
          </section>

          {/* ─── BUTTONS ─── */}
          <section className="gd-section">
            <div className="gd-section-header">
              <h2 className="gd-section-title">Buttons & Interactions</h2>
              <span className="gd-section-label">Controls</span>
            </div>
            <div className="gd-btn-showcase">
              <span className="gd-tag">Interactive</span>
              <button className="gd-btn gd-btn-primary">Primary Action</button>
              <button className="gd-btn gd-btn-secondary">Secondary</button>
              <button className="gd-btn gd-btn-success">Confirm</button>
              <button className="gd-btn gd-btn-disabled" disabled>Disabled</button>
              <a className="gd-btn-link" href="#">View Documentation</a>
            </div>
          </section>

          {/* ─── CARDS ─── */}
          <section className="gd-section">
            <div className="gd-section-header">
              <h2 className="gd-section-title">Cards</h2>
              <span className="gd-section-label">Specimen Panels</span>
            </div>
            <div className="gd-card-grid">
              {CARDS.map(card => (
                <article key={card.idx} className="gd-card">
                  <div className="gd-card-preview">
                    <div className="gd-card-preview-bg" style={{ background: card.gradient }} />
                    <canvas
                      ref={cardRefs[card.grainType]}
                      className="gd-card-grain"
                    />
                    <div className="gd-card-scanline" />
                    <span className="gd-tag">{card.tag}</span>
                  </div>
                  <div className="gd-card-body">
                    <div className="gd-card-header">
                      <h3 className="gd-card-name">{card.name}</h3>
                      <span className="gd-card-idx">{card.idx}</span>
                    </div>
                    <p className="gd-card-desc">{card.desc}</p>
                  </div>
                  <div className="gd-card-footer">
                    <div className="gd-card-meta">
                      <span>Coverage: {card.coverage}</span>
                      <span>Speed: {card.speed}</span>
                    </div>
                    <a className="gd-btn-link" href="#">View</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ─── FORM ELEMENTS ─── */}
          <section className="gd-section">
            <div className="gd-section-header">
              <h2 className="gd-section-title">Form Elements</h2>
              <span className="gd-section-label">Configuration</span>
            </div>
            <div className="gd-form-grid">
              <div className="gd-input-group">
                <label className="gd-input-label">Texture Density</label>
                <input className="gd-input" placeholder="20%" readOnly />
              </div>
              <div className="gd-input-group">
                <label className="gd-input-label">Base Frequency</label>
                <input className="gd-input gd-input-error" placeholder="0.65" readOnly />
                <span className="gd-error-msg">Value out of range. Expected 0.01 to 1.0</span>
              </div>
              <div className="gd-checkbox-wrap">
                <div className="gd-checkbox-box gd-checkbox-box-checked" />
                <span className="gd-checkbox-label">Enable grain animation</span>
              </div>
              <div className="gd-input-group">
                <label className="gd-input-label">Blend Mode</label>
                <div className="gd-select-wrap">
                  <select className="gd-input">
                    <option>Screen</option>
                    <option>Multiply</option>
                    <option>Overlay</option>
                    <option>Soft Light</option>
                  </select>
                </div>
              </div>
              <div>
                <button className="gd-btn gd-btn-primary">Apply settings</button>
              </div>
            </div>
          </section>

          {/* ─── FEEDBACK & STATUS ─── */}
          <section className="gd-section">
            <div className="gd-section-header">
              <h2 className="gd-section-title">Feedback & Status</h2>
              <span className="gd-section-label">System Alerts</span>
            </div>
            <div className="gd-alert-grid">
              <div className="gd-alert">
                <div className="gd-alert-indicator" style={{ background: 'var(--gd-success)' }} />
                <div className="gd-alert-content">
                  <span className="gd-alert-icon" style={{ color: 'var(--gd-success)', background: 'var(--gd-success-dim)' }}>OK</span>
                  <span className="gd-alert-text">Grain texture rendered successfully at 14 fps.</span>
                </div>
                <button className="gd-alert-action">Dismiss</button>
              </div>
              <div className="gd-alert">
                <div className="gd-alert-indicator" style={{ background: 'var(--gd-error)' }} />
                <div className="gd-alert-content">
                  <span className="gd-alert-icon" style={{ color: 'var(--gd-error)', background: 'var(--gd-error-dim)' }}>ERR</span>
                  <span className="gd-alert-text">Canvas context lost. Attempting recovery.</span>
                </div>
                <button className="gd-alert-action">Retry</button>
              </div>
              <div className="gd-alert">
                <div className="gd-alert-indicator" style={{ background: 'var(--gd-warning)' }} />
                <div className="gd-alert-content">
                  <span className="gd-alert-icon" style={{ color: 'var(--gd-warning)', background: 'var(--gd-warning-dim)' }}>WARN</span>
                  <span className="gd-alert-text">Density above 40% may impact rendering performance.</span>
                </div>
                <button className="gd-alert-action">Adjust</button>
              </div>
              <div className="gd-alert">
                <div className="gd-alert-indicator" style={{ background: 'var(--gd-info)' }} />
                <div className="gd-alert-content">
                  <span className="gd-alert-icon" style={{ color: 'var(--gd-info)', background: 'var(--gd-info-dim)' }}>INFO</span>
                  <span className="gd-alert-text">SVG filter fallback active. No JavaScript required.</span>
                </div>
                <button className="gd-alert-action">Details</button>
              </div>
            </div>

            <div className="gd-progress-wrap">
              <div className="gd-progress-header">
                <span className="gd-progress-label">Render Progress</span>
                <span className="gd-progress-label">65%</span>
              </div>
              <div className="gd-progress">
                <div className="gd-progress-bar" style={{ width: '65%' }} />
              </div>
            </div>
          </section>

          {/* ─── SAMPLE CONTENT LAYOUT ─── */}
          <section className="gd-section">
            <div className="gd-section-header">
              <h2 className="gd-section-title">Texture Library</h2>
              <span className="gd-section-label">Active Specimens</span>
            </div>
            <div className="gd-ops-grid">
              <div className="gd-row">
                <div className="gd-row-info">
                  <div className="gd-row-title">Film grain overlay</div>
                  <div className="gd-row-desc">Canvas &middot; 14fps &middot; Density 20% &middot; Screen blend</div>
                </div>
                <div className="gd-row-actions">
                  <span className="gd-badge gd-badge-active">Active</span>
                  <button className="gd-btn gd-btn-secondary" style={{ padding: '6px 14px', fontSize: '8px' }}>
                    Pause
                  </button>
                </div>
              </div>
              <div className="gd-row">
                <div className="gd-row-info">
                  <div className="gd-row-title">Bayer dither matrix</div>
                  <div className="gd-row-desc">8x8 ordered &middot; Static &middot; Density 20% &middot; Multiply blend</div>
                </div>
                <div className="gd-row-actions">
                  <span className="gd-badge gd-badge-queued">Queued</span>
                  <button className="gd-btn gd-btn-secondary" style={{ padding: '6px 14px', fontSize: '8px' }}>
                    Configure
                  </button>
                </div>
              </div>
              <div className="gd-row">
                <div className="gd-row-info">
                  <div className="gd-row-title">SVG feTurbulence fallback</div>
                  <div className="gd-row-desc">GPU-accelerated &middot; No JavaScript &middot; Fractal noise</div>
                </div>
                <div className="gd-row-actions">
                  <span className="gd-badge gd-badge-warning">Standby</span>
                  <button className="gd-btn gd-btn-secondary" style={{ padding: '6px 14px', fontSize: '8px' }}>
                    Activate
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
