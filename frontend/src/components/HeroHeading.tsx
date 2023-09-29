"use client";

import { useSearchContext } from "@/contexts/SearchContext";

export default function HeroHeading() {
  const { searchValue } = useSearchContext();

  return (
    <h2 className="pt-4 text-4xl">
      {searchValue
        ? `Find products named '${searchValue}'`
        : "Browse grocery products"}
    </h2>
  );
}
