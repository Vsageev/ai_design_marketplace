import React from 'react';

export const metadata = {
  id: 'one-orange',
  name: 'One Orange',
  description: 'Constructivist poster design with organic blue egg shapes, orange louvered glass panels, and capsule tags on a warm cream canvas.',
  tags: ['Poster', 'Constructivist', 'Swiss', 'Bold'],
};

const previewStyles = `
  .oo-preview {
    --oo-p-cream: #F5F0E8;
    --oo-p-white: #FAF7F2;
    --oo-p-black: #1A1A1A;
    --oo-p-blue: #3348FF;
    --oo-p-orange: #E85A2C;
    --oo-p-red: #E53935;
    --oo-p-muted: #8A8680;
    --oo-p-border: #E0DCD5;

    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background: var(--oo-p-cream);
    color: var(--oo-p-black);
    height: 200px;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    overflow: hidden;
    box-sizing: border-box;
  }

  .oo-preview-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
  }

  .oo-preview-label {
    font-size: 9px;
    font-weight: 500;
    color: var(--oo-p-muted);
    border: 1px solid var(--oo-p-border);
    border-radius: 999px;
    padding: 2px 8px;
    display: inline-block;
    letter-spacing: 0.02em;
    width: fit-content;
  }

  .oo-preview-heading {
    font-size: 26px;
    font-weight: 800;
    line-height: 0.92;
    letter-spacing: -0.03em;
    margin: 8px 0 6px;
  }

  .oo-preview-body {
    font-size: 9px;
    line-height: 1.45;
    color: var(--oo-p-black);
    max-width: 160px;
    margin-bottom: 10px;
  }

  .oo-preview-tags {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }

  .oo-preview-tag {
    font-size: 8px;
    font-weight: 500;
    padding: 3px 8px;
    border-radius: 999px;
    border: 1px solid var(--oo-p-border);
    color: var(--oo-p-black);
    background: transparent;
  }

  .oo-preview-tag--red {
    background: var(--oo-p-red);
    color: #fff;
    border-color: var(--oo-p-red);
  }

  .oo-preview-tag--blue {
    background: var(--oo-p-blue);
    color: #fff;
    border-color: var(--oo-p-blue);
  }

  .oo-preview-right {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .oo-preview-glass {
    position: absolute;
    width: 100px;
    height: 75px;
    bottom: 0;
    left: 0;
    border-radius: 12px;
    overflow: hidden;
    isolation: isolate;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    mask-image: radial-gradient(white, black);
  }

  .oo-preview-glass-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 25%, rgba(255,50,80,0.7) 0%, transparent 45%),
      radial-gradient(circle at 75% 70%, rgba(255,220,80,0.65) 0%, transparent 45%),
      radial-gradient(circle at 50% 10%, rgba(255,120,180,0.5) 0%, transparent 40%),
      radial-gradient(circle at 30% 80%, rgba(180,40,10,0.6) 0%, transparent 45%),
      radial-gradient(circle at 60% 40%, rgba(255,180,60,0.6) 0%, transparent 50%),
      linear-gradient(160deg, #FF7A45 0%, #E85A2C 40%, #C44518 100%);
  }

  .oo-preview-glass-slats {
    position: absolute;
    inset: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    pointer-events: none;
  }

  .oo-preview-glass-slat {
    flex: 1;
    background: linear-gradient(
      90deg,
      rgba(255,255,255,0.15) 0%,
      rgba(0,0,0,0.12) 80%,
      rgba(255,255,255,0.15) 100%
    );
    background-blend-mode: overlay;
    backdrop-filter: blur(18px) saturate(160%);
    -webkit-backdrop-filter: blur(18px) saturate(160%);
  }

  .oo-preview-glass-shimmer {
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255,255,255,0.06) 40%,
      rgba(255,255,255,0.14) 50%,
      rgba(255,255,255,0.06) 60%,
      transparent 100%
    );
    animation: oo-p-glass-sweep 10s ease-in-out infinite;
  }

  .oo-preview-glass-border {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border: 1px solid rgba(255,255,255,0.25);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.05);
    pointer-events: none;
    z-index: 3;
  }

  @keyframes oo-p-glass-sweep {
    0%, 100% { transform: translateX(-120%); }
    50% { transform: translateX(120%); }
  }

  @media (prefers-reduced-motion: reduce) {
    .oo-preview-glass-shimmer { animation: none !important; }
  }

  .oo-preview-egg {
    width: 90px;
    height: 110px;
    background: var(--oo-p-blue);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    position: relative;
    z-index: 2;
    transition: transform 400ms ease;
  }

  .oo-preview:hover .oo-preview-egg {
    transform: scale(1.06);
  }

  .oo-preview-btn {
    font-size: 9px;
    font-weight: 600;
    padding: 5px 14px;
    border-radius: 999px;
    border: none;
    background: var(--oo-p-blue);
    color: #fff;
    cursor: pointer;
    display: inline-block;
    transition: background 200ms ease;
  }

  .oo-preview-btn:hover {
    background: #2838D9;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="oo-preview">
        <div className="oo-preview-left">
          <div>
            <span className="oo-preview-label">capsule</span>
            <div className="oo-preview-heading">Heading<br />in Two</div>
            <p className="oo-preview-body">
              Main text conveying meaning and core ideas.
            </p>
          </div>
          <div>
            <div className="oo-preview-tags">
              <span className="oo-preview-tag">capsule</span>
              <span className="oo-preview-tag">capsule</span>
              <span className="oo-preview-tag oo-preview-tag--red">capsule</span>
              <span className="oo-preview-tag oo-preview-tag--blue">capsule</span>
            </div>
          </div>
        </div>
        <div className="oo-preview-right">
          <div className="oo-preview-glass">
            <div className="oo-preview-glass-bg" />
            <div className="oo-preview-glass-slats">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="oo-preview-glass-slat" />
              ))}
            </div>
            <div className="oo-preview-glass-shimmer" />
            <div className="oo-preview-glass-border" />
          </div>
          <div className="oo-preview-egg" />
        </div>
      </div>
    </>
  );
}
