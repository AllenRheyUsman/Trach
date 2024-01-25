'use client';
import { fetchCars } from "@/utils";
import { useRouter } from 'next/navigation';
import { CarCard2, ShowMore, SearchBar2, OffCanvas } from "@/components";
import { HomeProps2, CarProps2 } from "@/types";
import React, { useEffect, useState } from 'react';
import ResultSearchBar from "@/components/ResultSearchBar";
import { Pagination } from "flowbite-react";
import Dropdown from "@/components/Dropdown";
import { Container, DropdownButton, Nav, NavDropdown, Navbar } from "react-bootstrap";

import ProfileCard from "./components/ProfileCard";




const ProfilePage = ({ searchParams }: HomeProps2) => {

  const [manufacturer, setManufacturer] = useState('')
  const router = useRouter();
  const [allCars, setAllCars] = useState<CarProps2[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);


  useEffect(() => {
    // Fetch cars whenever searchParams change
    const fetchCarsData = async () => {
      try {
        const cars = await fetchCars({
          manufacturer: searchParams.manufacturer || "",
          year: searchParams.year || 2022,
          fuel: searchParams.fuel || "",
          limit: searchParams.limit || 5500,
          model: searchParams.model || "",
        });

        setAllCars(cars);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCarsData();
  }, [searchParams]); // Now useEffect will run whenever searchParams change

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;



  return (
    <main className="">
    
      
      <section className="grid grid-cols-2 mt-10 hero h-[100vh]">
       
        {!isDataEmpty ? (
          <div className='home__cars-wrapper  hero grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-10 justify-items-center -z-50'>
            {allCars.slice((currentPage - 1) * 12, currentPage * 12).map((car) => (
              <ProfileCard key={car.model} car={car} />
            ))}
          </div>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>No Agents found based on the search.</p>
          </div>
        )}
        
        
        
      </section>
      
    </main>
  );
};

export default ProfilePage;
