import './TodoContainer.css';
function TodoContainer({children}){
    return (
      <div className="container">
        {children}
      </div>
    );
  }

  
  export { TodoContainer};