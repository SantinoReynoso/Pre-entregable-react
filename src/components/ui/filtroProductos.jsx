// FiltroProductos.jsx
import React from 'react';
import { Button } from '@chakra-ui/react';

const FiltroProductos = ({ handleFilter }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Button colorScheme="gray" mr={2 }onClick={() => handleFilter('Todos')}>Todos</Button>
      <Button colorScheme="blue" mr={2} onClick={() => handleFilter('Dietetica')}>Dietetica</Button>
      <Button colorScheme="blue" mr={2} onClick={() => handleFilter('Semillas')}>Semillas</Button>
      <Button colorScheme="blue" mr={2} onClick={() => handleFilter('Suplementos')}>Suplementos</Button>
    </div>
  );
};
export default FiltroProductos;
