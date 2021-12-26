import React from 'react'
import Card from '../Card/Card'
import classes from './Modal.module.css';
function Modal(props) {
    return (
        <div >
            <Card className={classes.Modal}>{props.children}</Card>
            <div className={classes.Backdrop} onClick={()=>props.closeModal()}></div>
        </div>
    )
}

export default Modal
