import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { Button} from '@chakra-ui/react'
import { px } from 'framer-motion';

const ProductDetailPage = ({ product, onBack, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const toast = useToast();

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
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
    <Container bg="#594747" p="12" borderRadius="xl" boxShadow="md" maxW="container.xl" >
      <Box bg="white" p="8" borderRadius="xl" boxShadow="lg">
        <Heading as="h1" size="xl" color="gray.800" mb="5">
          Detalles del Producto
        </Heading>
        <Flex direction={['column', 'row']} mb="4">
          <Image src={product.image} alt={product.name} boxSize="300px" objectFit="contain" />
          <Box ml={[0, '8']} w={['100%', '50%']}>
            <Text fontSize="2xl" fontWeight="bold" mb="2">{product.name}</Text>
            <Text fontSize="3xl" mb="5">{product.price}</Text>
            <FormControl>
            <FormLabel htmlFor="quantity">Cantidad:</FormLabel>
            <Input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} min={1} />
            </FormControl>
          <Divider mb="4" />
            <Button colorScheme='teal' size='lg' onClick={addToCart} w="100%" mb="4">
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

export default ProductDetailPage;