import React from "react";
import ItemCard from "./itemcard";

const RightSideView = () => {
  return (
    <>
      <div className="flex flex-col p-2 w-full">
        <div className="flex items-center mb-4 justify-center">
          <p className="text-black font-sans font-semibold">Your Order</p>
        </div>
        <ItemCard />
      </div>
    </>
  );
};
export default RightSideView;
