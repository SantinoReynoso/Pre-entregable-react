// ProductList.jsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductList = ({ products, handleAddToCart, handleViewDetails }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: 'auto', gap: '35px', padding: '20px', borderRadius: '8px' }}>
      {/* Lista de productos */}
      {products.map(product => (
        <div key={product.id}>
          <Card>
            {/* Asegúrate de que la ruta de la imagen sea correcta */}
            <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{product.name}</Card.Title>
              <Card.Text style={{ marginBottom: '10px' }}>{product.price}</Card.Text>
              <Button variant="primary" onClick={() => handleViewDetails(product)} style={{ width: '100%' }}>Ver detalles</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
