import React, { useState } from 'react';

const Todo = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState(5);
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (task.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      task,
      priority,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setTask('');
    setPriority(5);
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(Number(e.target.value))}
        >
          <option value={1}>1 (Highest)</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5 (Lowest)</option>
        </select>
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.task} - Priority: {todo.priority}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
