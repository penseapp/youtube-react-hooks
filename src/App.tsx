import './App.css';

import React, { useContext, useState } from 'react';
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';
import Componente3 from './components/Componente3';
import Componente4 from './components/Componente4';
import Componente5 from './components/Componente5';
import { ExampleContext, ExampleProvider } from './contexts/ExampleContext';

interface AppProps {

}

const App: React.FC<AppProps> = () => {
  const { number, setNumber } = useContext(ExampleContext);

  return (
    <div className="App">
      <header className="App-header">
        App.tsx: {number}

        <ExampleProvider>
          <Componente1 />
          <Componente2 />
          <Componente4 />
          <Componente5 />

        </ExampleProvider>

      </header>
    </div>
  );
};

export default App;