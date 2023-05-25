import React, { useEffect,useState } from "react";
import { Drawer } from "antd";
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import DashboardSidebar from "./sidebar";
import Logo from "../../Components/logo"
import UserLayout from "./UserLayout";
const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

 
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDashboardClick = () => {
    if (open) {
      setOpen(false);
    }
  };

  const renderButton = () => {
    return (
      <AiOutlineMenuUnfold
        size={35}
        color="green"
        className="cursor-pointer"
        onClick={handleDrawerToggle}
      />
    );
  };

  return  (
    <UserLayout>
    <div className="flex min-h-screen flex-col bg-gray-100 transition-colors">
      <div className="m-3 p-3 overflow-hidden lg:!hidden">
        {renderButton()}
      </div>
      <Drawer
        title={
          <>
          <Logo/>
          </>
        }
        placement="left"
        onClose={handleDrawerToggle}
        open={open}
      >
        <DashboardSidebar  />
      </Drawer>

      <div className="flex gap-5" >
        <aside
          className="xl:w-76 ltr:left-0 ltr:right-auto rtl:right-0 rtl:left-auto bottom-0 hidden h-full w-72  mt-20 shadow lg:block"
        >
          <DashboardSidebar />
        </aside>
        <div className="w-full flex p-5 items-center justify-center">
          {children}
        </div>
      </div>
    </div>
    </UserLayout>
  );
};

export default DashboardLayout;
