import React from "react";
import "./App.css";
import logo from "./components/assets/Logo CleanEarth.svg";
import garbage from "./components/garbage.svg";
import { useNavigate } from "react-router-dom";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
      navigate("/homepage");
    } else {
      alert("Invalid username or password");
    }
  };
  const navigate = useNavigate();
  return (
    <div className="card1">
      <div className="navbar">
        <img src={logo} alt="clearth" className="logo" />
        <h1 className="clearth">LEARTH</h1>
      </div>
      <div>
        <img src={garbage} alt="garbage" className="garbage" />
      </div>

      <h1>WELCOME BACK!</h1>
      <p>PLEASE LOG IN TO CONTINUE</p>

      <div className="center">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className="form-group"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="form-group"
        />
      </div>

      <p>
        Don't have an account? <a href="/register">Sign up</a>
      </p>
      <button onClick={handleSubmit}>LOG IN</button>
    </div>
  );
}

export default Login;
