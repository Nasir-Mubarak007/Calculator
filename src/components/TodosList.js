import React from "react";
export default function Todos({ todos, setTodos, setEditTodo }) {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const handleEdit = ({ id }) => {
    const findTask = todos.find((todo) => todo.id === id);
    setEditTodo(findTask);
  };

  const handleComplete = (todo) => {
    const Complete = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      }

      return item;
    });

    setTodos(Complete);
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-of-tasks" key={todo.id}>
          <input
            type="text"
            value={todo.task}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />

          <div>
            <button className="btn-complete ">
              <i className=" fa fa-edit" onClick={() => handleComplete(todo)}>
                <input type="checkbox" />
              </i>
            </button>
            <button className="btn-edit " onClick={() => handleEdit(todo)}>
              edit
            </button>
            <button className="btn-delete " onClick={() => handleDelete(todo)}>
              X
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}
