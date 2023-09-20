import { Drawer } from "antd";
import React, { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Logo from "../../Components/header/logo";
import UserLayout from "./UserLayout";
import DashboardSidebar from "./sidebar";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <UserLayout>
        <div className="flex min-h-screen flex-col bg-gray-100 transition-colors">
          <div className="m-3 p-3 bg-white w-fit rounded-md overflow-hidden lg:!hidden">
            <AiOutlineMenuUnfold
              size={35}
              color="#248f59"
              className="cursor-pointer transition-transform hover:scale-95"
              onClick={handleDrawerToggle}
            />
          </div>
          <Drawer
            title={
              <>
              <div className="align-middle mt-2 ml-20">
                <Logo />
              </div>
              </>
            }
            placement="left"
            onClose={handleDrawerToggle}
            open={open}
          >
            <div className=" h-full w-fit">
              <DashboardSidebar />
            </div>
          </Drawer>

          <div className="flex gap-5">
            <aside className="ltr:left-0 ltr:right-auto rtl:right-0 rtl:left-auto bottom-0 hidden h-full w-52 mt-20 shadow lg:block">
              <DashboardSidebar />
            </aside>
            <div className="w-full flex p-5 items-center justify-center">
              {children}
            </div>
          </div>
        </div>
      </UserLayout>
    </>
  );
};

export default DashboardLayout;
