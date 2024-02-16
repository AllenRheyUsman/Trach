import React from 'react';
 
 

import { fetchAgentDetails } from '@/utils/fetchAgentDetails';
import { AgentDetailsProps, AgentProps } from '@/types';
import SideBar from './components/Sidebar';
import { Hero } from '@/components';
import Header from './components/Header';
 
 



 

export default async function Home({ }: AgentDetailsProps) {

     
  


   
  

  

  return (
    <main className='overflow-hidden mt-10 rounded-lg mx-10'>
  
      <SideBar />
     
   
   
</main>
  );
}
