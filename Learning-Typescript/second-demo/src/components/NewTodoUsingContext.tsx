import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import styles from './NewTodo.module.css';

const NewTodo: React.FC = () => { 
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => { //it's the event obj type which we get when we listen to the form submission
        event.preventDefault();

        // const enteredText = todoTextInputRef.current?.value;
        const enteredText = todoTextInputRef.current!.value;

        //we put '!' if we're 100% sure that the value will be there otherwise we put '?'

        if (enteredText.trim().length === 0) {
            //throw an error
            return;
        }

        // props.onAddTodo(enteredText);
        todosCtx.addTodo(enteredText);
    }

    return <form onSubmit={submitHandler} className={styles.form}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>Add Todo</button>
    </form>
}

export default NewTodo
