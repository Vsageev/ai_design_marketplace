import React from 'react';

export const metadata = {
  id: 'shaw-light',
  name: 'Shaw Light',
  description: 'Festive poster art meets digital design. Bold serif headlines, thick outlines, hard shadows, and star-burst accents on light pastel backgrounds.',
  tags: ['Poster', 'Bold', 'Festive', 'Pastel'],
};

const previewStyles = `
  .sl-preview {
    --sl-bg: #D6EDFA;
    --sl-text: #1A1A2E;
    --sl-red: #E63926;
    --sl-blue: #2B4C9B;
    --sl-orange: #E8943A;
    --sl-green: #4A8C3F;
    --sl-yellow: #F5D547;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    background: var(--sl-bg);
    height: 200px;
    padding: 18px 22px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    overflow: hidden;
    position: relative;
    color: var(--sl-text);
  }

  .sl-preview-hero {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 32px;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 0.9;
    color: var(--sl-red);
    letter-spacing: -0.02em;
  }

  .sl-preview-tagline {
    font-size: 11px;
    color: var(--sl-blue);
    font-weight: 500;
    line-height: 1.3;
    max-width: 200px;
  }

  .sl-preview-cards {
    display: flex;
    gap: 10px;
    flex: 1;
    min-height: 0;
  }

  .sl-preview-card {
    flex: 1;
    background: #fff;
    border: 2px solid var(--sl-text);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 3px 3px 0px var(--sl-text);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .sl-preview-card:hover {
    transform: translateY(-3px);
    box-shadow: 5px 5px 0px var(--sl-text);
  }

  .sl-preview-card-head {
    height: 22px;
    border-bottom: 2px solid var(--sl-text);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }

  .sl-preview-card-body {
    padding: 6px 8px;
  }

  .sl-preview-card-title {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 3px;
  }

  .sl-preview-card-text {
    font-size: 8px;
    color: #5A5A7A;
    line-height: 1.3;
  }

  .sl-preview-btn {
    display: inline-block;
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    background: var(--sl-red);
    color: #fff;
    border: 2px solid var(--sl-text);
    border-radius: 6px;
    padding: 4px 12px;
    box-shadow: 2px 2px 0px var(--sl-text);
    letter-spacing: 0.03em;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
  }

  .sl-preview-btn:hover {
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 0px var(--sl-text);
  }

  .sl-preview-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--sl-yellow);
    border: 2px solid var(--sl-text);
    font-family: 'Courier New', monospace;
    font-size: 8px;
    font-weight: 900;
    box-shadow: 1px 1px 0px rgba(0,0,0,0.15);
    transition: transform 0.3s ease;
  }

  .sl-preview-badge:hover {
    transform: rotate(15deg) scale(1.1);
  }

  .sl-preview-bottom {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="sl-preview">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <div className="sl-preview-hero">Shaw Light</div>
            <div className="sl-preview-tagline">Festive poster art meets bold digital design</div>
          </div>
          <span className="sl-preview-badge">399</span>
        </div>

        <div className="sl-preview-cards">
          <div className="sl-preview-card">
            <div className="sl-preview-card-head" style={{ background: '#E63926' }}>
              <span>🍅</span>
            </div>
            <div className="sl-preview-card-body">
              <div className="sl-preview-card-title">Fresh</div>
              <div className="sl-preview-card-text">Seasonal produce</div>
            </div>
          </div>
          <div className="sl-preview-card">
            <div className="sl-preview-card-head" style={{ background: '#E8943A' }}>
              <span>🥕</span>
            </div>
            <div className="sl-preview-card-body">
              <div className="sl-preview-card-title">Classic</div>
              <div className="sl-preview-card-text">Time-tested recipes</div>
            </div>
          </div>
          <div className="sl-preview-card">
            <div className="sl-preview-card-head" style={{ background: '#4A8C3F' }}>
              <span>🥒</span>
            </div>
            <div className="sl-preview-card-body">
              <div className="sl-preview-card-title">Festive</div>
              <div className="sl-preview-card-text">Holiday specials</div>
            </div>
          </div>
        </div>

        <div className="sl-preview-bottom">
          <span className="sl-preview-btn">Order Now</span>
        </div>
      </div>
    </>
  );
}
