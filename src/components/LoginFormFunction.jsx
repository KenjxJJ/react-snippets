import React, { useState } from "react";

const LoginForm =()=> {
 
  const [email, setEmail ]= useState("")
  const [password, setPassword ]= useState("")



 const getEmail = (e) => {
    setEmail( e.target.value );
    console.log(email);
  };

 const getPassword=(e)=> {
    setPassword( e.target.value );
    console.log(password);
  }

  const submitData = (e) => {
    e.preventDefault();
    const user = {
      email:email,
      password:password
    };
    console.log(user);
    // can use fetch api to post to an api endpoint login to backend
  };
  // emmet
  
    return (
      <>
        {/* Our JSX */}

        <form className="form" onSubmit={submitData}>
        <h1> Login Form</h1>
          <input
            type="email"
            onChange={getEmail}
            placeholder="Enter Email"
          />
          <input
            type="password"
            onChange={getPassword}
            placeholder="Enter you password"
          />
          <input type="submit" value="Login" />
        </form>
      </>
    );
 
}

export default LoginForm;
