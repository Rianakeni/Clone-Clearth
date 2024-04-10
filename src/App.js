import "./App.css";
import Landingpage from "./landingpage.js";
import Login from "./login.js";
import Register from "./register.js";
import Homepage from "./homepage.js";
import Map from "./maps.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/maps" element={<Map />} />
      </Routes>
    </Router>
  );
}


export default App ;
