# Modern Property Management Design System

A clean, professional design system optimized for property management and scheduling applications. Features soft color palettes, clear status indicators, and card-based layouts for maximum readability and organization.

## Design Philosophy

This design prioritizes clarity and organization for busy property managers. The interface uses soft shadows, rounded corners, and clear status badges to create a professional yet approachable aesthetic. Cards organize information into scannable chunks, while the prominent floating action button ensures quick task creation is always accessible.

## Color Palette

### Base Colors
- **Pure White**: `#FFFFFF` - Card backgrounds, main content areas
- **Light Background**: `#F5F7FA` - Page background, subtle contrast
- **Soft Gray**: `#F8F9FB` - Secondary backgrounds, disabled states
- **Border Gray**: `#E1E4E8` - Dividers, card borders
- **Medium Gray**: `#6B7280` - Secondary text, labels
- **Charcoal**: `#1F2937` - Primary text, headings

### Accent Colors
- **Teal Primary**: `#14B8A6` - Primary actions, FAB button, active states
- **Teal Hover**: `#0F9B8A` - Hover state for primary actions
- **Ocean Blue**: `#3B82F6` - Links, informational elements

### Status Colors
- **New Purple**: `#8B5CF6` - New tasks/items indicator
- **Scheduled Blue**: `#60A5FA` - Scheduled/planned status
- **In Progress Yellow**: `#FBBF24` - Active/ongoing status
- **Expired Red**: `#F87171` - Overdue/expired status
- **Success Green**: `#10B981` - Completed/confirmed status

### Semantic Backgrounds
- **New Badge BG**: `#EDE9FE` - Purple tint background
- **Scheduled Badge BG**: `#DBEAFE` - Blue tint background
- **In Progress Badge BG**: `#FEF3C7` - Yellow tint background
- **Expired Badge BG**: `#FEE2E2` - Red tint background

## Typography

### Font Families
- **Primary**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Headings**: `'Inter', sans-serif` with font-weight 600-700

### Type Scale
- **Page Title**: 24px / 600 weight / -0.01em letter-spacing
- **Section Header**: 18px / 600 weight
- **Card Title**: 16px / 600 weight / Charcoal color
- **Body Text**: 14px / 400-500 weight / 1.5 line-height
- **Label/Subtitle**: 13px / 400 weight / Medium Gray
- **Badge Text**: 12px / 500 weight
- **Small Text**: 11px / 400 weight

## Spacing & Layout

### Spacing Scale
- **XS**: 4px
- **SM**: 8px
- **MD**: 12px
- **LG**: 16px
- **XL**: 20px
- **2XL**: 24px
- **3XL**: 32px
- **4XL**: 48px

### Card Specifications
- **Padding**: 16px
- **Border Radius**: 12px
- **Border**: 1px solid Border Gray
- **Background**: Pure White
- **Shadow**: 0 1px 3px rgba(0, 0, 0, 0.1)
- **Hover Shadow**: 0 4px 12px rgba(0, 0, 0, 0.1)
- **Transition**: all 0.2s ease

### Container Widths
- **Max Width**: 1280px
- **Padding**: 24px horizontal
- **Column Gap**: 16px

## Components

### Status Badges
- **Border Radius**: 16px (pill-shaped)
- **Padding**: 4px 12px
- **Font Size**: 12px
- **Font Weight**: 500
- **Border**: None
- **Background**: Status-specific tint colors
- **Text Color**: Darker shade of status color

**Badge Variants:**
- **New**: Purple background (#EDE9FE), text (#8B5CF6)
- **Scheduled**: Blue background (#DBEAFE), text (#60A5FA)
- **In Progress**: Yellow background (#FEF3C7), text (#F59E0B)
- **Expired**: Red background (#FEE2E2), text (#F87171)

### Task Cards
- All card specifications from spacing section
- **Title**: 16px, 600 weight, Charcoal
- **Subtitle**: 13px, 400 weight, Medium Gray
- **Status Badge**: Top-right corner
- **Icon**: Optional, left-aligned at 16px size
- **Spacing**: 8px between elements

### Buttons

#### Primary Button (FAB style)
- **Background**: Teal Primary
- **Color**: White
- **Size**: 56px × 56px (circular)
- **Border Radius**: 50%
- **Shadow**: 0 4px 12px rgba(20, 184, 166, 0.4)
- **Hover Shadow**: 0 6px 20px rgba(20, 184, 166, 0.5)
- **Icon**: Plus sign, 24px
- **Position**: Fixed bottom-right, 24px from edges
- **Transition**: all 0.3s ease

#### Text Link Button
- **Color**: Ocean Blue
- **Font Size**: 14px
- **Font Weight**: 500
- **Hover**: Underline
- **Transition**: color 0.2s ease

### Navigation Tabs
- **Height**: 56px
- **Padding**: 16px horizontal
- **Font Size**: 15px
- **Font Weight**: 500
- **Active Border**: 3px solid Teal Primary (bottom border)
- **Active Color**: Charcoal
- **Inactive Color**: Medium Gray
- **Hover**: Background Soft Gray
- **Transition**: all 0.2s ease

### Menu Items
- **Padding**: 16px 20px
- **Font Size**: 15px
- **Font Weight**: 400
- **Color**: Charcoal
- **Hover Background**: Soft Gray
- **Border Radius**: 8px
- **Icon Spacing**: 12px from text
- **External Link Icon**: 14px, Ocean Blue

### Calendar Week View
- **Date Header**: 14px, 600 weight
- **Column Background**: Soft Gray alternating
- **Card Stack Gap**: 12px vertical
- **Scroll**: Vertical auto

## Interactions & Animations

### Hover Effects
- **Cards**: Lift with increased shadow (transform: translateY(-2px))
- **FAB**: Increased shadow, slight scale (transform: scale(1.05))
- **Links**: Color darken, underline
- **Menu Items**: Background change to Soft Gray

### Transitions
- **Default**: `all 0.2s ease`
- **Shadow**: `box-shadow 0.2s ease`
- **Transform**: `transform 0.2s ease`
- **FAB**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

### Focus States
- **Outline**: 2px solid Teal Primary
- **Offset**: 2px
- **Border Radius**: Inherit from element

## Icons
- **Size**: 16px (inline), 20px (standalone), 24px (FAB)
- **Stroke Width**: 2px
- **Color**: Inherits from parent or Medium Gray
- **Style**: Outlined/line icons preferred

## Layout Patterns

### Dashboard Grid
- **Display**: CSS Grid or Flexbox
- **Columns**: Fluid based on date range
- **Gap**: 16px between columns
- **Responsive**: Stack on mobile (<768px)

### Card Stack Pattern
- **Direction**: Vertical
- **Gap**: 12px
- **Max Width**: 320px per column
- **Overflow**: Scroll when needed

### Top Navigation
- **Position**: Sticky top
- **Background**: Pure White
- **Border Bottom**: 1px solid Border Gray
- **Shadow**: 0 1px 2px rgba(0, 0, 0, 0.05)
- **Z-index**: 10

## Accessibility

- **Contrast Ratios**: All text meets WCAG AA standards
- **Focus Indicators**: Visible 2px outlines
- **Touch Targets**: Minimum 44px × 44px
- **Labels**: All form inputs have associated labels
- **Status**: Conveyed through text, not just color
