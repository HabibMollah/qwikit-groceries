'use client';

import { useSearchContext } from '@/contexts/SearchContext';

export default function HeroHeading() {
  const { searchValue } = useSearchContext();

  return (
    <h2 className="text-4xl pt-4">
      {searchValue
        ? `Find products named '${searchValue}'`
        : 'Browse grocery products'}
    </h2>
  );
}
