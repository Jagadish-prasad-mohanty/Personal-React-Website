import React from "react";
import classes from "./Input.module.css";
const Input =React.forwardRef((props,ref)=> {
  const placeholder = `Enter Your ${props.label}`;
  const name = props.label.toLowerCase();
  return (
    <div className={classes.Input}>
      <label htmlFor={name}>{props.label} :</label>
      <input id={name} type={props.type}  placeholder={placeholder} 
      ref={ref} 

      />
    </div>
  );
})

export default Input;
