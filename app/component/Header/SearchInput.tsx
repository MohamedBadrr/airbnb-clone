"use client";
import { SearchIcon } from "lucide-react";

const SearchInput = ({
  search,
  setSearch,
  placeholder,
}: {
  search: string;
  setSearch: (v: string) => void;
  placeholder?: string;
}) => {
  return (
    <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder={placeholder || "Start Search"}
        className="text-sm w-full text-gray-600 placeholder-gray-400 grow pl-5 pe-1 bg-transparent outline-none"
      />
      <SearchIcon
        size={30}
        className="hidden md:inline-flex bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
      />
    </div>
  );
};

export default SearchInput;
