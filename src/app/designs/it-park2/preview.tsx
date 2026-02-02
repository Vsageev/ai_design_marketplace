import React from 'react';

export const metadata = {
  id: 'it-park2',
  name: 'IT Park 2',
  description: 'Updated tech education design with 3D elements, faceted glass textures, and a vibrant multi-color palette. Focused on modern 3D aesthetics.',
  tags: ['Education', '3D', 'Tech', 'Vibrant', 'Modern'],
};

const previewStyles = `
  .itp2-preview {
    --cream-base: #FFF6EB;
    --red-primary: #E51537;
    --orange-primary: #FE4A00;
    --black: #000000;
    --white: #FFFFFF;
    --navy: #121856;

    font-family: 'Geist', 'Inter', sans-serif;
    background: var(--cream-base);
    padding: 12px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    overflow: hidden;
  }

  .itp2-preview-glass {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 18px,
      rgba(254, 74, 0, 0.03) 18px,
      rgba(254, 74, 0, 0.03) 20px
    );
    pointer-events: none;
  }

  .itp2-preview-marketing {
    background: linear-gradient(135deg, var(--orange-primary) 0%, var(--red-primary) 100%);
    border-radius: 12px;
    padding: 12px;
    color: var(--white);
    text-align: center;
    position: relative;
    overflow: hidden;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .itp2-preview-marketing::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 12px,
      rgba(255, 255, 255, 0.08) 12px,
      rgba(255, 255, 255, 0.08) 14px
    );
  }

  .itp2-preview-logo {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 4px;
    position: relative;
  }

  .itp2-preview-icon {
    width: 28px;
    height: 20px;
    background: var(--white);
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 2px;
    padding: 3px;
  }

  .itp2-preview-key {
    background: var(--orange-primary);
    border-radius: 1px;
  }

  .itp2-preview-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .itp2-preview-3d {
    width: 50px;
    height: 50px;
    background: radial-gradient(circle at 30% 30%, var(--white), transparent), 
                var(--orange-primary);
    border-radius: 50%;
    box-shadow: 10px 10px 20px rgba(0,0,0,0.2),
                inset -5px -5px 10px rgba(0,0,0,0.3);
    margin: 10px 0;
    position: relative;
  }

  .itp2-preview-tags {
    display: flex;
    gap: 4px;
    margin-top: 8px;
  }

  .itp2-preview-tag {
    font-size: 8px;
    font-weight: 600;
    padding: 2px 8px;
    border: 1px solid var(--white);
    border-radius: 20px;
  }

  .itp2-preview-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .itp2-preview-info-card {
    background: var(--white);
    border-radius: 8px;
    padding: 8px;
    width: 100%;
    border: 1px solid rgba(0,0,0,0.05);
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }

  .itp2-preview-info-title {
    font-size: 11px;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 4px;
  }

  .itp2-preview-capsule {
    display: inline-block;
    font-size: 7px;
    font-weight: 600;
    padding: 2px 6px;
    border: 1px solid var(--black);
    border-radius: 20px;
    margin-right: 3px;
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="itp2-preview">
        <div className="itp2-preview-glass"></div>
        <div className="itp2-preview-marketing">
          <div className="itp2-preview-logo">
            <div className="itp2-preview-icon">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="itp2-preview-key"></div>
              ))}
            </div>
            <span className="itp2-preview-title">IT-PARK</span>
          </div>
          <div className="itp2-preview-3d"></div>
          <div className="itp2-preview-tags">
            <span className="itp2-preview-tag">Marketing</span>
            <span className="itp2-preview-tag">3D Render</span>
          </div>
        </div>
        <div className="itp2-preview-info-card">
          <div className="itp2-preview-info-title">Course Program</div>
          <div className="itp2-preview-capsule">Java</div>
          <div className="itp2-preview-capsule">Spring</div>
          <div className="itp2-preview-capsule">React</div>
        </div>
      </div>
    </>
  );
}
