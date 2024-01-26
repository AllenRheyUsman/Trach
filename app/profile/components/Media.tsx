import React from 'react';
import Image from 'next/image';
import { Card } from 'flowbite-react';

const Media = () => {
  return (
    <div className='m-10 w-full bg-white rounded-sm'>
      <div className='hero py-5 my-5'>
        <div className='flex flex-1 text-purple-900 font-bold hover:border-purple-500'>
          <h1>Media</h1>
          <p>(000)</p>
        </div>
        <Image src={'/plus.svg'} alt={'[plus'} width={15} height={10} className='mr-5' />
      </div>
      <div className='hero py-2 my-2'>
        <div className='flex flex-wrap gap-16 text-purple-900 font-bold'>
          <h1>All</h1>
          <p>Photos</p>
          <p>
            Videos
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
      <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/house.png"
    >
       
    </Card>
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/house.png"
    >
       
    </Card>
    
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/house.png"
    >
       
    </Card>
    
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/house.png"
    >
       
    </Card>
    
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/house.png"
    >
       
    </Card>
    
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/house.png"
    >
       
    </Card>
    
    
        
        
      </div>

      <div className='hero py-5 my-5 px-5'>
        <div className='flex flex-1 text-purple-900 font-bold hover:border-purple-500'>
          <h1>View All Media</h1>
          <Image src={'/plus.svg'} alt={'[plus'} width={15} height={10} className='mx-5' />
        </div>
       
      </div>
       
      <div className='grid grid-cols-3 gap-4'></div>
    </div>
  );
};

export default Media;
