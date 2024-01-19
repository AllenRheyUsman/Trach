'use client';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const AsSeenIn = () => {
  return (
    

<section className="bg-white dark:bg-gray-900 hero">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="w-3/4">
           <h1 className='text-[#7100C3] font-semibold text-lg'>
           As Seen In
           </h1>
            <h1 className="text-[#2D0173] dark:text-white text-3xl md:text-5xl font-extrabold mb-2 ">Featured in Leading Newspapers Across the Nation!</h1>
           
        </div>
        <div className="grid md:grid-cols-4 gap-5">
            <div>
                <Image
                src="/Abilene.png" alt=""width={250} height={150} className='py-5 my-5'/>
                <Image
                src="/Informația.png" alt=""width={250} height={150} className='py-5 my-5'/>
            </div>
            <div>
                <Image
                src="/Burlington.png" alt=""width={250} height={150} className='py-5 my-5'/>
                <Image
                src="/TNYT.png" alt=""width={250} height={150} className='py-5 my-5'/>
            </div>
            <div>
                <Image
                src="/Courier.png" alt=""width={250} height={150} className='py-5 my-5'/>
                <Image
                src="/The_Salinas.png" alt=""width={250} height={150} className='py-5 my-5'/>
            </div>
            <div>
                <Image
                src="/Clarion.png" alt=""width={250} height={150} className='py-5 my-5'/>
                <Image
                src="/Skagit.png" alt=""width={250} height={150} className='py-5 my-5'/>
            </div>
           
        </div>
    </div>
</section>

  )
}

export default AsSeenIn