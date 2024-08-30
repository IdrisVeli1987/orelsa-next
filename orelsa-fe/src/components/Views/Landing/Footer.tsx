import React from "react";
import LandingContainer from "./LandingContainer";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="">
      <LandingContainer>
        <div className="flex justify-between w-full py-12">
          <div className="flex flex-col md:mb-0">
            <h3 className="text-2xl font-bold pb-[30px]">Funiro.</h3>
            <p className="font-normal text-base">
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL
              33134 USA
            </p>
          </div>

          <div className="flex justify-between flex-col md:gap-6 items-center md:items-start">
            <p className="text-base font-medium text-[#9F9F9F]">Links</p>
            <Link href="/" className="text-base font-medium text-[#000]">
              Home
            </Link>
            <Link href="/shop" className="text-base font-medium  text-[#000]">
              Shop
            </Link>
            <Link href="/contact" className="text-base font-medium text-[#000]">
              Сontact
            </Link>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 md:items-start">
            <p>Newsletter</p>

            <div className="">
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full border-solid border-b-[1px] border-black text-sm font-normal"
                  style={{ width: "" }}
                />

                <button className=" border-solid border-b-[1px] border-black font-medium text-sm">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </LandingContainer>
    </footer>
  );
};

export default Footer;
