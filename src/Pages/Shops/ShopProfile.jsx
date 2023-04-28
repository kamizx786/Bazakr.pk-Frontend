import React from "react";
import {
  FacebookOutlined,
  GlobalOutlined,
  InstagramOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const shopProfile = () => {
  return (
    <div className="mx-8 my-8">
      {/* Cover and profile Pic */}
      <div className=" flex flex-wrap shadow rounded w-fit">
        {/* Cover image */}
        <img src="ShopMain.png" alt="" />
        {/* Profile image */}
        <div className="-mt-24 ml-4 rounded-full  flex flex-wrap ">
          {" "}
          <img src="ShopCover.png" alt="" />
        </div>

        <div className="flex flex-col p-2">
          <h1 className="font-serif flex flex-row mt-3 text-3xl font-normal">
            Hers Collection
          </h1>
          <img src="Rating.png" alt="" />
        </div>
        <div className="mx-auto"></div>
        <button className="mt-4 h-10 w-full md:w-[17.4375rem] text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold">
          <WhatsAppOutlined className="align-middle" /> WhatsApp
        </button>
      </div>

      <div className="flex mt-2  ">
        <div className="flex flex-wrap flex-col w-1/4">
          {/* Filter */}
          <div className="mx-2 border flex flex-col flex-wrap rounded shadow w-[15rem] h-[29rem]">
            <h3 className="font-serif mt-3 text-center  text-2xl font-medium">
              Filter By
            </h3>
            <h4 className=" mx-3 font-sans mt-3 text-xl font-semibold">
              Categories:
            </h4>
            <div className=" mx-6">
              <input
                type="checkbox"
                className="form-checkbox checked:bg-green-700"
              />{" "}
              <label className="font-sans"> Tshirts</label>
              <br />
              <input type="checkbox" />{" "}
              <label className="font-sans "> Jeans</label>
              <br />
              <input type="checkbox" />{" "}
              <label className="font-sans"> Polo</label>
              <br />
              <input type="checkbox" />{" "}
              <label className="font-sans"> Shawals</label>
              <br />
            </div>
            <h4 className="mx-3 font-sans mt-3 text-xl font-semibold">
              Pricing
            </h4>
            <h4 className="mx-3 font-sans mt-3 text-xl font-semibold">
              Rating
            </h4>
          </div>
          {/* About */}
          <div className="mx-2 border flex flex-col flex-wrap grid-cols-3 rounded w-[15rem] mt-2 shadow h-fi4">
            <h3 className=" font-serif mt-3 text-center  text-2xl font-medium">
              About
            </h3>
            <p className="mx-3 w-[13rem] font-sans mt-3 font-light leading-5">
              Our women's fashion brand offers the latest trends and timeless
              classics to empower women through fashion. We prioritize quality,
              sustainability, and diverse styles that cater to all body types.
            </p>
            <div className="mx-3 w-[13rem] mt-2 flex flex-row h-5 font-sans leading-5 font-light">
              <img src="Location.png" alt="" /> 845 N. Stonybrook Ave.
              Tonawanda, NY 14210, Denmark
            </div>
            <div className="mx-3 w-[13rem] mt-5 flex flex-row h-5 font-sans leading-5 font-light">
              <Link
                to="#"
                className="text-[#248F59] text-md align-middle decoration-none"
              >
                <GlobalOutlined className="align-middle" />{" "}
                www.herscollection.com
              </Link>
            </div>
            <div className="flex flex-row align-middle justify-around my-3">
              <InstagramOutlined style={{ fontSize: "1.4375rem" }} />
              <YoutubeOutlined style={{ fontSize: "1.4375rem" }} />
              <TwitterOutlined style={{ fontSize: "1.4375rem" }} />
              <FacebookOutlined style={{ fontSize: "1.4375rem" }} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap flex-col border-2 w-3/4">
          <input
            type="search"
            placeholder="Search Products..."
            className="h-[4rem]  text-[#248F59] text-xl mx-auto mt-2 p-3 font-sans outline-none shadow-inner font-normal rounded border w-[24.6875rem]"
          />
          <div className="mt-2 flex-row grid grid-cols-3 px-24">
            {/* Product */}
            <div className="h-fit w-fit flex-wrap flex-col font-sans border font-medium rounded-xl  mb-2">
              <img src="Product.png" alt="" className="h-[12.25rem]" />
              <p className="my-2 mx-2 text-center">Classic Comfort T-Shirt</p>
              <img src="Rating.png" alt="" />
              <span className="font-sans">$</span>
              <span className="font-sans text-3xl font-semibold">18</span>
              <span className="font-sans">.75</span>
            </div>
            {/* Product */}
            <div className="h-fit w-fit flex-col font-sans flex-wrap border  rounded-xl font-normal mb-2">
              <img src="Product.png" alt="" className="h-[12.25rem]" />
              <p className="my-2 mx-2 text-center">Classic Comfort T-Shirt</p>
              <img src="Rating.png" alt="" />
              <span className="font-sans">$</span>
              <span className="font-sans text-3xl font-semibold">18</span>
              <span className="font-sans">.75</span>
            </div>
            {/* Product */}
            <div className="h-fit w-fit flex-col font-sans flex-wrap border rounded-xl font-normal mb-2">
              <img src="Product.png" alt="" className="h-[12.25rem]" />
              <p className="my-2 mx-2 text-center">Classic Comfort T-Shirt</p>
              <img src="Rating.png" alt="" />
              <span className="font-sans">$</span>
              <span className="font-sans text-3xl font-semibold">18</span>
              <span className="font-sans">.75</span>
            </div>
            {/* Product */}
            <div className="h-fit w-fit flex-col font-sans flex-wrap border rounded-xl font-normal mb-2">
              <img src="Product.png" alt="" className="h-[12.25rem]" />
              <p className="my-2 mx-2 text-center">Classic Comfort T-Shirt</p>
              <img src="Rating.png" alt="" />
              <span className="font-sans">$</span>
              <span className="font-sans text-3xl font-semibold">18</span>
              <span className="font-sans">.75</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default shopProfile;
