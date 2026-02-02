'use client';

import React, { useEffect, useState } from 'react';

const cssStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .demo-container {
    --bg-primary: #000000;
    --bg-secondary: #0a0a0a;
    --bg-card: #111111;
    --bg-elevated: #161616;

    --border-subtle: rgba(255, 255, 255, 0.08);
    --border-default: rgba(255, 255, 255, 0.12);
    --border-hover: rgba(255, 255, 255, 0.2);

    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.6);
    --text-tertiary: rgba(255, 255, 255, 0.4);

    --accent-purple: #a78bfa;
    --accent-purple-bg: rgba(139, 92, 246, 0.15);
    --accent-green: #86efac;
    --accent-green-bg: rgba(34, 197, 94, 0.15);
    --accent-yellow: #fde047;
    --accent-yellow-bg: rgba(234, 179, 8, 0.15);
    --accent-blue: #93c5fd;
    --accent-blue-bg: rgba(59, 130, 246, 0.15);
    --accent-red: #fca5a5;
    --accent-red-bg: rgba(239, 68, 68, 0.15);

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    min-height: 100vh;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* Animation Keyframes */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideInFromBottom {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes typewriter {
    from { width: 0; }
    to { width: 100%; }
  }

  @keyframes blink {
    50% { border-color: transparent; }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes progressFill {
    from { width: 0%; }
    to { width: 72%; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(167, 139, 250, 0.3); }
    50% { box-shadow: 0 0 40px rgba(167, 139, 250, 0.6); }
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes countUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Scene Container */
  .scene {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.8s ease;
  }

  .scene.active {
    opacity: 1;
    pointer-events: auto;
  }

  /* Scene 1: Hero */
  .hero-scene {
    flex-direction: column;
    text-align: center;
    padding: 40px;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: var(--accent-purple-bg);
    border: 1px solid rgba(167, 139, 250, 0.3);
    border-radius: 100px;
    font-size: 13px;
    color: var(--accent-purple);
    margin-bottom: 32px;
    opacity: 0;
  }

  .hero-badge.animate {
    animation: scaleIn 0.6s ease forwards;
  }

  .hero-title {
    font-size: 72px;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin-bottom: 24px;
    background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 0;
  }

  .hero-title.animate {
    animation: fadeInUp 0.8s ease 0.3s forwards;
  }

  .hero-subtitle {
    font-size: 20px;
    color: var(--text-secondary);
    max-width: 500px;
    line-height: 1.6;
    margin-bottom: 40px;
    opacity: 0;
  }

  .hero-subtitle.animate {
    animation: fadeInUp 0.8s ease 0.5s forwards;
  }

  .hero-buttons {
    display: flex;
    gap: 16px;
    opacity: 0;
  }

  .hero-buttons.animate {
    animation: fadeInUp 0.8s ease 0.7s forwards;
  }

  /* Buttons */
  .btn {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 500;
    padding: 14px 28px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .btn-primary {
    background: var(--text-primary);
    color: var(--bg-primary);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 40px rgba(255, 255, 255, 0.2);
  }

  .btn-secondary {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid var(--border-default);
  }

  .btn-secondary:hover {
    border-color: var(--border-hover);
    color: var(--text-primary);
  }

  /* Scene 2: Components Showcase */
  .components-scene {
    padding: 60px;
    flex-direction: column;
    gap: 40px;
    overflow-y: auto;
    max-height: 100vh;
  }

  .component-row {
    display: flex;
    gap: 24px;
    width: 100%;
    max-width: 1200px;
  }

  /* Cards */
  .card {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 16px;
    overflow: hidden;
    flex: 1;
    opacity: 0;
  }

  .card.animate {
    animation: fadeInUp 0.6s ease forwards;
  }

  .card:nth-child(1).animate { animation-delay: 0s; }
  .card:nth-child(2).animate { animation-delay: 0.15s; }
  .card:nth-child(3).animate { animation-delay: 0.3s; }

  .card-header {
    padding: 16px 20px;
    background: var(--bg-elevated);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-subtle);
  }

  .card-header-title {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-secondary);
  }

  .card-body {
    padding: 20px;
  }

  .card-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 8px;
  }

  .card-text {
    font-size: 14px;
    color: var(--text-tertiary);
    margin-bottom: 16px;
  }

  /* Badges */
  .badge {
    display: inline-flex;
    align-items: center;
    padding: 5px 12px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
  }

  .badge-purple { background: var(--accent-purple-bg); color: var(--accent-purple); }
  .badge-blue { background: var(--accent-blue-bg); color: var(--accent-blue); }
  .badge-green { background: var(--accent-green-bg); color: var(--accent-green); }
  .badge-yellow { background: var(--accent-yellow-bg); color: var(--accent-yellow); }
  .badge-red { background: var(--accent-red-bg); color: var(--accent-red); }

  /* Scene 3: Stats Dashboard */
  .stats-scene {
    flex-direction: column;
    padding: 60px;
    gap: 40px;
  }

  .stats-title {
    font-size: 32px;
    font-weight: 600;
    color: var(--text-primary);
    opacity: 0;
  }

  .stats-title.animate {
    animation: fadeInUp 0.6s ease forwards;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1000px;
  }

  .stat-card {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 16px;
    padding: 28px;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .stat-card.animate {
    animation: scaleIn 0.5s ease forwards;
  }

  .stat-card:nth-child(1).animate { animation-delay: 0.1s; }
  .stat-card:nth-child(2).animate { animation-delay: 0.2s; }
  .stat-card:nth-child(3).animate { animation-delay: 0.3s; }
  .stat-card:nth-child(4).animate { animation-delay: 0.4s; }

  .stat-card:hover {
    transform: translateY(-4px);
    border-color: var(--border-hover);
  }

  .stat-label {
    font-size: 13px;
    color: var(--text-tertiary);
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .stat-value {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text-primary);
  }

  .stat-value.purple { color: var(--accent-purple); }
  .stat-value.green { color: var(--accent-green); }
  .stat-value.blue { color: var(--accent-blue); }
  .stat-value.yellow { color: var(--accent-yellow); }

  /* Scene 4: Alerts */
  .alerts-scene {
    flex-direction: column;
    padding: 60px;
    gap: 20px;
    max-width: 600px;
  }

  .alert {
    padding: 16px 20px;
    border-radius: 12px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid;
    opacity: 0;
    width: 100%;
  }

  .alert.animate {
    animation: slideInFromBottom 0.5s ease forwards;
  }

  .alert:nth-child(1).animate { animation-delay: 0s; }
  .alert:nth-child(2).animate { animation-delay: 0.2s; }
  .alert:nth-child(3).animate { animation-delay: 0.4s; }
  .alert:nth-child(4).animate { animation-delay: 0.6s; }

  .alert-success {
    background: var(--accent-green-bg);
    color: var(--accent-green);
    border-color: rgba(34, 197, 94, 0.3);
  }

  .alert-error {
    background: var(--accent-red-bg);
    color: var(--accent-red);
    border-color: rgba(239, 68, 68, 0.3);
  }

  .alert-warning {
    background: var(--accent-yellow-bg);
    color: var(--accent-yellow);
    border-color: rgba(234, 179, 8, 0.3);
  }

  .alert-info {
    background: var(--accent-blue-bg);
    color: var(--accent-blue);
    border-color: rgba(59, 130, 246, 0.3);
  }

  .alert-icon {
    font-size: 18px;
  }

  /* Scene 5: Progress */
  .progress-scene {
    flex-direction: column;
    padding: 60px;
    gap: 40px;
    max-width: 700px;
    width: 100%;
  }

  .progress-title {
    font-size: 28px;
    font-weight: 600;
    color: var(--text-primary);
    opacity: 0;
  }

  .progress-title.animate {
    animation: fadeInUp 0.6s ease forwards;
  }

  .progress-items {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
  }

  .progress-item {
    opacity: 0;
  }

  .progress-item.animate {
    animation: fadeInLeft 0.5s ease forwards;
  }

  .progress-item:nth-child(1).animate { animation-delay: 0.2s; }
  .progress-item:nth-child(2).animate { animation-delay: 0.4s; }
  .progress-item:nth-child(3).animate { animation-delay: 0.6s; }

  .progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .progress-label {
    font-size: 14px;
    color: var(--text-secondary);
  }

  .progress-value {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: var(--bg-elevated);
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 1.5s ease;
  }

  .progress-fill.purple { background: var(--accent-purple); }
  .progress-fill.green { background: var(--accent-green); }
  .progress-fill.blue { background: var(--accent-blue); }

  /* Scene 6: Final */
  .final-scene {
    flex-direction: column;
    text-align: center;
    gap: 24px;
  }

  .final-logo {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: 700;
    opacity: 0;
  }

  .final-logo.animate {
    animation: scaleIn 0.6s ease forwards, glow 2s ease infinite 0.6s;
  }

  .final-title {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.02em;
    opacity: 0;
  }

  .final-title.animate {
    animation: fadeInUp 0.6s ease 0.3s forwards;
  }

  .final-subtitle {
    font-size: 18px;
    color: var(--text-secondary);
    opacity: 0;
  }

  .final-subtitle.animate {
    animation: fadeInUp 0.6s ease 0.5s forwards;
  }

  /* Progress Indicator */
  .demo-progress {
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 12px;
    z-index: 100;
  }

  .progress-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--bg-elevated);
    border: 1px solid var(--border-default);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .progress-dot.active {
    background: var(--text-primary);
    border-color: var(--text-primary);
    transform: scale(1.2);
  }

  .progress-dot:hover {
    border-color: var(--text-primary);
  }

  /* Play/Pause Button */
  .control-button {
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--bg-card);
    border: 1px solid var(--border-default);
    color: var(--text-primary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: all 0.2s ease;
    z-index: 100;
  }

  .control-button:hover {
    background: var(--bg-elevated);
    border-color: var(--border-hover);
    transform: scale(1.05);
  }

  /* Replay Button */
  .replay-button {
    position: fixed;
    bottom: 40px;
    left: 40px;
    padding: 12px 24px;
    border-radius: 10px;
    background: var(--bg-card);
    border: 1px solid var(--border-default);
    color: var(--text-secondary);
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;
    z-index: 100;
  }

  .replay-button:hover {
    background: var(--bg-elevated);
    border-color: var(--border-hover);
    color: var(--text-primary);
  }
`;

const SCENE_DURATION = 4000; // 4 seconds per scene
const TOTAL_SCENES = 6;

export default function AnimatedDemo() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animateElements, setAnimateElements] = useState(false);
  const [progressValues, setProgressValues] = useState([0, 0, 0]);

  useEffect(() => {
    // Start animations when scene changes
    setAnimateElements(false);
    setTimeout(() => setAnimateElements(true), 100);

    // Animate progress bars in scene 5
    if (currentScene === 4) {
      setTimeout(() => {
        setProgressValues([85, 62, 94]);
      }, 800);
    } else {
      setProgressValues([0, 0, 0]);
    }
  }, [currentScene]);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % TOTAL_SCENES);
    }, SCENE_DURATION);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleReplay = () => {
    setCurrentScene(0);
    setIsPlaying(true);
  };

  const handleDotClick = (index: number) => {
    setCurrentScene(index);
  };

  return (
    <>
      <style>{cssStyles}</style>
      <div className="demo-container">
        {/* Scene 1: Hero */}
        <div className={`scene hero-scene ${currentScene === 0 ? 'active' : ''}`}>
          <div className={`hero-badge ${animateElements && currentScene === 0 ? 'animate' : ''}`}>
            <span>NEW</span>
            <span>Minimalist Black Design System</span>
          </div>
          <h1 className={`hero-title ${animateElements && currentScene === 0 ? 'animate' : ''}`}>
            Linear Dark
          </h1>
          <p className={`hero-subtitle ${animateElements && currentScene === 0 ? 'animate' : ''}`}>
            A modern dark design system inspired by Linear. Clean interfaces,
            subtle borders, and refined interactions.
          </p>
          <div className={`hero-buttons ${animateElements && currentScene === 0 ? 'animate' : ''}`}>
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">View Docs</button>
          </div>
        </div>

        {/* Scene 2: Cards */}
        <div className={`scene components-scene ${currentScene === 1 ? 'active' : ''}`}>
          <div className="component-row">
            <div className={`card ${animateElements && currentScene === 1 ? 'animate' : ''}`}>
              <div className="card-header">
                <span className="card-header-title">Engineering</span>
                <span className="badge badge-purple">ENG-135</span>
              </div>
              <div className="card-body">
                <div className="card-title">Refactor sonic crawler</div>
                <div className="card-text">Optimize performance and memory usage</div>
              </div>
            </div>

            <div className={`card ${animateElements && currentScene === 1 ? 'animate' : ''}`}>
              <div className="card-header">
                <span className="card-header-title">Design</span>
                <span className="badge badge-blue">DES-089</span>
              </div>
              <div className="card-body">
                <div className="card-title">Update component library</div>
                <div className="card-text">Refresh design tokens and spacing</div>
              </div>
            </div>

            <div className={`card ${animateElements && currentScene === 1 ? 'animate' : ''}`}>
              <div className="card-header">
                <span className="card-header-title">Product</span>
                <span className="badge badge-green">PRD-042</span>
              </div>
              <div className="card-body">
                <div className="card-title">Launch new onboarding</div>
                <div className="card-text">Improve user activation rates</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scene 3: Stats */}
        <div className={`scene stats-scene ${currentScene === 2 ? 'active' : ''}`}>
          <h2 className={`stats-title ${animateElements && currentScene === 2 ? 'animate' : ''}`}>
            Dashboard Overview
          </h2>
          <div className="stats-grid">
            <div className={`stat-card ${animateElements && currentScene === 2 ? 'animate' : ''}`}>
              <div className="stat-label">Active Issues</div>
              <div className="stat-value purple">847</div>
            </div>
            <div className={`stat-card ${animateElements && currentScene === 2 ? 'animate' : ''}`}>
              <div className="stat-label">Completed</div>
              <div className="stat-value green">2.4K</div>
            </div>
            <div className={`stat-card ${animateElements && currentScene === 2 ? 'animate' : ''}`}>
              <div className="stat-label">Cycle Time</div>
              <div className="stat-value blue">3.2d</div>
            </div>
            <div className={`stat-card ${animateElements && currentScene === 2 ? 'animate' : ''}`}>
              <div className="stat-label">Velocity</div>
              <div className="stat-value yellow">+18%</div>
            </div>
          </div>
        </div>

        {/* Scene 4: Alerts */}
        <div className={`scene alerts-scene ${currentScene === 3 ? 'active' : ''}`}>
          <div className={`alert alert-success ${animateElements && currentScene === 3 ? 'animate' : ''}`}>
            <span className="alert-icon">✓</span>
            <span>Issue ENG-135 has been successfully resolved</span>
          </div>
          <div className={`alert alert-info ${animateElements && currentScene === 3 ? 'animate' : ''}`}>
            <span className="alert-icon">ℹ</span>
            <span>Linear Reviews is now available in beta</span>
          </div>
          <div className={`alert alert-warning ${animateElements && currentScene === 3 ? 'animate' : ''}`}>
            <span className="alert-icon">⚠</span>
            <span>This issue has been open for over 30 days</span>
          </div>
          <div className={`alert alert-error ${animateElements && currentScene === 3 ? 'animate' : ''}`}>
            <span className="alert-icon">✕</span>
            <span>Failed to sync with repository</span>
          </div>
        </div>

        {/* Scene 5: Progress */}
        <div className={`scene progress-scene ${currentScene === 4 ? 'active' : ''}`}>
          <h2 className={`progress-title ${animateElements && currentScene === 4 ? 'animate' : ''}`}>
            Sprint Progress
          </h2>
          <div className="progress-items">
            <div className={`progress-item ${animateElements && currentScene === 4 ? 'animate' : ''}`}>
              <div className="progress-header">
                <span className="progress-label">Engineering</span>
                <span className="progress-value">{progressValues[0]}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill purple" style={{ width: `${progressValues[0]}%` }}></div>
              </div>
            </div>
            <div className={`progress-item ${animateElements && currentScene === 4 ? 'animate' : ''}`}>
              <div className="progress-header">
                <span className="progress-label">Design</span>
                <span className="progress-value">{progressValues[1]}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill green" style={{ width: `${progressValues[1]}%` }}></div>
              </div>
            </div>
            <div className={`progress-item ${animateElements && currentScene === 4 ? 'animate' : ''}`}>
              <div className="progress-header">
                <span className="progress-label">Product</span>
                <span className="progress-value">{progressValues[2]}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill blue" style={{ width: `${progressValues[2]}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scene 6: Final */}
        <div className={`scene final-scene ${currentScene === 5 ? 'active' : ''}`}>
          <div className={`final-logo ${animateElements && currentScene === 5 ? 'animate' : ''}`}>
            L
          </div>
          <h2 className={`final-title ${animateElements && currentScene === 5 ? 'animate' : ''}`}>
            Linear Dark
          </h2>
          <p className={`final-subtitle ${animateElements && currentScene === 5 ? 'animate' : ''}`}>
            Built for modern product teams
          </p>
        </div>

        {/* Controls */}
        <div className="demo-progress">
          {Array.from({ length: TOTAL_SCENES }).map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${currentScene === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>

        <button className="control-button" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? '⏸' : '▶'}
        </button>

        <button className="replay-button" onClick={handleReplay}>
          ↺ Replay
        </button>
      </div>
    </>
  );
}
