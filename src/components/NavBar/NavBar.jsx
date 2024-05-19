import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import { Container, Flex, Image, Text } from '@chakra-ui/react';
import lalentejaImage from "../../assets/lalenteja.jpg";
import CartWidget from '../CardWidget/CartWidget';

const NavBar = ({ cartItemCount }) => {
  return (
    <Container maxW="container.xl" py="4">
      <Flex alignItems="center">
        {/* Imagen de La Lenteja */}
        <Image src={lalentejaImage} alt="La Lenteja" boxSize="150px" mr="3" borderRadius="35px" />

        {/* Espaciador para separar elementos */}
        <Flex flex="1" />

        {/* Otros elementos de navegación */}
        <Link to="/" style={{ textDecoration: 'none' }}> {/* Enlace a la página de inicio */}
          <Text fontSize="lg" color="white" mr="4" cursor="pointer">Inicio</Text>
        </Link>
        <Link to="/productos" style={{ textDecoration: 'none' }}> {/* Enlace a la página de productos */}
          <Text fontSize="lg" color="white" mr="4" cursor="pointer">Productos</Text>
        </Link>
        <Text fontSize="lg" color="white" mr="4" cursor="not-allowed">Contacto</Text>
        <Text fontSize="lg" color="white" cursor="not-allowed">Iniciar Sesión</Text>
      </Flex>

      {/* Espaciador para separar elementos */}
      <Flex justify="flex-end">

        {/* Enlace al carrito */}
        <Link to="/Cartpage" style={{ textDecoration: 'none' }}>
          <CartWidget cartItemCount={cartItemCount} />
        </Link>

      </Flex>
    </Container>
  );
};

export default NavBar;
