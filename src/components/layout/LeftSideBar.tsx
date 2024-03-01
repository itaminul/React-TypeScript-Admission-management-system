import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

function LeftSideBar() {
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
      >
        <div className="logo">Dashboard</div>
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
