import React, { createContext } from 'react';

interface IExampleContext {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
}

export const ExampleContext = createContext<IExampleContext>({
  number: 0,
  setNumber: () => console.warn('setNumber not ready'),
});

export const ExampleProvider: React.FC = ({ children }) => {
  const [number, setNumber] = React.useState<number>(0);

  return (
    <ExampleContext.Provider value={{ number, setNumber }}>
      {children}
    </ExampleContext.Provider>
  );
};