import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  price,
  rating,
  location,
  className = '',
  onClick
}) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <img
          src={imageUrl || '/assets/placeholder-property.jpg'}
          alt={title}
          className="w-full h-full object-cover"
        />
        {rating && (
          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold">
            ⭐ {rating}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {title}
          </h3>
          {price && (
            <span className="text-lg font-bold text-blue-600">
              ${price}/night
            </span>
          )}
        </div>
        
        {location && (
          <p className="text-sm text-gray-600 mb-2">
            📍 {location}
          </p>
        )}
        
        {description && (
          <p className="text-gray-700 text-sm line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;