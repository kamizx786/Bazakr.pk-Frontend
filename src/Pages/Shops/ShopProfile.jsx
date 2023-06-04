import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsShop, BsFilterSquare } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductsGrid from "../../Components/ProductsGrid";
import ShopSidebar from "../../Components/ShopSidebar";

const shopProfile = () => {
  const [Single, setSingle] = useState({});
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const { allShops, product } = useSelector((state) => ({ ...state }));
  const params = useParams();
  const navigate = useNavigate();
  const LoadShop = () => {
    const updated = allShops?.filter((p) => {
      return params.slug === p.slug;
    });
    setSingle(updated[0]);
  };
  const [isHidden, setIsHidden] = useState(true); // State to control visibility

  // Function to toggle visibility
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

    const handlePriceFilter = (e) => {
      const value = e.target.value;
      let sortedProducts = [];

      if (value === "lowest") {
        sortedProducts = product?.filter((p) => {
          return Single?._id === p?.store?._id;
        }).sort((a, b) => a.salePrice - b.salePrice);
        setProducts(sortedProducts);
      } else if (value === "highest") {
        sortedProducts = product?.filter((p) => {
          return Single?._id === p?.store?._id;
        }).sort((a, b) => b.salePrice - a.salePrice);
        setProducts(sortedProducts);
      }else if(value ==="select"){
        LoadProducts()
      }
    };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return !Single || allShops === null ? (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <AiOutlineLoading3Quarters className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
        <span className="mt-4 text-gray-500 font-sans text-lg font-semibold">
          Loading...
        </span>
      </div>
    </div>
  ) : (
    <>
      <div className="mx-auto w-full bg-gray-100">
        <div className="pt-4 px-5 mb-2 flex justify-between ">
          <Link to="/shops">
            <div className="flex flex-row gap-2 w-fit">
              <BsShop size={20} color="green" />
              <span className="text-[#248F59] font-sans">Back To Shops</span>
            </div>
          </Link>
        </div>
        <div className=" flex flex-col gap-2 bg-gray-100 lg:flex-row  lg:items-start  lg:p-8">
          <ShopSidebar shop={Single} className="sticky" />

          <div className="flex w-full flex-col pt-0 px-4 lg:p-0  ltr:lg:pl-8 rtl:lg:pr-8">
            <div className=" h-[20.25rem] w-full overflow-hidden rounded">
              <img src={Single?.cover_pic?.url} width={2340} height={870} />
            </div>
            {/* Filter By Bar */}
            <div className="flex gap-3 items-center mt-3">
              <p className="font-sans font-medium opacity-80">Filters: </p>
              <div className="bg-white p-2 rounded border grid w-fit">
                <button onClick={toggleVisibility}>
                  <BsFilterSquare color="green" size={25} />
                </button>
              </div>
            </div>

            {isHidden ? null : (
              <div className="mt-3 p-3 md:p-6 flex gap-3 border rounded border-[#f2f2f2] flex-col sm:flex-row items-center justify-between bg-white ">
                {/* Highest to Lowest */}
                <div className="flex px-2 py-2 flex-row gap-2 justify-center  items-center">
                  <label className="font-sans font-medium mr-2 opacity-80">
                    Filter by:
                  </label>

                  <select
                    type="text"
                    name="store"
                    id="priceFilter"
                    onChange={handlePriceFilter}
                    className="h-12 cursor-pointer w-fit text-md bg-white border-gray-300 rounded-lg pl-3 pr-8 py-2  font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    <option value="select">--Select--</option>
                    <option className="cursor-pointer" value="lowest">Lowest to Highest</option>
                    <option value="highest">Highest to Lowest</option>
                  </select>
                </div>

                {/* Search */}
                <div className="relative">
                  <input
                    onChange={handleSearchInputChange}
                    type="search"
                    placeholder="Type queries"
                    className=" sm:py-3 h-12 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 w-full"
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 px-3 sm:px-4 whitespace-pre-wrap  my-2 text-gray-400 outline-none focus:outline-none active:outline-none"
                  >
                    <BiSearch size={25} className="inline-block align-middle" />
                  </button>
                </div>
              </div>
            )}
            {/* {shop && ( */}
            <ProductsGrid
              products={products}
              keyword={keyword}
              Searched={Searched}
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
