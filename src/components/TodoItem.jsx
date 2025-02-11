function TodoItem({ itemName, itemDate, handleDeleteItem }) {
  return (
    <div className="container">
      <div className="row my-row ">
        <div className="col-5 m-auto itemName">{itemName}</div>
        <div className="col-4 m-auto">{itemDate}</div>
        <div className="col-3  text-center">
          <button type="button" className="btn btn-danger my-btn" onClick={()=>handleDeleteItem(itemName)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
