/**
 * Sanitizes a ZIP code by ensuring it's exactly 5 digits
 * @param zip - The input ZIP code string
 * @returns A sanitized 5-digit ZIP code or null if invalid
 */
export const sanitizeZip = (zip: string): string | null => {
    const trimmed = zip.trim();
    if (!trimmed) return null;

    // Remove all non-numeric characters
    const sanitized = trimmed.replace(/\D/g, '');

    // ZIP code must be exactly 5 digits
    return sanitized.length === 5 ? sanitized : null;
};
