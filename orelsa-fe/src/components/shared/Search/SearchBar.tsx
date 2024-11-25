"use client";

import { IProductById } from "@/interface/ui";
import { cn } from "@nextui-org/theme";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchBar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<IProductById[]>([]);

  const fetchSearchData = async (query: string) => {
    if (!query) return;
    const url = `http://localhost:9089/guest/search?name=${query}`;
    try {
      const { data } = await axios.get(url);
      setSearchResults(data);
    } catch (err) {
      console.error("Error is :", err);
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      const debounceFetch = setTimeout(() => {
        fetchSearchData(searchQuery);
      }, 300);

      return () => clearTimeout(debounceFetch);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching((prev) => !prev);
    if (!isSearching) {
      fetchSearchData(searchQuery);
    } else {
      setSearchQuery("");
    }
  };

  return (
    <div className="relative">
      <form
        className={cn(
          "absolute transition-all duration-300 ease-in-out right-4 md:right-8",
          isSearching ? "w-[300px] md:w-[400px]" : "w-[50px]"
        )}
      >
        <div className="relative">
          <input
            type="search"
            placeholder="Axtarış"
            className="w-full focus-visible:outline-none outline-none h-full p-4 rounded-full border border-gray-300 transition-all duration-200 ease-in-out"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          <button
            onClick={handleSearch}
            className="absolute right-0 w-[50px] h-[50px] top-1/2 -translate-y-1/2 p-4 rounded-full  flex items-center justify-center"
          >
            {isSearching ? <IoMdClose /> : <CiSearch />}
          </button>
        </div>

        {isSearching && (
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg p-2 z-50 w-full max-w-[400px]">
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <Link
                  href={`/products/${result._id}`}
                  key={result._id}
                  className="block p-2 hover:bg-[#FCF8F3] rounded transition duration-200 "
                  onClick={() => {
                    setIsSearching(false);
                    setSearchQuery("");
                  }}
                >
                  {result.name}
                </Link>
              ))
            ) : (
              <div className="p-2 text-gray-500">No results found</div>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
