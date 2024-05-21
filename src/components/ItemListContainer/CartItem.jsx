import React from "react";
import { Box, Flex, Text, Button } from '@chakra-ui/react';

const CartItem = ({ item }) => {
  return (
    <Box bg="white" p="4" mb="4" borderRadius="md" boxShadow="md">
      <Flex alignItems="center">
        {/* Renderizar detalles del producto */}
        <Text fontSize="lg" fontWeight="bold">{item.name}</Text>
        <Text fontSize="md" color="gray.600">{item.price}</Text>
        {/* Puedes agregar más detalles del producto, como cantidad, descripción, etc. */}
        <Button colorScheme="red">Eliminar</Button>
      </Flex>
    </Box>
  );
};

export default CartItem;
