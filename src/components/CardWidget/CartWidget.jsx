import React from 'react';
import { IconButton, Badge, Flex } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  const itemCount = 5; // Número hardcodeado de elementos en el carrito

  return (
    <Flex align="center">
      {/* Icono del carrito de compras */}
      <IconButton
        icon={<FaShoppingCart />}
        color="white" 
        variant="link"
        aria-label="Carrito de compras"
        isDisabled
        size="lg" 
      />

      {/* Número de elementos en el carrito (hardcodeado) */}
      <Badge colorScheme="blue" borderRadius="full" px="3" ml="1">
        {itemCount}
      </Badge>
    </Flex>
  );
};

export default CartWidget;
