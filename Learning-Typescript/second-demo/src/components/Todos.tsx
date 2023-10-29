// import Todo from "../models/todo";
// import TodosList from "./TodosList";
// import styles from "./Todos.module.css";

// // const Todos = (props: { items: string[], children}) => { //it'll become cumbersome
// const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
//     props
// ) => {
//     //React.FC is a generic type , FC stands for functional component
//     return (
//         <ul className={styles.todos}>
//             {props.items.map((item) => (
//                 // <li key={item.id}>{item.text}</li>
//                 // <TodosList item={item} />
//                 <TodosList
//                     key={item.id}
//                     text={item.text}
//                     onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
//                 />
//             ))}
//         </ul>
//     );
// };

// export default Todos;

//with context api

import TodosList from "./TodosList";
import styles from "./Todos.module.css";
import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    return (
        <ul className={styles.todos}>
            {todosCtx.items.map((item) => (
                <TodosList
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
};

export default Todos;
