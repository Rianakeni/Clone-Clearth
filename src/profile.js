// UserProfile.js

import React from "react";
import logo from "./components/assets/Logo CleanEarth.svg";
import profile from "./components/assets/profile.svg";
import SideBarButton1 from "./sidebar1.png";
import SideBarButton2 from "./sidebar2.png";
import SideBarButton3 from "./sidebar3.png";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  return (
    <div className="profile-container">
      <div className="navbar">
        <img src={logo} alt="clearth" className="logo" />
        <h1 className="learth">LEARTH</h1>
      </div>
      <div className="background">
        <div className="center">
          <img src={profile} alt="User Profile Picture" />
        </div>
      </div>
      <div className="user-info">
        <div className="containerprofile">
          <div className="info-field">
            <label htmlFor="first-name">First name</label>
            <input
              type="text"
              id="first-name"
              placeholder="enter your first name"
            />
          </div>
          <div className="info-field">
            <label htmlFor="last-name">Last name</label>
            <input
              type="text"
              id="last-name"
              placeholder="enter your last name"
            />
          </div>
          <div className="info-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="enter your username"
            />
          </div>
          <div className="info-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="enter your email" />
          </div>
          <div className="info-field">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" placeholder="enter your address" />
          </div>
        </div>
      </div>
      <div className="center">
        <div className="button-container">
          <button className="buttontiga" onClick={() => navigate("/homepage")}>
            <img src={SideBarButton1} alt="Button 1" />
          </button>
          <button className="buttontiga" onClick={() => navigate("/fitursampah")}>
            <img src={SideBarButton2} alt="Button 2" />
          </button>
          <button className="buttontiga">
            <img src={SideBarButton3} alt="Button 3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
