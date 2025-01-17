/**
 * Sanitizes names by capitalizing the first letter of each word and trimming excess whitespace
 * @param name - The input name string
 * @returns A sanitized name string
 */
export const sanitizeName = (name: string): string => {
    const trimmed = name.trim();
    if (!trimmed) return 'Unknown';

    return trimmed
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};
