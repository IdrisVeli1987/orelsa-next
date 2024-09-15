import { getAllProducts } from "@/api/ui/requests";
import LandingContainer from "@/components/Views/Landing/LandingContainer";
import { IProduct } from "@/interface/ui";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const OurProducts: React.FC = async () => {
  const TheOurProducts = await getAllProducts();

  return (
    <section>
      <LandingContainer>
        <div className="w-full">
          <h2 className="text-4xl font-extrabold text-center text-[#333333] mb-6">
            Our Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {TheOurProducts.map(
              ({
                _id,
                name,
                description,
                price,
                discount,
                discount_price,
                photos,
                new: { isNew },
                active,
              }: IProduct) => {
                return (
                  active && (
                    <div
                      key={_id}
                      className="relative flex flex-col justify-center items-center border rounded-lg  w-full h-auto mb-6 group hover:shadow-xl"
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
                          alt={name}
                          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                          width={300}
                          height={300}
                          style={{ objectFit: "cover" }}
                        />
                      </div>

                      <div className="bg-[#F4F5F7] w-full h-max pb-4 pl-4">
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        <p className="text-[#B0B0B0]">{description}</p>
                        <div className="flex justify-between items-center w-max gap-40 mt-2">
                          <p className="text-xl font-semibold text-#B0B0B0">
                            AZN {price}
                          </p>
                          <p className="text-xl font-bold text-[#B0B0B0] line-through mb-2">
                            AZN {discount_price}
                          </p>
                          {/* <p className="text-xl font-bold text-#B0B0B0">
                            ${discount_price}
                          </p> */}

                          <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#2EC1AC] text-white absolute top-[24px] right-6">
                            {true && <p>New</p>}
                          </div>

                          <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#E97171] text-white absolute top-[24px] right-6 ">
                            {discount && `${discount}%`}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                );
              }
            )}
          </div>
          <div className="w-full my-6 flex justify-center">
            <Button
              variant="solid"
              color="default"
              className="border-2 border-[#B88E2F] bg-white text-center py-8 px-16 font-semibold text-base text-[#B88E2F]"
            >
              Show More
            </Button>
          </div>
        </div>
      </LandingContainer>
    </section>
  );
};

export default OurProducts;
