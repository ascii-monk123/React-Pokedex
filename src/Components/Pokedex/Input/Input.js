import React from 'react';
import Classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={Classes.Input}>
      <input
        type="text"
        onChange={props.changed}
        placeholder={'Enter pokemon name here....'}
      />
    </div>
  );
};

export default Input;
