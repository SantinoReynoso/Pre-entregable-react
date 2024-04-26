import React, { useState } from 'react';
import { ChakraProvider, Box, Container, Heading, Flex } from '@chakra-ui/react';
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
    "image": "/foto.jpg",
    "sector": "Dietetica"
  },
  {
    "id": 2,
    "name": "Quinoa integral",
    "price": "$20",
    "image": "/foto.jpg",
    "sector": "Semillas"
  },
  {
    "id": 3,
    "name": "Semillas de chía",
    "price": "$8",
    "image": "/foto.jpg",
    "sector": "Semillas"
  },
  {
    "id": 4,
    "name": "Frutos secos surtidos",
    "price": "$15",
    "image": "/foto.jpg",
    "sector": "Dietetica"
  },
  {
    "id": 5,
    "name": "Harina de almendras",
    "price": "$12",
    "image": "/foto.jpg",
    "sector": "Dietetica"
  },
  {
    "id": 6,
    "name": "Miel de abeja pura",
    "price": "$18",
    "image": "/foto.jpg",
    "sector": "Dietetica"
  },
  {
    "id": 7,
    "name": "Cúrcuma en polvo",
    "price": "$7",
    "image": "/foto.jpg",
    "sector": "Dietetica"
  },
  {
    "id": 8,
    "name": "Proteína de suero de leche",
    "price": "$25",
    "image": "/foto.jpg",
    "sector": "Suplementos"
  },
  {
    "id": 9,
    "name": "Suplemento de omega-3",
    "price": "$30",
    "image": "/foto.jpg",
    "sector": "Suplementos"
  },
  {
    "id": 10,
    "name": "Vinagre de manzana orgánico",
    "price": "$5",
    "image": "/foto.jpg",
    "sector": "Dietetica"
  },
  {
    "id": 11,
    "name": "Aceite de oliva virgen extra",
    "price": "$8",
    "image": "/foto.jpg",
    "sector": "Dietetica"
  },
  {
    "id": 12,
    "name": "Arroz integral",
    "price": "$6",
    "image": "/foto.jpg",
    "sector": "Dietetica"
  }  
];
// Función para filtrar productos según el sector
const filterProductsBySector = (productsData, sector) => {
  if (sector === 'Todos') {
    // Si se selecciona 'Todos', retornar todos los productos
    return productsData;
  } else {
    // Filtrar los productos por el sector seleccionado
    return productsData.filter(product => product.sector === sector);
  }
};

const App = () => {
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  const handleFilter = (sector) => {
    const filteredProducts = filterProductsBySector(productsData, sector);
    setFilteredProducts(filteredProducts);
  };

  return (
    <ChakraProvider>
      <Box minHeight="100vh" bg="#AF8260">
        <Container maxW="container.xl" py="8">
          <Flex justifyContent="space-between" alignItems="center" mb="8">
            <NavBar />
            <CartWidget cart={cart} />
          </Flex>
          <Heading as="h1" size="3" color="#322C2B" textAlign="center" letterSpacing="wide" mb="8">
            La Lenteja online
          </Heading>
          <Box bg="#E4C59E" py="8" borderRadius="xl" boxShadow="md" mb="8">
            <Heading as="h2" size="xl" color="#322C2B" mb="4" textAlign="center">
              Nuestros Productos
            </Heading>
            <FiltroProductos handleFilter={handleFilter} />
            <ProductList products={filteredProducts} handleAddToCart={handleAddToCart} setSelectedProduct={setSelectedProduct} />
          </Box>
          <Box bg="#E4C59E" py="12" borderRadius="xl" boxShadow="md" textAlign="center">
            <Heading as="h2" size="lg" color="#322C2B" mb="4">¡Contáctanos!</Heading>
            <p>Estamos aquí para ayudarte. ¡No dudes en ponerte en contacto con nosotros!</p>
          </Box>
        </Container>
      </Box>
    </ChakraProvider>
  );  
};

export default App;