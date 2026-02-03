export const metadata = {
  id: 'tv-noise',
  name: 'TV Noise',
  description: 'Dithered spotlight shader with procedural grain and mouse-tracking via WebGL.',
  tags: ['Component', 'Shader', 'WebGL'],
};

export function PreviewComponent() {
  return (
    <div className="cs-preview">
      <div className="cs-preview-base" />
      <div className="cs-preview-dither" />
      <div className="cs-preview-spot" />
      <style>{`
        .cs-preview {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: #000;
        }
        .cs-preview-base {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #000 0%, #111 50%, #000 100%);
        }
        .cs-preview-dither {
          position: absolute;
          inset: 0;
          opacity: 0.7;
          background-image:
            repeating-linear-gradient(0deg, rgba(255,255,255,0.12) 0 1px, transparent 1px 3px),
            repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 1px, transparent 1px 4px);
          mix-blend-mode: screen;
        }
        .cs-preview-spot {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 30%, transparent 60%);
        }
      `}</style>
    </div>
  );
}
