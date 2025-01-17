/**
 * Common street suffix abbreviations following USPS standards
 */
export const STREET_SUFFIXES: { [key: string]: string } = {
    'avenue': 'Ave',
    'boulevard': 'Blvd',
    'circle': 'Cir',
    'court': 'Ct',
    'drive': 'Dr',
    'lane': 'Ln',
    'parkway': 'Pkwy',
    'place': 'Pl',
    'road': 'Rd',
    'street': 'St',
    'terrace': 'Ter',
    'way': 'Way',
    // Common abbreviations should map to standard ones
    'ave': 'Ave',
    'blvd': 'Blvd',
    'cir': 'Cir',
    'ct': 'Ct',
    'dr': 'Dr',
    'ln': 'Ln',
    'pkwy': 'Pkwy',
    'pl': 'Pl',
    'rd': 'Rd',
    'st': 'St',
    'ter': 'Ter'
};

/**
 * Common directional abbreviations following USPS standards
 */
export const DIRECTIONS: { [key: string]: string } = {
    'north': 'N',
    'south': 'S',
    'east': 'E',
    'west': 'W',
    'northeast': 'NE',
    'northwest': 'NW',
    'southeast': 'SE',
    'southwest': 'SW',
    // Common abbreviations should map to standard ones
    'n': 'N',
    's': 'S',
    'e': 'E',
    'w': 'W',
    'ne': 'NE',
    'nw': 'NW',
    'se': 'SE',
    'sw': 'SW'
};
