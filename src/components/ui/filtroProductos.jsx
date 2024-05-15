// FiltroProductos.jsx

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const FiltroProductos = ({ handleFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  const handleClick = (filter) => {
    handleFilter(filter);
    setSelectedFilter(filter);
  };

  return (
    <div style={{ textAlign: 'center', padding: '10px'}}>
      <Button 
        variant={selectedFilter === 'Todos' ? 'primary' : 'outline-secondary'} 
        style={{ marginRight: '10px', backgroundColor: selectedFilter === 'Todos' ? 'gray' : 'transparent'}}
        onClick={() => handleClick('Todos')}
      >
        Todos
      </Button>
      <Button 
        variant={selectedFilter === 'Dietetica' ? 'primary' : 'outline-secondary'} 
        style={{ marginRight: '10px', backgroundColor: selectedFilter === 'Dietetica' ? 'gray' : 'transparent'}}
        onClick={() => handleClick('Dietetica')}
      >
        Dietetica
      </Button>
      <Button 
        variant={selectedFilter === 'Semillas' ? 'primary' : 'outline-secondary'} 
        style={{ marginRight: '10px', backgroundColor: selectedFilter === 'Semillas' ? 'gray' : 'transparent'}}
        onClick={() => handleClick('Semillas')}
      >
        Semillas
      </Button>
      <Button 
        variant={selectedFilter === 'Suplementos' ? 'primary' : 'outline-secondary'} 
        style={{ backgroundColor: selectedFilter === 'Suplementos' ? 'gray' : 'transparent' }}
        onClick={() => handleClick('Suplementos')}
      >
        Suplementos
      </Button>
    </div>
  );
};

export default FiltroProductos;
