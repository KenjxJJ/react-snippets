import React from "react";

const TodoForm = (props) => {
  
    const getInputValue = () =>{
        props.setInputValue(props.inputValue);
    }
    return (
    <>
      <form>
        <input type="text" placeholder="Type your next task" onChange = {getInputValue()}/>
        <button type="submit">Add ToDo</button>
      </form>
    </>
  );
};

export default TodoForm;
