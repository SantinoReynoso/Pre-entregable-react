import React, { useState } from 'react';
import { Container, Heading, Box, Flex } from '@chakra-ui/react';
import ProductList from '../components/ui/productsList';
import FiltroProductos from '../components/ui/filtroProductos';
import productsData from '../data/productsData';
import NavBar from "../components/NavBar/NavBar";
import ProductDetailPage from "../components/ui/ProductDetailPage";
import Footer from "../components/Footer/Foote"
import Titulo from '../components/ui/Titulo';

const Home = ({ cart, setCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    updateCartItemCount(updatedCart.length); // Llamada a la función para actualizar el número de elementos en el carrito
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToHome = () => {
    setSelectedProduct(null);
  };

  // Función para actualizar el número de elementos en el carrito
  const updateCartItemCount = (count) => {
    // Actualizar el estado del carrito con el nuevo número de elementos
    // Suponiendo que el estado del carrito se actualiza en el componente padre
  };

  return (
    <>
      <NavBar />
      <Container maxW="container.xl" py="8">
        {selectedProduct ? (
          <ProductDetailPage product={selectedProduct} onBack={handleBackToHome} updateCartItemCount={updateCartItemCount} /> // Pasar la función como prop al ProductDetailPage
        ) : (
          <>
            <Flex justifyContent="space-between" alignItems="center" mb="4">
              <Titulo />
            </Flex>
            <Box bg="#E4C59E" py="8" borderRadius="xl" boxShadow="md" mb="8">
              <Heading as="h2" size="xl" color="#322C2B" mb="4" textAlign="center">
                Nuestros Productos
              </Heading>
              <FiltroProductos handleFilter={handleFilter} />
              <ProductList products={filteredProducts} handleAddToCart={handleAddToCart} handleViewDetails={handleViewDetails} />
            </Box>
            <Footer />
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
