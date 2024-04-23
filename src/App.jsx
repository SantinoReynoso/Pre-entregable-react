import React, { useState } from 'react';
import { ChakraProvider, Box, Container, Heading, Flex } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import ProductList from './components/ui/products';
import CartWidget from './components/CardWidget/CartWidget';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

// Datos de los productos
const productsData = [
  {
    "id": 1,
    "name": "Aceite de coco orgánico",
    "price": "$10",
    "image": "url/a1.jpg"
  },
  {
    "id": 2,
    "name": "Quinoa integral",
    "price": "$20",
    "image": "url/a2.jpg"
  },
  {
    "id": 3,
    "name": "Semillas de chía",
    "price": "$8",
    "image": "url/a3.jpg"
  },
  {
    "id": 4,
    "name": "Frutos secos surtidos",
    "price": "$15",
    "image": "url/a4.jpg"
  },
  {
    "id": 5,
    "name": "Harina de almendras",
    "price": "$12",
    "image": "url/a5.jpg"
  },
  {
    "id": 6,
    "name": "Miel de abeja pura",
    "price": "$18",
    "image": "url/a6.jpg"
  },
  {
    "id": 7,
    "name": "Cúrcuma en polvo",
    "price": "$7",
    "image": "url/a7.jpg"
  },
  {
    "id": 8,
    "name": "Proteína de suero de leche",
    "price": "$25",
    "image": "url/a8.jpg"
  },
  {
    "id": 9,
    "name": "Suplemento de omega-3",
    "price": "$30",
    "image": "url/a9.jpg"
  },
  {
    "id": 10,
    "name": "Vinagre de manzana orgánico",
    "price": "$5",
    "image": "url/a10.jpg"
  },
  {
    "id": 11,
    "name": "Aceite de oliva virgen extra",
    "price": "$8",
    "image": "url/a11.jpg"
  },
  // Agrega el resto de los productos aquí
  {
    "id": 12,
    "name": "Arroz integral",
    "price": "$6",
    "image": "url/a12.jpg"
  },
  {
    "id": 13,
    "name": "Aguacates orgánicos",
    "price": "$3",
    "image": "url/a13.jpg"
  },
  {
    "id": 14,
    "name": "Leche de almendras",
    "price": "$4",
    "image": "url/a14.jpg"
  },
  {
    "id": 15,
    "name": "Pasta de trigo integral",
    "price": "$2",
    "image": "url/a15.jpg"
  },
  {
    "id": 16,
    "name": "Yogur griego natural",
    "price": "$4",
    "image": "url/a16.jpg"
  },
  {
    "id": 17,
    "name": "Bayas mixtas congeladas",
    "price": "$8",
    "image": "url/a17.jpg"
  },
  {
    "id": 18,
    "name": "Pan integral",
    "price": "$3",
    "image": "url/a18.jpg"
  },
  {
    "id": 19,
    "name": "Mantequilla de maní natural",
    "price": "$5",
    "image": "url/a19.jpg"
  },
  {
    "id": 20,
    "name": "Espinacas frescas",
    "price": "$2",
    "image": "url/a20.jpg"
  },
  {
    "id": 21,
    "name": "Huevos orgánicos",
    "price": "$4",
    "image": "url/a21.jpg"
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
      <Box bg="#333" minHeight="100vh" height="100%">
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
          <Box mb="8">
            <Heading as="h1" size="2xl" color="#fff" textAlign="center" letterSpacing="wide">
              Mi Tienda
            </Heading>
          </Box>
          {/* Sección de productos */}
          <section>
            <Box bg="#fff" py="8" borderRadius="xl" boxShadow="md" mb="8">
              <Heading as="h2" size="xl" color="#333" mb="4" textAlign="center">
                Nuestros Productos
              </Heading>
              {/* Lista de productos */}
              <ProductList products={productsData} handleAddToCart={handleAddToCart} />
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
