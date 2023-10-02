import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmpresaList = () => {
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    axios.get('/api/empresas') 
      .then((response) => {
        setEmpresas(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de empresas', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Empresas</h2>
      <ul>
        {empresas.map((empresa) => (
          <li key={empresa.empresa_id}>{empresa.nombre_empresa}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmpresaList;