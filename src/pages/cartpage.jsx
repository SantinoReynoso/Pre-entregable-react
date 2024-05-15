import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Container, Heading, Box, Button, Flex, Text, Image, Spacer } from '@chakra-ui/react'; 

const CartPage = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <NavBar />
      <Container maxW="container.xl" py="8">
        <Heading as="h1" size="xl" mb="4">Tu Carrito de Compras</Heading>
        {cartItems && cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <Box key={item.id} bg="white" p="4" mb="4" borderRadius="md" boxShadow="md">
                <Flex alignItems="center">
                  <Image src={item.image} alt={item.name} boxSize="100px" objectFit="contain" mr="4" />
                  <Box>
                    <Text fontSize="lg" fontWeight="bold">{item.name}</Text>
                    <Text fontSize="md" color="gray.600">${item.price}</Text>
                  </Box>
                  <Spacer />
                  <Button colorScheme="red">Eliminar</Button>
                </Flex>
              </Box>
            ))}
            <Box bg="white" p="4" borderRadius="md" boxShadow="md" mt="4">
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">Total:</Text>
                <Text fontSize="lg" fontWeight="bold">${calculateTotal()}</Text>
              </Flex>
              <Button colorScheme="blue" mt="4">Confirmar Compra</Button>
            </Box>
          </>
        ) : (
          <Text fontSize="xl">Tu carrito está vacío.</Text>
        )}
      </Container>
    </div>
  );
};

export default CartPage;
