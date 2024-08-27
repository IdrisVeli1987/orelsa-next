import React from "react";
import LandingContainer from "./LandingContainer";

const Footer = () => {
  return (
    <footer className="bg-landingblue-500 p-10 w-full sm:p-4 ">
      <LandingContainer>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-6 md:gap-12 mt-8 md:mb-0">
            <h3 className="text-2xl font-bold pb-[50px]">Funiro.</h3>
            <p className="w-[285px] h-[70px] font-normal text-base">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
        </div>
      </LandingContainer>
    </footer>
  );
};

export default Footer;
