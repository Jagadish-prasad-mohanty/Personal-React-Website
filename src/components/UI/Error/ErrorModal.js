import React from 'react';
import classes from './ErrorModal.module.css';
function ErrorModal(props) {
    let extraClass= [];
    extraClass.push(classes.Err);
   extraClass.push(props.status==="error"?classes.err:props.status==="complete"?classes.suc:classes.pnd);
    const cancelModal =()=>{
        props.close();
    }
    console.log("ErrorModal",extraClass.join(' '));
    return (
        <div className={extraClass.join(' ')}>
            <p>{props.msg}</p>
            <p onClick={cancelModal}>@</p>
        </div>
    )
}

export default ErrorModal
