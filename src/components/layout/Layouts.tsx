import { Layout } from 'antd';
import './adminDashboard.scss'
import LeftSideBar from './LeftSideBar';
import TopNavigation from './TopNavigation';
import PageFooter from './PageFooter';
import { ReactNode } from 'react';
const { Content} = Layout;

interface LayoutProps {
  children: ReactNode;
}

function Layouts({ children }: LayoutProps) {
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
            {children}
          </div>
        </Content>
      <PageFooter />
      </Layout>
    </Layout>
  );
};

export default Layouts;