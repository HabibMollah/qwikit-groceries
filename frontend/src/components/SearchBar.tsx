"use client";
import { useSearchContext } from "@/contexts/SearchContext";
import { Input } from "@nextui-org/input";
import { TbSearch } from "react-icons/tb";

export default function SearchBar() {
  const { searchValue, setSearchValue } = useSearchContext();
  return (
    <Input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      label="Search"
      isClearable
      onClear={() => setSearchValue("")}
      radius="lg"
      classNames={{
        label: "text-black/50 dark:text-white/90",
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "bg-default-200/50",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default/60",
          "!cursor-text",
        ],
      }}
      placeholder="Type to search..."
      startContent={
        <TbSearch className="pointer-events-none flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90" />
      }
    />
  );
}
