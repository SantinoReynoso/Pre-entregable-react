import React, { useState } from 'react';
import { Container, Heading, Box, Button, Flex, Text, Image, Input, FormControl, FormLabel, Divider, SimpleGrid } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = ({ product, onBack, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const addToCart = () => {
    handleAddToCart(quantity);
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
    <Container maxW="container.xl" py="8">
      <Box bg="white" p="8" borderRadius="xl" boxShadow="lg">
        <Heading as="h1" size="xl" color="gray.800" mb="4">
          Detalles del Producto
        </Heading>
        <Flex justifyContent="space-between" mb="4">
          <Image src={product.image} alt={product.name} boxSize="300px" objectFit="contain" />
          <Box ml="8" w="50%">
            <Text fontSize="2xl" fontWeight="bold" mb="2">{product.name}</Text>
            <Text fontSize="lg" mb="4">{product.price}</Text>
            <FormControl>
              <FormLabel htmlFor="quantity">Cantidad:</FormLabel>
              <Input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} min={1} />
            </FormControl>
          </Box>
        </Flex>
        <Divider mb="4" />
        <Button colorScheme="blue" onClick={addToCart} w="100%" mb="4">
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
      <Box mt="8">
        <Heading as="h2" size="lg" mb="4">Productos Relacionados</Heading>
        <SimpleGrid columns={[1, 2, 3]} gap="30">
          {relatedProducts.map(relatedProduct => (
            <Box key={relatedProduct.id} bg="white" p="4" borderRadius="xl" boxShadow="md">
              <Image src={relatedProduct.image} alt={relatedProduct.name} boxSize="150px" objectFit="contain" />
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

