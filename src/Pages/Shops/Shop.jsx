import React, { useEffect, useState } from "react";
import Shops from "../../Components/Shops";
import ShopCard from "../../Components/ShopCard";
import ProductLoader from "../../Components/product-loader";
import jsxRangeMap from "../../Components/range-map";
import { useSelector } from "react-redux";
const Shop = () => {
const {allShops,userLocation}=useSelector((state)=>({...state}));
const [shops,setShops]=useState([]);
const limit = 10;

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const earthRadius = 6371; // Radius of the Earth in kilometers

  const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  const deltaLat = toRadians(lat2 - lat1);
  const deltaLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance;
};
;
const getNearbyShops = (allShops, userLocation) => {
  const nearbyShops = allShops?.filter((shop) => {
    const shopDistance = calculateDistance(
      userLocation?.location?.lat,
      userLocation?.location?.lng,
      shop?.location?.lat,
      shop?.location?.lng
    );
    return shopDistance <4; 
  });
  return nearbyShops;
};

useEffect(() => {
  const nearbyShops = getNearbyShops(allShops, userLocation);
 nearbyShops&&setShops(nearbyShops);
}, [allShops]);


  return (
    <>    <div className="min-h-screen bg-white relative">
      <div className="flex flex-col w-full max-w-6xl p-8 mx-auto pt-14">
        {shops?.length===0?
        <h3 className="mb-8 text-2xl flex justify-center font-bold text-heading">
          There is no Shop in your Area
        </h3>
        :<h3 className="mb-8 text-2xl font-bold text-heading">All Shops</h3>
        }

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shops?.length===0
            ? jsxRangeMap(limit, (i) => (
                <ProductLoader key={i} uniqueKey={`product-${i}`} />
              ))
            :shops?.map((shop) => <ShopCard shop={shop} key={shop.id} />)}
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
