import React from 'react';
import { Heading } from '@chakra-ui/react';

const Titulo = () => {
  return (
    <Heading
      as="h1"
      size="2xl"
      letterSpacing="wide"
      color="white"
      textAlign="center"
      mt="15"
      mb="4"
      textTransform="uppercase"
      fontFamily="Bebas Neue, sans-serif"
      fontWeight="extrabold"
      boxShadow="2xl"
      _hover={{
        textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
        transition: "text-shadow 0.3s ease-out",
        cursor: "pointer"
      }}
    >
      La Lenteja
    </Heading>
  );
};

export default Titulo;
