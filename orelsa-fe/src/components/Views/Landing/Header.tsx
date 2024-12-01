"use client";

import { FC, useEffect, useState } from "react";
import { useBoolean } from "ahooks";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "@/components/shared/Search/SearchBar";
import Image from "next/image";
import Link from "next/link";
import LandingContainer from "./LandingContainer";
import menu from "./menu";
import { IProductById } from "@/interface/ui";
import axios from "axios";

type NavLink = {
  id: string;
  link: string;
  name: string;
};

const Header: FC = () => {
  const navLinks: NavLink[] = menu();
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

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSearching((prev) => !prev);
  //   if (!isSearching) {
  //     fetchSearchData(searchQuery);
  //   } else {
  //     setSearchQuery("");
  //   }
  // };
  const [state, { toggle, setFalse }] = useBoolean(false);

  return (
    <header className="py-6 px-6">
      <LandingContainer>
        <nav className="flex justify-between items-center w-full max-w-[1280px] mx-auto relative">
          <div className="flex justify-between items-center" id="logo">
            <Link href="/" className="cursor-pointer flex items-center gap-2">
              <Image
                src="/NavbarLogo/LogoIcon.svg"
                alt="icon"
                width={50}
                height={32}
              />
              <h1 className="font-bold text-4xl text-black">Furniro</h1>
            </Link>
          </div>
          <ul className="hidden lg:flex justify-center items-center space-x-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className="text-black font-medium text-base leading-6"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-[290px] flex flex-row-reverse">
            <div className="hidden lg:flex ">
              <SearchBar />
            </div>
          </div>

          <button
            className="lg:hidden flex items-center space-x-2"
            onClick={toggle}
          >
            <GiHamburgerMenu />
          </button>
          {state && (
            <div className="lg:hidden absolute top-16 right-6 w-48 bg-white shadow-lg rounded-md z-10">
              <ul className="flex flex-col items-center space-y-4 py-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.link}
                      className="text-black font-medium text-base"
                      onClick={setFalse}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <input
                    type="search"
                    placeholder="Axtarış"
                    className="w-full focus-visible:outline-none outline-none h-full p-4 rounded-full border border-gray-300 transition-all duration-200 ease-in-out"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                  />
                </li>
              </ul>
              {searchResults.length > 0
                ? searchResults.map((result) => (
                    <Link
                      href={`/products/${result._id}`}
                      key={result._id}
                      className="block p-2 hover:bg-[#FCF8F3] rounded transition duration-200 "
                      onClick={() => {
                        setSearchQuery("");
                      }}
                    >
                      {result.name}
                    </Link>
                  ))
                : searchQuery && (
                    <div className="p-2 text-gray-500">No results found</div>
                  )}
            </div>
          )}
        </nav>
      </LandingContainer>
    </header>
  );
};

export default Header;
