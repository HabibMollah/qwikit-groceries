import ProductType from '@/types/ProductType';

export const baseURL = 'https://qwikit-groceries-backend.vercel.app/api/v1';

export default async function getData() {
  try {
    const res = await fetch(`${baseURL}/groceries`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const data: ProductType[] = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(`Failed to fetch groceries: ${error.message}`);
  }
}
