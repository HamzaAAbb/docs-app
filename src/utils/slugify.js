/**
 * Converts a heading string into a URL-safe id.
 * Used by both MarkdownRenderer (to set heading ids) and
 * TableOfContents (to build anchor hrefs) so they always match.
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')   // strip punctuation
    .trim()
    .replace(/\s+/g, '-')       // spaces → hyphens
    .replace(/-+/g, '-')        // collapse multiple hyphens
}
