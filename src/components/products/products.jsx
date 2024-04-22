import React from 'react';
import { Box, Button, Text, Image } from '@chakra-ui/react';

const ProductList = ({ products, handleAddToCart }) => {
  const handleClick = (product) => {
    // Aquí puedes implementar la lógica para agregar el producto al carrito
    console.log(`Producto agregado al carrito: ${product.name}`);
    handleAddToCart(product); // Llama a la función handleAddToCart pasada como prop
  };

  return (
    <Box>
      {products.map(product => (
        <Box key={product.id} borderWidth="1px" borderRadius="lg" p="4" my="4" boxShadow="md">
          {/* Aquí se muestra la imagen del producto */}
          <Image src={product.image} alt={product.name} borderRadius="md" mb="4" />

          <Text fontSize="xl" fontWeight="bold" mb="2">{product.name}</Text>
          <Text fontSize="lg" color="gray.600" mb="4">{product.price}</Text>
          <Button colorScheme="blue" onClick={() => handleClick(product)}>Agregar al carrito</Button>
        </Box>
      ))}
    </Box>
  );
};

export default ProductList;
