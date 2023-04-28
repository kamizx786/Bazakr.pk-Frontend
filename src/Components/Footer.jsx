import React from "react";
//import { Link } from "react-router-dom";
import {
  CopyrightOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const { SubMenu, Item } = Menu;

const Footer = () => {
  // const [current, setCurrent] = useState("home");
  // let dispatch = useDispatch();
  // let {user} = useSelector((state)=>({...state}));
  // let navigate = useNavigate();
  // const onClick = (e) => {
  //   setCurrent(e.key);
  // };
  // const logout = () => {
  //   firebase.auth().signOut();
  //   dispatch({
  //     type: "LOG_OUT",
  //     payload: null,
  //   });
  //   navigate("/login");
  // };
  return (
    <footer className="h-fit w-auto px-5 py-5 flex flex-col gap-8 md:flex-row shadow-inner justify-between border">
      {/* COPY RIGHTS & LOGO */}
      <div className="flex flex-col">
        <img src="LogoF.svg" alt="" className="w-[150px] hover:cursor-pointer" />
        <p className="font-sans text-xl font-normal text-[#00000080]">
          <CopyrightOutlined className="align-middle" /> 2023
        </p>
      </div>

      {/* LINKS */}
      <div className=" flex flex-row w-fit">
        <div className=" flex flex-wrap md:flex-row gap-10 md:gap-20 font-normal font-sans text-[#00000080]">
          <ul className="text-base">
            <li className="hover:cursor-pointer hover:text-[#1E1E1E]">Privacy Policy</li>
            <li className="hover:cursor-pointer hover:text-[#1E1E1E]">Terms & Condition</li>
            <li className="hover:cursor-pointer hover:text-[#1E1E1E]">Security</li>
            <li className="hover:cursor-pointer hover:text-[#1E1E1E]">Refunds</li>
          </ul>

          <ul className="text-base">
            <li className="hover:cursor-pointer hover:text-[#1E1E1E]">Cities</li>
            <li className="hover:cursor-pointer hover:text-[#1E1E1E]">Popular Sellers</li>
            <li className="hover:cursor-pointer hover:text-[#1E1E1E]">Popular Shops</li>
            <li className="hover:cursor-pointer hover:text-[#1E1E1E]">Popular Products</li>
          </ul>

          <div className="flex flex-row md:flex-col gap-3 align-middle justify-around">
            <InstagramOutlined  style={{fontSize:"1.5375rem"}} className="hover:cursor-pointer hover:text-[#1E1E1E]" />
            <YoutubeOutlined style={{fontSize:"1.5375rem"}} className="hover:cursor-pointer hover:text-[#1E1E1E]" />
            <TwitterOutlined style={{fontSize:"1.5375rem"}} className="hover:cursor-pointer hover:text-[#1E1E1E]" />
            <FacebookOutlined style={{fontSize:"1.5375rem"}} className="hover:cursor-pointer hover:text-[#1E1E1E]" />
          </div>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;

