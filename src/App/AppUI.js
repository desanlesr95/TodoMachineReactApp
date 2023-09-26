import { TodoFormContainer } from '../TodoFormContainer';
import { TodoContainer } from '../TodoContainer';
import { TodoInput } from '../TodoInput';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList}  from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import React from 'react';


function AppUI(){
  const {loading,error,todos,searchValue,completeTodo,deleteTodo} = React.useContext(TodoContext)
    return (
        <>
          <TodoFormContainer>
            <TodoInput/>
            <CreateTodoButton/>
          </TodoFormContainer>
    
          <TodoContainer>
            <TodoCounter/>
            <TodoSearch/>
    
            <TodoList>
                  { loading && 
                    <>
                      <TodosLoading/> 
                      <TodosLoading/>
                      <TodosLoading/>
                  
                    </>
                  }
                  { error && <TodosError/>}
                  { (!loading && todos.length === 0) && <EmptyTodos/>}

                  {todos.filter(
                    todo => todo.text.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1
                  )
                  .map(todo =>(
                    <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={ todo.completed}
                    todos={todos}
                    onComplete={
                      () => completeTodo(todo.text)
                    }
                    onDelete={
                      () => deleteTodo(todo.text)
                    }  
                    />
                    )
                  )}
                </TodoList>
            
          </TodoContainer>
          
          
          
        </>
      );
}


export { AppUI}