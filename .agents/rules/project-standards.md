# Project Standards & AI Instructions

## 1. File and Folder Structure
- **Assets Folder**: `assets/` contains all non-PHP files.
  - **SCSS Organzation**:
    - `assets/scss/inc/`: Variables, mixins, animations, fonts, forms, Reset.
    - `assets/scss/parts/`: Reusable components (header, footer, common blocks).
    - `assets/scss/sections/`: Specific page section styles (hero, about, contact).
- **PHP Sections**: After static development, sections are converted to `sections/[section-name].php`.

## 1.1 Layout and Containers
- **Container**: Every section must contain a `.container` element that wraps all significant content.
- **Decorative Elements**: Decorative backgrounds or orbs can be placed outside the `.container`.
- **Horizontal Padding**: The `.container` must have `padding-left: 15px` and `padding-right: 15px`.
- **Vertical Spacing**: Section vertical space must be defined as `padding` inside the `.container`, NOT on the `<section>` tag itself.
- **Section Margins**: Vertical margins between sections are strictly forbidden.

## 2. Font Handling
- **Format**: All fonts must be in `woff2`.
- **Location**: Store in `assets/fonts/`.
- **Connection**: Use `@font-face` in `assets/scss/inc/fonts.scss`.
- **Constraint**: No `@import` for fonts allowed.

## 3. Animations
- **Location**: All `@keyframes` must be store in `assets/scss/inc/animations.scss`.
- **Centralization**: Use names that reflect the animation action (e.g., `fadeIn`, `orbRotate`).

## 4. Forms and UI Elements
- **Location**: All styles for inputs, buttons, and form elements must be in `assets/scss/inc/forms.scss`.
- **Buttons**: Consolidate common button styles there to avoid duplication in sections.

## 5. Naming Convention (BEM+)
- **Modifiers**: Use the format `block__element _modifier`.
- **Descriptive Modifiers**: Modifiers MUST be descriptive of their content or purpose. Do not use generic numbers or names like `_1` or `_you`.
  - Bad: `hero__title-line _1`, `hero__highlight _you`.
  - Good: `hero__title-line _line-01`, `hero__highlight _mark-orange`.
- **Numbering**: Always use leading zeros for numbering.
  - Bad: `item-1`.
  - Good: `item-01`.

## 6. Variables and Mixins
- **CSS Variables**: Prioritize CSS Custom Properties (`--variable-name`) for colors, fonts, and shared values.
- **Categorization**: Group CSS variables in `:root` inside `assets/scss/inc/vars.scss`.
- **Breakpoint Variables**: Use SCSS variables for media queries:
  - `$lg: 1440px;`
  - `$md: 1024px;`
  - `$sm: 768px;`
- **Mixins**: Store reusable logic in `assets/scss/inc/mixins.scss`.

## 7. Responsiveness
- **Breakpoints**: Primary focus on `1440px`, `1024px`, and `768px`.
- **Mobile First**: Generally preferred, but adapt to project needs.

## 8. Hover Behavior
- **Constraint**: NO movement or scaling of main elements on hover.
- **Allowed**: Only pseudo-elements (`::before`, `::after`) or specific decorative inner elements are allowed to move. Visual feedback should be through color shifts or pseudo-element animations.

## 9. Visual Aesthetics
- **Premium Design**: Use vibrant colors (inspired by the logo), dark modes, glassmorphism, and subtle gradients.
- **Logo Harmony**: Design choices (gradients, shapes) should mirror the studio's visual identity.

## 10. Plain Content (Rich Text)
- **Location**: Define styles in `assets/scss/inc/_plain-content.scss`.
- **Coverage**: Include detailed styles for all typography elements:
  - `h1` through `h6` with specific, hierarchical font sizes.
  - `p`, `ul`, `ol`, `li`.
  - `table`, `thead`, `tbody`, `tr`, `th`, `td`.
  - `blockquote`, `hr`, `pre`, `code`.
  - `img`, `video`, `figure`.
- **Styling**: Ensure all elements match the site's dark/modern aesthetic.

## 9.1 Images and Placeholders
- **Placeholders**: If a section requires an image (content or background) that has not been provided or specifically mentioned, add the appropriate image block and use a placeholder URL (e.g., `https://placehold.co/600x400`).
- **Notification**: Always inform the user about which specific images need to be added or replaced in the project.
- **Styling**: Placedholder images should be styled to fit the layout (e.g., using `object-fit: cover` and appropriate aspect ratios).

## 11. JavaScript Conventions
- **Hooks**: Use a `js-purpose` class prefix for elements targeted by JavaScript logic.
- **Initialization**: Encapsulate functionality in named functions (e.g., `preloaderInit()`, `headerFixInit()`).
- **Execution**: All init functions must be called inside a single `$(window).on("load", function() { ... })` block in `assets/js/main.js`.
  ```javascript
  $(window).on("load", function () {
      preloaderInit();
      headerFixInit();
      pageNavInit();
  });
  ```
- **Structure**: Group related logic into clear, named function declarations at the bottom of the main closure.

## 12. WordPress Integration (Best Practices)
- **Escaping**: Always use `esc_html()`, `esc_url()`, etc.
- **ACF**: Use Advanced Custom Fields for dynamic content.
- **Translation**: Ensure all strings are translatable using `__()` or `_e()`.
