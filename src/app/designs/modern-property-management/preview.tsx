import React from 'react';

export const metadata = {
  id: 'modern-property-management',
  name: 'Modern Property Management',
  description: 'Clean, professional design for scheduling and task management. Card-based layouts with clear status indicators.',
  tags: ['Dashboard', 'Professional', 'Cards'],
};

const previewStyles = `
  .mpm-preview {
    --pure-white: #FFFFFF;
    --light-bg: #F5F7FA;
    --soft-gray: #F8F9FB;
    --border-gray: #E1E4E8;
    --medium-gray: #6B7280;
    --charcoal: #1F2937;
    --teal-primary: #14B8A6;
    --scheduled-blue: #60A5FA;
    --scheduled-badge-bg: #DBEAFE;
    --new-purple: #8B5CF6;
    --new-badge-bg: #EDE9FE;

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--light-bg);
    padding: 12px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
  }

  .mpm-preview-nav {
    display: flex;
    gap: 12px;
    padding-bottom: 6px;
    border-bottom: 2px solid var(--border-gray);
  }

  .mpm-preview-nav-item {
    font-size: 10px;
    font-weight: 500;
    color: var(--medium-gray);
    padding: 4px 0;
    position: relative;
  }

  .mpm-preview-nav-item.active {
    color: var(--charcoal);
  }

  .mpm-preview-nav-item.active::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--teal-primary);
  }

  .mpm-preview-cards {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }

  .mpm-preview-card {
    background: var(--pure-white);
    border: 1px solid var(--border-gray);
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;
  }

  .mpm-preview-card:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  .mpm-preview-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }

  .mpm-preview-card-title {
    font-size: 11px;
    font-weight: 600;
    color: var(--charcoal);
  }

  .mpm-preview-badge {
    font-size: 9px;
    font-weight: 500;
    padding: 2px 8px;
    border-radius: 10px;
  }

  .mpm-preview-badge-scheduled {
    background: var(--scheduled-badge-bg);
    color: var(--scheduled-blue);
  }

  .mpm-preview-badge-new {
    background: var(--new-badge-bg);
    color: var(--new-purple);
  }

  .mpm-preview-card-subtitle {
    font-size: 10px;
    color: var(--medium-gray);
  }

  .mpm-preview-fab {
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--teal-primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 300;
    box-shadow: 0 2px 8px rgba(20, 184, 166, 0.4);
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .mpm-preview:hover .mpm-preview-fab {
    box-shadow: 0 4px 12px rgba(20, 184, 166, 0.5);
    transform: scale(1.05);
  }
`;

export function PreviewComponent() {
  return (
    <>
      <style>{previewStyles}</style>
      <div className="mpm-preview">
        <div className="mpm-preview-nav">
          <div className="mpm-preview-nav-item active">Calendar</div>
          <div className="mpm-preview-nav-item">Turn Board</div>
          <div className="mpm-preview-nav-item">Pro Details</div>
        </div>

        <div className="mpm-preview-cards">
          <div className="mpm-preview-card">
            <div className="mpm-preview-card-header">
              <div className="mpm-preview-card-title">Paint</div>
              <div className="mpm-preview-badge mpm-preview-badge-scheduled">Scheduled</div>
            </div>
            <div className="mpm-preview-card-subtitle">Unit 011926-1</div>
          </div>

          <div className="mpm-preview-card">
            <div className="mpm-preview-card-header">
              <div className="mpm-preview-card-title">Move Out Inspection</div>
              <div className="mpm-preview-badge mpm-preview-badge-new">New</div>
            </div>
            <div className="mpm-preview-card-subtitle">Property 1323</div>
          </div>
        </div>

        <button className="mpm-preview-fab">+</button>
      </div>
    </>
  );
}
