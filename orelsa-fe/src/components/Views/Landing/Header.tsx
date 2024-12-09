"use client";

import { useBoolean } from "ahooks";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";
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
    <header className="py-6 px-6 bg-transparent">
      <LandingContainer>
        <nav className="flex justify-between items-center w-full max-w-[1280px] mx-auto relative bg-transparent">
          <div className="flex justify-start items-center space-x-4" id="logo">
            <Link href="/" className="cursor-pointer flex items-center gap-2">
              <Image
                src="/NavbarLogo/LogoIcon.svg"
                alt="icon"
                width={50}
                height={32}
              />
              <h1 className="font-bold text-4xl text-black hidden md:block">
                ORELSA
              </h1>
            </Link>
          </div>

          <ul className="hidden lg:flex justify-between items-center space-x-8 bg-transparent">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className="text-black font-medium text-base leading-6 hover:text-primary transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="lg:block ml-auto ms-auto me-auto">
            <SearchBar />
          </div>

          <button
            className="lg:hidden flex items-center text-center"
            onClick={toggle}
          >
            {state ? (
              <IoCloseCircle size={30} />
            ) : (
              <GiHamburgerMenu size={30} />
            )}
          </button>

          {state && (
            <div className="lg:hidden absolute top-16 right-1 sm:right-0 w-full max-w-[150px] opacity-100 rounded-md z-10 bg-transparent shadow-lg">
              <ul className="flex flex-col items-center space-y-6 p-4 bg-transparent">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.link}
                      className="text-black font-medium text-base hover:text-primary transition duration-200"
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
