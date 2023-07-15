import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const cacheBuster = Date.now(); // Unique value for cache-busting

  const res = await fetch(`${URL}?_=${cacheBuster}`, {cache:'no-cache'});

  return res.json();
};

export default getCategories;
