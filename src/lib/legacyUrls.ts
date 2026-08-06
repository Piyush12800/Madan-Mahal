/**
 * The previous site ran on HashRouter, so every link that exists in the wild —
 * bookmarks, WhatsApp forwards, printed material, search results — looks like
 * `https://www.choukseypaper.in/#/products`.
 *
 * This rewrites those to real paths before React mounts, so BrowserRouter never
 * sees the stale hash. Two of the old routes no longer exist under the same
 * name, so they are mapped rather than dropped.
 */
const ROUTE_MAP: Record<string, string> = {
  '/': '/',
  '/about': '/about',
  '/products': '/catalogue',
  '/contact': '/enquire',
};

/** Only used to spot the old product route; its ids do not map to new slugs. */
const LEGACY_PRODUCT = /^\/product\/[^/]*$/;

/**
 * Returns the path a legacy hash URL should become, or null if the current URL
 * is not a legacy one. Exported separately from the side effect so it can be
 * reasoned about without a browser.
 */
export function resolveLegacyHash(hash: string): string | null {
  // In-page anchors like `#rulings` are current, not legacy — leave them alone.
  if (!hash.startsWith('#/')) return null;

  const path = hash.slice(1);

  if (ROUTE_MAP[path]) return ROUTE_MAP[path];

  // Old product ids (p-001 …) have no equivalent, so send them to the catalogue
  // rather than to a 404.
  if (LEGACY_PRODUCT.test(path)) return '/catalogue';

  // Anything else under #/ is unknown: hand it to the router as a real path and
  // let the 404 page deal with it.
  return path;
}

export function migrateLegacyHashUrl(): void {
  const target = resolveLegacyHash(window.location.hash);
  if (!target) return;

  window.history.replaceState(
    null,
    '',
    target + window.location.search,
  );
}

/**
 * `document.querySelector` throws a SyntaxError on anything that is not a valid
 * selector — `#/` among them — and an uncaught throw inside an effect unmounts
 * the whole tree. Only element ids are ever wanted here.
 */
export function findHashTarget(hash: string): Element | null {
  if (!/^#[A-Za-z][\w-]*$/.test(hash)) return null;
  return document.querySelector(hash);
}
