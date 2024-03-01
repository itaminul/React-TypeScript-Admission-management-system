import { Button, Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const { Sider } = Layout;

function LeftSideBar() {
    const [collapsed, setCollapsed] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);
  return (
    <>
      <Sider
        trigger={null}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          marginTop: "20px",
        }}
        collapsible
        collapsed={collapsed}
      >
        {/* <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
            marginRight: "1350px",
          }}
        /> */}
        <div className="logo" style={{ color: "white", paddingBottom: "40px" }}>
          Dashboard
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            Option 3
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
export default LeftSideBar;
