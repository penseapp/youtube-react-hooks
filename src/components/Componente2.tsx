import React from 'react';
import Componente3 from './Componente3';

interface Componente2Props { }

const Componente2: React.FC<Componente2Props> = ({ children }) => {
  return (
    <div>
      Componente 2
    </div>
  );
};

export default Componente2;