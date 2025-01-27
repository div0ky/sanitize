/**
 * Sanitizes a phone number by removing non-numeric characters and ensuring it has 10 digits
 * @param phone - The input phone number string
 * @returns A sanitized 10-digit phone number or null if invalid
 */
export const sanitizePhone = (phone: string | null | undefined): string | null => {
    // Handle null, undefined, or non-string input
    if (!phone || typeof phone !== 'string') {
        return null;
    }

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


/**
 * Formats a sanitized 10-digit phone number into (XXX) XXX-XXXX format
 * @param phone - A sanitized 10-digit phone number
 * @returns Formatted phone number string or null if input is invalid
 */
export const formatPhone = (phone: string | null | undefined): string | null => {
    // Handle null, undefined, or non-string input
    if (!phone || typeof phone !== 'string') {
        return null;
    }

    // Ensure the input is exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
        return null;
    }

    // Format as (XXX) XXX-XXXX
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
};