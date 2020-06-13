import React from 'react';
import Classes from './ApiBtn.module.css';

const ApiBtn = (props) => {
  return (
    <a
      className={Classes.ApiBtn}
      href={props.destination}
      target={'_blank'}
    >
      {props.name}
    </a>
  );
};

export default ApiBtn;
