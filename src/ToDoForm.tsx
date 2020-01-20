import React, { useRef, useState } from 'react';
import shortid from 'shortid';

import { ToDoFormInterface, ToDoInterface } from './interfaces';

const ToDoForm = (props: ToDoFormInterface) => {
    const [formState, setFormState] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(event.target.value);
    }
    const handleKeypress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const id = shortid.generate();
            const newToDo: ToDoInterface = {
                id,
                text: formState,
                isCompleted: false,
            }
            props.handleToDoCreate(newToDo);
            setFormState('')
        }
    }
    return (
        <div>
            <input
                className="input"
                ref={inputRef}
                value={formState}
                type="text"
                placeholder="Enter new todo"
                onChange={event => handleInputChange(event)}
                onKeyPress={event => handleKeypress(event)}
            />
        </div>
    );
}

export default ToDoForm;
