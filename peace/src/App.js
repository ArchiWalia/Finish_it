import React, {useState, useEffect } from "react";


import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("works")) || [];
  const [input, setInput] = useState("");
  const [works, setWorks] = useState((initialState));
  const [editTodo, setEditTodo] = useState(null);

 useEffect(() => {
  localStorage.setItem("works", JSON.stringify(works));
 }, [works]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />  
        </div>
        <div>
          <Form
          input = {input}
          setInput = {setInput}
          works={works}
          setWorks={setWorks}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList 
          works={works} 
          setWorks={setWorks}
          setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
