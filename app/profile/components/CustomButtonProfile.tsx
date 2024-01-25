'use client';

import React from 'react'
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

const CustomButtonProfile = ({ title, containerStyles, handleClick, textStyles, rightIcon, isDisabled, btnType}: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || 'button'}
        className={`custom-btn  ${containerStyles}`}
        onClick={handleClick}
    >
       
        {rightIcon && (
          <div className='relative w-6 h-6 flex justify-end mr-2'>
            <Image
              src={rightIcon}
              fill
              className='object-contain opacity-[50%]'
              alt='right icon'
            />
            
          </div>
        )}
         <span className={`opacity-[70%] ${textStyles}`}>
           {title}
        </span>
    </button>
  )
}

export default CustomButtonProfile