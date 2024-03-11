import { Button, Layout, Menu } from "antd";
import {Link} from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MailOutlined
} from "@ant-design/icons";
import { useState } from "react";
import SubMenu from "antd/es/menu/SubMenu";
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
          <SubMenu key="sub1" icon={<MailOutlined />} title="Setup">
            <Link to="/department-setup">
              <Menu.Item key="1">Department</Menu.Item>
            </Link>
            <Link to="/designation-setup">
              <Menu.Item key="2">Designation</Menu.Item>
            </Link>
          </SubMenu>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Student">
            <Link to="/student-info">
              <Menu.Item key="2">Student Setup</Menu.Item>
            </Link>
          </SubMenu>

          <Menu.Item key="3" icon={<VideoCameraOutlined />}>
            Option 2
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
export default LeftSideBar;
