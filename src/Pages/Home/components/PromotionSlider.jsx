import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Sliders from "./Sliders";
const offerSliderBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  580: {
    slidesPerView: 2,
    spaceBetween: 16,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 16,
  },
  1920: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const PromotionSlider = () => {
  return (
    <div className="px-6 py-5 md:p-8">
      <div className="relative">
        <Swiper
          id="offer"
          breakpoints={offerSliderBreakpoints}
          modules={[Navigation]}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
        >
          {Sliders?.map((d) => (
            <SwiperSlide key={d.id}>
              <img
                className="w-full h-auto"
                src={d.image}
                width="580"
                height="270"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="absolute z-10 flex items-center prev justify-center w-8 h-8
          -mt-4 transition-all duration-200 -left-4 -right-4 top-2/4
          border rounded-full shadow-xl cursor-pointer md:-mt-5 md:w-9 md:h-9
          md:-left-5 md:-right-5  bg-white border-opacity-70" 
          role="button"
        >
          <span className="sr-only">Prev</span>
          <ChevronLeftIcon width={18} height={18} />
        </div>
        <div
          className="absolute z-10 flex items-center next justify-center w-8 h-8 
          -mt-4 transition-all duration-200 border rounded-full shadow-xl 
          cursor-pointer top-2/4 md:-mt-5 md:w-9 md:h-9 -right-4 md:-right-5 
          border-opacity-70 bg-white"
          role="button"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon width={18} height={18} />
        </div>
      </div>
    </div>
  );
};
export default PromotionSlider;
