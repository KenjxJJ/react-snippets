import React, { useState, useEffect } from "react";

const TodoGetter = () => {
  const [data, setData] = useState([]); // returns ininital state , setState action

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  });

  return (
    <>
      <h2>My Todos</h2>

      {data.map((data) => (
        <div key={data.id}>
          <h1>
            <span>{data.id} --:</span>
            {data.title}
          </h1>
        </div>
      ))}
    </>
  );
};
export default TodoGetter;
