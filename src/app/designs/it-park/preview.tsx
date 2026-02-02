import React from 'react';

export const metadata = {
  id: 'it-park',
  name: 'IT Park',
  description: 'Modern tech education brand with vibrant orange/red palette, Geist typography, faceted glass textures, and pill-style tags. 60/30/10 color ratio system.',
  tags: ['Education', 'Tech', 'Modern', 'Vibrant', 'Brand Identity'],
};

const previewStyles = `
  .itp-preview {
    /* Primary */
    --red-primary: #E51537;
    --orange-primary: #FE4A00;
    --cream-base: #FFF6EB;
    /* Secondary */
    --lime: #DAFF02;
    --navy: #121856;
    /* Neutrals */
    --white: #FFFFFF;
    --black: #000000;

    font-family: 'Geist', 'Inter', 'Helvetica Neue', sans-serif;
    background: var(--cream-base);
    padding: 12px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    overflow: hidden;
  }

  /* Faceted glass texture */
  .itp-preview::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 16px,
      rgba(254, 74, 0, 0.05) 16px,
      rgba(254, 74, 0, 0.05) 18px
    );
    pointer-events: none;
  }

  .itp-preview > * {
    position: relative;
    z-index: 1;
  }

  .itp-preview-hero {
    background: linear-gradient(135deg, var(--orange-primary) 0%, var(--red-primary) 100%);
    border-radius: 12px;
    padding: 12px;
    color: var(--white);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .itp-preview-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 8px,
      rgba(255, 255, 255, 0.07) 8px,
      rgba(255, 255, 255, 0.07) 10px
    );
    pointer-events: none;
  }

  .itp-preview-logo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-bottom: 4px;
  }

  .itp-preview-logo-icon {
    width: 28px;
    height: 18px;
    background: var(--white);
    border-radius: 3px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 3px;
  }

  .itp-preview-key {
    background: var(--orange-primary);
    border-radius: 1px;
  }

  .itp-preview-title {
    position: relative;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 0.9;
  }

  .itp-preview-subtitle {
    position: relative;
    font-size: 9px;
    opacity: 0.85;
    line-height: 1.05;
    margin-bottom: 8px;
  }

  .itp-preview-tags {
    position: relative;
    display: flex;
    gap: 4px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .itp-preview-tag {
    font-size: 7px;
    font-weight: 600;
    padding: 3px 8px;
    border: 1.5px solid var(--white);
    border-radius: 20px;
    color: var(--white);
  }

  .itp-preview-content {
    flex: 1;
    display: flex;
    gap: 8px;
  }

  .itp-preview-card {
    flex: 1;
    background: var(--white);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .itp-preview-card-image {
    background: linear-gradient(135deg, var(--orange-primary), var(--red-primary));
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    position: relative;
  }

  .itp-preview-card-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 6px,
      rgba(255, 255, 255, 0.1) 6px,
      rgba(255, 255, 255, 0.1) 8px
    );
  }

  .itp-preview-card-body {
    padding: 8px;
  }

  .itp-preview-card-title {
    font-size: 10px;
    font-weight: 700;
    line-height: 0.9;
    margin-bottom: 4px;
  }

  .itp-preview-card-tags {
    display: flex;
    gap: 3px;
  }

  .itp-preview-card-tag {
    font-size: 7px;
    font-weight: 600;
    padding: 2px 6px;
    border: 1.5px solid var(--black);
    border-radius: 20px;
  }

  .itp-preview-btn {
    background: var(--orange-primary);
    color: var(--white);
    border: none;
    border-radius: 20px;
    padding: 4px 10px;
    font-size: 8px;
    font-weight: 600;
    margin-top: 6px;
    width: 100%;
  }

  .itp-preview-badge {
    background: var(--lime);
    color: var(--black);
    padding: 2px 6px;
    border-radius: 10px;
    font-size: 6px;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 4px;
    display: inline-block;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="itp-preview">
        <div className="itp-preview-hero">
          <div className="itp-preview-logo">
            <div className="itp-preview-logo-icon">
              <div className="itp-preview-key"></div>
              <div className="itp-preview-key"></div>
              <div className="itp-preview-key"></div>
              <div className="itp-preview-key"></div>
              <div className="itp-preview-key"></div>
              <div className="itp-preview-key"></div>
              <div className="itp-preview-key"></div>
              <div className="itp-preview-key"></div>
            </div>
            <span className="itp-preview-title">IT-PARK</span>
          </div>
          <div className="itp-preview-subtitle">Online Programming School</div>
          <div className="itp-preview-tags">
            <span className="itp-preview-tag">Java</span>
            <span className="itp-preview-tag">Spring</span>
          </div>
        </div>

        <div className="itp-preview-content">
          <div className="itp-preview-card">
            <div className="itp-preview-card-image">&#9749;</div>
            <div className="itp-preview-card-body">
              <div className="itp-preview-card-title">Java Dev</div>
              <div className="itp-preview-card-tags">
                <span className="itp-preview-card-tag">Java</span>
                <span className="itp-preview-card-tag">SQL</span>
              </div>
              <span className="itp-preview-badge">Active</span>
            </div>
          </div>

          <div className="itp-preview-card">
            <div className="itp-preview-card-image">&#127760;</div>
            <div className="itp-preview-card-body">
              <div className="itp-preview-card-title">Frontend</div>
              <div className="itp-preview-card-tags">
                <span className="itp-preview-card-tag">React</span>
                <span className="itp-preview-card-tag">TS</span>
              </div>
              <button className="itp-preview-btn">Start</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
