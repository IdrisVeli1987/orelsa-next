import Link from "next/link";
import LandingContainer from "./LandingContainer";
import Image from "next/image";

const Header = () => {
  return (
    <header className="max-w-[1286px]">
      <nav className="flex justify-between items-center relative  w-full">
        <div className="flex items-center" id="logo">
          <Link href="/">
            <Image
              src="/NavbarLogo/LogoIcon.svg"
              alt="icon"
              width={50}
              height={32}
            />
          </Link>
        </div>
      </nav>
      <LandingContainer></LandingContainer>
    </header>
  );
};

export default Header;
