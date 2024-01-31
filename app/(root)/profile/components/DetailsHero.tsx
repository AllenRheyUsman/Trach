import Image from 'next/image';
import React from 'react';

const DetailsHero = () => {
  return (
    <div className='w-full py-3 bg-white my-5 rounded-md gap-5 pb-10'>
      <div className='hero'>
        <h1 className='flex flex-1 text-md font-bold text-purple-700 px-3'>
          Overview
        </h1>
        <Image src={'/pencil.svg'} alt={''} width={15} height={15} className='mr-5' />
      </div>
      <div className='flex flex-wrap gap-5 tracking-wider '>
        <p className='text-gray-500 text-sm space-x-1 tracking-wider leading-loose px-3'>
          I am Verlie Borer, a passionate and driven individual with a strong commitment to excellence in the real estate industry. With years of experience and a genuine love for helping people, I have had the privilege of assisting numerous clients in finding their dream homes and making sound investment decisions.
        </p>
        <p className=''>
          Real estate is not just a career for me; it's a true vocation. I find immense joy in being a part of my clients' journey as they embark on the exciting path of homeownership or investment opportunities. Each client has a unique story and vision, and I take great pride in tailoring my approach to meet their specific needs and aspirations.
        </p>
        <p>
          Throughout my career, I have honed my negotiation skills and gained a deep understanding of the ever-changing real estate market. My goal is to provide my clients with the highest level of service, ensuring they are well-informed and empowered to make confident decisions.
        </p>
        <p>
          Building trust and long-lasting relationships with my clients is of utmost importance to me. I believe in open and transparent communication, and I am always ready to go the extra mile to ensure my clients' needs are met. In addition to my work in real estate, I am a firm believer in giving back to the community that has given me so much. I actively participate in local initiatives and strive to make a positive impact on the lives of others.
        </p>
      </div>
    </div>
  );
};

export default DetailsHero;
