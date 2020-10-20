import React, { Component } from "react";

// use fetch .....

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
      });
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
        <h1>Life Cycle methods</h1>

        {this.state.data.map((data) => (
          <div key={data.id}>
            <h1>
              <span>{data.id} --:</span>
              {data.title}
            </h1>
          </div>
        ))}
      </>
    );
  }
}

export default LifeCycle;
