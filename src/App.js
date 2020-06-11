import React from 'react';
import logo from './logo.svg';
import './App.css';
import Aux from './HOC/Auxillary';
import Header from './Components/Header/Header';
import Pokedex from './Components/Pokedex/Pokedex';

function App() {
  return (
    <Aux>
      <Header />
      <Pokedex />
    </Aux>
  );
}

export default App;
