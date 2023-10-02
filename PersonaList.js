
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonaList = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    axios.get('/api/personas')
      .then((response) => {
        setPersonas(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de personas', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Personas</h2>
      <ul>
        {personas.map((persona) => (
          <li key={persona.persona_id}>{persona.nombre_persona}</li>
        ))}
      </ul>
    </div>
  );
};

export default PersonaList;
