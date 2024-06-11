// App.jsx
import React from 'react';
import { ChakraProvider, Box, Container, Heading, Text } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import CartPage from './pages/cartpage';
import './App.css';
import Productos from './pages/productos';
import ItemDetail from './components/ItemDetailContainer/ItemDetail';
import { CartProvider } from './contex/CartContext';

const NotFound = () => (
  <Box textAlign="center" py="10">
    <Heading>Página no encontrada</Heading>
    <Text>Lo sentimos, la página que estás buscando no existe.</Text>
  </Box>
);

const App = () => {
  return (
    <ChakraProvider>
      <CartProvider>
        <Router>
          <Box minHeight="100vh" bg="#594747" display="flex" flexDirection="column">
            <Container flex="1" maxW="container.xl" py="8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/productos/:productId" element={<ItemDetail />} />
                <Route path="/cartpage" element={<CartPage />} />
                <Route path="/sector/:sector" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Container>
          </Box>
        </Router>
      </CartProvider>
    </ChakraProvider>
  );
};

export default App;


