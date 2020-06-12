import React, { Component } from 'react';
import Aux from '../../HOC/Auxillary';
import Classes from './Pokedex.module.css';
import Input from './Input/Input';
import SubmitBtn from './SubmitBtn/SubmitBtn';
import axios from 'axios';
import Error from '../../Error/Error';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      pokemon: null,
      isError: false,
    };
  }

  inputChangedHandler = (valueText) => {
    if (valueText === '') {
      valueText = null;
    }
    this.setState({
      input: valueText,
      isError: false,
    });
  };
  getPokemonDetailsHandler = (query) => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/' + query)
      .then((response) => {
        let data = {
          abilities: response.data.abilities.map((ability) => {
            return ability.ability.name;
          }),
          height: response.data.height,
          id: response.data.id,
          name: response.data.name,
          img: response.data.sprites.front_default,
          statName: response.data.stats.map((stat) => stat.stat.name),
          baseStats: response.data.stats.map((stat) => stat.base_stat),
          types: response.data.types.map((type) => type.type.name),
          weight: response.data.weight,
        };
        //this.logState(data);
        this.setState({
          pokemon: { ...data },
          isError: false,
        });
      })
      .catch((err) => {
        this.setState({
          isError: true,
        });
      });
  };
  logState(data) {
    console.log(data);
  }

  render() {
    let errMsg = null;
    if (this.state.isError) {
      errMsg = (
        <Error>
          🎃🎃 Sorry unable to complete request at the moment. Invalid pokemon
          name or server error!!!!!
        </Error>
      );
    }
    return (
      <Aux>
        <section className={Classes.Pokedex} id={'Pokedex'}>
          <h1 className={Classes.Title}>Search for a pokemon</h1>
          <Input changed={(e) => this.inputChangedHandler(e.target.value)} />
          <SubmitBtn
            clicked={(e) => this.getPokemonDetailsHandler(this.state.input)}
          />
          {errMsg}
        </section>
      </Aux>
    );
  }
}

export default Pokedex;
