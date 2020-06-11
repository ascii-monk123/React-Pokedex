import React, { Component } from 'react';
import Aux from '../../HOC/Auxillary';
import Classes from './Pokedex.module.css';

class Pokedex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Aux>
        <section className={Classes.Pokedex}>
          <h1 className={Classes.Title}>Search for a pokemon</h1>
        </section>
      </Aux>
    );
  }
}

export default Pokedex;
