import { Layout } from "antd";
const { Header } = Layout;
function TopNavigation() {
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
        Header
      </Header>
    </>
  );
}
export default TopNavigation;
