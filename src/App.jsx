import React, { useState } from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Productos from './pages/productos';

// Importa useParams de react-router-dom
import { useParams } from 'react-router-dom';

const App = () => {
  const [cart, setCart] = useState([]);

  // Definir un componente que use useParams para acceder a los parámetros de la URL
  const ProductoDetalle = () => {
    // Obtiene los parámetros de la URL
    const { id } = useParams();

    // Aquí puedes usar el ID para buscar y mostrar detalles del producto
    // Por ejemplo, puedes buscar el producto con el ID en tu base de datos y mostrar su información
    return <div>Detalles del producto con ID: {id}</div>;
  };

  return (
    <ChakraProvider>
      <Router>
        <Box minHeight="100vh" bg="#AF8260" display="flex" flexDirection="column">
          <Container flex="1" maxW="container.xl" py="8">
            <Routes>
              <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
              {/* Cambia la ruta de /productos a /productos/:id */}
              <Route path="/productos" element={<Productos />} />
              {/* Agrega una nueva ruta para mostrar detalles del producto */}
              <Route path="/productos/:id" element={<ProductoDetalle />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;


