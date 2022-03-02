import React, { useEffect, useState } from 'react';
import './App.css';
import Component1 from './examples/Component1';
import Component2 from './examples/Component2';
import LoadingFromGithub from './examples/LoadingFromGithub';

interface UseEffectProps {

}

const UseEffect: React.FC<UseEffectProps> = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('João');
  const [showComponente1, setShowComponente1] = useState<boolean>(true);
  const [showComponente2, setShowComponente2] = useState<boolean>(false);

  // Primeiro tipo
  // useEffect(() => {
  //   console.log('useEffect');
  // }, []);

  // Segundo tipo
  useEffect(() => {
    console.log('Quantidade: ' + count);
  }, [count]);

  // Terceiro tipo
  useEffect(() => {
    console.log('Nome: ' + name);
  }, [name]);

  useEffect(() => {
    console.log('Nome: ' + name + ' Quantidade: ' + count);
  }, [count, name]);

  useEffect(() => {
    console.log('Executou');

    // Cleanup
    return () => {
      console.log('Cleanup');
    }
  }, [count, name]);

  // return <LoadingFromGithub />;

  return (
    <div className="UseEffect">
      <header className="UseEffect-header">
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(5)}>Setar como 5</button>
        ---

        {showComponente1 && <Component1></Component1>}
        <button onClick={() => setShowComponente1(!showComponente1)}>
          {showComponente1 ? 'Destruir' : 'Instanciar'} #1
        </button>

        ---

        {showComponente2 && <Component2></Component2>}
        <button onClick={() => setShowComponente2(!showComponente2)}>
          {showComponente2 ? 'Destruir' : 'Instanciar'} #2
        </button>
      </header>
    </div>
  );
};

export default UseEffect;