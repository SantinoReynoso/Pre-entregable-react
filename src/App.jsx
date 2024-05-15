import React, { useState } from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Productos from './pages/productos';
import CartPage from './pages/cartpage';

// Importa useParams de react-router-dom
import { useParams } from 'react-router-dom';

const App = () => {
  const [cart, setCart] = useState([]);

  //no me sale useparammms
  // Definir un componente que use useParams para acceder a los parámetros de la URL
  const ProductoDetalle = () => {
    const { id } = useParams();
    return <div>Detalles del producto con ID: {id}</div>;
  };

  return (
    <ChakraProvider>
      <Router>
        <Box minHeight="100vh" bg="#AF8260" display="flex" flexDirection="column">
          <Container flex="1" maxW="container.xl" py="8">
            <Routes>
              <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/productos/:id" element={<ProductoDetalle />} />
              <Route path="/cartpage" element={<CartPage cart={cart} setCart={setCart} />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;


