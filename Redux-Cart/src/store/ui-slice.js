import { createSlice } from '@reduxjs/toolkit'
import { act } from '@testing-library/react';

const initialState = { isShown: false, notification: null };

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        toggleCart(state) {
            state.isShown = !state.isShown
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
