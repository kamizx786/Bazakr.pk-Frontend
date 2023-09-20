import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[25rem]">
        <div className="flex flex-col justify-center items-center">
          <span className="mt-4 font-serif text-red-500 text-4xl font-semibold">
            404 Error
          </span>
          <span className="mt-4 text-gray-500 text-center font-sans text-xl font-semibold">
          Oops! It looks like the page you're trying to access is missing.😵
          </span>
        </div>
      </div>
    </>
  );
};
export default NotFound;
