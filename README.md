# [sunnysingh.io](https://sunnysingh.io/)

👋 Hello! This is the source code of my personal website, [sunnysingh.io](https://sunnysingh.io/).

## ⚡️ Quick start

1. Use [Mise](https://mise.jdx.dev/) to install Node.js: `mise install`
2. Install Node.js dependencies: `npm install`
3. Run development server: `npm run dev`

## ✅ Code Quality

The entire codebase is written in [TypeScript](https://www.typescriptlang.org/) and run via [Node.js' type stripping](https://nodejs.org/docs/latest/api/typescript.html#type-stripping). The code is type checked via the TypeScript compiler and linted via [ESLint](https://eslint.org/). Formatting is done by [Prettier](https://prettier.io/).

### Usage

To run all checks:

```sh
npm run checks
```

Individual scripts are also available:

- `npm run typecheck`
- `npm run lint:check`
- `npm run format:check`

### Architecture Decision

The decision to use ESLint and Prettier was done on January 3rd, 2026. At this time, they provide the best support for linting and formatting HTML within template literal strings. Prettier supports this [via default embedded language formatting](https://prettier.io/docs/options#embedded-language-formatting), and ESLint provides the [html-eslint](https://html-eslint.org/docs/getting-started#lint-html-code-inside-javascript-template-literals) plugin. Additionally, [eslint-plugin-wc](https://github.com/43081j/eslint-plugin-wc) provides rules for Web Components.

## 📝 Writing

TODO: Will probably use Markdown with Web Components.

## 🚀 Deploy

TODO: Will probably use GitHub Pages.
