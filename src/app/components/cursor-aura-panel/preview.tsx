import React from 'react';

export const metadata = {
  id: 'cursor-aura-panel',
  name: 'Cursor Aura Panel',
  description: 'A spotlight-style cursor aura with responsive tiles and depth.',
  tags: ['Component', 'Motion', 'Hover', 'Pointer'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600&display=swap');

  .cap-preview {
    font-family: 'Space Grotesk', sans-serif;
    height: 100%;
    padding: 12px;
    background: radial-gradient(120px 80px at 20% 0%, rgba(120, 176, 255, 0.35), transparent 65%),
      #0f1118;
    color: #e8ecf6;
  }

  .cap-preview-panel {
    height: 100%;
    border-radius: 14px;
    border: 1px solid rgba(120, 140, 180, 0.3);
    padding: 10px;
    position: relative;
    background: linear-gradient(140deg, rgba(22, 25, 36, 0.9), rgba(12, 14, 20, 0.95));
    overflow: hidden;
  }

  .cap-preview-panel::before {
    content: '';
    position: absolute;
    inset: -40px;
    background: radial-gradient(120px 120px at 30% 20%, rgba(120, 176, 255, 0.45), transparent 60%);
  }

  .cap-preview-grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  .cap-preview-tile {
    border-radius: 10px;
    padding: 8px;
    background: rgba(18, 20, 30, 0.9);
    border: 1px solid rgba(120, 140, 180, 0.2);
    font-size: 10px;
    font-weight: 600;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="cap-preview">
        <div className="cap-preview-panel">
          <div className="cap-preview-grid">
            <div className="cap-preview-tile">Signal Maps</div>
            <div className="cap-preview-tile">Guardrails</div>
            <div className="cap-preview-tile">Live Trails</div>
            <div className="cap-preview-tile">Exposure</div>
          </div>
        </div>
      </div>
    </>
  );
}
