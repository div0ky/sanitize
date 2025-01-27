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

import { formatPhone } from './functions/phone';

/**
 * A collection of utility functions for sanitizing common contact-related fields
 */
const sanitize = {
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

const format = {
    phone: formatPhone
}

export { sanitize, format }