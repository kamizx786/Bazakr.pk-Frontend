import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsShop, BsFilterSquare } from "react-icons/bs";
import ShopCard from "../../Components/ShopCard";
import ProductLoader from "../../Components/product-loader";
import jsxRangeMap from "../../Components/range-map";
const Shop = () => {
  const [categories, setCategories] = useState([]);
  const { allShops, userLocation, search, category } = useSelector((state) => ({
    ...state,
  }));
  const [shops, setShops] = useState([]);
  const [ok, setOk] = useState(true);
  const limit = 10;
const dispatch=useDispatch()
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
    window.scrollTo(0, 0);
  }, []);
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const earthRadius = 6371; // Radius of the Earth in kilometers

    const toRadians = (degrees) => {
      return degrees * (Math.PI / 180);
    };

    const deltaLat = toRadians(lat2 - lat1);
    const deltaLon = toRadians(lon2 - lon1);

    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(deltaLon / 2) *
        Math.sin(deltaLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;

    return distance;
  };
  const getNearbyShops = (allShops, userLocation) => {
    const nearbyShops = allShops?.filter((shop) => {
      const shopDistance = calculateDistance(
        userLocation?.location?.lat,
        userLocation?.location?.lng,
        shop?.location?.lat,
        shop?.location?.lng
      );
      return shopDistance < 4;
    });
    return nearbyShops;
  };

  const handleCategoryFilter = (e) => {
    if(e.target.value === "select") {
      const nearbyShops = getNearbyShops(allShops, userLocation);
      return setShops(nearbyShops)
    }
    const nearbyShops = getNearbyShops(allShops, userLocation);
    const filter = nearbyShops?.filter((s) => {
      return s.category._id === e.target.value;
    })
    filter && setShops(filter)
    if(filter?.length<1){
      setTimeout(()=>{
      setOk(false)
      },5000)
    }
  };



  useEffect(() => {
    const nearbyShops = getNearbyShops(allShops, userLocation);
    nearbyShops && setShops(nearbyShops);
    nearbyShops && dispatch({
      type:"Location_Shops",
      payload:nearbyShops
    })
    nearbyShops&&localStorage.setItem("shops",JSON.stringify(nearbyShops));
    if(nearbyShops?.length<1){
      setTimeout(()=>{
      setOk(false)
      },4000)
    }
  }, [allShops]);


  return (
    <>
      {" "}
      <div className="min-h-screen bg-white relative">
        <div className="flex flex-col w-full max-w-6xl p-8 mx-auto pt-14">
        <div className="flex w-full items-center justify-between">
              <h3 className="mb-6 text-3xl font-serif text-[#248f59] font-normal text-heading">
                All Shops
              </h3>
              {/* Choose Category */}
              <div className="flex pr-2 py-2 mb-6 flex-row gap-2 justify-start  items-center">
                <label className="font-sans font-medium mr-2 opacity-80">
                  Filter by:
                </label>

                <select
                  type="text"
                  name="store"
                  id="priceFilter"
                  onChange={handleCategoryFilter}
                  className="h-12 cursor-pointer w-fit text-md bg-white border-gray-300 rounded-lg pl-3 pr-8 py-2  font-sans font-normal tracking-normal text-left focus:outline-none focus:ring-2 focus:ring-green-600"
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
          {shops?.length === 0 ? "" : (
            <h3 className="mb-8 text-lg opacity-80 font-sans font-medium flex justify-start  text-heading">
              {shops?.length} shops found in {userLocation.mapAddress}
            </h3>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shops?.length === 0 && ok ? (
              jsxRangeMap(limit, (i) => (
                <ProductLoader key={i} uniqueKey={`product-${i}`} />
              ))
            ) : filteredShops.length === 0 ? (
              <h3 className="mb-8 text-xl flex justify-center text-[#00000080] font-medium font-sans text-heading">
                No Shops Found{" "}
                <span className="text-black pl-2">🙂</span>
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
