import React, { useState } from 'react'
import Card from '../UI/Card';
import styles from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props  => {

    const [enteredUserName, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        } // if these conditions are true the return statement finish the function execution  

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message :'Please enter a valid age (> 0)'
            })
            return;
        }
        // console.log(enteredUserName, enteredAge)
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={styles.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor='username' className={styles.label}>Username</label>
                <input id='username' type="text" onChange={usernameChangeHandler} value={enteredUserName} />
                <label htmlFor='age' className={styles.label}>Age</label>
                <input id='age' type="number" onChange={ageChangeHandler} value={enteredAge} />
                {/* everything entered in the input is always retrieved as a String */}
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </>
    )
}

export default AddUser
