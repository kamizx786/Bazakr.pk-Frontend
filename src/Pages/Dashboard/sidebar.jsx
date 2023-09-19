import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { siteSettings } from "./site";

const DashboardSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HandleLogout = () => {
    window.localStorage.removeItem("auth");
    dispatch({
      type: "LOGOUT",
      payload: {},
    });
    navigate("/");
  };
  return (
    <aside>
      <div className="rounded border bg-white ml-4">
        <ul className="py-7 font-sans whitespace-nowrap ">
          {siteSettings.dashboardSidebarMenu?.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={`${item.to}`}
                  className="block font-sans  border-transparent py-2 px-10 font-semibold transition-colors hover:text-[#248f59] "
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* End of top part menu */}

        <ul className="border-t border-border-200 bg-white py-4">
          <li className="block py-2 px-11  ">
            <button
              onClick={HandleLogout}
              className="font-semibold font-sans hover:text-[#248f59] transition-colors"
            >
              Logout
            </button>
          </li>
        </ul>
        {/* End of bottom part menu */}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
