import React, { useState, useContext } from "react";
import { Container, Heading, Box, Button, Flex, Text } from '@chakra-ui/react'; 
import { CartContext } from '../components/contex/CartContext';
import NavBar from "../components/NavBar/NavBar";


const CartPage = (onBack) => {
  const { cart, setCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(cart);

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Función para manejar la eliminación de un artículo del carrito
  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    setCart(updatedCart); // Actualiza el carrito en el contexto
  };

  return (
    <>
  <Container maxW="container.xl" py="8">
      <NavBar />
      <Heading as="h1" size="xl" mb="8" textAlign="center">
        Tu Carrito de Compras
      </Heading>

      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item, index) => (
            <Box  bg="white" p="4" borderRadius="md" boxShadow="md" mt="8" key={item.id} mb={index < cartItems.length - 1 ? 8 : 0}>
              <Flex alignItems="center" justifyContent="space-between" mb="4">
                <Flex alignItems="center">
                  <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '20px' }} />
                  <Text fontSize="xl">{item.name}</Text>
                </Flex>
                <Flex alignItems="center">
                  <Text p="4" fontSize="xl" mr="4">{item.price}</Text>
                  <Button colorScheme="red" size="sm" onClick={() => handleRemoveFromCart(item)}>Eliminar</Button>
                </Flex>
              </Flex>
            </Box>
          ))}

          <Box bg="white" p="4" borderRadius="md" boxShadow="md" mt="8">
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="lg" fontWeight="bold">Total:</Text>
              <Text fontSize="lg" fontWeight="bold">${calculateTotal()}</Text>
            </Flex>
            <Button colorScheme="blue" mt="4" w="full">
              Confirmar Compra
            </Button>
            <Button
              variant="outline" 
              onClick={onBack} 
              w="100%" 
              colorScheme="brown" 
              bg="beige" 
              boxShadow="md"
              _hover={{ boxShadow: "lg" }}>
             Volver a la Página Principal
            </Button>
          </Box>
        </>
      ) : (
        <Text fontSize="xl" textAlign="center">
          Tu carrito está vacío.
        </Text>
      )}
    </Container>
    </>
  );
};

export default CartPage;
