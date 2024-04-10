import React from 'react';
import './App.css';
import logo from './components/assets/Logo CleanEarth.svg';
import SideBarButton1 from './sidebar1.png';
import SideBarButton2 from './sidebar2.png';
import SideBarButton3 from './sidebar3.png';
import sampah from './components/assets/sampah1.png';
import { useNavigate } from "react-router-dom";

function Fitursampah(){
    const navigate = useNavigate();
    return (
        <div className="scroll">
          <div className="container App">
            <div className="logo-container">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h2 className="clearth">LEARTH</h2>
                    <h2 className='tempat'>TEMPAT SAMPAH TERDEKAT</h2>
                </div>
                <div className="feature-container">
                    <div className="feature-button">
                        <button className="buttontiga" onClick={() => navigate("/fitur1")}>
                            <img src={sampah} alt="Feature 1" />
                        </button>
                    </div>
                    <div className="feature-button"onClick={() => navigate("/fitur1")}>
                        <button className="buttontiga">
                            <img src={sampah} alt="Feature 2" />
                        </button>
                    </div>
                    <div className="feature-button"onClick={() => navigate("/fitur1")}>
                        <button className="buttontiga">
                            <img src={sampah} alt="Feature 3" />
                        </button>
                    </div>
                    <div className="feature-button"onClick={() => navigate("/fitur1")}>
                        <button className="buttontiga">
                            <img src={sampah} alt="Feature 4" />
                        </button>
                    </div>
                    <div className="feature-button"onClick={() => navigate("/fitur1")}>
                        <button className="buttontiga">
                            <img src={sampah} alt="Feature 5" />
                        </button>
                    </div>
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
export default Fitursampah;

