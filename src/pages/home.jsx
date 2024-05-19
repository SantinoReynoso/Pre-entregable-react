import React, { useState, useContext } from 'react';
import { Container, Heading, Box, Flex } from '@chakra-ui/react';
import ProductList from '../components/ui/productsList';
import FiltroProductos from '../components/ui/filtroProductos';
import productsData from '../data/productsData';
import NavBar from '../components/NavBar/NavBar';
import ProductDetailPage from '../components/ui/ProductDetailPage';
import Footer from '../components/Footer/Foote';
import Titulo from '../components/ui/Titulo';
import { CartContext } from '../components/contex/CartContext';

const Home = () => {
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

  const handleBackToHome = () => {
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
            onBack={handleBackToHome}
            handleAddToCart={(quantity) => addToCart(selectedProduct, quantity)}
          />
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
              <ProductList
                products={filteredProducts}
                handleViewDetails={handleViewDetails}
              />
            </Box>
            <div>
              <h1>Home Page</h1>
              <p>Items en el carrito: {cart.length}</p>
            </div>
            <Footer />
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
