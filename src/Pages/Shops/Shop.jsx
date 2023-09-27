import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductLoader from "../../Components/products/product-loader";
import jsxRangeMap from "../../Components/range-map";
import ShopCard from "../../Components/shop/ShopCard";
import { findStoresNearby } from "./functions";

const Shop = () => {
  const [shops, setShops] = useState([]);
  const [ok, setOk] = useState(true);
  const [categories, setCategories] = useState([]);

  const { allShops, userLocation, search, category } = useSelector((state) => ({
    ...state,
  }));

  const limit = 10;
  const dispatch = useDispatch();

  useEffect(() => {
    if (category) {
      setCategories(category);
    }
  }, [category]);

  const Searched = (text) => (c) =>
    c.Storename.toLowerCase().includes(text.toLowerCase());

  const { text } = search;
  const filteredShops = shops?.filter(Searched(text));

 
  useEffect(() => {
    // Inside this effect, call the async function and dispatch the result
    async function fetchData() {
      try {
        const data = await findStoresNearby(
          userLocation?.location?.lat,
          userLocation?.location?.lng
        );
        setShops(data.stores);
        dispatch({
          type: "Location_Shops",
          payload: data.stores,
        });
        localStorage.setItem("shops", JSON.stringify(data.stores));

        if (data.stores.length < 1) {
          setTimeout(() => {
            setOk(false);
          }, 4000);
        }
        setLoading(false); // Set loading to false after the data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false in case of an error
        // Handle errors as needed
      }
    }

    fetchData();
  }, [userLocation, dispatch]);

  const handleCategoryFilter = (e) => {
    if (e.target.value === "select") {
      const nearbyShops = findStoresNearby(
        userLocation?.location?.lat,
        userLocation?.location?.lng
      );
      setShops(nearbyShops);
    } else {
      const nearbyShops = findStoresNearby(
        userLocation?.location?.lat,
        userLocation?.location?.lng
      );
      const filter = nearbyShops?.filter((s) => {
        return s.category._id === e.target.value;
      });
      filter && setShops(filter);
      if (filter?.length < 1) {
        setTimeout(() => {
          setOk(false);
        }, 5000);
      }
    }
  };

  useEffect(() => {
    const nearbyShops = findStoresNearby(
      userLocation?.location?.lat,
      userLocation?.location?.lng
    );
    nearbyShops && setShops(nearbyShops);
    nearbyShops &&
      dispatch({
        type: "Location_Shops",
        payload: nearbyShops,
      });
    nearbyShops && localStorage.setItem("shops", JSON.stringify(nearbyShops));
    if (nearbyShops?.length < 1) {
      setTimeout(() => {
        setOk(false);
      }, 4000);
    }
  }, [allShops]);

  return (
    <>
      <div className="min-h-screen bg-white relative">
        <div className="flex flex-col w-full max-w-6xl p-8 mx-auto pt-14">
          <div className="flex w-full mb-2 flex-col md:flex-row items-center justify-between">
            <div className="w-fit p-2 text-3xl font-serif whitespace-nowrap text-[#248f59] font-normal">
              <h3>All Shops</h3>
            </div>
            {/* Choose Filter Category*/}
            <div className="flex pr-2 py-2 mb-6 flex-row whitespace-nowrap gap-2 justify-start items-center">
              <label className="font-sans md:font-medium mr-2 opacity-80">
                Filter by:
              </label>

              <select
                type="text"
                name="store"
                id="priceFilter"
                onChange={handleCategoryFilter}
                className="h-12 focus:border-none cursor-pointer w-fit text-md bg-white border-[#d2d2d2] rounded-lg pl-3 pr-8 py-2  font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="select">--Choose Category--</option>
                {categories?.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {shops?.length === 0 ? (
            ""
          ) : (
            <>
              {/* NO OF SHOPS IN THAT LOCATION */}
              <h3 className="mb-8 text-lg opacity-80 font-sans items-center font-medium flex justify-start   ">
                <span className="text-3xl align-middle items-center justify-center flex font-serif text-[#248f59] mr-2">
                  {shops?.length}
                </span>
                shops found in {userLocation.mapAddress}
              </h3>
            </>
          )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shops?.length === 0 && ok ? (
              jsxRangeMap(limit, (i) => (
                <ProductLoader key={i} uniqueKey={`product-${i}`} />
              ))
            ) : filteredShops.length === 0 ? (
              <h3 className="mb-8 text-xl flex justify-center text-[#00000080] font-medium font-sans  ">
                No Shops Found <span className="text-black pl-2">🙂</span>
              </h3>
            ) : (
              filteredShops.map((shop) => (
                <ShopCard shop={shop} key={shop.id} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;
