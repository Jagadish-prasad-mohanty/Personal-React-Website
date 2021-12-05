import React from 'react'
import classes from './Input.module.css';
function Input(props) {
    const placeholder=`Enter Your ${props.label}`
    const name=props.label.toLowerCase()
    return (
        <div className={classes.Input}>
                <label htmlFor={name} >{props.label} :</label>
                <input id={name} placeholder={placeholder}/>
        </div>
    )
}

export default Input
