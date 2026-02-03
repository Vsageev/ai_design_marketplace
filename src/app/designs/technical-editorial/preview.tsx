import React from 'react';

export const metadata = {
  id: 'technical-editorial',
  name: 'Technical Editorial',
  description: 'High-end print magazine meets command-line interface. Serif headlines, monospace details, blueprint grid, and terminal-style interactions.',
  tags: ['Light', 'Editorial', 'Technical', 'Minimalist'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&family=JetBrains+Mono:wght@300;400;500&display=swap');

  .te-preview {
    --te-canvas: #fafafa;
    --te-paper: #ffffff;
    --te-text: #0a0a0a;
    --te-text-secondary: #525252;
    --te-text-tertiary: #a3a3a3;
    --te-grid-cross: rgba(0, 0, 0, 0.05);
    --te-bracket: rgba(0, 0, 0, 0.2);
    --te-border: rgba(0, 0, 0, 0.08);
    --te-green: #22c55e;

    height: 100%;
    background: var(--te-canvas);
    font-family: 'Inter', -apple-system, sans-serif;
    color: var(--te-text);
    padding: 14px 16px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .te-preview-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at center, var(--te-grid-cross) 0.6px, transparent 0.6px);
    background-size: 20px 20px;
    pointer-events: none;
  }

  .te-preview-ruler {
    position: absolute;
    left: 6px;
    top: 16px;
    bottom: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'JetBrains Mono', monospace;
    font-size: 6px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }

  .te-preview-content {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 14px;
  }

  .te-preview-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .te-preview-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 7px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--te-text-tertiary);
    margin-bottom: 3px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .te-preview-label::before {
    content: '';
    width: 12px;
    height: 1px;
    background: var(--te-bracket);
  }

  .te-preview-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.025em;
    line-height: 1.05;
  }

  .te-preview-title em {
    font-style: italic;
    color: var(--te-text-secondary);
  }

  .te-preview-card {
    border: 1px solid var(--te-border);
    background: var(--te-paper);
    padding: 10px 12px;
    position: relative;
    transition: border-color 0.15s ease-out;
  }

  .te-preview-card::before,
  .te-preview-card::after {
    content: '';
    position: absolute;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .te-preview-card::before {
    top: -1px;
    left: -1px;
    width: 8px;
    height: 8px;
    border-top: 1px solid var(--te-bracket);
    border-left: 1px solid var(--te-bracket);
  }

  .te-preview-card::after {
    bottom: -1px;
    right: -1px;
    width: 8px;
    height: 8px;
    border-bottom: 1px solid var(--te-bracket);
    border-right: 1px solid var(--te-bracket);
  }

  .te-preview-card:hover::before {
    width: 12px;
    height: 12px;
    border-color: var(--te-text);
  }

  .te-preview-card:hover::after {
    width: 12px;
    height: 12px;
    border-color: var(--te-text);
  }

  .te-preview-card:hover {
    border-color: var(--te-bracket);
  }

  .te-preview-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }

  .te-preview-card-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 12px;
    font-weight: 400;
  }

  .te-preview-status {
    font-family: 'JetBrains Mono', monospace;
    font-size: 7px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--te-green);
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .te-preview-status-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: currentColor;
  }

  .te-preview-card-desc {
    font-size: 9px;
    color: var(--te-text-tertiary);
    line-height: 1.3;
  }

  .te-preview-footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .te-preview-btn {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8px;
    font-weight: 500;
    background: none;
    border: none;
    color: var(--te-text);
    padding: 0;
    display: flex;
    align-items: center;
    gap: 3px;
    cursor: pointer;
    position: relative;
  }

  .te-preview-btn-text {
    position: relative;
  }

  .te-preview-btn-text::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 0;
    height: 1px;
    background: var(--te-text);
    transition: width 0.2s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .te-preview-btn:hover .te-preview-btn-text::after {
    width: 100%;
  }

  .te-preview-btn-bracket {
    color: var(--te-text-tertiary);
    font-weight: 300;
  }

  .te-preview-btn-cursor {
    display: inline-block;
    width: 5px;
    height: 10px;
    background: var(--te-text);
    animation: te-preview-blink 1s steps(2) infinite;
  }

  .te-preview-meta {
    font-family: 'JetBrains Mono', monospace;
    font-size: 7px;
    color: var(--te-text-tertiary);
    letter-spacing: 0.04em;
  }

  @keyframes te-preview-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="te-preview">
        <div className="te-preview-grid" />
        <div className="te-preview-ruler">
          <span>000</span>
          <span>040</span>
          <span>080</span>
          <span>120</span>
          <span>160</span>
        </div>
        <div className="te-preview-content">
          <div className="te-preview-header">
            <div>
              <span className="te-preview-label">Security Platform</span>
              <h2 className="te-preview-title">The machine<br />watches.</h2>
            </div>
          </div>
          <div className="te-preview-card">
            <div className="te-preview-card-header">
              <span className="te-preview-card-title">Surface Scan</span>
              <span className="te-preview-status">
                <span className="te-preview-status-dot" />
                Active
              </span>
            </div>
            <p className="te-preview-card-desc">Mapping endpoints across service mesh</p>
          </div>
          <div className="te-preview-footer">
            <button className="te-preview-btn">
              <span className="te-preview-btn-bracket">[</span>
              <span className="te-preview-btn-text">Book a call</span>
              <span className="te-preview-btn-bracket">]</span>
              <span className="te-preview-btn-cursor" />
            </button>
            <span className="te-preview-meta">Coverage: 98%</span>
          </div>
        </div>
      </div>
    </>
  );
}
