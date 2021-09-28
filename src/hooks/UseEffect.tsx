import React, { useEffect, useState } from 'react';

interface UseEffectProps {
  
}

const UseEffect: React.FC<UseEffectProps> = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Meu componente iniciou")
  }, []);

  useEffect(() => {
    console.log("Código a ser executado")

    return () => {
      console.log("Código foi removido")
    }
  }, []);
  
  useEffect(() => {
    console.log("Novo valor da count: " + count);
  }, [count]);

  return (
    <div>
      <div>
        {count}
      </div>
      <button onClick={() => setCount(count + 1)}>Incrementar count</button>
    </div>
  );
};

export default UseEffect;