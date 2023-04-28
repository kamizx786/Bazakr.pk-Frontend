import React from 'react'
import {MinusIcon,PlusIcon} from "@heroicons/react/24/outline"

const Counter = () => {
  return (
    <div className='flex overflow-hidden flex-col    '>
      <button
        className="p-2 
            duration-200 hover:bg-accent-hover focus:outline-none
            px-3 py-3 sm:px-2 
            border border-gray-300  hover:border-accent "
            
      >
        <span className="sr-only">Minus</span>
        <MinusIcon className="h-3 w-3 stroke-2.5" />
      </button>
      <div
        className='flex flex-1 items-center justify-center px-3 text-sm font-semibold
         text-heading'
      >
        1
      </div>
      <button
        className="p-2 
        duration-200 hover:bg-accent-hover focus:outline-none
        px-3 py-3 sm:px-2
        border border-gray-300  hover:border-accent "
        
      >
        <span className="sr-only">Plus</span>
        <PlusIcon className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5" />
      </button>
    </div>
  )
}

export default Counter