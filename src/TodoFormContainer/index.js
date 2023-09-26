import './TodoFormContainer.css'

function TodoFormContainer({children}){
    return (
      <div className="form"> 
        <h1>Añadir nueva tarea</h1>
        {children}
      </div>
    );
  }

  
  export { TodoFormContainer};