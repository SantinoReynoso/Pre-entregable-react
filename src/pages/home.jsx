import React, { useState } from 'react';
import { Container, Heading, Box, Flex } from '@chakra-ui/react';
import ProductList from '../components/ui/productsList';
import FiltroProductos from '../components/ui/filtroProductos';
import productsData from '../data/productsData'; // Importa los datos de los productos
import NavBar from "../components/NavBar/NavBar";
import CartWidget from "../components/CardWidget/CartWidget";
import ProductDetailPage from "../components/ui/ProductDetailPage"



const Home = ({ cart, setCart }) => {
  // Estado para almacenar los productos filtrados
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para almacenar el producto seleccionado

// Función para filtrar productos por categoría
  const handleFilter = (category) => {
    if (category === 'Todos') {
      setFilteredProducts(productsData);
    } else {
      const filteredProducts = productsData.filter(product => product.sector === category);
      setFilteredProducts(filteredProducts);
    }
  };

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };
  const handleViewDetails = (product) => {
    setSelectedProduct(product); // Establecer el producto seleccionado al hacer clic en "Ver detalles"
  };

  const handleBackToHome = () => {
    setSelectedProduct(null); // Volver a la página principal al hacer clic en "Volver a la página principal"
  };

  return (
    <>
      <NavBar />
      <Container maxW="container.xl" py="8">
        {selectedProduct ? (
          <ProductDetailPage product={selectedProduct} onBack={handleBackToHome} />
        ) : (
          <>
            <Flex justifyContent="space-between" alignItems="center" mb="4">
              <Heading as="h1" size="3" color="#322C2B" letterSpacing="wide">
                La Lenteja online
              </Heading>
              <CartWidget cart={cart} />
            </Flex>
            <Box bg="#E4C59E" py="8" borderRadius="xl" boxShadow="md" mb="8">
              <Heading as="h2" size="xl" color="#322C2B" mb="4" textAlign="center">
                Nuestros Productos
              </Heading>
              <FiltroProductos handleFilter={handleFilter} />
              <ProductList products={filteredProducts} handleAddToCart={handleAddToCart} handleViewDetails={handleViewDetails} />
            </Box>
            <Box bg="#E4C59E" py="12" borderRadius="xl" boxShadow="md" textAlign="center">
              <Heading as="h2" size="lg" color="#322C2B" mb="4">¡Contáctanos!</Heading>
              <p>Estamos aquí para ayudarte. ¡No dudes en ponerte en contacto con nosotros!</p>
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default Home;