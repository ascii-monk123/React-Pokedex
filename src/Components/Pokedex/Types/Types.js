import React from 'react';
import Chip from '@material-ui/core/Chip';
import Classes from './Types.module.css';

const Type = (props) => {
  let color = props.label;
  let classes = [Classes.Type, Classes].join(' ');
  let colorData = {
    bug: '#c6d16e',
    dark: '#705848',
    dragon: '#a27dfa',
    fairy: '#f4bdc9',
    steel: '#b8b8d0',
    grass: '#a7db8d',
    poison: '#a040a0',
    fighting: '#d67873',
    fire: '#f5ac78',
    water: '#6890f0',
    flying: '#705898',
    ghost: '#a292bc',
    ground: '#e0c068',
    ice: '#bce6e6',
    electric: '#fae078',
    normal: '#c6c6a7',
    rock: '#d1c17d',
  };
  return (
    <Chip
      label={props.label}
      className={classes}
      style={{
        backgroundColor: `${colorData[color]}`,
        color: '#fff',
        marginRight: '5px',
      }}
    />
  );
};

export default Type;
