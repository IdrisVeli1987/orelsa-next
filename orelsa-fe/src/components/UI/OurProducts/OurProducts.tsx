import { IOurProducts, TheOurProducts } from "@/components/Views/Landing/db";
import LandingContainer from "@/components/Views/Landing/LandingContainer";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const OurProducts: React.FC = () => {
  return (
    <section>
      <LandingContainer>
        <div className="w-full">
          <h2 className="text-4xl font-extrabold text-center text-[#333333] mb-6">
            Our Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {TheOurProducts.map(({ id, src, subTitle, desc, price, sales }) => {
              return (
                <div
                  key={id}
                  className="relative flex flex-col justify-center items-center border rounded-lg shadow-md w-full h-auto mb-6 group"
                >
                  <div className="absolute flex justify-center items-center opacity-0 inset-0 z-50 transition duration-300 ease-in-out group-hover:bg-black/70 group-hover:opacity-100">
                    <button className="bg-white w-[60%] text-xl text-[#B88E2F] py-3 rounded duration-300 ease-in-out">
                      Ətraflı bax
                    </button>
                  </div>

                  <div className="relative w-full h-full overflow-hidden rounded ">
                    <Image
                      src={src}
                      alt={subTitle}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                      width={300}
                      height={300}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="bg-[#F4F5F7] w-full h-max pb-4 pl-4">
                    <h2 className="text-2xl font-semibold">{subTitle}</h2>
                    <p className="text-gray-600">{desc}</p>
                    <div className="flex justify-between items-center w-max gap-5 mt-2">
                      <p className="text-xl font-bold">${price}</p>
                      {sales && (
                        <p className="text-[#B0B0B0] text-base">
                          Sale: {sales}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full my-6 flex justify-center">
            <Button
              variant="solid"
              color="primary"
              className="border-2 border-[#B88E2F] text-center py-3 px-16 font-semibold text-base text-[#B88E2F]"
            >
              Show more
            </Button>
          </div>
        </div>
      </LandingContainer>
    </section>
  );
};

export default OurProducts;
