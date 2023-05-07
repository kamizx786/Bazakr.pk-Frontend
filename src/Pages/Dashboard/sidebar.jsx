import React from "react";
import { siteSettings } from "./site";

import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    
      <aside>
        <div className="rounded border border-border-200 bg-white ml-5">
          <ul className="py-7">
            {siteSettings.dashboardSidebarMenu?.map((item) => {
              return (
                <li className="py-1" key={item.id}>
                  <Link
                    to={`${item.to}`}
                    className="block border-l-4 border-transparent py-2 px-10 font-semibold text-heading transition-colors hover:text-accent focus:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* End of top part menu */}

          <ul className="border-t border-border-200 bg-light py-4">
            <li className="block py-2 px-11  ">
              <button className="font-semibold text-heading transition-colors hover:text-accent focus:text-accent">
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