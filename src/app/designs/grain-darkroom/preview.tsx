import React from 'react';

export const metadata = {
  id: 'grain-darkroom',
  name: 'Grain Darkroom',
  description: 'Analog photography-inspired design system with film grain textures, darkroom aesthetics, and specimen-catalog layouts. Newsreader italic meets Azeret Mono.',
  tags: ['Dark', 'Texture', 'Analog', 'Editorial'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@1,6..72,400&display=swap');

  .gd-prev {
    font-family: 'Azeret Mono', monospace;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: #0c0b0a;
    display: flex;
    flex-direction: column;
    padding: 14px 16px;
  }

  .gd-prev::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='gdpn'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23gdpn)' opacity='0.12'/%3E%3C/svg%3E");
    mix-blend-mode: screen;
    pointer-events: none;
    z-index: 5;
    animation: gd-prev-flicker 0.25s steps(3) infinite;
  }

  @keyframes gd-prev-flicker {
    0% { transform: translate(0, 0); }
    33% { transform: translate(1px, -1px); }
    66% { transform: translate(-1px, 0); }
  }

  .gd-prev-tag {
    font-size: 5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #b8503a;
    background: #0c0b0a;
    padding: 2px 5px;
    border: 1px solid #2a2826;
    width: fit-content;
    margin-bottom: 8px;
    z-index: 2;
  }

  .gd-prev-title {
    font-family: 'Newsreader', serif;
    font-size: 18px;
    font-weight: 400;
    font-style: italic;
    color: #e8e4da;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: 6px;
    z-index: 2;
  }

  .gd-prev-rule {
    width: 32px;
    height: 1px;
    background: #2a2826;
    margin-bottom: 8px;
    z-index: 2;
  }

  .gd-prev-sub {
    font-size: 7px;
    font-weight: 400;
    color: #5a564e;
    line-height: 1.5;
    max-width: 200px;
    margin-bottom: 12px;
    z-index: 2;
  }

  .gd-prev-card {
    border: 1px solid #2a2826;
    background: #0c0b0a;
    position: relative;
    overflow: hidden;
    z-index: 2;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .gd-prev-card-top {
    height: 44px;
    position: relative;
    background: radial-gradient(ellipse at 30% 40%, #1e1c18, #0c0b0a);
  }

  .gd-prev-card-grain {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    mix-blend-mode: screen;
    opacity: 0.5;
    z-index: 1;
  }

  .gd-prev-card-tag {
    position: absolute;
    top: 4px;
    left: 4px;
    font-size: 4px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #b8503a;
    background: #0c0b0a;
    padding: 1px 3px;
    border: 1px solid #2a2826;
    z-index: 3;
  }

  .gd-prev-card-body {
    padding: 7px 8px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .gd-prev-card-name {
    font-family: 'Newsreader', serif;
    font-size: 9px;
    font-weight: 400;
    font-style: italic;
    color: #e8e4da;
    line-height: 1;
  }

  .gd-prev-card-idx {
    font-size: 5px;
    font-weight: 600;
    letter-spacing: 0.6px;
    color: #5a564e;
    text-transform: uppercase;
  }

  .gd-prev-footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 8px;
    z-index: 2;
  }

  .gd-prev-btn {
    font-family: 'Azeret Mono', monospace;
    font-size: 6px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    padding: 3px 8px;
    background: #b8503a;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .gd-prev-meta {
    font-size: 5px;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #5a564e;
    text-transform: uppercase;
  }

  @media (prefers-reduced-motion: reduce) {
    .gd-prev::before { animation: none; }
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="gd-prev">
        <span className="gd-prev-tag">Specimen Catalog</span>
        <h2 className="gd-prev-title">Grain is felt,<br />not seen</h2>
        <div className="gd-prev-rule" />
        <p className="gd-prev-sub">Film grain textures and darkroom aesthetics</p>

        <div className="gd-prev-card">
          <div className="gd-prev-card-top">
            <svg className="gd-prev-card-grain" aria-hidden="true">
              <filter id="gd-prev-grain">
                <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="4" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#gd-prev-grain)" opacity="0.15" />
            </svg>
            <span className="gd-prev-card-tag">Canvas</span>
          </div>
          <div className="gd-prev-card-body">
            <span className="gd-prev-card-name">Film Grain</span>
            <span className="gd-prev-card-idx">No. 001</span>
          </div>
        </div>

        <div className="gd-prev-footer">
          <button className="gd-prev-btn">Browse</button>
          <span className="gd-prev-meta">Density: 20%</span>
        </div>
      </div>
    </>
  );
}
