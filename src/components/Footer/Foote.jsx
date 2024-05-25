import React from 'react';
import { Box, Flex, Heading, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="#594747" py="12" borderRadius="xl" boxShadow="md" textAlign="center">
      <Heading as="h2" size="lg" color="white" mb="4">¡Contáctanos!</Heading>
      <Text color="white" mb="4">Estamos aquí para ayudarte. ¡No dudes en ponerte en contacto con nosotros!</Text>
      
      {/* Enlaces */}
      <Flex justify="center" mb="4">
        <Link mx="4" color="white" fontWeight="bold" href="/nosotros">Nosotros</Link>
        <Link mx="4" color="white" fontWeight="bold" href="/productos">Productos</Link>
        <Link mx="4" color="white" fontWeight="bold" href="/blog">Blog</Link>
        <Link mx="4" color="white" fontWeight="bold" href="/contacto">Contacto</Link>
      </Flex>
      
      {/* Redes sociales */}
      <Text color="white" mb="4">Síguenos en nuestras redes sociales:</Text>
      <Flex justify="center" mb="4">
        <Link mx="2" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Box as="i" className="fab fa-facebook-square" fontSize="2xl" color="white" />
        </Link>
        <Link mx="2" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Box as="i" className="fab fa-twitter-square" fontSize="2xl" color="#1da1f2" />
        </Link>
        <Link mx="2" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Box as="i" className="fab fa-instagram-square" fontSize="2xl" color="#c13584" />
        </Link>
      </Flex>
      
      {/* Derechos de autor */}
      <Text color="white" fontSize="sm">© {new Date().getFullYear()} La Lenteja</Text>
    </Box>
  );
};

export default Footer;
