/**
 * Slate Theme — entry point.
 *
 * Usage:
 *   jolli dev ./docs --theme ~/jolli.ai/themes/slate
 */

import manifest from "./manifest.mjs";
import { buildCss } from "./css.mjs";
import { generateLayout } from "./layout.mjs";

const slateTheme = {
	manifest,
	buildCss(config) {
		return buildCss(config);
	},
	generateLayout(config) {
		return generateLayout(config);
	},
};

export default slateTheme;
