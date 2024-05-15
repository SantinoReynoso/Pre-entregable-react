// ProductList.jsx

import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductList = ({ products, handleAddToCart, handleViewDetails }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'auto', gap: '35px', padding: '40px', borderRadius: '8px' }}>
      {/* Lista de productos */}
      {products.map(product => (
        <div key={product.id}>
          <Card>
            {/* por ahora tengo que poner una imagen por defecto */}
            <Card.Img variant="top" src={product.image} style={{ height: 'fit-content', objectFit: 'fill' }} />
            <Card.Body>
              <Card.Title style={{ fontSize: '1.80rem', marginBottom: '10px' }}>{product.name}</Card.Title>
              <Card.Text style={{ marginBottom: '20px' }}>{product.price}</Card.Text>
              <Button variant="primary" onClick={() => handleViewDetails(product)} style={{ width: '100%' }}>Ver detalles</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
