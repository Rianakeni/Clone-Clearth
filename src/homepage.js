import "./App.css";
import React from "react";
import SearchBar from "./components/assets/SearchBar.js";
import Card from "./components/assets/Card.js";
import SideBarButton1 from "./sidebar1.png";
import SideBarButton2 from "./sidebar2.png";
import SideBarButton3 from "./sidebar3.png";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="scroll">
      <div className="contentWrapper">
        <SearchBar />
      </div>
      <div className="contentWrapper-card">
        <div className="customwrapper">
          <button className="buttoncard" onClick={() => navigate("/news1")}>
            <Card />
          </button>
        </div>
        <div className="customwrapper">
          <button className="buttoncard" onClick={() => navigate("/news1")}>
            <Card />
          </button>
        </div>
        <div className="customwrapper">
          <button className="buttoncard" onClick={() => navigate("/news1")}>
            <Card />
          </button>
        </div>
        <div className="customwrapper">
          <button className="buttoncard" onClick={() => navigate("/news1")}>
            <Card />
          </button>
        </div>
      </div>
      <div className="contentWrapper-card">
        <div className="customwrapper">
          <button className="buttoncard" onClick={() => navigate("/news1")}>
            <Card />
          </button>
        </div>
        <div className="customwrapper">
          <button className="buttoncard" onClick={() => navigate("/news1")}>
            <Card />
          </button>
        </div>
        <div className="customwrapper">
          <button className="buttoncard" onClick={() => navigate("/news1")}>
            <Card />
          </button>
        </div>
        <div className="customwrapper">
          <button className="buttoncard" onClick={() => navigate("/news1")}>
            <Card />
          </button>
        </div>
      </div>
      <div className="center">
        <div className="button-container">
          <button className="buttontiga">
            <img src={SideBarButton1} alt="Button 1" />
          </button>
          <button className="buttontiga" onClick={()=>navigate("/fitursampah")}>
            <img src={SideBarButton2} alt="Button 2" />
          </button>
          <button className="buttontiga" onClick={() => navigate("/profile")}>
            <img src={SideBarButton3} alt="Button 3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
