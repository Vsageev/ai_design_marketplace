# Animated Comment Thread

A lively, high-clarity comment component that highlights conversation flow, reply depth, and status states. The design leans on soft shadows, warm neutrals, and precise motion to make new activity feel alive without being noisy.

## Component Anatomy
- Container: conversation surface with a subtle gradient background.
- Comment card: author header, timestamp, message body, and action row.
- Reply rail: a vertical line and offset spacing to indicate nesting.
- Status chips: "New", "Resolved", "Pinned".
- Composer: input row with avatar, text field, and submit button.

## Layout & Spacing
- Outer padding: 32px desktop, 20px mobile.
- Comment card padding: 16px 18px.
- Card gap: 12px between siblings, 8px between replies.
- Reply indentation: 24px with a 2px rail.
- Action row spacing: 10px between buttons.

## Typography
- Primary font: "Plus Jakarta Sans", 400/500/600.
- Author name: 15px / 600.
- Timestamp: 12px / 500, muted tone.
- Body text: 14px / 1.5.
- Action labels: 12px / 600, uppercase tracking 0.04em.

## Color Tokens
- Surface: #F8F6F2
- Surface gradient: #F8F6F2 -> #EFE9E1
- Card: #FFFFFF
- Ink: #1F1B16
- Muted: #6E625A
- Accent: #FF6B4A
- Accent soft: rgba(255, 107, 74, 0.15)
- Rail: rgba(31, 27, 22, 0.12)
- Success: #16A34A
- Warning: #F59E0B
- Info: #2563EB

## Motion & Interaction
- New comment: fade-in + rise (240ms, ease-out).
- Hover: subtle lift (translateY(-2px)) and shadow increase.
- Action buttons: color fill on hover, no scale.
- Reduced motion: disable transforms, keep opacity transitions.

## States
- New: orange chip + soft accent background.
- Resolved: green chip + muted opacity on body.
- Pinned: blue chip + subtle border.

## Accessibility
- Minimum contrast: 4.5:1 for body text.
- Focus ring: 2px accent outline for interactive elements.
- Hit targets: at least 36px height.

## Do / Don't
- Do keep reply depth to 2-3 levels for readability.
- Do emphasize authorship before timestamp.
- Don't animate more than the newest two comments.
- Don't use full-width borders; keep cards floating.
