import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const { SubMenu, Item } = Menu;

const SideBar = () => {
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
      mode="vertical"
      className="menu shadow overflow-x-scroll fixed h-screen bg-[#248F59]  w-[4.275rem] flex flex-wrap py-2 justify-evenly"
    >
      <Item>
        <Link to="#">
          <img src="../Dashboard/blogo.png" alto="" />
        </Link>
      </Item>
      <Item>
        <Link to="#">
          <img src="../Dashboard/PIE.png" alto="" />
        </Link>
      </Item>
      <Item>
        <Link to="#">
          <img src="../Dashboard/Payments.png" alto="" />
        </Link>
      </Item>
      <Item>
        <Link to="#">
          <img src="../Dashboard/Message.png" alto="" />
        </Link>
      </Item>
      <Item>
        <Link to="#">
          <img src="../Dashboard/Setting.png" alto="" />
        </Link>
      </Item>
      <Item>
        <Link to="#">
          <img src="../Dashboard/Account.png" alto="" />
        </Link>
      </Item>
      <Item>
        <Link to="#">
          <img src="../Dashboard/Logout.png" alto="" />
        </Link>
      </Item>
    </Menu>
  );
};

export default SideBar;
