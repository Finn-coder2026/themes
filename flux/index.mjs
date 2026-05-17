/**
 * Flux Theme — entry point.
 *
 * Usage:
 *   jolli dev ./my-docs --theme ~/jolli.ai/themes/flux
 */

import manifest from "./manifest.mjs";
import { buildCss } from "./css.mjs";
import { generateLayout } from "./layout.mjs";

const fluxTheme = {
	manifest,
	buildCss(config) {
		return buildCss(config);
	},
	generateLayout(config) {
		return generateLayout(config);
	},
};

export default fluxTheme;
