import { lazy } from 'react';
import NotFound from '@/pages/not-found';

const routes = [
  {
    path: '/webpack-react-template/',
    element: lazy(() => import('@/pages/home')),
  },
  {
    path: '/webpack-react-template/*',
    element: NotFound,
  },
];

export default routes;
