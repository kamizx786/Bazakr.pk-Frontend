import { Bars3Icon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { Badge, Drawer, Modal } from "antd";
import React, { useState } from "react";
import { BsFillChatRightTextFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Login from "../../Pages/Auth/Login";
import Register from "../../Pages/Auth/Register";
import CartSidebarView from "../cart/cart_sidebar_viewer";
import AuthorizedMenu from "./authorizedMenu";
import Logo from "./logo";

const Header = () => {
  
  const [open, setOpen] = useState(false);
  const [authCon, setauthCon] = useState(false);
  const { loggedIn, LoginModal, CartDrawer, cart, search } = useSelector(
    (state) => ({
      ...state,
    })
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //handle Drawer
  const showDrawer = () => {
    setOpen(true);
  };
  
  const handleCloseModal = () => {
    dispatch({
      type: "Visible",
      payload: false,
    });
  };

  const onClose = () => {
    setOpen(false);
  };
  
  //Handle Modal
  const handleModal = () => {
    dispatch({
      type: "Visible",
      payload: true,
    });
    setOpen(false);
  };
  
  const handleCart = () => {
    dispatch({
      type: "CartDrawer",
      payload: true,
    });
    setOpen(false);
  };
  
  const { text } = search;

  const handlechange = (e) => {
    dispatch({
      type: "Search",
      payload: { text: e },
    });
  };
  
  const handleclick = (e) => {
    e.preventDefault();
    setOpen(false);
    navigate(`/shops?${text}`);
  };
  
  return (
    <>
      <header className="flex items-center justify-between px-3 md:px-10 border-b border-[#D9D9D9]">
        {/* BAZAR LOGO */}
        <Link to="/">
          <Logo />
        </Link>
        {/* HEADER FOR LARGE SCREENS */}
        <div
          mode="horizontal"
          className="h-fit md:hidden hidden lg:flex gap-4 flex-wrap items-center py-3  justify-evenly"
        >
          <>
            <div>
              {/* Search */}
              <form onSubmit={handleclick}>
                <input
                  type="search"
                  className=" border focus:border-none  border-[#D9D9D9] font-sans  text-base outline-none focus:outline-none focus:ring-2 focus:ring-green-600 h-[3.4375rem] max-w-[23.4375rem] px-3 rounded-lg text-[#248F59]"
                  onChange={(e) => handlechange(e.target.value)}
                  value={text}
                  placeholder="Search Shop..."
                  autoComplete="off"
                />
              </form>
            </div>
            {/* SHOP */}
            <div>
              <Link
                to="/shops"
                className="hover:text-[#248f59] text-[#00000080]  font-sans text-lg"
              >
                Shop
              </Link>
            </div>
          </>
          {/* CONTCAT */}
          <div>
            <Link
              to="/contact"
              className=" hover:text-[#248f59] text-[#00000080] font-sans text-lg"
            >
              Contact
            </Link>
          </div>

          {/* Cart */}
          <div className="cursor-pointer" onClick={handleCart}>
            <Badge count={cart?.length} color="#248F59">
              <img
                className="w-8 transition-transform hover:scale-95"
                src="https://res.cloudinary.com/die5mkbau/image/upload/v1682795927/Cart_yt9caj.svg"
                alt="cart"
              />
            </Badge>
          </div>

          {/* Account */}
          <div>
            {/* NOT LOGIN THEN OPEN MODAL */}
            {!loggedIn || !loggedIn.token ? (
              <Link onClick={handleModal}>
                <img
                  className="w-8 transition-transform hover:scale-95"
                  src="https://res.cloudinary.com/die5mkbau/image/upload/v1682777929/Account_tk44nt.svg"
                  alt="user"
                />
              </Link>
            ) : (
              <AuthorizedMenu />
            )}
          </div>
          {/* SELLER BUTTON */}
          <div>
            <button className="bg-[#248F59] text-[#f2f2f2] hover:text-white font-sans  py-3 px-3 rounded transition-transform hover:scale-95 uppercase font-semibold ">
              <a href="https://bazar-pk-sellerside.vercel.app/" target="_blank">
                Become a Seller
              </a>
            </button>
          </div>
        </div>

        {/* USER ICON FOR SMALL SCREENS */}
        <div className="lg:hidden h-fit flex gap-14 items-center py-3 justify-between">
          <div className="lg:hidden mt-1 mr-12">
            {!loggedIn || !loggedIn.token ? (
              <Link onClick={handleModal}>
                <img
                  className="w-8 transition-transform hover:scale-95"
                  src="https://res.cloudinary.com/die5mkbau/image/upload/v1682777929/Account_tk44nt.svg"
                  alt=""
                />
              </Link>
            ) : (
              <AuthorizedMenu />
            )}
          </div>
          {/* FOR SMALL SCREENS */}
          <button
            onClick={showDrawer}
            className="p-2 flex hover:border-[#248f59] items-center rounded-md justify-center border transition-transform hover:scale-95"
          >
            <Bars3Icon className="h-8 text-[#248F59]" />
          </button>
          {/* DRAWER FOR SMALL SCREEN */}
          <Drawer
            title={
              <>
                <div className="text-center text-[#248f59] font-serif text-xl">
                  Menu
                </div>
              </>
            }
            placement="right"
            onClose={onClose}
            open={open}
          >
            <div className="flex flex-col ml-5 gap-7">
              {/* Search */}
              <div>
                <form onSubmit={handleclick}>
                  <input
                    className=" border border-[#D9D9D9] font-sans  text-base outline-none h-[3.4375rem]  px-3 rounded-lg text-[#248F59] focus:outline-none focus:ring-2 focus:ring-green-600"
                    type="search"
                    onChange={(e) => handlechange(e.target.value)}
                    value={text}
                    placeholder="Search..."
                    autoComplete="off"
                  />
                </form>
              </div>
              {/* SHOPS */}
              <div>
                <Link
                  to="/shops"
                  onClick={onClose}
                  className="flex gap-3 items-center text-base text-muted "
                >
                  <ShoppingBagIcon size={25} className="w-6 text-[#248F59]" />
                  <div className="font-sans text-[#00000080] hover:text-[#248f59]">
                    Shop
                  </div>
                </Link>
              </div>
              {/* CONTACT */}
              <div>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="text-muted flex gap-3 items-center text-base"
                >
                  <BsFillChatRightTextFill
                    size={19}
                    color="#248F59"
                    className="w-6"
                  />
                  <div className="font-sans text-[#00000080]  hover:text-[#248f59]">
                    Contact
                  </div>
                </Link>
              </div>

              {/* Cart */}
              <div onClick={handleCart}>
                <Link className="flex gap-3 items-center text-base">
                  <Badge count={cart?.length} color="#248F59">
                    <img
                      className="w-6"
                      src="https://res.cloudinary.com/die5mkbau/image/upload/v1682795927/Cart_yt9caj.svg"
                      alt=""
                    />
                  </Badge>
                  <div className="font-sans text-[#00000080]  hover:text-[#248f59]">
                    Cart
                  </div>
                </Link>
              </div>

              {/* Become a Seller */}
              <div>
                <button className="bg-[#248F59] text-[#f2f2f2] hover:text-white font-sans  py-3 px-3 rounded transition-transform hover:scale-95 uppercase font-semibold ">
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
      <Drawer
        title={null}
        onClose={() =>
          dispatch({
            type: "CartDrawer",
            payload: false,
          })
        }
        open={CartDrawer}
        placement="right"
      >
        <CartSidebarView />
      </Drawer>
      {/* Modal For login and Signup */}
      <Modal
        footer={null}
        closable={false}
        open={LoginModal}
        onCancel={handleCloseModal}
      >
        {!authCon ? (
          <Login setauthCon={setauthCon} />
        ) : (
          <Register setauthCon={setauthCon} />
        )}
      </Modal>
    </>
  );
};

export default Header;
