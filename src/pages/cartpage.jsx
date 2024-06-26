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
import { CartContext } from '../contex/CartContext';
import NavBar from "../components/NavBar/NavBar";
import { useNavigate  } from "react-router-dom";
import registerPurchase from '../firebase/db';
import ItemCount from '../components/ItemListContainer/ItemCount';
import CustomerDetailsForm from '../components/ui/CustomerDetailsForm';

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(cart);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [customerDetails, setCustomerDetails] = useState(null);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [itemToRemove, setItemToRemove] = useState(null);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);
      const itemTotal = price * quantity;
      return total + itemTotal;
    }, 0);
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

  const handleConfirmPurchase = () => {
    setShowCustomerForm(true);
  };

  const handleCustomerDetailsSubmit = async (details) => {
    setCustomerDetails(details);

    const purchaseDetails = {
      items: cartItems,
      totalAmount: calculateTotal(),
      purchaseDate: new Date().toISOString(),
      customer: details
    };

    try {
      const docRef = await registerPurchase(purchaseDetails);
      const productList = cartItems.map(item => `- ${item.name} (${item.quantity}x)`);
      toast({
        title: "¡Compra realizada con éxito!",
        description: (
          <VStack align="start">
            <Text>Tu compra ha sido procesada correctamente.</Text>
            <Text>Productos:</Text>
            <Text>{productList}</Text>
            <Text>Total: ${calculateTotal()}</Text>
            <Text>ID de compra: {docRef.id}</Text>
          </VStack>
        ),
        position: "top",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setCart([]);
      setCartItems([]);
      navigate("/");
    } catch (error) {
      toast({
        title: "Error al realizar la compra",
        description: "Hubo un problema al procesar tu compra. Por favor, intenta nuevamente.",
        position: "top",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

 
  return (
    <div data-aos="zoom-in-right">
      <Container maxW="container.xl" py="8">
        <NavBar />
        <Heading color="white" as="h1" size="xl" mb="8" textAlign="center">
          Tu Carrito de Compras
        </Heading>

        {cartItems.length > 0 ? (
          <>
            <Grid templateColumns="repeat(3, 1fr)" templateRows="1fr" gap={4} mt="10">
              <GridItem colSpan={2} rowSpan={1}>
                <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
                  {cartItems.map((item) => {
                    return (
                      <Box
                        key={item.id}
                        bg="white"
                        p="5"
                        borderRadius="md"
                        boxShadow="md"
                        _hover={{ boxShadow: "lg" }}
                        w="full"
                      >
                        <Grid templateColumns="repeat(20, 1fr)" gap={1} alignItems="center">
                          <GridItem colSpan={[12, 8]}>
                            <Image src={"/foto.jpg"} alt={item.name} boxSize="300px" objectFit="contain" style={{ borderRadius: "25%" }} />
                          </GridItem>
                          <GridItem colSpan={[12, 4]}>
                            <Text fontSize="2xl" fontWeight="bold">{item.name}</Text>
                            <ItemCount 
                              quantity={item.quantity}
                              incrementQuantity={() => handleIncrementQuantity(item)}
                              decrementQuantity={() => handleDecrementQuantity(item)}
                            />
                          </GridItem>
                          <GridItem colSpan={[12, 4]} textAlign={["left", "right"]}>
                            <Text fontWeight="bold" fontSize="1.3rem">Precio por unidad: ${item.price}</Text>
                            <Button
                              borderColor="red"
                              boxShadow="lg"
                              color="red"
                              colorScheme="white"
                              size="sm"
                              onClick={() => handleRemoveFromCart(item)}
                              mt={2}
                              _hover={{ color: "white", bg: "red" }}
                            >
                              Eliminar
                            </Button>
                          </GridItem>
                        </Grid>
                      </Box>
                    );
                  })}
                </VStack>
              </GridItem>
              <GridItem colSpan={1} rowSpan={1}>
                <Box bg="white" p="4" borderRadius="md" boxShadow="md">
                  <Flex boxShadow="md" justifyContent="space-between" alignItems="center">
                    <Text fontSize="lg" fontWeight="bold">Total:</Text>
                    <Text fontSize="2xl" fontWeight="bold">${calculateTotal()}</Text>
                  </Flex>

                  <Button
                    colorScheme='teal' size='lg' mt="4" w="full"
                    onClick={handleConfirmPurchase} 
                  > 
                    Confirmar Compra
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleBackToHome}
                    w="full"
                    colorScheme="teal"
                    mt="4"
                  >
                    Volver a la Página Principal
                  </Button>
                </Box>
              </GridItem>
            </Grid>

            {showCustomerForm && (
              <>
                <Heading mt="8" color="white" as="h2" size="lg" mb="8" textAlign="center">
                  Ingresa tus datos para confirmar tu compra
                </Heading>
                <CustomerDetailsForm onSubmit={handleCustomerDetailsSubmit} />
              </>
            )}

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
    </div>
  );
};

export default CartPage;
