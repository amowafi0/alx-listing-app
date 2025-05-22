// Card Component Props Interface
export interface CardProps {
    title: string;
    description?: string;
    imageUrl?: string;
    price?: number;
    rating?: number;
    location?: string;
    className?: string;
    onClick?: () => void;
  }
  
  // Button Component Props Interface
  export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
  }
  
  // Property/Listing Interface
  export interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    location: string;
    imageUrl: string;
    rating: number;
    amenities: string[];
    hostName: string;
    hostImage?: string;
    bedrooms: number;
    bathrooms: number;
    guests: number;
    createdAt: string;
    updatedAt: string;
  }
  
  // User Interface
  export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: 'guest' | 'host' | 'admin';
    createdAt: string;
  }
  
  // Booking Interface
  export interface Booking {
    id: string;
    propertyId: string;
    userId: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    totalPrice: number;
    status: 'pending' | 'confirmed' | 'cancelled';
    createdAt: string;
  }
  
  // Filter Interface for search functionality
  export interface FilterOptions {
    location?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    bathrooms?: number;
    amenities?: string[];
    rating?: number;
  }
  
  // API Response Interface
  export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    error?: string;
  }