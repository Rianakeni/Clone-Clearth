import "./App.css";
import Backbutton from "./components/assets/backbuttonClearth.svg";
import SearchBar from "./components/assets/SearchBar.js";
import Card from "./components/assets/Card.js";
import SideBarButton1 from "./sidebar1.png";
import SideBarButton2 from "./sidebar2.png";
import SideBarButton3 from "./sidebar3.png";

function Homepage() {
  return (
    <div>
      <div className="contentWrapper">
        <img src={Backbutton} alt="backbtn" />
        <SearchBar />
      </div>
      <div className="contentWrapper-card">
        <div className="customwrapper">
          <Card />
        </div>
        <div className="customwrapper">
          <Card />
        </div>
      </div>
      <div className="contentWrapper-card">
        <div className="customwrapper">
          <Card />
        </div>
        <div className="customwrapper">
          <Card />
        </div>
      </div>
      <div className="contentWrapper-card">
        <div className="customwrapper">
          <Card />
        </div>
        <div className="customwrapper">
          <Card />
        </div>
      </div>
      <div className="center">
        <div className="button-container">
          <img src={SideBarButton1} alt="Button 1" />
          <img src={SideBarButton2} alt="Button 2" />
          <img src={SideBarButton3} alt="Button 3" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
