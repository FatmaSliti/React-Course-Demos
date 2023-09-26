import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    // const valueIsValid = enteredValue.trim() !== '';
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = e => {
        setEnteredValue(e.target.value);
    }

    const inputBlurHandler = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,//only the validity
        hasError, //modern JS syntax (hasError: hasError) : this is the validaty combined with touch
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput;
