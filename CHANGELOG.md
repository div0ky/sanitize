# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-01-17

### Added
- Added type safety to all sanitization functions to handle null, undefined, and non-string inputs gracefully
- Updated function signatures to accept `string | null | undefined` as input types
- Added consistent fallback values: null for phone/state/zip, 'Unknown' for names, empty string for street addresses

## [1.0.3] - 2025-01-16

### Fixed
- Fixed handling of directional abbreviations in street addresses to keep them uppercase (e.g., "SE" stays "SE" instead of becoming "Se")
- Added more examples to street sanitization documentation

## [1.0.2] - 2025-01-16

### Added
- Support for slash-separated last names (e.g., "Smith/Jones") to handle cases where two people share a first name but have different last names

### Changed
- Updated last name handling to differentiate between compound names ("Thompson & Wilson") and slash-separated distinct names ("Smith/Jones")
- Updated documentation with examples of slash-separated last names

## [1.0.1] - 2025-01-16

### Changed
- Enhanced name sanitization to better handle edge cases
- Improved handling of periods in names, replacing them with spaces
- Updated documentation with comprehensive examples

### Fixed
- Fixed compound name handling where second part is 1-2 characters (e.g., "Jack and S." → "Jack")
- Fixed handling of existing initials in names (e.g., "J.D. Smith" → "J D Smith")
- Fixed middle name handling to preserve existing initials

## [1.0.0] - 2025-01-16

### Added
- New name sanitization functions:
  - `sanitize.firstName()`: Handle first names with titles and compound names
  - `sanitize.lastName()`: Handle last names with suffixes and compound names
  - `sanitize.fullName()`: Handle full names with middle names/initials
- Comprehensive documentation with examples
- TypeScript type definitions

### Changed
- Replaced single `sanitize.name()` with more specific name handling functions
- Moved name-related constants to dedicated constants file
- Updated all documentation to reflect new namespace approach

### Removed
- Removed generic `sanitize.name()` function in favor of more specific functions

## [0.6.0] - 2025-01-16

### Added
- Initial public release
- Basic field sanitization:
  - Name sanitization
  - Phone number sanitization
  - Email sanitization
  - Address sanitization (street, city, state, zip)
- TypeScript support
- Documentation
