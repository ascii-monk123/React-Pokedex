import React from 'react';
import Classes from './ReachSearch.module.css';

const ReachSearch = (props) => {
  return (
    <div className={Classes.ReachSearch}>
      <button>{props.label}</button>
    </div>
  );
};

export default ReachSearch;
