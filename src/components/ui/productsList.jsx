import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductList = ({ products, handleAddToCart, handleViewDetails }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'auto', gap: '35px', padding: '40px', borderRadius: '8px' }}>
      {/* Renderizar la lista de productos */}
      {products.map(product => (
        <div key={product.id}>
          <Card>
            {/* Imagen del producto */}
            <Card.Img variant="top" src={product.image} style={{ height: 'fit-content', objectFit: 'fill' }} />
            <Card.Body>
              {/* Nombre del producto */}
              <Card.Title style={{ fontSize: '1.80rem', marginBottom: '10px' }}>{product.name}</Card.Title>
              {/* Precio del producto */}
              <Card.Text style={{ marginBottom: '20px' }}>{product.price}</Card.Text>
              {/* Botón para ver detalles del producto */}
              <Button variant="primary" onClick={() => handleViewDetails(product)} style={{ width: '100%' }}>Ver detalles</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
