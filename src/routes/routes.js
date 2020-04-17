import React from 'react';
import { AppGrid } from '../components/sample-test-code/grid';
import { CardPage } from '../components/paypal-example';
import { D3Test1 } from '../components/D3/test/tes.t-1';
import { SimpleForceGraph, ForceReact } from '../components/D3';
import { ReactQueryEx } from '../components/ReactQuery';
import D3GraphContainer from '../containers/D3Graph';
import { FormValidator } from '../components/Form-Validator';

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
    path: '/D3-simple-force',
    component: SimpleForceGraph,
    data: { title: 'D3 Simple Force SVG Graph' },
  },
  {
    path: '/D3-simple-force-react',
    component: ForceReact,
    data: { title: 'D3 Simple Force React Graph' },
  },
  {
    path: '/D3-simple-force-react-with-api',
    component: D3GraphContainer,
    data: { title: 'D3 Force Graph with API' },
  },
  {
    path: '/react-query',
    component: ReactQueryEx,
    data: { title: 'React Query Builder' },
  },
  {
    path: '/form-validator',
    component: FormValidator,
    data: { title: 'Form Validator' },
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
