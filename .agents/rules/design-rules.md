# Design Rule: No Hover Motion on Main Elements

- **Prohibition**: Elements must NOT move (translate) or scale (grow/shrink) on `:hover`.
- **Exception**: Only pseudo-elements (`::before`, `::after`) are allowed to move or scale on hover.
- **Reasoning**: User preference for stable, non-jumping layouts. Visual feedback should be achieved via color, opacity, or pseudo-element animations.
