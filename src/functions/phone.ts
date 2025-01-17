/**
 * Sanitizes a phone number by removing non-numeric characters and ensuring it has 10 digits
 * @param phone - The input phone number string
 * @returns A sanitized 10-digit phone number or null if invalid
 */
export const sanitizePhone = (phone: string): string | null => {
    const trimmed = phone.trim();
    if (!trimmed) return null;

    // Remove all non-numeric characters
    let sanitized = phone.replace(/\D/g, '');

    // Remove leading +1 or 1 if present
    if (sanitized.startsWith('1')) {
        sanitized = sanitized.slice(1);
    }

    // Return the number if it's exactly 10 digits, otherwise null
    return sanitized.length === 10 ? sanitized : null;
};
