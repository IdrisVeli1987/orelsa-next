import LandingContainer from "@/components/Views/Landing/LandingContainer";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { IRange } from "@/Utils/db";

const TheRange: React.FC = async () => {
  const { data } = await axios.get(
    "http://localhost:9089/guest/homeBrowseRange"
  );
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
            {data.map(({ _id, browseRangePhoto, description }: IRange) => {
              return (
                <div
                  key={_id}
                  className="flex flex-col justify-center items-center"
                >
                  <Image
                    src={browseRangePhoto}
                    alt="image"
                    width={380}
                    height={480}
                  />
                  <p className="mt-6 font-semibold text-2xl">{description}</p>
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
