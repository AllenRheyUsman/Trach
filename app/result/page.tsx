'use client';
import { fetchCars } from "@/utils";
import { useRouter } from 'next/navigation';
import { CarCard2, ShowMore, SearchBar2 } from "@/components";
import { HomeProps2, CarProps2 } from "@/types";
import React, { useEffect, useState } from 'react';

const ResultPage = ({ searchParams }: HomeProps2) => {
  const router = useRouter();
  const [allCars, setAllCars] = useState<CarProps2[]>([]);

  useEffect(() => {
    // Fetch cars whenever searchParams change
    const fetchCarsData = async () => {
      try {
        const cars = await fetchCars({
          manufacturer: searchParams.manufacturer || "",
          year: searchParams.year || 2022,
          fuel: searchParams.fuel || "",
          limit: searchParams.limit || 10,
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
    <main>
      <SearchBar2 />
      <section>
        {!isDataEmpty ? (
          <div className='home__cars-wrapper'>
            {allCars.map((car) => (
              <CarCard2 key={car.model} car={car} />
            ))}
          </div>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>No Agents found based on the search.</p>
          </div>
        )}
        <ShowMore
          pageNumber={(searchParams.limit || 10) / 10}
          isNext={(searchParams.limit || +1) > allCars.length}
        />
      </section>
    </main>
  );
};

export default ResultPage;
