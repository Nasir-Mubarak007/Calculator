import React, { useEffect, useRef } from "react";

export default function Form({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) {
  const updateTodo = (task, id, completed) => {

    const inputRef = useRef();
    const newTask = todos.map((todo) =>
      todo.id === id ? { task, id, completed } : todo
    );
    setTodos(newTask);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.task);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const inputChange = (event) => {
    setInput(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();

    if (!editTodo) {
      setTodos([...todos, { id: Date.now(), task: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form>
      <input
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        onChange={inputChange}
        type="text"
        placeholder="Enter A Task"
        className="task-input"
        value={input}
        required
        ref={inputRef}
      />
      <button className="button-add" onClick={formSubmit}>
        {editTodo ? "OK" : "Add Task"}
      </button>
    </form>
  );
}
