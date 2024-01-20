'use client';
import { fetchCars } from "@/utils";
import { useRouter } from 'next/navigation';
import { CarCard, ShowMore, SearchBar2 } from "@/components";
import { HomeProps, CarProps } from "@/types";
import React, { useEffect, useState } from 'react';

const ResultPage = ({ searchParams }: HomeProps) => {
  const router = useRouter();
  const [allCars, setAllCars] = useState<CarProps[]>([]);

  useEffect(() => {
    // Fetch cars whenever searchParams change
    const fetchCarsData = async () => {
      try {
        const cars = await fetchCars({
          manufacturer: searchParams.manufacturer || "",
          year: searchParams.year || 2022,
          fuel: searchParams.fuel || "",
          limit: searchParams.limit || 4,
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
              <CarCard key={car.model} car={car} />
            ))}
          </div>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>No cars found based on the search parameters.</p>
          </div>
        )}
        <ShowMore
          pageNumber={(searchParams.limit || 4) / 4}
          isNext={(searchParams.limit || 1) > allCars.length}
        />
      </section>
    </main>
  );
};

export default ResultPage;
