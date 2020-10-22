import React, {useState} from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {

  const [ inputValue, setInputValue ] = useState("");
  return (
    <div className="App">
      <div className="App-header">
        <TodoForm inputValue={inputValue} setInputValue ={setInputValue}/>
        <Todos/>
      </div>
    </div>
  );
}

export default App;
