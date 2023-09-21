import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button Running')
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      // disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button); //please if we got no new values don't execute this component and its childs again
//it continue on appearing because it's prop value does change : comparing two objects on every re-evaluation returns false (it's a js comportment not sth special to React) 

