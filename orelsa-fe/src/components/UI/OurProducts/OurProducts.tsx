import { IOurProducts, TheOurProducts } from "@/components/Views/Landing/db";
import LandingContainer from "@/components/Views/Landing/LandingContainer";
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
                  className="flex flex-col justify-center items-center border rounded-lg shadow-md w-full h-[446] mb-6 "
                >
                  <Image
                    src={src}
                    alt={subTitle}
                    className="w-full h-48 object-cover rounded"
                    width={200}
                    height={200}
                    style={{ width: "100", height: "301px" }}
                  />
                  <div className="bg-[#F4F5F7] w-full h-full pb-4 pl-4">
                    {/* <div className="flex flex-col gap-2"> */}
                    <h2 className="text-2xl font-semibold">{subTitle}</h2>
                    <p className="text-gray-600">{desc}</p>
                    {/* </div> */}
                    <div className="flex items-center w-max gap-1 mt-2">
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
        </div>
      </LandingContainer>
    </section>
  );
};
export default OurProducts;
