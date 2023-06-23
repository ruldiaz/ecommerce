import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import Footer from './components/Footer';
import LandingScreen from './screens/LandingScreen';

function AppRoutes() {
  let routes = useRoutes([
    { path: '/', element: <LandingScreen />},
    { path: '/products', element: <ProductsScreen />},
    { path: '/product/:id', element: <ProductScreen />},
    { path: '/cart', element: <CartScreen />},
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
