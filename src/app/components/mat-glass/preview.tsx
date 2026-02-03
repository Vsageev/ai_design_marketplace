import React from 'react';

export const metadata = {
  id: 'mat-glass',
  name: 'Mat Glass',
  description: 'Frosted glassmorphism panels with layered blur, edge highlights, and variable frost density.',
  tags: ['Component', 'Glassmorphism', 'Cards', 'Overlay'],
};

const previewStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

  .mg-prev {
    font-family: 'DM Sans', sans-serif;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: #edf1f7;
  }

  .mg-prev-cards {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 7px;
    padding: 14px 12px;
    height: 100%;
    align-items: stretch;
  }

  .mg-prev-card {
    border-radius: 8px;
    padding: 10px 9px;
    backdrop-filter: blur(14px) saturate(150%);
    -webkit-backdrop-filter: blur(14px) saturate(150%);
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(23, 23, 23, 0.07);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.45),
      0 8px 20px rgba(15, 23, 42, 0.06);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .mg-prev-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
  }

  .mg-prev-card:nth-child(2) {
    backdrop-filter: blur(20px) saturate(170%);
    -webkit-backdrop-filter: blur(20px) saturate(170%);
    background: rgba(255, 255, 255, 0.16);
    border-color: rgba(23, 23, 23, 0.05);
    grid-row: 1 / 3;
    grid-column: 2;
  }

  .mg-prev-card:nth-child(3) {
    backdrop-filter: blur(10px) saturate(130%);
    -webkit-backdrop-filter: blur(10px) saturate(130%);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(23, 23, 23, 0.05);
  }

  .mg-prev-icon {
    width: 18px;
    height: 18px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(0, 0, 0, 0.06);
  }

  .mg-prev-title {
    font-size: 8px;
    font-weight: 600;
    color: #1e293b;
    line-height: 1.2;
  }

  .mg-prev-line {
    height: 2.5px;
    border-radius: 2px;
    background: rgba(15, 23, 42, 0.08);
    margin-top: auto;
  }

  .mg-prev-line.s { width: 55%; }
  .mg-prev-line.m { width: 75%; }

  .mg-prev-stats {
    display: flex;
    gap: 8px;
    margin-top: auto;
  }

  .mg-prev-stat-val {
    font-size: 9px;
    font-weight: 600;
    color: #2563eb;
    font-family: ui-monospace, SFMono-Regular, monospace;
    line-height: 1;
  }

  .mg-prev-stat-lbl {
    font-size: 5px;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    line-height: 1;
    margin-top: 1px;
  }

  .mg-prev-badge {
    font-size: 5.5px;
    font-weight: 600;
    padding: 2px 5px;
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.6);
    color: #64748b;
    border: 1px solid rgba(0, 0, 0, 0.06);
    align-self: flex-start;
  }

`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="mg-prev">
        <div className="mg-prev-cards">
          <div className="mg-prev-card">
            <div className="mg-prev-icon">&#x2728;</div>
            <div className="mg-prev-title">Ethereal Metrics</div>
            <div className="mg-prev-line m" />
            <div className="mg-prev-line s" />
          </div>
          <div className="mg-prev-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="mg-prev-icon">&#x26a1;</div>
              <div className="mg-prev-badge">Widget</div>
            </div>
            <div className="mg-prev-title">Signal Processor</div>
            <div className="mg-prev-line" />
            <div className="mg-prev-line m" />
            <div className="mg-prev-line s" />
            <div className="mg-prev-stats">
              <div>
                <div className="mg-prev-stat-val">340ms</div>
                <div className="mg-prev-stat-lbl">Latency</div>
              </div>
              <div>
                <div className="mg-prev-stat-val">12M</div>
                <div className="mg-prev-stat-lbl">Events</div>
              </div>
            </div>
          </div>
          <div className="mg-prev-card">
            <div className="mg-prev-icon">&#x1f310;</div>
            <div className="mg-prev-title">Network Lens</div>
            <div className="mg-prev-line" />
            <div className="mg-prev-line s" />
          </div>
        </div>
      </div>
    </>
  );
}
