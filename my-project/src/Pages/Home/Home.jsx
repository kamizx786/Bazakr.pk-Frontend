import React from "react"
import Hero from "./components/Hero";
import cities from "./components/cities";
import CityGrid from "./components/CityGrid";
import BecomeSeller from "./components/BecomeSeller";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* CITIES */}
      <div className="py-20">
        <div class="flex flex-col items-center gap-3 pb-10">
            <h1 class="text-[3rem] md:text-[4rem] font-serif text-center">
              <span class="text-[#248F59]">Cities</span> Where <br /> We Deliver!
            </h1>
            <p class="font-sans text-lg font-normal leading-6 tracking-normal text-center">
              Find us in these cities and many more!
            </p>
          </div>
          {/* CITY GRID */}
          <div>
            <CityGrid {...cities} />
          </div>
      </div>
      {/* BECOME A SELLER */}
      <BecomeSeller />

    </>
  );
};
export default Home;
