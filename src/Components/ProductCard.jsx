import React from 'react'
import { PlusOutlined } from '@ant-design/icons'
const ProductCard = ({product}) => {
  return (
    <article
    className='h-full transform overflow-hidden 
    rounded bg-white 
    transition-all duration-200 hover:-translate-y-0.5 hover:shadow-downfall-lg'
    // onClick={handleProductQuickView}
    role="button"
  >
    <div className="p-5 relative flex md:h-56 h-62 w-auto items-center justify-center">
      <span className="sr-only"></span>
      <img
        src={product.image}
        className="object-contain"
      />

      {/* {discount && ( */}
        <div className="absolute top-3 rounded bg-accent px-1.5 text-xs font-semibold leading-6 text-white bg-[#248F59] left-3  sm:px-2 md:top-[22px] md:px-2.5 md:left-4 ">
          {/* {discount} */}20%
        </div>
      {/* )} */}

      {/* <div className="absolute top-3 ltr:right-3 rtl:left-3 md:top-4 ltr:md:right-4 rtl:md:left-4">
        {product_type.toLowerCase() === 'variable' ? (
          <>
            {Number(quantity) > 0 && (
              <button
                onClick={handleProductQuickView}
                className="flex h-7 w-7 items-center justify-center rounded border border-border-200 bg-light text-sm text-heading transition-colors hover:border-accent hover:bg-accent hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-none md:h-9 md:w-9"
              >
                <PlusIcon className="h-5 w-5 stroke-2" />
              </button>
            )}
          </>
        ) : (
          <>
            {Number(quantity) > 0 && (
              <AddToCart variant="argon" data={product} />
            )}
          </>
        )}

        {Number(quantity) <= 0 && (
          <div className="rounded bg-red-500 px-2 py-1 text-xs text-light">
            {t('text-out-stock')}
          </div>
        )}
      </div> */}
      
      <div className="absolute top-3 right-3  md:top-4 md:right-4">
         
           
              <button
                // onClick={handleProductQuickView}
                className="flex h-7 w-7 items-center justify-center rounded border border-border-200 bg-light text-sm text-heading transition-colors hover:border-accent hover:bg-accent hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-none md:h-9 md:w-9"
              >
                <PlusOutlined className="h-5 w-5 stroke-2" />
              </button>
    
      </div>
    </div>
    {/* End of product image */}

    <header className="p-6 mt-5 md:p-6">
      {/* {product_type.toLowerCase() === 'variable' ? (
        <div className="mb-2">
          <span className="text-sm font-semibold text-heading md:text-base">
            {minPrice}
          </span>
          <span> - </span>
          <span className="text-sm font-semibold text-heading md:text-base">
            {maxPrice}
          </span>
        </div>
      ) : (
        <div className="mb-2 flex items-center">
          <span className="text-sm font-semibold text-heading md:text-base">
            {price}
          </span>
          {basePrice && (
            <del className="text-xs text-body ltr:ml-2 rtl:mr-2 md:text-sm">
              {basePrice}
            </del>
          )}
        </div>
      )} */}
      {/* End of product price */}
      <div className="mb-2">
          <span className="text-sm font-semibold text-heading md:text-base">
            90$
          </span>
          <span> - </span>
          <span className="text-sm font-semibold text-heading md:text-base">
           120$
          </span>
        </div>
      <h3 className="text-sm text-gray-500 md:text-sm">{product.name}</h3>
      
      {/* End of product title */}
    </header>
  </article>
  )
}

export default ProductCard