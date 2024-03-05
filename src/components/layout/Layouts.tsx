import { Layout } from 'antd';
import './adminDashboard.scss'
import LeftSideBar from './LeftSideBar';
import TopNavigation from './TopNavigation';
import PageFooter from './PageFooter';
import { ReactNode } from 'react';
import Breadcrumbs from './Breadcrumbs';
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
        <div style={{width: '200px', height:'30px', marginTop: '30px', marginLeft: '-700px', position:'fixed'}}>
        <span style={{fontWeight: 'bold', fontSize: '22px'}}>
        <Breadcrumbs />
        </span>
        </div>
        <Content style={{ margin: "0 0px" }}>
          <div
            className="site-layout-background"
            style={{
              padding: "50px 0px 0px 0px",
              minHeight: 360,
              width: "160vh",
              marginLeft: "-700px",
            }}
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