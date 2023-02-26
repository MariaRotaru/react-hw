import React, { useState } from "react";
import TodoList from "./TodoList";

function TodoApp() {
  const [state, setState] = useState([
    { title: "Feed Cat" },
    { title: "Wash Car" },
  ]);

  // newTodo: {n: 4}
  // [{ n: 1}, { n: 2}, { n: 3}]
  // [...state, newTodo]
  // [{ n: 1}, { n: 3}]

  const deleteFn = (i) => {
    const newState = [...state.slice(0, i), ...state.slice(i + 1)];
    setState(newState);
  };

  const addTodo = () => {
    const newTodo = { title: "I was added!" };

    const newState = [...state, newTodo];

    setState(newState);
  };

  return (
    <TodoList
      todos={state}
      title="Todo App"
      deleteHandler={deleteFn}
      addTodo={addTodo}
    />
  );
}

export default TodoApp;