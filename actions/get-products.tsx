import { Product } from "@/types";
import qs from 'query-string'

const URL =`${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query{
    categoryId?: string
    colorId?: string
    sizeId?: string
    isFeatures?: boolean
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const cacheBuster = Date.now(); // Unique value for cache-busting

    const queryParams = {
        colorId: query.colorId,
        sizeId: query.sizeId,
        categoryId: query.categoryId,
        isFeatures: query.isFeatures
    };
  
    const url = qs.stringifyUrl({
        url: URL,
        query: queryParams
    });

    const res = await fetch(`${url}&_=${cacheBuster}`, {
        headers: {
            'Cache-Control': 'no-store',
            'Pragma': 'no-cache',
        }
    });

    return res.json();
}

export default getProducts;
