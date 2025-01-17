import { FIRST_NAME_TERMS, LAST_NAME_TERMS } from '../constants/name';

/**
 * Sanitizes a first name field by removing titles and applying proper capitalization.
 * In compound names (connected by "and" or "&"), removes second names that are 1-2 characters.
 * 
 * @example
 * sanitizeFirstName("mr. john") // returns "John"
 * sanitizeFirstName("bob and jim") // returns "Bob & Jim"
 * sanitizeFirstName("bob and s.") // returns "Bob"
 * sanitizeFirstName("jack & DD") // returns "Jack"
 * sanitizeFirstName("J.D. smith") // returns "J D Smith"
 * 
 * @param first_name - The input first name
 * @returns Sanitized first name string
 */
export const sanitizeFirstName = (first_name: string | null | undefined): string => {
    // Handle null, undefined, or non-string input
    if (!first_name || typeof first_name !== 'string') {
        return 'Unknown';
    }

    const trimmed = first_name.trim();
    if (!trimmed) return 'Unknown';

    // Remove titles and specific terms
    let cleaned = trimmed;
    FIRST_NAME_TERMS.forEach(pattern => {
        cleaned = cleaned.replace(pattern, '');
    });
    cleaned = cleaned.trim();

    // Remove all periods
    cleaned = cleaned.replace(/\./g, ' ');

    // Handle compound names with short second parts
    const parts = cleaned.split(/\s+(?:and|&)\s+/i);
    if (parts.length > 1 && parts[1].trim().length <= 2) {
        cleaned = parts[0];
    }

    // Standardize remaining "and"/"&" if present
    const standardized = cleaned
        .replace(/\s+and\s+/gi, ' & ')
        .replace(/\s*&\s*/g, ' & ')
        .replace(/\s+/g, ' ');

    return capitalizeWords(standardized);
};

/**
 * Sanitizes a last name field by removing suffixes and applying proper capitalization.
 * Handles slash-separated names as distinct last names, preserving each name's capitalization.
 * 
 * @example
 * sanitizeLastName("smith jr.") // returns "Smith"
 * sanitizeLastName("thompson and wilson") // returns "Thompson & Wilson"
 * sanitizeLastName("smith/jones") // returns "Smith/Jones"
 * sanitizeLastName("smith\\jones") // returns "Smith/Jones"
 * 
 * @param last_name - The input last name
 * @returns Sanitized last name string
 */
export const sanitizeLastName = (last_name: string | null | undefined): string => {
    // Handle null, undefined, or non-string input
    if (!last_name || typeof last_name !== 'string') {
        return 'Unknown';
    }

    const trimmed = last_name.trim();
    if (!trimmed) return 'Unknown';

    // Remove suffixes
    let cleaned = trimmed;
    LAST_NAME_TERMS.forEach(pattern => {
        cleaned = cleaned.replace(pattern, '');
    });
    cleaned = cleaned.trim();

    // Handle slash-separated names (both forward and backward slashes)
    if (cleaned.includes('/') || cleaned.includes('\\')) {
        // Split on either type of slash and clean each part
        return cleaned
            .split(/[/\\]/)
            .map(name => capitalizeWords(name.trim()))
            .join('/');
    }

    // Standardize multiple names with "and" or "&"
    const standardized = cleaned
        .replace(/\s+and\s+/gi, ' & ')
        .replace(/\s*&\s*/g, ' & ')
        .replace(/\s+/g, ' ');

    return capitalizeWords(standardized);
};

/**
 * Sanitizes a full name string by:
 * 1. Removing titles and suffixes
 * 2. Converting middle names to initials
 * 3. Handling compound names with short parts
 * 4. Replacing periods with spaces in initials
 * 
 * @example
 * sanitizeFullName("aaron spurlock") // returns "Aaron Spurlock"
 * sanitizeFullName("aaron j. spurlock") // returns "Aaron J Spurlock"
 * sanitizeFullName("mr. aaron patrick jennings spurlock jr.") // returns "Aaron PJ Spurlock"
 * sanitizeFullName("j.r. bob smith") // returns "J R Bob Smith"
 * sanitizeFullName("jack and s. thompson") // returns "Jack Thompson"
 * 
 * @param full_name - The input full name string
 * @returns Sanitized full name string
 */
export const sanitizeFullName = (full_name: string | null | undefined): string => {
    // Handle null, undefined, or non-string input
    if (!full_name || typeof full_name !== 'string') {
        return 'Unknown';
    }

    const trimmed = full_name.trim();
    if (!trimmed) return 'Unknown';

    // Remove titles and suffixes
    let cleaned = trimmed;
    [...FIRST_NAME_TERMS, ...LAST_NAME_TERMS].forEach(pattern => {
        cleaned = cleaned.replace(pattern, '');
    });
    cleaned = cleaned.trim();

    // Replace periods with spaces
    cleaned = cleaned.replace(/\./g, ' ');

    // Handle compound names with short second parts
    const parts = cleaned.split(/\s+(?:and|&)\s+/i);
    if (parts.length > 1 && parts[1].trim().length <= 2) {
        cleaned = parts[0];
    }

    // Standardize spaces
    cleaned = cleaned.replace(/\s+/g, ' ').trim();

    // Split into name parts
    const name_parts = cleaned.split(/\s+/);
    
    // Handle single word names
    if (name_parts.length === 1) {
        return capitalizeWords(name_parts[0]);
    }

    // Extract first name, potential middle names, and last name
    const first_name = name_parts[0];
    const last_name = name_parts[name_parts.length - 1];
    const middle_names = name_parts.slice(1, -1);

    // Handle middle names/initials
    let middle_part = '';
    if (middle_names.length > 0) {
        // If a middle part is already an initial (1-2 chars), keep it as is
        // Otherwise, convert to initial
        middle_part = middle_names
            .map(name => name.length <= 2 ? name.toUpperCase() : name.charAt(0).toUpperCase())
            .join('');
        middle_part = middle_part ? ` ${middle_part} ` : ' ';
    } else {
        middle_part = ' ';
    }

    return `${capitalizeWords(first_name)}${middle_part}${capitalizeWords(last_name)}`;
};

/**
 * Helper function to capitalize words in a name
 * @param text - The input text to capitalize
 * @returns Capitalized text
 */
export const capitalizeWords = (text: string | null | undefined): string => {
    // Handle null, undefined, or non-string input
    if (!text || typeof text !== 'string') {
        return '';
    }

    const trimmed = text.trim();
    if (!trimmed) return '';

    return trimmed
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};
