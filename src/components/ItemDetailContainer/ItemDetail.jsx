import React, { useState, useEffect } from 'react';
import {
  Container,
  Heading,
  Box,
  Flex,
  Text,
  Image,
  Input,
  FormControl,
  FormLabel,
  Divider,
  SimpleGrid,
  useToast,
  HStack,
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import { Button } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ItemDetail = ({ product, onBack, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const toast = useToast();

  useEffect(() => {
    AOS.init();
  }, []);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1 && value <= 99) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity < 99 ? prevQuantity + 1 : prevQuantity));
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  const addToCart = () => {
    handleAddToCart(quantity);
    toast({
      title: 'Producto agregado al carrito.',
      description: `${product.name} ha sido agregado al carrito.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
      icon: <FaCheck />,
    });
  };

  const relatedProducts = [
    {
      id: 1,
      name: 'Producto Relacionado 1',
      image: 'https://cdn.pixabay.com/photo/2024/01/21/06/50/ai-generated-8522551_1280.jpg',
      price: 20.99,
    },
    {
      id: 2,
      name: 'Producto Relacionado 2',
      image: 'https://cdn.pixabay.com/photo/2015/04/05/10/25/shelf-shop-707592_1280.jpg',
      price: 25.99,
    },
    {
      id: 3,
      name: 'Producto Relacionado 3',
      image: 'https://media.istockphoto.com/id/956533024/es/foto/composici%C3%B3n-con-frutas-secas-y-nueces-saludables-variadas.jpg?s=1024x1024&w=is&k=20&c=5zVReSydskm9J5fcL52xagTc9935RFrsZkqosd9FToM=',
      price: 30.99,
    },
  ];

  return (
    <Container bg="#594747" p="12" borderRadius="xl" boxShadow="md" maxW="container.xl">
      <div data-aos="zoom-in-down">
        <Box bg="white" p="8" borderRadius="xl" boxShadow="lg">
          <Heading as="h1" size="xl" color="gray.800" mb="5" boxShadow="lg">
            Detalles del Producto
          </Heading>
          <Flex direction={['column', 'row']} mb="4">
            <Image src={product.image} alt={product.name} boxSize="300px" objectFit="contain" style={{ borderRadius: "25%" }} />
            <Box ml={[0, '8']} w={['100%', '50%']}>
              <Text fontSize="3xl" fontWeight="bold" mb="2">{product.name}</Text>
              <Text fontSize="3xl" fontWeight="bold" mb="5">$ {product.price}</Text>
              <FormControl>
                <FormLabel htmlFor="quantity">Cantidad:</FormLabel>
                <HStack>
                  <Button boxShadow="lg" onClick={decrementQuantity} disabled={quantity <= 1}>-</Button>
                  <Input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min={1}
                    max={99}
                  />
                  <Button boxShadow="lg" onClick={incrementQuantity} disabled={quantity >= 99}>+</Button>
                </HStack>
              </FormControl>
              <Divider mb="4" />
              <Button colorScheme='teal' size='lg' onClick={addToCart} w="100%" mb="4" boxShadow="lg">
                Agregar al Carrito
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
          </Flex>
          <Divider mb="4" />
        </Box>
      </div>
      <Box mt="8" bg="#594747" p="8">
        <Heading bg="white" p="8" borderRadius="xl" boxShadow="lg" as="h2" size="lg" mb="5">Productos Relacionados</Heading>
        <SimpleGrid columns={[1, 2, 3]} gap="30">
          {relatedProducts.map(relatedProduct => (
            <Box key={relatedProduct.id} bg="white" p="4" borderRadius="xl" boxShadow="md">
              <Image src={relatedProduct.image} alt={relatedProduct.name} boxSize="200px" borderRadius="xl" objectFit="contain" />
              <Text fontSize="lg" fontWeight="bold" mt="2">{relatedProduct.name}</Text>
              <Text fontSize="md" mt="1">${relatedProduct.price}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default ItemDetail;
