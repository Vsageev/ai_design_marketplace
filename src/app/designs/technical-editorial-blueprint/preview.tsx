import React from 'react';

export const metadata = {
  id: 'technical-editorial-blueprint',
  name: 'Technical Editorial Blueprint',
  description: 'A design system bridging high-end typographic print media and raw command-line interfaces.',
  tags: ['Editorial', 'Technical', 'Monochrome', 'Serif'],
};

const previewStyles = `
  .te-preview {
    --te-bg: #ffffff;
    --te-text: #111111;
    --te-line: #e5e5e5;
    
    background: var(--te-bg);
    color: var(--te-text);
    height: 100%;
    padding: 16px;
    font-family: 'DM Mono', monospace;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .te-preview-grid {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(var(--te-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--te-line) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.5;
    pointer-events: none;
  }

  .te-preview-title {
    font-family: 'Times New Roman', serif;
    font-size: 24px;
    line-height: 1;
    margin-bottom: 4px;
  }

  .te-preview-sub {
    font-size: 9px;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .te-preview-card {
    border: 1px solid var(--te-text);
    padding: 10px;
    position: relative;
    margin-top: 10px;
  }

  .te-preview-bracket-tl { position: absolute; top: -1px; left: -1px; width: 6px; height: 6px; border-top: 2px solid var(--te-text); border-left: 2px solid var(--te-text); }
  .te-preview-bracket-br { position: absolute; bottom: -1px; right: -1px; width: 6px; height: 6px; border-bottom: 2px solid var(--te-text); border-right: 2px solid var(--te-text); }

  .te-preview-btn {
    background: var(--te-text);
    color: white;
    font-size: 10px;
    padding: 4px 8px;
    border: none;
    display: inline-block;
    margin-top: 8px;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="te-preview">
        <div className="te-preview-grid"></div>
        <div>
          <div className="te-preview-title">Editorial</div>
          <div className="te-preview-sub">System v2.0</div>
        </div>
        
        <div className="te-preview-card">
          <div className="te-preview-bracket-tl"></div>
          <div className="te-preview-bracket-br"></div>
          <div style={{ fontSize: '10px', fontWeight: 'bold' }}>DATA_STREAM</div>
          <div style={{ fontSize: '8px', marginTop: '4px', color: '#666' }}>Active monitoring</div>
        </div>

        <button className="te-preview-btn">EXECUTE_</button>
      </div>
    </>
  );
}
