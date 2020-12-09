import React from 'react';
import "./ShoppingList.css"

const ShoppingItem = props => {
    return (
    <div className={`card ${props.element.isDone ? 'done' : ''}`} key={props.element.id}>
        <h2>{props.element.title}</h2>
        <button onClick={() => props.markClicked(props.element.id)} disabled={props.element.isDone}>W koszyku</button>
    </div>
    )
} 

export default ShoppingItem