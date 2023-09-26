import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';
function CreateTodoButton(){
    const { todoTextForm,addTodo} = React.useContext(TodoContext)
    return (
        <button className="createTodoButton" onClick={(event)=>{
            if(todoTextForm != ''){
                addTodo(todoTextForm)
            }
        }}>+</button>
    )
}


export { CreateTodoButton };