import React from 'react';

import { ToDoListInterface } from './interfaces';
import ToDoItem from './ToDoItem';

const ToDoList = (props: ToDoListInterface) => {
    const { handleToDoUpdate, handleToDoRemove, handleToDoComplete } = props;
    const handleTodoBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value.length === 0) {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    }
    return (
        <div>
            <ul>
                {props.todos.map(todo => {
                    return (
                    <li key={todo.id}>
                        <ToDoItem
                            handleToDoComplete={handleToDoComplete}
                            handleTodoBlur={handleTodoBlur}
                            handleToDoRemove={handleToDoRemove}
                            handleToDoUpdate={handleToDoUpdate}
                            todo={todo}
                        />
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ToDoList;