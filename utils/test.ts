import { FilterPropstest } from "@/types";

export const fetchCarsTest = async (
  filters: FilterPropstest,
  apiUrl: string,
  headers: HeadersInit
) => {
  const { agent_rating, person_name, postal_code } = filters;

  // Use URLSearchParams to construct the query parameters
  const queryParams = new URLSearchParams({
    agent_rating: String(agent_rating),
    person_name: String(person_name),
    postal_code: String(postal_code),
  });

  // Append the query parameters to the URL
  const urlWithParams = `${apiUrl}?${queryParams.toString()}`;

  // Make the API request
  const response = await fetch(urlWithParams, {
    headers: headers,
  });

  // Parse the response as JSON
  const result = await response.json();

  return result;
};
