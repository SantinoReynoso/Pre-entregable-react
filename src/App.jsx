import React, { useState } from 'react';
import { ChakraProvider, Box, Container, Heading, Flex, IconButton, Badge } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/products/products';

const App = () => {
  // Lista de productos para la dietética online
  const products = [
    { id: 1, name: 'Aceite de coco orgánico', price: '$10' },
    { id: 2, name: 'Quinoa integral', price: '$20' },
    { id: 3, name: 'Semillas de chía', price: '$8' },
    { id: 4, name: 'Frutos secos surtidos', price: '$15' },
    { id: 5, name: 'Harina de almendras', price: '$12' },
    { id: 6, name: 'Miel de abeja pura', price: '$18' },
    { id: 7, name: 'Cúrcuma en polvo', price: '$7' },
    { id: 8, name: 'Proteína de suero de leche', price: '$25' },
    { id: 9, name: 'Suplemento de omega-3', price: '$30' },
    { id: 10, name: 'Vinagre de manzana orgánico', price: '$5' },
    { id: 11, name: 'Aceite de oliva virgen extra', price: '$8' },
  ];

  // Estado para almacenar los productos en el carrito
  const [cart, setCart] = useState([]);

  // Función para manejar la adición de un producto al carrito
  const handleAddToCart = (product) => {
    const updatedCart = [...cart];
    updatedCart.push(product);
    setCart(updatedCart);
  };

  return (
    <ChakraProvider>
      {/* Contenedor principal con color de fondo gris oscuro */}
      <Box bg="#333" minHeight="100vh" height="100%">
        {/* Barra de navegación */}
        <NavBar />
        {/* Contenedor de contenido */}
        <Container maxW="container.xl" py="8">
          {/* Título principal */}
          <Box mb="8">
            <Heading as="h1" size="2xl" color="#fff" textAlign="center" letterSpacing="wide">
              Mi Tienda
            </Heading>
          </Box>
          {/* Icono de carrito de compras en el borde superior derecho */}
          <Flex justify="flex-end" mb="4">
            <IconButton icon={<FaShoppingCart />} colorScheme="blue" variant="outline" aria-label="Carrito de compras" />
            {/* Hardcodeado del número de productos en el carrito */}
            <Badge colorScheme="red" borderRadius="full" px="2" ml="2">
              {cart.length}
            </Badge>
          </Flex>
          {/* Sección de productos */}
          <section>
            <Box bg="#fff" py="8" borderRadius="xl" boxShadow="md" mb="8">
              {/* Título de la sección de productos */}
              <Heading as="h2" size="xl" color="#333" mb="4" textAlign="center">
                Nuestros Productos
              </Heading>
              {/* Contenido de los productos */}
              <ProductList products={products} handleAddToCart={handleAddToCart} />
            </Box>
          </section>
          {/* Sección de contacto */}
          <section>
            <Box bg="#f9fafb" py="12" borderRadius="xl" boxShadow="md">
              <Box maxW="container.md" mx="auto" textAlign="center">
                <Heading as="h2" size="lg" color="#333" mb="4">¡Contáctanos!</Heading>
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

