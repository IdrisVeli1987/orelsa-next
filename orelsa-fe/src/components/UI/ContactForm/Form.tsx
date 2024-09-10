"use client";
import LandingContainer from "@/components/Views/Landing/LandingContainer";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Textarea } from "@nextui-org/input";

export const Form = () => {
  const [value, setValue] = useState("");

  return (
    <LandingContainer>
      <form action="" className="w-full">
        <div className="w-full flex justify-center items-center md:items-start mt-20 gap-12 flex-col md:flex-row bg-red-600">
          <div className="w-[80%] md:w-[25%] m-auto md:m-0">
            <div className="flex gap-3 mb-8">
              <IoLocationSharp className="text-lg" />
              <div className="pt-2">
                <h4 className="font-bold text-base">Address</h4>
                <p className="text-base font-normal">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-8">
              <FaPhoneAlt  className="text-lg" />
              <div className="pt-2 w-[200px] ">
                <h4 className="font-bold text-base">Phone</h4>
                <p className="text-base font-normal">
                  Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex gap-3 mb-8">
              <IoLocationSharp className="text-lg" />
              <div className="pt-2">
                <h4 className="font-bold text-base">Working Time</h4>
                <p className="text-sm">
                  Monday-friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="w-[50%] md:w-[50%] ">
            <div className="mb-8 w-[430px]">
              <p className="mb-2 font-bold">Your Name</p>
              <Input
                type="email"
                // label="Email"
                isRequired
                placeholder="Enter your name"
                value={value}
                onValueChange={setValue}
                variant="bordered"
                size="lg"
              />
            </div>
            <div className="mb-8 w-[430px]">
              <p className="mb-2 font-bold">Email addres</p>
              <Input
                type="email"
                isRequired
                // label="Email"
                placeholder="Enter your Email "
                value={value}
                onValueChange={setValue}
                variant="bordered"
                size="lg"
              />
            </div>
            <div className="mb-8 w-[430px]">
              <p className="mb-2 font-bold">Mövzu</p>
              <Input
                type="email"
                isRequired
                // label="Email"
                placeholder="This is an optional"
                value={value}
                onValueChange={setValue}
                variant="bordered"
                size="lg"
              />
            </div>
            <div className="mb-8 w-full">
              <Textarea
                isRequired
                label="Message"
                labelPlacement="outside"
                placeholder="Mesajınızı bura daxil edin."
                className="max-w-md mb-2 font-bold"
              />
            </div>
          </div>
        </div>
      </form>
    </LandingContainer>
  );
};
