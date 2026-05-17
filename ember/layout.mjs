/**
 * Ember theme layout — fixed left sidebar, minimal navbar on right.
 * Left: logo + search + sidebar navigation
 * Right: narrow navbar (CTA + theme switch) + content
 */

import manifest from "./manifest.mjs";

export function generateLayout(config) {
	const title = JSON.stringify(config.title || "Docs");
	const description = JSON.stringify(config.description || "");
	const defaultTheme = JSON.stringify(config.theme?.defaultTheme || manifest.defaults.defaultTheme);

	let ctaButton = "";
	if (config.header?.primary) {
		const href = JSON.stringify(config.header.primary.href);
		const label = JSON.stringify(config.header.primary.label);
		ctaButton = `<a href={${href}} className="ember-cta-button">{${label}}</a>`;
	}

	// Navbar with empty logo (hidden by CSS) — just carries CTA + ThemeSwitch
	return `import { Footer, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../styles/api.css'
import './themes/${manifest.name}.css'
import { Layout } from 'nextra-theme-docs'

export const metadata = {
  title: ${title},
  description: ${description},
}

const navbar = <Navbar logo={<span />}>${ctaButton}<ThemeSwitch /></Navbar>
const footer = <Footer><div className="ember-footer"><span>Built with Ember © {new Date().getFullYear()}</span></div></Footer>

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={{ hue: ${manifest.defaults.primaryHue}, saturation: 80 }}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      </Head>
      <body>
        <div className="ember-sidebar-logo">
          <a href="/">
            <b>{${title}}</b>
          </a>
        </div>

        <div className="ember-sidebar-search">
          <Search placeholder="Search…" />
        </div>

        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          editLink={null}
          feedback={{ content: null }}
          darkMode={true}
          nextThemes={{ defaultTheme: ${defaultTheme} }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
`;
}
