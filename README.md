# [sunnysingh.io](https://sunnysingh.io/)

👋 Hello! This is the source code of my personal website, [sunnysingh.io](https://sunnysingh.io/).

## ⚡️ Quick start

1. Use [Mise](https://mise.jdx.dev/) to install Node.js: `mise install`
2. Install Node.js dependencies: `npm install`
3. Run development server: `npm run dev`

## ✅ Code Quality

> [!IMPORTANT]
> While Biome is great, it does not yet support embedded languages (template literals) which this project will use extensively. I am considering on switching back to Prettier (for built-in support) and ESLint (with [html-eslint](https://html-eslint.org/docs/getting-started#lint-html-code-inside-javascript-template-literals)).

[Biome](https://biomejs.dev/) is the primary toolchain for code quality checks, including linting and formatting. Additionally, all code is written in [TypeScript](https://www.typescriptlang.org/) with [Node.js' type stripping](https://nodejs.org/docs/latest/api/typescript.html#type-stripping), and the TypeScript compiler is only used for type checking.

To run all checks:

```sh
npm run checks
```

Individual scripts are also available:

- `npm run typecheck`
- `npm run biomecheck`
- `npm run lint`
- `npm run format`

## 📝 Writing

TODO: Will probably use Markdown with Web Components.

## 🚀 Deploy

TODO: Will probably use GitHub Pages.
