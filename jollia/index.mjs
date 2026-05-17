/**
 * Jolli Theme — entry point.
 * Assembles the ThemePackProvider from manifest, css, and layout modules.
 *
 * Usage:
 *   jolli dev ./my-docs --theme ~/jolli-theme/jolli-theme
 *   or in site.json: "theme": { "pack": "jolli" }
 */

import manifest from "./manifest.mjs";
import { buildCss } from "./css.mjs";
import { generateLayout } from "./layout.mjs";

const jolliTheme = {
	manifest,
	buildCss(config) {
		return buildCss(config);
	},
	generateLayout(config) {
		return generateLayout(config);
	},
};

export default jolliTheme;
