import React from 'react';

export const metadata = {
  id: 'parallax-marquee-band',
  name: 'Parallax Marquee Band',
  description: 'A kinetic marquee band with layered parallax orbs.',
  tags: ['Component', 'Marquee', 'Parallax', 'Motion'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');

  .pmb-preview {
    font-family: 'Space Mono', monospace;
    height: 100%;
    padding: 12px;
    background: #0a0c14;
    color: #f4f6ff;
  }

  .pmb-preview-band {
    position: relative;
    height: 100%;
    border-radius: 12px;
    border: 1px solid rgba(126, 242, 255, 0.2);
    overflow: hidden;
    background: linear-gradient(120deg, rgba(24, 30, 48, 0.9), rgba(10, 12, 20, 0.9));
  }

  .pmb-preview-band::before {
    content: '';
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 1px solid rgba(126, 242, 255, 0.25);
    top: -40px;
    right: 20px;
  }

  .pmb-preview-marquee {
    position: absolute;
    bottom: 18px;
    display: flex;
    gap: 16px;
    white-space: nowrap;
    animation: pmbPreviewScroll 8s linear infinite;
  }

  .pmb-preview-marquee span {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #7ef2ff;
  }

  @keyframes pmbPreviewScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="pmb-preview">
        <div className="pmb-preview-band">
          <div className="pmb-preview-marquee">
            <span>Threat routing</span>
            <span>Signal fusion</span>
            <span>Autonomous scans</span>
            <span>Live telemetry</span>
            <span>Threat routing</span>
            <span>Signal fusion</span>
            <span>Autonomous scans</span>
            <span>Live telemetry</span>
          </div>
        </div>
      </div>
    </>
  );
}
