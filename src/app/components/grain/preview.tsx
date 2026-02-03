import React from 'react';

export const metadata = {
  id: 'grain',
  name: 'Grain',
  description: 'Four grain algorithms — film noise, Bayer dither, halftone dots, and organic stipple — as compositable texture overlays.',
  tags: ['Component', 'Texture', 'Canvas', 'Noise'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@1,6..72,400&display=swap');

  .grn-prev {
    font-family: 'Azeret Mono', monospace;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: #0c0b0a;
  }

  .grn-prev::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='gpn'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23gpn)' opacity='0.12'/%3E%3C/svg%3E");
    mix-blend-mode: screen;
    pointer-events: none;
    z-index: 5;
    animation: grn-prev-flicker 0.25s steps(3) infinite;
  }

  @keyframes grn-prev-flicker {
    0% { transform: translate(0, 0); }
    33% { transform: translate(1px, -1px); }
    66% { transform: translate(-1px, 0); }
  }

  .grn-prev-grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1px;
    height: 100%;
    background: #1a1816;
  }

  .grn-prev-cell {
    position: relative;
    background: #0c0b0a;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 8px;
    overflow: hidden;
  }

  .grn-prev-cell:nth-child(1) .grn-prev-cell-bg {
    background: radial-gradient(ellipse at 30% 40%, #1e1c18, #0c0b0a);
  }
  .grn-prev-cell:nth-child(2) .grn-prev-cell-bg {
    background: linear-gradient(160deg, #151310, #0c0b0a);
  }
  .grn-prev-cell:nth-child(3) .grn-prev-cell-bg {
    background: radial-gradient(ellipse at 60% 50%, #1a1816, #0c0b0a);
  }
  .grn-prev-cell:nth-child(4) .grn-prev-cell-bg {
    background: linear-gradient(135deg, #141210, #0c0b0a);
  }

  .grn-prev-cell-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .grn-prev-tag {
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 4.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #b8503a;
    background: #0c0b0a;
    padding: 1px 4px;
    border: 1px solid #2a2826;
    z-index: 4;
  }

  .grn-prev-name {
    font-family: 'Newsreader', serif;
    font-size: 8px;
    font-weight: 400;
    font-style: italic;
    color: #d4d0c8;
    z-index: 3;
    line-height: 1;
  }

  .grn-prev-idx {
    font-size: 4px;
    font-weight: 600;
    letter-spacing: 0.8px;
    color: #5a564e;
    text-transform: uppercase;
    z-index: 3;
    margin-top: 2px;
  }

  .grn-prev-dots {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    mix-blend-mode: screen;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="grn-prev">
        <div className="grn-prev-grid">
          {/* Film */}
          <div className="grn-prev-cell">
            <div className="grn-prev-cell-bg" />
            <svg className="grn-prev-dots">
              <filter id="grn-p1">
                <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="4" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#grn-p1)" opacity="0.15" />
            </svg>
            <span className="grn-prev-tag">Canvas</span>
            <span className="grn-prev-name">Film Grain</span>
            <span className="grn-prev-idx">No. 001</span>
          </div>

          {/* Dither */}
          <div className="grn-prev-cell">
            <div className="grn-prev-cell-bg" />
            <svg className="grn-prev-dots" style={{ opacity: 0.35 }}>
              <filter id="grn-p2">
                <feTurbulence type="fractalNoise" baseFrequency="2.5" numOctaves="1" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#grn-p2)" opacity="0.3" />
            </svg>
            <span className="grn-prev-tag">Bayer 8x8</span>
            <span className="grn-prev-name">Digital Dither</span>
            <span className="grn-prev-idx">No. 002</span>
          </div>

          {/* Halftone */}
          <div className="grn-prev-cell">
            <div className="grn-prev-cell-bg" />
            <svg className="grn-prev-dots" style={{ opacity: 0.25 }}>
              <filter id="grn-p3">
                <feTurbulence type="turbulence" baseFrequency="0.15" numOctaves="2" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#grn-p3)" opacity="0.4" />
            </svg>
            <span className="grn-prev-tag">Radial</span>
            <span className="grn-prev-name">Halftone Dot</span>
            <span className="grn-prev-idx">No. 003</span>
          </div>

          {/* Stipple */}
          <div className="grn-prev-cell">
            <div className="grn-prev-cell-bg" />
            <svg className="grn-prev-dots" style={{ opacity: 0.2 }}>
              <filter id="grn-p4">
                <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#grn-p4)" opacity="0.25" />
            </svg>
            <span className="grn-prev-tag">Scatter</span>
            <span className="grn-prev-name">Organic Stipple</span>
            <span className="grn-prev-idx">No. 004</span>
          </div>
        </div>
      </div>
    </>
  );
}
