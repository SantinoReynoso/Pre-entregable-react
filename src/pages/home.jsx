import React, { useState } from 'react';
import { Container, Heading, Box, Flex } from '@chakra-ui/react';
import ProductList from '../components/ui/productsList';
import FiltroProductos from '../components/ui/filtroProductos';
import productsData from '../data/productsData';
import NavBar from "../components/NavBar/NavBar";
import ProductDetailPage from "../components/ui/ProductDetailPage";
import Footer from "../components/Footer/Foote";
import CartWidget from "../components/CardWidget/CartWidget";
import Titulo from '../components/ui/Titulo';

const Home = ({ cart, setCart }) => {
  // Estado para contar la cantidad de elementos en el carrito
  const [cartItemCount, setCartItemCount] = useState(0);

  // Estado para almacenar los productos filtrados
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  
  // Estado para almacenar el producto seleccionado para ver detalles
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Función para manejar el filtro de productos por categoría
  const handleFilter = (category) => {
    if (category === 'Todos') {
      setFilteredProducts(productsData);
    } else {
      const filteredProducts = productsData.filter(product => product.sector === category);
      setFilteredProducts(filteredProducts);
    }
  };

  // Función para ver los detalles de un producto
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  // Función para volver a la página de inicio desde los detalles del producto
  const handleBackToHome = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <NavBar cartItemCount={cartItemCount} />
      <Container maxW="container.xl" py="8">
        {selectedProduct ? (
          // Página de detalles del producto
          <ProductDetailPage
            product={selectedProduct}
            onBack={handleBackToHome}
          />
        ) : (
          // Página de inicio con lista de productos
          <>
            <Flex justifyContent="space-between" alignItems="center" mb="4">
              <Titulo />
            </Flex>
            <Box bg="#E4C59E" py="8" borderRadius="xl" boxShadow="md" mb="8">
              <Heading as="h2" size="xl" color="#322C2B" mb="4" textAlign="center">
                Nuestros Productos
              </Heading>
              <FiltroProductos handleFilter={handleFilter} />
              <ProductList
                products={filteredProducts}
                handleViewDetails={handleViewDetails}
              />
            </Box>
            <Footer />
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
