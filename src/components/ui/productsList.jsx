import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from '@chakra-ui/react'

const ProductList = ({ products, handleViewDetails }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'auto', gap: '35px', padding: '40px', borderRadius: '8px' }}>
      {/* Renderizar la lista de productos */}
      {products.map(product => (
        <div key={product.id}>
          <Card style={{borderRadius: '5%'}}>
            {/* Imagen del producto */}
            <Card.Img variant="top" src={product.image} style={{ height: 'fit-content', objectFit: 'fill', borderRadius: '15%', padding: "13px"}} />
            <Card.Body>
              {/* Nombre del producto */}
              <Card.Title style={{ fontSize: '1.80rem', marginBottom: '10px' }}>{product.name}</Card.Title>
              {/* Precio del producto */}
              <Card.Text style={{ marginBottom: '20px', fontSize: '1.50rem' }}>${product.price}</Card.Text>    
              {/* Botón ver detalles*/}
                <Button colorScheme='teal' size='lg' onClick={() => handleViewDetails(product)} style={{ marginTop: '10px', width: '100%' }}>Ver detalles</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductList;