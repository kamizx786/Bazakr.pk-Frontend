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
const { SubMenu, Item } = Menu;

const Header = () => {
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
    
      <Menu
        // onClick={onClick}
        // selectedKeys={[current]}
        mode="horizontal"
        className="menu border-b border-[#D9D9D9] h-fit flex flex-wrap items-center py-3 justify-evenly"
      >
        {/* Logo */}
        <Item>
          <Link to="/">
            <img className="h-30 w-[10rem] " src="Logo.svg" alto="" />
          </Link>
        </Item>

        {/* Search */}
        <Item>
          <input
            className=" border border-[#D9D9D9] font-sans  text-base outline-none h-[3.4375rem] w-[23.4375rem] px-3 rounded-lg text-[#248F59]"
            type="search"
            placeholder="Search..."
          />
        </Item>

        {/* Delivering to */}
        <Item>
          <div className=" flex items-center h-[3.4375rem] font-sans font-semibold text-base text-[#248F59]">
            Delivering to:
            <img className="h-2/6 my-auto" src="location.svg" alt="" />
            <div className="flex">
              <p className="w-[150px] text-ellipsis overflow-hidden text-[#808080] font-normal">Neewan Bazar Ghakkhar, Gujranwala</p>
              <div>
                <img src="down.svg" />
              </div>
            </div>
          </div>

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
    
  );
};

export default Header;
