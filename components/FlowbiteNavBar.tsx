'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CustomButton } from '.';
import { SignedOut } from '@clerk/nextjs';

const FlowbiteNavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdown1Open, setDropdown1Open] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown1 = () => {
    setDropdown1Open(!isDropdown1Open);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 max-w-[1440px] mx-auto z-50">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <Link href={"/"} className='flex justify-center items-center'>
          <Image
            src="/logo-new.svg"
            alt='trach hub logo'
            width={118}
            height={18}
            className='object-contain mx-10'
          />
        </Link>
        
        <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse ">
       
       


       
        <div className='h-8 border-r border-gray-400 '>
        <div id="mega-menu1" className={`items-center justify-end ${isDropdown1Open ? 'flex' : 'hidden'} h-8 border-r border-gray-400 sm:hidden w-full md:flex md:w-auto md:order-1`}>
  <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-4 rtl:space-x-reverse">
            <li>
              <Link href={"/under-construction"}>
             
              <CustomButton
                title="Home"
                btnType="button"
                containerStyles='text-[#290F6A] rounded-full bg-white  font-semibold'
              />
               </Link>
            </li>
            <li>
            <Link href={"/under-construction"}>
              <CustomButton
                title="To Sell"
                btnType="button"
                containerStyles='text-gray-500 rounded-full bg-white'
              />
              </Link>
            </li>
            <li>
            <Link href={"/under-construction"}>
              <CustomButton
                title="To Rent"
                btnType="button"
                containerStyles='text-gray-500 rounded-full bg-white'
              />
              </Link>
            </li>
            <li>
            <Link href={"/under-construction"}>
              <CustomButton
                title="Blog"
                btnType="button"
                containerStyles='text-gray-500 rounded-full bg-white'
              />
              </Link>
            </li>
         
          
          </ul>
        </div>
        
        </div>

        <SignedOut>
        <button  className="text-[#9300FF] hover:text-black-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
        <Link href={'/sign-in'}>
                Login
              </Link>
        </button>

        </SignedOut>
        
         





          <button  className="text-white bg-[#9300FF] hover:bg-[#290F6A] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  text-white rounded-md min-w-[130px]">For Agents</button>
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu"
            aria-expanded={isDropdownOpen}
          >
          
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div id="mega-menu" className={`items-center justify-end ${isDropdownOpen ? 'flex' : 'hidden'} md:hidden w-full md:flex md:w-auto md:order-1`}>
  <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-4 rtl:space-x-reverse">
            <li>
              
              <CustomButton
                title="Home"
                btnType="button"
                containerStyles='text-[#290F6A] rounded-full bg-white  font-semibold'
              />
            </li>
            <li>
              <CustomButton
                title="To Sell"
                btnType="button"
                containerStyles='text-gray-500 rounded-full bg-white'
              />
            </li>
            <li>
              <CustomButton
                title="To Rent"
                btnType="button"
                containerStyles='text-gray-500 rounded-full bg-white'
              />
            </li>
            <li>
              <CustomButton
                title="Blog"
                btnType="button"
                containerStyles='text-gray-500 rounded-full bg-white'
              />
            </li>
         
          
          </ul>
        </div>
   
      </div>
    </nav>
  );
}

export default FlowbiteNavBar;
