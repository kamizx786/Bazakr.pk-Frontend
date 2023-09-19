import { Modal } from "antd";
import React, { useState } from "react";
import ShopeSidebarCard from "./ShopeSidebarCard";
const ShopSidebar = ({ shop }) => {
  const [open, setOpen] = useState(false);
  const handleMoreInfoModal = () => {
    setOpen(true);
  };
  return (
    <>
      {/*FOR SMALL SCREEN SHOP SIDE BAR */}
      <div
        className="flex items-center lg:hidden w-full bg-white 
        border-b border-gray-300 py-4 px-6 top-[55px]"
      >
        <div className="relative w-16 h-16 mx-auto overflow-hidden bg-gray-200 border border-gray-100 rounded-lg mr-4 ml-4 shrink-0">
          <img src={shop?.main_pic?.url} className="object-cover" />
        </div>

        <div className="w-full p-5 font-sans">
          <h3 className="text-base font-sans font-semibold ">
            {shop?.Storename}
          </h3>
          <button
            className="text-sm font-semibold font-sans transition text-[#248F59] "
            onClick={handleMoreInfoModal}
          >
            More info
          </button>
        </div>
      </div>
      {/* FOR LARGE SCREEN */}
      <aside className="bg-white md:rounded h-full w-full lg:w-80 2xl:w-96 hidden lg:block">
        <div className="max-h-full overflow-hidden">
          <ShopeSidebarCard shop={shop} />
        </div>
      </aside>
      {/* FOR SMALL SCREEN  OPEN IN MODAL*/}
      <Modal open={open} footer={null} onCancel={() => setOpen(false)}>
        <div className="h-full w-full overflow-hidden">
          <ShopeSidebarCard shop={shop} />
        </div>
      </Modal>
    </>
  );
};

export default ShopSidebar;
