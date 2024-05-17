import React from 'react';
import { IconButton, Badge, Flex } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ cartItemCount }) => {
  cartItemCount = 0;
  return (
    <Flex align="center">
      <IconButton
        icon={<FaShoppingCart />}
        color="white" 
        variant="link"
        aria-label="Carrito de compras"
        cursor={"pointer"}
        size="lg" 
        fontSize="2xl"
      />
      {/* Mostrar el número de elementos en el carrito */}
      <Badge colorScheme="blue" borderRadius="full" px="3" ml="1">
        {cartItemCount}
      </Badge>
    </Flex>
  );
};


export default CartWidget;

