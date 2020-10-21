import React from "react";

const TodoForm = ({ setInputValue, inputValue, setTodos,todos }) => {
  const getInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const submitTodos=(event)=>{
    event.preventDefault()
    setTodos([
        ...todos,
        {
            id:Math.random(100),
            name:inputValue
        }
    ])
  }
  return (
    <>
      <form onSubmit={submitTodos} >
        <input
          type="text"
          name="todo"
          value={inputValue}
          id="todo-input"
          onChange={getInputValue}
        />
        <input type="submit" value="Add a new todo" />
      </form>
    </>
  );
};

export default TodoForm;
