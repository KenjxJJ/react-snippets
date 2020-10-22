import React from "react";

const TodoForm = ({ setInputValue, inputValue, todos }) => {
  const getInputValue = (event) => {
    setInputValue(event.target.value);
  };
 
  const createTodoStore = () => {
    let todoStore = JSON.parse(localStorage.getItem("todos"));
    if (todoStore === null) {
      localStorage.setItem("todos", JSON.stringify(todos));
      return todoStore;
    } else {
      return todoStore;
    }
  };

  let todoStore = createTodoStore();

  const submitTodos = (event) => {
    event.preventDefault();
    let newTodoList = [
      ...todos,
      {
        id: Math.random(100),
        name: inputValue,
      }
    ];
    if (inputValue.trim().length !== 0 ) {
     
      todoStore.push(...newTodoList)
      // console.log(todoStore);
      localStorage.setItem("todos", JSON.stringify(todoStore));
      window.location.reload();
    } else {
      alert("Your todo is empty");
      return;
    }
  };
  return (
    <>
      <form onSubmit={submitTodos}>
        <input
          type="text"
          name="todo"
          value={inputValue}
          id="todo-input"
          onChange={getInputValue}
        />
        <button className="add-new-btn" type="submit">Add a new todo</button>
      </form>
    </>
  );
};

export default TodoForm;
