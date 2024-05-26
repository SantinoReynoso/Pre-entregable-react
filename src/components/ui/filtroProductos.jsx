import React, { useState } from 'react';
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const FiltroProductos = ({ handleFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  const handleClick = (filter) => {
    handleFilter(filter);
    setSelectedFilter(filter);
  };

  return (
    <div style={{ textAlign: 'center', padding: '10px'}}>
      {/* Botones de filtro */}
      <Button 
        variant={selectedFilter === 'Todos' ? 'primary' : 'outline-secondary'} 
        style={{ marginRight: '10px', backgroundColor: selectedFilter === 'Todos' ? 'white' : 'transparent'}}
        onClick={() => handleClick('Todos')}
      >
        Todos
      </Button>
      <Button 
        variant={selectedFilter === 'Dietetica' ? 'primary' : 'outline-secondary'} 
        style={{ marginRight: '10px', backgroundColor: selectedFilter === 'Dietetica' ? 'white' : 'transparent'}}
        onClick={() => handleClick('Dietetica')}
      >
        Dietética
      </Button>
      <Button 
        variant={selectedFilter === 'Semillas' ? 'primary' : 'outline-secondary'} 
        style={{ marginRight: '10px', backgroundColor: selectedFilter === 'Semillas' ? 'white' : 'transparent'}}
        onClick={() => handleClick('Semillas')}
      >
        Semillas
      </Button>
      <Button 
        variant={selectedFilter === 'Suplementos' ? 'primary' : 'outline-secondary'} 
        style={{ backgroundColor: selectedFilter === 'Suplementos' ? 'white' : 'transparent' }}
        onClick={() => handleClick('Suplementos')}
      >
        Suplementos
      </Button>
    </div>
  );
};

export default FiltroProductos;

