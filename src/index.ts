import {
    sanitizePhone,
    sanitizeName,
    sanitizeEmail,
    sanitizeStreet,
    sanitizeCity,
    sanitizeState,
    sanitizeZip
} from './functions';

/**
 * A collection of utility functions for sanitizing common contact-related fields
 */
export const sanitize = {
    name: sanitizeName,
    phone: sanitizePhone,
    email: sanitizeEmail,
    street: sanitizeStreet,
    city: sanitizeCity,
    state: sanitizeState,
    zip: sanitizeZip
};

// Also export individual functions for direct use
export {
    sanitizePhone,
    sanitizeName,
    sanitizeEmail,
    sanitizeStreet,
    sanitizeCity,
    sanitizeState,
    sanitizeZip
};