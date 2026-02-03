import React from 'react';

export const metadata = {
  id: 'custom-glass',
  name: 'Custom Glass',
  description: 'Columnar louvered glass panels with asymmetric convex gradients, heavy backdrop blur, and 3D cylindrical depth.',
  tags: ['Component', 'Glassmorphism', 'Texture', 'Overlay'],
};

const previewStyles = `
  .cg-prev {
    font-family: var(--font-geist-sans), system-ui, -apple-system, sans-serif;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: #edf1f7;
  }

  .cg-prev-blob1 {
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%);
    top: -20px;
    left: -10px;
    filter: blur(24px);
  }

  .cg-prev-blob2 {
    position: absolute;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, transparent 70%);
    bottom: -20px;
    right: 10px;
    filter: blur(20px);
  }

  .cg-prev-blob3 {
    position: absolute;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%);
    top: 40%;
    left: 55%;
    filter: blur(18px);
  }

  .cg-prev-content {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 14px 12px;
  }

  .cg-prev-slats {
    position: absolute;
    inset: 0;
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    pointer-events: none;
  }

  .cg-prev-slat {
    flex: 1;
    background: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.2) 79.81%, rgba(255,255,255,0.2) 100%);
    background-blend-mode: overlay;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .cg-prev-info {
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .cg-prev-label {
    font-size: 7px;
    font-weight: 600;
    color: rgba(255,255,255,0.7);
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }

  .cg-prev-val {
    font-size: 11px;
    font-weight: 700;
    color: rgba(255,255,255,0.9);
    margin-top: 2px;
  }

  .cg-prev-tag {
    font-size: 6px;
    font-weight: 600;
    color: rgba(255,255,255,0.5);
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 3px 6px;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 4px;
  }

  .cg-prev-shimmer {
    position: absolute;
    inset: 0;
    z-index: 4;
    pointer-events: none;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255,255,255,0.06) 45%,
      rgba(255,255,255,0.12) 50%,
      rgba(255,255,255,0.06) 55%,
      transparent 100%
    );
    animation: cg-prev-sweep 5s ease-in-out infinite;
  }

  @keyframes cg-prev-sweep {
    0%, 100% { transform: translateX(-120%); }
    50% { transform: translateX(120%); }
  }

  @media (prefers-reduced-motion: reduce) {
    .cg-prev-shimmer { animation: none !important; }
  }
`;

export function PreviewComponent() {
  const slatCount = 24;

  return (
    <>
      <style>{previewStyles}</style>
      <div className="cg-prev">
        <div className="cg-prev-blob1" />
        <div className="cg-prev-blob2" />
        <div className="cg-prev-blob3" />

        <div className="cg-prev-slats">
          {Array.from({ length: slatCount }).map((_, i) => (
            <div key={i} className="cg-prev-slat" />
          ))}
        </div>

        <div className="cg-prev-shimmer" />

        <div className="cg-prev-content">
          <div className="cg-prev-info">
            <div>
              <div className="cg-prev-label">Columns</div>
              <div className="cg-prev-val">{slatCount} slats</div>
            </div>
            <div className="cg-prev-tag">Louvered</div>
          </div>
        </div>
      </div>
    </>
  );
}
