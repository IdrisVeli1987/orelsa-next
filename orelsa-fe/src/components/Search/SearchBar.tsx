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
  const [searchResults, setSearchResults] = useState([]);

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
    setSearchQuery("");
    if (!isSearching) {
      fetchSearchData(searchQuery);
    }
  };

  return (
    <form
      className={cn(
        "absolute h-[50px] transition-all duration-1000 ease-in-out right-[80px]",
        isSearching ? "w-[300px]" : "w-[50px]"
      )}
    >
      <div className="relative">
        <input
          type="search"
          placeholder="Axtarış"
          className="w-full focus-visible:outline-none outline-none h-full p-4 rounded-full "
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 w-[50px] h-[50px] top-1/2 -translate-y-1/2 p-4 rounded-full bg-white"
        >
          {isSearching ? <IoMdClose /> : <CiSearch />}
        </button>
      </div>

      {isSearching && (
        <div
          className={`absolute top-10 pl-2 pt-2 text-black w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 z-50`}
        >
          {(searchResults as IProductById[]).length > 0
            ? searchResults.map((result, index) => (
                <Link
                  href={`/products/${(result as IProductById)?._id}`}
                  key={index}
                  className="p-2 hover:bg-[#FCF8F3] rounded"
                  onClick={() => {
                    setIsSearching(false);
                    setSearchQuery("");
                  }}
                >
                  {(result as IProductById)?.name ?? ""}
                </Link>
              ))
            : null}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
