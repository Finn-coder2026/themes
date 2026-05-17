/**
 * Ember Theme — entry point.
 *
 * Usage:
 *   jolli dev ./my-docs --theme ~/jolli.ai/themes/ember-theme
 */

import manifest from "./manifest.mjs";
import { buildCss } from "./css.mjs";
import { generateLayout } from "./layout.mjs";

const emberTheme = {
	manifest,
	buildCss(config) {
		return buildCss(config);
	},
	generateLayout(config) {
		return generateLayout(config);
	},
};

export default emberTheme;
