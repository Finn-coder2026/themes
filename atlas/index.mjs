/**
 * Atlas Theme — entry point.
 * Assembles the ThemePackProvider from manifest, css, and layout modules.
 *
 * Usage:
 *   jolli dev ./my-docs --theme ~/jolli.ai/themes/atlas
 *   or in site.json: "theme": { "pack": "atlas" }
 */

import manifest from "./manifest.mjs";
import { buildCss } from "./css.mjs";
import { generateLayout } from "./layout.mjs";

const atlasTheme = {
	manifest,
	buildCss(config) {
		return buildCss(config);
	},
	generateLayout(config) {
		return generateLayout(config);
	},
};

export default atlasTheme;
