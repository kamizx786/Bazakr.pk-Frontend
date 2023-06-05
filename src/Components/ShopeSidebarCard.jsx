import React from "react";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";

import { Link } from "react-router-dom";
const ShopeSidebarCard = ({ shop }) => {
  return (
    <>
      <div className="w-full font-sans">
        <div className="flex flex-col items-center w-full border-b border-gray-200 p-7">
          <div className="relative mx-auto mb-8 overflow-hidden bg-gray-200 border border-gray-100 rounded-lg w-44 h-44">
            <img src={shop?.main_pic?.url} className="object-cover" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-heading">
            {shop?.Storename}
          </h3>
          {shop?.description && (
            <p className="mb-2 text-sm leading-relaxed text-center text-body">
              {shop?.discription}
            </p>
          )}
          <div className="flex items-center gap-2 justify-start mt-3">
            <Link
              to={`https://${shop?.facebook}`}
              target="_blank"
              className={`cursor-pointer text-muted focus:outline-none ltr:mr-6 rtl:ml-6 ltr:last:mr-0 rtl:last:ml-0 transition-colors duration-300`}
              rel="noreferrer"
            >
              <AiFillFacebook size={25} className="opacity-60 hover:text-[#248f59]" />
            </Link>
            <a
              href={`https://${shop?.insta}`}
              target="_blank"
              className={`cursor-pointer text-muted focus:outline-none ltr:mr-6 rtl:ml-6 ltr:last:mr-0 rtl:last:ml-0 transition-colors duration-300`}
              rel="noreferrer"
            >
              <AiOutlineInstagram size={27} className="opacity-60 hover:text-[#248f59]" />
            </a>
          </div>
        </div>
        <div className="p-7 ">
          <div className="flex flex-col mb-7 last:mb-0">
            <span className="mb-2 text-sm font-semibold text-heading">
              Address
            </span>
            <span className="text-sm text-body">{shop?.mapAddress}</span>
          </div>
          <div className="flex flex-col mb-7 last:mb-0">
            <span className="mb-2 text-sm font-semibold text-heading">
              Phone
            </span>
            <span className="text-sm text-body">{shop?.Storewhatsapp}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopeSidebarCard;
