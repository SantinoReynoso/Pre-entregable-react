import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import FiltroProductos from './filtroProductos'; // Importa el componente FiltroProductos

const ProductList = ({ products }) => {
  const [productosFiltrados, setProductosFiltrados] = useState(products);

  const handleFiltrarProductos = (productosFiltrados) => {
    setProductosFiltrados(productosFiltrados);
  };

  return (
    <div>
      {/* Componente de filtro */}
      <FiltroProductos products={products} onFiltrarProductos={handleFiltrarProductos} />

      {/* Lista de productos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', height: 'auto', overflow: 'auto' }}>
        {productosFiltrados.map(product => (
          <div key={product.id}>
            <Card style={{ width: '18rem' }}>
              {/* Asegúrate de que la ruta de la imagen sea correcta */}
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary" onClick={() => handleClick(product)}>Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
