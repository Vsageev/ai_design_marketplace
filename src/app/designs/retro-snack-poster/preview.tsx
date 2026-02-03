import React from 'react';

export const metadata = {
  id: 'retro-snack-poster',
  name: 'Retro Snack Poster',
  description: 'Playful, hand-printed poster system with chunky outlines and bold food colors.',
  tags: ['Poster', 'Food', 'Playful', 'Retro'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rubik:wght@400;500;700&display=swap');

  .rsp-preview {
    --bg-cream: #f7d7a6;
    --bg-panel: #fff3df;
    --ink: #1f1b14;
    --accent-orange: #f28a1a;
    --accent-red: #e45136;
    --accent-blue: #3c6fc7;
    font-family: 'Rubik', 'Arial', sans-serif;
    height: 100%;
    padding: 16px;
    background: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12) 6px, transparent 6px, transparent 12px),
      var(--bg-cream);
    color: var(--ink);
    box-sizing: border-box;
  }

  .rsp-preview-header {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 8px;
  }

  .rsp-preview-row {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .rsp-preview-chip {
    background: var(--accent-red);
    color: #fff3df;
    border: 2px solid var(--ink);
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .rsp-preview-card {
    margin-top: 10px;
    background: var(--bg-panel);
    border: 2px solid var(--ink);
    border-radius: 12px;
    padding: 10px;
    box-shadow: 3px 3px 0 var(--ink);
  }

  .rsp-preview-bar {
    height: 10px;
    border-radius: 999px;
    border: 2px solid var(--ink);
    background: linear-gradient(90deg, var(--accent-red), var(--accent-orange));
    margin-top: 8px;
  }

  .rsp-preview-button {
    margin-top: 10px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 8px;
    border: 2px solid var(--ink);
    background: var(--accent-orange);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="rsp-preview">
        <div className="rsp-preview-row">
          <div className="rsp-preview-header">Snack Poster</div>
          <div className="rsp-preview-chip">special</div>
        </div>
        <div style={{ fontSize: '12px', opacity: 0.8 }}>
          Bold typography, hand-drawn vibes, and market energy.
        </div>
        <div className="rsp-preview-card">
          <div style={{ fontWeight: 700, fontSize: '14px' }}>Cheese stretch wrap</div>
          <div style={{ fontSize: '11px', marginTop: '4px' }}>Limited batch • 10:00 AM</div>
          <div className="rsp-preview-bar" />
        </div>
        <div className="rsp-preview-button">Order now</div>
      </div>
    </>
  );
}
