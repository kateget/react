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
  },
  {
    path: '/about',
    element: <About></About>,
    index: true,
  },
];

export default router;
