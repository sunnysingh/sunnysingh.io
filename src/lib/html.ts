/**
 * Provides embedded language hinting for Lit-compatible tooling.
 * In the future, this may provide additional render capabilities.
 * IMPORTANT: This must maintain server-side compatibility.
 */
export function html(
  strings: TemplateStringsArray,
  ...substitutions: unknown[]
): string {
  return String.raw(strings, ...substitutions);
}
