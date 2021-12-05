import React from 'react'
import classes from './Button.module.css';
function Button(props) {
    return (
        <button className={classes.Button}>{props.btnName}</button>
    )
}

export default Button
