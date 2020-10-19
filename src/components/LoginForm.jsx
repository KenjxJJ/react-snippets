import React, { Component } from "react";

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
    this.getPassword = this.getPassword.bind(this);
  }
  getEmail = (e) => {
    this.setState({ email: e.target.value });
    console.log(this.state.email);
  };

  getPassword(e) {
    this.setState({ password: e.target.value });
    console.log(this.state.password);
  }

  submitData = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);
    // can use fetch api to post to an api endpoint login to backend
  };
  // emmet
  render() {
    return (
      <>
        {/* Our JSX */}

        <form className="form" onSubmit={this.submitData}>
          <h1> Login Form</h1>
          <input
            type="email"
            onChange={this.getEmail}
            placeholder="Enter Email"
          />
          <input
            type="password"
            onChange={this.getPassword}
            placeholder="Enter you password"
          />
          <input type="submit" value="Login" />
        </form>
      </>
    );
  }
}

export default LoginForm;
