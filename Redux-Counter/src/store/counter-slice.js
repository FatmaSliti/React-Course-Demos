import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({ //prepare a slice of our global state : we're preparing the reducer
    name: 'counter',
    initialState: { counter: 0, showCounter: true },
    reducers: { // an object of all the reducers this slice needs
        increment(state) {
            state.counter++; // Redux toolkit internally uses a package called immer which detects code like this and clone the existing state / create a new state / keep the ones we're not editing and override the state which we're editing in an immutable way
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload //it should be named payload (that's how redux toolkit works)
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

export const counterActions = counterSlice.actions;

// export default counterSlice or 
export default counterSlice.reducer
//since we need only the reducer