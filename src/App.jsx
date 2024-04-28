import React, { useState } from 'react';
import { ChakraProvider, Box, Container, Heading, Flex } from '@chakra-ui/react';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <ChakraProvider>
      <Box minHeight="100vh" bg="#AF8260" display="flex" flexDirection="column">
        <Container flex="1" maxW="container.xl" py="8">
          {/* Renderiza el componente Home y pasa el estado del carrito y la función para actualizarlo como props */}
          <Home cart={cart} setCart={setCart} />
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
