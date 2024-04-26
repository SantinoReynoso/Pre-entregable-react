import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const ProductDetail = ({ product, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleClickAddToCart = () => {
    handleAddToCart({ ...product, quantity: quantity });
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Precio: {product.price}</Card.Text>
          <Form.Group>
            <Form.Label>Cantidad:</Form.Label>
            <Form.Control type="number" value={quantity} onChange={handleQuantityChange} />
          </Form.Group>
          <Button variant="primary" onClick={handleClickAddToCart}>Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail;



