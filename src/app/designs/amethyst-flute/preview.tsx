import React from 'react';

export const metadata = {
  id: 'amethyst-flute',
  name: 'Amethyst Flute',
  description: 'Luminous purple-to-peach ombre, vertical fluted ribbing, and warm refractive light inspired by colored glassware.',
  tags: ['Warm', 'Luminous', 'Artisanal', 'Gradient'],
};

const previewStyles = `
  .af-preview {
    --linen: #FDF6EC;
    --alabaster: #FAF0E6;
    --vellum: #EDE3D8;
    --amethyst: #9B59B6;
    --orchid: #B07CC6;
    --apricot: #F0B27A;
    --plum-ink: #3D1F47;
    --fig: #6B4A5E;
    --mauve: #9E8490;
    font-family: 'DM Sans', 'Helvetica Neue', sans-serif;
    background: var(--linen);
    height: 100%;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .af-preview-hero {
    font-family: 'Cormorant Garamond', 'Garamond', serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--plum-ink);
    background: linear-gradient(135deg, rgba(123, 45, 142, 0.12), rgba(240, 178, 122, 0.14));
    border-radius: 14px;
    padding: 10px 14px;
    border: 1px solid var(--vellum);
    position: relative;
    overflow: hidden;
  }

  .af-preview-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.55) 0px,
      rgba(255, 255, 255, 0.55) 2px,
      transparent 2px,
      transparent 10px
    );
    opacity: 0.3;
    pointer-events: none;
  }

  .af-preview-hero-sub {
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    color: var(--mauve);
    margin-top: 2px;
    font-weight: 400;
  }

  .af-preview-card {
    background: var(--alabaster);
    border-radius: 14px;
    border: 1px solid var(--vellum);
    padding: 10px 12px;
    position: relative;
    overflow: hidden;
  }

  .af-preview-card::after {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, rgba(155, 89, 182, 0.25), transparent 70%);
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  .af-preview:hover .af-preview-card::after {
    opacity: 1;
  }

  .af-preview-card-title {
    font-family: 'Cormorant Garamond', 'Garamond', serif;
    font-size: 12px;
    font-weight: 600;
    color: var(--plum-ink);
    margin-bottom: 4px;
  }

  .af-preview-card-text {
    font-size: 10px;
    color: var(--fig);
    line-height: 1.5;
  }

  .af-preview-bar {
    height: 6px;
    background: var(--vellum);
    border-radius: 999px;
    overflow: hidden;
  }

  .af-preview-bar-fill {
    height: 100%;
    width: 65%;
    background: linear-gradient(90deg, var(--amethyst), var(--orchid), var(--apricot));
    border-radius: 999px;
  }

  .af-preview-actions {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .af-preview-btn {
    border: none;
    border-radius: 10px;
    padding: 6px 12px;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
    background: linear-gradient(135deg, var(--amethyst), var(--apricot));
    color: white;
    position: relative;
    overflow: hidden;
  }

  .af-preview-btn::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -30%;
    width: 40%;
    height: 200%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
    transform: skewX(-20deg) translateX(-150%);
    transition: transform 0.45s ease;
  }

  .af-preview:hover .af-preview-btn::after {
    transform: skewX(-20deg) translateX(350%);
  }

  .af-preview-pill {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--mauve);
    border: 1px solid var(--vellum);
    padding: 4px 8px;
    border-radius: 999px;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="af-preview">
        <div className="af-preview-hero">
          Amethyst Flute
          <div className="af-preview-hero-sub">Light through colored glass</div>
        </div>
        <div className="af-preview-card">
          <div className="af-preview-card-title">Ribbed Stemware</div>
          <div className="af-preview-card-text">Ombre gradients and fluted ridges for luminous layouts.</div>
        </div>
        <div className="af-preview-bar">
          <div className="af-preview-bar-fill" />
        </div>
        <div className="af-preview-actions">
          <button className="af-preview-btn">Explore</button>
          <span className="af-preview-pill">Artisan</span>
        </div>
      </div>
    </>
  );
}
