    import React, { useState } from 'react';

    import ButtonCssModules from '../../UI/Button/ButtonCssModules';
    import styles from './CourseInput.module.css';

    const CourseInputStyledComponents = props => {
    const [enteredValue, setEnteredValue] = useState('');

    const [isValid, setIsValid] = useState(true)

    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
        setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
        setIsValid(false);
        return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
        <div className={`${styles['form-control']} ${!isValid && styles.invalid}`} >
            <label>Course Goal</label>
            <input type="text" onChange={goalInputChangeHandler} />
        </div>
        <ButtonCssModules type="submit">Add Goal</ButtonCssModules>
        </form>
    );
    };

    export default CourseInputStyledComponents;
