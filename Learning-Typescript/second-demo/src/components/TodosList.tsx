import styles from './TodoItem.module.css';

// const TodosList: React.FC<{item: Todo}> = (props) => {
const TodosList: React.FC<{text: string; onRemoveTodo: () => void }> = (props) => {
    return (
        // <li>{props.item.text}</li>
        <li className={styles.item} onClick={props.onRemoveTodo}>{props.text}</li>
    )
}

export default TodosList
