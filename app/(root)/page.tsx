
 


import { fetchAgent } from "@/utils";
import { HomeProps } from "@/types";
 
import {   Hero, Finding, WhyChoose, AsSeenIn,  Blogs,  } from "@/components";
 




export default async function Home({ searchParams }: HomeProps) {
  const allAgents = await fetchAgent({
    
  });



  const isDataEmpty = !Array.isArray(allAgents) || allAgents.length < 1 || !allAgents;

  return (
    <main className='overflow-hidden'>
   
      <Hero />
      
      
      <Finding/>
      <WhyChoose/>


    



      

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='flex-1 mx-auto max-w-lg text-center'>
  <p className="text-[#8C3AFF] font-semibold">Agent Insights</p>
  <h1 className='text-3xl font-extrabold text-[#2D0173]'>Unfiltered User Reviews - Discover What Our Happy Clients Say!</h1>
</div>


        
      </div>
      <AsSeenIn/>
    
      
     
     <Blogs/>
      
    </main>
  );
}


