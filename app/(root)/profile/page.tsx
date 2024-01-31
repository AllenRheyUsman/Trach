'use client';
import { fetchCars } from "@/utils";


import { HomeProps2, CarProps2 } from "@/types";
import React, { useEffect, useState } from 'react';

import { Spinner } from "flowbite-react";


import ProfileCard from "./components/ProfileCard";
import Details from "./components/Details";




const ProfilePage = ({ searchParams }: HomeProps2) => {

  

  const [allCars, setAllCars] = useState<CarProps2[]>([]);
  const [currentPage] = useState(1);

 


  useEffect(() => {
    // Fetch cars whenever searchParams change
    const fetchCarsData = async () => {
      try {
        const cars = await fetchCars({
          manufacturer: searchParams.manufacturer || "",
          year: searchParams.year || 2022,
          fuel: searchParams.fuel || "",
          limit: searchParams.limit || 1,
          model: searchParams.model || "",
        });

        setAllCars(cars);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCarsData();
  }, [searchParams]); // Now useEffect will run whenever searchParams change

  const isDataEmpty = !allCars || allCars.length === 0;




  return (
    <main className="hero h-full  ">
    
      
      <section className="grid grid-cols-2 mt-10 hero ">
       
        {!isDataEmpty ? (
          <div className=' hero '>
            {allCars.slice((currentPage - 1) * 1, currentPage * 1).map((car) => (
              <ProfileCard key={car.model} car={car} />
            ))}
          </div>
        ) : (
          <div className='home__error-container'>
            
             <Spinner aria-label="Default status example" color={"purple"}/>;
          </div>
        )}
        
        <Details/>
        
      </section>
      
    </main>
  );
};

export default ProfilePage;
