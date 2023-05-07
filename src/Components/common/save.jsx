import React from "react";

const SaveButton = ({handleSubmit}) => {
  return (
    <>
      <button onClick={handleSubmit} className="h-12 w-24 my-3 flex flex-wrap justify-center items-center rounded-lg  bg-[#248F59] uppercase text-[#f2f2f2]">
        Save
      </button>
    </>
  );
};
export default SaveButton;
