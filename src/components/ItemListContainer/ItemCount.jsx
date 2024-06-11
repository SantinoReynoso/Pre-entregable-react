// ItemCount.jsx
import React from 'react';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const ItemCount = ({ quantity, incrementQuantity, decrementQuantity }) => {
  return (
    <Flex alignItems="center" mt={2}>
      <IconButton
        icon={<MinusIcon />}
        size="sm"
        onClick={decrementQuantity}
        mr="2"
        aria-label="Disminuir cantidad"
      />
      <Text fontSize="xl" mx={2}>{quantity}</Text>
      <IconButton
        icon={<AddIcon />}
        size="sm"
        onClick={incrementQuantity}
        ml="2"
        aria-label="Aumentar cantidad"
      />
    </Flex>
  );
};

export default ItemCount;