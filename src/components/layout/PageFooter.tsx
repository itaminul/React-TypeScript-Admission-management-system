import { Layout } from "antd";
const { Footer } = Layout;

function PageFooter() {
  return (
    <>
      <Footer
        style={{
          position: "fixed",
          width: "100%",
          bottom: 0,
          textAlign: "center",
          backgroundColor: "#f0f2f5",
          borderTop: "1px solid #e8e8e8",
          marginLeft: "-717px",
          overflow: "auto",
        }}
      >
        Admission ©2024 Created by Admission Group
      </Footer>
    </>
  );
}

export default PageFooter;
