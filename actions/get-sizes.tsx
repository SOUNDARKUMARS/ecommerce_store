import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const cacheBuster = Date.now(); 
  const res = await fetch(`${URL}?_=${cacheBuster}`, {cache:'no-cache'});

  return res.json();
};

export default getSizes;
