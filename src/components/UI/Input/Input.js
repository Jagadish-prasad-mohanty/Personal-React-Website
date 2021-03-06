import React from "react";
import classes from "./Input.module.css";
const Input =React.forwardRef((props,ref)=> {
  const placeholder = `Enter Your ${props.label}`;
  const name = props.label.toLowerCase();
  return (
    <div className={classes.Input} style={props.style}>
      <label htmlFor={name}><strong>{props.label} :</strong></label>
      <input id={name} type={props.type} value={props.value} onChange={props.onChange} placeholder={placeholder} 
      ref={ref} 

      />
    </div>
  );
})

export default Input;
