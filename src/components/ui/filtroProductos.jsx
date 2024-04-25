import React from 'react';

const FiltroProductos = ({ jsonData, onFiltrarProductos }) => {
  const handleFiltrarProductos = (categoria) => {
    if (categoria === 'todas') {
      // Si se selecciona "Todas", se muestran todos los productos
      onFiltrarProductos(jsonData);
    } else {
      // Filtrar productos por categoría
      const productosFiltrados = jsonData.filter(producto => producto.categoria === categoria);
      onFiltrarProductos(productosFiltrados);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {/* Botones de filtrado */}
      <button onClick={() => handleFiltrarProductos('todas')} className="btn btn-outline-secondary mr-2">Todas</button>
      <button onClick={() => handleFiltrarProductos('semillas')} className="btn btn-outline-secondary mr-2">Semillas</button>
      <button onClick={() => handleFiltrarProductos('dietetica')} className="btn btn-outline-secondary mr-2">Dietetica</button>
      <button onClick={() => handleFiltrarProductos('suplementos')} className="btn btn-outline-secondary">Suplementos</button>
    </div>
  );
};

export default FiltroProductos;

