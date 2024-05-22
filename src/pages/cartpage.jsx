import React, { useState, useContext } from "react";
import { 
  Container, 
  Heading, 
  Box, 
  Button, 
  Flex, 
  Text, 
  Grid, 
  GridItem, 
  IconButton, 
  Image, 
  useToast, 
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  StackDivider,
  VStack 
} from '@chakra-ui/react'; 
import { CartContext } from '../components/contex/CartContext';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import NavBar from "../components/NavBar/NavBar";

const CartPage = ({ onBack }) => {
  const { cart, setCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(cart);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [itemToRemove, setItemToRemove] = useState(null);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleRemoveFromCart = (item) => {
    onOpen();
    setItemToRemove(item);
  };

  const confirmRemoveFromCart = () => {
    const updatedCart = cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
    setCartItems(updatedCart);
    setCart(updatedCart); 
    toast({
      title: "Artículo eliminado",
      description: `${itemToRemove.name} ha sido eliminado del carrito`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };

  const handleIncrementQuantity = (item) => {
    const updatedCart = cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
    setCart(updatedCart);
  };

  const handleDecrementQuantity = (item) => {
    const updatedCart = cartItems.map(cartItem => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCart);
    setCart(updatedCart); 
  };

  return (
    <Container maxW="container.xl" py="8">
      <NavBar />
      <Heading color="white" as="h1" size="xl" mb="8" textAlign="center">
        Tu Carrito de Compras
      </Heading>

      {cartItems.length > 0 ? (
        <>
          <Grid templateColumns="repeat(3, 1fr)" templateRows="1fr" gap={4} mt="8">
  <GridItem colSpan={2} rowSpan={1}>
    {/* Contenido de la primera columna */}
    <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
      {cartItems.map((item) => (
        <Box
          key={item.id}
          bg="white"
          p="5"
          borderRadius="md"
          boxShadow="md"
          _hover={{ boxShadow: "lg" }}
          w="full"
        >
          <Grid templateColumns="repeat(12, 1fr)" gap={4} alignItems="center">
            <GridItem colSpan={[12, 8]}>
              <Image src={item.image} alt={item.name} boxSize="250px" objectFit="cover" />
            </GridItem>
            <GridItem colSpan={[12, 4]}>
              <Text fontSize="2xl" fontWeight="bold">{item.name}</Text>
              <Flex alignItems="center" mt={2}>
                <IconButton
                  icon={<MinusIcon />}
                  size="sm"
                  onClick={() => handleDecrementQuantity(item)}
                  mr="2"
                  aria-label="Disminuir cantidad"
                />
                <Text fontSize="xl" mx={2}>{item.quantity}</Text>
                <IconButton
                  icon={<AddIcon />}
                  size="sm"
                  onClick={() => handleIncrementQuantity(item)}
                  ml="2"
                  aria-label="Aumentar cantidad"
                />
              </Flex>
            </GridItem>
            <GridItem colSpan={[12, 4]} textAlign={["left", "right"]}>
              <Text fontSize="xl">Precio por unidad: {item.price}</Text>
              <Button 
                colorScheme="red" 
                size="sm" 
                onClick={() => handleRemoveFromCart(item)}
                mt={2}
              >
                Eliminar
              </Button>
            </GridItem>
          </Grid>
        </Box>
      ))}
    </VStack>
  </GridItem>
  <GridItem colSpan={1} rowSpan={1}>
    {/* Contenido de la segunda columna */}
    <Box bg="white" p="4" borderRadius="md" boxShadow="md">
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="lg" fontWeight="bold">Total:</Text>
        <Text fontSize="2xl" fontWeight="bold">${calculateTotal()}</Text>
      </Flex>
      <Button colorScheme="blue" mt="4" w="full">
        Confirmar Compra
      </Button>
      <Button
        variant="outline"
        onClick={onBack}
        w="full"
        colorScheme="teal"
        mt="4"
      >
        Volver a la Página Principal
      </Button>
    </Box>
  </GridItem>
</Grid>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Eliminar artículo
                </AlertDialogHeader>

                <AlertDialogBody>
                  ¿Estás seguro que quieres eliminar {itemToRemove?.name} del carrito?
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button colorScheme="red" onClick={confirmRemoveFromCart} ml={3}>
                    Eliminar
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </>
      ) : (
        <Text fontSize="xl" textAlign="center">
          Tu carrito está vacío.
        </Text>
      )}
    </Container>
  );
};

export default CartPage;
