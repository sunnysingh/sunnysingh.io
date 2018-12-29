export function trimTrailingSlash(url) {
  if (!url) return url;
  return url.endsWith('/') ? url.slice(0, -1) : url;
}
