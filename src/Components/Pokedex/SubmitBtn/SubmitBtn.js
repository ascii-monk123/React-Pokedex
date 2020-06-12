import React from 'react';
import Classes from './SubmitBtn.module.css';

const SubmiBtn = (props) => {
  return (
    <button className={Classes.SubmitBtn} onClick={props.clicked}>
      <i className={'fa fa-search'} />
    </button>
  );
};

export default SubmiBtn;
