import HeroHeading from '@/components/HeroHeading';
import { baseURL } from '@/requests/getData';

export default async function Home() {
  const res = await fetch(`${baseURL}/groceries`);
  const data = res.json();
  console.log('hello from server... I hope');
  return (
    <>
      <HeroHeading />
    </>
  );
}
