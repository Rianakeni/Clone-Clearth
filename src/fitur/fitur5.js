import React from "react";
import "../App.css";
import logo from "../components/assets/Logo CleanEarth.svg";
import SideBarButton1 from "../sidebar1.png";
import SideBarButton2 from "../sidebar2.png";
import SideBarButton3 from "../sidebar3.png";
import sampah from "../components/assets/sampah1.png";
import { useNavigate } from "react-router-dom";
import data from "../components/data.json";

function Fitur1() {
  const navigate = useNavigate();
  return (
    <div className="scroll">
      <div className="container App">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div>
          <h2 className="clearth">LEARTH</h2>
        </div>
        <div className="transparent-container">
          <h2 className="tempat2">TEMPAT SAMPAH A</h2>
          <div>
            <img src={sampah} className="imagefeat" alt="image feat" />
            <h3 className="tempattext">
              <strong>Alamat:</strong>
              {data.tempatSampahE.alamat}
            </h3>
            <h3 className="tempattext">
              <strong>Deskripsi:</strong>
              {data.tempatSampahE.deskripsi}
            </h3>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="button-container">
          <button className="buttontiga" onClick={() => navigate("/homepage")}>
            <img src={SideBarButton1} alt="Button 1" />
          </button>
          <button
            className="buttontiga"
            onClick={() => navigate("/fitursampah")}
          >
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
export default Fitur1;
