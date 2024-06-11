// ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import productsData from '../../data/productsData.json';
import ItemList from './ItemList';

const ItemListContainer = ({ handleViewDetails }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div>
      <ItemList products={products} handleViewDetails={handleViewDetails} />
    </div>
  );
};

export default ItemListContainer;
