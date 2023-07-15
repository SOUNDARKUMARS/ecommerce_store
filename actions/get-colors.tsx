import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const cacheBuster = Date.now(); // Unique value for cache-busting

  const res = await fetch(`${URL}?_=${cacheBuster}`, {cache:'no-cache'});

  return res.json();
};

export default getColors;
