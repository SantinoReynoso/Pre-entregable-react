import React from 'react';

const ProductList = ({ products, handleAddToCart }) => {
  const handleClick = (product) => {
    // Lógica para agregar el producto al carrito
    handleAddToCart(product);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '25px', height: 'auto', overflow: 'auto' }}>
      {products.map(product => (
        <div key={product.id} style={{ width: '100%', marginBottom: '20px' }}>
          <div className="card" style={{ width: '100%' }}>
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.price}</p>
              <a href="#" className="btn btn-primary" onClick={() => handleClick(product)}>Agregar al carrito</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

