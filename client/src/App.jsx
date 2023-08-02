import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/about',
    element: <h1>about page</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
