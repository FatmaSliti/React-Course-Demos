import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false); //check wetherthe user had the chance to editin it or no

  const nameInputChangeHandler = e => {
    setEnteredName(e.target.value);

    if (e.target.value.trim() !== '') {
      setEnteredNameIsValid(true)
    }
  }

  const formSubmissionHandler = e => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
    setEnteredName('');
  }

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control '

  const validateInput = event => {
    setEnteredNameTouched(true); //if an input loses touch it definitely was touched

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
    }
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        {/* <input type='text' id='name' ref={name} /> */}
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={validateInput} />
        {nameInputIsValid && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>

  );
};

export default SimpleInput;
