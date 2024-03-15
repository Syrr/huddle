import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Home,
  Inbox,
  ProjectsOverview,
  Tasks,
  HomeLayout,
  WorkspacesOverview,
  SingleProject,
  Workspace,
  Login,
  ProtectedRoute,
  Landing,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <HomeLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/tasks',
        element: <Tasks />,
      },
      {
        path: '/inbox',
        element: <Inbox />,
      },
      {
        path: '/projectsOverview',
        element: <ProjectsOverview />,
        children: [
          {
            path: ':id',
            element: <SingleProject />,
          },
        ],
      },
      {
        path: '/workspacesOverview',
        element: <WorkspacesOverview />,

        children: [
          {
            path: ':id',
            element: <Workspace />,
          },
        ],
      },
    ],
  },
  {
    path: '/landing',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
