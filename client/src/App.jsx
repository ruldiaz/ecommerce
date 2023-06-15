import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';

function AppRoutes() {
  let routes = useRoutes([
    { path: '/products', element: <ProductsScreen />},
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
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
