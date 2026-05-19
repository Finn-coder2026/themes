/**
 * Forge theme layout — generates app/layout.tsx content.
 */

import manifest from "./manifest.mjs";

// ── sanitizeUrl (inlined from Sanitize.ts) ──────────────────────────────────

const SAFE_URL_PATTERN = /^(?:https?:|mailto:|tel:|[#?]|\/(?!\/)|\.\.?\/)/i;

function sanitizeUrl(url) {
	const trimmed = url.trim();
	if (trimmed === "" || SAFE_URL_PATTERN.test(trimmed)) {
		return trimmed;
	}
	return "#";
}

// ── escapeHtml (inlined from Sanitize.ts) ───────────────────────────────────

function escapeHtml(str) {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;")
		.replace(/\{/g, "&#123;")
		.replace(/\}/g, "&#125;");
}

// ── SOCIAL_PLATFORMS (inlined from Footer.ts) ───────────────────────────────

const SOCIAL_PLATFORMS = ["github", "twitter", "x", "discord", "linkedin", "youtube"];

const SOCIAL_LABELS = {
	github: "GitHub",
	twitter: "Twitter",
	x: "X",
	discord: "Discord",
	linkedin: "LinkedIn",
	youtube: "YouTube",
};

// ── Footer helpers (inlined from Footer.ts) ─────────────────────────────────

function renderFooterColumns(footerConfig, classPrefix) {
	if (!footerConfig.columns || footerConfig.columns.length === 0) {
		return "";
	}
	const cols = footerConfig.columns
		.map((col) => {
			const links = col.links
				.map((link) => `<li><a href="${escapeHtml(sanitizeUrl(link.url))}">${escapeHtml(link.label)}</a></li>`)
				.join("");
			return `<div className="${classPrefix}-footer-col"><h4>${escapeHtml(col.title)}</h4><ul>${links}</ul></div>`;
		})
		.join("");
	return `<div className="${classPrefix}-footer-columns">${cols}</div>`;
}

function renderSocialLinks(socialLinks, classPrefix) {
	if (!socialLinks) {
		return "";
	}
	const effective = { ...socialLinks };
	if (effective.x && !effective.twitter) {
		effective.twitter = effective.x;
		effective.x = undefined;
	}
	const links = SOCIAL_PLATFORMS.filter((platform) => effective[platform])
		.map((platform) => {
			const url = escapeHtml(sanitizeUrl(effective[platform]));
			const label = SOCIAL_LABELS[platform];
			return `<a href="${url}" aria-label="${label}" className="${classPrefix}-footer-social-${platform}">${label}</a>`;
		})
		.join("");
	if (!links) {
		return "";
	}
	return `<div className="${classPrefix}-footer-social">${links}</div>`;
}

function buildFooterScaffold(classPrefix, columnsJsx, bottomRows) {
	const filteredBottom = bottomRows.filter(Boolean);
	const blocks = [`<div className="${classPrefix}-footer">`];
	if (columnsJsx) {
		blocks.push(`  ${columnsJsx}`);
	}
	blocks.push(`  <div className="${classPrefix}-footer-bottom">`);
	for (const row of filteredBottom) {
		blocks.push(`    ${row}`);
	}
	blocks.push(`  </div>`);
	blocks.push(`</div>`);
	return blocks.join("\n          ");
}

function buildForgeFooterBody(siteName, footerConfig) {
	const escapedName = escapeHtml(siteName);
	if (!footerConfig) {
		return `{new Date().getFullYear()} \u00a9 ${escapedName} \u00b7 Powered by Jolli`;
	}

	const copyright = footerConfig.copyright
		? `<span className="forge-footer-copyright">${escapeHtml(footerConfig.copyright)}</span>`
		: `<span className="forge-footer-copyright">{new Date().getFullYear()} \u00a9 ${escapedName}</span>`;

	return buildFooterScaffold("forge", renderFooterColumns(footerConfig, "forge"), [
		copyright,
		renderSocialLinks(footerConfig.socialLinks, "forge"),
		`<span className="forge-footer-powered">Powered by Jolli</span>`,
	]);
}

// ── Font config ─────────────────────────────────────────────────────────────

const FONT_CONFIG = {
	inter: {
		url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
		cssFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
	},
	"space-grotesk": {
		url: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap",
		cssFamily: "'Space Grotesk', -apple-system, sans-serif",
	},
	"ibm-plex": {
		url: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap",
		cssFamily: "'IBM Plex Sans', -apple-system, sans-serif",
	},
	"source-sans": {
		url: "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&display=swap",
		cssFamily: "'Source Sans 3', -apple-system, sans-serif",
	},
	"source-serif": {
		url: "https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&display=swap",
		cssFamily: "'Source Serif 4', 'Iowan Old Style', Georgia, serif",
	},
};

// ── Logo helpers ────────────────────────────────────────────────────────────

function buildLogoSlots(logoUrl, logoUrlDark, title) {
	if (!logoUrl) {
		return { light: "", dark: "" };
	}
	const jsAlt = JSON.stringify(title);
	const jsLightSrc = JSON.stringify(sanitizeUrl(logoUrl));
	if (!logoUrlDark) {
		return { light: `<img src={${jsLightSrc}} alt={${jsAlt}} />`, dark: "" };
	}
	const jsDarkSrc = JSON.stringify(sanitizeUrl(logoUrlDark));
	return {
		light: `<img src={${jsLightSrc}} alt={${jsAlt}} className="forge-logo-light" />`,
		dark: `<img src={${jsDarkSrc}} alt={${jsAlt}} className="forge-logo-dark" />`,
	};
}

function resolveLogoDisplay(logoDisplay, logoUrl) {
	if (logoDisplay === "image" && !logoUrl) return "text";
	if (logoDisplay) return logoDisplay;
	return logoUrl ? "both" : "text";
}

function composeLogoMarkup(title, logoUrl, logoUrlDark, logoText, logoDisplay, textTemplate) {
	const logo = buildLogoSlots(logoUrl, logoUrlDark, title);
	const display = resolveLogoDisplay(logoDisplay, logoUrl);
	const text = logoText ?? title;
	const textMarkup = textTemplate.replace("TEXT", JSON.stringify(text));
	const imageMarkup = `${logo.light}${logo.dark}`;
	switch (display) {
		case "image":
			return imageMarkup;
		case "text":
			return textMarkup;
		default:
			return `${imageMarkup}${textMarkup}`;
	}
}

// ── Anchor block ────────────────────────────────────────────────────────────

function buildAnchorBlock(anchors) {
	if (!anchors?.length) return "";
	const links = anchors
		.map((a) => {
			const href = sanitizeUrl(a.href);
			const icon = a.icon ? `<span className="forge-anchor-icon">{${JSON.stringify(a.icon)}}</span>` : "";
			return `          <a href={${JSON.stringify(href)}} className="forge-anchor-link">${icon}{${JSON.stringify(a.label)}}</a>`;
		})
		.join("\n");
	return `
        <div className="forge-sidebar-anchors">
${links}
        </div>
`;
}

// ── Main export ─────────────────────────────────────────────────────────────

export function generateLayout(config) {
	const title = config.title || "Docs";
	const description = config.description || "";
	const t = config.theme ?? {};

	const primaryHue = t.primaryHue ?? manifest.defaults.primaryHue;
	const defaultTheme = t.defaultTheme ?? manifest.defaults.defaultTheme;
	const fontFamily = t.fontFamily ?? manifest.defaults.fontFamily;
	const logoUrl = t.logoUrl;
	const logoUrlDark = t.logoUrlDark;
	const logoText = t.logoText;
	const logoDisplay = t.logoDisplay;
	const favicon = config.favicon ?? t.favicon;
	const anchors = config.anchors;

	const jsTitle = JSON.stringify(title);
	const jsDescription = JSON.stringify(description);
	const jsDefaultTheme = JSON.stringify(defaultTheme);

	const font = FONT_CONFIG[fontFamily];
	const fontLink = `<link rel="stylesheet" href={${JSON.stringify(font.url)}} />`;
	const faviconLink = favicon ? `<link rel="icon" href={${JSON.stringify(sanitizeUrl(favicon))}} />` : "";

	const logoMarkup = composeLogoMarkup(title, logoUrl, logoUrlDark, logoText, logoDisplay, "<span>{TEXT}</span>");

	const primaryButton = config.header?.primary
		? `<a href={${JSON.stringify(sanitizeUrl(config.header.primary.href))}} className="forge-cta-button">{${JSON.stringify(config.header.primary.label)}}</a>`
		: "";

	const footerBody = buildForgeFooterBody(title, config.footer);
	const footerJsx = `<Footer>${footerBody}</Footer>`;

	return `import { Footer, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../styles/api.css'
import './themes/${manifest.name}.css'
import ScopedNextraLayout from '../components/ScopedNextraLayout'
import SidebarTabs from '../components/SidebarTabs'

export const metadata = {
  title: ${jsTitle},
  description: ${jsDescription},
}

const SiteLogo = () => (
  <span className="forge-navbar-logo">
    ${logoMarkup}
  </span>
)

const navbar = <Navbar logo={<SiteLogo />}>${primaryButton}<ThemeSwitch /></Navbar>
const footer = ${footerJsx}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={{ hue: ${primaryHue}, saturation: 84 }}>
        ${fontLink}
        ${faviconLink}
      </Head>
      <body>
        <div className="forge-sidebar-logo">
          <a href="/">
            ${logoMarkup}
          </a>
        </div>

        <div className="forge-sidebar-search">
          <Search placeholder="Search\u2026" />
        </div>

${buildAnchorBlock(anchors)}        <ScopedNextraLayout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          editLink={null}
          feedback={{ content: null }}
          darkMode={true}
          nextThemes={{ defaultTheme: ${jsDefaultTheme} }}
        >
          <SidebarTabs className="forge-sidebar-tabs" />
          {children}
        </ScopedNextraLayout>
      </body>
    </html>
  )
}
`;
}
