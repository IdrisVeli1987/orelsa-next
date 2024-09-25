"use client";
import { cn } from "@nextui-org/theme";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchBar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [activeSearch, setActiveSearch] = useState([]);

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (!isSearching) {
      setIsSearching(true);
      return;
    }
  };
  return (
    <form
      className={cn(
        "absolute h-[50px] transition-all duration-1000 ease-in-out right-[250px]",
        isSearching ? "w-[300px]" : "w-[50px]"
      )}
    >
      <div className="relative">
        <input
          type="search"
          placeholder="Axtarış"
          className="w-full focus-visible:outline-none outline-none focus:outline-none h-full p-4 rounded-full bg-slate-200"
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 w-[50px] h-[50px] top-1/2 -translate-y-1/2 p-4 rounded-full bg-slate-300"
        >
          {isSearching ? (
            <IoMdClose onClick={() => setIsSearching(false)} />
          ) : (
            <CiSearch />
          )}
        </button>
      </div>

      <div
        className={`absolute ${
          isSearching ? "top-20" : "top-0"
        }p-4 bg-slate-200 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2`}
      ></div>
    </form>
  );
};

export default SearchBar;
