import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShopSidebar from "../../Components/ShopSidebar";
import ProductsGrid from "../../Components/ProductsGrid";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const shopProfile = () => {
  const [Single, setSingle] = useState({});
  const [products, setProducts] = useState([]);
  const { allShops,product} = useSelector((state) => ({ ...state }));
  const params = useParams();
  const navigate = useNavigate();
  const LoadShop = () => {
    const updated = allShops?.filter((p) => {
      return params.slug === p.slug;
    });
    setSingle(updated[0]);
  };
  const LoadProducts = () => {
    const updated =product?.filter((p) => {
      return Single?._id === p?.store?._id;
    });
    setProducts(updated);
  };
  useEffect(() => {
    if (product && product.length) {
      LoadProducts();
    }
  }, [Single,product]);
  useEffect(() => {
    if (allShops && allShops.length) {
      LoadShop();
    }
  }, [allShops, params]);
  useEffect(() => {
    if (!Single) {
      const timeoutId = setTimeout(() => {
        navigate("/shops");
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [Single]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return !Single || allShops===null? (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
        <span className="mt-4 text-gray-500 text-lg font-semibold">
          Loading...
        </span>
      </div>
    </div>
  ): (
    <div className=" flex flex-col bg-gray-100 lg:flex-row lg:items-start lg:p-8">
      <ShopSidebar shop={Single} className="sticky top-24 lg:top-28" />

      <div className="flex w-full flex-col p-4 lg:p-0 ltr:lg:pl-8 rtl:lg:pr-8">
        <div className=" h-full w-full overflow-hidden rounded">
          <img
            src={Single?.cover_pic?.url}
            width={2340}
            height={870}
            className="h-full w-full"
          />
        </div>
        {/* {shop && ( */}
        <ProductsGrid
        products={products}
        className="py-8 grid
        grid-cols-[repeat(auto-fill,minmax(260px,1fr))] 
        md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3" />
        {/* )} */}
      </div>
    </div>
  );
};
export default shopProfile;
