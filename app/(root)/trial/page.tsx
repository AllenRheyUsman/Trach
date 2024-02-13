import React from 'react';
import { fetchAgent } from '@/utils';
 
import AgentCard from '@/components/AgentCard';
import { HomeProps } from '@/types';
import { CustomFilter, SearchBar, SearchBar2, ShowMore } from '@/components';
import SearchLocation from '@/components/SearchLocation';
import { PriceRange, SelectRating, fuels } from '@/constants';

interface Agent {
  
 
}

 

export default async function Home({ searchParams }: HomeProps) {


  const response  = await fetchAgent(
        {
            location: searchParams.location || "",
            page:searchParams.page || 1,
            rating:searchParams.rating || 1,
            price:searchParams.price || "",
             

        }

  );
  

  const isDataEmpty = !response.agents || response.agents.length === 0 || response.agents.length <1 ;

  return (
    <main className='overflow-hidden '>
      
      
      <div className=' hero     justify-center relative  mt-5 bg-white  p-3'>
      <CustomFilter title='rating' options={SelectRating} />
      <CustomFilter title='price' options={PriceRange} />
      </div>
      <div className=' mt-16 flex justify-center   flex-col gap-2 w-full mx-[6%]'>
       {/* {response.agents.length} agents found in {response.location} */}
      </div>
      <div className='home__error-container'>
        {isDataEmpty ? (
          <div>
            <h2 className='text-black text-xl font-bold'>oooops no agents found</h2>
          </div>
        ) : (
          <section>
            <div className='home__cars-wrapper'>
              {response.agents.map((agent: Agent, index: number) => (
                <div key={index}>
                
                <AgentCard agent={agent}/>
                 
                </div>
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.page || 10) / 10}
              isNext={(searchParams.page || 10) > response.length}
            />
          </section>
        )}
      </div>
    </main>
  );
}
