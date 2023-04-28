import React from 'react'
import { Link } from 'react-router-dom'
import {MapPinIcon} from "@heroicons/react/24/outline"

const ShopCard = ({shop}) => {
  return (
    <Link >
    <div className="relative flex cursor-pointer items-center rounded border border-gray-200 p-5">
      {/* {isNew && (
        <span className="absolute top-2 rounded bg-blue-500 px-2 py-1 text-xs text-light ltr:right-2 rtl:left-2">
          {t('common:text-new')}
        </span>
      )} */}
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-300">
        <img
          alt={shop.name}
          src={shop.image}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col ml-4 mr-4">
        <span className="mb-2 text-lg font-semibold text-heading">
          {shop?.name}
        </span>
        <span className="flex text-sm text-body">
          <MapPinIcon className="h-5 w-5 shrink-0 text-muted mr-1 ml-1" />
          {shop.address}
        </span>
      </div>
    </div>
  </Link>
  )
}

export default ShopCard