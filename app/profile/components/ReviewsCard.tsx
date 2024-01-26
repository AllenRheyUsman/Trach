import React from 'react';
import Image from 'next/image';

const ReviewsCard = () => {
  return (
    <div className="flex items-center space-x-4 hero flex-wrap w-full">
      <div className="shrink-0">
        <Image
          alt="Thomas image"
          height="32"
          src="/images/people/profile-picture-5.jpg"
          width="32"
          className="rounded-full"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Thomas Lean</p>
        <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white gap-5">
       <Image src={'/thumbs-up.svg'} alt={''} width={15} height={10}/>
       <Image src={'/thumbs-down.svg'} alt={''} width={15} height={10}/>
      </div>
    </div>
  );
}

export default ReviewsCard;
