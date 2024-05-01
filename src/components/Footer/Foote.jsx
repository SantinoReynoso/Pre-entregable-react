import React from 'react';
import { Box, Flex, Heading, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="#E4C59E" py="12" borderRadius="xl" boxShadow="md" textAlign="center">
      <Heading as="h2" size="lg" color="#322C2B" mb="4">¡Contáctanos!</Heading>
      <Text mb="4">Estamos aquí para ayudarte. ¡No dudes en ponerte en contacto con nosotros!</Text>
      
      <Flex justify="center" mb="4">
        <Link mx="4" color="#322C2B" fontWeight="bold" href="/nosotros">Nosotros</Link>
        <Link mx="4" color="#322C2B" fontWeight="bold" href="/productos">Productos</Link>
        <Link mx="4" color="#322C2B" fontWeight="bold" href="/blog">Blog</Link>
        <Link mx="4" color="#322C2B" fontWeight="bold" href="/contacto">Contacto</Link>
      </Flex>
      
      <Text mb="4">Síguenos en nuestras redes sociales:</Text>
      
      <Flex justify="center" mb="4">
        <Link mx="2" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Box as="i" className="fab fa-facebook-square" fontSize="2xl" color="#3b5998" />
        </Link>
        <Link mx="2" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Box as="i" className="fab fa-twitter-square" fontSize="2xl" color="#1da1f2" />
        </Link>
        <Link mx="2" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Box as="i" className="fab fa-instagram-square" fontSize="2xl" color="#c13584" />
        </Link>
      </Flex>
      
      <Text color="#322C2B" fontSize="sm">© {new Date().getFullYear()} La Lenteja. Todos los derechos reservados.</Text>
    </Box>
  );
};

export default Footer;
