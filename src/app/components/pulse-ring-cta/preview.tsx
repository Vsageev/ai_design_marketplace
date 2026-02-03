import React from 'react';

export const metadata = {
  id: 'pulse-ring-cta',
  name: 'Pulse Ring CTA',
  description: 'CTA button with layered pulse rings for attention.',
  tags: ['Component', 'CTA', 'Motion', 'Pulse'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700&display=swap');

  .prc-preview {
    font-family: 'Fraunces', serif;
    height: 100%;
    padding: 12px;
    background: #1a0f13;
    color: #fef6f6;
  }

  .prc-preview-card {
    position: relative;
    height: 100%;
    border-radius: 12px;
    border: 1px solid rgba(255, 92, 125, 0.3);
    background: rgba(27, 16, 21, 0.9);
    display: grid;
    place-items: center;
  }

  .prc-preview-button {
    position: relative;
    padding: 8px 14px;
    border-radius: 999px;
    background: #ff5c7d;
    color: #1a0f13;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .prc-preview-button::before,
  .prc-preview-button::after {
    content: '';
    position: absolute;
    inset: -10px;
    border-radius: 999px;
    border: 1px solid rgba(255, 92, 125, 0.45);
    animation: prcPreviewPulse 2.4s ease-out infinite;
  }

  .prc-preview-button::after {
    animation-delay: 1.2s;
  }

  @keyframes prcPreviewPulse {
    0% { transform: scale(0.7); opacity: 0.7; }
    100% { transform: scale(1.6); opacity: 0; }
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="prc-preview">
        <div className="prc-preview-card">
          <div className="prc-preview-button">Start</div>
        </div>
      </div>
    </>
  );
}
