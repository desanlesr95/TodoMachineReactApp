import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider({children}){
    const {item:todos,saveItem:saveTodos,loading,error} = useLocalStorage('TODOS_V1',[])
  const [searchValue, setSearchValue] = React.useState('');
  const [todoTextForm, setTodoTextForm] = React.useState('');
  

  const completedTodos = todos.filter(todo => todo.completed).length; 
  const totalTodos = todos.length;


  const completeTodo =(text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo =(text) =>{
    const newTodos = [...todos];
    const updatedTodos = newTodos.filter(todo => todo.text !== text);
    saveTodos(updatedTodos);
  }

  const addTodo = (text) =>{
    const newTodos = [...todos];
    if(text !== ''){
        newTodos.push({
            completed:false,
            text:text
        });
    }
    setTodoTextForm('');
    saveTodos(newTodos);
  }



    return (
        <TodoContext.Provider value={{ completedTodos,totalTodos,searchValue,setSearchValue,completeTodo,deleteTodo,todos,loading,error,
        todoTextForm,setTodoTextForm,addTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext,TodoProvider}