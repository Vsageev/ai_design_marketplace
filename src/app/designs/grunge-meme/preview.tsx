import React from 'react';

export const metadata = {
  id: 'grunge-meme',
  name: 'Grunge Meme',
  description: 'Bold, high-contrast design inspired by Russian YouTube thumbnails. Features grunge textures, aggressive typography, and meme culture aesthetics.',
  tags: ['Grunge', 'Bold', 'Meme', 'YouTube', 'High-Contrast'],
};

const previewStyles = `
  .gm-preview {
    --paper-base: #E8E4D9;
    --dark-text: #1A1A1A;
    --danger-red: #C41E3A;
    --meme-green: #5C8C5C;
    --border-dark: #2D2D2D;
    --checkmark-green: #3A6B3A;

    font-family: 'Arial', 'Helvetica', sans-serif;
    background: var(--paper-base);
    padding: 12px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
    overflow: hidden;
  }

  .gm-preview::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px),
      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px);
    pointer-events: none;
    opacity: 0.5;
  }

  .gm-preview > * {
    position: relative;
    z-index: 1;
  }

  .gm-preview-header {
    background: var(--paper-base);
    border: 3px solid var(--border-dark);
    padding: 8px;
    text-align: center;
    box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  }

  .gm-preview-title {
    font-family: 'Impact', 'Arial Black', sans-serif;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.0;
    text-transform: uppercase;
    color: var(--dark-text);
    margin-bottom: 4px;
  }

  .gm-preview-subtitle {
    font-size: 11px;
    font-weight: 700;
    color: var(--danger-red);
    text-transform: uppercase;
  }

  .gm-preview-content {
    display: flex;
    gap: 8px;
    flex: 1;
  }

  .gm-preview-card {
    flex: 1;
    background: var(--paper-base);
    border: 3px solid var(--border-dark);
    display: flex;
    flex-direction: column;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
  }

  .gm-preview-card-icon {
    background: var(--meme-green);
    height: 40px;
    border-bottom: 3px solid var(--border-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  .gm-preview-card-body {
    padding: 6px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .gm-preview-card-title {
    font-family: 'Impact', 'Arial Black', sans-serif;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .gm-preview-checklist {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .gm-preview-check {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 9px;
    font-weight: 600;
  }

  .gm-preview-checkbox {
    width: 12px;
    height: 12px;
    background: var(--checkmark-green);
    border: 1px solid var(--border-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 10px;
    line-height: 1;
    flex-shrink: 0;
  }

  .gm-preview-btn {
    background: var(--danger-red);
    color: white;
    border: 2px solid var(--dark-text);
    padding: 4px 8px;
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: auto;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="gm-preview">
        <div className="gm-preview-header">
          <div className="gm-preview-title">WORK<br/>ONLINE</div>
          <div className="gm-preview-subtitle">✓ NO EXPERIENCE</div>
        </div>

        <div className="gm-preview-content">
          <div className="gm-preview-card">
            <div className="gm-preview-card-icon">💰</div>
            <div className="gm-preview-card-body">
              <div className="gm-preview-card-title">MONEY</div>
              <div className="gm-preview-checklist">
                <div className="gm-preview-check">
                  <span className="gm-preview-checkbox">✓</span>
                  <span>Fast</span>
                </div>
                <div className="gm-preview-check">
                  <span className="gm-preview-checkbox">✓</span>
                  <span>Honest</span>
                </div>
              </div>
              <button className="gm-preview-btn">START</button>
            </div>
          </div>

          <div className="gm-preview-card">
            <div className="gm-preview-card-icon">🚀</div>
            <div className="gm-preview-card-body">
              <div className="gm-preview-card-title">GROWTH</div>
              <div className="gm-preview-checklist">
                <div className="gm-preview-check">
                  <span className="gm-preview-checkbox">✓</span>
                  <span>Skills</span>
                </div>
                <div className="gm-preview-check">
                  <span className="gm-preview-checkbox">✓</span>
                  <span>Experience</span>
                </div>
              </div>
              <button className="gm-preview-btn">GO</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
