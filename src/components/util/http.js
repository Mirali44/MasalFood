import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export async function fetchMeals({ signal, searchTerm }) {
  console.log(searchTerm);
  let url = "http://localhost:3000/events";

  const response = await fetch(url, { signal: signal });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { meals } = await response.json();

  return meals;
}