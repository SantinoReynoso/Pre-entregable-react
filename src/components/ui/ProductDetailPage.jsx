import React, { useState } from 'react';
import { Container, Heading, Box, Button, Flex, Text, Image, Spacer, Input, FormControl, FormLabel, Select, Divider, SimpleGrid } from '@chakra-ui/react';

const ProductDetailPage = ({ product, onBack }) => {
  // Estado para controlar la cantidad de productos a agregar al carrito
  const [quantity, setQuantity] = useState(1);

  // Función para manejar cambios en la cantidad de productos
  const handleQuantityChange = (event) => {
    // Convertir el valor de entrada a un número entero y actualizar el estado de cantidad
    setQuantity(parseInt(event.target.value));
  };

  // Función para agregar el producto al carrito con la cantidad seleccionada
  const handleAddToCart = () => {
  // Aquí puedes implementar la lógica para agregar el producto al carrito con la cantidad seleccionada
    console.log(`Agregado al carrito: ${quantity} ${product.name}`);
  };

  // Productos relacionados (dummy data)
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
      {/* Detalles del producto */}
      <Box bg="white" p="8" borderRadius="xl" boxShadow="lg">
        {/* Título */}
        <Heading as="h1" size="xl" color="gray.800" mb="4">
          Detalles del Producto
        </Heading>
        {/* Flex container para la imagen y detalles del producto */}
        <Flex justifyContent="space-between" mb="4">
          {/* Imagen del producto */}
          <Image src={product.image} alt={product.name} boxSize="300px" objectFit="contain" />
          {/* Detalles del producto */}
          <Box ml="8" w="50%">
            {/* Nombre del producto */}
            <Text fontSize="2xl" fontWeight="bold" mb="2">{product.name}</Text>
            {/* Precio del producto */}
            <Text fontSize="lg" mb="4">{product.price}</Text>
            {/* Selector de cantidad */}
            <FormControl>
              <FormLabel htmlFor="quantity">Cantidad:</FormLabel>
              {/* Input para seleccionar la cantidad */}
              <Input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} min={1} />
            </FormControl>
          </Box>
        </Flex>
        {/* Divider para separar los detalles del producto del botón de agregar al carrito */}
        <Divider mb="4" />
        {/* Botón para agregar al carrito */}
        <Button colorScheme="blue" onClick={handleAddToCart} w="100%" mb="4">Agregar al Carrito</Button>
        {/* Botón para volver a la página principal */}
        <Button variant="outline" onClick={onBack} w="100%">Volver a la Página Principal</Button>
      </Box>
      {/* Sección de productos relacionados */}
      <Box mt="8">
        <Heading as="h2" size="lg" mb="4">Productos Relacionados</Heading>
        <SimpleGrid columns={[1, 2, 3]} gap="4">
          {/* Mapeo de los productos relacionados */}
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





