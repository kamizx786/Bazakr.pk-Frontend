import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

const SaveButton = ({ handleSubmit, loading }) => {
  return (
    <>
      <button
        onClick={handleSubmit}
        className="h-12 w-24 my-3 flex flex-wrap justify-center transition-transform hover:scale-95 hover:text-white items-center rounded-lg  bg-[#248F59] uppercase text-[#f2f2f2]"
      >
        {loading ? <LoadingOutlined /> : "Save"}
      </button>
    </>
  );
};
export default SaveButton;
