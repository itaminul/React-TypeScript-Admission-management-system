import { Avatar, Dropdown, Layout, Menu } from "antd";
import {
   MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import React from "react";
const { Header } = Layout;
function TopNavigation() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }
const handleLogout= () => {

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
