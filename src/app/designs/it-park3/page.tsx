import React from 'react';

const cssStyles = `
  @import url('https://fonts.cdnfonts.com/css/geist');

  .showcase {
    /* Primary Colors (60%) */
    --red-primary: #E51537;
    --orange-primary: #FE4A00;
    --cream-base: #FFF6EB;

    /* Secondary Colors (30%) */
    --lime: #DAFF02;
    --cyan: #00A1F1;
    --blue: #1D57F6;
    --navy: #121856;

    /* Tertiary Colors (10%) */
    --pink: #FD73ED;
    --purple: #7F59E9;
    --lavender: #DCB8FE;
    --magenta: #FD0377;

    /* Neutrals */
    --white: #FFFFFF;
    --black: #000000;
    --gray: #4A4A4A;
    --light-gray: #8A8A8A;

    /* Typography */
    --font-primary: 'Geist', 'Inter', 'Helvetica Neue', sans-serif;

    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 48px;
    --grid-padding: 70px;
    --grid-gutter: 20px;

    /* Border Radius */
    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 24px;
    --radius-xl: 32px;
    --radius-pill: 50px;

    background: var(--cream-base);
    color: var(--black);
    font-family: var(--font-primary);
    padding: 40px;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
  }

  /* Subtle faceted glass texture on page background */
  .showcase::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 28px,
      rgba(254, 74, 0, 0.03) 28px,
      rgba(254, 74, 0, 0.03) 30px
    );
    pointer-events: none;
    opacity: 0.7;
    z-index: 1;
  }

  .showcase > * {
    position: relative;
    z-index: 2;
  }

  /* Section Styling */
  .section {
    margin-bottom: var(--spacing-xl);
    background: var(--white);
    border-radius: var(--radius-xl);
    padding: var(--spacing-lg);
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.06);
  }

  .section-title {
    font-size: 36px;
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: 0;
    margin-bottom: var(--spacing-lg);
    color: var(--black);
  }

  .section-subtitle {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.05;
    color: var(--gray);
    margin-bottom: var(--spacing-lg);
  }

  /* Hero - Marketing Layout with gradient + faceted glass texture */
  .hero {
    background: linear-gradient(135deg, var(--orange-primary) 0%, var(--red-primary) 100%);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl) var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
    position: relative;
    overflow: hidden;
    color: var(--white);
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 18px,
      rgba(255, 255, 255, 0.06) 18px,
      rgba(255, 255, 255, 0.06) 20px
    );
    pointer-events: none;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
  }

  .hero-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
  }

  /* Keyboard icon */
  .hero-logo-icon {
    width: 80px;
    height: 52px;
    background: var(--white);
    border-radius: var(--radius-sm);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 5px;
    padding: 10px;
  }

  .hero-logo-key {
    background: var(--orange-primary);
    border-radius: 3px;
  }

  .hero-title {
    font-size: 80px;
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: 0;
    margin-bottom: var(--spacing-sm);
  }

  .hero-subtitle {
    font-size: 26px;
    font-weight: 400;
    line-height: 1.05;
    opacity: 0.9;
    margin-bottom: var(--spacing-lg);
  }

  /* Tags/Capsules - Light background version (black stroke) */
  .tag-container {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
    justify-content: center;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    padding: 12px 24px;
    border: 2px solid var(--black);
    border-radius: var(--radius-pill);
    font-size: 16px;
    font-weight: 600;
    background: transparent;
    color: var(--black);
    transition: all 0.2s ease;
  }

  .tag:hover {
    background: var(--black);
    color: var(--white);
  }

  /* Tags on dark backgrounds (white stroke, no color differentiation) */
  .tag-light {
    border-color: var(--white);
    color: var(--white);
  }

  .tag-light:hover {
    background: var(--white);
    color: var(--orange-primary);
  }

  /* Colored tag variants for light backgrounds */
  .tag-blue {
    border-color: var(--blue);
    color: var(--blue);
  }

  .tag-blue:hover {
    background: var(--blue);
    color: var(--white);
  }

  .tag-orange {
    border-color: var(--orange-primary);
    color: var(--orange-primary);
  }

  .tag-orange:hover {
    background: var(--orange-primary);
    color: var(--white);
  }

  /* Buttons */
  .btn {
    font-family: var(--font-primary);
    font-size: 16px;
    font-weight: 600;
    padding: 16px 32px;
    border-radius: var(--radius-pill);
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.15);
  }

  .btn-primary {
    background: var(--orange-primary);
    color: var(--white);
  }

  .btn-red {
    background: var(--red-primary);
    color: var(--white);
  }

  .btn-secondary {
    background: var(--black);
    color: var(--white);
  }

  .btn-outline {
    background: transparent;
    color: var(--black);
    border: 2px solid var(--black);
  }

  .btn-outline:hover:not(:disabled) {
    background: var(--black);
    color: var(--white);
  }

  .btn-lime {
    background: var(--lime);
    color: var(--black);
  }

  .btn-blue {
    background: var(--blue);
    color: var(--white);
  }

  .btn-navy {
    background: var(--navy);
    color: var(--white);
  }

  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Color Palette */
  .color-section {
    margin-bottom: var(--spacing-lg);
  }

  .color-section-title {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--gray);
    margin-bottom: var(--spacing-md);
  }

  .color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: var(--spacing-md);
  }

  .color-swatch {
    border-radius: var(--radius-md);
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.08);
    transition: transform 0.2s;
  }

  .color-swatch:hover {
    transform: translateY(-2px);
  }

  .color-box {
    width: 100%;
    height: 90px;
  }

  .color-info {
    padding: var(--spacing-sm) var(--spacing-md);
    background: var(--white);
  }

  .color-name {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 2px;
  }

  .color-hex {
    font-family: monospace;
    font-size: 12px;
    color: var(--light-gray);
  }

  /* Typography */
  .type-sample {
    margin-bottom: var(--spacing-lg);
    padding-bottom: var(--spacing-lg);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .type-sample:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .type-label {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--light-gray);
    letter-spacing: 0.1em;
    margin-bottom: var(--spacing-xs);
  }

  /* Typography hierarchy per brand specs */
  .h1-sample {
    font-size: 80px;
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: 0;
  }

  .h2-sample {
    font-size: 52px;
    font-weight: 700;
    line-height: 0.9;
    letter-spacing: 0;
  }

  .h3-sample {
    font-size: 36px;
    font-weight: 500;
    line-height: 1.05;
    letter-spacing: 0;
  }

  .body-large-sample {
    font-size: 22px;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: 0.02em;
  }

  .body-sample {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: 0.02em;
  }

  .caption-sample {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: 0.02em;
    color: var(--gray);
  }

  /* Button Grid */
  .button-grid {
    display: flex;
    gap: var(--spacing-md);
    flex-wrap: wrap;
    align-items: center;
  }

  /* 3D Object Showcase */
  .object-showcase {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--grid-gutter);
  }

  .object-card {
    background: linear-gradient(180deg, var(--cream-base) 0%, var(--white) 100%);
    border-radius: var(--radius-lg);
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.06);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .object-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(254, 74, 0, 0.12);
  }

  .object-3d {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, var(--orange-primary), var(--red-primary));
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    margin-bottom: var(--spacing-md);
    position: relative;
    box-shadow: 0 8px 32px rgba(254, 74, 0, 0.35);
  }

  /* 3D effect simulation */
  .object-3d::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: 12px;
    bottom: 12px;
    background: rgba(255, 255, 255, 0.35);
    border-radius: var(--radius-md);
  }

  .object-3d::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60%;
    height: 60%;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 0 0 var(--radius-lg) 0;
    filter: blur(4px);
    z-index: -1;
    transform: translate(6px, 6px);
  }

  .object-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 0.9;
    margin-bottom: var(--spacing-xs);
  }

  .object-desc {
    font-size: 13px;
    color: var(--gray);
    letter-spacing: 0.02em;
  }

  /* Cards with rounded corners per brand specs */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--grid-gutter);
  }

  .card {
    background: var(--white);
    border-radius: var(--radius-xl);
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    border: 1px solid rgba(0, 0, 0, 0.06);
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
  }

  .card-image {
    background: linear-gradient(135deg, var(--orange-primary) 0%, var(--red-primary) 100%);
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 56px;
    position: relative;
    overflow: hidden;
  }

  .card-image::before {
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

  .card-body {
    padding: var(--spacing-lg);
  }

  .card-title {
    font-size: 22px;
    font-weight: 700;
    line-height: 0.9;
    margin-bottom: var(--spacing-sm);
  }

  .card-desc {
    font-size: 14px;
    line-height: 1.1;
    letter-spacing: 0.02em;
    color: var(--gray);
    margin-bottom: var(--spacing-md);
  }

  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
  }

  .card-tag {
    font-size: 13px;
    font-weight: 600;
    padding: 8px 16px;
    border: 2px solid var(--black);
    border-radius: var(--radius-pill);
    background: transparent;
  }

  /* Forms */
  .form-group {
    margin-bottom: var(--spacing-lg);
  }

  .form-label {
    display: block;
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
    font-size: 14px;
  }

  .form-input {
    width: 100%;
    padding: 16px 20px;
    border: 2px solid rgba(0, 0, 0, 0.15);
    border-radius: var(--radius-md);
    background: var(--white);
    font-family: var(--font-primary);
    font-size: 16px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .form-input:focus {
    outline: none;
    border-color: var(--orange-primary);
    box-shadow: 0 0 0 4px rgba(254, 74, 0, 0.12);
  }

  .form-input.error {
    border-color: var(--red-primary);
  }

  .form-error {
    color: var(--red-primary);
    font-size: 13px;
    font-weight: 500;
    margin-top: var(--spacing-xs);
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .checkbox {
    width: 24px;
    height: 24px;
    background: var(--orange-primary);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 14px;
    flex-shrink: 0;
  }

  /* Select dropdown */
  .form-select {
    width: 100%;
    padding: 16px 20px;
    border: 2px solid rgba(0, 0, 0, 0.15);
    border-radius: var(--radius-md);
    background: var(--white);
    font-family: var(--font-primary);
    font-size: 16px;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234A4A4A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
  }

  .form-select:focus {
    outline: none;
    border-color: var(--orange-primary);
    box-shadow: 0 0 0 4px rgba(254, 74, 0, 0.12);
  }

  /* Alerts */
  .alert {
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-md);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .alert-success {
    background: rgba(218, 255, 2, 0.2);
    color: #4a5c00;
    border: 2px solid var(--lime);
  }

  .alert-error {
    background: rgba(229, 21, 55, 0.1);
    color: var(--red-primary);
    border: 2px solid rgba(229, 21, 55, 0.3);
  }

  .alert-warning {
    background: rgba(254, 74, 0, 0.1);
    color: #b35500;
    border: 2px solid rgba(254, 74, 0, 0.3);
  }

  .alert-info {
    background: rgba(29, 87, 246, 0.1);
    color: var(--blue);
    border: 2px solid rgba(29, 87, 246, 0.3);
  }

  /* Progress */
  .progress-bar {
    width: 100%;
    height: 14px;
    background: rgba(0, 0, 0, 0.08);
    border-radius: 100px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--orange-primary), var(--red-primary));
    border-radius: 100px;
    transition: width 0.4s ease;
  }

  .progress-label {
    display: flex;
    justify-content: space-between;
    margin-top: var(--spacing-xs);
    font-size: 13px;
    color: var(--gray);
  }

  /* Course List */
  .course-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .course-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    background: var(--cream-base);
    border-radius: var(--radius-lg);
    transition: background 0.2s;
  }

  .course-item:hover {
    background: rgba(254, 74, 0, 0.08);
  }

  .course-icon {
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, var(--orange-primary), var(--red-primary));
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(254, 74, 0, 0.25);
  }

  .course-icon::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 8px,
      rgba(255, 255, 255, 0.12) 8px,
      rgba(255, 255, 255, 0.12) 10px
    );
  }

  .course-info {
    flex: 1;
  }

  .course-title {
    font-weight: 700;
    font-size: 18px;
    line-height: 0.9;
    margin-bottom: 6px;
  }

  .course-meta {
    font-size: 13px;
    color: var(--gray);
    letter-spacing: 0.02em;
  }

  .course-badge {
    padding: 8px 16px;
    border-radius: var(--radius-pill);
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .badge-active {
    background: var(--lime);
    color: var(--black);
  }

  .badge-coming {
    background: rgba(254, 74, 0, 0.15);
    color: var(--orange-primary);
  }

  .badge-new {
    background: var(--blue);
    color: var(--white);
  }

  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--grid-gutter);
  }

  .stat-card {
    text-align: center;
    padding: var(--spacing-lg);
    background: linear-gradient(135deg, var(--orange-primary), var(--red-primary));
    border-radius: var(--radius-xl);
    color: var(--white);
    position: relative;
    overflow: hidden;
  }

  .stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.06) 10px,
      rgba(255, 255, 255, 0.06) 12px
    );
    pointer-events: none;
  }

  .stat-value {
    position: relative;
    font-size: 48px;
    font-weight: 700;
    line-height: 0.9;
    margin-bottom: var(--spacing-xs);
  }

  .stat-label {
    position: relative;
    font-size: 14px;
    opacity: 0.9;
    line-height: 1.05;
  }

  /* Informational Layout Demo */
  .info-layout {
    background: var(--cream-base);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    margin-bottom: var(--spacing-xl);
    position: relative;
    overflow: hidden;
  }

  .info-layout-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--grid-gutter);
    align-items: center;
  }

  .info-layout-text {
    text-align: left;
  }

  .info-layout-text h2 {
    font-size: 48px;
    font-weight: 700;
    line-height: 0.9;
    margin-bottom: var(--spacing-md);
  }

  .info-layout-text p {
    font-size: 18px;
    line-height: 1.1;
    letter-spacing: 0.02em;
    color: var(--gray);
    margin-bottom: var(--spacing-lg);
  }

  .info-layout-object {
    display: flex;
    justify-content: center;
  }

  .info-3d-object {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, var(--orange-primary), var(--red-primary));
    border-radius: var(--radius-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    position: relative;
    box-shadow: 0 16px 64px rgba(254, 74, 0, 0.35);
  }

  .info-3d-object::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    right: 24px;
    bottom: 24px;
    background: rgba(255, 255, 255, 0.35);
    border-radius: var(--radius-lg);
  }

  /* Marketing Layout Demo (Navy) */
  .marketing-layout {
    background: var(--navy);
    border-radius: var(--radius-xl);
    padding: var(--spacing-xl);
    margin-bottom: var(--spacing-xl);
    position: relative;
    overflow: hidden;
    color: var(--white);
  }

  .marketing-layout::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 18px,
      rgba(255, 255, 255, 0.04) 18px,
      rgba(255, 255, 255, 0.04) 20px
    );
    pointer-events: none;
  }

  .marketing-content {
    position: relative;
    z-index: 1;
    text-align: center;
  }

  .marketing-content h2 {
    font-size: 56px;
    font-weight: 700;
    line-height: 0.9;
    margin-bottom: var(--spacing-md);
  }

  .marketing-content p {
    font-size: 20px;
    opacity: 0.85;
    margin-bottom: var(--spacing-lg);
    line-height: 1.05;
  }

  /* Photo container demo */
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--grid-gutter);
  }

  .photo-container {
    border-radius: var(--radius-xl);
    overflow: hidden;
    height: 200px;
    background: linear-gradient(135deg, var(--purple), var(--magenta));
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 14px;
    font-weight: 500;
  }

  .photo-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 14px,
      rgba(255, 255, 255, 0.08) 14px,
      rgba(255, 255, 255, 0.08) 16px
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    .info-layout-content {
      grid-template-columns: 1fr;
    }

    .stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .hero-title {
      font-size: 48px;
    }

    .h1-sample {
      font-size: 48px;
    }
  }
`;

export default function ItPark3Showcase() {
  return (
    <>
      <style>{cssStyles}</style>
      <main className="showcase">
        {/* Hero - Marketing Layout with gradient + faceted glass texture */}
        <div className="hero">
          <div className="hero-content">
            <div className="hero-logo">
              <div className="hero-logo-icon">
                <div className="hero-logo-key"></div>
                <div className="hero-logo-key"></div>
                <div className="hero-logo-key"></div>
                <div className="hero-logo-key"></div>
                <div className="hero-logo-key"></div>
                <div className="hero-logo-key"></div>
                <div className="hero-logo-key"></div>
                <div className="hero-logo-key"></div>
              </div>
              <h1 className="hero-title">IT-PARK</h1>
            </div>
            <p className="hero-subtitle">Online Programming School</p>
            <div className="tag-container">
              <span className="tag tag-light">Java</span>
              <span className="tag tag-light">PostgreSQL</span>
              <span className="tag tag-light">Spring Boot</span>
              <span className="tag tag-light">Backend</span>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="section">
          <h2 className="section-title">Color Palette</h2>
          <p className="section-subtitle">60% primary, 30% secondary, 10% tertiary ratio for brand recognition</p>

          <div className="color-section">
            <div className="color-section-title">Primary Colors (60%)</div>
            <div className="color-grid">
              <div className="color-swatch">
                <div className="color-box" style={{ background: '#E51537' }}></div>
                <div className="color-info">
                  <div className="color-name">Red</div>
                  <div className="color-hex">#E51537</div>
                </div>
              </div>
              <div className="color-swatch">
                <div className="color-box" style={{ background: '#FE4A00' }}></div>
                <div className="color-info">
                  <div className="color-name">Orange</div>
                  <div className="color-hex">#FE4A00</div>
                </div>
              </div>
              <div className="color-swatch">
                <div className="color-box" style={{ background: '#FFF6EB' }}></div>
                <div className="color-info">
                  <div className="color-name">Cream</div>
                  <div className="color-hex">#FFF6EB</div>
                </div>
              </div>
            </div>
          </div>

          <div className="color-section">
            <div className="color-section-title">Secondary Colors (30%)</div>
            <div className="color-grid">
              <div className="color-swatch">
                <div className="color-box" style={{ background: '#DAFF02' }}></div>
                <div className="color-info">
                  <div className="color-name">Lime</div>
                  <div className="color-hex">#DAFF02</div>
                </div>
              </div>
              <div className="color-swatch">
                <div className="color-box" style={{ background: '#00A1F1' }}></div>
                <div className="color-info">
                  <div className="color-name">Cyan</div>
                  <div className="color-hex">#00A1F1</div>
                </div>
              </div>
              <div className="color-swatch">
                <div className="color-box" style={{ background: '#1D57F6' }}></div>
                <div className="color-info">
                  <div className="color-name">Blue</div>
                  <div className="color-hex">#1D57F6</div>
                </div>
              </div>
              <div className="color-swatch">
                <div className="color-box" style={{ background: '#121856' }}></div>
                <div className="color-info">
                  <div className="color-name">Navy</div>
                  <div className="color-hex">#121856</div>
                </div>
              </div>
            </div>
          </div>

          <div className="color-section">
            <div className="color-section-title">Tertiary Colors (10%)</div>
            <div className="color-grid">
              <div className="color-swatch">
                <div className="color-box" style={{ background: '#FD73ED' }}></div>
                <div className="color-info">
                  <div className="color-name">Pink</div>
                  <div className="color-hex">#FD73ED</div>
                </div>
              </div>
              <div className="color-swatch">
                <div className="color-box" style={{ background: '#7F59E9' }}></div>
                <div className="color-info">
                  <div className="color-name">Purple</div>
                  <div className="color-hex">#7F59E9</div>
                </div>
              </div>
              <div className="color-swatch">
                <div className="color-box" style={{ background: '#DCB8FE' }}></div>
                <div className="color-info">
                  <div className="color-name">Lavender</div>
                  <div className="color-hex">#DCB8FE</div>
                </div>
              </div>
              <div className="color-swatch">
                <div className="color-box" style={{ background: '#FD0377' }}></div>
                <div className="color-info">
                  <div className="color-name">Magenta</div>
                  <div className="color-hex">#FD0377</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="section">
          <h2 className="section-title">Typography (Geist)</h2>
          <p className="section-subtitle">Strict, geometric, sans-serif font emphasizing technology</p>

          <div className="type-sample">
            <div className="type-label">Large Heading - Bold / Line Height 90%</div>
            <div className="h1-sample">Server Application<br/>Development</div>
          </div>

          <div className="type-sample">
            <div className="type-label">Heading 2 - Bold / Line Height 90%</div>
            <div className="h2-sample">Learn Programming</div>
          </div>

          <div className="type-sample">
            <div className="type-label">Subheading - Regular/Medium / Line Height 105%</div>
            <div className="h3-sample">What students learned in a month of the course</div>
          </div>

          <div className="type-sample">
            <div className="type-label">Body Large - Regular / Line Height 110% / Letter Spacing 2%</div>
            <div className="body-large-sample">Main text for conveying meaning, decoding the main idea and transmitting information.</div>
          </div>

          <div className="type-sample">
            <div className="type-label">Body - Regular / Line Height 110% / Letter Spacing 2%</div>
            <div className="body-sample">Regular text for descriptions and content. Perfect for reading paragraphs and explanations. Our courses provide practical skills for real-world development.</div>
          </div>

          <div className="type-sample">
            <div className="type-label">Caption - Regular</div>
            <div className="caption-sample">Small text for metadata and secondary information</div>
          </div>
        </div>

        {/* Tags/Capsules */}
        <div className="section">
          <h2 className="section-title">Tags (Capsules)</h2>
          <p className="section-subtitle">Transparent background with stroke and rounded corners. Color differentiation allowed on light backgrounds only.</p>
          
          <div style={{ marginBottom: '24px' }}>
            <div className="color-section-title" style={{ marginBottom: '12px' }}>Light Background Variant</div>
            <div className="tag-container" style={{ justifyContent: 'flex-start' }}>
              <span className="tag">Java</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag tag-blue">Hibernate</span>
              <span className="tag tag-orange">Spring Boot</span>
              <span className="tag">Backend</span>
            </div>
          </div>
        </div>

        {/* 3D Graphic Objects */}
        <div className="section">
          <h2 className="section-title">3D Graphic Objects</h2>
          <p className="section-subtitle">Glossy plastic with bright reflective surfaces, bold contrasting colors, futuristic industrial look</p>
          
          <div className="object-showcase">
            <div className="object-card">
              <div className="object-3d">&#128187;</div>
              <div className="object-title">Laptop</div>
              <div className="object-desc">Tech equipment</div>
            </div>
            <div className="object-card">
              <div className="object-3d">&#9889;</div>
              <div className="object-title">Power</div>
              <div className="object-desc">Energy accent</div>
            </div>
            <div className="object-card">
              <div className="object-3d">&#128640;</div>
              <div className="object-title">Rocket</div>
              <div className="object-desc">Growth symbol</div>
            </div>
            <div className="object-card">
              <div className="object-3d">&#127919;</div>
              <div className="object-title">Target</div>
              <div className="object-desc">Goal focus</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="section">
          <h2 className="section-title">Buttons</h2>
          <div className="button-grid">
            <button className="btn btn-primary">Orange Primary</button>
            <button className="btn btn-red">Red Primary</button>
            <button className="btn btn-secondary">Black</button>
            <button className="btn btn-outline">Outline</button>
            <button className="btn btn-lime">Lime</button>
            <button className="btn btn-blue">Blue</button>
            <button className="btn btn-navy">Navy</button>
            <button className="btn btn-primary" disabled>Disabled</button>
          </div>
        </div>

        {/* Informational Layout Demo */}
        <div className="info-layout">
          <div className="info-layout-content">
            <div className="info-layout-text">
              <h2>Heading In<br/>Two Words</h2>
              <p>Main text for conveying meaning, decoding the main idea and transmitting information to the user.</p>
              <div className="tag-container" style={{ justifyContent: 'flex-start' }}>
                <span className="tag">Java</span>
                <span className="tag tag-blue">Spring</span>
                <span className="tag">Backend</span>
              </div>
            </div>
            <div className="info-layout-object">
              <div className="info-3d-object">&#128187;</div>
            </div>
          </div>
        </div>

        {/* Marketing Layout Demo */}
        <div className="marketing-layout">
          <div className="marketing-content">
            <h2>Marketing Layout</h2>
            <p>Dark background with faceted glass texture, centered text</p>
            <div className="tag-container">
              <span className="tag tag-light">React</span>
              <span className="tag tag-light">TypeScript</span>
              <span className="tag tag-light">Next.js</span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="section">
          <h2 className="section-title">Course Cards</h2>
          <div className="card-grid">
            <div className="card">
              <div className="card-image">&#9749;</div>
              <div className="card-body">
                <h3 className="card-title">Java Development</h3>
                <p className="card-desc">Build enterprise applications with Java, Spring Boot, Hibernate and PostgreSQL.</p>
                <div className="card-tags">
                  <span className="card-tag">Java</span>
                  <span className="card-tag">Spring</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-image">&#127760;</div>
              <div className="card-body">
                <h3 className="card-title">Frontend Mastery</h3>
                <p className="card-desc">Create stunning web interfaces with React, TypeScript, and modern CSS.</p>
                <div className="card-tags">
                  <span className="card-tag">React</span>
                  <span className="card-tag">TypeScript</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-image">&#128202;</div>
              <div className="card-body">
                <h3 className="card-title">Data Science</h3>
                <p className="card-desc">Analyze data and build ML models with Python, Pandas, and TensorFlow.</p>
                <div className="card-tags">
                  <span className="card-tag">Python</span>
                  <span className="card-tag">ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Usage Demo */}
        <div className="section">
          <h2 className="section-title">Photo Usage</h2>
          <p className="section-subtitle">Photos always in containers with rounded corners, max 2 per layout, no text overlay</p>
          <div className="photo-grid">
            <div className="photo-container">
              <span>Photo Container 1</span>
            </div>
            <div className="photo-container">
              <span>Photo Container 2</span>
            </div>
          </div>
        </div>

        {/* Forms */}
        <div className="section">
          <h2 className="section-title">Forms</h2>

          <div style={{ maxWidth: '500px' }}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label className="form-label">Email (Error State)</label>
              <input type="email" className="form-input error" placeholder="email@example.com" />
              <div className="form-error">Please enter a valid email address</div>
            </div>

            <div className="form-group">
              <label className="form-label">Course Selection</label>
              <select className="form-select">
                <option>Select a course</option>
                <option>Java Development</option>
                <option>Frontend Mastery</option>
                <option>Data Science</option>
              </select>
            </div>

            <div className="form-group">
              <div className="checkbox-group">
                <div className="checkbox">&#10003;</div>
                <label className="form-label" style={{ marginBottom: 0 }}>I agree to the terms and conditions</label>
              </div>
            </div>

            <button className="btn btn-primary">Submit Application</button>
          </div>
        </div>

        {/* Alerts & Progress */}
        <div className="section">
          <h2 className="section-title">Notifications & Progress</h2>

          <div style={{ maxWidth: '600px' }}>
            <div className="alert alert-success">
              &#10003; Congratulations! You have been enrolled in the course.
            </div>

            <div className="alert alert-error">
              &#10007; Payment failed. Please check your details and try again.
            </div>

            <div className="alert alert-warning">
              &#9888; Your subscription expires in 7 days.
            </div>

            <div className="alert alert-info">
              &#8505; New course materials have been added.
            </div>

            <h3 style={{ marginTop: '32px', marginBottom: '16px', fontSize: '22px', fontWeight: 700 }}>Progress</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '65%' }}></div>
            </div>
            <div className="progress-label">
              <span>Course Progress</span>
              <span>65%</span>
            </div>
          </div>
        </div>

        {/* Course List */}
        <div className="section">
          <h2 className="section-title">Course List</h2>

          <div className="course-list">
            <div className="course-item">
              <div className="course-icon">&#9749;</div>
              <div className="course-info">
                <div className="course-title">Java Backend Development</div>
                <div className="course-meta">12 weeks • 48 lessons</div>
              </div>
              <span className="course-badge badge-active">Active</span>
            </div>

            <div className="course-item">
              <div className="course-icon">&#127760;</div>
              <div className="course-info">
                <div className="course-title">Web Development Fundamentals</div>
                <div className="course-meta">8 weeks • 32 lessons</div>
              </div>
              <span className="course-badge badge-new">New</span>
            </div>

            <div className="course-item">
              <div className="course-icon">&#128200;</div>
              <div className="course-info">
                <div className="course-title">Data Analysis with Python</div>
                <div className="course-meta">10 weeks • 40 lessons</div>
              </div>
              <span className="course-badge badge-coming">Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="section">
          <h2 className="section-title">Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">5,000+</div>
              <div className="stat-label">Students Enrolled</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">50+</div>
              <div className="stat-label">Courses Available</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
