import { Avatar, Dropdown, Layout, Menu } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { clearAccessToken } from "../../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
const { Header } = Layout;


function TopNavigation() {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }


const handleLogout= () => {
  const accessToken = localStorage.getItem('accessToken');
  dispatch(clearAccessToken())

}
   const menu = (
     <Menu>
       <Menu.Item key="1" onClick={handleLogout} icon={<LogoutOutlined />}>
         Logout
       </Menu.Item>
     </Menu>
   );
   
  return (
    <>
      <Header
        className="site-layout-background"
        style={{
          padding: "0px 0px 0px 0px",
          marginTop: "-40px",
          overflow: "auto",
          position: "fixed",
          left: 0,
          background: "#213547",
          color: "white",
          width: "100%",
        }}
      >
        <div style={{ float: "right", marginRight: "24px" }}>
          <Dropdown overlay={menu}>
            <Avatar size="small" icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </Header>
    </>
  );
}
export default TopNavigation;
