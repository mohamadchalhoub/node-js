import React from "react";
import { useState } from "react";
import "./LoginStyles.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()
    const info = { email, password };
    if (!email || !password) {
      console.log("email and password are required");
    } else {
      const response = await fetch(`http://localhost:2000/users`, {
        method: "POST",
        body: JSON.stringify(info),
        headers: "application/json",
      });
      const json = await response.json();
      if (!response) {
        setError(error);
      }
      if (response.ok) {
        console.log(json)
        localStorage.setItem('token', json.token);
        navigate('/blogs')
      }
    }
  }

    return (
      <div className="login-container">
        <h1>LOGIN</h1>
        <h2>Welcome Back to Blogs</h2>
        <span>It's great to have you back !</span>
        <form className="form-container" onSubmit={login}>
          <label htmlFor="Email"></label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label
            htmlFor="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></label>
          <input type="password" placeholder="Password"></input>
          <div className="button-container">
            <button>Login</button>
            <button>Create account</button>
          </div>
        </form>
      </div>
    );
  };


export default Login;
