import React from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&display=swap');

  .prc-root {
    --bg: #1a0f13;
    --ink: #fef6f6;
    --muted: #e0b8bf;
    --pulse-color: rgba(255, 92, 125, 0.5);

    font-family: 'Fraunces', serif;
    background: radial-gradient(900px 520px at 20% -10%, rgba(255, 92, 125, 0.18), transparent 60%),
      var(--bg);
    color: var(--ink);
    min-height: 100vh;
    padding: 56px 24px 80px;
  }

  .prc-container {
    max-width: 1100px;
    margin: 0 auto;
  }

  .prc-card {
    position: relative;
    border-radius: 20px;
    padding: 36px;
    background: rgba(27, 16, 21, 0.9);
    border: 1px solid rgba(255, 92, 125, 0.3);
    overflow: hidden;
    display: grid;
    gap: 12px;
  }

  .prc-card h1 {
    margin: 0;
    font-size: 38px;
  }

  .prc-card p {
    margin: 0;
    color: var(--muted);
    max-width: 520px;
    line-height: 1.6;
  }

  .prc-action {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 18px;
    border-radius: 999px;
    background: #ff5c7d;
    color: #1a0f13;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    overflow: hidden;
  }

  .prc-action::before,
  .prc-action::after {
    content: '';
    position: absolute;
    inset: -12px;
    border-radius: 999px;
    border: 1px solid var(--pulse-color);
    animation: prcPulse 2.6s ease-out infinite;
    opacity: 0.6;
  }

  .prc-action::after {
    animation-delay: 1.3s;
  }

  .prc-action:hover::before,
  .prc-action:hover::after {
    animation-duration: 1.8s;
  }

  @keyframes prcPulse {
    0% {
      transform: scale(0.7);
      opacity: 0.7;
    }
    70% {
      opacity: 0;
    }
    100% {
      transform: scale(1.6);
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .prc-action::before,
    .prc-action::after {
      animation: none;
      opacity: 0;
    }
  }
`;

export default function PulseRingCtaPage() {
  return (
    <>
      <style>{cssStyles}</style>
      <section className="prc-root">
        <div className="prc-container">
          <div className="prc-card">
            <h1>Pulse Ring CTA</h1>
            <p>Layered pulse rings make the CTA feel alive without overwhelming the content.</p>
            <button className="prc-action" type="button">
              Start the Run
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
