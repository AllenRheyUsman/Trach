import { Card } from 'flowbite-react';
import React from 'react'
import Image from 'next/image';
import TeamCard from './TeamCard';

const Team = () => {
    return (
        <div className='m-10 w-full bg-white rounded-sm'>
          <div className='hero py-5 my-5'>
            <div className='flex flex-1 text-purple-900 font-bold hover:border-purple-500'>
              <h1>Team</h1>
              <p>(000)</p>
            </div>
            <Image src={'/plus.svg'} alt={'[plus'} width={15} height={10} className='mr-5' />
          </div>
           
          <div className='grid grid-cols-4 gap-4'>
            
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
           
            
            
          </div>
          <div className='hero py-5 my-5 px-5'>
        <div className='flex flex-1 text-purple-900 font-bold hover:border-purple-500'>
          <h1>View All Team Members</h1>
          <Image src={'/plus.svg'} alt={'[plus'} width={15} height={10} className='mx-5' />
        </div>
       
      </div>
       
      <div className='grid grid-cols-3 gap-4'></div>
    </div>
       
      );
    };
    

export default Team