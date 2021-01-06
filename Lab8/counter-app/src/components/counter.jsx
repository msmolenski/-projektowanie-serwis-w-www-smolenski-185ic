import React, { Component } from "react";
import Form from 'react-bootstrap/Form';

//import dodanego pliku css
import "./counter.css";

//komponent zawierający elementy każdego countera
//dodano możliwość wpisania nazwy produktu oraz rozszerzania o dodatkowe produkty (countery)
class Counter extends Component {

  render() {
    return (
      <div className="card">
          <div>
          <Form.Control type="text" placeholder="Wpisz produkt..." />
          </div>
        <div className="row">
          <div className="col-md-1">
            <span style={{ fontSize: 24 }} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-secondary"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-info m-2"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              <i className="fa fa-minus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
            <button
                    className="btn btn-success m-2"
                    onClick={() => this.props.onAdd(this.props.counter.id)}
                >
                    <i className="fa fa-plus-circle" aria-hidden="true" />
                </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Brak" : value;
  };
}

export default Counter;