import LandingContainer from "@/components/Views/Landing/LandingContainer";

export const FormTitle = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <LandingContainer>
          <section className="">
            <div className="mt-24 w-full flex  items-center flex-col gap-2">
              <h1 className="font-semibold text-4xl">Get In Touch With Us</h1>
              <p className="text-base font-normal text-center">
                For More Information About Our Product & Services. Please Feel
                Free To Drop Us <br /> An Email. Our Staff Always Be There To
                Help You Out. Do Not Hesitate!
              </p>
            </div>
          </section>
        </LandingContainer>
      </div>
    </>
  );
};
