import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {

  console.log("Button Running");

  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button); //Button.js will be re-evaluated if useCallback is not used to store the paragraphToggleHandler function
