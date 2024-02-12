'use client';
import { useState } from 'react';
import React from 'react';
import { CustomButton, SearchManufacturer } from '.';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 p-6  ${otherClasses}`}>
    <Image
      src="/magnifying-glass2.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain p-2"
    />
  </button>
);

const SearchBar2 = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer.trim() === '' && model.trim() === '') {
      return alert('Please fill in the search bar');
    }

    // Use try-catch to handle errors during the asynchronous operation
    try {
      // Await the asynchronous updateSearchParams function
      await updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());

      // After updating search parameters, navigate to "/result"
      router.push(`/result?manufacturer=${manufacturer}`);
      //**change to location */

    } catch (error) {
      console.error('Error updating search parameters:', error);
    }
  };

  const updateSearchParams = async (model: string, manufacturer: string) => {
    return new Promise<void>((resolve) => {
      // Simulating an asynchronous operation (e.g., API call)
      setTimeout(() => {
        const searchParams = new URLSearchParams(window.location.search);
  
        // Remove the 'model' parameter
        searchParams.delete('model');
  
        if (manufacturer) {
          // Set the 'manufacturer' parameter
          searchParams.set('manufacturer', manufacturer);
        } else {
          // If manufacturer is empty, delete the 'manufacturer' parameter
          searchParams.delete('manufacturer');
        }
  
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
        // Use router.push to navigate to the new URL
        router.push(newPathname);
        resolve();
      }, 500); // Simulated delay of 500 milliseconds
    });
  };
  

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchManufacturer manufacturer={manufacturer} setManuFacturer={setManufacturer} />
      </div>
    </form>
  );
};

export default SearchBar2;
