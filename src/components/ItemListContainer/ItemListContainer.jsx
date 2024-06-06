import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import productsData from '../../data/productsData.json';
import ItemList from '../ui/ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // obtención de datos, DESPUES podes hacer una llamada a una API
    setProducts(productsData);
  }, []);

  const handleViewDetails = (product) => {
    navigate(`/productos/${product.id}`);
  };

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <ItemList products={products} handleViewDetails={handleViewDetails} />
    </div>
  );
};

export default ItemListContainer;

