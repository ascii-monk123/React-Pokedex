import React from 'react';
import Classes from './ApiBtn.module.css';

const ApiBtn = (props) => {
  return <button className={Classes.ApiBtn}>{props.name}</button>;
};

export default ApiBtn;
