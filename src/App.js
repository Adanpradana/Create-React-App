import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./routes/About";
import Homepage from "./routes/Homepage";
import React from "react";
import Navbar from "./components/Navbar.components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<h3>TESTING PROFIL</h3>}></Route>
        <Route path="profile/person" element={<h1>TEST PERSON</h1>} />
      </Routes>
    </>
  );
}

export default App;
