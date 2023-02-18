import { Navigate, RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home'));

const router: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="./home"></Navigate>,
    index: true,
  },
  {
    path: '/',
    element: <Home></Home>,
    index: true,
  },
];

export default router;
