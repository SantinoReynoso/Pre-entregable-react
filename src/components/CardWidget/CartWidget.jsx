import React from 'react';
import { IconButton, Badge, Flex } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { px } from 'framer-motion';

const CartWidget = ({ cartItemCount }) => {
  return (
<Flex align="center" px={5}>
  <IconButton
    icon={<FaShoppingCart style={{ fontSize: '30px' }} />} // Ajusta el tamaño del icono del carrito
    color="white"
    variant="link"
    aria-label="Carrito de compras"
    cursor="pointer"
    size="lg"
    />
  <Badge colorScheme="blue" borderRadius="full" px="7" ml="5" fontSize="lg"> {/* Ajusta el tamaño del número en el badge */}
    {cartItemCount}
  </Badge>

</Flex>
  );
};

export default CartWidget;
