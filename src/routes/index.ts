import { lazy } from 'react';
import NotFound from '@/pages/not-found';

const routes = [
  {
    path: '/',
    element: lazy(() => import('@/pages/home')),
  },
  {
    path: '*',
    element: NotFound,
  },
];

export default routes;
