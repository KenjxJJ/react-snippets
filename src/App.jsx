import React, {useState} from "react";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

function App() {

  const [inputValue, setInputValue]=useState("")
  const [todos,setTodos]=useState([])

  return (
    <div className="App">
      <div className="App-header">
        <h1>Todo App</h1>
        <TodoForm  

        inputValue={inputValue} 
        setInputValue={setInputValue}
        todos={todos}
        setTodos={setTodos}
        />
        <Todos
        todos={todos}
        />
      </div>
    </div>
  );
}

export default App;
