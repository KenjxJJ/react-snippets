import React from "react";

const Todos = ({todos}) => {
  return (
    <>
    {
        todos.map((todo, index)=>(
            <h1 key={todo.id}><span>{index}</span> ::{todo.name}</h1>
        ))
    }
      <h1>Todos</h1>
    </>
  );
};
export default Todos;
