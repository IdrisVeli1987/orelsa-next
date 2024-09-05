"use client";

import { Shoping, ShopRoom } from "@/components/Views/Landing/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Pagination } from "@nextui-org/react";

const ShopRooms = () => {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-10 pb-3">
        {Shoping.map(
          ({ id, src, title, subtitle, priceList, sale }: ShopRoom) => {
            return (
              <div
                key={id}
                className="relative flex flex-col justify-center items-center border rounded-lg shadow-md w-full h-auto mb-6 group"
              >
                <div className="absolute flex justify-center items-center opacity-0 inset-0 z-50 transition duration-300 ease-in-out group-hover:bg-black/70 group-hover:opacity-100">
                  <Link
                    href={`/shop/${id}`}
                    className="bg-white w-[60%] text-xl text-[#B88E2F] py-3 rounded duration-300 ease-in-out text-center"
                  >
                    Ətraflı bax
                  </Link>
                </div>

                <div className="relative w-full h-full overflow-hidden rounded ">
                  <Image
                    src={src}
                    alt={subtitle}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform "
                    width={300}
                    height={300}
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="bg-[#F4F5F7] w-full h-max p-4">
                  <h2 className="text-2xl font-semibold">{title}</h2>
                  <p className="text-gray-600 my-2  ">{subtitle}</p>
                  <div className="flex justify-between items-center w-max gap-5">
                    <p className="text-xl font-bold">RP {priceList - sale}</p>
                    {sale ? (
                      <p className="text-[#B0B0B0] text-base line-through ">
                        RP {priceList}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>

      <div className="gap-10 w-full h-full flex justify-center items-center">
        <Pagination
          color="warning"
          showControls
          total={10}
          initialPage={1}
          loop
          className="flex justify-center items-center w-full h-full py-10"
          style={{ display: "flex", gap: "10px" }}
        />
      </div>
    </section>
  );
};
export default ShopRooms;
