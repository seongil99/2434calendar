import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  RootRoute,
  Route,
  Outlet,
  createRouter,
} from '@tanstack/react-router';
import Home from './pages/Home';
import './globals.css';

function Root() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

const rootRoute = new RootRoute({ component: Root });

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const routeTree = rootRoute.addChildren([indexRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
