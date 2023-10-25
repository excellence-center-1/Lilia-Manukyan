import React, { useState } from "react";
import "./EditTodo.css";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="custom-button"
        onClick={() => {
          document.getElementById(`modal-${todo.todo_id}`).style.display = "block";
        }}
      >
        Edit
      </button>

      <div className="custom-modal" id={`modal-${todo.todo_id}`}>
        <div className="custom-modal-content">
          <div className="custom-modal-header">
            <h4>Edit Todo</h4>
            <span
              className="custom-close-button"
              onClick={() => setDescription(todo.description)}
            >
              &times;
            </span>
          </div>

          <div className="custom-modal-body">
            <input
              type="text"
              className="custom-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="custom-modal-footer">
            <button
              type="button"
              className="custom-button custom-edit-button"
              onClick={(e) => updateDescription(e)}
            >
              Edit
            </button>
            <button
              type="button"
              className="custom-button custom-close-button"
              onClick={() => setDescription(todo.description)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
