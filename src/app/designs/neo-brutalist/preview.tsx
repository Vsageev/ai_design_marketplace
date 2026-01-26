import React from 'react';

export const metadata = {
  id: 'neo-brutalist',
  name: 'Neo Brutalist',
  description: 'Raw aesthetics, bold typography, and hard shadows. High contrast design that refuses to blend in.',
  tags: ['Bold', 'High Contrast', 'Raw'],
};

const previewStyles = `
  .nb-preview {
    --pure-black: #000000;
    --pure-white: #FFFFFF;
    --off-white: #F5F5F0;
    --electric-yellow: #FFFF00;
    --hot-pink: #FF00FF;
    --cyber-blue: #00FFFF;
    --lime-green: #00FF00;

    font-family: 'Space Mono', monospace;
    background: var(--off-white);
    padding: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .nb-preview-header {
    font-family: 'Bebas Neue', 'Anton', sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: var(--pure-black);
    background: var(--electric-yellow);
    padding: 8px 12px;
    border: 3px solid var(--pure-black);
    box-shadow: 4px 4px 0 var(--pure-black);
  }

  .nb-preview-card {
    background: var(--pure-white);
    border: 3px solid var(--pure-black);
    box-shadow: 4px 4px 0 var(--pure-black);
    padding: 12px;
    transition: transform 0.1s, box-shadow 0.1s;
  }

  .nb-preview:hover .nb-preview-card {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--pure-black);
  }

  .nb-preview-card-title {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--pure-black);
    margin-bottom: 4px;
  }

  .nb-preview-card-content {
    font-size: 11px;
    color: var(--pure-black);
  }

  .nb-preview-input {
    width: 100%;
    border: 3px solid var(--pure-black);
    padding: 8px 10px;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    background: var(--pure-white);
  }

  .nb-preview-input:focus {
    outline: none;
    box-shadow: 4px 4px 0 var(--cyber-blue);
  }

  .nb-preview-buttons {
    display: flex;
    gap: 8px;
  }

  .nb-preview-btn {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 8px 14px;
    border: 3px solid var(--pure-black);
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.1s;
  }

  .nb-preview-btn-primary {
    background: var(--electric-yellow);
    color: var(--pure-black);
    box-shadow: 3px 3px 0 var(--pure-black);
  }

  .nb-preview-btn-primary:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 var(--pure-black);
  }

  .nb-preview-btn-primary:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0 var(--pure-black);
  }

  .nb-preview-btn-secondary {
    background: var(--hot-pink);
    color: var(--pure-black);
    box-shadow: 3px 3px 0 var(--pure-black);
  }

  .nb-preview-btn-secondary:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 var(--pure-black);
  }

  .nb-preview-status {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--pure-black);
    background: var(--lime-green);
    padding: 4px 8px;
    border: 2px solid var(--pure-black);
    width: fit-content;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="nb-preview">
        <div className="nb-preview-header">DASHBOARD</div>
        <div className="nb-preview-card">
          <div className="nb-preview-card-title">API Status</div>
          <div className="nb-preview-card-content">
            <div className="nb-preview-status">ONLINE</div>
          </div>
        </div>
        <input
          className="nb-preview-input"
          placeholder="SEARCH..."
          readOnly
        />
        <div className="nb-preview-buttons">
          <button className="nb-preview-btn nb-preview-btn-primary">SUBMIT</button>
          <button className="nb-preview-btn nb-preview-btn-secondary">CANCEL</button>
        </div>
      </div>
    </>
  );
}
