/**
 * Sanitizes an email address by converting to lowercase and trimming whitespace
 * @param email - The input email string
 * @returns A sanitized email string or null if invalid
 */
export const sanitizeEmail = (email: string): string | null => {
    const trimmed = email.trim().toLowerCase();
    if (!trimmed) return null;

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(trimmed) ? trimmed : null;
};
