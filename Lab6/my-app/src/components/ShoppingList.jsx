import React from 'react';
import ShoppingItem from "./ShoppingItem"
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container'

class ShoppingList extends React.Component {
    state = {
        elements: [
            {id: 0, isDone: false, title: 'Papryka'},
            {id: 1, isDone: false, title: 'Pomidor'}
        ],
        inputValue: '',
        visible: false
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
            this.setState({visible: true})
            setTimeout(() => {
                this.setState({
                    visible: ! this.state.visible
                })
              }, 3000);
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
            <Container>
                <h2>Lista zakupów</h2>
                <Alert variant="warning" show={this.state.visible}>Nie można dodać pustego produktu</Alert>
                <div><input className="form-control form" typu="text" value={this.state.inputValue} onChange={this.inputHandler.bind(this)} />
                <Button variant="dark" className="add-button" onClick={this.addItem.bind(this)}>Dodaj</Button></div>
                {elements}
            </Container>
        )
    }
}

export default ShoppingList