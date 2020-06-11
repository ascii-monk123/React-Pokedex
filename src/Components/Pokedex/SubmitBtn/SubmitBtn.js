import React from 'react';
import Classes from './SubmitBtn.module.css';

const SubmiBtn = (props) => {
  return (
    <button className={Classes.SubmitBtn}>
      <i className={'fa fa-search'} />
    </button>
  );
};

export default SubmiBtn;
