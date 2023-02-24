import classes from './Input.module.css';
import React from 'react';

// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props, ref) => {
  const style = `${classes.input} ${props.className}`;
  return (
    <div className={style}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});

export default Input;
//{...props.input}  => input = {type:'', name:''} in props and it will be converted into
//<input type='' name=''/>, so we can add flexible amount of properties to the input

//React.forwardRef() allows us to pass ref to custom component
