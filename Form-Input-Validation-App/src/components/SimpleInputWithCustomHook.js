import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const { //destructuring
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value));

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (e) => {
        e.preventDefault();

        console.log(enteredName + enteredEmail);

        // setEnteredName("");
        // setEnteredNameTouched(false);
        resetNameInput()

        resetEmailInput();
    };

    const nameInputClasses = nameInputHasError
        ? "form-control invalid"
        : "form-control ";
    const mailInputClasses = emailInputHasError
        ? "form-control invalid"
        : "form-control ";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameChangeHandler}
                    value={enteredName}
                    onBlur={nameBlurHandler}
                />
                {nameInputHasError && (
                    <p className="error-text">Name must not be empty!</p>
                )}
            </div>
            <div className={mailInputClasses}>
                <label htmlFor="email">Your EMAIL</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailChangeHandler}
                    value={enteredEmail}
                    onBlur={emailBlurHandler}
                />
                {emailInputHasError && (
                    <p className="error-text">Please enter a valid email!</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
