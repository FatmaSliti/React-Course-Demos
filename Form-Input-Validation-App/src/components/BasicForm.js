import { useState } from "react";

const BasicForm = () => {

  const [enteredFirstname, setEnteredFirstname] = useState('');
  const [enteredLastname, setEnteredLastname] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const [firstnameIsTouched, setFirstnameIsTouched] = useState(false);
  const [lastnameIsTouched, setLastnameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const enteredFirstNameIsValid = enteredFirstname.trim() !== '';
  const firstNameInputHasError = !enteredFirstNameIsValid && firstnameIsTouched;

  const enteredLastNameIsValid = enteredLastname.trim() !== '';
  const lastNameInputHasError = !enteredLastNameIsValid && lastnameIsTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const EmailInputHasError = !enteredEmailIsValid && emailIsTouched;

  let formIsValid = false

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    setFirstnameIsTouched(true)
    setLastnameIsTouched(true)
    setEmailIsTouched(true)

    console.log(enteredFirstname + ' ' + enteredLastname + ' ' + enteredEmail)

    setEnteredFirstname('');
    setFirstnameIsTouched(false)

    setEnteredLastname('');
    setLastnameIsTouched(false)

    setEnteredEmail('');
    setEmailIsTouched(false)
  }

  const firstnameChangeHandler = e => {
    setEnteredFirstname(e.target.value)
  }

  const lastnameChangeHandler = e => {
    setEnteredLastname(e.target.value)
  }

  const emailChangeHandler = e => {
    setEnteredEmail(e.target.value)
  }


  const validateFirstnameInput = () => {
    setFirstnameIsTouched(true)
  }

  const validateLastnameInput = () => {
    setLastnameIsTouched(true)
  }
  const validateEmailInput = () => {
    setEmailIsTouched(true)
  }

  const nameclasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
  const lastnameclasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailclasses = EmailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameclasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstname} onChange={firstnameChangeHandler} onBlur={validateFirstnameInput} />
          {firstNameInputHasError && <p>Firstname should not be empty!</p>}
        </div>
        <div className={lastnameclasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastname} onChange={lastnameChangeHandler} onBlur={validateLastnameInput} />
          {lastNameInputHasError && <p>Lastname should not be empty!</p>}
        </div>
      </div>
      <div className={emailclasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='email' id='name' value={enteredEmail} onChange={emailChangeHandler} onBlur={validateEmailInput} />
        {EmailInputHasError && <p>Email should include @ symbol surrounded by text!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
