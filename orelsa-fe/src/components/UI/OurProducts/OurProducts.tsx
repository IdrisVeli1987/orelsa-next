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

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TheOurProducts.map(({ id, src, subTitle, desc, price, sales }) => {
              return (
                <div
                  key={id}
                  className="flex flex-col justify-center items-center border rounded-lg shadow-md w-[285px] h-[446] mb-6 "
                >
                  <Image
                    src={src}
                    alt={subTitle}
                    className="w-full h-48 object-cover rounded"
                    width={200}
                    height={200}
                    style={{ width: "285px", height: "301px" }}
                  />
                  <div className="bg-[#F4F5F7] w-full h-full pb-4">
                    <div className="px-4 py-6">
                      <h2 className="text-2xl font-semibold px-4 py-6">
                        {subTitle}
                      </h2>
                      <p className="text-gray-600 ">{desc}</p>
                    </div>
                    <div className="flex justify-between items-center gap-1 w-[285px]">
                      <p className="text-sm font-bold ">${price}</p>
                      {sales && <p className="text-[#B0B0B0]">Sale: {sales}</p>}
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
