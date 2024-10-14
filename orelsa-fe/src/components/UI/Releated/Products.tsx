"use client";
import LandingContainer from "@/components/Views/Landing/LandingContainer";
import { IProduct } from "@/interface/ui";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type RelatedProducts = {
  relatedProducts: IProduct;
};

const RelatedProducts = ({ relatedProducts }) => {
  const [showMore, setShowMore] = useState(false);
  const [newRelatedProducts, setNewRelatedProducts] = useState([]);

  useEffect(() => {
    setNewRelatedProducts(relatedProducts as never);
  }, [relatedProducts]);

  return (
    <section>
      <LandingContainer>
        <div className=" w-full h-full ">
          <div className=" flex justify-center items-center mb-6">
            <h3 className="font-medium text-4xl">Related Products</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {newRelatedProducts
              .slice(0, showMore ? newRelatedProducts.length : 4)
              .map(
                ({ _id, photos, name, description, discount_price, sales }) => {
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
                          src={photos?.[0]}
                          alt={name}
                          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                          width={300}
                          height={300}
                          style={{ objectFit: "cover" }}
                        />
                      </div>

                      <div className="bg-[#F4F5F7] w-full h-max pb-4 pl-4">
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        <p className="text-gray-600">{description}</p>
                        <div className="flex justify-between items-center w-max gap-5 mt-2">
                          <p className="text-xl font-bold">${discount_price}</p>
                          {sales && (
                            <p className="text-[#B0B0B0] text-base">
                              Sale: {sales}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
          <div className="w-full my-6 flex justify-center">
            <Button
              variant="solid"
              color="default"
              className="border-2 border-[#B88E2F] bg-white text-center py-8 px-16 font-semibold text-base text-[#B88E2F]"
              onClick={() => setShowMore((pre) => !pre)}
            >
              {showMore ? "Gizlət" : "Hamısına bax"}
            </Button>
          </div>
        </div>
      </LandingContainer>
    </section>
  );
};

export default RelatedProducts;
