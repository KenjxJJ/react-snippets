import React, {useState} from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {

  const [ inputValue, setInputValue ] = useState("");
  const [ todos ] =useState([]);
 
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="header">ToDo App</h1>
        <TodoForm inputValue={inputValue} setInputValue ={setInputValue}
         todos={todos}/>
        <Todos/>
      </div>
    </div>
  );
}

export default App;
