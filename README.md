# Sanitize

A TypeScript utility library for sanitizing common contact-related fields like phone numbers, names, addresses, and more.

## Installation

```bash
npm install @div0ky/sanitize
```

## Usage

```typescript
import { sanitize } from '@div0ky/sanitize';

// Sanitize a name
const name = sanitize.name('john doe');  // Returns: 'John Doe'

// Sanitize a phone number
const phone = sanitize.phone('(123) 456-7890');  // Returns: '1234567890'

// Sanitize an email
const email = sanitize.email('User@Example.COM');  // Returns: 'user@example.com'

// Sanitize an address
const street1 = sanitize.street('123 north main street');  // Returns: '123 N Main St'
const street2 = sanitize.street('456 SOUTH WASHINGTON AVENUE #2B');  // Returns: '456 S Washington Ave #2B'
const street3 = sanitize.street('789 northwest oak drive apt 3');  // Returns: '789 NW Oak Dr #3'
const city = sanitize.city('new york');  // Returns: 'New York'
const state = sanitize.state('ny');  // Returns: 'NY'
const zip = sanitize.zip('12345');  // Returns: '12345'
const invalidZip = sanitize.zip('12345-6789');  // Returns: null
```

## API

### sanitize.name(name: string): string

Capitalizes the first letter of each word in a name and trims excess whitespace.
Returns 'Unknown' if the input is empty or only whitespace.

### sanitize.phone(phone: string): string | null

Sanitizes a phone number by removing non-numeric characters and ensuring it has 10 digits.
Returns `null` if the input is invalid or doesn't result in exactly 10 digits.

### sanitize.email(email: string): string | null

Sanitizes an email address by converting to lowercase and trimming whitespace.
Returns `null` if the email format is invalid.

### sanitize.street(address: string): string

Sanitizes street addresses following USPS standards where possible:
- Capitalizes first letter of each word except for standardized abbreviations
- Standardizes common street suffixes (St, Ave, Blvd, etc.)
- Standardizes directionals (N, S, E, W, NE, SW, etc.)
- Removes invalid characters
- Handles unit/apartment numbers
- Preserves numeric values including fractions

Returns an empty string if the input is empty or only whitespace.

Examples of standardization:
- "street" → "St"
- "avenue" → "Ave"
- "north" → "N" (when at start or end)
- "apartment 2b" → "#2B"

### sanitize.city(city: string): string

Capitalizes the first letter of each word in a city name and trims excess whitespace.
Returns 'Unknown' if the input is empty or only whitespace.

### sanitize.state(state: string): string | null

Converts state code to uppercase and validates against US state codes.
Returns `null` if the state code is invalid.
Supports all 50 US states, DC, and US territories (PR, VI, AS, GU, MP).

### sanitize.zip(zip: string): string | null

Sanitizes ZIP codes by ensuring they're exactly 5 digits.
Returns `null` if the input doesn't contain exactly 5 digits after removing non-numeric characters.

## License

MIT
