import React, { useEffect, useState } from "react";
import { BsFilterSquare, BsShop } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ProductsGrid from "../../Components/products/ProductsGrid";
import ShopSidebar from "../../Components/shop/ShopSidebar";

const shopProfile = () => {
  const [Single, setSingle] = useState({});
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [ok, setOk] = useState(true);

  const { product, LocationShops } = useSelector((state) => ({ ...state }));

  const params = useParams();
  const navigate = useNavigate();

  const LoadShop = () => {
    const updated = LocationShops?.filter((p) => {
      return params.slug === p.slug;
    });
    setSingle(updated[0]);
  };

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  const Searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  const LoadProducts = () => {
    const updated = product?.filter((p) => {
      return Single?._id === p?.store?._id;
    });
    setProducts(updated);
  };

  useEffect(() => {
    if (product && product.length) {
      LoadProducts();
    }
  }, [Single, product]);

  useEffect(() => {
    if (LocationShops && LocationShops.length) {
      LoadShop();
    }
  }, [LocationShops, params]);

  useEffect(() => {
    if (!Single) {
      toast.error("Shop Doesn't Exist");
      const timeoutId = setTimeout(() => {
        navigate("/shops");
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
    if (LocationShops?.length < 1) {
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [Single, LocationShops]);

  const handlePriceFilter = (e) => {
    const value = e.target.value;
    let sortedProducts = [];
    if (value === "lowest") {
      sortedProducts = product
        ?.filter((p) => {
          return Single?._id === p?.store?._id;
        })
        .sort((a, b) => a.salePrice - b.salePrice);
      setProducts(sortedProducts);
    } else if (value === "highest") {
      sortedProducts = product
        ?.filter((p) => {
          return Single?._id === p?.store?._id;
        })
        .sort((a, b) => b.salePrice - a.salePrice);
      setProducts(sortedProducts);
    } else if (value === "select") {
      LoadProducts();
    }
  };

  return !Single || LocationShops?.length < 1 ? (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <FaSpinner className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
          <span className="mt-4 text-gray-500 font-sans text-lg font-semibold">
            {LocationShops?.length < 1
              ? "No shop and location found. Redirecting to Home page. Please add location"
              : "Loading..."}
          </span>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="mx-auto w-full bg-gray-100">
        {/* BACK TO SHOPS */}
        <div className="pt-4 px-5 mb-2 flex justify-between ">
          <Link to="/shops">
            <div className="flex flex-row gap-2 w-fit">
              <BsShop size={20} color="green" />
              <span className="text-[#248F59] font-sans">Back To Shops</span>
            </div>
          </Link>
        </div>
        {/* SHOP DETAILS ON SIDE BAR */}
        <div className=" flex flex-col gap-2 bg-gray-100 lg:flex-row  lg:items-start  lg:p-8">
          <ShopSidebar shop={Single} className="sticky" />
          {/* COVER IMAGE */}
          <div className="flex w-full flex-col pt-0 px-4 lg:p-0  ltr:lg:pl-8 rtl:lg:pr-8">
            <div className=" h-[20.25rem] w-full overflow-hidden rounded">
              <img src={Single?.cover_pic?.url} width={2340} height={870} />
            </div>
            {/* Filter Button */}
            <div className="flex gap-3 items-center mt-3">
              <p className="font-sans font-medium opacity-80">Filters: </p>
              <div className="bg-white p-2 rounded border grid w-fit">
                <button onClick={toggleVisibility}>
                  <BsFilterSquare
                    color="#248f59"
                    className="hover:scale-95 transition-transform"
                    size={25}
                  />
                </button>
              </div>
            </div>
            {/* FILTERS */}
            {isHidden ? null : (
              <div className="mt-3 p-3 md:p-6 flex gap-3 border rounded border-[#f2f2f2] flex-col sm:flex-row items-center justify-between bg-white ">
                {/*BY  PRICE  ==>(HIGHEST,LOWEST) */}
                <div className="flex px-2 py-2 flex-row gap-2 justify-center  items-center">
                  <label className="font-sans font-medium mr-2 opacity-80">
                    Filter by:
                  </label>

                  <select
                    type="text"
                    name="store"
                    id="priceFilter"
                    onChange={handlePriceFilter}
                    className="h-12 focus:border-none cursor-pointer w-fit text-md bg-white border-[#d2d2d2] rounded-lg pl-3 pr-8 py-2  font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    <option value="select">--Select--</option>
                    <option value="lowest">Lowest to Highest</option>
                    <option value="highest">Highest to Lowest</option>
                  </select>
                </div>

                {/* Search */}
                <div className="relative">
                  <input
                    onChange={handleSearchInputChange}
                    type="search"
                    placeholder="Search Product"
                    className=" sm:py-3 h-12 border text-[#248f59] border-[#d2d2d2] focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 w-full"
                  />
                </div>
              </div>
            )}
            {/* PRODUCTS */}
            <ProductsGrid
              products={products}
              keyword={keyword}
              Searched={Searched}
              ok={ok}
              setOk={setOk}
              className="py-2 grid
               grid-cols-[repeat(auto-fill,minmax(260px,1fr))] 
               md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default shopProfile;
