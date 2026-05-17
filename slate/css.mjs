/**
 * Slate theme CSS — collapsible sidebar, second-row tabs, rich footer.
 */

const CSS = `
/* ═══════════════════════════════════════════════════════════
   Slate Theme — Collapsible sidebar with rich footer
   ═══════════════════════════════════════════════════════════ */

:root {
  --slate-green: #329100;
  --slate-green-light: #43C200;
  --slate-green-soft: #f0fdf4;
  --slate-green-border: #86efac;
  --slate-bg: #ffffff;
  --slate-bg-surface: #f9fafb;
  --slate-text: #1f2937;
  --slate-text-soft: #6b7280;
  --slate-text-faint: #9ca3af;
  --slate-border: #e5e7eb;

  --nextra-primary-hue: 110;
  --nextra-primary-saturation: 100%;
  --nextra-primary-lightness: 28%;
}
.dark {
  --slate-green: #43C200;
  --slate-green-light: #86efac;
  --slate-green-soft: #052e16;
  --slate-green-border: #14532d;
  --slate-bg: #111827;
  --slate-bg-surface: #1f2937;
  --slate-text: #f3f4f6;
  --slate-text-soft: #9ca3af;
  --slate-text-faint: #6b7280;
  --slate-border: #374151;

  --nextra-primary-lightness: 50%;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
}

/* ── Navbar ───────────────────────────────────────────────── */
.nextra-navbar nav {
  flex-wrap: wrap !important;
  padding-top: 0.375rem !important;
  padding-bottom: 0.25rem !important;
}

/* Center search */
.nextra-navbar nav > div:has(.nextra-search) {
  flex: 1 !important;
  display: flex !important;
  justify-content: center !important;
}
.nextra-navbar nav .nextra-search {
  width: 100% !important;
  max-width: 420px !important;
}
.nextra-navbar nav .nextra-search input {
  width: 100% !important;
  border-radius: 0.5rem !important;
}

/* ── Tabs — second row ───────────────────────────────────── */
.nextra-scrollbar:has(> a[href]) {
  order: 100 !important;
  flex-basis: 100% !important;
  padding: 0 !important;
  gap: 0 !important;
  border: none !important;
  background: transparent !important;
}

:root {
  --nextra-navbar-height: 100px;
}
.nextra-navbar {
  height: auto !important;
  min-height: 100px;
}

/* Tab links */
.nextra-scrollbar:has(> a[href]) > a {
  all: unset !important;
  display: inline-flex !important;
  align-items: center !important;
  padding: 0.5rem 0.875rem !important;
  font-size: 0.875rem !important;
  font-weight: 500 !important;
  color: var(--slate-text-soft) !important;
  border-bottom: 2px solid transparent !important;
  cursor: pointer !important;
  transition: color 0.2s, border-color 0.2s !important;
}
.nextra-scrollbar:has(> a[href]) > a:first-child {
  padding-left: 0 !important;
}
.nextra-scrollbar:has(> a[href]) > a:hover {
  color: var(--slate-text) !important;
}
.nextra-scrollbar:has(> a[href]) > a[aria-current] {
  color: var(--slate-green) !important;
  border-bottom-color: var(--slate-green) !important;
  font-weight: 600 !important;
}

/* ── Sidebar ─────────────────────────────────────────────── */
aside.nextra-sidebar {
  border-right: 1px solid var(--slate-border) !important;
}
aside.nextra-sidebar a:hover {
  color: var(--slate-green) !important;
}
aside.nextra-sidebar li.active > a {
  color: var(--slate-green) !important;
  font-weight: 600 !important;
}

/* Collapsible sidebar groups */
:is(.nextra-sidebar, .nextra-mobile-nav) > div > div > ul > li > button {
  font-weight: 600 !important;
  font-size: 0.8125rem !important;
  text-transform: uppercase !important;
  letter-spacing: 0.04em !important;
  color: var(--slate-text) !important;
}

/* ── Links ────────────────────────────────────────────────── */
a:hover { color: var(--slate-green); }

/* ── Code blocks ─────────────────────────────────────────── */
pre {
  border: 1px solid var(--slate-border) !important;
  border-radius: 0.5rem !important;
}

/* ── Footer — rich multi-column layout ───────────────────── */
.slate-footer {
  border-top: 1px solid var(--slate-border);
  padding: 3rem 0 2rem;
}
.slate-footer-grid {
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.slate-footer-col {
  min-width: 150px;
}
.slate-footer-col-title {
  font-weight: 600;
  font-size: 0.8125rem;
  color: var(--slate-text);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.slate-footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.slate-footer-col li {
  margin-bottom: 0.375rem;
}
.slate-footer-col a {
  font-size: 0.8125rem;
  color: var(--slate-text-soft);
  text-decoration: none;
  transition: color 0.15s;
}
.slate-footer-col a:hover {
  color: var(--slate-green);
}
.slate-footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 1.5rem 1.5rem 0;
  border-top: 1px solid var(--slate-border);
}
.slate-footer-copyright {
  font-size: 0.75rem;
  color: var(--slate-text-faint);
}
.slate-footer-social {
  display: flex;
  gap: 0.75rem;
}
.slate-footer-social a {
  color: var(--slate-text-faint);
  text-decoration: none;
  font-size: 0.75rem;
  transition: color 0.15s;
}
.slate-footer-social a:hover {
  color: var(--slate-green);
}
.slate-footer-powered {
  font-size: 0.6875rem;
  color: var(--slate-text-faint);
}

/* Hidden SidebarTabs — for root URL redirect */
.slate-hidden-tabs {
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
  .slate-footer-grid {
    flex-direction: column;
    gap: 2rem;
  }
  .slate-footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
`;

export function buildCss() {
	return CSS;
}
