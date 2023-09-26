import { useState } from "react";

const useInput = (validateInputField) => {
    const [enteredInputValue, setEnteredInput] = useState('');
    const [inputIsTouched, setInputIsTouched] = useState(false);

    const inputChangeHandler = e => {
        setEnteredInput(e.target.value)
    }

    const validateInput = () => {
        setInputIsTouched(true)
    }

    const enteredInputValueIsValid = validateInputField(enteredInputValue);
    const inputHasError = !enteredInputValueIsValid && inputIsTouched;

    const reset = () => {
        setEnteredInput('');
        setInputIsTouched(false)
    }

    return {
        enteredInputValue,
        enteredInputValueIsValid,
        inputChangeHandler,
        validateInput,
        inputHasError,
        reset
    }
}

export default useInput;
