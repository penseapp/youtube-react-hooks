import React, { useEffect, useState } from 'react';
import '../App.css';

interface LoadingFromGithubProps {

}

const LoadingFromGithub: React.FC<LoadingFromGithubProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<unknown>(undefined);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (count <= 0) return;

    setIsLoading(true);

    // const response = await fetch('https://api.github.com/users/joaomantovani');
    // setResponse(await response.json());

    // Primeiro jeito
    // fetch('https://api.github.com/users/joaomantovani')
    //   .then(async response => {
    //     const data = await response.json();
    //     setResponse(data);+
    //   })
    //   .finally(() => setIsLoading(false));

    // Segundo jeito
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users/joaomantovani');
      setResponse(await response.json());
      setIsLoading(false);
    }

    fetchData();
  }, [count]);

  return isLoading ? (
    <>
      <p>Aguarde, carregando...</p>
      <button onClick={() => setCount(count + 1)}>Somar</button>
    </>
  ) : (
    <pre>
      {JSON.stringify(response, null, 2)}
    </pre>
  );
};

export default LoadingFromGithub;