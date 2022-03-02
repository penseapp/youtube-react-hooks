import React, { useEffect } from 'react';
import '../App.css';
interface Component1Props {

}

const Component1: React.FC<Component1Props> = () => {
  useEffect(() => {
    console.log('componente 1 foi instanciado');

    return () => {
      console.log('componente 1 foi destruido');
    }
  }, []);

  return (
    <p>
      Componente 1
    </p>
  );
};

export default Component1;