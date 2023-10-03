import { configureStore } from '@reduxjs/toolkit';

// import counterSlice from './counter-slice';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';


const store = configureStore({ 
    reducer: {
        // counter: counterSlice.reducer,
        counter: counterReducer,
        auth: authReducer,
    }
});




export default store;
