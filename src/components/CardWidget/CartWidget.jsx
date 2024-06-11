import React, { useContext } from 'react';
import { IconButton, Badge, Flex } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../contex/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Flex align="center" px={5}>
      <IconButton
        icon={<FaShoppingCart style={{ fontSize: '30px' }} />}
        color="white"
        variant="link"
        aria-label="Carrito de compras"
        cursor="pointer"
        size="lg"
      />
      {totalItems > 0 && (
        <Badge colorScheme="blue" borderRadius="full" px="7" ml="5" fontSize="lg">
          {totalItems}
        </Badge>
      )}
    </Flex>
  );
};

export default CartWidget;
