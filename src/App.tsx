import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UseState from './hooks/UseState';
import UseEffect from './hooks/UseEffect';

function App() {
  const [shouldRender, setShouldRender] = useState<boolean>(true);

  return (
    <div className="App">
      <header className="App-header">
        {shouldRender && <UseEffect />}
        {/* <button onClick={() => setShouldRender(!shouldRender)}>Remover useEffect componente</button> */}
      </header>
    </div>
  );
}

export default App;
