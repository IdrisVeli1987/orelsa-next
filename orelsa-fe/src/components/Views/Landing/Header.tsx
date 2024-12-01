"use client";

import { FC, useEffect, useState } from "react";
import { useBoolean } from "ahooks";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import LandingContainer from "./LandingContainer";
import menu from "./menu";
import SearchBar from "@/components/shared/Search/SearchBar";

type NavLink = {
  id: string;
  link: string;
  name: string;
};

const Header: FC = () => {
  const navLinks: NavLink[] = menu();
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
          <SearchBar />
          <button
            className="lg:hidden flex items-center space-x-2 pr-8 text-center"
            onClick={toggle}
          >
            <GiHamburgerMenu />
          </button>
          {state && (
            <div className="lg:hidden absolute top-8 right-6 w-48 bg-orange transparent opacity-100 shadow-lg rounded-md z-10 md:bg-red">
              <ul className="flex flex-col items-center justify-center space-y-4 py-4 text-center">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.link}
                      className="text-black font-medium text-base "
                      onClick={setFalse}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </LandingContainer>
    </header>
  );
};

export default Header;
