// CartPage.jsx
import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Container, Heading, Box, Button, Flex, Text } from '@chakra-ui/react'; 
import CartItem from "../components/ItemListContainer/CartItem";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Producto 1",
      price: 10.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Producto 2",
      price: 15.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <NavBar cartItems={cartItems} />
      <Container maxW="container.xl" py="8">
        <Heading as="h1" size="xl" mb="4">Tu Carrito de Compras</Heading>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onRemove={handleRemoveFromCart} />
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

