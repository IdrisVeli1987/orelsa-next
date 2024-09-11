import { IRange, TheRangeData } from "../../../../Utils/db";
import LandingContainer from "@/components/Views/Landing/LandingContainer";
import Image from "next/image";
import React from "react";

const TheRange: React.FC = () => {
  return (
    <section>
      <LandingContainer>
        <div className="flex flex-col justify-center items-center w-full h-[810px]">
          <div className="flex justify-center items-center mx-auto w-[400px] mb-4">
            <h1 className="text-4xl font-bold text-[#3A3A3A;]">
              Browse The Range
            </h1>
          </div>
          <div className="text-center">
            <p className="w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex pt-9 gap-6">
            {TheRangeData.map(({ id, src, desc }: IRange) => {
              return (
                <div
                  key={id}
                  className="flex flex-col justify-center items-center"
                >
                  <Image src={src} alt="image" width={380} height={480} />
                  <p className="mt-6 font-semibold text-2xl">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </LandingContainer>
    </section>
  );
};

export default TheRange;
