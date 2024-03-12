import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Home,
  Inbox,
  ProjectsOverview,
  Tasks,
  HomeLayout,
  WorkspacesOverview,
  Project,
  Workspace,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
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
            path: '/projectsOverview/project/:id',
            element: <Project />,
          },
        ],
      },
      {
        path: '/workspacesOverview',
        element: <WorkspacesOverview />,

        children: [
          {
            path: '/workspacesOverview/workspace/:id',
            element: <Workspace />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
