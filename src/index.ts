import {
    sanitizePhone,
    sanitizeFirstName,
    sanitizeLastName,
    sanitizeFullName,
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
    firstName: sanitizeFirstName,
    lastName: sanitizeLastName,
    fullName: sanitizeFullName,
    phone: sanitizePhone,
    email: sanitizeEmail,
    street: sanitizeStreet,
    city: sanitizeCity,
    state: sanitizeState,
    zip: sanitizeZip
};
