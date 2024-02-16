import React from 'react';
 
 

import { fetchAgentDetails } from '@/utils/fetchAgentDetails';
import { AgentDetailsProps, AgentProps } from '@/types';
import SideBar from './components/Sidebar';
 
 



 

export default async function Home({ }: AgentDetailsProps) {

     
  


  const response  = await fetchAgentDetails(
        // {
        //     id: searchParams.id || "",
           

        // }

  );
  // console.log(response)
  

  

  return (
    <main className='overflow-hidden '>
      
      
       
               
               
                
                <SideBar agent={response}  />
                 
                
              
           
      <div className=' hero     justify-center relative  mt-5 bg-white  p-3'>
       
      

       
       
      </div>
     
    </main>
  );
}
