import { useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredMailTouched, setEnteredMailTouched] = useState(false);
    // const [formIsValid, setFormIsValid] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

    // const enteredMailIsValid = enteredEmail.includes('@');
    const enteredMailIsValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(enteredEmail);
    const emailInputIsValid = !enteredMailIsValid && enteredMailTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredMailIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = e => {
        setEnteredName(e.target.value);
    }

    const emailInputChangeHandler = e => {
        setEnteredEmail(e.target.value)
    }

    const formSubmissionHandler = e => {
        e.preventDefault();

        setEnteredNameTouched(true);
        setEnteredMailTouched(true)

        if (!enteredNameIsValid && !enteredMailIsValid) {
            return;
        }

        console.log(enteredName + enteredEmail);
        setEnteredName('');
        setEnteredNameTouched(false);

        setEnteredEmail('')
        setEnteredMailTouched(false)
    }

    const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control '
    const mailInputClasses = emailInputIsValid ? 'form-control invalid' : 'form-control '


    const validateNameInput = () => {
        setEnteredNameTouched(true);
    }

    const validateEmailInput = () => {
        setEnteredMailTouched(true);
    }

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={validateNameInput} />
                {nameInputIsValid && <p className="error-text">Name must not be empty!</p>}
            </div>
            <div className={mailInputClasses}>
                <label htmlFor='email'>Your EMAIL</label>
                <input type='email' id='email' onChange={emailInputChangeHandler} value={enteredEmail} onBlur={validateEmailInput} />
                {emailInputIsValid && <p className="error-text">Please enter a valid email!</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
