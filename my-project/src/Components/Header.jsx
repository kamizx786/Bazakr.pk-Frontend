import React from "react";
import { Link } from "react-router-dom";
import {
  UserAddOutlined,
  HomeTwoTone,
  DashboardTwoTone,
  LogoutOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Button, Drawer } from 'antd';
import { useState } from "react";

const { SubMenu, Item } = Menu;


const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <header className="flex items-center justify-between px-10 border-b border-[#D9D9D9]">
      <Link to="/">
            <img className="h-30 w-[10rem] " src="Logo.svg" alto="" />
      </Link>

      <Menu
        // onClick={onClick}
        // selectedKeys={[current]}
        mode="horizontal"
        className="menu h-fit hidden md:flex flex-wrap items-center py-3 justify-evenly"
      >
        {/* Search */}
        <Item>
          <input
            className=" border border-[#D9D9D9] font-sans  text-base outline-none h-[3.4375rem] w-[23.4375rem] px-3 rounded-lg text-[#248F59]"
            type="search"
            placeholder="Search..."
          />
        </Item>

        
        {/* Account */}
        <Item>
          <Link>
            <img className="w-8" src="Account.svg" alt="" />
          </Link>
        </Item>

        {/* Cart */}
        <Item>
          <Link>
            <img className="w-8" src="Cart.svg" alt="" />
          </Link>
        </Item>
                
        {/* <SubMenu title="User">
          <Item key="dashboard" icon={<DashboardTwoTone />}>
            <Link to="/dashboard">Dashboard</Link>
          </Item>
          <Item icon={<LogoutOutlined />}>LogOut</Item>
        </SubMenu> */}
      </Menu>
      
      <div className="md:hidden" >
          <Button type="primary" onClick={showDrawer}>
            <img src="../Menu.svg" className="w-8" />
          </Button>
          <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
            <div className="flex flex-col gap-3">
            {/* Search */}
            <div>
              <input
                className=" border border-[#D9D9D9] font-sans  text-base outline-none h-[3.4375rem] px-3 rounded-lg text-[#248F59]"
                type="search"
                placeholder="Search..."
              />
            </div>
            {/* Account */}
            <div>
              <Link className="flex gap-3 items-center text-base">
                <img className="w-8" src="Account.svg" alt="" />
                <div className="font-sans text-[#00000080]">Account</div>
              </Link>
            </div>

            {/* Cart */}
            <div>
              <Link className="flex gap-3 items-center text-base">
                <img className="w-8" src="Cart.svg" alt="" />
                <div className="font-sans text-[#00000080]">Cart</div>
              </Link>
            </div>
            </div>
          </Drawer>
        </div>

      </header>
  );
};

export default Header;
