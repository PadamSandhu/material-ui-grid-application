import React from 'react';
import { AppGrid } from '../components/sample-test-code/grid';
import { CardPage } from '../components/paypal-example';
import { D3Test1 } from '../components/D3/test/tes.t-1';

export const Routes = [
  {
    path: '/',
    exact: true,
    component: CardPage,
    data: { title: 'Example Grid' },
  },
  {
    path: '/grid',
    component: AppGrid,
    data: { title: 'Grid margins' },
  },
  {
    path: '/D3-test',
    component: D3Test1,
    data: { title: 'D3 Example' },
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: () => <div>404 Not found </div>,
  },
];
