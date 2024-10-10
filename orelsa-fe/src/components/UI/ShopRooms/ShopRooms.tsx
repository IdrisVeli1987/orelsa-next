"use client";

import { Shoping, ShopRoom } from "../../../../Utils/db";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Pagination } from "@nextui-org/react";
import axios from "axios";

const ShopRooms = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsList = async () => {
      const url = "http://localhost:9089/guest/product";

      try {
        const { data } = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProductsList();
  }, []);

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-10 pb-3">
        {products.map(
          ({
            _id,
            photos,
            name,
            description,
            discount_price,
            price,
          }: ShopRoom) => {
            return (
              <div
                key={_id}
                className="relative flex flex-col justify-center items-center border rounded-lg shadow-md w-full h-auto mb-6 group"
              >
                <div className="absolute flex justify-center items-center opacity-0 inset-0 z-50 transition duration-300 ease-in-out group-hover:bg-black/70 group-hover:opacity-100">
                  <Link
                    href={`/products/${_id}`}
                    className="bg-white w-[60%] text-xl text-[#B88E2F] py-3 rounded duration-300 ease-in-out text-center"
                  >
                    Ətraflı bax
                  </Link>
                </div>

                <div className="relative w-full h-full overflow-hidden rounded ">
                  <Image
                    src={photos[0]}
                    alt={description}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform "
                    width={300}
                    height={300}
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="bg-[#F4F5F7] w-full h-max p-4">
                  <h2 className="text-2xl font-semibold">{name}</h2>
                  <p className="text-gray-600 my-2  ">{description}</p>
                  <div className="flex justify-between items-center w-max gap-5">
                    <p className="text-xl font-bold">RP {discount_price}</p>
                    {price ? (
                      <p className="text-[#B0B0B0] text-base line-through ">
                        RP {price}
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
