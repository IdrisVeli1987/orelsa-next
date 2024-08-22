import Image from "next/image";
import Link from "next/link";
import LandingContainer from "./LandingContainer";
import menu from "./menu";

const Header = () => {
  const navLinks = menu();
  return (
    <header className="py-6 px-16">
      <LandingContainer>
        <nav className="flex justify-between items-center relative w-full bg-white">
          <div className="flex justify-between" id="logo">
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

          <menu>
            {navLinks.map((link, id) => {
              <li key={id} className="py-2 md:py-0 md:flex ">
                <Link href={link.link}>{link.name}</Link>
              </li>;
            })}
          </menu>
        </nav>
      </LandingContainer>
    </header>
  );
};

export default Header;
