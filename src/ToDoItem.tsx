import React from "react";

import { ToDoItemInterface } from "./interfaces";

const ToDoItem = (props: ToDoItemInterface) => {
  const { todo, handleToDoUpdate, handleTodoBlur } = props;
  console.log(todo.isCompleted, "todo??");
  return (
    <div className="columns is-1">
      <div className="column is-1 is-offset-2">
        <button className="button" onClick={() => props.handleToDoComplete(props.todo.id)}>
          <span className={todo.isCompleted ? "" : "hide"}>
            <span className="fas fa-check"></span>
          </span>
          <span className={todo.isCompleted ? "hide" : ""}>
            <span className="far fa-square"></span>
          </span>
        </button>
      </div>
      <div className="column is-6">
        <input
          className="input"
          type="text"
          onBlur={handleTodoBlur}
          value={todo.text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleToDoUpdate(e, todo.id)
          }
        />
      </div>
      <div className="column is-1">
        <button className="button" onClick={() => props.handleToDoRemove(props.todo.id)}><span className="far fa-times-circle"></span></button>
      </div>
    </div>
  );
};

export default ToDoItem;
