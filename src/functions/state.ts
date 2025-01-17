import { VALID_STATES } from '../constants/states';

/**
 * Sanitizes a state by converting to uppercase and validating against US state codes
 * @param state - The input state string
 * @returns A sanitized state code or null if invalid
 */
export const sanitizeState = (state: string): string | null => {
    const trimmed = state.trim().toUpperCase();
    if (!trimmed) return null;

    return VALID_STATES.has(trimmed) ? trimmed : null;
};
