import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../../Components/Product";
import { Link } from "react-router-dom";
import ProductDetailsSlider from "../../Components/ProductDetailsSlider";
const ProductDetails = () => {
  const [Single, setSingle] = useState({});
  const params = useParams();
  const LoadProuct = () => {
    const updated = Product.filter((p) => {
      return params.slug === p.slug;
    });
    setSingle(updated[0]);
    console.log(params);
  };
  useEffect(() => {
    if (Product && Product.length) {
      LoadProuct();
    }
  }, [Product, params]);
  return (
    <article className="rounded-lg bg-white">
    <div className="flex flex-col border-b border-border-200 border-opacity-70 md:flex-row">
      <div className="p-6 pt-10 md:w-1/2 lg:p-14 xl:p-16">
        <div className="mb-8 flex items-center justify-between lg:mb-10">
          {/* {backBtn && <BackButton />} */}
          {Single.discount && (
            <div className="rounded-full bg-yellow-500 px-3 text-xs font-semibold leading-6 text-light ml-auto ">
              {Single.discount}
            </div>
          )}
        </div>

        <div className="product-gallery h-full">
         <ProductDetailsSlider gallery={Single.images} />
        </div>
      </div>

      <div className="flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16">
        <div className="w-full">
          <div className="flex w-full items-start justify-between space-x-8 space-x-reverse">
            <h1
              className='text-lg font-semibold tracking-tight text-heading md:text-xl xl:text-2xl'
                
              
            //   {...(isModal && {
            //     onClick: () => navigate(Routes.product(slug)),
            //   })}
            >
              {Single.name}
            </h1>

            <span>
              {/* <FavoriteButton
                productId={id}
                className={classNames({ 'mr-1': isModal })}
              /> */}
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between">
          
              <span className="block text-sm font-normal text-body">
                1pcs
              </span>
         

            {/* {isModal && (
              <div className="inline-flex shrink-0 items-center rounded border border-accent bg-accent px-3 py-1 text-sm text-white">
                {ratings}
                <StarIcon className="h-2.5 w-2.5 ltr:ml-1 rtl:mr-1" />
              </div>
            )} */}
          </div>

          {Single.description && (
            <div className="mt-3 text-md leading-7  text-body md:mt-4">
             {Single.description}
            </div>
          )}

<span className="my-5 flex items-center md:my-10">
              <ins className="text-2xl font-semibold text-[#248F59] no-underline md:text-3xl">
                {Single.price}
              </ins>
              {/* {basePrice && (
                <del className="text-sm font-normal text-muted ltr:ml-2 rtl:mr-2 md:text-base">
                  {basePrice}
                </del>
              )} */}
            </span>
          {/* {hasVariations ? (
            <>
              <div className="my-5 flex items-center md:my-10">
                <VariationPrice
                  selectedVariation={selectedVariation}
                  minPrice={product.min_price}
                  maxPrice={product.max_price}
                />
              </div>
              <div>
                <VariationGroups variations={variations} />
              </div>
            </>
          ) : (
            <span className="my-5 flex items-center md:my-10">
              <ins className="text-2xl font-semibold text-accent no-underline md:text-3xl">
                {price}
              </ins>
              {basePrice && (
                <del className="text-sm font-normal text-muted ltr:ml-2 rtl:mr-2 md:text-base">
                  {basePrice}
                </del>
              )}
            </span>
          )} */}

          <div className="mt-6 flex flex-col items-center md:mt-6 lg:flex-row">
            <div className="mb-3 mr-2 w-full lg:mb-0 lg:max-w-[400px]">
              <button className="bg-[#248F59] text-white w-full p-3 rounded mr-2"
              >Add to Cart</button>
            </div>
            {Single.stock > 0 ? (
                  <span className="whitespace-nowrap text-base text-body lg:ml-7 lg:mr-7">
                    {Single.stock} Pieces available
                  </span>
                ) : (
                  <div className="whitespace-nowrap text-base text-red-500 lg:ml-7 lg:mr-7">
                   Out of Stock
                  </div>
                )}
{/* 
            {!hasVariations && (
              <>
                {Number(quantity) > 0 ? (
                  <span className="whitespace-nowrap text-base text-body ltr:lg:ml-7 rtl:lg:mr-7">
                    {quantity} {t('text-pieces-available')}
                  </span>
                ) : (
                  <div className="whitespace-nowrap text-base text-red-500 ltr:lg:ml-7 rtl:lg:mr-7">
                    {t('text-out-stock')}
                  </div>
                )}
              </>
            )} */}
            {/* {!isEmpty(selectedVariation) && (
              <span className="whitespace-nowrap text-base text-body ltr:lg:ml-7 rtl:lg:mr-7">
                {selectedVariation?.is_disable ||
                selectedVariation.quantity === 0
                  ? t('text-out-stock')
                  : `${selectedVariation.quantity} ${t(
                      'text-pieces-available'
                    )}`}
              </span>
            )} */}
          </div>
        </div>

        {/* {!!categories?.length && (
          <CategoryBadges
            categories={categories}
            basePath={`/${type?.slug}`}
            onClose={closeModal}
          />
        )} */}

{Single.category && (
          <div className="mt-2 flex items-center">
            <span className="py-1 text-sm font-semibold capitalize text-heading mr-6 ml-6">
            category
            </span>
           <Link to="/shop/FurnitureShop">
            <button
             
              className="text-sm tracking-wider text-accent underline transition hover:text-accent-hover hover:no-underline"
            >
              {Single.category}
            </button>
            </Link>
          </div>
        )}
        {Single.seller && (
          <div className="mt-2 flex items-center">
            <span className="py-1 text-sm font-semibold capitalize text-heading mr-6 ml-6">
             Sellers
            </span>
           <Link to="/shop/FurnitureShop">
            <button
             
              className="text-sm tracking-wider text-accent underline transition hover:text-accent-hover hover:no-underline"
            >
              {Single.seller}
            </button>
            </Link>
          </div>
        )}
      </div>
    </div>

    <div
      name="details"
      className="border-b border-border-200 border-opacity-70 px-5 py-4 lg:px-16 lg:py-14"
    >
      <h2 className="mb-4 text-lg font-semibold tracking-tight text-heading md:mb-6">
        Details
      </h2>
      <p className="text-sm text-body">{Single.description}</p>
    </div>
  </article>
  );
};
export default ProductDetails;
