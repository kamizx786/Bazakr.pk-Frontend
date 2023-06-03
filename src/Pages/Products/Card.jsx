import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductDetailsSlider from "../../Components/ProductDetailsSlider";
import { handleCart } from "./function";
const Card = ({ ModalProduct, setOpen, singleOrder }) => {
  const [Single] = useState(ModalProduct);

  const dispatch = useDispatch();
  return (
    <article className="rounded-lg bg-white">
      <div className="flex flex-col border-opacity-70 md:flex-row">
        <div className="p-6 pt-10 md:w-1/2 lg:p-14 xl:p-16">
          <div className="product-gallery h-full">
            <ProductDetailsSlider gallery={Single?.gallery_pics} />
          </div>
        </div>

        <div className="flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16">
          <div className="w-full">
            <div className="flex w-full items-start justify-between space-x-8 space-x-reverse">
              <h1 className="text-lg font-normal font-serif  text-heading md:text-xl xl:text-2xl">
                {Single?.name}
              </h1>
            </div>
            <div className="mt-2 flex font-sans items-center justify-between">
              <span className="block text-sm font-normal text-body">
                {Single?.unit}
              </span>

              {/* {isModal && (
                  <div className="inline-flex shrink-0 items-center rounded border border-accent bg-accent px-3 py-1 text-sm text-white">
                    {ratings}
                    <StarIcon className="h-2.5 w-2.5 ltr:ml-1 rtl:mr-1" />
                  </div>
                )} */}
            </div>

            {Single.discription && (
              <div className="mt-3 text-md leading-7 font-sans  text-body md:mt-4">
                {Single?.discription}
              </div>
            )}

            <span className="my-5 flex font-serif items-center md:my-10">
              <ins className="text-2xl font-normal text-[#248F59] no-underline md:text-3xl">
                {Single?.salePrice}/
                <span className="text-lg font-semibold">Rs</span>
              </ins>
            </span>

            <div className="mt-6 flex flex-col font-sans items-center md:mt-6 lg:flex-row">
              {Single.quantity > 0 ? (
                <>
                  <div className="mb-3 mr-2 gap-2 flex items-center flex-row w-full  lg:max-w-[400px]">
                    <button
                      className="bg-[#248F59] text-[#f2f2f2] whitespace-nowrap hover:text-white font-sans  py-3 px-3 rounded transition-transform hover:scale-95 uppercase font-semibold "
                      onClick={() => handleCart(Single, dispatch, setOpen)}
                    >
                      Add to Cart
                    </button>

                    <span className="whitespace-nowrap font-sans text-base text-body ">
                      {Single.quantity} Pieces available
                    </span>
                  </div>
                </>
              ) : (
                <div className="whitespace-nowrap text-base text-red-500 lg:ml-7 lg:mr-7">
                  Out of Stock
                </div>
              )}
            </div>
          </div>

          {Single?.category && (
            <div className="mt-2 flex font-sans items-center">
              <span className="py-1 text-sm font-semibold capitalize text-heading mr-6 ml-6">
                category
              </span>
              <Link>
                <button className="text-sm tracking-wider text-accent underline transition hover:text-accent-hover hover:no-underline">
                  {Single?.category?.name}
                </button>
              </Link>
            </div>
          )}
          {Single?.store && (
            <div className="mt-2 flex font-sans items-center">
              <span className="py-1 text-sm font-semibold capitalize text-heading mr-6 ml-6">
                Seller
              </span>
              <Link to={`/shop/${Single?.store?.slug}`}>
                <button className="text-sm tracking-wider text-accent underline transition hover:text-accent-hover hover:no-underline">
                  {Single?.store?.Storename}
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
