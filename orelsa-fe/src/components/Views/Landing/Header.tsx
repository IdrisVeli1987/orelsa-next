"use client";

import SearchBar from "@/components/shared/Search/SearchBar";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import LandingContainer from "./LandingContainer";
import menu from "./menu";

type NavLink = {
  id: string;
  link: string;
  name: string;
};

const Header: FC = () => {
  const navLinks: NavLink[] = menu();

  return (
    <header className="py-6 px-6 ">
      <LandingContainer>
        <nav className="flex justify-between items-center relative w-[1280px] ">
          <div className="flex justify-between" id="logo">
            <Link href="/" className="cursor-pointer flex items-center gap-2 ">
              <Image
                src="/NavbarLogo/LogoIcon.svg"
                alt="icon"
                width={50}
                height={32}
              />
              <h1 className="font-bold text-4xl text-black">Furniro</h1>
            </Link>
          </div>

          <ul className="flex justify-center items-center m-auto lg:items-center !text-white lg:justify-between h-full w-[310px] space-x-4 ">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className=" text-black font-medium text-base leading-6"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <SearchBar />
        </nav>
      </LandingContainer>
    </header>
  );
};

export default Header;
