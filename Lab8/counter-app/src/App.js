import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

//
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
      { id: 6, value: 0 },
      { id: 7, value: 0 }
    ]
  };

  //funkcje obsługujące wydarzenia
  //obsługa zwiększania ilości danego produktu
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };

  //obsługa zmniejszania ilości danego produktu
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  //obsługa resetowania ilości produktów w koszyku
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  //obsługa usunięcia produktu/miejsca na produkt
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  //obsługa dodania countera
  handleAdd = counterId => {
    const item = {
      id: this.state.counters.length,
      value: 0
    }
    const newCounters = [item, ...this.state.counters]
    this.setState({ counters: newCounters })
  };
  //załadowanie startowego widoku koszyka
  handleRestart = () => {
    window.location.reload();
  };
//Przekazanie handlerów do komponentów
  render() {
    return (
      <div>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onRestart={this.handleRestart}
            onAdd={this.handleAdd}
          />
        </main>
      </div>
    );
  }
}

export default App;
