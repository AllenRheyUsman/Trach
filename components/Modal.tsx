'use client';

import {useState} from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import { CustomButton } from '.';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CarDetails from './CarDetails';
import CommonCard from './CommonCard';

interface CarCardProps{
    car: CarProps;
}
const Modal = () => {
    
    const [isOpen, setIsOpen]=useState(false);

  
  return (
    
   
        
                <div className='rounded-md bg-black'>
                    <CustomButton 
                        title=''
                        containerStyles='  '
                        textStyles=""
                        rightIcon="/filter.svg"
                        handleClick={() =>setIsOpen(true)}
                    />
                     <CommonCard isOpen={isOpen} closeModal={()=>setIsOpen(false)}/>
                </div>
               
       
       
   
  )
}

export default Modal