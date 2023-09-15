import React, { Fragment, useReducer, useState } from "react";

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
};

const reducer = (state, action) => {
    if (action.type === ACTIONS.INCREMENT) {
        return { counter: state.counter + 1 };
    } else if (action.type === ACTIONS.DECREMENT) {
        return { counter: state.counter - 1 };
    } else {
        return state;
    }
};

function CounterApp() {
    const [state, dispatcher] = useReducer(reducer, { counter: 0 }); // reducer is triggered when an action is dispatched

    // const [counter, setCounter] = useState(0);
    const increment = () => {
        // setCounter (prevState => prevState + 1)
        dispatcher({ type: ACTIONS.INCREMENT });
    };

    const decrement = () => {
        // setCounter(prevState => prevState - 1)
        dispatcher({ type: ACTIONS.DECREMENT });
    };

    return (
        <Fragment>
            <button onClick={decrement}>-</button>
            <span>{state.counter}</span>
            <button onClick={increment}>+</button>
        </Fragment>
    );
}

export default CounterApp;
