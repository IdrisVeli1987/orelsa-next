import LandingContainer from "@/components/Views/Landing/LandingContainer";
import Image from "next/image";

const ShopDetails = () => {
  return (
    <section>
      <LandingContainer>
        <div className="py-10 w-full ">
          <div className="bg-red-700 w-full h-full grid grid-cols-2 ">
            <div className="bg-blue-600 w-2/4">
              <Image
                src="/Details/95.svg"
                alt="image"
                width={100}
                height={100}
                className="w-[480px] h-[500px]"
              />
            </div>

            <div>
              <h5>Asgaard sofa</h5>
            </div>
          </div>
        </div>
      </LandingContainer>
    </section>
  );
};
export default ShopDetails;
