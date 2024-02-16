import React from 'react';
 
 

import { fetchAgentDetails } from '@/utils/fetchAgentDetails';
import { AgentDetailsProps, AgentProps } from '@/types';
import SideBar from './components/Sidebar';
 
 



 

export default async function Home({ }: AgentDetailsProps) {

     
  


   
  

  

  return (
    <main className='overflow-hidden '>
      
      
       
               
               
                
                <SideBar   />
                 
                
              
           
      <div className=' hero     justify-center relative  mt-5 bg-white  p-3'>
       
      

       
       
      </div>
     
    </main>
  );
}
