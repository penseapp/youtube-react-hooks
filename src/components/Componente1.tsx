import React, { useContext } from 'react';
import { ExampleContext } from '../contexts/ExampleContext';
import Componente2 from './Componente2';

interface Componente1Props {
}

const Componente1: React.FC<Componente1Props> = ({ children }) => {
  const context = useContext(ExampleContext);
  return (
    <div>
      Componente 1: {context.number}
    </div>
  );
};

export default Componente1;