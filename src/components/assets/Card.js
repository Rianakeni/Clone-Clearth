import React from "react";
import "../../App.css";
import card from "./cardimage.png";

function Card() {
  return (
    <div className="card">
      <div className="card-grid">
        <div className="top-grid">
          <div className="imagesampah">
            <img src={card} alt="card" className="" />
          </div>
        </div>
        <div className="bottom-grid">
          <div className="card-wrapper">
            <div className="title-style">Title</div>
            <div className="tanggal-style">tanggal</div>
            <div className="desk-style">
              Supporting or descriptive text for the card goes here like a pro.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
