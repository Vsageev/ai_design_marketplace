import React from 'react';

export const metadata = {
  id: 'hex-security',
  name: 'Hex Security',
  description: 'Technical light UI with serif headlines, mono labels, and orange signal accents inspired by Hex Security.',
  tags: ['Light', 'Security', 'Technical', 'Grid'],
};

const previewStyles = `
  .hex-preview {
    --hex-bg: #f7f7f7;
    --hex-surface: #ffffff;
    --hex-border: #c7c7c7;
    --hex-line: rgba(0, 0, 0, 0.1);
    --hex-text: #000000;
    --hex-text-muted: #5e5e5e;
    --hex-accent: #fa651e;

    height: 100%;
    background: var(--hex-bg);
    padding: 14px;
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: var(--hex-text);
    position: relative;
    overflow: hidden;
  }

  .hex-preview-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, var(--hex-line) 1px, transparent 1px),
      linear-gradient(to bottom, var(--hex-line) 1px, transparent 1px);
    background-size: 46px 46px;
    opacity: 0.25;
    pointer-events: none;
    animation: hex-preview-drift 12s linear infinite;
  }

  .hex-preview-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .hex-preview-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--hex-border);
  }

  .hex-preview-brand {
    font-family: 'Kalice-Trial Regular', 'Times New Roman', serif;
    font-size: 16px;
  }

  .hex-preview-label {
    font-family: 'DM Mono', 'SFMono-Regular', Menlo, monospace;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--hex-text-muted);
  }

  .hex-preview-btn {
    border: none;
    background: var(--hex-accent);
    color: #ffffff;
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 10px;
    font-weight: 600;
  }

  .hex-preview-card {
    border: 1px solid var(--hex-border);
    border-radius: 10px;
    padding: 10px;
    background: var(--hex-surface);
    position: relative;
  }

  .hex-preview-card:after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background:
      linear-gradient(var(--hex-line), var(--hex-line)) left top / 10px 1px no-repeat,
      linear-gradient(var(--hex-line), var(--hex-line)) left top / 1px 10px no-repeat,
      linear-gradient(var(--hex-line), var(--hex-line)) right top / 10px 1px no-repeat,
      linear-gradient(var(--hex-line), var(--hex-line)) right top / 1px 10px no-repeat,
      linear-gradient(var(--hex-line), var(--hex-line)) left bottom / 10px 1px no-repeat,
      linear-gradient(var(--hex-line), var(--hex-line)) left bottom / 1px 10px no-repeat,
      linear-gradient(var(--hex-line), var(--hex-line)) right bottom / 10px 1px no-repeat,
      linear-gradient(var(--hex-line), var(--hex-line)) right bottom / 1px 10px no-repeat;
    opacity: 0.6;
  }

  .hex-preview-card-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  .hex-preview-card-desc {
    font-size: 10px;
    color: var(--hex-text-muted);
  }

  .hex-preview-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  .hex-preview-badge {
    padding: 3px 8px;
    border-radius: 999px;
    background: rgba(250, 101, 30, 0.15);
    color: var(--hex-accent);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @keyframes hex-preview-drift {
    0% {
      background-position: 0 0, 0 0;
    }
    100% {
      background-position: 46px 46px, 46px 46px;
    }
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="hex-preview">
        <div className="hex-preview-grid"></div>
        <div className="hex-preview-content">
          <div className="hex-preview-header">
            <div>
              <div className="hex-preview-brand">Hex Security</div>
              <div className="hex-preview-label">Continuous testing</div>
            </div>
            <button className="hex-preview-btn">Run scan</button>
          </div>
          <div className="hex-preview-card">
            <div className="hex-preview-row">
              <div>
                <div className="hex-preview-card-title">Surface change detected</div>
                <div className="hex-preview-card-desc">Agent verified new endpoint</div>
              </div>
              <span className="hex-preview-badge">Active</span>
            </div>
          </div>
          <div className="hex-preview-card">
            <div className="hex-preview-card-title">Critical findings</div>
            <div className="hex-preview-card-desc">3 open items in production</div>
          </div>
        </div>
      </div>
    </>
  );
}
