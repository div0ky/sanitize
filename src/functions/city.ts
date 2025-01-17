/**
 * Sanitizes a city by capitalizing the first letter of each word and trimming excess whitespace
 * @param city - The input city string
 * @returns A sanitized city string
 */
export const sanitizeCity = (city: string): string => {
    const trimmed = city.trim();
    if (!trimmed) return '';

    return trimmed
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};
