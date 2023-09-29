'use client';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type SearchContextType = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

export const SearchContext = createContext<null | SearchContextType>(null);

export default function SearchContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === null) {
    throw new Error(
      'useSearchContext must be used within a SearchContextProvider'
    );
  }

  return context;
}
