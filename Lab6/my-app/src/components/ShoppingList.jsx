import React from 'react';
import ShoppingItem from "./ShoppingItem"


class ShoppingList extends React.Component {
    state = {
        elements: [
            {id: 0, isDone: false, title: 'Papryka'},
            {id: 1, isDone: false, title: 'Bułki'}
        ],
        inputValue: ''
    }

    markDone(id) {
        const index = this.state.elements
                        .findIndex(x => x.id === id)
        const newElements = this.state.elements
        newElements[index].isDone = true
        this.setState({ elements: newElements })
        this.setState({ inputValue: '' })
    }

    addItem(){
        if (!this.state.inputValue){
            alert("Nie można dodać pustego produktu")
            return;
        }
        const item = {
            id: this.state.elements.length,
            title: this.state.inputValue
        }
        const newElements = [item, ...this.state.elements]
        this.setState({ elements: newElements })
        this.setState({ inputValue: '' })
    }

    inputHandler(event) {
        const newValue = event.target.value
        this.setState({ inputValue: newValue })
    }

    render(){
        const elements = this.state.elements.map(e => {
        return <ShoppingItem element={e} key={e.id} markClicked={this.markDone.bind(this)} />
        })

        return (
            <div>
                Lista zakupów
                <input typu="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)} />
                <button onClick={this.addItem.bind(this)}>Dodaj</button>
                {elements}
            </div>
        )
    }
}

export default ShoppingList