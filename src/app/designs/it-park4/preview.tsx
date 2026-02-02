import React from 'react';

export const metadata = {
  id: 'it-park4',
  name: 'IT Park 4',
  description: 'Structured tech education system with bold palette, capsule tags, and a single 3D accent over faceted textures.',
  tags: ['Education', 'Structured', '3D', 'Vibrant', 'Geist'],
};

const previewStyles = `
  .itp4-preview {
    --red-primary: #E51537;
    --orange-primary: #FE4A00;
    --cream-base: #FFF6EB;
    --lime: #DAFF02;
    --black: #000000;
    --white: #FFFFFF;

    font-family: 'Geist', 'Inter', sans-serif;
    background: var(--cream-base);
    padding: 12px;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 8px;
    position: relative;
    overflow: hidden;
  }

  .itp4-preview::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 14px,
      rgba(254, 74, 0, 0.05) 14px,
      rgba(254, 74, 0, 0.05) 16px
    );
    pointer-events: none;
  }

  .itp4-preview > * {
    position: relative;
    z-index: 1;
  }

  .itp4-hero {
    background: linear-gradient(135deg, var(--orange-primary), var(--red-primary));
    color: var(--white);
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .itp4-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.08) 10px,
      rgba(255, 255, 255, 0.08) 12px
    );
    pointer-events: none;
  }

  .itp4-hero-content {
    position: relative;
    z-index: 1;
  }

  .itp4-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .itp4-icon {
    width: 24px;
    height: 16px;
    background: var(--white);
    border-radius: 3px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 3px;
  }

  .itp4-key {
    background: var(--orange-primary);
    border-radius: 1px;
  }

  .itp4-title {
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
  }

  .itp4-subtitle {
    font-size: 8px;
    opacity: 0.85;
    margin-top: 2px;
  }

  .itp4-orb {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin: 6px auto 4px;
    background: radial-gradient(circle at 30% 30%, #fff, transparent 60%),
      var(--orange-primary);
    box-shadow: 6px 6px 12px rgba(0,0,0,0.25),
      inset -4px -4px 6px rgba(0,0,0,0.25);
  }

  .itp4-tags {
    display: flex;
    justify-content: center;
    gap: 4px;
  }

  .itp4-tag {
    border: 1px solid var(--white);
    border-radius: 20px;
    padding: 2px 6px;
    font-size: 7px;
    font-weight: 600;
  }

  .itp4-card {
    background: var(--white);
    border-radius: 10px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    display: grid;
    gap: 6px;
  }

  .itp4-card-title {
    font-size: 11px;
    font-weight: 700;
    color: var(--black);
  }

  .itp4-card-desc {
    font-size: 9px;
    color: rgba(0, 0, 0, 0.6);
  }

  .itp4-capsules {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }

  .itp4-capsule {
    border: 1px solid var(--black);
    border-radius: 20px;
    padding: 2px 6px;
    font-size: 7px;
    font-weight: 600;
  }

  .itp4-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .itp4-status {
    background: var(--lime);
    color: var(--black);
    border-radius: 20px;
    padding: 2px 6px;
    font-size: 7px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .itp4-btn {
    background: var(--orange-primary);
    color: var(--white);
    border: none;
    border-radius: 20px;
    padding: 4px 8px;
    font-size: 7px;
    font-weight: 700;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="itp4-preview">
        <div className="itp4-hero">
          <div className="itp4-hero-content">
            <div className="itp4-logo">
              <div className="itp4-icon">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span key={index} className="itp4-key"></span>
                ))}
              </div>
              <span className="itp4-title">IT Park</span>
            </div>
            <div className="itp4-subtitle">Online Programming School</div>
            <div className="itp4-orb" aria-hidden="true"></div>
            <div className="itp4-tags">
              <span className="itp4-tag">Informative</span>
              <span className="itp4-tag">3D</span>
            </div>
          </div>
        </div>
        <div className="itp4-card">
          <div className="itp4-card-title">Java Backend Sprint</div>
          <div className="itp4-card-desc">Structured modules with mentor review.</div>
          <div className="itp4-capsules">
            <span className="itp4-capsule">Java</span>
            <span className="itp4-capsule">Spring</span>
            <span className="itp4-capsule">SQL</span>
          </div>
          <div className="itp4-footer">
            <span className="itp4-status">Active</span>
            <button className="itp4-btn">Start</button>
          </div>
        </div>
      </div>
    </>
  );
}
