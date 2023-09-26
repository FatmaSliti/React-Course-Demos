import { useReducer } from "react";

const initialReducerState = {
    value: '',
    isTouched: false,
}

const inputStateReducer = (state, action) => { //state and action are passed automatically by React //the action we dispatched somewhere in our code
    if (action.type === 'CHANGE') {
        return {value: action.value, isTouched: state.isTouched}
    }
    if (action.type === 'BLUR') {
        return {isTouched: true}
    }
    if (action.type === 'RESET') {
        return {value: '', isTouched: false}
    }
    return initialReducerState
}

const useInput = (validateInputField) => {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialReducerState);


    const enteredInputValueIsValid = validateInputField(inputState.value);
    const inputHasError = !enteredInputValueIsValid && inputState.isTouched;


    const inputChangeHandler = (event) => {
        dispatch({ type: 'CHANGE', value: event.target.value })
    }

    const validateInput = () => {
        dispatch({ type: 'BLUR' })
    }

    const reset = () => {
        dispatch({ type: 'RESET' });
    }

    return {
        value: inputState.value,
        enteredInputValueIsValid,
        inputChangeHandler,
        validateInput,
        inputHasError,
        reset
    }
}

export default useInput;
