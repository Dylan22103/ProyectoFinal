
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MatchList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get('/api/matches') 
      .then((response) => {
        setMatches(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de matches', error);
      });
  }, []);

  return (
    <div>
      <h2>Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.match_id}>
            {match.nombre_persona} - {match.nombre_empresa}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchList;
