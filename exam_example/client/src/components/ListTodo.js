import React, { useEffect, useState } from "react";
import EditTodo from "./EditTodo.js";
import './ListTodo.css'; // Import your custom CSS file

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState(""); // State to store the new todo text

  // Delete todo function
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  // Add a new todo
  const addTodo = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: newTodoText }),
      });
      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
      setNewTodoText(""); // Clear the input field after adding
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="list-todo">
      <table className="todo-table">
        <thead>
          <tr>
            <th className="todo-header">Description</th>
            <th className="todo-header">Edit</th>
            <th className="todo-header">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td className="todo-description">{todo.description}</td>
              <td className="todo-action">
                <EditTodo todo={todo} />
              </td>
              <td className="todo-action">
                <button
                  className="todo-button todo-delete"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Section for adding a new todo */}
      <div>
        {/* <input
          type="text"
          placeholder="Enter new todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button className="todo-button" onClick={addTodo}>
          Add
        </button> */}
      </div>
    </div>
  );
};

export default ListTodos;
