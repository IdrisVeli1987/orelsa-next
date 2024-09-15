"use client";
import React, { useState } from "react";
import LandingContainer from "@/components/Views/Landing/LandingContainer";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IProductById } from "@/interface/ui";

const ProductsDetails = ({
  _id,
  name,
  description,
  price,
  discount,
  discount_price,
  photos,
}: IProductById) => {
  const [selectedImage, setSelectedImage] = useState(photos[0]);

  const handleImageOnClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };
  return (
    <section>
      <LandingContainer>
        <div className="py-10 w-full flex justify-between items-center ">
          <div className=" flex  gap-36  w-full">
            <div className=" flex ">
              <div className=" flex flex-col gap-3 mr-5 " key={_id}>
                {photos?.map((src: string, index: number) => {
                  return (
                    <Image
                      key={index}
                      src={src}
                      alt="image"
                      width={76}
                      height={80}
                      className="bg-cover bg-no-repeat cursor-pointer"
                      onClick={() => handleImageOnClick(src)}
                    />
                  );
                })}
              </div>

              <div id="main-photo" className="border-none">
                <Image
                  src={selectedImage}
                  alt="main"
                  width={480}
                  height={500}
                  className="bg-cover bg-no-repeat border-none"
                />
              </div>
            </div>

            <div id="second-part" className="">
              <div className="flex flex-col flex-wrap justify-between items-center ">
                <div className="py-4  ">
                  <h2 className="font-normal text-4xl py-2">{name}</h2>
                  <p className="font-medium text-2xl text-[#9F9F9F] pb-5">
                    {price}
                  </p>
                  <p className="font-normal text-sm w-[50ch]">{description}</p>
                </div>
              </div>
              <div className=" flex pt-20 pb-40">
                <Button className="w-56 h-[75px] bg-[#B88E2F] font-bold text-white text-base">
                  SİFARİŞ ET
                </Button>
              </div>

              <hr />
              <div className=" flex flex-col w-full pt-10">
                <div className=" flex gap-3">
                  <p className="pr-10 font-normal text-base text-[#9F9F9F]">
                    Model
                  </p>
                  <span className="pr-2 font-normal text-base text-[#9F9F9F]">
                    :
                  </span>
                  <p className="font-normal text-base text-[#9F9F9F]">SS001</p>
                </div>
                <div className="flex ">
                  <p className="pr-7 font-normal text-base text-[#9F9F9F]">
                    Category
                  </p>
                  <span className="pr-4 font-normal text-base text-[#9F9F9F]">
                    :
                  </span>
                  <p className="font-normal text-base text-[#9F9F9F]">Sofas</p>
                </div>
              </div>

              <div id="follow" className="flex gap-6 pt-14">
                <h6 className="font-normal text-base text-[#9F9F9F]">
                  Follow us
                </h6>
                <span className="font-normal text-base text-[#9F9F9F]">:</span>
                <div className="flex justify-between items-center gap-4">
                  <Link href="https://facebook.com">
                    <FaFacebook />
                  </Link>
                  <Link href="https://linkedin.com">
                    <FaLinkedinIn />
                  </Link>
                  <Link href="https://x.com">
                    <AiFillTwitterCircle />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LandingContainer>
    </section>
  );
};
export default ProductsDetails;
