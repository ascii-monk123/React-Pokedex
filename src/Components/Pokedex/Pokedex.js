import React, { Component } from 'react';
import Aux from '../../HOC/Auxillary';
import Classes from './Pokedex.module.css';
import Input from './Input/Input';
import SubmitBtn from './SubmitBtn/SubmitBtn';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
    };
  }

  inputChangedHandler = (valueText) => {
    console.log(this.state.input);
    if (valueText === '') {
      valueText = null;
    }
    this.setState({
      input: valueText,
    });
  };

  render() {
    return (
      <Aux>
        <section className={Classes.Pokedex} id={'Pokedex'}>
          <h1 className={Classes.Title}>Search for a pokemon</h1>
          <Input changed={(e) => this.inputChangedHandler(e.target.value)} />
          <SubmitBtn />
        </section>
      </Aux>
    );
  }
}

export default Pokedex;
