import './TodosLoading.css'


function TodosLoading(){
    return (
        <div className='loading-content'>
        <span className={`check--loading Icon`}></span>
        <p className={`text-todo--loading`}></p>
        <span className='delete--loadin'>
          </span>
      </div>
    )
}


export { TodosLoading };