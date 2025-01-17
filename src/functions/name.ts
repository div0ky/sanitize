import { FIRST_NAME_TERMS, LAST_NAME_TERMS } from '../constants/name';

/**
 * Sanitizes a first name field by removing titles and applying proper capitalization.
 * Handles multiple first names by joining them with "&".
 * 
 * @example
 * sanitizeFirstName("mr. john") // returns "John"
 * sanitizeFirstName("dr. jane sho") // returns "Jane"
 * sanitizeFirstName("bob and jim") // returns "Bob & Jim"
 * 
 * @param first_name - The input first name
 * @returns Sanitized first name string
 */
export const sanitizeFirstName = (first_name: string): string => {
    const trimmed = first_name.trim();
    if (!trimmed) return 'Unknown';

    // Remove titles and specific terms
    let cleaned = trimmed;
    FIRST_NAME_TERMS.forEach(pattern => {
        cleaned = cleaned.replace(pattern, '');
    });
    cleaned = cleaned.trim();

    // Standardize multiple names
    const standardized = cleaned
        .replace(/\s+and\s+/gi, ' & ')
        .replace(/\s*&\s*/g, ' & ')
        .replace(/\s+/g, ' ');

    // Handle multiple first names
    return standardized
        .split(' & ')
        .map(name => capitalizeWords(name))
        .join(' & ');
};

/**
 * Sanitizes a last name field by removing suffixes and applying proper capitalization.
 * Handles multiple last names by joining them with "&".
 * 
 * @example
 * sanitizeLastName("smith jr.") // returns "Smith"
 * sanitizeLastName("jones esq") // returns "Jones"
 * sanitizeLastName("thompson and wilson") // returns "Thompson & Wilson"
 * 
 * @param last_name - The input last name
 * @returns Sanitized last name string
 */
export const sanitizeLastName = (last_name: string): string => {
    const trimmed = last_name.trim();
    if (!trimmed) return 'Unknown';

    // Remove suffixes
    let cleaned = trimmed;
    LAST_NAME_TERMS.forEach(pattern => {
        cleaned = cleaned.replace(pattern, '');
    });
    cleaned = cleaned.trim();

    // Standardize multiple names
    const standardized = cleaned
        .replace(/\s+and\s+/gi, ' & ')
        .replace(/\s*&\s*/g, ' & ')
        .replace(/\s+/g, ' ');

    // Handle multiple last names
    return standardized
        .split(' & ')
        .map(name => capitalizeWords(name))
        .join(' & ');
};

/**
 * Sanitizes a full name string by:
 * 1. Removing titles (Mr., Mrs., etc.) and suffixes (Jr., Sr., etc.)
 * 2. Converting all middle names to initials
 * 3. Applying proper capitalization
 * 4. Preserving the first name and last name in full
 * 
 * @example
 * sanitizeFullName("aaron spurlock") // returns "Aaron Spurlock"
 * sanitizeFullName("aaron jennings spurlock") // returns "Aaron J Spurlock"
 * sanitizeFullName("mr. aaron patrick jennings spurlock jr.") // returns "Aaron PJ Spurlock"
 * sanitizeFullName("spurlock") // returns "Spurlock"
 * 
 * @param full_name - The input full name string
 * @returns Sanitized full name string with middle names converted to initials
 */
export const sanitizeFullName = (full_name: string): string => {
    const trimmed = full_name.trim();
    if (!trimmed) return 'Unknown';

    // Remove titles and suffixes
    let cleaned = trimmed;
    [...FIRST_NAME_TERMS, ...LAST_NAME_TERMS].forEach(pattern => {
        cleaned = cleaned.replace(pattern, '');
    });
    cleaned = cleaned.trim();

    // Split into name parts
    const name_parts = cleaned.split(/\s+/);
    
    // Handle single word names
    if (name_parts.length === 1) {
        return capitalizeWords(name_parts[0]);
    }

    // Extract first name, middle names, and last name
    const first_name = name_parts[0];
    const last_name = name_parts[name_parts.length - 1];
    const middle_names = name_parts.slice(1, -1);

    // Convert middle names to initials
    const middle_initials = middle_names
        .map(name => name.charAt(0).toUpperCase())
        .join('');

    // Combine the parts
    const result = [
        capitalizeWords(first_name),
        middle_initials.length > 0 ? middle_initials : null,
        capitalizeWords(last_name)
    ].filter(Boolean).join(' ');

    return result;
};

/**
 * Helper function to capitalize words in a name
 * @param text - The input text to capitalize
 * @returns Capitalized text
 */
const capitalizeWords = (text: string): string => {
    return text
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};
