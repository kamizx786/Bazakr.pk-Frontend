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
    <footer className="h-fit w-auto px-5 py-5 flex flex-row shadow-inner justify-between border">
      <div className="flex flex-col">
        <img src="LogoF.png" alt="" />
        <p className="font-sans text-xl font-normal">
          <CopyrightOutlined className="align-middle" /> 2023
        </p>
      </div>
      <div className=" flex flex-row w-fit">
        <div className=" flex flex-row  font-normal font-sans text-[#00000080]">
          <p className="flex flex-row px-2 ">
            Privacy Policy
            <br />
            Terms & Condition
            <br />
            Security
            <br />
            Refunds
            <br />
          </p>
          <p className="flex flex-row px-2 ">
            Cities
            <br />
            Popular Shops
            <br />
            Popular Products
            <br />
            Popular Sellers
            <br />
          </p>
        </div>
        
        <div className="flex  flex-col align-middle justify-around">
          <InstagramOutlined  style={{fontSize:"1.5375rem"}}/>
          <YoutubeOutlined style={{fontSize:"1.5375rem"}}/>
          <TwitterOutlined style={{fontSize:"1.5375rem"}}/>
          <FacebookOutlined style={{fontSize:"1.5375rem"}}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

