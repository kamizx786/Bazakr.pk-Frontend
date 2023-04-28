import React from 'react'
import {XCircleIcon} from "@heroicons/react/24/outline"
import Counter from './Counter'
const CartItem = ({item}) => {
  return (
    <div
    className="flex items-center
     border-b border-solid border-border-200
      border-opacity-75 py-4 text-sm sm:px-6"
  >
    <div className="flex-shrink-0">
      <Counter
        // value={item.quantity}
        // onDecrement={handleRemoveClick}
        // onIncrement={handleIncrement}
        // disabled={outOfStock}
      />
    </div>

    <div className="relative mx-4 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-gray-100 sm:h-16 sm:w-16">
      <img
        src={item?.image}
        alt={item.name}
        className="object-contain"
      />
    </div>
    <div>
      {/* <h3 className="font-bold text-heading">{item.name}</h3> */}
      <h3 className="font-bold text-heading">{item.name} </h3>
      <p className="my-2.5 font-semibold text-accent">{item.price}</p>
      <span className="text-xs text-body">
        {item.quantity} X {item.price}
      </span>
    </div>
    <span className="font-bold text-heading ltr:ml-auto rtl:mr-auto">
    $6
    </span>
    <button
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted transition-all duration-200 hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600 focus:outline-none ltr:ml-3 ltr:-mr-2 rtl:mr-3 rtl:-ml-2"
    
    >
      <span className="sr-only">Close</span>
      <XCircleIcon className="h-3 w-3" />
    </button>
  </div>
  )
}

export default CartItem