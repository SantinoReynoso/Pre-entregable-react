import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Flex, Image, Text } from '@chakra-ui/react';
import lalentejaImage from "../../assets/lalenteja.jpg";
import CartWidget from '../CardWidget/CartWidget';

const NavBar = () => {
  return (
    <Container maxW="container.xl" py="4">
      <Flex alignItems="center">
        {/* Imagen de La Lenteja */}
        <Image src={lalentejaImage} alt="La Lenteja" boxSize="150px" mr="3" borderRadius="35px" boxShadow="2xl"/>
        <Flex flex="1" />
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Text fontSize="lg" color="white" mr="4" cursor="pointer">Inicio</Text>
        </Link>
        <Link to="/productos" style={{ textDecoration: 'none' }}>
          <Text fontSize="lg" color="white" mr="4" cursor="pointer">Productos</Text>
        </Link>
        <Text fontSize="lg" color="white" mr="4" cursor="not-allowed">Contacto</Text>
        <Text fontSize="lg" color="white" cursor="not-allowed">Iniciar Sesión</Text>
      </Flex>
      <Flex justify="flex-end">
        <Link to="/Cartpage" style={{ textDecoration: 'none' }}>
          <CartWidget/>
        </Link>

      </Flex>
    </Container>
  );
};

export default NavBar;
