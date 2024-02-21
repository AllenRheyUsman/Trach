// SearchAll.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Combobox } from '@headlessui/react';

import { locations } from '@/constants';

const SearchButton = ({ title, onClick, otherClasses }: { title: string; onClick: () => void; otherClasses: string }) => (
  <button
    type="submit"
    className={`flex items-center justify-center -ml-3 z-10 px-5 ${otherClasses} sm:flex-row md:flex-col lg:flex-row lg:py-3 `}
    onClick={onClick}
  >
    {title}
  </button>
);

const SearchAll = () => {
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleSearch = async (type: string) => {
    if (location.trim() === '') {
      return alert('Please fill in the search bar');
    }

    try {
      await updateSearchParams(type, location.toLowerCase());
      router.push(`/${type}?location=${location}`);
    } catch (error) {
      console.error('Error updating search parameters:', error);
    }
  };

  const updateSearchParams = async (type: string, location: string) => {
    return new Promise<void>((resolve) => {
      // Simulating an asynchronous operation (e.g., API call)
      setTimeout(() => {
        const searchParams = new URLSearchParams(window.location.search);

        // Remove the 'type' parameter
        searchParams.delete('type', 'page');

        if (location) {
          // Set the 'location' parameter
          searchParams.set('location', location);
        } else {
          // If location is empty, delete the 'location' parameter
          searchParams.delete('location');
        }

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        // Use router.push to navigate to the new URL
        router.push(newPathname);
        resolve();
      }, 500); // Simulated delay of 500 milliseconds
    });
  };

  const handleSearchSell = () => {
    handleSearch('sale');
  };

  const handleSearchRent = () => {
    handleSearch('rent');
  };

  const handleSearchAgent = () => {
    handleSearch('agent');
  };
  const [query, setQuery] = useState('');

  const filteredLocations = query === ''
    ? locations
    : locations.filter((item) => (
      item.toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, ''))
    ));

  return (
    <div className='searchbar'>

   <div className='searchbar__item'>

   
    <div className="flex-1 max-sm:w-full flex justify-start items-center relative shadow-md">
      <Combobox value={location} onChange={setLocation}>
        <div className="flex items-center w-full mx-10 bg-neutral-100 rounded-lg py-5">
          <Combobox.Button className="absolute">
            <Image
              src="/magnifying-glass.svg"
              width={30}
              height={30}
              className="ml-4"
              alt="magnifying glass"
            />
          </Combobox.Button>
          <Combobox.Input
            className="w-full h-[58px] pl-12 p-4 rounded-l-full max-sm:rounded-full  outline-none cursor-text text-sm border-none"
            placeholder="City, town or postcode"
            displayValue={(location: string) => location}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className='justify-end flex space-x-5 w-full '>
          <SearchButton title="Find Agents" onClick={handleSearchAgent} otherClasses={'rounded-md bg-transparent outline outline-1 outline-purple-500 text-purple-500 hover:bg-purple-300 hover:text-white hover:outline-none'} />
          </div>
          <div className='justify-end flex space-x-5 w-full '>
          <SearchButton title="For Sale" onClick={handleSearchSell} otherClasses={'rounded-md bg-purple-500 text-white hover:bg-transparent hover:text-purple-500 hover:outline-purple-500 hover:outline-1  outline-none'} />

          </div>
          <div className="justify-end flex space-x-5 w-full mx-2">
            <SearchButton title="For Rent" onClick={handleSearchRent} otherClasses={'rounded-md bg-purple-500 text-white hover:bg-transparent hover:text-purple-500 hover:outline-purple-500 hover:outline-1  outline-none '} />
            
          </div>
        </div>

        <Combobox.Options className="absolute top-full left-5 z-[100] ">
          {filteredLocations.map((item) => (
            <Combobox.Option
              key={item}
              value={item}
              className={({ active }) => `relative  cursor-default select-none py-2 pl-10 pr-4 ${active ? 'rounded-md bg-[#8C3AFF] text-white ' : 'text-gray-900 bg-white'}`}
            >
              {({ selected, active }) => (
                <>
                  <span
                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                  >
                    {item}
                  </span>
                  {selected ? (
                    <span
                      className={`absolute inset-y-0 left-5 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}
                    >
                    </span>
                  ) : null}
                </>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>

      </Combobox>
    </div>
  </div>
</div>
  );
};

export default SearchAll;
