// Imports
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// CSS
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Homepage from "./components/Homepage";
import Tweet from "./components/Tweet";
import Stock from "./components/Stock";
import About from "./components/About";
import NavbarMenu from "./components/NavbarMenu";

// Functions
function App() {
  return (
    <div className="bg-dark">
      <Router>
        <NavbarMenu />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<Tweet />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
