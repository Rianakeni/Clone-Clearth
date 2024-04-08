import React from "react";
import logo from "./components/assets/Logo CleanEarth.svg";
import earth from "./components/assets/earth.svg";
import { useNavigate } from "react-router-dom";

function Landingpage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h2 className="clearth">LEARTH</h2>
        <div className="menu">
          <nav>
            <button onClick={() => navigate("/login")}>LOGIN</button>
          </nav>
        </div>
      </div>
      <div className="isi">
        <h1>CLEARTH</h1>
      </div>
      <div className="isi">
        <p>Start your CLEARTH journey</p>
      </div>
      <div>
        <button onClick={() => navigate("/register")}>GET STARTED</button>
      </div>
      <div className="isi">
        <img src={earth} alt="earth1" className="earth" />{" "}
        {/* Corrected img tag */}
      </div>
    </div>
  );
}

export default Landingpage;
