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
        className="menu shadow h-fit flex flex-wrap my-2 justify-evenly"
      >
        <Item>
          <Link to="/">
            <img className="h-30 w-[10rem] " src="Logo.png" alto="" />
          </Link>
        </Item>
        <Item>
          <input
            className=" border-none font-sans  text-xl outline-none text-[#248F59]"
            type="search"
            placeholder="Search Shops..."
          />
        </Item>

        <Item>
          <p className=" flex flex-wrap font-sans font-semibold text-[#248F59]">
            Delivering to:
            <img className="h-2/6 my-auto" src="Location on.png" alt="" />
          </p>
        </Item>
        <Item key="register">
          <Link to="/Signup">
            <button className="h-9 mb-2 w-[7.4375rem] align-middle text-white bg-[#248F59] rounded-lg font-sans uppercase font-semibold">
            <UserAddOutlined className="align-middle" style={{fontSize:"1.1rem"}}/> Sign Up
            </button>
          </Link>
        </Item>

        <Item key="login">
          <Link to="/Login">
            <p className="font-sans  mx-auto text-[#248F59]">
              <LoginOutlined className="align-middle" /> Login
            </p>
          </Link>
        </Item>

        <Item>
          <Link>
            <img src="Account circle.png" alt="" />
          </Link>
        </Item>
        <Item>
          <Link>
            <img src="Shopping cart.png" alt="" />
          </Link>
        </Item>
        <SubMenu title="User">
          <Item key="dashboard" icon={<DashboardTwoTone />}>
            <Link to="/dashboard">Dashboard</Link>
          </Item>
          <Item icon={<LogoutOutlined />}>LogOut</Item>
        </SubMenu>
      </Menu>
    
  );
};

export default Header;
