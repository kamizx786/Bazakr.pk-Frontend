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
    <Menu as="div" className="relative inline-block text-left ml-5s z-10">
      <Menu.Button className="flex items-center focus:outline-none">
        <Space wrap size={20}>
          <img
            className="w-8"
            src="https://res.cloudinary.com/die5mkbau/image/upload/v1682777929/Account_tk44nt.svg"
            alt=""
          />
        </Space>
      </Menu.Button>

      <Transition
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
          className="end-0 origin-top-end absolute mt-4 w-48 rounded bg-white shadow-md focus:outline-none"
        >
          <Menu.Item>
            <li
              className="flex w-full flex-col space-y-1 rounded-t
             bg-[#248F59] px-4 py-3 text-sm text-white"
            >
              <span className="font-semibold capitalize">{loggedIn?.user?.name}</span>
              <span className="text-xs">{loggedIn?.user?.email}</span>
            </li>
          </Menu.Item>

            <Menu.Item>
              <li className="cursor-pointer border-b border-gray-100 last:border-0">
                <Link
                  onClick={handleMenuItemClick}
                  to="/profile"
                  className={
                    "block px-4 py-3 text-sm font-semibold capitalize transition duration-200 hover:text-accent"
                  }
                >
                  Profile
                </Link>
              </li>
            </Menu.Item>
            <Menu.Item>
              <li className="cursor-pointer border-b border-gray-100 last:border-0">
                <Link
                  onClick={handleMenuItemClick}
                  to="/my-orders"
                  className="block px-4 py-3 text-sm font-semibold capitalize transition duration-200 hover:text-accent"
                >
                  My Orders
                </Link>
              </li>
            </Menu.Item>
            <Menu.Item>
              <li className="cursor-pointer border-b border-gray-100 last:border-0">
                <Link
                  onClick={handleMenuItemClick}
                  className="block px-4 py-3 text-sm font-semibold capitalize transition duration-200 hover:text-accent"
                  to="/checkout"
                >
                  Checkout
                </Link>
              </li>
            </Menu.Item>
            <Menu.Item>
              <li
                onClick={HandleLogout}
                className="cursor-pointer border-b border-gray-100 last:border-0"
              >
                <a
                  onClick={handleMenuItemClick}
                  className={
                    "block px-4 py-3 text-sm font-semibold capitalize transition duration-200 hover:text-accent"
                  }
                >
                  Logout
                </a>
              </li>
            </Menu.Item>
          </Menu.Items>
        </Transition.Child>
      </Transition>
    </Menu>
  );
};
export default AuthorizedMenu;
