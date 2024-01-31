
    
'use client';

import { Card } from 'flowbite-react';
import Image from 'next/image';
import ReviewsCard from './ReviewsCard';

function Reviews() {
  return (
    <Card className="max-w-sm hero ">
      <div className="mb-4 flex items-center justify-between  ">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Reviews</h5>
        
      </div>
      <div className='flex flex-wrap'>
      <a href="#" className="text-sm font-medium  hover:underline mr-16 hover:text-purple-700 hover:font-semibold text-md text-gray-500 font-sm">
          View all
        </a>
        <a href="#" className="text-sm font-medium hover:underline mx-16 hover:text-purple-700 hover:font-semibold text-md text-gray-500 font-sm">
          View all
        </a>
        <a href="#" className=" mx-16 hover:text-purple-700 hover:font-semibold text-md text-gray-500 font-sm  hover:underline dark:text-cyan-500">
          View all
        </a>
      </div>
      <div className="flow-root ">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700 ">
          <li className="py-3 sm:py-4">
          <ReviewsCard/>
          </li>
          <li className="py-3 sm:py-4">
          <ReviewsCard/>
          </li>
          <li className="py-3 sm:py-4">
          <ReviewsCard/>
          </li>
          <li className="py-3 sm:py-4">
          <ReviewsCard/>
          </li>
          <li className="pb-0 pt-3 sm:pt-4">
           <ReviewsCard/>
          </li>
        </ul>
      </div>
    </Card>
  );
}



export default Reviews