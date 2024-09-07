"use client";
import LandingContainer from "@/components/Views/Landing/LandingContainer";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

export const Form = () => {
  const [value, setValue] = useState("");

  return (
    <LandingContainer>
      <form action="" className="w-full">
        <div className="w-full flex justify-center items-center md:items-start mt-20 gap-12 flex-col md:flex-row ">
          <div className="w-[80%] md:w-[25%] m-auto md:m-0">
            <div className="flex gap-3 mb-8">
              <IoLocationSharp className="text-lg" />
              <div className="pt-2">
                <h4 className="font-bold text-base">Address</h4>
                <p className="text-sm">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-8">
              <IoLocationSharp className="text-lg" />
              <div className="pt-2">
                <h4 className="font-bold text-base">Address</h4>
                <p className="text-sm">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-8">
              <IoLocationSharp className="text-lg" />
              <div className="pt-2">
                <h4 className="font-bold text-base">Address</h4>
                <p className="text-sm">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
          </div>
          <div className="w-[80%] md:w-[50%]">
            <div className="mb-8">
              <p className="mb-2 font-bold">Your Email</p>
              <Input
                type="email"
                // label="Email"
                placeholder="Enter your Email "
                value={value}
                onValueChange={setValue}
                variant="bordered"
                size="lg"
              />
            </div>
            <div className="mb-8">
              <p className="mb-2 font-bold">Your Email</p>
              <Input
                type="email"
                // label="Email"
                placeholder="Enter your Email "
                value={value}
                onValueChange={setValue}
                variant="bordered"
                size="lg"
              />
            </div>
            <div className="mb-8">
              <p className="mb-2 font-bold">Your Email</p>
              <Input
                type="email"
                // label="Email"
                placeholder="Enter your Email "
                value={value}
                onValueChange={setValue}
                variant="bordered"
                size="lg"
              />
            </div>
          </div>
        </div>
      </form>
    </LandingContainer>
  );
};
