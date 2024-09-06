import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task, time) => {
    setTodos([...todos, { id: uuidv4(), task, time, completed: false }]);
    console.log(todos);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo key={todo.id} task={todo.task} time={todo.time} />
      ))}
    </div>
  );
};

export default TodoWrapper;
