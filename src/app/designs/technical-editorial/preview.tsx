import React from 'react';

export const metadata = {
  id: 'technical-editorial',
  name: 'Technical Editorial',
  description: 'High-end print magazine meets command-line interface. Serif headlines, monospace details, blueprint grid, and floating agent labels.',
  tags: ['Light', 'Editorial', 'Technical', 'Minimalist'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&family=JetBrains+Mono:wght@400;500&display=swap');

  .te-preview {
    --te-canvas: #fafafa;
    --te-paper: #ffffff;
    --te-text: #0a0a0a;
    --te-text-secondary: #525252;
    --te-text-tertiary: #a3a3a3;
    --te-grid-cross: rgba(0, 0, 0, 0.06);
    --te-bracket: rgba(0, 0, 0, 0.18);
    --te-border: rgba(0, 0, 0, 0.08);
    --te-green: #22c55e;
    --te-blue: #3b82f6;

    height: 100%;
    background: var(--te-canvas);
    font-family: 'Inter', -apple-system, sans-serif;
    color: var(--te-text);
    padding: 16px;
    position: relative;
    overflow: hidden;
  }

  .te-preview-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at center, var(--te-grid-cross) 1px, transparent 1px);
    background-size: 24px 24px;
    pointer-events: none;
  }

  .te-preview-ruler {
    position: absolute;
    left: 8px;
    top: 20px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'JetBrains Mono', monospace;
    font-size: 7px;
    color: rgba(0, 0, 0, 0.12);
  }

  .te-preview-content {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 16px;
  }

  .te-preview-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .te-preview-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--te-text-tertiary);
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .te-preview-label::before {
    content: '';
    width: 16px;
    height: 1px;
    background: var(--te-bracket);
  }

  .te-preview-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .te-preview-agent {
    display: flex;
    align-items: center;
    gap: 6px;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid var(--te-border);
    padding: 4px 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 8px;
    animation: te-preview-float 2.5s ease-in-out infinite alternate;
  }

  .te-preview-agent-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--te-green);
  }

  .te-preview-card {
    border: 1px solid var(--te-border);
    background: var(--te-paper);
    padding: 12px;
    position: relative;
  }

  .te-preview-card::before,
  .te-preview-card::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-color: var(--te-bracket);
    border-style: solid;
  }

  .te-preview-card::before {
    top: -1px;
    left: -1px;
    border-width: 1px 0 0 1px;
  }

  .te-preview-card::after {
    bottom: -1px;
    right: -1px;
    border-width: 0 1px 1px 0;
  }

  .te-preview-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .te-preview-card-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 13px;
    font-weight: 400;
  }

  .te-preview-status {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--te-green);
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .te-preview-status-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: currentColor;
  }

  .te-preview-card-desc {
    font-size: 10px;
    color: var(--te-text-secondary);
    line-height: 1.4;
  }

  .te-preview-btn {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    background: none;
    border: none;
    color: var(--te-text);
    padding: 0;
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: auto;
  }

  .te-preview-btn-bracket {
    color: var(--te-text-tertiary);
  }

  .te-preview-btn::after {
    content: '_';
    animation: te-preview-blink 1s steps(2) infinite;
  }

  @keyframes te-preview-float {
    from { transform: translateY(-2px); }
    to { transform: translateY(2px); }
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
          <span>050</span>
          <span>100</span>
          <span>150</span>
        </div>
        <div className="te-preview-content">
          <div className="te-preview-header">
            <div>
              <span className="te-preview-label">Security Platform</span>
              <h2 className="te-preview-title">The machine<br />watches.</h2>
            </div>
            <div className="te-preview-agent">
              <span className="te-preview-agent-dot" />
              Prama
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
            <p className="te-preview-card-desc">Mapping endpoints in service mesh</p>
          </div>
          <button className="te-preview-btn">
            <span className="te-preview-btn-bracket">[</span>
            Book a call
            <span className="te-preview-btn-bracket">]</span>
          </button>
        </div>
      </div>
    </>
  );
}
