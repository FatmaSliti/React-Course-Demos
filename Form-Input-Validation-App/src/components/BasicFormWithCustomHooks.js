import useInput from "../hooks2/use-input";

const BasicForm = () => {

    const isNotEmpty = value => value.trim() !== '';
    const isEmail = value => value.includes('@');

    const { enteredInputValue: enteredFirstname, enteredInputValueIsValid: enteredFirstNameIsValid, inputChangeHandler: firstnameChangeHandler, validateInput: validateFirstnameInput, inputHasError: firstNameInputHasError, reset: resetFirstName } = useInput(isNotEmpty);
    const { enteredInputValue: enteredLastname, enteredInputValueIsValid: enteredLastNameIsValid, inputChangeHandler: lastnameChangeHandler, validateInput: validateLastnameInput, inputHasError: lastNameInputHasError, reset: resetLastName } = useInput(isNotEmpty);
    const { enteredInputValue: enteredEmail, enteredInputValueIsValid: enteredEmailIsValid, inputChangeHandler: emailChangeHandler, validateInput: validateEmailInput, inputHasError: emailInputHasError, reset: resetEmail } = useInput(isEmail);

    let formIsValid = false;

    if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
        formIsValid = true
    }

    const formSubmitHandler = event => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        } //ofcourse the button is desabled but we should not forget that the user can modify the code from the dev tools 

        console.log(enteredFirstname + ' ' + enteredLastname + ' ' + enteredEmail)

        resetFirstName();
        resetLastName();
        resetEmail();
    }

    const FirstNameclasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
    const lastnameclasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
    const emailclasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='control-group'>
                <div className={FirstNameclasses}>
                    <label htmlFor='name'>First Name</label>
                    <input type='text' id='name' value={enteredFirstname} onChange={firstnameChangeHandler} onBlur={validateFirstnameInput} />
                    {firstNameInputHasError && <p className="error-text">Please enter a first name!</p>}
                </div>
                <div className={lastnameclasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name' value={enteredLastname} onChange={lastnameChangeHandler} onBlur={validateLastnameInput} />
                    {lastNameInputHasError && <p className="error-text">Please enter a last name!</p>}
                </div>
            </div>
            <div className={emailclasses}>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='email' id='name' value={enteredEmail} onChange={emailChangeHandler} onBlur={validateEmailInput} />
                {emailInputHasError && <p className="error-text">Please enter a valid email address!</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid} >Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
