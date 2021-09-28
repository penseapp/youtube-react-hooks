import React, { useState } from 'react';

interface UseStateProps {
  
}

const UseState: React.FC<UseStateProps> = () => {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(2);
  
  return (
    <div>
      <div>
        {count2}
      </div>
      <button onClick={() => setCount(count + 1)} >Incrementar</button>
      <button onClick={() => setCount(count - 1)} >Decrementar</button>
    </div>
  );
};

export default UseState;