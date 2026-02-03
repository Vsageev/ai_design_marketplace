'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';

const SHAPES = ['Sphere', 'Grid', 'Wave'] as const;

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700&family=JetBrains+Mono:wght@400;500&display=swap');

  .pcf-root {
    --bg: #fafafa;
    --ink: #111111;
    --muted: #777777;
    --border: #e0e0e0;

    font-family: 'DM Sans', system-ui, sans-serif;
    background: var(--bg);
    color: var(--ink);
    min-height: 100vh;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  /* ---- Demo canvas ---- */

  .pcf-demo {
    position: relative;
    width: 100%;
    overflow: hidden;
    cursor: crosshair;
    border-bottom: 1px solid var(--border);
    background: var(--bg);
  }

  .pcf-canvas {
    display: block;
    width: 100%;
  }

  .pcf-demo-label {
    position: absolute;
    top: 16px;
    left: 20px;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--muted);
    z-index: 2;
  }

  .pcf-demo-shape {
    position: absolute;
    top: 16px;
    right: 20px;
    display: flex;
    gap: 6px;
    z-index: 2;
  }

  .pcf-pill {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    padding: 5px 14px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: #fff;
    color: var(--muted);
    cursor: pointer;
    transition: all 140ms ease;
  }

  .pcf-pill:hover {
    border-color: var(--ink);
    color: var(--ink);
  }

  .pcf-pill[data-active='true'] {
    background: var(--ink);
    border-color: var(--ink);
    color: #fff;
  }

  /* ---- Controls panel ---- */

  .pcf-controls {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 24px 64px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .pcf-controls-title {
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--muted);
    padding-bottom: 10px;
    border-bottom: 1px solid var(--border);
    margin: 0;
  }

  .pcf-sliders {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 24px;
  }

  .pcf-slider-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .pcf-slider-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .pcf-slider-label {
    font-size: 13px;
    font-weight: 500;
    color: var(--ink);
  }

  .pcf-slider-value {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: var(--muted);
  }

  .pcf-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: var(--border);
    outline: none;
  }

  .pcf-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--ink);
    cursor: pointer;
    border: 2px solid #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }

  .pcf-slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--ink);
    cursor: pointer;
    border: 2px solid #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }

  /* ---- Variant demos ---- */

  .pcf-variants {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
  }

  .pcf-variant {
    position: relative;
    background: var(--bg);
    height: 280px;
    cursor: crosshair;
    overflow: hidden;
  }

  .pcf-variant-canvas {
    display: block;
    width: 100%;
    height: 100%;
  }

  .pcf-variant-label {
    position: absolute;
    bottom: 12px;
    left: 14px;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--muted);
    z-index: 1;
  }

  @media (max-width: 640px) {
    .pcf-variants { grid-template-columns: 1fr; }
    .pcf-sliders { grid-template-columns: 1fr; }
  }

  @media (prefers-reduced-motion: reduce) {
    .pcf-demo, .pcf-variant { cursor: default; }
  }
`;

// ---- Shape generators ----

function generateSphere(count: number, cx: number, cy: number, radius: number) {
  const positions: [number, number][] = [];
  const phi = (1 + Math.sqrt(5)) / 2;
  for (let i = 0; i < count; i++) {
    const theta = (2 * Math.PI * i) / phi;
    const r = Math.sqrt(i / count) * radius;
    positions.push([cx + r * Math.cos(theta), cy + r * Math.sin(theta)]);
  }
  return positions;
}

function generateGrid(count: number, cx: number, cy: number, size: number) {
  const positions: [number, number][] = [];
  const cols = Math.ceil(Math.sqrt(count * 1.5));
  const rows = Math.ceil(count / cols);
  const cellW = size / cols;
  const cellH = size / rows;
  const ox = cx - size / 2;
  const oy = cy - size / 2;
  for (let i = 0; i < count; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    positions.push([ox + col * cellW + cellW / 2, oy + row * cellH + cellH / 2]);
  }
  return positions;
}

function generateWave(count: number, cx: number, cy: number, width: number) {
  const positions: [number, number][] = [];
  const cols = Math.ceil(Math.sqrt(count * 2));
  const rows = Math.ceil(count / cols);
  const spacing = width / cols;
  const ox = cx - width / 2;
  const oy = cy - (rows * spacing) / 2;
  for (let i = 0; i < count; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const wave = Math.sin(col * 0.3) * 30 + Math.cos(row * 0.4) * 20;
    positions.push([ox + col * spacing, oy + row * spacing + wave]);
  }
  return positions;
}

type Particle = {
  x: number; y: number;
  homeX: number; homeY: number;
  targetX: number; targetY: number;
  vx: number; vy: number;
  size: number; alpha: number;
};

// ---- Reusable canvas hook ----

function usePointCloud(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  opts: {
    count: number;
    repulsionRadius: number;
    repulsionForce: number;
    returnSpeed: number;
    damping: number;
    dotAlpha: [number, number];
    dotSize: [number, number];
    shapeIndex: number;
  },
) {
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef<Particle[]>([]);
  const shapesRef = useRef<[number, number][][]>([]);
  const morphRef = useRef(1);
  const frameRef = useRef(0);

  const { count, repulsionRadius, repulsionForce, returnSpeed, damping, dotAlpha, dotSize, shapeIndex } = opts;

  const init = useCallback(
    (canvas: HTMLCanvasElement) => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.34;

      const sphere = generateSphere(count, cx, cy, radius);
      const grid = generateGrid(count, cx, cy, radius * 1.8);
      const wave = generateWave(count, cx, cy, radius * 2.2);
      shapesRef.current = [sphere, grid, wave];

      const initial = shapesRef.current[shapeIndex] || sphere;
      const particles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        const [sx, sy] = initial[i] || [cx, cy];
        particles.push({
          x: sx + (Math.random() - 0.5) * 300,
          y: sy + (Math.random() - 0.5) * 300,
          homeX: sx, homeY: sy,
          targetX: sx, targetY: sy,
          vx: 0, vy: 0,
          size: dotSize[0] + Math.random() * (dotSize[1] - dotSize[0]),
          alpha: dotAlpha[0] + Math.random() * (dotAlpha[1] - dotAlpha[0]),
        });
      }
      particlesRef.current = particles;
      morphRef.current = 1;
    },
    [count, shapeIndex, dotAlpha, dotSize],
  );

  // Morph to new shape when shapeIndex changes
  useEffect(() => {
    const shapes = shapesRef.current;
    if (!shapes.length) return;
    morphRef.current = 0;
    const shape = shapes[shapeIndex];
    if (!shape) return;
    particlesRef.current.forEach((p, i) => {
      if (shape[i]) {
        p.targetX = shape[i][0];
        p.targetY = shape[i][1];
      }
    });
  }, [shapeIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const parent = canvas.parentElement!;
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      canvas.style.width = parent.clientWidth + 'px';
      canvas.style.height = parent.clientHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init(canvas);
    };

    resize();
    window.addEventListener('resize', resize);

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    canvas.addEventListener('pointermove', onPointer);
    canvas.addEventListener('pointerleave', onLeave);

    if (reduceMotion) {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);
      for (const p of particlesRef.current) {
        p.x = p.homeX; p.y = p.homeY;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30,30,30,${p.alpha})`;
        ctx.fill();
      }
      return () => {
        window.removeEventListener('resize', resize);
        canvas.removeEventListener('pointermove', onPointer);
        canvas.removeEventListener('pointerleave', onLeave);
      };
    }

    const animate = () => {
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      if (morphRef.current < 1) {
        morphRef.current = Math.min(1, morphRef.current + 0.008);
        const t = morphRef.current;
        const ease = t * t * (3 - 2 * t);
        for (const p of particles) {
          p.homeX += (p.targetX - p.homeX) * ease * 0.1;
          p.homeY += (p.targetY - p.homeY) * ease * 0.1;
        }
      }

      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < repulsionRadius && dist > 0.1) {
          const cd = Math.max(dist, 30);
          const f = Math.min(repulsionForce / (cd * cd), 6);
          p.vx += (dx / dist) * f;
          p.vy += (dy / dist) * f;
        }

        p.vx += (p.homeX - p.x) * returnSpeed;
        p.vy += (p.homeY - p.y) * returnSpeed;
        p.vx *= damping;
        p.vy *= damping;

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 12) { p.vx *= 12 / speed; p.vy *= 12 / speed; }

        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30,30,30,${p.alpha})`;
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onPointer);
      canvas.removeEventListener('pointerleave', onLeave);
    };
  }, [init, repulsionRadius, repulsionForce, returnSpeed, damping, canvasRef]);
}

// ---- Small static variant canvases ----

function VariantCanvas({
  shape,
  count,
  label,
}: {
  shape: number;
  count: number;
  label: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  usePointCloud(ref, {
    count,
    repulsionRadius: 80,
    repulsionForce: 5000,
    returnSpeed: 0.04,
    damping: 0.88,
    dotAlpha: [0.1, 0.35],
    dotSize: [0.8, 1.8],
    shapeIndex: shape,
  });

  return (
    <div className="pcf-variant">
      <canvas ref={ref} className="pcf-variant-canvas" />
      <span className="pcf-variant-label">{label}</span>
    </div>
  );
}

// ---- Page ----

export default function PointCloudFlatPage() {
  const mainCanvasRef = useRef<HTMLCanvasElement>(null);
  const [activeShape, setActiveShape] = useState(0);
  const [particleCount, setParticleCount] = useState(1200);
  const [repRadius, setRepRadius] = useState(120);
  const [repForce, setRepForce] = useState(8000);
  const [returnSpeed, setReturnSpeed] = useState(0.04);
  const [dampingVal, setDampingVal] = useState(0.88);

  usePointCloud(mainCanvasRef, {
    count: particleCount,
    repulsionRadius: repRadius,
    repulsionForce: repForce,
    returnSpeed,
    damping: dampingVal,
    dotAlpha: [0.12, 0.4],
    dotSize: [1, 2.4],
    shapeIndex: activeShape,
  });

  return (
    <>
      <style>{cssStyles}</style>
      <section className="pcf-root">
        {/* Main interactive demo */}
        <div className="pcf-demo" style={{ height: '70vh', minHeight: 420 }}>
          <canvas ref={mainCanvasRef} className="pcf-canvas" style={{ position: 'absolute', inset: 0 }} />
          <span className="pcf-demo-label">Interactive Demo</span>
          <div className="pcf-demo-shape">
            {SHAPES.map((name, i) => (
              <button
                key={name}
                className="pcf-pill"
                data-active={String(activeShape === i)}
                onClick={() => setActiveShape(i)}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="pcf-controls">
          <h2 className="pcf-controls-title">Parameters</h2>
          <div className="pcf-sliders">
            <div className="pcf-slider-group">
              <div className="pcf-slider-header">
                <span className="pcf-slider-label">Particles</span>
                <span className="pcf-slider-value">{particleCount}</span>
              </div>
              <input
                type="range" className="pcf-slider"
                min={200} max={2000} step={100}
                value={particleCount}
                onChange={e => setParticleCount(Number(e.target.value))}
              />
            </div>
            <div className="pcf-slider-group">
              <div className="pcf-slider-header">
                <span className="pcf-slider-label">Repulsion Radius</span>
                <span className="pcf-slider-value">{repRadius}px</span>
              </div>
              <input
                type="range" className="pcf-slider"
                min={40} max={250} step={10}
                value={repRadius}
                onChange={e => setRepRadius(Number(e.target.value))}
              />
            </div>
            <div className="pcf-slider-group">
              <div className="pcf-slider-header">
                <span className="pcf-slider-label">Repulsion Force</span>
                <span className="pcf-slider-value">{repForce}</span>
              </div>
              <input
                type="range" className="pcf-slider"
                min={1000} max={20000} step={1000}
                value={repForce}
                onChange={e => setRepForce(Number(e.target.value))}
              />
            </div>
            <div className="pcf-slider-group">
              <div className="pcf-slider-header">
                <span className="pcf-slider-label">Return Speed</span>
                <span className="pcf-slider-value">{returnSpeed.toFixed(2)}</span>
              </div>
              <input
                type="range" className="pcf-slider"
                min={0.01} max={0.12} step={0.01}
                value={returnSpeed}
                onChange={e => setReturnSpeed(Number(e.target.value))}
              />
            </div>
            <div className="pcf-slider-group">
              <div className="pcf-slider-header">
                <span className="pcf-slider-label">Damping</span>
                <span className="pcf-slider-value">{dampingVal.toFixed(2)}</span>
              </div>
              <input
                type="range" className="pcf-slider"
                min={0.7} max={0.98} step={0.01}
                value={dampingVal}
                onChange={e => setDampingVal(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Shape variants grid */}
          <h2 className="pcf-controls-title">Shape Variants</h2>
          <div className="pcf-variants">
            <VariantCanvas shape={0} count={600} label="Sphere - 600" />
            <VariantCanvas shape={1} count={600} label="Grid - 600" />
            <VariantCanvas shape={2} count={600} label="Wave - 600" />
            <VariantCanvas shape={0} count={2000} label="Sphere - 2000" />
          </div>
        </div>
      </section>
    </>
  );
}
