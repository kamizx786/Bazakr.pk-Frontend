import React from "react";
import Shops from "../../Components/Shops";
import ShopCard from "../../Components/ShopCard";
import ProductLoader from "../../Components/product-loader";
import jsxRangeMap from "../../Components/range-map";
const Shop = () => {
  const limit = 10;
  return (
    <>    <div className="min-h-screen bg-white relative -z-50 ">
      <div className="flex flex-col w-full max-w-6xl p-8 mx-auto pt-14">
        <h3 className="mb-8 text-2xl font-bold text-heading">All Shops</h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {!Shops.length
            ? jsxRangeMap(limit, (i) => (
                <ProductLoader key={i} uniqueKey={`product-${i}`} />
              ))
            : Shops.map((shop) => <ShopCard shop={shop} key={shop.id} />)}
        </div>
        <div className="flex items-center justify-center mt-8 lg:mt-12">
          <button className="bg-[#248F59] text-white py-3 px-3 rounded">
            LoadMore
          </button>
        </div>
      </div>
    </div>
    </>

  );
};
export default Shop;
