import { Navigate, RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/about'));

const router: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="./home"></Navigate>,
    index: true,
  },
  {
    path: '/home',
    element: <Home></Home>,
    index: true,
    id: '首页',
  },
  {
    path: '/about',
    element: <About></About>,
    index: true,
    id: '关于',
  },
];

export default router;
