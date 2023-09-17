const TodoInput = ( {todo, setTodo, addTodo} ) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="todo-input"
        value={todo}
        placeholder="Add your new todo..."
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="add-button" onClick={addTodo}>
        +
      </button>
    </div>
  );
};

export default TodoInput;
//<TodoList list={todos} deleteTodo={deleteTodo}> </TodoList>
