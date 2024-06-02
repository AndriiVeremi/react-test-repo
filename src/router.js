import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RecipePage = lazy(() => import('./pages/RecipePage/RecipePage'));
const AddRecipePage = lazy(() => import('./pages/AddRecipePage/AddRecipePage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));

export const ROUTES = {
  HOME: '/',
  RECIPE: '/recipe/:id',
  RECIPE_ADD: '/recipe/add',
  USER: '/user/:id',
  REGISTER: '/register',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

const routes = [
  {
    path: ROUTES.HOME,
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.RECIPE,
        element: <RecipePage />,
      },
      {
        path: ROUTES.RECIPE_ADD,
        element: (
          <PrivateRoute
            redirectTo={ROUTES.RECIPE_ADD}
            component={AddRecipePage}
          />
        ),
      },
      {
        path: ROUTES.USER,
        element: <PrivateRoute redirectTo={ROUTES.USER} component={UserPage} />,
      },

      {
        path: ROUTES.REGISTER,
        element: (
          <PrivateRoute redirectTo={ROUTES.REGISTER} component={UserPage} />
        ),
      },
      {
        path: ROUTES.LOGIN,
        element: (
          <PrivateRoute redirectTo={ROUTES.LOGIN} component={UserPage} />
        ),
      },
      {
        path: ROUTES.LOGOUT,
        element: (
          <PrivateRoute redirectTo={ROUTES.LOGOUT} component={UserPage} />
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: '/react-test-repo' });

export default router;
