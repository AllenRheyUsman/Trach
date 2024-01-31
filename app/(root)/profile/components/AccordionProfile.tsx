'use client';

import { AccordionProps } from '@/types';
import { Accordion } from 'flowbite-react';

const AccordionProfile = ({ title1, title2,  content1, content2 }:AccordionProps) => {
    return (
      <Accordion collapseAll className='border-none w-full flex flex-wrap rounded-sm'>
        <Accordion.Panel className='border-none w-full px-0 mx-0 flex flex-wrap'>
          <Accordion.Title className='border-none font-bold text-lg hover:bg-purple-500 hover:text-white rounded-sm w-full px-0 mx-0 flex flex-wrap text-purple-700'>{title1}</Accordion.Title>
          <Accordion.Content className='border-none w-full mx-0 px-0'>
            <p className="mb-2 text-gray-500 dark:text-gray-400 r">
              {content1}
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel className='border-none'>
          <Accordion.Title className='border-none hover:bg-purple-500 hover:text-white font-bold text-lg text-purple-700 rounded-sm'>{title2}</Accordion.Title>
          <Accordion.Content className='border-none'>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              {content2}
            </p>
          </Accordion.Content>
        </Accordion.Panel>
         
      </Accordion>
    );
  }
  

export default AccordionProfile