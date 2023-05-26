import {ChevronLeftIcon,ChevronRightIcon} from "@heroicons/react/24/solid";
import {Swiper,SwiperSlide} from "swiper/react"
import { Navigation,Thumbs,FreeMode } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs"

import React,{  useState } from 'react';

// product gallery breakpoints
const galleryCarouselBreakpoints = {
  320: {
    slidesPerView: 2,
  },
  480: {
    slidesPerView: 3,
  },
  640: {
    slidesPerView: 3,
  },
  800: {
    slidesPerView: 4,
  },
}
const ProductDetailsSlider=({gallery}) => {
const [thumbsSwiper, setThumbsSwiper] = useState(null);
const swiperParams= {
    slidesPerView: 1,
    spaceBetween: 0,
  };
  return (
    <div>
      <div className="relative">
        <Swiper
          id="productGallery"
          modules={[Navigation, Thumbs, FreeMode]}
          //   thumbs={{ swiper: thumbsSwiper }}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          {...swiperParams}
        >
          {gallery?.map((item) => (
            <SwiperSlide
              //   key={`product-gallery-${item.id}`}
              className="flex items-center justify-center selection:bg-transparent"
            >
              <img
                src={item.url}
                width={420}
                height={560}
                className="ml-auto mr-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className="absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 transition-all duration-200 
          border rounded-full shadow-xl cursor-pointer prev top-2/4
           -left-4 -right-4 md:-left-5 md:-right-5 md:-mt-5 md:w-9 md:h-9 
           bg-light border-border-200 border-opacity-70 text-heading 
           hover:bg-accent hover:text-light hover:border-accent"
          role="button"
        >
          <span className="sr-only">Prev</span>
          <ChevronLeftIcon width={18} height={18} />
        </div>
        <div
          className="absolute z-10 flex items-center justify-center w-8 h-8 -mt-4 transition-all duration-200 border rounded-full shadow-xl cursor-pointer next top-2/4
          -right-4  md:-right-5 md:-mt-5 md:w-9 md:h-9 
            bg-light border-border-200 border-opacity-70 text-heading hover:bg-accent hover:text-light hover:border-accent"
          role="button"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon width={18} height={18} />
        </div>
      </div>
      {/* End of product main slider */}
      <div className="relative mx-auto mt-5 max-w-md lg:mt-8 lg:pb-2">
        <Swiper
          id="productGalleryThumbs"
          onSwiper={setThumbsSwiper}
          spaceBetween={20}
          watchSlidesProgress={true}
          freeMode={true}
          observer={true}
          observeParents={true}
          modules={[FreeMode, Navigation, Thumbs]}
          breakpoints={galleryCarouselBreakpoints}
        >
          {gallery?.map((item) => (
            <SwiperSlide
              //   key={`product-thumb-gallery-${item.id}`}
              className="flex cursor-pointer items-center justify-center overflow-hidden rounded border border-border-200 border-opacity-75 hover:opacity-75"
            >
              <img src={item.url} width={80} height={80} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  
    </div>
  );
}
export default ProductDetailsSlider;