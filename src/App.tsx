import React from 'react';
import { UseEffect } from './UseEffect';
import { UseState } from './UseState';
import './App.css';

interface AppProps {

}

const App: React.FC<AppProps> = () => {
   return (<UseEffect />);
};

// const App: React.FC<AppProps> = () => {
//   return (<UseState />);
// };

export default App;