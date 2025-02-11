import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  let [todoItems, setTodoItems] = useState([]);

  let handleAddItem = (itemName, itemDate) => {
    if (itemName == "" || itemDate == "") alert("Enter valid input");
    else {
      let newTodoItems = [...todoItems, { name: itemName, dueDate: itemDate }];
      setTodoItems(newTodoItems);
    }
  };

  let handleDeleteItem = (itemToDelete) => {
    let newTodoItems = todoItems.filter(item => item.name !== itemToDelete)
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container border border-black rounded m-4">
      <AppName />
      <AddTodo handleAddItem={handleAddItem} />
      {todoItems.length==0 && <WelcomeMessage/>}
      <TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteItem}/>
    </center>
  );
};

export default App;
