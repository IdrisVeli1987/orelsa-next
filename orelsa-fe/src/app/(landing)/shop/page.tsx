import LandingContainer from "@/components/Views/Landing/LandingContainer";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="w-full h-full overflow-hidden">
      <section className="bg-hero flex items-center justify-center min-h-[300px] w-full relative bg-no-repeat bg-center bg-cover">
        <div className="">
          <p className="mt-3 text-center font-medium text-5xl w-full p-2 ">
            Shop
          </p>

          <div className="flex justify-between items-center">
            <Link href="/" className="text-base font-bold">
              Home
            </Link>

            <span className="font-bold">&gt;</span>

            <Link href="/" className="text-base font-medium">
              Shop
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#F9F1E7] py-6">
        <LandingContainer>
          <div className="flex justify-between items-center gap-6 w-full">
            <div className="flex justify-between items-center gap-6">
              <div className="flex gap-3">
                <Link href="">
                  <Image
                    src="/Shop/mixer.svg"
                    alt="mixer imag"
                    width={100}
                    height={100}
                    className="w-auto h-auto relative "
                  />
                </Link>
                <p>Filter</p>
              </div>

              <Link href="">
                <Image
                  src="/Shop/dot.svg"
                  alt="mixer imag"
                  width={100}
                  height={100}
                  className="w-auto h-auto relative "
                />
              </Link>

              <Link href="">
                <Image
                  src="/Shop/icon-3.svg"
                  alt="mixer imag"
                  width={100}
                  height={100}
                  className="w-auto h-auto relative "
                />
              </Link>

              <div className="flex justify-center items-center gap-8">
                <Image
                  src="/Shop/Line.svg"
                  alt="mixer imag"
                  width={100}
                  height={100}
                  className="w-auto h-auto relative "
                />
                <p>Showing 1–16 of 32 results</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-4">
                <p className="">Show</p>
                <div className="relative inline-block bg-white ">
                  <button className="min-w-[55px] h-[55px] "></button>
                  <div className="hidden absolute z-[1] shadow-xl hover:block">
                    <Link
                      href="#"
                      className="text-black py-3 px-4 block hover:bg-[#f1f1f1]"
                    >
                      16
                    </Link>
                    <Link href="#">32</Link>
                    <Link href="#">48</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LandingContainer>
      </section>
    </main>
  );
}
