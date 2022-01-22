import React from 'react'
import classes from  './Card.module.css';
function Card(props) {
    const cardClass=[classes.Card,props.className]

    return (
        <div className={cardClass.join(' ')} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default Card
