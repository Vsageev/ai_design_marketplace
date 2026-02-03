import React from 'react';

export const metadata = {
  id: 'amber-glass',
  name: 'Amber Glass',
  description: 'Apple-inspired glassmorphism with warm amber gradients, ribbed glass textures, and refractive light physics. Sunset warmth meets VisionOS clarity.',
  tags: ['Glassmorphism', 'Warm', 'Apple', 'Luxury'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

  .ag-preview {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: #F9F7F2;
  }

  .ag-preview-bg {
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(ellipse at 20% 0%, #E68A5C 0px, transparent 55%),
      radial-gradient(ellipse at 85% 90%, #E89BB6 0px, transparent 55%),
      radial-gradient(ellipse at 50% 50%, #FFC699 0px, transparent 60%);
    filter: blur(40px);
    opacity: 0.7;
  }

  .ag-preview-content {
    position: relative;
    z-index: 1;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
  }

  .ag-preview-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(30px) saturate(160%);
    -webkit-backdrop-filter: blur(30px) saturate(160%);
    border-radius: 12px;
    padding: 8px 14px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: inset 0 1px 8px rgba(255, 255, 255, 0.3);
  }

  .ag-preview-logo {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 13px;
    font-weight: 700;
    color: #4A3B32;
    letter-spacing: -0.02em;
  }

  .ag-preview-btn {
    background: linear-gradient(135deg, #E68A5C, #E89BB6);
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 5px 12px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .ag-preview-card {
    background: rgba(255, 255, 255, 0.22);
    backdrop-filter: blur(30px) saturate(160%);
    -webkit-backdrop-filter: blur(30px) saturate(160%);
    border-radius: 16px;
    padding: 14px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow:
      0 12px 30px rgba(230, 138, 92, 0.12),
      inset 0 1px 10px rgba(255, 255, 255, 0.35);
    background-image: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 18px,
      rgba(255, 255, 255, 0.13) 19px,
      transparent 20px
    );
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .ag-preview-card-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 15px;
    font-weight: 700;
    color: #4A3B32;
    letter-spacing: -0.01em;
    margin-bottom: 4px;
  }

  .ag-preview-card-desc {
    font-size: 11px;
    color: rgba(74, 59, 50, 0.6);
    line-height: 1.4;
  }

  .ag-preview-stats {
    display: flex;
    gap: 8px;
    margin-top: 10px;
  }

  .ag-preview-stat {
    flex: 1;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(20px) saturate(140%);
    -webkit-backdrop-filter: blur(20px) saturate(140%);
    border-radius: 10px;
    padding: 8px 10px;
    border: 1px solid rgba(255, 255, 255, 0.45);
    box-shadow: inset 0 1px 6px rgba(255, 255, 255, 0.25);
  }

  .ag-preview-stat-label {
    font-size: 9px;
    color: rgba(74, 59, 50, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 2px;
  }

  .ag-preview-stat-value {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 16px;
    font-weight: 700;
    color: #4A3B32;
    letter-spacing: -0.02em;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="ag-preview">
        <div className="ag-preview-bg"></div>
        <div className="ag-preview-content">
          <div className="ag-preview-nav">
            <span className="ag-preview-logo">Liquid Amber</span>
            <button className="ag-preview-btn">Get Started</button>
          </div>

          <div className="ag-preview-card">
            <div>
              <div className="ag-preview-card-title">Refractive Beauty</div>
              <div className="ag-preview-card-desc">Warmth of sunset through ribbed glass</div>
            </div>
            <div className="ag-preview-stats">
              <div className="ag-preview-stat">
                <div className="ag-preview-stat-label">Clarity</div>
                <div className="ag-preview-stat-value">98%</div>
              </div>
              <div className="ag-preview-stat">
                <div className="ag-preview-stat-label">Warmth</div>
                <div className="ag-preview-stat-value">4.8K</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
