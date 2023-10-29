import { useState } from "react";
import NewTodo from "./components/NewTodoUsingContext";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];
  const [todos, setTodos] = useState<Todo[]>([]); 
  //const todos: never[] means no values allowed in there

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

  return (
    <div>
      {/* <Todos items={['Learn React', 'Learn Typescript']} /> */}
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
