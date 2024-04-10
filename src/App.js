import "./App.css";
import Landingpage from "./landingpage.js";
import Login from "./login.js";
import Register from "./register.js";
import Homepage from "./homepage.js";
import Map from "./maps.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./profile.js";
import News1 from "./news/News1.js";
import News2 from "./news/News2.js";
import News3 from "./news/News3.js";
import News4 from "./news/News4.js";
import News5 from "./news/News5.js";
import News6 from "./news/News6.js";
import News7 from "./news/News7.js";
import News8 from "./news/News8.js";
import Fitursampah from "./fitursampah.js";
import Fitur1 from "./fitur/fitur1.js";
import Fitur2 from "./fitur/fitur2.js";
import Fitur3 from "./fitur/fitur3.js";
import Fitur4 from "./fitur/fitur4.js";
import Fitur5 from "./fitur/fitur5.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/maps" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news1" element={<News1 />} />
        <Route path="/news2" element={<News2 />} />
        <Route path="/news3" element={<News3 />} />
        <Route path="/news4" element={<News4 />} />
        <Route path="/news5" element={<News5 />} />
        <Route path="/news6" element={<News6 />} />
        <Route path="/news7" element={<News7 />} />
        <Route path="/news8" element={<News8 />} />
        <Route path="/fitursampah" element={<Fitursampah />} />
        <Route path="/fitur1" element={<Fitur1 />} />
        <Route path="/fitur2" element={<Fitur2 />} />
        <Route path="/fitur3" element={<Fitur3 />} />
        <Route path="/fitur4" element={<Fitur4 />} />
        <Route path="/fitur5" element={<Fitur5 />} />
      </Routes>
    </Router>
  );
}


export default App ;
