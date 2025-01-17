/**
 * Regular expressions for removing title prefixes from names.
 * Matches common titles like Mr., Mrs., Dr., etc., with or without periods,
 * and removes any following whitespace.
 * Note: Order matters - longer matches (e.g., 'mrs') must come before shorter ones (e.g., 'mr')
 * 
 * @example
 * "Mr. John" -> "John"
 * "Mrs. Jane" -> "Jane"
 * "Dr Jane" -> "Jane"
 */
export const FIRST_NAME_TERMS = [
    'mrs', // Must come before 'mr'
    'mr',
    'ms',
    'miss',
    'dr',
    'prof',
    'rev',
    'sho' // single home owner
].map(term => new RegExp(`\\b${term}\\.?\\s*`, 'gi'));

/**
 * Regular expressions for removing name suffixes.
 * Matches common suffixes like Jr., Sr., Esq., with or without periods,
 * and removes any following whitespace.
 * 
 * @example
 * "Smith Jr." -> "Smith"
 * "Jones Sr" -> "Jones"
 * "Thompson Esq." -> "Thompson"
 */
export const LAST_NAME_TERMS = [
    'jr', 'sr', 'esq'
].map(term => new RegExp(`\\b${term}\\.?\\s*`, 'gi'));
