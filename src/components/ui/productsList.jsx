// ProductList.jsx

import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductList = ({ products, handleAddToCart, setSelectedProduct }) => {
  const handleClick = (product) => {
    setSelectedProduct(product); // Establecer el producto seleccionado
  };

  return (
    <div>
      {/* Lista de productos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', padding: '20px' }}>
        {products.map(product => (
          <div key={product.id}>
            <Card style={{ width: '100%' }}>
              {/* Asegúrate de que la ruta de la imagen sea correcta */}
              <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{product.name}</Card.Title>
                <Card.Text style={{ marginBottom: '10px' }}>{product.price}</Card.Text>
                <Button variant="primary" onClick={() => handleClick(product)} style={{ width: '100%' }}>Ver detalles</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;


