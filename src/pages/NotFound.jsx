// components/NotFound.jsx
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const NotFound = () => (
  <Box textAlign="center" py="10">
    <Heading>Página no encontrada</Heading>
    <Text>Lo sentimos, la página que estás buscando no existe.</Text>
  </Box>
);

export default NotFound;
