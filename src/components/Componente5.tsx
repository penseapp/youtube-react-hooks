import React, { useContext } from 'react';
import { ExampleContext } from '../contexts/ExampleContext';
import Componente3 from './Componente3';

interface Componente5Props {
}

const Componente5: React.FC<Componente5Props> = ({ children }) => {
  const { number, setNumber } = useContext(ExampleContext);

  return (
    <div>
      Componente 5:
      number: {number}
      <Componente3 />
      <button onClick={() => setNumber(number - 1)}>
        decrementar
      </button>
    </div>
  );
};

export default Componente5;