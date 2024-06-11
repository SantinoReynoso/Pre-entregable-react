// ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ products, handleViewDetails }) => {
  return (
    <div>
      <ItemList products={products} handleViewDetails={handleViewDetails} />
    </div>
  );
};

export default ItemListContainer;
