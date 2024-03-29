import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import Footer from './components/Footer';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import ProfileScreen from './screens/ProfileScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import YourOrdersScreen from './screens/YourOrdersScreen';
import AdminConsoleScreen from './screens/AdminConsoleScreen';
import OrderSuccessScreen from './screens/OrderSuccessScreen';

function AppRoutes() {
  let routes = useRoutes([
    { path: '/', element: <LandingScreen />},
    { path: '/products', element: <ProductsScreen />},
    { path: '/product/:id', element: <ProductScreen />},
    { path: '/cart', element: <CartScreen />},
    { path: '/login', element: <LoginScreen />},
    { path: '/registration', element: <RegistrationScreen />},
    { path: '/profile', element: <ProfileScreen />},
    { path: '/checkout', element: <CheckoutScreen />},
    { path: '/your-orders', element: <YourOrdersScreen />},
    { path: '/admin-console', element: <AdminConsoleScreen />},
    { path: '/order-success', element: <OrderSuccessScreen />},
  ])
  return routes;
}

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
          <AppRoutes />
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
