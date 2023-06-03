import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShopCard from "../../Components/ShopCard";
import ProductLoader from "../../Components/product-loader";
import jsxRangeMap from "../../Components/range-map";
const Shop = () => {
  const { allShops, userLocation, search } = useSelector((state) => ({
    ...state,
  }));
  const [shops, setShops] = useState([]);
  const limit = 10;

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

  useEffect(() => {
    const nearbyShops = getNearbyShops(allShops, userLocation);
    nearbyShops && setShops(nearbyShops);
  }, [allShops]);

  return (
    <>
      {" "}
      <div className="min-h-screen bg-white relative">
        <div className="flex flex-col w-full max-w-6xl p-8 mx-auto pt-14">
          {shops?.length === 0 ? (
            <h3 className="mb-8 text-3xl font-serif  flex justify-center font-normal text-heading">
              There is no Shop in your Area
            </h3>
          ) : (
            <h3 className="mb-8 text-3xl font-serif text-[#248f59] font-normal text-heading">
              All Shops
            </h3>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shops?.length === 0 ? (
              jsxRangeMap(limit, (i) => (
                <ProductLoader key={i} uniqueKey={`product-${i}`} />
              ))
            ) : filteredShops.length === 0 ? (
              <h3 className="mb-8 text-xl flex justify-center text-[#00000080] font-medium font-sans text-heading">
                No Search Result Found <span className="text-black pl-2">🙂</span>
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
