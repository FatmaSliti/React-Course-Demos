import { createStore } from 'redux';
// import redux from 'redux';

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: true
        }
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.value,
            showCounter: true
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: true
        }
    }

    // we repeat showCounter: true each time because the action in Redux store is replaced and do not only override the mutated value  

    if (action.type === 'toggle') {
        return {
            showCounter : !state.showCounter,
            counter: state.counter,
        }
    }
    return state
}

const store = createStore(counterReducer);

export default store;
