import React, { Suspense } from 'react';
import './App.css';
import { useRoutes, Link } from 'react-router-dom';
import routers from '@/routers';

function App() {
  const element = useRoutes(routers);
  return (
    <div className="App">
      {/* 路由链接 */}
      <Link to="home">home页面</Link>
      <Link to="about">about页面</Link>
      <Suspense fallback={<div>loading</div>}>{element}</Suspense>
    </div>
  );
}

export default App;
