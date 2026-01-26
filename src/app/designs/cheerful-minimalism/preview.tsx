import React from 'react';

export const metadata = {
  id: 'cheerful-minimalism',
  name: 'Cheerful Minimalism',
  description: 'Clean interfaces with joyful feedback animations. Compact layouts, vibrant accents on neutral backgrounds.',
  tags: ['Minimal', 'Animated', 'Light'],
};

const previewStyles = `
  .cm-preview {
    --pure-white: #FFFFFF;
    --light-gray: #F8F9FA;
    --medium-gray: #E9ECEF;
    --soft-charcoal: #6C757D;
    --deep-charcoal: #343A40;
    --electric-blue: #007BFF;
    --lime-green: #28A745;
    --coral-orange: #FD7E14;
    --sunflower-yellow: #FFC107;
    --progress-purple: #6F42C1;

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--light-gray);
    padding: 16px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .cm-preview-header {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--deep-charcoal);
    background: var(--pure-white);
    padding: 8px 12px;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  }

  .cm-preview-card {
    background: var(--pure-white);
    border: 1px solid var(--medium-gray);
    border-radius: 8px;
    padding: 12px;
    position: relative;
    overflow: hidden;
  }

  .cm-preview-card::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 2px;
    background: conic-gradient(
      from 0deg,
      var(--electric-blue),
      var(--sunflower-yellow),
      var(--coral-orange),
      var(--progress-purple),
      var(--electric-blue)
    );
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
  }

  .cm-preview:hover .cm-preview-card::before {
    opacity: 1;
  }

  .cm-preview-card-title {
    font-size: 11px;
    font-weight: 500;
    color: var(--soft-charcoal);
    margin-bottom: 6px;
  }

  .cm-preview-card-content {
    font-size: 12px;
    color: var(--deep-charcoal);
    line-height: 1.4;
  }

  .cm-preview-buttons {
    display: flex;
    gap: 8px;
  }

  .cm-preview-btn {
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .cm-preview-btn-primary {
    background: var(--electric-blue);
    color: white;
    box-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);
  }

  .cm-preview-btn-primary:hover {
    background: #0056B3;
    box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
  }

  .cm-preview-btn-success {
    background: var(--lime-green);
    color: white;
  }

  .cm-preview-progress {
    background: var(--medium-gray);
    border-radius: 4px;
    height: 6px;
    overflow: hidden;
  }

  .cm-preview-progress-fill {
    background: linear-gradient(90deg, var(--electric-blue), #0056B3);
    height: 100%;
    width: 65%;
    border-radius: 4px;
  }

  .cm-preview-status {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 10px;
    color: var(--lime-green);
    font-weight: 500;
  }

  .cm-preview-status-dot {
    width: 6px;
    height: 6px;
    background: var(--lime-green);
    border-radius: 50%;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="cm-preview">
        <div className="cm-preview-header">Feature Flags</div>
        <div className="cm-preview-card">
          <div className="cm-preview-card-title">Dark Mode</div>
          <div className="cm-preview-card-content">
            <div className="cm-preview-status">
              <span className="cm-preview-status-dot" />
              Active
            </div>
          </div>
        </div>
        <div className="cm-preview-progress">
          <div className="cm-preview-progress-fill" />
        </div>
        <div className="cm-preview-buttons">
          <button className="cm-preview-btn cm-preview-btn-primary">Configure</button>
          <button className="cm-preview-btn cm-preview-btn-success">Deploy</button>
        </div>
      </div>
    </>
  );
}
