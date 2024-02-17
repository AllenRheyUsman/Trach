"use client";

// Import necessary libraries and components
import React, { useState } from 'react';
import { PropertyProps } from '@/types';
import { CustomButton } from '.';
import { FaPhone } from 'react-icons/fa';

// Define the PropertyCardProps interface
interface PropertyCardProps {
  property: PropertyProps;
}

// Define the PropertyCard component
const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  // Initialize state
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to format price
  const formatPrice = (price: number): string => {
    return price >= 1000 ? (price / 1000).toFixed(1) + 'K' : price.toString();
  };

  // Render the PropertyCard component
  return (
    <div className='shadow-sm gap-5 flex flex-col p-5 justify-center items-start bg-primary-blue-100 hover:bg-white hover:shadow-lg rounded-3xl'>
      {/* Large Picture */}
      <div className='relative'>
        <img
          className='w-full h-64 object-cover rounded-lg mb-4'
          src={property.photos[0]?.href || ''}
          alt='Property Photo'
        />
      </div>

      {/* Branding Name */}
      <div className='space-y-1 font-medium dark:text-white'>
        <div className='text-md font-bold text-purple-500'>{property.branding[0]?.name}</div>
        <div className='text-sm text-gray-500 dark:text-gray-400'>{property.branding[0]?.name}</div>
      </div>

      {/* Footer - View Profile button */}
      <div className='relative flex w-full mt-4'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='car-card__btn-container2 hover:bg-purple-400 rounded-lg'>
            <CustomButton
              title='View Profile'
              containerStyles='w-full py-[16px] rounded-sm bg-transparent border'
              textStyles='text-[#9300FF] text-[14px] leading-[17px] font-bold'
              rightIcon='/right-arrow.svg'
              handleClick={() => console.log('View Profile clicked')}
            />
          </div>
        </div>
        <div className='car-card__btn-container rounded-lg'>
          <CustomButton
            title='View Profile'
            containerStyles='w-full py-[16px] rounded-sm bg-[#8C3AFF]'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => console.log('View Profile clicked')}
          />
        </div>
      </div>
    </div>
  );
};

// Export the PropertyCard component
export default PropertyCard;




