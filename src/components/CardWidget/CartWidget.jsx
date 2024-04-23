import React from 'react';
import { IconButton, Badge, Flex } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { px } from 'framer-motion';

const CartWidget = ({}) => {
  return (
    <Flex align="center">
      {/* Icono del carrito de compras */}
      <IconButton
        icon={<FaShoppingCart />}
        color="white" 
        variant="link" // Variante de enlace
        aria-label="Carrito de compras"
        isDisabled
        size="lg" 
      />

      {/* Número harcodeado simulando la cantidad de elementos en el carrito */}
      <Badge colorScheme="red" borderRadius="full" px="2" ml="2">
        0
      </Badge>
    </Flex>
  );
};

export default CartWidget;
