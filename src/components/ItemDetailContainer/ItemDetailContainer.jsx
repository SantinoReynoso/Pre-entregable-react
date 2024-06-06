import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../../data/productsData.json';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productsData.find(p => p.id === parseInt(productId));

  const handleAddToCart = (quantity) => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  const handleBack = () => {
    navigate('/productos');
  };

  return (
    <div>
      {product ? (
        <ItemDetail product={product} onBack={handleBack} handleAddToCart={handleAddToCart} />
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
