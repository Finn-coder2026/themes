/**
 * Jolli theme CSS — base stylesheet.
 */

const CSS = `
/* ═══════════════════════════════════════════════════════════
   Jolli Theme — The official Jolli documentation theme
   ═══════════════════════════════════════════════════════════ */

/* ── Design tokens ────────────────────────────────────────── */
:root {
  --jolli-green: #0D9373;
  --jolli-green-light: #0fb98d;
  --jolli-green-soft: #ecfdf5;
  --jolli-green-border: #6ee7b7;
  --jolli-bg: #ffffff;
  --jolli-bg-surface: #f9fafb;
  --jolli-text: #1f2937;
  --jolli-text-soft: #6b7280;
  --jolli-text-faint: #9ca3af;
  --jolli-border: #e5e7eb;

  --nextra-primary-hue: 158;
  --nextra-primary-saturation: 82%;
  --nextra-primary-lightness: 32%;
}
.dark {
  --jolli-green: #34d399;
  --jolli-green-light: #6ee7b7;
  --jolli-green-soft: #064e3b;
  --jolli-green-border: #065f46;
  --jolli-bg: #111827;
  --jolli-bg-surface: #1f2937;
  --jolli-text: #f3f4f6;
  --jolli-text-soft: #9ca3af;
  --jolli-text-faint: #6b7280;
  --jolli-border: #374151;

  --nextra-primary-lightness: 60%;
}

/* ── Base ─────────────────────────────────────────────────── */
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
}

/* ── Navbar ───────────────────────────────────────────────── */
.nextra-navbar nav {
  flex-wrap: wrap !important;
  padding-top: 0.5rem !important;
  padding-bottom: 0.25rem !important;
}

/* Center the search box in the navbar */
.nextra-navbar nav > div:has(.nextra-search) {
  flex: 1 !important;
  display: flex !important;
  justify-content: center !important;
}
.nextra-navbar nav .nextra-search {
  width: 100% !important;
  max-width: 480px !important;
}
.nextra-navbar nav .nextra-search input {
  width: 100% !important;
}

/* ── Tabs — second row below navbar ──────────────────────── */
.nextra-scrollbar:has(> a[href]) {
  order: 100 !important;
  flex-basis: 100% !important;
  padding: 0 !important;
  gap: 0 !important;
  border: none !important;
  background: transparent !important;
}

/* Navbar height for the second row */
:root {
  --nextra-navbar-height: 104px;
}
.nextra-navbar {
  height: auto !important;
  min-height: 104px;
}

/* Style tab links */
.nextra-scrollbar:has(> a[href]) > a {
  all: unset !important;
  display: inline-flex !important;
  align-items: center !important;
  padding: 0.625rem 1rem !important;
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  color: var(--jolli-text-soft) !important;
  border-bottom: 2px solid transparent !important;
  cursor: pointer !important;
  transition: color 0.15s, border-color 0.15s !important;
}
.nextra-scrollbar:has(> a[href]) > a:first-child {
  padding-left: 0 !important;
}
.nextra-scrollbar:has(> a[href]) > a:hover {
  color: var(--jolli-text) !important;
}

/* Active tab */
.nextra-scrollbar:has(> a[href]) > a[aria-current] {
  color: var(--jolli-green) !important;
  border-bottom-color: var(--jolli-green) !important;
  font-weight: 600 !important;
}

/* ── Sidebar ─────────────────────────────────────────────── */
aside.nextra-sidebar a:hover {
  color: var(--jolli-green) !important;
}
aside.nextra-sidebar li.active > a {
  color: var(--jolli-green) !important;
  font-weight: 600 !important;
}

/* ── Links ────────────────────────────────────────────────── */
a:hover {
  color: var(--jolli-green);
}

/* ── Code blocks ─────────────────────────────────────────── */
pre {
  border: 1px solid var(--jolli-border) !important;
  border-radius: 0.5rem !important;
}

/* Hidden SidebarTabs — only for root URL redirect */
.jolli-hidden-tabs {
  display: none !important;
}

/* ── Mobile ──────────────────────────────────────────────── */
@media (max-width: 767px) {
  .nextra-scrollbar:has(> a[href]) {
    order: unset !important;
    flex-basis: unset !important;
  }
  .nextra-scrollbar:has(> a[href]) > a {
    all: revert !important;
  }
  .nextra-navbar nav > div:has(.nextra-search) {
    flex: unset !important;
    justify-content: unset !important;
  }
}
`;

export function buildCss() {
	return CSS;
}
