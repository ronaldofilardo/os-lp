---
name: Syntactic Determinism
colors:
  surface: '#0e1321'
  surface-dim: '#0e1321'
  surface-bright: '#343948'
  surface-container-lowest: '#090e1c'
  surface-container-low: '#161b2a'
  surface-container: '#1a1f2e'
  surface-container-high: '#252a39'
  surface-container-highest: '#303444'
  on-surface: '#dee2f6'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dee2f6'
  inverse-on-surface: '#2b303f'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffbcb7'
  on-tertiary: '#68000a'
  tertiary-container: '#ff938c'
  on-tertiary-container: '#8d0012'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#0e1321'
  on-background: '#dee2f6'
  surface-variant: '#303444'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  code-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 22px
    letterSpacing: -0.01em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1rem
  margin-tablet: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses defensive, precision-engineered intelligence. Built specifically for executive technical buyers—such as CTOs and founders of high-stakes FinTech, HealthTech, and enterprise systems—the tone rejects playful tech tropes in favor of deterministic rigor, operational stability, and developer-grade control.

The visual direction merges refined IDE interfaces, mission-critical avionics/telemetry systems, and high-density terminal environments. Key aesthetic drivers include:

- **Mathematical Precision:** Crisp grid alignments, clean hairline dividers, monospaced data alignment, and explicit structural states.
- **Architectural Dark Mode:** Layered oceanic navy surfaces that simulate calibrated development workspaces rather than generic dark gray canvas palettes.
- **Signal-to-Noise Discipline:** High-contrast tactical accents against quiet background geometries; zero gratuitous skeuomorphic textures or decorative fluff.
- **Status Authority:** System signals leverage uncompromising, unambiguous operational semantics: compliant systems glow emerald; invariant breaches immediately flag crimson.

## Colors

The palette is engineered around visual hierarchy under demanding analytical conditions. High-efficiency contrasts ensure immediate legibility of logs, deterministic states, and contractual architecture specs.

### Color Tokens & Assignments

- **Canvas & Backgrounds:**
  - Base Shell: `#0a0f1d` (Deepest navy canvas)
  - Surface Substrate: `#0d1527` (Segmented backgrounds, section roots)
- **Surfaces & Cards:**
  - Surface Default: `#111a33` (Standard card and pane container background)
  - Surface Raised / Hover: `#172344` (Elevated components, floating drawers, active rows)
- **Structural Lines:**
  - Border Subtle: `#1e294b` (Structural dividers, input shells, card outlines)
  - Border Active: `#2563eb` (Focused interactive boundaries, verified edges)
- **Primary Signals:**
  - Accent Primary: `#38bdf8` (Electric Sky; interactive triggers, focus rings, primary identifiers)
  - Accent Muted: `#2563eb` (Deep Electric Blue; active tab underlines, structural accents)
  - Accent Highlight: `#60a5fa` (Hover targets, text highlights)
- **Operational & Telemetry Feedback:**
  - Status Pass / Conforme: `#10b981` (Emerald; invariant verified, safe build, zero-regression)
  - Status Fail / Violação: `#ef4444` (Crimson; contract breach, runtime error, invariant failure)
  - Status Neutral / Idle: `#94a3b8` (Muted slate text, inactive icons)
  - Text Primary: `#f8fafc` (High readability white-slate for headlines and data readouts)
  - Text Secondary: `#cbd5e1` (Body copy, technical specifications)
  - Text Dim / Monospace Meta: `#64748b` (Timestamps, line indices, non-critical comments)

## Typography

The typographical hierarchy is dual-engine:

1. **Inter** powers natural narrative flow, editorial positioning, service propositions, and system rationales. It handles complex multi-column reading without visual friction.
2. **JetBrains Mono** acts as the analytical backbone. It is strictly enforced for code architectures, architectural diagrams, metric cards, status badges, telemetry tables, diff views, and technical tags.

### Implementation Guidelines

- Monospace figures (`font-variant-numeric: tabular-nums`) must be active across all tables, operational gauges, and KPI counters to guarantee zero horizontal layout shift during dynamic state updates.
- Section categorizations and system logs use `label-caps` in uppercase format with wide tracking (`letter-spacing: 0.08em`) to mimic IDE structural panels and build output metadata.
- Avoid font weights above `700` to preserve the clinical, surgical feel of a high-end compiler interface.

## Layout & Spacing

Layouts follow a modular, fluid column model with explicit visual structure inspired by CAD viewports and modular software architecture.

### Grid & Canvas Structure

- **Desktop (>= 1200px):** 12-column grid, max canvas width 1280px, with `1.5rem` gutters and `3rem` boundary margins. Elements snap neatly along strict multi-column bounds (4-col telemetry cards, 8-col log streams).
- **Tablet (768px – 1199px):** 8-column layout with `1.5rem` gutters and `2rem` side margins. High-density dashboards collapse into a 4x4 matrix.
- **Mobile (< 768px):** 4-column layout with `1rem` gutters and `1rem` edge margins. Code comparisons and dual-column inspection panels collapse into sequential, tabbed vertical streams.

### Background Matrix & Micro-Rhythm

- Background environments utilize an optional hairline grid pattern: an ultra-subtle coordinate matrix composed of radial point intersections at `32px` intervals with `rgba(30, 41, 75, 0.45)` tint.
- Compact inner padding (`space-xs` and `space-sm`) enforces dense information grouping, preventing UI elements from feeling bloated or unfocused.

## Elevation & Depth

Rather than relying on heavy, fuzzy dropshadows typical of consumer apps, this system uses **tonal layer stacking combined with hairline luminescent borders** to convey spatial hierarchy.

### Elevation Hierarchy

1. **Baseplate (`#0a0f1d`):** The primary view substrate. Zero elevation, occasionally overlayed with a subtle coordinate point-grid.
2. **Container Tier (`#111a33`):** Default card components and IDE file trees. Framed by a 1px solid border (`#1e294b`). No drop shadow.
3. **Floating / Focus Tier (`#172344`):** Modals, code tooltips, inspect popovers, and hovering cards. Layered with:
   - Outline: 1px solid `rgba(56, 189, 248, 0.25)` or `#1e294b`
   - Shadow: `0 8px 24px -4px rgba(2, 6, 23, 0.75), 0 2px 6px -1px rgba(56, 189, 248, 0.08)`
4. **Active Edge Radiance (Neon Keyline):** Focused or active interface nodes emit a surgical 1px line glow:
   - Success state: `box-shadow: 0 0 12px 0 rgba(16, 185, 129, 0.2)`
   - Error/Violation state: `box-shadow: 0 0 12px 0 rgba(239, 68, 68, 0.2)`
   - Electric Focus: `box-shadow: 0 0 12px 0 rgba(56, 189, 248, 0.25)`

## Shapes

The design system employs a **Soft** shape geometry (`roundedness: 1`). 

- Default elements (buttons, inputs, pills, cards) utilize `0.25rem` (4px) corner radii.
- Compound containers (code windows, telemetry terminal shells, complex preview panes) scale to `0.5rem` (8px).
- Structural viewports feature subtle framing accents (e.g., crosshair corner marks `+` or top window control dots) to reinforce the calibrated IDE motif.
- Completely round pill shapes (`9999px`) are strictly forbidden; roundedness must consistently feel engineered, chiseled, and robust.

## Components

### Buttons
- **Primary Action (Deploy / Verify):** Background `#38bdf8`, foreground `#0a0f1d`, font `Inter` 600, border radius `4px`. Hover transforms to background `#60a5fa` with a subtle electric outer aura.
- **Secondary / Console Action:** Background `#111a33`, 1px border `#1e294b`, text `#f8fafc`. Hover lifts surface to `#172344` with border `#38bdf8`.
- **Destructive / Rollback:** Background `rgba(239, 68, 68, 0.1)`, 1px border `rgba(239, 68, 68, 0.4)`, text `#ef4444`.

### Chips & Badges
- Constructed with `JetBrains Mono` at `11px` (`code-sm` or `label-caps`).
- **Conforme (Compliant):** Surface `rgba(16, 185, 129, 0.12)`, border `1px solid rgba(16, 185, 129, 0.35)`, text `#10b981`. Prepended with an emerald status glyph `●`.
- **Violação (Violation):** Surface `rgba(239, 68, 68, 0.12)`, border `1px solid rgba(239, 68, 68, 0.35)`, text `#ef4444`. Prepended with a crimson warning token `▲`.
- **System Scope:** Surface `#0d1527`, border `1px solid #1e294b`, text `#94a3b8`.

### Lists & Telemetry Feeds
- Structured as dense alternating or hairline-separated rows.
- Dividers: `1px solid #1e294b`.
- Interactive rows highlight to `#172344` on hover with a 2px vertical indicator bar in `#38bdf8` on the leading edge.
- Timestamp and telemetry column alignment powered strictly by `JetBrains Mono`.

### Form Controls & Inputs
- **Inputs:** Background `#0d1527`, 1px border `#1e294b`, text `#f8fafc`, font `JetBrains Mono` or `Inter` 14px. Focus state triggers border `#38bdf8` and an ambient cyan glow.
- **Checkboxes & Radios:** Sharp square/hexagonal-influenced profile with 2px radius. Inactive border `#1e294b`. Active state fills `#38bdf8` with deep navy `#0a0f1d` check iconography.

### Cards & Code Enclosures
- **Terminal & Code Shells:** Container `#111a33` wrapped in a 1px `#1e294b` frame. Top utility header features window indicators, active branch tags, and filename in `JetBrains Mono`.
- **Metric Panels:** High-contrast typography displaying deterministic indicators (e.g., "99.998% INVARIANT UPTIME") paired with mini sparklines rendered in `#38bdf8` and `#10b981`.

### Specialized Domain Component: The Invariant Gatekeeper
- An audit-log component displaying upstream code and AI generation guarantees.
- Features dual-pane syntax diffing: Left pane flags runtime failure (`#ef4444` background tint with error lines highlighted); right pane illustrates STE-DEV preventive patch (`#10b981` highlight with mathematical proof annotations).