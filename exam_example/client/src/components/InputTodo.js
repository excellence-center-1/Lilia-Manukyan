import React, { useState } from "react";
import './InputTodo.css'; // Import your custom CSS file

const InputTodo = (props) => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const newTodo = await response.json();
      props.addTodo(newTodo.description); // Call the addTodo function
      setDescription(""); // Clear the input field
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="input-todo">
      <h1 className="todo-title">Pern Todo List</h1>
      <form className="todo-form" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="todo-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a new todo"
        />
        <button className="todo-button">Add</button>
      </form>
    </div>
  );
};

export default InputTodo;
