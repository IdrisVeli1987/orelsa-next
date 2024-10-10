"use client";
import { cn } from "@nextui-org/theme";
import axios from "axios";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchBar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const featchSearchData = async () => {
      const url = `http://localhost:9089/guest/search`;
      // const sers = encodeURI();
      try {
        const { data } = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setSearch(data);
      } catch (err) {
        console.log(err);
      }
    };

    featchSearchData();
  }, []);
  console.log(search);
  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("current query", searchQuery);
  };

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
        "absolute h-[50px] transition-all duration-1000 ease-in-out right-[80px]",
        isSearching ? "w-[300px]" : "w-[50px]"
      )}
    >
      <div className="relative">
        <input
          value={searchQuery}
          type="search"
          placeholder="Axtarış"
          className="w-full focus-visible:outline-none outline-none focus:outline-none h-full p-4 rounded-full bg-slate-200"
          onChange={onSearch}
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
