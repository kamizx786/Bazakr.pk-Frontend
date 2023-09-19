import { differenceInDays } from "date-fns";
import React from "react";
import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";

const ShopCard = ({ shop }) => {
  //IS NEW SHOP BANNER FOR 7 DAYS SINCE CREATED
  const isShopNew = (createdAt) => {
    const currentDate = new Date();
    const shopCreatedAt = new Date(createdAt);
    const daysDifference = differenceInDays(currentDate, shopCreatedAt);

    return daysDifference < 7;
  };
  const isNewShop = isShopNew(shop?.createdAt);
  return (
    <>
      <Link to={`/shop/${shop.slug}`}>
        <div className="relative flex flex-col hover:scale-95 transition-transform  gap-3 cursor-pointer items-start rounded border border-gray-200 p-3">
          <div className="relative flex-col flex h-[120px] w-full shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-300 border ">
            {isNewShop ? (
              <span className="absolute font-sans top-2 rounded bg-[#248F59] px-2 py-1 text-xs text-light left-2">
                New on Bazar.pk
              </span>
            ) : (
              ""
            )}
            <img
              alt={shop.Storename}
              src={shop?.cover_pic.url}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="float -mt-12 border-2 border-white z-10 ml-5 rounded-full h-16 w-16">
            <img
              alt={shop.Storename}
              src={shop?.main_pic.url}
              className="object-cover w-full h-full rounded-full"
            />
          </div>

          <div className="flex flex-col text-left">
            <span className="mb-2 text-xl hover:text-[#248f59] font-medium font-sans  ">
              {shop?.Storename}
            </span>
            <span className="flex font-sans text-sm    ">
              <BiMap className="h-5 w-5 shrink-0 mr-1 " color="green" />
              {shop.mapAddress.slice(0, 30)}....
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ShopCard;
