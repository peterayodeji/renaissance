import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Women from './pages/Women';
import Men from './pages/Men';
import PageNotFound from './ui/PageNotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout />}>
        <Route index element={<Women />} />
        <Route path="women" element={<Women />} />
        <Route path="men" element={<Men />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
