import TodoItem from "./TodoItem";

function TodoItems({ todoItems, handleDeleteItem }) {
  return (
    <div className="items-container">
      {todoItems.map(item => <TodoItem handleDeleteItem={handleDeleteItem} itemName={item.name} itemDate={item.dueDate}/>)}
    </div> 
  );
}

export default TodoItems;
