import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        text: input.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") {
      return todo.completed;
    } else if (filter === "Pending") {
      return !todo.completed;
    }
    return true; // "All" filter
  });

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTodo}>Add Todo</button>
      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
