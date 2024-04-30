import React, { useState } from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Productos from './pages/productos';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <ChakraProvider>
      <Router>
        <Box minHeight="100vh" bg="#AF8260" display="flex" flexDirection="column">
          <Container flex="1" maxW="container.xl" py="8">
            <Routes>
              <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
              <Route path="/productos" element={<Productos />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;

