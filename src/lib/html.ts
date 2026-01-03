/**
 * Embedded language hint.
 * Works with Prettier: https://prettier.io/docs/options#embedded-language-formatting
 * Also VS Code: https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html
 * In the future, this may provide additional render capabilities.
 * IMPORTANT: This must maintain server-side compatibility.
 */
export function html(
  strings: TemplateStringsArray,
  ...substitutions: unknown[]
): string {
  return String.raw(strings, ...substitutions);
}
