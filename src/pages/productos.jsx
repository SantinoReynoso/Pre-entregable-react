import React, { useState } from 'react';
import { Container, Heading, Box, Flex } from '@chakra-ui/react';
import ProductList from '../components/ui/productsList';
import FiltroProductos from '../components/ui/filtroProductos';
import productsData from '../data/productsData';
import NavBar from "../components/NavBar/NavBar";
import ProductDetailPage from "../components/ui/ProductDetailPage";

const Productos = () => {
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

  // Función para volver a la página de productos desde los detalles del producto
  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };
  // Función para manejar el click en "Agregar al carrito"
  const handleAddToCartClick = (quantity) => {
    setCartItemCount(prevCount => prevCount + quantity);
  };
  return (
    <>
      {/* Barra de navegación */}
      <NavBar cartItemCount={cartItemCount} />
      
      <Container maxW="container.xl" py="8">
        {selectedProduct ? (
          // Página de detalles del producto si se ha seleccionado uno
          <ProductDetailPage
           product={selectedProduct} 
           onBack={handleBackToProducts}
           handleAddToCart={handleAddToCartClick} />
        ) : (
          // Página principal de productos
          <>
            <Flex justifyContent="space-between" alignItems="center" mb="4">
              {/* Título de la página */}
              <Heading as="h1" size="3" color="#322C2B" letterSpacing="wide">
                Productos
              </Heading>
            </Flex>

            <Box bg="#E4C59E" py="8" borderRadius="xl" boxShadow="md" mb="8">
              {/* Encabezado de la sección de productos */}
              <Heading as="h2" size="xl" color="#322C2B" mb="4" textAlign="center">
                Nuestros Productos
              </Heading>

              {/* Componente de filtro de productos */}
              <FiltroProductos handleFilter={handleFilter} />

              {/* Lista de productos */}
              <ProductList products={filteredProducts} handleViewDetails={handleViewDetails} />
            </Box>

            {/* Sección de contacto */}
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

export default Productos;
