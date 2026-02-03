import React from 'react';

export const metadata = {
  id: 'tilt-glass-cards',
  name: 'Tilt Glass Cards',
  description: 'Hover tilt cards with glare for premium interactions.',
  tags: ['Component', 'Hover', 'Cards', 'Motion'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap');

  .tgc-preview {
    font-family: 'Manrope', sans-serif;
    height: 100%;
    padding: 12px;
    background: radial-gradient(140px 90px at 10% 0%, rgba(126, 189, 255, 0.3), transparent 60%), #0b0f12;
    color: #f6f7fb;
  }

  .tgc-preview-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  .tgc-preview-card {
    position: relative;
    border-radius: 12px;
    padding: 10px;
    background: rgba(16, 20, 26, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.12);
    font-size: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  .tgc-preview-card::after {
    content: '';
    position: absolute;
    inset: -40%;
    background: radial-gradient(120px 90px at 30% 20%, rgba(255, 255, 255, 0.3), transparent 60%);
  }

  .tgc-preview-chip {
    display: inline-flex;
    margin-top: 8px;
    padding: 4px 8px;
    border-radius: 999px;
    font-size: 9px;
    background: rgba(126, 189, 255, 0.16);
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="tgc-preview">
        <div className="tgc-preview-grid">
          <div className="tgc-preview-card">
            Secure Telemetry
            <span className="tgc-preview-chip">Priority</span>
          </div>
          <div className="tgc-preview-card">
            Threat Surface
            <span className="tgc-preview-chip">Priority</span>
          </div>
        </div>
      </div>
    </>
  );
}
