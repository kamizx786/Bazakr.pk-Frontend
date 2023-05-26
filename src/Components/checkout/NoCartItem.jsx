import React from 'react'
import {ShoppingBagIcon} from "@heroicons/react/24/outline"
import { Link } from 'react-router-dom'

const NoCartItem = () => {
  return (
    <div className="w-full">
    <div className="flex flex-col border-b border-dashed pb-7 border-border-400">
        <div className="flex flex-col items-center justify-center h-full mb-4">
          <ShoppingBagIcon color='#248F59' width={140} height={176} />
          <h4 className="mt-6 font-serif  font-normal text-3xl">
            No Products
          </h4>
        </div>
    </div>
    <div className="mt-4 space-y-2">
      {/* <ItemInfoRow title={t('text-sub-total')} value={subtotal} />
      <ItemInfoRow
        title={t('text-tax')}
        value={t('text-calculated-checkout')}
      />
      <ItemInfoRow
        title={t('text-estimated-shipping')}
        value={t('text-calculated-checkout')}
      /> */}
    </div>
    <Link to="/shops">
    <button className="w-full text-white mt-8 font-normal h-[50px] bg-[#248F59] transition-colors ">
    Go to Shop
    </button>
    </Link>
  </div>
  )
}

export default NoCartItem