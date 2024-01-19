'use client';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const Finding = () => {
  return (
    

<section className="bg-white dark:bg-gray-900 hero">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="w-3/4">
           <h1 className='text-[#7100C3] font-semibold text-lg'>
            HOW TRACH WORKS.
           </h1>
            <h1 className="text-[#2D0173] dark:text-white text-3xl md:text-5xl font-extrabold mb-2 ">Finding the perfect real estate agent is just a few clicks.</h1>
           
        </div>
        <div className="grid md:grid-cols-3 gap-5">
            <div className=" rounded-lg p-8 md:p-12">
               <Link href={'/'}>
                <Image src={"/mag.svg"} width={30} height={20} alt='logo'/>
                <h1 className="text-[#37005F] dark:text-white text-3xl font-extrabold mb-2">
                    Search Agents
                </h1>
               </Link>
                  
                
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Enter your city, town or postcode in our user friendly search bar to explore the top real estate agents in your area.</p>
              
            </div>
            <div className=" rounded-lg p-8 md:p-12">
               <Link href={'/'}>
                <Image src={"/profile.svg"} width={30} height={20} alt='logo'/>
                <h1 className="text-[#37005F] dark:text-white text-3xl font-extrabold mb-2">
                Compare agents
                </h1>
               </Link>
                  
                
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">View agent profiles, read reviews, and compare metrics side by side to narrow down your options.</p>
              
            </div>
            <div className=" rounded-lg p-8 md:p-12">
               <Link href={'/'}>
                <Image src={"/profileplus.svg"} width={30} height={20} alt='logo'/>
                <h1 className="text-[#37005F] dark:text-white text-3xl font-extrabold mb-2">
                Connect with agent
                </h1>
               </Link>
                  
                
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Once you've found your ideal match, connect with the agent directly through TRACH and start your real estate journey with confidence.</p>
              
            </div>
        </div>
    </div>
</section>

  )
}

export default Finding