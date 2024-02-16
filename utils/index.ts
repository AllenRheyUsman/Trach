
import { FilterAgentProps } from "@/types";
 


 
export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};
export const navigateSearchParams = (type: string, value: string) => {
  const newPathname = updateSearchParams(type, value);
  window.location.href = `/trial${newPathname}`;
};

 
  export async function fetchAgent(filters: FilterAgentProps) {
    const { location, page, rating, price } = filters;


  // export async function fetchAgent(){
     
  

 

  // Set the required headers for the API request
  const headers: HeadersInit = {
    
   

    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    'X-RapidAPI-Host':  process.env.NEXT_PUBLIC_RAPID_API_HOST || ""
    
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://realtor16.p.rapidapi.com/search_agents?location=${location}&page=${page}&rating=${rating}&price=${price}`,
   
    {
      headers: headers,
    }
    
  );
   
  // Parse the response as JSON
  const result = await response.json();

  

  return result;
}





