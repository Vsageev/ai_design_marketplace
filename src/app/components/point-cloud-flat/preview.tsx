import React from 'react';

export const metadata = {
  id: 'point-cloud-flat',
  name: 'Point Cloud Flat',
  description: 'Interactive point cloud with repulsion physics and shape morphing.',
  tags: ['Component', '3D', 'Particles', 'Motion'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&display=swap');

  .pcf-preview {
    font-family: 'DM Sans', sans-serif;
    height: 100%;
    background: #fafafa;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pcf-preview-field {
    position: relative;
    width: 200px;
    height: 200px;
  }

  .pcf-preview-dot {
    position: absolute;
    border-radius: 50%;
    background: #1a1a1a;
  }

  @keyframes pcf-drift {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(1px, -1px); }
  }

  .pcf-preview-dot-anim {
    animation: pcf-drift 4s ease-in-out infinite;
  }

`;

// Generate a sunflower/golden-angle sphere like the real component
function makeSpherePreview(count: number, cx: number, cy: number, radius: number) {
  const phi = (1 + Math.sqrt(5)) / 2;
  const dots: { x: number; y: number; s: number; a: number; d: string }[] = [];
  for (let i = 0; i < count; i++) {
    const theta = 2 * Math.PI * i / phi;
    const r = Math.sqrt(i / count) * radius;
    const x = cx + r * Math.cos(theta);
    const y = cy + r * Math.sin(theta);
    const size = 2.2 + Math.sin(i * 0.7) * 0.8;
    const alpha = 0.12 + (r / radius) * 0.2;
    dots.push({ x, y, s: size, a: alpha, d: `${(i * 0.05) % 4}s` });
  }
  return dots;
}

const dots = makeSpherePreview(200, 100, 100, 80);

// Simulate a cursor hole — dots near (135, 80) get displaced
const cursorX = 135;
const cursorY = 78;
const cursorR = 28;

const displaced = dots.map(d => {
  const dx = d.x - cursorX;
  const dy = d.y - cursorY;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist < cursorR && dist > 0) {
    const push = (cursorR - dist) * 0.8;
    const nx = dx / dist;
    const ny = dy / dist;
    return { ...d, x: d.x + nx * push, y: d.y + ny * push };
  }
  return d;
});

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="pcf-preview">
        <div className="pcf-preview-field">
          {displaced.map((dot, i) => (
            <div
              key={i}
              className="pcf-preview-dot pcf-preview-dot-anim"
              style={{
                left: `${dot.x}px`,
                top: `${dot.y}px`,
                width: `${dot.s}px`,
                height: `${dot.s}px`,
                opacity: dot.a,
                animationDelay: dot.d,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
