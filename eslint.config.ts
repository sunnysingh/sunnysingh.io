import { defineConfig } from 'eslint/config';
import css from '@eslint/css';
import html from '@html-eslint/eslint-plugin';
import js from '@eslint/js';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import typescript from 'typescript-eslint';
import * as webcomponents from 'eslint-plugin-wc';

export default defineConfig(
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
  {
    files: ['**/*.html'],
    plugins: { html },
    language: 'html/html',
    extends: ['html/recommended'],
    rules: {
      // Prettier handles formatting
      'html/indent': ['off'],
    },
  },
  {
    files: ['**/*.{js,ts}'],
    extends: [
      js.configs.recommended,
      typescript.configs.recommendedTypeChecked,
      typescript.configs.stylisticTypeChecked,
      webcomponents.configs['flat/best-practice'],
    ],
    /**
     * Enables typed linting.
     * @see https://typescript-eslint.io/getting-started/typed-linting/
     */
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.json'],
    ignores: ['.greenwood/*', 'package-lock.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.md'],
    ignores: ['src/components/README.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
    rules: {
      // Parser does not recognise alerts in GitHub Flavored Markdown:
      // https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts
      // TODO: Remove this once https://github.com/eslint/markdown/issues/294 is resolved
      'markdown/no-missing-label-refs': [
        'error',
        {
          allowLabels: ['!NOTE', '!TIP', '!IMPORTANT', '!WARNING', '!CAUTION'],
        },
      ],
    },
  }
);
