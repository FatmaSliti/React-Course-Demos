// import { createStore } from 'redux';
// import { createReducer } from '@reduxjs/toolkit'; // could be used but createSlice is more powerful
import { createSlice, configureStore } from '@reduxjs/toolkit';
//configureStore like createStore creates a store but it makes merging reducers into one reducer easier

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

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentification',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    }
})

const store = configureStore({ // configure store should be called only once with one root reducer
    // reducer: counterSlice.reducer
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
});

export const counterActions = counterSlice.actions;

export const authActions = authSlice.actions;

export default store;
