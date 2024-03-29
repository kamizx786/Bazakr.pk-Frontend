import React, { useEffect, useState } from "react";
import { AiTwotoneShop } from "react-icons/ai";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import ProductDetailsSlider from "../../Components/products/ProductDetailsSlider";
import { handleCart } from "./function";

const ProductDetails = () => {
  
  const [averageRating, setAverageRating] = useState(0);
  const [Single, setSingle] = useState({});
  const { product, LocationShops } = useSelector((state) => ({ ...state }));
  
  // Calculate the average rating
  useEffect(() => {
    const ratings = Single?.rating || [];
    const sum = ratings.reduce((total, r) => total + r?.star, 0);
    const average = sum / ratings.length;
    setAverageRating(average);
  }, [Single]);
  
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const LoadProuct = () => {
    const updated = product?.filter((p) => {
      return params.slug === p.slug;
    });
  
    const filter = LocationShops?.filter((s) => {
      return s._id === updated[0]?.store?._id;
    });
    
    if (filter?.length > 0) {
      setSingle(updated[0]);
    } else {
      const timeoutId = setTimeout(() => {
        navigate("/shops");
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  };
  
  useEffect(() => {
    if (product?.length && LocationShops?.length) {
      LoadProuct();
    }
  }, [product, params]);
  
  useEffect(() => {
    if (!Single || !LocationShops?.length) {
      const timeoutId = setTimeout(() => {
        navigate("/shops");
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [Single]);
  
  return Object.keys(Single).length === 0 ||
    product === null ||
    LocationShops?.length < 1 ? (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <FaSpinner className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
          <span className="mt-4 font-sans text-gray-500 text-lg font-semibold">
            Loading...
          </span>
        </div>
      </div>
    </>
  ) : (
    <article className="rounded-lg bg-white">
      <div className="flex flex-col border-b border-opacity-70 md:flex-row">
        <div className="p-6 pt-10 md:w-1/2 lg:p-14 xl:p-16">
          <div className=" flex items-center justify-between lg:mb-10">
            <Link to={`/shop/${Single?.store?.slug}`}>
              <div className="flex flex-row gap-2 w-fit">
                <AiTwotoneShop size={20} color="green" />
                <span className="text-[#248F59] font-sans">Back To Shop</span>
              </div>
            </Link>
          </div>
          {/* IAMGES SLIDER */}
          <div className="productGallery h-full">
            <ProductDetailsSlider gallery={Single?.gallery_pics} />
          </div>
        </div>
        {/* NAME AND DESCRIPTION */}
        <div className="flex flex-col items-start p-5 pt-10 md:w-1/2 lg:p-14 xl:p-16">
          <div className="w-full">
            <div className="flex w-full items-start justify-between space-x-8 space-x-reverse">
              <h1 className="text-lg font-normal font-serif tracking-tight   md:text-2xl xl:text-3xl">
                {Single?.name}
              </h1>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="block text-sm font-normal    ">
                {Single?.unit}
              </span>
            </div>

            {Single.discription && (
              <div className="mt-3 text-md leading-7 md:mt-4">
                {Single?.discription}
              </div>
            )}

            <span className="my-5 flex items-center md:my-10">
              <ins className="text-2xl font-normal font-serif text-[#248F59] no-underline md:text-3xl">
                {Single?.salePrice}/
                <span className="text-lg font-semibold">Rs</span>
              </ins>
            </span>
            {/* ADD TO CART */}
            <div className="mt-6 flex flex-col items-center md:mt-6 lg:flex-row">
              {Single.quantity > 0 ? (
                <>
                  <div className="mb-3 mr-2 w-full lg:mb-0 lg:max-w-[400px]">
                    <button
                      onClick={() => handleCart(Single, dispatch)}
                      className="bg-[#248F59] w-full text-[#f2f2f2] whitespace-nowrap hover:text-white font-sans  py-3 px-3 rounded transition-transform hover:scale-95 uppercase font-semibold "
                    >
                      Add to Cart
                    </button>
                  </div>

                  <span className="whitespace-nowrap text-base font-sans lg:ml-7 lg:mr-7">
                    {Single.quantity} Pieces available
                  </span>
                </>
              ) : (
                <>
                  <div className="whitespace-nowrap text-base text-red-500 lg:ml-7 lg:mr-7">
                    Out of Stock
                  </div>
                </>
              )}
            </div>
          </div>
          {/* CATEGORY AND SELLER DETAILS */}
          {Single?.category && (
            <div className="mt-2 flex items-center">
              <span className="py-1 text-sm font-semibold capitalize   mr-6 ml-6">
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
            <div className="mt-2 flex items-center">
              <span className="py-1 text-sm font-semibold capitalize   mr-6 ml-6">
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
      {/* REVIEW AND RATING */}
      <div className="flex flex-col border-y-2 border-[#f2f2f2] border-opacity-70 px-5 py-4 lg:px-16 lg:py-14">
        <h1 className="text-lg mb-4 font-semibold font-sans tracking-tight   md:mb-6">
          Rating and Review of <span> {Single?.name}</span>
        </h1>
        <div className="flex w-full border-b-4 border-opacity-70 border-[#f2f2f2] mb-2  flex-row">
          <div className="text-xl flex-row flex mb-2 items-center gap-2  p-2 rounded-2xl sm:w-auto sm:pb-0">
            {averageRating ? (
              <>
                <StarRatings
                  rating={averageRating}
                  starHoverColor="#248F59"
                  starRatedColor="#248F59"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="5px"
                />
                ({Single?.rating?.length})
              </>
            ) : (
              <>
                <StarRatings
                  rating={0}
                  starHoverColor="#248F59"
                  starRatedColor="#248F59"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="5px"
                />
                (0)
              </>
            )}
          </div>
        </div>
        <div>
          <h1 className="text-lg mb-4 font-semibold font-sans tracking-tight   md:mb-6">
            Product Review(s)
          </h1>
          <div className="flex  flex-col border-b-4 border-opacity-70 border-[#f2f2f2] mb-2">
            {Single?.rating?.map((item, index) => (
              <>
                <div className="text-md font-bold flex flex-row font-sans">
                  <span>{item.postedBy?.name}</span>{" "}
                  <FaCheckCircle
                    size={15}
                    className="flex text-[#248f59] items-center align-middle ml-2"
                  />
                </div>
                <div className="text-sm flex-row flex mb-2 items-center gap-2 p-1 rounded-2xl sm:w-auto sm:pb-0">
                  <StarRatings
                    rating={item.star}
                    starHoverColor="#248F59"
                    starRatedColor="#248F59"
                    numberOfStars={5}
                    name="rating"
                    starDimension="20px"
                    starSpacing="5px"
                  />
                </div>

                <div className="text-sm font-sans">{item.review}</div>
              </>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
export default ProductDetails;
