import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export async function fetchMeals({ signal, searchTerm }) {
  console.log(searchTerm);
  let url = "http://localhost:8080/api/products/get-all-products";

  const response = await fetch(url, { signal: signal });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();

  console.log(data);
  return data;
}
