import React, { useState } from 'react';

const Task = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");
  const [editIndex, setEditIndex] = useState(null);

//add or update
  const addOrUpdateTodo = () => {
    if (task === "") return;  // null string
  
    if (editIndex !== null) {
      let newTodos = [...todos];
      newTodos[editIndex] = task;
      setTodos(newTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, task]);
    }
  
    setTask("");
  };


  //Delete todo

  const deleteTodo = (index:any) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


// Edit task
const editTodo = (index:any) => {
    setTask(todos[index]);
    setEditIndex(index);
  };


  return (
    <div>
      <h1>React TODO APP</h1>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addOrUpdateTodo}>
        {editIndex !== null ? "Update" : "Add"}
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} >
            {todo}
            <button
              onClick={() => editTodo(index)}
              
            >
              ✏️
            </button>
            <button
              onClick={() => deleteTodo(index)}
             
            >
              ❌
            </button>
          </li>
        ))}
      </ul>



    </div>
  );
};

export default Task;
