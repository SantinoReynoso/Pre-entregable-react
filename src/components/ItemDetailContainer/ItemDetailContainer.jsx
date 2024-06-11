import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/productsData';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find((product) => product.id === parseInt(productId, 10));
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;

