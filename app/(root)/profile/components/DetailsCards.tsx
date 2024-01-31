

import { Button, Card } from 'flowbite-react';
import React from 'react';

import Image from 'next/image';

const DetailsCards = () => {
  return (
    <Card className="max-w-sm " imgAlt="Apple Watch Series 7 in colors pink, silver, and black" imgSrc="/villa1.png">
      <div className='flex flex-wrap gap-5 '>
        <Button className='bg-blue-200 text-blue-700'>
          Condominium
        </Button>
        <Button className='bg-green-200 text-green-700'>
          For Sale
        </Button>
      </div>
  
      <div className="items-center">
        <h1 className='text-xl text-purple-800 font-bold'>
          Serenity Haven
        </h1>
        <div className='flex flex-1'>
          <Image src={'/pencil.svg'} alt={''} width={10} height={10}/>
        <p className='text-gray-500 px-2'>
          Central London, Covenant Garden
        </p>
        </div>
        <div className='hero my-5'>
            <Button outline color="gray" className='border-gray-200 rounded-md w-full mx-2'>
              <span className='text-gray-500'>
                View Property
              </span>
            </Button>
        </div>
        <div className='flex flex-wrap'>
        <Button className='bg-none bg-transparent text-purple-500 font-bold text-lg  hover:text-white' color="purple">
        View All Property
        <svg className="-mr-1 ml-5 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
        </div>
      </div>
    </Card> 
  );
}

export default DetailsCards;
