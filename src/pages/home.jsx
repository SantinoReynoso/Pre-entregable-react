import React, { useState, useContext, useEffect } from 'react';
import { Container, Heading, Box, Flex } from '@chakra-ui/react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Foote';
import Titulo from '../components/ui/Titulo';
import { CartContext } from '../contex/CartContext';
import { useNavigate, useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import FiltroProductos from '../components/ui/filtroProductos';
import productsData from '../data/productsData.json';

const Home = () => {
  const { cart } = useContext(CartContext);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const navigate = useNavigate();
  const { sector } = useParams();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setCartItemCount(cart.reduce((count, item) => count + item.quantity, 0));
  }, [cart]);

  useEffect(() => {
    if (sector) {
      handleFilter(sector);
    } else {
      setFilteredProducts(productsData);
    }
  }, [sector]);

  const handleViewDetails = (product) => {
    navigate(`/productos/${product.id}`);
  };

  const handleFilter = (filter) => {
    if (filter === 'Todos') {
      setFilteredProducts(productsData);
      navigate(`/sector/todos`);
    } else {
      const lowerCaseFilter = filter.toLowerCase();
      const filtered = productsData.filter(product => product.sector.toLowerCase() === lowerCaseFilter);
      setFilteredProducts(filtered);
      navigate(`/sector/${lowerCaseFilter}`);
    }
  };

  return (
    <>
      <NavBar cartItemCount={cartItemCount} />
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center" mb="4">
          <Titulo />
        </Flex>
        <Box bg="#594747" p="12" borderRadius="xl" boxShadow="2xl" mb="8">
          <Heading as="h2" size="xl" color="white" mb="4" textAlign="center" letterSpacing="wide">
            Nuestros Productos
          </Heading>
          <FiltroProductos handleFilter={handleFilter} />
          <ItemListContainer products={filteredProducts} handleViewDetails={handleViewDetails} />
        </Box>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
