import React, { useState, useEffect } from "react";
import Shops from "../../Components/Shops";
import { useParams } from "react-router-dom";
import ShopSidebar from "../../Components/ShopSidebar";
import ProductsGrid from "../../Components/ProductsGrid";
const shopProfile = () => {
  const [Single, setSingle] = useState({});
  const params = useParams();
  const LoadShop = () => {
    const updated = Shops.filter((p) => {
      return params.name === p.name;
    });
    setSingle(updated[0]);
    console.log(params);
  };
  useEffect(() => {
    if (Shops && Shops.length) {
      LoadShop();
    }
  }, [Shops, params]);
  return (
    <div className=" flex flex-col bg-gray-100 lg:flex-row lg:items-start lg:p-8">
      <ShopSidebar shop={Single} className="sticky top-24 lg:top-28" />

      <div className="flex w-full flex-col p-4 lg:p-0 ltr:lg:pl-8 rtl:lg:pr-8">
        <div className=" h-full w-full overflow-hidden rounded">
          <img
            src={Single && Single.coverImage}
            width={2340}
            height={870}
            className="h-full w-full"
          />
        </div>
        {/* {shop && ( */}
        <ProductsGrid className="py-8 grid
        grid-cols-[repeat(auto-fill,minmax(260px,1fr))] 
        md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3" />
        {/* )} */}
      </div>
    </div>
  );
};
export default shopProfile;
