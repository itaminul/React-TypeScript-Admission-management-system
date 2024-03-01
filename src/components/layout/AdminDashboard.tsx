import { Layout } from 'antd';
import './adminDashboard.scss'
import LeftSideBar from './LeftSideBar';
import TopNavigation from './TopNavigation';
import PageFooter from './PageFooter';
const { Content} = Layout;

function AdminDashbord() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <LeftSideBar />
      <Layout className="site-layout">
      <TopNavigation />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            Content
          </div>
        </Content>
      <PageFooter />
      </Layout>
    </Layout>
  );
};

export default AdminDashbord;