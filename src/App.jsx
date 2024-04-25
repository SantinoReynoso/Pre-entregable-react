import React, { useState } from 'react';
import { ChakraProvider, Box, Container, Heading, Flex } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import ProductList from './components/ui/productsList';
import CartWidget from './components/CardWidget/CartWidget';
import NavBar from './components/NavBar/NavBar';
import FiltroProductos from './components/ui/filtroProductos';
import 'bootstrap/dist/css/bootstrap.min.css';

// Datos de los productos
const productsData = [
  {
    "id": 1,
    "name": "Aceite de coco orgánico",
    "price": "$10",
    "image": "/foto.jpg" // Ruta relativa a la carpeta `public`
  },
  {
    "id": 2,
    "name": "Quinoa integral",
    "price": "$20",
    "image": "/foto.jpg" // Ruta relativa a la carpeta `public`
  },
  {
    "id": 3,
    "name": "Semillas de chía",
    "price": "$8",
    "image": "/foto.jpg" // Ruta relativa a la carpeta `public`
  },
  {
    "id": 4,
    "name": "Frutos secos surtidos",
    "price": "$15",
    "image": "/foto.jpg" // Ruta relativa a la carpeta `public`
  },
  {
    "id": 5,
    "name": "Harina de almendras",
    "price": "$12",
    "image": "/foto.jpg" // Ruta relativa a la carpeta `public`
  },
  {
    "id": 6,
    "name": "Miel de abeja pura",
    "price": "$18",
    "image": "/foto.jpg" // Ruta relativa a la carpeta `public`
  },
  {
    "id": 7,
    "name": "Cúrcuma en polvo",
    "price": "$7",
    "image": "/foto.jpg" // Ruta relativa a la carpeta `public`
  },
  {
    "id": 8,
    "name": "Proteína de suero de leche",
    "price": "$25",
    "image": "/foto.jpg" // Ruta relativa a la carpeta `public`
  },
  {
    "id": 9,
    "name": "Suplemento de omega-3",
    "price": "$30",
    "image": "/foto.jpg" // Ruta relativa a la carpeta `public`
  },
  {
    "id": 10,
    "name": "Vinagre de manzana orgánico",
    "price": "$5",
    "image": "/foto.jpg" // Ruta relativa a la carpeta `public`
  },
  {
    "id": 11,
    "name": "Aceite de oliva virgen extra",
    "price": "$8",
    "image": "/foto.jpg" // Ruta relativa a la carpeta `public`
  },
  {
    "id": 12,
    "name": "Arroz integral",
    "price": "$6",
    "image": "/foto.jpg" // Ruta relativa a la carpeta `public`
  }
];


const App = () => {
  // Estado para almacenar el carrito de compras
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito de compras
  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  return (
    <ChakraProvider>
      {/* Contenedor principal */}
      <Box bg="#AF8260" minHeight="100vh" height="100%">
        <Container maxW="container.xl" py="8">
          {/* Encabezado */}
          <Flex direction="row">
            {/* Barra de navegación */}
            <NavBar />
            <Box flex="1" />
            {/* Widget del carrito */}
            <Flex align="center">
              <CartWidget cart={cart} />
            </Flex>
          </Flex>
          {/* Título principal */}
          <Box mb="100">
            <Heading as="h1" size="3" color="#322C2B" textAlign="center" letterSpacing="wide">
              La Lenteja online
            </Heading>
          </Box>
          {/* Sección de productos */}
          <section>
            <Box bg="#E4C59E" py="8" borderRadius="xl" boxShadow="md" mb="8">
              <Heading as="h2" size="xl" color="#322C2B" mb="4" textAlign="center">
                Nuestros Productos
              </Heading>
              {/* Lista de productos */}
              <ProductList products={productsData} handleAddToCart={handleAddToCart} />
            </Box>
          </section>
          {/* Sección de contacto */}
          <section>
            <Box bg="#E4C59E" py="12" borderRadius="xl" boxShadow="md">
              <Box maxW="container.md" mx="auto" textAlign="center">
                <Heading as="h2" size="lg" color="#322C2B" mb="4">¡Contáctanos!</Heading>
                <p>Estamos aquí para ayudarte. ¡No dudes en ponerte en contacto con nosotros!</p>
              </Box>
            </Box>
          </section>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
