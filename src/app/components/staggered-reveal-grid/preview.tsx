import React from 'react';

export const metadata = {
  id: 'staggered-reveal-grid',
  name: 'Staggered Reveal Grid',
  description: 'Intersection-aware grid with cascading reveal motion.',
  tags: ['Component', 'Scroll', 'Grid', 'Motion'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600&display=swap');

  .srg-preview {
    font-family: 'Syne', sans-serif;
    height: 100%;
    padding: 12px;
    background: #f3f0ea;
    color: #131217;
  }

  .srg-preview-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  .srg-preview-card {
    border-radius: 12px;
    padding: 10px;
    background: #ffffff;
    border: 1px solid rgba(19, 18, 23, 0.08);
    box-shadow: 0 8px 16px rgba(19, 18, 23, 0.1);
    font-size: 10px;
    animation: srgPreviewUp 1.8s ease infinite;
  }

  .srg-preview-card:nth-child(2) {
    animation-delay: 0.2s;
  }

  .srg-preview-card:nth-child(3) {
    animation-delay: 0.4s;
  }

  .srg-preview-card:nth-child(4) {
    animation-delay: 0.6s;
  }

  @keyframes srgPreviewUp {
    0%, 40% {
      opacity: 0.4;
      transform: translateY(6px);
    }
    70%, 100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="srg-preview">
        <div className="srg-preview-grid">
          <div className="srg-preview-card">Asset Score</div>
          <div className="srg-preview-card">Signal Library</div>
          <div className="srg-preview-card">Replay Trail</div>
          <div className="srg-preview-card">Cluster Map</div>
        </div>
      </div>
    </>
  );
}
