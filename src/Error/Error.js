import React from 'react';
import Classes from './Error.module.css';

const Error = (props) => {
  return (
    <div className={Classes.Error}>
      
      <p>{props.children}</p>
    </div>
  );
};

export default Error;
