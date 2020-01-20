import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import "bulma/css/bulma.css";
import "./App.css";

import { ToDoInterface } from "./interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDoInterface[]>([]);
  const toDo = [
    {
      id: "1",
      text: "to do",
      isCompleted: false
    },
    {
      id: "2",
      text: "another one",
      isCompleted: false
    }
  ];

  const handleToDoCreate = (todo: ToDoInterface) => {
    console.log("is THIS happening tho?", todo);
    const newToDoState: ToDoInterface[] = [...todos];
    newToDoState.push(todo);
    setTodos(newToDoState);
  };
  const handleToDoUpdate = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const newToDoState: ToDoInterface[] = [...todos];
    newToDoState.find((todo: ToDoInterface) => todo.id === id)!.text =
      event.target.value;
    setTodos(newToDoState);
  };
  const handleToDoRemove = (id: string) => {
    const newToDoState: ToDoInterface[] = [...todos];
    const haveRemovedToDo: ToDoInterface[] = newToDoState.filter(
      todo => todo.id !== id
    );
    setTodos(haveRemovedToDo);
  };
  const handleToDoComplete = (id: string) => {
    const todo: ToDoInterface = todos.filter(todo => todo.id === id)[0];
    todo.isCompleted = !todo.isCompleted;
    const newToDoState: ToDoInterface[] = [...todos];
    const removeTodo: ToDoInterface[] = newToDoState.filter(
      todo => todo.id !== id
    );
    removeTodo.push(todo);
    setTodos(removeTodo);
  };
  return (
    <div className="App">
      <div className="box">
        <h1 className="title">💁🏻‍♀️ Do the things!</h1>
        <ToDoForm todos={toDo} handleToDoCreate={handleToDoCreate} />
      </div>
      <ToDoList
        handleToDoComplete={handleToDoComplete}
        handleToDoRemove={handleToDoRemove}
        handleToDoUpdate={handleToDoUpdate}
        todos={todos}
      />
    </div>
  );
};

export default App;
