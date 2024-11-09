import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Women from './pages/Women';
import Men from './pages/Men';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './features/cart/Cart';
import SignIn from './features/auth/SignIn';
import SignUp from './features/auth/SignUp';
import ResetPassword from './features/auth/ResetPassword';
import CheckoutR from './features/checkout/CheckoutR';
import PageNotFound from './pages/PageNotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 0,
      // staleTime: 60 * 1000, // 1min
      staleTime: 60 * 30000, // 30min
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout />}>
        <Route index element={<Women />} />
        <Route path="women" element={<Women />} />
        <Route path="men" element={<Men />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:productId" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="account/sign-in" element={<SignIn />} />
        <Route path="account/register" element={<SignUp />} />
        <Route path="account/reset-password" element={<ResetPassword />} />
        <Route path="/checkout-r" element={<CheckoutR />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
