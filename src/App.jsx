// App.js
import React from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import CartPage from './pages/cartpage';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/contex/CartContext';

const App = () => {
  return (
    <ChakraProvider>
      <CartProvider>
        <Router>
          <Box minHeight="100vh" bg="#594747" display="flex" flexDirection="column">
            <Container flex="1" maxW="container.xl" py="8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<ItemListContainer />} />
                <Route path="/productos/:productId" element={<ItemDetailContainer />} />
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

