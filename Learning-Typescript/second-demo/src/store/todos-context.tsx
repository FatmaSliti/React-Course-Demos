import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
    items: Todo[];
    addTodo: (text: string) => void; //function type definition
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodoContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => {
        //function type definition
    },
});

const TodoContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId);
        })
    }

    const contextValue: TodoContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export default TodoContextProvider;
