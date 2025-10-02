# Central Content Panel Width Changes

## Summary
The central content panel width has been increased to nearly full screen width to provide more space for interactive elements, charts, and data tables.

## Changes Made

### Files Modified
- `theme.scss`
- `theme-dark.scss`

### Specific Changes

#### 1. Grid Column Expansion
- **Before**: `grid-column: body-start / page-end`
- **After**: `grid-column: body-start / screen-end`
- **Impact**: Content area now spans from the body start to the screen edge, utilizing nearly the full width

#### 2. Maximum Width Increase
- **Before**: `max-width: 1400px`
- **After**: `max-width: 95vw`
- **Impact**: Content can now use up to 95% of the viewport width instead of being capped at 1400px

#### 3. Padding Adjustments
- **Before**: `padding-right: 2em`
- **After**: `padding-right: 1em` and `padding-left: 1em`
- **Impact**: More balanced spacing while maintaining readability

## Visual Evidence

Screenshots documenting the changes are available in `info/screenshots/`:
- `homepage-fullwidth-after.png` - Homepage with increased width
- `uti-case-fullwidth-after.png` - UTI case study page showing full-width interactive elements
- `nca-page-fullwidth-after.png` - NCA page with full-width content
- `nca-page-viewport-fullwidth.png` - Desktop viewport view showing the width utilization

## Technical Details

The changes are wrapped in a media query to only apply on desktop screens:
```scss
@media(min-width: 992px) {
  /* Changes apply here */
}
```

This ensures that the layout remains responsive and doesn't negatively impact mobile or tablet views.

## Benefits

1. **More Space for Interactive Elements**: PK/PD interactive calculators and simulations have more horizontal space
2. **Better Chart Visibility**: Concentration-time profiles and other visualizations can be displayed larger
3. **Improved Data Table Display**: Tables with multiple columns can be viewed without horizontal scrolling
4. **Modern Layout**: Utilizes available screen real estate effectively on modern wide-screen displays
