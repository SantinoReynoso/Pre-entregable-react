// src/App.js
import React from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Productos from './pages/productos';
import CartPage from './pages/cartpage';
import './App.css';
import ProductDetailPage from './components/ui/ProductDetailPage';
import { CartProvider } from './components/contex/CartContext';

const App = () => {
  return (
    <ChakraProvider>
      <CartProvider>
        <Router>
          <Box minHeight="100vh" bg="#AF8260" display="flex" flexDirection="column">
            <Container flex="1" maxW="container.xl" py="8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/productos/:id" element={<ProductDetailPage />} />
                <Route path="/cartpage" element={<CartPage />} />
              </Routes>
            </Container>
          </Box>
        </Router>
      </CartProvider>
    </ChakraProvider>
  );
};

export default App;
