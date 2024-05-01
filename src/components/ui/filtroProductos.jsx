// FiltroProductos.jsx
import React from 'react';
import Button from 'react-bootstrap/Button';

const FiltroProductos = ({ handleFilter }) => {
  return (
    <div style={{ textAlign: 'center',  padding: '20px'}}>
      <Button variant="outline-secondary" colorScheme="gray" mr={2} onClick={() => handleFilter('Todos')}>Todos</Button>
      <Button variant="outline-secondary" colorScheme="gray" mr={2} onClick={() => handleFilter('Dietetica')}>Dietetica</Button>
      <Button variant="outline-secondary" colorScheme="gray" mr={2} onClick={() => handleFilter('Semillas')}>Semillas</Button>
      <Button variant="outline-secondary" colorScheme="gray" mr={2} onClick={() => handleFilter('Suplementos')}>Suplementos</Button>
    </div>
  );
};

export default FiltroProductos;