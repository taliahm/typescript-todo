export interface ToDoInterface {
    id: string;
    text: string;
    isCompleted: boolean;
}

export interface ToDoFormInterface {
    todos: ToDoInterface[];
    handleToDoCreate: (todo: ToDoInterface) => void;
}

export interface ToDoListInterface {
    handleToDoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleToDoRemove: (id: string) => void;
    handleToDoComplete: (id: string) => void;
    todos: ToDoInterface[];
}

export interface ToDoItemInterface {
    handleToDoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleToDoRemove: (id: string) => void;
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleToDoComplete: (id: string) => void;
    todo: ToDoInterface;
}