# Jolli Themes
春眠不觉晓

处处闻啼鸟

Community themes for [Jolli](https://jolli.ai) documentation sites.

Each theme is a self-contained directory with layout, CSS, and a manifest that the Jolli CLI (`jolli dev`, `jolli build`) picks up automatically.

this is the new line

## Available Themes

| Theme | Description |
|-------|-------------|
| **jollia** | Modern theme with centered search, second-row tabs, and green accent |
| **ember** | Warm fixed sidebar with CSS Grid layout, no tabs |
| **slate** | Collapsible sidebar with rich multi-column footer |
| **flux** | Production-grade Forge variant with extended CSS |
| **forge** | Developer-focused sidebar layout with accent-driven design tokens |
| **atlas** | Editorial handbook with serif headlines, dark default, and masthead footer |

## Installation

Install a theme via the Jolli CLI:

```bash
jolli theme install <name>
```

Themes are downloaded to `~/.jolli/themes/<name>/`.

To use an installed theme, set it in your `site.json`:

```json
{
  "theme": {
    "pack": "<name>"
  }
}
```

## Listing Themes

```bash
jolli theme list
```

Shows all available themes, installed versions, and available updates.

## Previewing a Theme

```bash
jolli theme preview <name>
```

Downloads the theme (if not already installed) and launches a local dev server with demo content.

## Theme Structure

Each theme directory contains four files:

```
<theme-name>/
  manifest.mjs   # Version, name, and metadata
  index.mjs      # Entry point — exports layout, CSS, and components
  layout.mjs     # React layout component (navbar, sidebar, footer)
  css.mjs        # CSS string for theme-specific styles
```

### manifest.mjs

```js
export default {
  name: "my-theme",
  version: "1.0.0",
  description: "A short description of the theme",
};
```

### index.mjs

The entry point that re-exports the theme's layout and CSS:

```js
export { default as layout } from "./layout.mjs";
export { default as css } from "./css.mjs";
```

## Creating a New Theme

1. Create a directory under your fork with the theme name.
2. Add `manifest.mjs`, `index.mjs`, `layout.mjs`, and `css.mjs`.
3. Add the theme to `registry.json` with a matching version.
4. Run the validation workflow to verify: `node .github/workflows/validate.yml` (or push to trigger CI).
5. Submit a pull request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full contribution workflow.

## License

[Apache License 2.0](LICENSE)
