# Master Design System - Techno Vibrant Bento

This design system is strictly based on the **UI/UX Pro Max - Design Intelligence** framework (Antigravity Kit).

## 1. Product Personality
- **Type**: High-Impact Developer Portfolio
- **Audience**: Professional Recruiters, CTOs, Tech Leads
- **Vibe**: Futuristic, Precise, Immersive, Performant

## 2. Visual Style: Techno Vibrant
A modern, dark-themed aesthetic using high-contrast neon accents and depth-based UI elements.

### Color Palette (Creative Vibrant + Techno Fusion)
| Role | Color | Hex | Rationale |
|------|-------|-----|-----------|
| Background | Deep Navy | `#0F0F23` | High depth, low fatigue |
| Primary | Electric Violet| `#7C3AED` | Energy & Intelligence |
| Secondary | Rose Glow | `#F43F5E` | Visual interest & warmth |
| Accent | Cyber Cyan | `#0891B2` | Logic & Precision |
| Surface | Glass Mid | `rgba(255, 255, 255, 0.05)` | Hierarchy via glassmorphism |
| Border | Glass Edge | `rgba(255, 255, 255, 0.1)` | Subtle separation |

### Typography (Tech/Modern Pairing)
- **Primary Header**: `Space Grotesk` (700) - For a futuristic, technical look.
- **Body Text**: `DM Sans` (400/500) - Highly readable, modern sans-serif.
- **Base Size**: 16px (to avoid iOS zoom issues).
- **Line Height**: 1.6 (Optimized for readability).

## 3. Layout & Grid (8px System)
- **Base Unit**: 8px (Smallest unit: 4px for fine-tuning titles).
- **Organization**: Bento Grid inspired layout. One-screen fullscreen container.
- **Touch Targets**: Minimum 44x44px for all buttons and interactive elements.
- **Container**: Max-width 1440px, 15px horizontal padding.

## 4. UX & Interaction Rules
- **CTA**: Single primary action (`#7C3AED`). Secondary actions use borders or subtle fills.
- **State Feedback**: 
  - Hover: Border color shift to Primary + subtle glow.
  - Active: 2% scale-down (optional, use with caution).
- **Animations**: 
  - Duration: 250ms (Optimal for perceived speed).
  - Easing: `cubic-bezier(0.4, 0, 0.2, 1)`.
  - Type: Slide + Fade for entry.

## 5. Components
### Bento Card (Glassmorphism)
- **Blur**: 16px.
- **Border**: 1px solid `var(--glass-border)`.
- **Radius**: 24px (Large borders for friendly yet techy feel).

### Project Slider
- Clean navigation dots.
- Single-primary focus card with secondary adjacent cards.

## 6. Pre-Delivery Checklist (Pro-Max Standards)
- [ ] Contrast ratio >= 4.5:1 for all text.
- [ ] No horizontal scroll on mobile.
- [ ] WebP images used where possible.
- [ ] Touch targets verified (44px+).
- [ ] Loading states/placeholders implemented.
