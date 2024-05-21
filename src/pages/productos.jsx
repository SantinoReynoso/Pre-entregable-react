import React, { useContext, useState } from 'react';
import { Container, Heading, Box, Flex } from '@chakra-ui/react';
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
              <Heading as="h1" size="3" color="#322C2B" letterSpacing="wide">
                Productos
              </Heading>
            </Flex>
            <Box bg="#E4C59E" py="8" borderRadius="xl" boxShadow="md" mb="8">
              <Heading as="h2" size="xl" color="#322C2B" mb="4" textAlign="center">
                Nuestros Productos
              </Heading>
              <FiltroProductos handleFilter={handleFilter} />
              <ProductList products={filteredProducts} handleViewDetails={handleViewDetails} />
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

export default Productos;
