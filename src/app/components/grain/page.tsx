'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

// ─── Film grain (canvas pixel noise) ──────────────────────

function useFilmGrain(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  opts: { density: number; scale: number; speed: number; light: boolean; active: boolean }
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
  }, [canvasRef, opts.density, opts.scale, opts.speed, opts.light, opts.active]);
}

// ─── Dither grain (Bayer ordered dithering) ───────────────

function useDitherGrain(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  opts: { density: number; scale: number; light: boolean }
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
          const v = on ? (opts.light ? 0 : 255) : 0;
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
  }, [canvasRef, opts.density, opts.scale, opts.light]);
}

// ─── Halftone grain (circular dot pattern) ────────────────

function useHalftoneGrain(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  opts: { density: number; scale: number; light: boolean }
) {
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

      const spacing = Math.max(3, opts.scale * 4);
      const maxRadius = spacing * 0.48;
      const dotColor = opts.light ? 'rgba(0,0,0,' : 'rgba(255,255,255,';

      for (let y = spacing / 2; y < h; y += spacing) {
        for (let x = spacing / 2; x < w; x += spacing) {
          const cx = (x / w) * 2 - 1;
          const cy = (y / h) * 2 - 1;
          const dist = Math.sqrt(cx * cx + cy * cy) / 1.414;
          const gradientVal = 1 - dist;
          const r = maxRadius * gradientVal * opts.density;

          if (r > 0.3) {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = dotColor + (0.15 + opts.density * 0.6) + ')';
            ctx.fill();
          }
        }
      }
    }

    render();
    const ro = new ResizeObserver(render);
    ro.observe(canvas);

    return () => ro.disconnect();
  }, [canvasRef, opts.density, opts.scale, opts.light]);
}

// ─── Stipple grain (scattered dots) ──────────────────────

function useStippleGrain(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  opts: { density: number; scale: number; light: boolean }
) {
  // Use a ref to store the seed so dots don't jump on every render
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

      // Generate seeds if needed
      if (seedRef.current.length < count * 3) {
        seedRef.current = Array.from({ length: count * 3 }, () => Math.random());
      }

      const seeds = seedRef.current;
      const dotColor = opts.light ? 'rgba(0,0,0,' : 'rgba(255,255,255,';
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
  }, [canvasRef, opts.density, opts.scale, opts.light]);
}

// ─── Blend mode selector ──────────────────────────────────

type BlendMode = 'multiply' | 'screen' | 'overlay' | 'soft-light';
type Theme = 'darkroom' | 'lightroom' | 'warm';

// ─── Styles ───────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap');

  .grn-root {
    --grn-bg: #0c0b0a;
    --grn-fg: #d4d0c8;
    --grn-dim: #5a564e;
    --grn-rule: #2a2826;
    --grn-accent: #e8e4da;
    --grn-spot: #b8503a;

    font-family: 'Azeret Mono', 'SF Mono', monospace;
    background: var(--grn-bg);
    color: var(--grn-fg);
    min-height: 100vh;
    overflow-x: hidden;
  }

  .grn-root[data-theme="lightroom"] {
    --grn-bg: #f0ece4;
    --grn-fg: #1a1816;
    --grn-dim: #908a7e;
    --grn-rule: #d4cfc5;
    --grn-accent: #1a1816;
    --grn-spot: #9e3a22;
  }

  .grn-root[data-theme="warm"] {
    --grn-bg: #1a1410;
    --grn-fg: #c8b89c;
    --grn-dim: #6b5d4a;
    --grn-rule: #2e261e;
    --grn-accent: #d4c4a8;
    --grn-spot: #c87040;
  }

  /* ── Controls ── */

  .grn-controls {
    max-width: 960px;
    margin: 0 auto;
    padding: 32px 24px 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .grn-controls-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid var(--grn-rule);
    padding-bottom: 12px;
  }

  .grn-controls-title {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: var(--grn-dim);
    margin: 0;
  }

  .grn-controls-id {
    font-size: 9px;
    color: var(--grn-dim);
    letter-spacing: 0.1em;
  }

  .grn-param-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
  }

  .grn-param {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .grn-param-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .grn-param-label {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--grn-fg);
  }

  .grn-param-val {
    font-size: 10px;
    font-weight: 400;
    color: var(--grn-dim);
    font-variant-numeric: tabular-nums;
  }

  .grn-range {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 1px;
    background: var(--grn-rule);
    outline: none;
    border: none;
  }

  .grn-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    background: var(--grn-spot);
    cursor: pointer;
    border: none;
  }

  .grn-range::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background: var(--grn-spot);
    cursor: pointer;
    border: none;
  }

  .grn-chips {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }

  .grn-chip {
    font-family: 'Azeret Mono', monospace;
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    padding: 4px 12px;
    border: 1px solid var(--grn-rule);
    background: transparent;
    color: var(--grn-dim);
    cursor: pointer;
    transition: all 100ms ease;
  }

  .grn-chip:hover {
    border-color: var(--grn-dim);
    color: var(--grn-fg);
  }

  .grn-chip[data-on="true"] {
    background: var(--grn-spot);
    border-color: var(--grn-spot);
    color: #fff;
  }

  /* ── Specimen grid ── */

  .grn-specimens {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
  }

  .grn-specimen {
    position: relative;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: var(--grn-bg);
    border: 1px solid var(--grn-rule);
  }

  .grn-specimen-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    image-rendering: pixelated;
    z-index: 2;
  }

  .grn-specimen-bg {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .grn-specimen-label {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background: linear-gradient(to top, var(--grn-bg) 0%, transparent 100%);
  }

  .grn-root[data-theme="lightroom"] .grn-specimen-label {
    background: linear-gradient(to top, var(--grn-bg) 0%, transparent 100%);
  }

  .grn-specimen-name {
    font-family: 'Newsreader', 'Georgia', serif;
    font-size: 22px;
    font-weight: 400;
    font-style: italic;
    color: var(--grn-accent);
    line-height: 1;
  }

  .grn-specimen-idx {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.2em;
    color: var(--grn-dim);
    text-transform: uppercase;
  }

  .grn-specimen-tag {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 5;
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--grn-spot);
    background: var(--grn-bg);
    padding: 3px 8px;
    border: 1px solid var(--grn-rule);
  }

  /* ── Full-width demo strip ── */

  .grn-strip-section {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .grn-strip-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-top: 1px solid var(--grn-rule);
    padding: 16px 0;
    margin-bottom: 2px;
  }

  .grn-strip-title {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: var(--grn-dim);
  }

  .grn-strip-sub {
    font-size: 9px;
    color: var(--grn-dim);
    letter-spacing: 0.08em;
  }

  .grn-full-strip {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    border: 1px solid var(--grn-rule);
    margin-bottom: 48px;
  }

  .grn-full-strip-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    image-rendering: pixelated;
    z-index: 2;
  }

  .grn-full-strip-gradient {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .grn-full-strip-labels {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
  }

  .grn-full-strip-label {
    font-size: 8px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--grn-dim);
  }

  /* ── Layered composite demo ── */

  .grn-composite-section {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px 64px;
  }

  .grn-composite {
    position: relative;
    width: 100%;
    height: 320px;
    overflow: hidden;
    border: 1px solid var(--grn-rule);
  }

  .grn-composite-layer {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    image-rendering: pixelated;
  }

  .grn-composite-content {
    position: relative;
    z-index: 10;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    text-align: center;
    padding: 24px;
  }

  .grn-composite-big {
    font-family: 'Newsreader', 'Georgia', serif;
    font-size: 64px;
    font-weight: 400;
    font-style: italic;
    color: var(--grn-accent);
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .grn-composite-small {
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--grn-dim);
    max-width: 400px;
  }

  .grn-composite-rule {
    width: 60px;
    height: 1px;
    background: var(--grn-rule);
  }

  /* ── SVG filter demo ── */

  .grn-svg-section {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px 64px;
  }

  .grn-svg-demo {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
    border: 1px solid var(--grn-rule);
  }

  .grn-svg-grain-layer {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
    opacity: 0.5;
  }

  .grn-svg-bg {
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  .grn-svg-label {
    position: absolute;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .grn-svg-label-text {
    font-family: 'Newsreader', 'Georgia', serif;
    font-size: 28px;
    font-weight: 400;
    font-style: italic;
    color: var(--grn-accent);
  }

  .grn-svg-label-sub {
    font-size: 8px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    color: var(--grn-dim);
    margin-top: 8px;
  }

  /* ── Responsive ── */

  @media (max-width: 640px) {
    .grn-specimens { grid-template-columns: 1fr; }
    .grn-param-grid { grid-template-columns: 1fr; }
    .grn-composite-big { font-size: 40px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .grn-root * { animation: none !important; }
  }
`;

// ─── Specimen data ────────────────────────────────────────

const SPECIMENS = [
  { id: 'film', name: 'Film Grain', tag: 'Canvas', idx: 'NO. 001' },
  { id: 'dither', name: 'Digital Dither', tag: 'Bayer 8x8', idx: 'NO. 002' },
  { id: 'halftone', name: 'Halftone Dot', tag: 'Radial', idx: 'NO. 003' },
  { id: 'stipple', name: 'Organic Stipple', tag: 'Scatter', idx: 'NO. 004' },
];

// ─── Page component ──────────────────────────────────────

export default function GrainPage() {
  const [density, setDensity] = useState(20);
  const [scale, setScale] = useState(2);
  const [speed, setSpeed] = useState(14);
  const [theme, setTheme] = useState<Theme>('darkroom');
  const [blendMode, setBlendMode] = useState<BlendMode>('screen');
  const [animated, setAnimated] = useState(true);

  const isLight = theme === 'lightroom';
  const densityNorm = density / 100;

  // Specimen canvas refs
  const filmRef = useRef<HTMLCanvasElement>(null);
  const ditherRef = useRef<HTMLCanvasElement>(null);
  const halftoneRef = useRef<HTMLCanvasElement>(null);
  const stippleRef = useRef<HTMLCanvasElement>(null);

  // Full-width strip ref
  const stripRef = useRef<HTMLCanvasElement>(null);

  // Composite refs
  const compFilmRef = useRef<HTMLCanvasElement>(null);
  const compStippleRef = useRef<HTMLCanvasElement>(null);

  // Hook up the grain renderers
  useFilmGrain(filmRef, { density: densityNorm, scale, speed, light: isLight, active: animated });
  useDitherGrain(ditherRef, { density: densityNorm, scale, light: isLight });
  useHalftoneGrain(halftoneRef, { density: densityNorm, scale, light: isLight });
  useStippleGrain(stippleRef, { density: densityNorm, scale, light: isLight });

  // Strip uses film grain at higher density
  useFilmGrain(stripRef, { density: densityNorm * 1.2, scale, speed, light: isLight, active: animated });

  // Composite layers
  useFilmGrain(compFilmRef, { density: densityNorm * 0.8, scale, speed, light: isLight, active: animated });
  useStippleGrain(compStippleRef, { density: densityNorm * 0.6, scale: scale + 1, light: isLight });

  const canvasRefs: Record<string, React.RefObject<HTMLCanvasElement | null>> = {
    film: filmRef,
    dither: ditherRef,
    halftone: halftoneRef,
    stipple: stippleRef,
  };

  const specimenBlendFor = (id: string) => {
    if (id === 'film') return blendMode;
    if (id === 'dither') return isLight ? 'multiply' : 'screen';
    if (id === 'halftone') return isLight ? 'multiply' : 'screen';
    return isLight ? 'multiply' : 'screen';
  };

  const gradientForSpecimen = useCallback((id: string) => {
    if (isLight) {
      switch (id) {
        case 'film': return 'radial-gradient(ellipse at 30% 40%, #e8e4da, #d4cfc5)';
        case 'dither': return 'linear-gradient(160deg, #e0dcd2, #ccc7bc)';
        case 'halftone': return 'radial-gradient(ellipse at 60% 50%, #f0ece4, #d4cfc5)';
        case 'stipple': return 'linear-gradient(135deg, #ede9e0, #d8d3c8)';
      }
    }
    switch (id) {
      case 'film': return 'radial-gradient(ellipse at 30% 40%, #1e1c18, #0c0b0a)';
      case 'dither': return 'linear-gradient(160deg, #151310, #0c0b0a)';
      case 'halftone': return 'radial-gradient(ellipse at 60% 50%, #1a1816, #0c0b0a)';
      case 'stipple': return 'linear-gradient(135deg, #141210, #0c0b0a)';
      default: return 'var(--grn-bg)';
    }
  }, [isLight]);

  return (
    <>
      <style>{css}</style>
      <section className="grn-root" data-theme={theme}>

        {/* ── Controls ── */}
        <div className="grn-controls">
          <div className="grn-controls-header">
            <h2 className="grn-controls-title">Parameters</h2>
            <span className="grn-controls-id">GRN-{density.toString().padStart(2, '0')}-{scale}-{speed}</span>
          </div>

          <div className="grn-param-grid">
            <div className="grn-param">
              <div className="grn-param-head">
                <span className="grn-param-label">Theme</span>
              </div>
              <div className="grn-chips">
                {(['darkroom', 'lightroom', 'warm'] as Theme[]).map((t) => (
                  <button key={t} className="grn-chip" data-on={String(theme === t)} onClick={() => setTheme(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grn-param">
              <div className="grn-param-head">
                <span className="grn-param-label">Density</span>
                <span className="grn-param-val">{density}%</span>
              </div>
              <input
                type="range" className="grn-range"
                min={5} max={50} step={1} value={density}
                onChange={(e) => setDensity(Number(e.target.value))}
              />
            </div>

            <div className="grn-param">
              <div className="grn-param-head">
                <span className="grn-param-label">Scale</span>
                <span className="grn-param-val">{scale}px</span>
              </div>
              <input
                type="range" className="grn-range"
                min={1} max={8} step={1} value={scale}
                onChange={(e) => setScale(Number(e.target.value))}
              />
            </div>

            <div className="grn-param">
              <div className="grn-param-head">
                <span className="grn-param-label">Speed</span>
                <span className="grn-param-val">{speed} fps</span>
              </div>
              <input
                type="range" className="grn-range"
                min={0} max={30} step={2} value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
              />
            </div>

            <div className="grn-param">
              <div className="grn-param-head">
                <span className="grn-param-label">Blend</span>
              </div>
              <div className="grn-chips">
                {(['multiply', 'screen', 'overlay', 'soft-light'] as BlendMode[]).map((b) => (
                  <button key={b} className="grn-chip" data-on={String(blendMode === b)} onClick={() => setBlendMode(b)}>
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div className="grn-param">
              <div className="grn-param-head">
                <span className="grn-param-label">Animate</span>
              </div>
              <div className="grn-chips">
                <button className="grn-chip" data-on={String(animated)} onClick={() => setAnimated(true)}>On</button>
                <button className="grn-chip" data-on={String(!animated)} onClick={() => setAnimated(false)}>Off</button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Specimen grid ── */}
        <div className="grn-specimens">
          {SPECIMENS.map((spec) => (
            <div key={spec.id} className="grn-specimen">
              <div className="grn-specimen-bg" style={{ background: gradientForSpecimen(spec.id) }} />
              <canvas
                ref={canvasRefs[spec.id]}
                className="grn-specimen-canvas"
                style={{ mixBlendMode: specimenBlendFor(spec.id) }}
              />
              <span className="grn-specimen-tag">{spec.tag}</span>
              <div className="grn-specimen-label">
                <span className="grn-specimen-name">{spec.name}</span>
                <span className="grn-specimen-idx">{spec.idx}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Full-width grain strip ── */}
        <div className="grn-strip-section">
          <div className="grn-strip-header">
            <span className="grn-strip-title">Full-Width Overlay</span>
            <span className="grn-strip-sub">Film grain composited over gradient</span>
          </div>
          <div className="grn-full-strip">
            <div
              className="grn-full-strip-gradient"
              style={{
                background: isLight
                  ? 'linear-gradient(90deg, #e8e4da 0%, #c8c3b8 30%, #908a7e 60%, #605b52 100%)'
                  : 'linear-gradient(90deg, #0c0b0a 0%, #1e1c18 30%, #3a3630 60%, #5a564e 100%)',
              }}
            />
            <canvas
              ref={stripRef}
              className="grn-full-strip-canvas"
              style={{ mixBlendMode: blendMode }}
            />
            <div className="grn-full-strip-labels">
              <span className="grn-full-strip-label">0% Luminance</span>
              <span className="grn-full-strip-label">100% Luminance</span>
            </div>
          </div>
        </div>

        {/* ── Composite layer demo ── */}
        <div className="grn-composite-section">
          <div className="grn-strip-header">
            <span className="grn-strip-title">Composite Layers</span>
            <span className="grn-strip-sub">Film + stipple blended</span>
          </div>
          <div className="grn-composite">
            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                background: isLight
                  ? 'radial-gradient(ellipse at 50% 40%, #f0ece4, #d4cfc5)'
                  : theme === 'warm'
                  ? 'radial-gradient(ellipse at 50% 40%, #2a2018, #1a1410)'
                  : 'radial-gradient(ellipse at 50% 40%, #1a1816, #0c0b0a)',
              }}
            />
            <canvas
              ref={compFilmRef}
              className="grn-composite-layer"
              style={{ zIndex: 2, mixBlendMode: blendMode }}
            />
            <canvas
              ref={compStippleRef}
              className="grn-composite-layer"
              style={{ zIndex: 3, mixBlendMode: isLight ? 'multiply' : 'screen', opacity: 0.6 }}
            />
            <div className="grn-composite-content">
              <span className="grn-composite-small">Texture adds presence</span>
              <div className="grn-composite-rule" />
              <span className="grn-composite-big">Grain is felt,<br />not seen</span>
              <div className="grn-composite-rule" />
              <span className="grn-composite-small">Canvas noise + scatter dots layered at blend mode {blendMode}</span>
            </div>
          </div>
        </div>

        {/* ── SVG filter grain (zero JS) ── */}
        <div className="grn-svg-section">
          <div className="grn-strip-header">
            <span className="grn-strip-title">SVG Filter Grain</span>
            <span className="grn-strip-sub">Zero JavaScript, pure CSS + SVG feTurbulence</span>
          </div>
          <div className="grn-svg-demo">
            <div
              className="grn-svg-bg"
              style={{
                background: isLight
                  ? 'linear-gradient(135deg, #e8e4da, #d4cfc5)'
                  : theme === 'warm'
                  ? 'linear-gradient(135deg, #2a2018, #1a1410)'
                  : 'linear-gradient(135deg, #1a1816, #0c0b0a)',
              }}
            />
            <svg className="grn-svg-grain-layer" style={{ mixBlendMode: isLight ? 'multiply' : 'screen' }}>
              <filter id="grn-turb">
                <feTurbulence type="fractalNoise" baseFrequency={0.65 / scale} numOctaves="4" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#grn-turb)" opacity={densityNorm * 1.5} />
            </svg>
            <div className="grn-svg-label">
              <div className="grn-svg-label-text">feTurbulence</div>
              <div className="grn-svg-label-sub">GPU-accelerated static grain / no canvas required</div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
