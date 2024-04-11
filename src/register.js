import React from "react";
import "./App.css";
import logo from "./components/assets/Logo CleanEarth.svg";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1 className="clearth">LEARTH</h1>
      </div>

      <h3>CREATE AN ACCOUNT</h3>
      <div className="center">
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          className="form-group"
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          className="form-group"
        />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className="form-group"
        />
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Alamat"
          className="form-group"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          className="form-group"
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="form-group"
        />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="form-group"
        />
      </div>
      <button onClick={() => navigate("/login")}>SIGN UP</button>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}

export default Register;
