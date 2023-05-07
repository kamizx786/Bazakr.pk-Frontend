import React from "react";
import { Link } from "react-router-dom";
import { Button, Drawer, Modal } from "antd";
import { useState } from "react";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import CartSidebarView from "./cart_sidebar_viewer";
import {Bars3Icon} from "@heroicons/react/24/solid";
import {BsFillTelephoneFill} from "react-icons/bs";
import {AiTwotoneShopping} from "react-icons/ai"
import AuthorizedMenu from "./authorizedMenu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openCart, setOpencart] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [authCon, setauthCon] = useState(false);
  const [user, setuser] = useState(false);

  //handle Drawer
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setOpencart(false);
  };
  //Handle Modal
  const handleModal = () => {
    setOpenModal(true);
    setOpen(false);
  };
  const handleCart = () => {
    setOpencart(true);
    setOpen(false);
  };
  return (
    <>
      <header className="flex items-center justify-between px-10 border-b border-[#D9D9D9]">
        <Link to="/">
          <img className="h-30 w-[10rem] " src="https://res.cloudinary.com/dc367rgig/image/upload/v1682767512/Logo_lokccn.svg" alto="" />
        </Link>

        <div
          // onClick={onClick}
          // selectedKeys={[current]}
          mode="horizontal"
          className="menu h-fit sm:hidden hidden md:flex gap-4 flex-wrap items-center py-3  justify-evenly"
        >
          <div>
            {/* Search */}

            <input
              className=" border border-[#D9D9D9] font-sans  text-base outline-none h-[3.4375rem] w-[23.4375rem] px-3 rounded-lg text-[#248F59]"
              type="search"
              placeholder="Search..."
            />
          </div>
          <div>
            <Link to="/shops" className="text-muted text-lg">
              Shop
            </Link>
          </div>

          <div >
            <Link to="/contact" className="text-muted text-lg">
              Contact
            </Link>
          </div>
          <div >
            <button className="bg-[#248F59] text-white py-3 px-3 rounded">
            <a href="https://bazar-pk-sellerside.vercel.app/">  
            Become a Seller
            </a>
            </button>
          </div>
         

          {/* Cart */}
          <div  onClick={handleCart}>
            <Link>
              <img className="w-8" src="https://res.cloudinary.com/die5mkbau/image/upload/v1682795927/Cart_yt9caj.svg" alt="" />
            </Link>
          </div>
        
        </div>
         {/* Account */}
         <div  >
           {user? <Link onClick={handleModal}>
              <img className="w-8" src="https://res.cloudinary.com/die5mkbau/image/upload/v1682777929/Account_tk44nt.svg" alt="" />
            </Link>:
            <AuthorizedMenu/>}
          </div>
          
        <div
          className="md:hidden menu h-fit  flex-wrap items-center py-3 justify-evenly" >
          <Button onClick={showDrawer} className="pb-2">
            <Bars3Icon  className="h-8 pb-2 text-[#248F59]" />
          </Button>
          <Drawer
            title="Mobile Menu"
            placement="right"
            onClose={onClose}
            open={open}
          >
            <div className="flex flex-col gap-3">
              {/* Search */}
              <div>
                <input
                  className=" border border-[#D9D9D9] font-sans  text-base outline-none h-[3.4375rem] px-3 rounded-lg text-[#248F59]"
                  type="search"
                  placeholder="Search..."
                />
              </div>
              <div>
                <Link
                  to="/shops"
                  onClick={onClose}
                  className="flex gap-3 items-center text-base
          text-muted "
                >
                  <AiTwotoneShopping className="w-8 text-[#248F59]" />
                  <div className="font-sans text-[#00000080]">Shop</div>
                </Link>
              </div>
              <div>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="text-muted flex gap-3 items-center text-base"
                >
                  <BsFillTelephoneFill size={25} className="w-8 text-[#248F59]" />
                  <div className="font-sans text-[#00000080]">Contact</div>
                </Link>
              </div>
           
              {/* Cart */}
              <div onClick={handleCart}>
                <Link className="flex gap-3 items-center text-base">
                  <img className="w-8" src="https://res.cloudinary.com/die5mkbau/image/upload/v1682795927/Cart_yt9caj.svg" alt="" />
                  <div className="font-sans text-[#00000080]">Cart</div>
                </Link>
              </div>
              <div>
            <button className="bg-[#248F59] text-white py-3 px-3 rounded">
            <a href="https://bazar-pk-sellerside.vercel.app/">  
            Become a Seller
            </a>
            </button>
          </div>
            </div>
          </Drawer>
        </div>
      </header>
      {/* Handlecart Drawer */}
      <Drawer title={null} onClose={onClose} open={openCart} placement="right">
        <CartSidebarView setOpencart={setOpencart} />
      </Drawer>
      {/* Modal For login and Signup */}
      <Modal
        footer={null}
        closable={false}
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        {!authCon ? (
          <Login setauthCon={setauthCon} setOpenModal={setOpenModal} />
        ) : (
          <Register setauthCon={setauthCon} />
        )}
      </Modal>
    </>
  );
};

export default Header;
