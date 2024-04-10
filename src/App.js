import "./App.css";
import Landingpage from "./landingpage.js";
import Login from "./login.js";
import Register from "./register.js";
import Homepage from "./homepage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./profile.js";
import News1 from "./News1.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news1" element={<News1 />} />
      </Routes>
    </Router>
  );
}

export default App;
