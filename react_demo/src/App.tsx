import React, { Suspense } from 'react';
import '@/App.css';
import '@assets/styles/common.less';
import { useRoutes } from 'react-router-dom';
import routeObj from '@/routers';
import Navbar from '@/components/Navbar';
import { Content, Footer } from 'antd/es/layout/layout';
import { Breadcrumb, theme } from 'antd';

function App() {
  const element = useRoutes(routeObj);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="App">
      {/* navbar */}
      <Navbar routeObj={routeObj}></Navbar>
      {/* 路由链接 */}
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        {/* 内容展示 */}
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          <Suspense fallback={<div>loading</div>}>{element}</Suspense>
        </div>
      </Content>
      <Footer className="footer" style={{ textAlign: 'center' }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </div>
  );
}

export default App;
