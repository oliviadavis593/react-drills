import React from 'react';
import HelloWorld from './state-drills/HelloWorld'
import Bomb from './state-drills/Bomb'
import './App.css';

function App() {
  return (
    <div>
      <h2>Hello, world!</h2>
      <HelloWorld />
      <h2>Bomb!</h2>
      <Bomb />
    </div>
  );
}

export default App;
