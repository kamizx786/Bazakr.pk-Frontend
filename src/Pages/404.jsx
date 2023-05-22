import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <span className="mt-4 text-black text-lg font-semibold">
            404 Error
          </span>
          <span className="mt-4 text-gray-500 text-lg font-semibold">
            Its Look like the Page Doesn't Exist
          </span>
        </div>
      </div>
    </>
  );
};
export default NotFound;
