import React, { Component } from "react";
import Counter from "./counter";

//komponent zawierający produkty koszyka (countery), obsługujący reset i restart koszyka 
// oraz przekazujący handlery do komponentu counter
class Counters extends Component {
    render() {
        const {
            onReset,
            onIncrement,
            onDelete,
            onAdd,
            onDecrement,
            counters,
            onRestart
        } = this.props;
        return (
            <div>
                <button
                    className="btn btn-success m-2"
                    onClick={onReset}
                    disabled={counters.length === 0 ? "disabled" : ""}
                >
                    <i className="fa fa-refresh" aria-hidden="true" />
                </button>
                <button
                    className="btn btn-primary m-2"
                    onClick={onRestart}
                    disabled={counters.length !== 0 ? "disabled" : ""}
                >
                    <i className="fa fa-recycle" aria-hidden="true" />
                </button>

                {counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                        onAdd={onAdd}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;