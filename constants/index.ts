// API Configuration
export const API_CONFIG = {
    BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api',
    ENDPOINTS: {
      PROPERTIES: '/properties',
      USERS: '/users',
      BOOKINGS: '/bookings',
      AUTH: '/auth'
    }
  };
  
  // UI Text Constants
  export const UI_TEXT = {
    BUTTONS: {
      BOOK_NOW: 'Book Now',
      VIEW_DETAILS: 'View Details',
      CANCEL: 'Cancel',
      CONFIRM: 'Confirm',
      SEARCH: 'Search',
      FILTER: 'Filter',
      LOAD_MORE: 'Load More'
    },
    LABELS: {
      PRICE_PER_NIGHT: 'per night',
      GUESTS: 'Guests',
      BEDROOMS: 'Bedrooms',
      BATHROOMS: 'Bathrooms',
      CHECK_IN: 'Check-in',
      CHECK_OUT: 'Check-out',
      LOCATION: 'Location'
    },
    MESSAGES: {
      LOADING: 'Loading...',
      NO_RESULTS: 'No properties found',
      ERROR_GENERIC: 'Something went wrong. Please try again.',
      BOOKING_SUCCESS: 'Booking confirmed successfully!',
      BOOKING_ERROR: 'Failed to complete booking. Please try again.'
    }
  };
  
  // App Configuration
  export const APP_CONFIG = {
    NAME: 'ALX Listing App',
    DESCRIPTION: 'Find and book amazing places to stay',
    VERSION: '1.0.0',
    CONTACT_EMAIL: 'support@alxlisting.com'
  };
  
  // Pagination Settings
  export const PAGINATION = {
    DEFAULT_PAGE_SIZE: 12,
    MAX_PAGE_SIZE: 50
  };
  
  // Image Settings
  export const IMAGES = {
    PLACEHOLDER_PROPERTY: '/assets/placeholder-property.jpg',
    PLACEHOLDER_USER: '/assets/placeholder-user.jpg',
    LOGO: '/assets/logo.svg'
  };
  
  // Popular Amenities List
  export const AMENITIES = [
    'WiFi',
    'Kitchen',
    'Air Conditioning',
    'Heating',
    'Parking',
    'Pool',
    'Hot Tub',
    'Gym',
    'Pet Friendly',
    'Smoking Allowed',
    'TV',
    'Washer/Dryer',
    'Balcony',
    'Garden',
    'Beach Access'
  ];
  
  // Property Types
  export const PROPERTY_TYPES = [
    'Apartment',
    'House',
    'Villa',
    'Condo',
    'Townhouse',
    'Loft',
    'Studio',
    'Cabin',
    'Cottage',
    'Mansion'
  ];
  
  // Validation Rules
  export const VALIDATION = {
    MIN_TITLE_LENGTH: 5,
    MAX_TITLE_LENGTH: 100,
    MIN_DESCRIPTION_LENGTH: 20,
    MAX_DESCRIPTION_LENGTH: 1000,
    MIN_PRICE: 1,
    MAX_PRICE: 10000,
    MIN_GUESTS: 1,
    MAX_GUESTS: 20
  };
  
  // Date Formats
  export const DATE_FORMATS = {
    DISPLAY: 'MMM DD, YYYY',
    API: 'YYYY-MM-DD',
    DATETIME: 'YYYY-MM-DD HH:mm:ss'
  };