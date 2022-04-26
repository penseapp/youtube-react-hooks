import React, { useContext } from 'react';
import { ExampleContext } from '../contexts/ExampleContext';
import Componente4 from './Componente4';

interface Componente3Props {
}

const Componente3: React.FC<Componente3Props> = ({ children }) => {
  const context = useContext(ExampleContext);

  return (
    <div>
      Componente 3: {context.number}
    </div>
  );
};

export default Componente3;