import Home from './components/Home';

import Root from './components/Root';

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      }
    ]
  }
];

export default routes;
