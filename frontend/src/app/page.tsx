'use client';
import { useSearchContext } from '@/contexts/SearchContext';

export default function Home() {
  const { searchValue } = useSearchContext();
  return (
    <>
      <h2 className="text-4xl pt-4">
        {searchValue
          ? `Find products named '${searchValue}'`
          : 'Browse grocery products'}
      </h2>
    </>
  );
}
