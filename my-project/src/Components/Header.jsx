import React from "react";
import { Link } from "react-router-dom";
import { Button, Drawer,Modal } from 'antd';
import { useState } from "react";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import CartSidebarView from "./cart_sidebar_viewer";



const Header = () => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpencart] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [authCon, setauthCon] = useState(false);

//handle Drawer
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setOpencart(false);
  };
//Handle Modal
const handleModal=()=>{
setOpenModal(true);
setOpen(false)
}
const handleCart=()=>{
  setOpencart(true);
  setOpen(false)
  }
  return (
    <>
    <header className="flex items-center justify-between px-10 border-b border-[#D9D9D9]">
      <Link to="/">
            <img className="h-30 w-[10rem] " src="Logo.svg" alto="" />
      </Link>

      <div
        // onClick={onClick}
        // selectedKeys={[current]}
        mode="horizontal"
        className="menu h-fit sm:hidden hidden md:flex gap-3 flex-wrap items-center py-3  justify-evenly"
      >
        <div>
        {/* Search */}
        
          <input
            className=" border border-[#D9D9D9] font-sans  text-base outline-none h-[3.4375rem] w-[23.4375rem] px-3 rounded-lg text-[#248F59]"
            type="search"
            placeholder="Search..."
          />
       
        </div>  
        
        {/* Account */}
       <div onClick={handleModal}>
          <Link >
            <img className="w-8" src="Account.svg" alt="" />
          </Link>
          </div>

        {/* Cart */}
       <div onClick={handleCart}>
          <Link>
            <img className="w-8" src="Cart.svg" alt="" />
          </Link>
          </div>
          <div>
          <button className="bg-[#248F59] text-white py-3 px-3 rounded">
          Become a Seller
          </button>
        </div>
        {/* <SubMenu title="User">
          <Item key="dashboard" icon={<DashboardTwoTone />}>
            <Link to="/dashboard">Dashboard</Link>
          </Item>
          <Item icon={<LogoutOutlined />}>LogOut</Item>
        </SubMenu> */}
      </div>
      
      <div className="md:hidden
      menu h-fit  flex-wrap items-center py-3 justify-evenly
      " >
          <Button   onClick={showDrawer}>
            <img src="../Menu.svg" className="w-8 " />
          </Button>
          <Drawer title="Mobile Menu" placement="right" onClose={onClose} open={open}>
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
            <div  onClick={handleModal}>
              <Link className="flex gap-3 items-center text-base">
                <img className="w-8" src="Account.svg" alt="" />
                <div className="font-sans text-[#00000080]">Account</div>
              </Link>
            </div>

            {/* Cart */}
            <div onClick={handleCart}>
              <Link className="flex gap-3 items-center text-base">
                <img className="w-8" src="Cart.svg" alt="" />
                <div className="font-sans text-[#00000080]">Cart</div>
              </Link>
            </div>
            </div>
          </Drawer>
        </div>

      </header>
{/* Handlecart Drawer */}
<Drawer
 title={null} onClose={onClose} open={openCart} placement="right">
<CartSidebarView setOpencart={setOpencart}/>
</Drawer>
 {/* Modal For login and Signup */}
<Modal 
footer={null}
closable={false}
 open={openModal} onCancel={()=>setOpenModal(false)}>
{!authCon?<Login setauthCon={setauthCon} />:
<Register setauthCon={setauthCon}/>}
</Modal>
</>
  );
};

export default Header;
