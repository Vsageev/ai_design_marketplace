import React from 'react';

export const metadata = {
  id: 'falafel',
  name: 'Falafel',
  description: 'Bold street food poster art — thick outlines, condensed type, and hand-drawn energy on a dark base. Late-night shawarma joint meets indie zine culture.',
  tags: ['Dark', 'Bold', 'Street Food', 'Poster Art'],
};

const previewStyles = `
  .fl-preview {
    --fl-bg: #111111;
    --fl-surface: #1a1a1a;
    --fl-text: #f5f0e8;
    --fl-text-secondary: #a39e93;
    --fl-orange: #e8742a;
    --fl-red: #c0392b;
    --fl-green: #4a7c3f;
    --fl-cream: #f2e6c9;

    background: var(--fl-bg);
    color: var(--fl-text);
    font-family: 'Georgia', 'Times New Roman', serif;
    height: 200px;
    padding: 20px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .fl-preview *,
  .fl-preview *::before,
  .fl-preview *::after {
    box-sizing: border-box;
  }

  .fl-preview::before {
    content: '///';
    position: absolute;
    top: 8px;
    left: 20px;
    font-family: 'Courier New', monospace;
    font-size: 10px;
    color: var(--fl-orange);
    opacity: 0.4;
    letter-spacing: 2px;
  }

  .fl-preview-header {
    margin-top: 8px;
  }

  .fl-preview-title {
    font-family: Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
    font-size: 28px;
    font-weight: 900;
    line-height: 0.9;
    text-transform: uppercase;
    color: var(--fl-text);
    margin: 0;
  }

  .fl-preview-title span {
    color: var(--fl-orange);
  }

  .fl-preview-tagline {
    font-size: 10px;
    color: var(--fl-text-secondary);
    margin-top: 6px;
  }

  .fl-preview-badge {
    position: absolute;
    top: 14px;
    right: 16px;
    background: var(--fl-red);
    color: var(--fl-cream);
    font-family: Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
    font-size: 9px;
    text-transform: uppercase;
    padding: 4px 8px;
    transform: rotate(4deg);
    border-radius: 2px;
    letter-spacing: 0.02em;
  }

  .fl-preview-bottom {
    display: flex;
    gap: 8px;
    align-items: flex-end;
  }

  .fl-preview-card {
    flex: 1;
    background: var(--fl-surface);
    border: 2px solid #2a2a2a;
    border-radius: 3px;
    padding: 10px;
    transition: border-color 0.15s ease-out, transform 0.15s ease-out;
  }

  .fl-preview-card:hover {
    border-color: var(--fl-orange);
    transform: scale(0.97);
  }

  .fl-preview-card-dot {
    width: 100%;
    height: 24px;
    border-radius: 2px;
    margin-bottom: 6px;
  }

  .fl-preview-card-title {
    font-family: Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
    font-size: 10px;
    text-transform: uppercase;
    color: var(--fl-text);
    margin-bottom: 3px;
  }

  .fl-preview-card-text {
    font-size: 7px;
    color: var(--fl-text-secondary);
    line-height: 1.3;
  }

  .fl-preview-btn {
    font-family: Impact, 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--fl-bg);
    background: var(--fl-orange);
    border: 2px solid var(--fl-orange);
    padding: 6px 14px;
    border-radius: 2px;
    cursor: pointer;
    transition: transform 0.15s ease-out, border-color 0.15s ease-out;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .fl-preview-btn:hover {
    transform: scale(0.97);
    border-color: var(--fl-cream);
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="fl-preview">
        <div className="fl-preview-badge">Fresh</div>
        <div className="fl-preview-header">
          <h3 className="fl-preview-title">
            Street<br /><span>Food</span>
          </h3>
          <div className="fl-preview-tagline">Bold poster art on dark canvas</div>
        </div>

        <div className="fl-preview-bottom">
          <div className="fl-preview-card">
            <div className="fl-preview-card-dot" style={{ background: 'var(--fl-orange)' }} />
            <div className="fl-preview-card-title">Falafel Wrap</div>
            <div className="fl-preview-card-text">Crispy chickpea, tahini, herbs</div>
          </div>
          <div className="fl-preview-card">
            <div className="fl-preview-card-dot" style={{ background: 'var(--fl-red)' }} />
            <div className="fl-preview-card-title">Shawarma</div>
            <div className="fl-preview-card-text">Slow-roasted lamb, garlic</div>
          </div>
          <button className="fl-preview-btn">Order</button>
        </div>
      </div>
    </>
  );
}
