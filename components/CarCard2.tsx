'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CarProps2 } from '@/types';
import { CustomButton } from '.';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CarDetails2 from './CarDetails2';

interface CarCardProps2 {
  car: CarProps2;
}

const CarCard2 = ({ car }: CarCardProps2) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className='car-card group'>
      <div className='relative flex w-full mt-2'>
        <div className='flex w-full justify-between text-gray py-3'>
          <div className='flex flex-wrap justify-center items-center gap-2'>
            <Image src={"/gas.svg"} width={20} height={20} alt='gas' />
            <p className='text-[14px]'>
              {city_mpg} 
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'></div>
          <div className='flex flex-wrap justify-center items-center gap-2 '>
            
            <span className={`bg-${drive.toUpperCase() === 'FWD' ? 'red-500' : 'green-500'} h-[10px] w-[10px] rounded-full`}>
                       
            </span>
            <p className={`text-${drive.toUpperCase() === 'FWD' ? 'red-500' : 'green-500'} text-[14px]`}>
                {drive.toUpperCase()=== 'FWD' ? 'Offline' : 'Online'}
            </p>
           
          </div>
        </div>
      </div>
      <div className='car-card__content bg-[#F8F9FF] relative w-full  my-3 object-contain'>
        <div className='car-card__content-title2 flex flex-wrap gap-4 '>
          <Image src={generateCarImageUrl(car)} alt={'avatar'} width={70} height={70} className='rounded-full bg-[#e6dfcf]'/>
          {model}
        </div>
        <div className='text-start ps-10 ms-12'>
          {make}
        </div>
        <div className='ps-10 ms-12 pt-2 flex flex-wrap gap-2'>
          <Image src={'/star2.svg'} alt={''} width={20} height={20} />
          <h1 className='text-[#FF8933]'>
            {carRent}
          </h1>
          / 3.5k reviews
        </div>
      </div>
        
      <div className='relative w-full md:p-8 grid md:grid-cols-2 gap-4 mb-5h-50'>
  {/* Grid Item 1 */}
  <div className=''>
    {/* Inner Grid for Grid Item 1 */}
    <div className='grid  justify-start'>
      {/* Inner Grid Item 1 */}
      <div className='flex flex-wrap justify-start px-2 gap-1'>
            <Image src={'/fees.svg'} alt={''} width={20} height={20}  className='text-start'/>
                <h1 className='text-start mx-2 font-extrabold text-lg text-[#37005F] '>
                    Fees
                </h1>
            <Image src={'/info.svg'} alt={''} width={20} height={20} className='mx-2 text-end'/>
      </div>
    
      <div className=' text-start px-9'>
        .75% (no props)
      </div>
    </div>
  </div>

  {/* Grid Item 2 */}
  <div className=''>
    {/* Inner Grid for Grid Item 1 */}
    <div className='grid  justify-start'>
      {/* Inner Grid Item 1 */}
      <div className='flex flex-wrap justify-start px-2 gap-1'>
            <Image src={'/fees.svg'} alt={''} width={20} height={20}  className='text-start'/>
                <h1 className='text-start mx-2 font-extrabold text-lg text-[#37005F] '>
                    Price Range
                </h1>
            <Image src={'/info.svg'} alt={''} width={20} height={20} className='mx-2 text-end'/>
      </div>
    
      <div className=' text-start px-9'>
        .75% (no props)
      </div>
    </div>
  </div>

  {/* Grid Item 3 */}
  <div className=''>
    {/* Inner Grid for Grid Item 1 */}
    <div className='grid  justify-start'>
      {/* Inner Grid Item 1 */}
      <div className='flex flex-wrap justify-start px-2 gap-1'>
            <Image src={'/fees.svg'} alt={''} width={20} height={20}  className='text-start'/>
                <h1 className='text-start mx-2 font-extrabold text-lg text-[#37005F] '>
                    Avg sale time
                </h1>
            <Image src={'/info.svg'} alt={''} width={20} height={20} className='mx-2 text-end'/>
      </div>
    
      <div className=' text-start px-9'>
        .75% (no props)
      </div>
    </div>
  </div>

  {/* Grid Item 4 */}
   <div className=''>
    {/* Inner Grid for Grid Item 1 */}
    <div className='grid  justify-start'>
      {/* Inner Grid Item 1 */}
      <div className='flex flex-wrap justify-start px-2 gap-1'>
            <Image src={'/fees.svg'} alt={''} width={20} height={20}  className='text-start'/>
                <h1 className='text-start mx-2 font-extrabold text-lg text-[#37005F] '>
                    Listed last month
                </h1>
            <Image src={'/info.svg'} alt={''} width={20} height={20} className='mx-2 text-end'/>
      </div>
    
      <div className=' text-start px-9'>
        .75% (no props)
      </div>
    </div>
  </div>
     
</div>




      <div className='relative flex w-full mt-5'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
        <div className='car-card__btn-container2 '>
          <CustomButton
            title='View Profile'
            containerStyles='w-full py-[16px] rounded-sm bg-transparent '
            textStyles=" text-[#9300FF] text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
         
        </div>
        <div className='car-card__btn-container'>
          <CustomButton
            title='View Profile'
            containerStyles='w-full py-[16px] rounded-sm bg-[#8C3AFF]'
            textStyles=" text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails2 isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard2;
