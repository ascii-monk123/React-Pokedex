import React from 'react';
import logo from './logo.svg';
import './App.css';
import Aux from './HOC/Auxillary';
import Header from './Components/Header/Header';

function App() {
  return (
    <Aux>
      <Header />
    </Aux>
  );
}

export default App;
