import { STREET_SUFFIXES, DIRECTIONS } from '../constants/address';

/**
 * Sanitizes a street address following USPS standards where possible:
 * - Capitalizes first letter of each word except for standardized abbreviations
 * - Standardizes common street suffixes (St, Ave, etc.)
 * - Standardizes directionals (N, S, E, W, NE, SE, etc.)
 * - Removes invalid characters
 * - Handles unit/apartment numbers
 * 
 * @example
 * sanitizeStreet("123 north main street") // returns "123 N Main St"
 * sanitizeStreet("456 SE oak drive") // returns "456 SE Oak Dr"
 * sanitizeStreet("789 northwest 1st avenue #2b") // returns "789 NW 1st Ave #2B"
 * 
 * @param address - The input street address string
 * @returns A sanitized street address string
 */
export const sanitizeStreet = (address: string | null | undefined): string => {
    // Handle null, undefined, or non-string input
    if (!address || typeof address !== 'string') {
        return '';
    }

    const trimmed = address.trim();
    if (!trimmed) return '';

    // Remove any characters that shouldn't be in an address
    let sanitized = trimmed.replace(/[^a-zA-Z0-9\s#\-./]/g, '');
    
    // Split into words and process each
    const words = sanitized.split(' ').filter(word => word.length > 0);
    
    // Process each word
    const processedWords = words.map((word, index) => {
        const lowerWord = word.toLowerCase();
        const upperWord = word.toUpperCase();
        
        // Check if it's a street suffix (typically at the end)
        if (STREET_SUFFIXES[lowerWord]) {
            return STREET_SUFFIXES[lowerWord];
        }
        
        // Check if it's a direction
        if (DIRECTIONS[lowerWord]) {
            return DIRECTIONS[lowerWord];
        }
        
        // Check if it's already a directional abbreviation (SE, NW, etc.)
        if (Object.values(DIRECTIONS).includes(upperWord)) {
            return upperWord;
        }
        
        // Handle unit/apartment numbers
        if (lowerWord.startsWith('#')) {
            return word.toUpperCase(); // Keep # and the number as is
        }
        
        // Handle numeric portions (including fractions like 1/2)
        if (word.match(/^\d+(?:\/\d+)?$/)) {
            return word;
        }
        
        // For everything else, capitalize first letter
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    
    return processedWords.join(' ');
};
