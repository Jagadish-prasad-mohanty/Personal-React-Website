import React from "react";
import classes from "./Button.module.css";
function Button(props) {
  let btnClasses=[classes.Button,props.className?props.className:null];
  btnClasses=btnClasses.join(" ")
  console.log("Button.js -> btnClasses",btnClasses);
  return (
    <button className={btnClasses} disabled={props.disabled} onClick={props.onclick}>
      {props.btnName}
    </button>
  );
}

export default Button;
