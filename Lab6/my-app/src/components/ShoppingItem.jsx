import React from 'react';
import "./ShoppingList.css";
import Button from 'react-bootstrap/Button';

const ShoppingItem = props => {
    return (
    <div className={`card ${props.element.isDone ? 'done' : ''}`} key={props.element.id}>
        <h2>{props.element.title}</h2>
        <Button variant="dark" onClick={() => props.markClicked(props.element.id)} disabled={props.element.isDone}>W koszyku</Button>
    </div>
    )
} 

export default ShoppingItem