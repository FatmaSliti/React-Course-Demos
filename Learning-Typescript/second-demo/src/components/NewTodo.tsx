import { useRef } from "react";
import styles from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => { //define the concrete prop obj definition of my own props which I wanna add in here that will be merged with the brace props
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

        props.onAddTodo(enteredText);
    }

    return <form onSubmit={submitHandler} className={styles.form}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>Add Todo</button>
    </form>
}

export default NewTodo
