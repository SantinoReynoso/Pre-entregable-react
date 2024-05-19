import React from 'react';
import { IconButton, Badge, Flex } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ cartItemCount }) => {
  return (
    <Flex align="center">
      <IconButton
        icon={<FaShoppingCart />}
        color="white"
        variant="link"
        aria-label="Carrito de compras"
        cursor="pointer"
        size="lg"
        fontSize="2xl"
      />
      <Badge colorScheme="blue" borderRadius="full" px="3" ml="1">
        {cartItemCount}
      </Badge>
    </Flex>
  );
};

export default CartWidget;
