import React, { useEffect } from 'react';
import '../App.css';
interface Component2Props {

}

const Component2: React.FC<Component2Props> = () => {
  useEffect(() => {
    console.log('componente 2 foi instanciado');

    return () => {
      console.log('componente 2 foi destruido');
    }
  }, []);

  return (
    <p>
      Componente 2
    </p>
  );
};

export default Component2;