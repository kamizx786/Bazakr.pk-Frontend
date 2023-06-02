import React from 'react'
import { Link } from 'react-router-dom'
import {MapPinIcon} from "@heroicons/react/24/outline"
import { differenceInDays } from 'date-fns';

const ShopCard = ({shop}) => {
  const isShopNew = (createdAt) => {
    const currentDate = new Date();
    const shopCreatedAt = new Date(createdAt);
    const daysDifference = differenceInDays(currentDate, shopCreatedAt);
  
    return daysDifference <7;
  };
  const isNewShop = isShopNew(shop?.createdAt);
  return (
    
    <Link to={`/shop/${shop.slug}`} >
    <div className="relative flex cursor-pointer items-center rounded border border-gray-200 p-5">
      {isNewShop?
        <span className="absolute top-2 rounded bg-[#248F59] px-2 py-1 text-xs text-light left-2">
         New on Bazar.PK
        </span>
        :""
    }
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-300">
        <img
          alt={shop.Storename}
          src={shop?.main_pic.url}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col ml-4 mr-4">
        <span className="mb-2 text-lg font-semibold text-heading">
          {shop?.Storename}
        </span>
        <span className="flex text-sm text-body">
          <MapPinIcon className="h-5 w-5 shrink-0 text-muted mr-1 ml-1" />
          {shop.mapAddress.slice(0,30)}....
        </span>
      </div>
    </div>
  </Link>
  )
}

export default ShopCard