import React, { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserLayout = ({ children }) => {
  const { loggedIn } = useSelector((state) => ({ ...state }));

  const navigate = useNavigate();
  useEffect(() => {
    // Redirect to login if state is null
    if (!loggedIn || !loggedIn.token) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [loggedIn]);
  
  return !loggedIn || !loggedIn.token ? (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <FaSpinner className="text-6xl w-16 h-16 text-[#248F59] animate-spin" />
          <span className="mt-4 font-sans text-gray-500 text-lg font-semibold">
            Loading...
          </span>
          <span className="mt-4 font-sans text-gray-500 text-lg font-semibold">
            You are not Authenticated
          </span>
        </div>
      </div>
    </>
  ) : (
    <>{children}</>
  );
};

export default UserLayout;
