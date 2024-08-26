import LandingContainer from "@/components/Views/Landing/LandingContainer";

const Rooms: React.FC = () => {
  return (
    <section className="bg-[#FCF8F3]">
      <LandingContainer>
        <div className="w-full h-full grid grid-rows-4 ">
          <div className="w-2/4 pt-[130px]">
            <h3 className="w-[12ch] font-bold text-[40px] text-[#3A3A3A]">
              50+ Beautiful rooms inspiration
            </h3>
            <p className="w-[255px] pt-[105px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </LandingContainer>
    </section>
  );
};

export default Rooms;
