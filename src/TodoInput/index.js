import { TodoContext } from '../TodoContext';
import './TodoInput.css'
import React from 'react';

function TodoInput(){
    const { todoTextForm,setTodoTextForm} = React.useContext(TodoContext)
    return (
        <input type="text" placeholder='Inserta la tarea' value={todoTextForm} onChange={
            (event) => setTodoTextForm(event.target.value)
        }/>
    )
}

export { TodoInput};