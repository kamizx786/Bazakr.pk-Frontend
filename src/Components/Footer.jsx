import React from "react";
import {
  CopyrightOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const { SubMenu, Item } = Menu;

const Footer = () => {

  return (
    <footer className="h-fit w-auto px-5 py-5 flex flex-col gap-8 md:flex-row shadow-inner justify-between border">
      {/* COPY RIGHTS & LOGO */}
      <div className="flex flex-col">
        <Link to="/">
            <img
            src="LogoF.svg"
            alt=""
            className="w-[9.375rem] hover:cursor-pointer"
          />
        </Link>
        <p className="font-sans text-xl font-normal text-[#00000080]">
          <CopyrightOutlined className="align-middle" /> 2023
        </p>
      </div>
      {/* LINKS */}
      <div className=" flex flex-row w-fit">
        <div className=" flex flex-wrap md:flex-row gap-10 md:gap-20 font-normal font-sans text-[#00000080]">
          <ul className="text-base">
            <Link to="/privacy-policy">
              <li className="hover:cursor-pointer hover:text-[#1E1E1E]">
                Privacy Policy
              </li>
            </Link>
            <Link to="/terms-n-codition">
              <li className="hover:cursor-pointer hover:text-[#1E1E1E]">
                Terms & Condition
              </li>
            </Link>
            <Link to="/security">
              <li className="hover:cursor-pointer hover:text-[#1E1E1E]">
                Security
              </li>
            </Link>
            <Link to="/refund-policy">
              <li className="hover:cursor-pointer hover:text-[#1E1E1E]">
                Refunds
              </li>
            </Link>
          </ul>

          <div className="flex flex-row md:flex-col gap-3 align-middle justify-around">
            <InstagramOutlined
              style={{ fontSize: "1.5375rem" }}
              className="hover:cursor-pointer hover:text-[#1E1E1E]"
            />
            <YoutubeOutlined
              style={{ fontSize: "1.5375rem" }}
              className="hover:cursor-pointer hover:text-[#1E1E1E]"
            />
            <TwitterOutlined
              style={{ fontSize: "1.5375rem" }}
              className="hover:cursor-pointer hover:text-[#1E1E1E]"
            />
            <FacebookOutlined
              style={{ fontSize: "1.5375rem" }}
              className="hover:cursor-pointer hover:text-[#1E1E1E]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
