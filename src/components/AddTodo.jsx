import { useRef } from "react";

function AddTodo({handleAddItem}) {

  let taskNameElement = useRef();
  let dueDateElement = useRef();

  let newTaskAddHandler = (event) => {
    event.preventDefault();
    const taskName = taskNameElement.current.value;
    const taskDate = dueDateElement.current.value;
    taskNameElement.current.value = "";
    dueDateElement.current.value = "";
    handleAddItem(taskName,taskDate);
  }

  return <div className="container">
    <form className="row my-row" onSubmit={(event)=>newTaskAddHandler(event)}>
      <div className="col-5 m-auto">
        <input className="" type="text" ref={taskNameElement} placeholder="Enter task "/>
      </div>
      <div className="col-4 m-auto">
        <input className="" type="date" ref={dueDateElement}/>
      </div>
      <div className="col-3">
        <button className="btn btn-success my-btn ">
          Add
        </button> 
      </div> 
    </form>
  </div>
}

export default AddTodo;
