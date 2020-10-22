import React from "react";

const Todos = () => {
  let todoStore = JSON.parse(localStorage.getItem("todos"));
   
  const deleteTodo = (e) =>{
    todoStore =  JSON.parse(localStorage.getItem("todos"));
    let indexSelected = e.currentTarget.parentElement.querySelector("span").textContent;
    todoStore.splice(indexSelected, 1);
    localStorage.setItem("todos", JSON.stringify(todoStore));
    window.location.reload();
  }

  return (
    <>
      <h1>Todos</h1>
      {todoStore.map((todo, index) => {
        return (
          <section key={index}>
            <h2 key={todo.id+"1"}>
              <span key={todo.id+"2"}>{index}</span> :: {todo.name}
            </h2>
            <button className="delete" onClick={deleteTodo}>Delete</button>{" "}
          </section>
        );
      })}
    </>
  );
};

export default Todos;
