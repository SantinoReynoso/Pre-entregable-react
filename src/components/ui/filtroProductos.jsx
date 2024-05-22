import React, { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'

const FiltroProductos = ({ handleFilter }) => {
  // Estado para almacenar el filtro seleccionado
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  // Función para manejar el clic en un filtro
  const handleClick = (filter) => {
    handleFilter(filter); // Llama a la función handleFilter del componente padre
    setSelectedFilter(filter); // Actualiza el estado del filtro seleccionado
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

