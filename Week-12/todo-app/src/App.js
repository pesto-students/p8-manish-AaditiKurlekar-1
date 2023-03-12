import Style from "./App.css";
import { useState } from "react";
import TodoInput from './TodoInput.jsx'
import TodoList from './TodoList.jsx'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      {/* CREATION */}
      <div className="MainScreen">
        <h2> TODO </h2>
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo}></TodoInput>
        {/* DISPLAY AND DELETE*/}
        <TodoList list={todos} deleteTodo={deleteTodo}> </TodoList>
      </div>
    </div>
  );
};

export default App;
