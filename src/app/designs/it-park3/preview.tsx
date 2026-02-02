import React from 'react';

export const metadata = {
  id: 'it-park3',
  name: 'IT Park 3',
  description: 'Tech education brand with 3D graphic elements, vibrant gradients, faceted glass textures, and structured informational/marketing layouts. Features 60/30/10 color system.',
  tags: ['Education', 'Tech', '3D Graphics', 'Modern', 'Brand Identity'],
};

const previewStyles = `
  .itp3-preview {
    /* Primary */
    --red-primary: #E51537;
    --orange-primary: #FE4A00;
    --cream-base: #FFF6EB;
    /* Secondary */
    --lime: #DAFF02;
    --blue: #1D57F6;
    --navy: #121856;
    /* Tertiary */
    --purple: #7F59E9;
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

  /* Subtle faceted glass texture */
  .itp3-preview::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 20px,
      rgba(254, 74, 0, 0.04) 20px,
      rgba(254, 74, 0, 0.04) 22px
    );
    pointer-events: none;
  }

  .itp3-preview > * {
    position: relative;
    z-index: 1;
  }

  /* Marketing header with gradient */
  .itp3-preview-hero {
    background: linear-gradient(135deg, var(--orange-primary) 0%, var(--red-primary) 100%);
    border-radius: 14px;
    padding: 14px;
    color: var(--white);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .itp3-preview-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.06) 10px,
      rgba(255, 255, 255, 0.06) 12px
    );
    pointer-events: none;
  }

  .itp3-preview-logo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 6px;
  }

  .itp3-preview-logo-icon {
    width: 32px;
    height: 20px;
    background: var(--white);
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 3px;
  }

  .itp3-preview-key {
    background: var(--orange-primary);
    border-radius: 1px;
  }

  .itp3-preview-title {
    position: relative;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 0.9;
  }

  .itp3-preview-subtitle {
    position: relative;
    font-size: 9px;
    opacity: 0.9;
    line-height: 1.05;
  }

  /* Content area */
  .itp3-preview-content {
    flex: 1;
    display: flex;
    gap: 8px;
  }

  /* Info card - light background style */
  .itp3-preview-card {
    flex: 1;
    background: var(--white);
    border-radius: 12px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .itp3-preview-card-header {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 8px;
  }

  /* 3D object placeholder */
  .itp3-preview-3d-object {
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, var(--orange-primary), var(--red-primary));
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    position: relative;
    box-shadow: 0 4px 12px rgba(254, 74, 0, 0.3);
  }

  .itp3-preview-3d-object::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 6px;
    bottom: 6px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  .itp3-preview-card-title {
    font-size: 11px;
    font-weight: 700;
    line-height: 0.9;
    color: var(--black);
  }

  .itp3-preview-card-text {
    font-size: 8px;
    color: #666;
    line-height: 1.1;
    letter-spacing: 0.02em;
    margin-bottom: 8px;
  }

  .itp3-preview-tags {
    display: flex;
    gap: 4px;
    margin-top: auto;
  }

  .itp3-preview-tag {
    font-size: 7px;
    font-weight: 600;
    padding: 3px 8px;
    border: 1.5px solid var(--black);
    border-radius: 20px;
    color: var(--black);
  }

  .itp3-preview-tag-colored {
    border-color: var(--blue);
    color: var(--blue);
  }

  /* Stats section */
  .itp3-preview-stats {
    display: flex;
    gap: 6px;
  }

  .itp3-preview-stat {
    flex: 1;
    background: linear-gradient(135deg, var(--navy) 0%, var(--blue) 100%);
    border-radius: 10px;
    padding: 8px;
    text-align: center;
    color: var(--white);
    position: relative;
    overflow: hidden;
  }

  .itp3-preview-stat::before {
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
      rgba(255, 255, 255, 0.06) 6px,
      rgba(255, 255, 255, 0.06) 8px
    );
    pointer-events: none;
  }

  .itp3-preview-stat-value {
    position: relative;
    font-size: 16px;
    font-weight: 700;
    line-height: 0.9;
  }

  .itp3-preview-stat-label {
    position: relative;
    font-size: 7px;
    opacity: 0.85;
  }

  .itp3-preview-badge {
    background: var(--lime);
    color: var(--black);
    padding: 2px 6px;
    border-radius: 10px;
    font-size: 6px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="itp3-preview">
        {/* Marketing header */}
        <div className="itp3-preview-hero">
          <div className="itp3-preview-logo">
            <div className="itp3-preview-logo-icon">
              <div className="itp3-preview-key"></div>
              <div className="itp3-preview-key"></div>
              <div className="itp3-preview-key"></div>
              <div className="itp3-preview-key"></div>
              <div className="itp3-preview-key"></div>
              <div className="itp3-preview-key"></div>
              <div className="itp3-preview-key"></div>
              <div className="itp3-preview-key"></div>
            </div>
            <span className="itp3-preview-title">IT-PARK</span>
          </div>
          <div className="itp3-preview-subtitle">Online Programming School</div>
        </div>

        {/* Content area */}
        <div className="itp3-preview-content">
          <div className="itp3-preview-card">
            <div className="itp3-preview-card-header">
              <div className="itp3-preview-3d-object">&#128187;</div>
              <div>
                <div className="itp3-preview-card-title">Backend Dev</div>
                <span className="itp3-preview-badge">Active</span>
              </div>
            </div>
            <div className="itp3-preview-card-text">
              Server applications with Java and Spring Boot
            </div>
            <div className="itp3-preview-tags">
              <span className="itp3-preview-tag">Java</span>
              <span className="itp3-preview-tag itp3-preview-tag-colored">SQL</span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="itp3-preview-stats">
          <div className="itp3-preview-stat">
            <div className="itp3-preview-stat-value">5K+</div>
            <div className="itp3-preview-stat-label">Students</div>
          </div>
          <div className="itp3-preview-stat">
            <div className="itp3-preview-stat-value">95%</div>
            <div className="itp3-preview-stat-label">Success</div>
          </div>
        </div>
      </div>
    </>
  );
}
