import React, { useState } from 'react';
import { Container, Heading, Box, Button, Flex, Text, Image, Spacer, Input, FormControl, FormLabel, Divider, SimpleGrid } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = ({ product, onBack}) => {
  // Estado para la cantidad de productos seleccionados
  const [quantity, setQuantity] = useState(1);
  // Obtiene el parámetro de la URL
  const { id } = useParams(); 

  // Maneja el cambio en la cantidad de productos
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  // Productos relacionados de ejemplo
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

  // Función para agregar un producto al carrito
  const handleAddToCartClick = () => {
   console.log(`Agregando ${quantity} unidades de ${product.name} al carrito.`);
  };
  

  return (
    <Container maxW="container.xl" py="8">
      <Box bg="white" p="8" borderRadius="xl" boxShadow="lg">
        {/* Encabezado */}
        <Heading as="h1" size="xl" color="gray.800" mb="4">
          Detalles del Producto
        </Heading>
        {/* Contenido principal */}
        <Flex justifyContent="space-between" mb="4">
          {/* Imagen del producto */}
          <Image src={product.image} alt={product.name} boxSize="300px" objectFit="contain" />
          {/* Detalles del producto */}
          <Box ml="8" w="50%">
            <Text fontSize="2xl" fontWeight="bold" mb="2">{product.name}</Text>
            <Text fontSize="lg" mb="4">{product.price}</Text>
            {/* Selector de cantidad */}
            <FormControl>
              <FormLabel htmlFor="quantity">Cantidad:</FormLabel>
              <Input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} min={1} />
            </FormControl>
          </Box>
        </Flex>
        {/* Separador */}
        <Divider mb="4" />
        {/* Botón para agregar al carrito */}
        <Button colorScheme="blue" onClick={() => {onBack(); handleAddToCartClick();}} w="100%" mb="4">
          Agregar al Carrito
        </Button>
        {/* Botón para volver */}
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
      {/* Productos relacionados */}
      <Box mt="8">
        {/* Encabezado */}
        <Heading as="h2" size="lg" mb="4">Productos Relacionados</Heading>
        {/* Cuadrícula de productos relacionados */}
        <SimpleGrid columns={[1, 2, 3]} gap="30">
          {relatedProducts.map(relatedProduct => (
            <Box key={relatedProduct.id} bg="white" p="4" borderRadius="xl" boxShadow="md">
              {/* Imagen y detalles del producto relacionado */}
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
