import React, { useState, useContext, useEffect } from 'react';
import { Container, Heading, Box, Flex } from '@chakra-ui/react';
import ProductList from '../components/ui/productsList';
import FiltroProductos from '../components/ui/filtroProductos';
import productsData from '../data/productsData';
import NavBar from '../components/NavBar/NavBar';
import ProductDetailPage from '../components/ui/ProductDetailPage';
import Footer from '../components/Footer/Foote';
import Titulo from '../components/ui/Titulo';
import { CartContext } from '../components/contex/CartContext';
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  const { cart, setCart } = useContext(CartContext);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { id } = useParams();
  AOS.init();

  useEffect(() => {
    setCartItemCount(cart.reduce((count, item) => count + item.quantity, 0));
  }, [cart]);

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

  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <>
      <NavBar cartItemCount={cartItemCount} />
      <Container maxW="container.xl">
        {selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onBack={handleBackToHome}
            handleAddToCart={(quantity) => addToCart(selectedProduct, quantity)}
          />
        ) : (
          <>
            <Flex justifyContent="space-between" alignItems="center" mb="4">
            <Titulo/>
            </Flex>
            <Box bg="#594747" p="12" borderRadius="xl" boxShadow="2xl" mb="8">
              <Heading as="h2" size="xl" color="white" mb="4" textAlign="center">
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
