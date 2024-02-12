'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CarProps2 } from '@/types';

import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CarDetails2 from '../../../../components/CarDetails2';
import { useRouter } from 'next/navigation';
import CustomButtonProfile from './CustomButtonProfile';
import { Avatar, Rating } from 'flowbite-react';
import AccordionProfile from './AccordionProfile';



interface CarCardProps2 {
  car: CarProps2;
}

const ProfileCard = ({ car }: CarCardProps2) => {
  const { city_mpg, year, make, model,  drive, transmission } = car;
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialize the router

  const carRent = calculateCarRent(city_mpg, year);
  const handleViewProfile = () => {
    // Use the router to navigate to the profile page with the manufacturer parameter
    router.push(`/message?model=${model}`);
  };

  return (
    <div className='shadow-sm p-5 justify-center items-start bg-primary-blue-100 hover:bg-white hover:shadow-lg rounded-3xl group  h-full z-50 mx-5'>
      {/* Gas efficiency and drive information */}
      <div className='relative flex w-full'>
        <div className='flex w-full justify-center text-gray py-3 ml-auto'>
          
            <Image src={"/slack.svg"} width={80} height={20} alt='gas' />
            {/* <p className='text-[14px] rounded-full'>
              {city_mpg}
            </p> */}
          
          <div className='flex flex-col justify-center items-center gap-2'></div>
          {/* <div className='flex flex-wrap justify-center items-center gap-2 '>
            <span className={`bg-${drive.toUpperCase() === 'FWD' ? 'red-500' : 'green-500'} h-[10px] w-[10px] rounded-full`}></span>
            <p className={`text-${drive.toUpperCase() === 'FWD' ? 'red-500' : 'green-500'} text-[14px]`}>
              {drive.toUpperCase()=== 'FWD' ? 'Offline' : 'Online'}
            </p>
          </div> */}
        </div>
      </div>

      {/* Car details and image */}
      <div className='items-center bg-[#F8F9FF] w-full  my-3 relative flex flex-col'>
        
      <Avatar img={generateCarImageUrl(car)} size="xl" stacked rounded status={`${drive.toUpperCase() === 'FWD' ? 'offline' : 'online'}`} statusPosition="bottom-right" color="purple"  />
    
            
          
       
        <div className="  p-5 items-center justify-center">
          <span className=' text-md text-gray-500 justify-center flex'>
          {make}
          </span>
          <span className='font-semibold text-lg text-[#290F6A] justify-center flex py-1'>
              {model}
          </span>
        
          <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
      <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{carRent}</p>
  <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
        3.5k reviews
      </a>
    </Rating>
    
          
            
             
        </div>
      </div>
     


      <div className='rounded-md w-full items-center text-center py-3 justify-center'>
         
        <CustomButtonProfile  title='Send A Message'
            containerStyles='w-full py-[16px]  rounded-md bg-[#8C3AFF] '
            textStyles=" text-white text-sm leading-[17px] "
            rightIcon="/mail.svg"
            // handleClick={() => setIsOpen(true)}
            handleClick={handleViewProfile}/>
      </div>
      <div className='overflow-hidden'>
        <AccordionProfile
          title1="Services"
          title2="View More"
         
          content1={Object.entries(car).map(([key, value]) => (
            <div className='flex  gap-5 space-x-1 w-full text-left overflow-hidden' key={key}>
              {/* First column (image) */}
              <div className="flex items-start text-start py-2">
                <Image src={"/clock.svg"} alt={"time"} width={15} height={15} className=" " />
              </div>
              {/* Second column (h4) */}
              <div className="flex items-start text-start pt-1">
                <h4 className='text-gray capitalize'>{key.split("_").join("_")}</h4>
              </div>
              {/* Third column (p) */}
              <div className=" flex-1 ">
                <p className='text-black-100 font-semibold pt-2 text-end'>
                  {/* {value} */}
                </p>
              </div>
            </div>
          ))}
          
          content2={model
          
          }
         
        />
      </div>

      {/* Additional information grid */}
      <div className='flex flex-1 mb-10 '>
        <div className='flex relative w-fit border-l-2 border-gray-200 gap-1 pl-3 py-2 ml-5 '>
          <div className="grid grid-rows-2">
             
          </div>
        </div>
      </div>
    

      {/* Modal for displaying car details */}
      
    </div>
  );
};

// Exporting the component
export default ProfileCard;