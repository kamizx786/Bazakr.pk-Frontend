import { Menu, Transition } from "@headlessui/react";
import { Space } from "antd";
import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const AuthorizedMenu = () => {
  
  const { loggedIn } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  const HandleLogout = () => {
    window.localStorage.removeItem("auth");
    dispatch({
      type: "LOGOUT",
      payload: {},
    });
    navigate("/");
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left z-10">
        {/* USER ICON */}
        <Menu.Button
          onClick={handleMenuToggle}
          className="flex items-center transition-transform hover:scale-95 focus:outline-none"
        >
          <Space wrap size={20}>
            <img
              className="w-8"
              src="https://res.cloudinary.com/die5mkbau/image/upload/v1682777929/Account_tk44nt.svg"
              alt="user-icon"
            />
          </Space>
        </Menu.Button>
        {/* USER MENU */}
        <Transition show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as="ul"
              className="origin-top-end absolute mt-4 w-48 rounded bg-white shadow-md focus:outline-none"
            >
              {/* USER NAME AND EMAIL */}
              <Menu.Item>
                <li
                  className="flex w-full flex-col space-y-1 rounded-t
                 bg-[#248F59] px-4 py-3 text-sm text-white"
                >
                  <span className="font-semibold capitalize">
                    {loggedIn?.user?.name}
                  </span>
                  <span className="text-xs">{loggedIn?.user?.email}</span>
                </li>
              </Menu.Item>
              {/* PROFILE */}
              <Menu.Item>
                <li className="cursor-pointer border-b border-gray-100 last:border-0">
                  <Link
                    onClick={handleMenuItemClick}
                    to="/profile"
                    className="block px-4 py-3 text-sm hover:text-[#248f59] font-semibold capitalize transition duration-200"
                  >
                    Profile
                  </Link>
                </li>
              </Menu.Item>
              {/* MY ORDERS */}
              <Menu.Item>
                <li className="cursor-pointer border-b border-gray-100 last:border-0">
                  <Link
                    onClick={handleMenuItemClick}
                    to="/my-orders"
                    className="block px-4 py-3 text-sm font-semibold capitalize transition duration-200 hover:text-[#248f59]"
                  >
                    My Orders
                  </Link>
                </li>
              </Menu.Item>
              {/* CHECKOUT */}
              <Menu.Item>
                <li className="cursor-pointer border-b border-gray-100 last:border-0">
                  <Link
                    onClick={handleMenuItemClick}
                    to="/checkout"
                    className="block px-4 py-3 text-sm font-semibold capitalize transition duration-200 hover:text-[#248f59]"
                  >
                    Checkout
                  </Link>
                </li>
              </Menu.Item>
              {/* LOGOUT */}
              <Menu.Item>
                <li
                  onClick={HandleLogout}
                  className="cursor-pointer border-b border-gray-100 last:border-0"
                >
                  <a
                    onClick={handleMenuItemClick}
                    className="block px-4 py-3 text-sm font-semibold capitalize transition duration-200 hover:text-[#248f59]"
                  >
                    Logout
                  </a>
                </li>
              </Menu.Item>
            </Menu.Items>
          </Transition.Child>
        </Transition>
      </Menu>
    </>
  );
};
export default AuthorizedMenu;
