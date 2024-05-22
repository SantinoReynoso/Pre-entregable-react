import React, { useContext, useState } from 'react';
import { Container, Heading, Box, Flex, Text } from '@chakra-ui/react';
import ProductList from '../components/ui/productsList';
import FiltroProductos from '../components/ui/filtroProductos';
import productsData from '../data/productsData';
import NavBar from "../components/NavBar/NavBar";
import ProductDetailPage from "../components/ui/ProductDetailPage";
import { CartContext } from '../components/contex/CartContext';

const Productos = () => {
  const { cart, setCart } = useContext(CartContext);
  const [cartItemCount, setCartItemCount] = useState(0);
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

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  const handleAddToCartClick = (quantity) => {
    setCartItemCount(prevCount => prevCount + quantity);
  };

  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    handleAddToCartClick(quantity);
  };

  return (
    <>
      <NavBar cartItemCount={cartItemCount} />
      <Container maxW="container.xl" py="8">
        {selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onBack={handleBackToProducts}
            handleAddToCart={(quantity) => {
              addToCart(selectedProduct, quantity);
              // Agregar el producto al carrito de la página principal
              setCart([...cart, { ...selectedProduct, quantity }]);
            }}
          />
        ) : (
          <>
            <Flex justifyContent="space-between" alignItems="center" mb="4">
            </Flex>
            <Box bg="#594747" py="8" borderRadius="xl" boxShadow="2xl" mb="8">
              <Heading as="h2" size="xl" color="white" mb="5" textAlign="center" letterSpacing="wide">
                Nuestros Productos
              </Heading>
              <FiltroProductos handleFilter={handleFilter} />
              <ProductList products={filteredProducts} handleViewDetails={handleViewDetails} />
            </Box>
            <Box bg="#594747" py="12" borderRadius="xl" boxShadow="md" textAlign="center">
              <Heading as="h2" size="lg" color="white" mb="4">¡Contáctanos!</Heading>
              <Text color="white" mb="4">Estamos aquí para ayudarte. ¡No dudes en ponerte en contacto con nosotros!</Text>
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default Productos;
