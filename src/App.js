import React from 'react';
import logo from './logo.svg';
import './App.css';
import Aux from './HOC/Auxillary';
import Header from './Components/Header/Header';
import Pokedex from './Components/Pokedex/Pokedex';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Aux>
      <Header />
      <Pokedex />
      <Footer />
    </Aux>
  );
}

export default App;
